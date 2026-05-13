import { useEffect, useMemo, useRef, useState } from 'react';
import { io } from 'socket.io-client';

const SOCKET_URL = 'http://localhost:4000';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [connected, setConnected] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const listRef = useRef(null);

  const socket = useMemo(() => io(SOCKET_URL, { autoConnect: true }), []);

  useEffect(() => {
    socket.emit('chat:join', { role: 'customer' });

    const onConnect = () => setConnected(true);
    const onDisconnect = () => setConnected(false);
    const onHistory = (history) => setMessages(history);
    const onNew = (entry) => setMessages((prev) => [...prev, entry]);

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('chat:history', onHistory);
    socket.on('chat:new', onNew);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
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

    socket.emit('chat:send', { from: 'customer', text });
    setInput('');
  };

  return (
    <section className="chat-widget" aria-label="Support chat widget">
      <button
        className="chat-trigger"
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls="customer-chat-panel"
      >
        {isOpen ? 'Close Support' : 'Chat With Support'}
      </button>

      {isOpen && (
        <div className="chat-panel" id="customer-chat-panel" role="dialog" aria-label="Customer support chat">
          <header>
            <strong>AkamaiPOS Support</strong>
            <span>{connected ? 'Online' : 'Reconnecting...'}</span>
          </header>

          <ul className="chat-list" ref={listRef} aria-live="polite">
            {messages.length === 0 && <li className="hint">Start a conversation with our team.</li>}
            {messages.map((m) => (
              <li key={m.id} className={m.from === 'customer' ? 'from-customer' : 'from-agent'}>
                <p>{m.text}</p>
              </li>
            ))}
          </ul>

          <form onSubmit={send} className="chat-form">
            <label htmlFor="customer-message" className="sr-only">
              Type your message
            </label>
            <input
              id="customer-message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="How can we help today?"
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </section>
  );
}
