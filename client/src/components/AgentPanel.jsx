import { useEffect, useMemo, useRef, useState } from 'react';
import { io } from 'socket.io-client';

const SOCKET_URL = 'http://localhost:4000';

export default function AgentPanel() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const listRef = useRef(null);

  const socket = useMemo(() => io(SOCKET_URL, { autoConnect: true }), []);

  useEffect(() => {
    socket.emit('chat:join', { role: 'agent' });

    const onHistory = (history) => setMessages(history);
    const onNew = (entry) => setMessages((prev) => [...prev, entry]);

    socket.on('chat:history', onHistory);
    socket.on('chat:new', onNew);

    return () => {
      socket.off('chat:history', onHistory);
      socket.off('chat:new', onNew);
      socket.disconnect();
    };
  }, [socket]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  const send = (event) => {
    event.preventDefault();
    const text = input.trim();

    if (!text) {
      return;
    }

    socket.emit('chat:send', { from: 'agent', text });
    setInput('');
  };

  return (
    <section className="agent-panel" aria-labelledby="agent-title">
      <h2 id="agent-title">Support Agent Panel</h2>
      <p>Use this panel for real-time replies during testing and operations.</p>

      <ul ref={listRef} className="agent-list" aria-live="polite">
        {messages.map((m) => (
          <li key={m.id} className={m.from === 'agent' ? 'from-agent' : 'from-customer'}>
            <span className="tag">{m.from}</span>
            <p>{m.text}</p>
          </li>
        ))}
      </ul>

      <form onSubmit={send} className="agent-form">
        <label htmlFor="agent-message">Reply as agent</label>
        <div className="row">
          <input
            id="agent-message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write a support response"
            required
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </section>
  );
}
