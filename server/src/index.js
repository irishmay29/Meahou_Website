import 'dotenv/config';
import express from 'express';
import http from 'http';
import cors from 'cors';
import mongoose from 'mongoose';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);

const PORT = Number(process.env.PORT || 4000);
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';
const MONGODB_URI = process.env.MONGODB_URI;

app.use(
  cors({
    origin: CLIENT_ORIGIN,
    credentials: true,
  })
);
app.use(express.json());

const messageSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, trim: true },
    from: { type: String, enum: ['customer', 'agent'], required: true },
  },
  { timestamps: true }
);

const Message = mongoose.model('Message', messageSchema);

let usingMongo = false;
const memoryMessages = [];

async function initDb() {
  if (!MONGODB_URI) {
    console.warn('MONGODB_URI not set. Using in-memory chat store.');
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    usingMongo = true;
    console.log('MongoDB connected.');
  } catch (error) {
    console.error('MongoDB connection failed, using in-memory chat store.', error.message);
  }
}

async function getHistory(limit = 100) {
  if (usingMongo) {
    const docs = await Message.find().sort({ createdAt: -1 }).limit(limit).lean();
    return docs
      .reverse()
      .map((doc) => ({
        id: String(doc._id),
        text: doc.text,
        from: doc.from,
        createdAt: doc.createdAt,
      }));
  }

  return memoryMessages.slice(-limit);
}

async function saveMessage(entry) {
  if (usingMongo) {
    const created = await Message.create({ text: entry.text, from: entry.from });
    return {
      id: String(created._id),
      text: created.text,
      from: created.from,
      createdAt: created.createdAt,
    };
  }

  memoryMessages.push(entry);

  if (memoryMessages.length > 1000) {
    memoryMessages.splice(0, memoryMessages.length - 1000);
  }

  return entry;
}

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'akamaipos-support-chat',
    storage: usingMongo ? 'mongodb' : 'memory',
    time: new Date().toISOString(),
  });
});

app.get('/api/messages', async (_req, res) => {
  const messages = await getHistory();
  res.json({ messages });
});

const io = new Server(server, {
  cors: {
    origin: CLIENT_ORIGIN,
    methods: ['GET', 'POST'],
  },
});

io.on('connection', async (socket) => {
  socket.emit('chat:history', await getHistory());

  socket.on('chat:join', (payload) => {
    const role = payload?.role === 'agent' ? 'agent' : 'customer';
    socket.data.role = role;
  });

  socket.on('chat:send', async (payload) => {
    const text = String(payload?.text || '').trim();
    const from = payload?.from === 'agent' ? 'agent' : 'customer';

    if (!text) {
      return;
    }

    const entry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      text,
      from,
      createdAt: new Date().toISOString(),
    };

    const saved = await saveMessage(entry);
    io.emit('chat:new', saved);
  });
});

initDb().finally(() => {
  server.listen(PORT, () => {
    console.log(`AkamaiPOS server running on http://localhost:${PORT}`);
  });
});
