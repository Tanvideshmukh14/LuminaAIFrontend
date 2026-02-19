import { useEffect, useRef, useState } from "react";
import { API_URL } from "../services/api";
import QuickActions from "./QuickActions";
import ReactMarkdown from "react-markdown";
import "../styles/index.css";

const USER_ID = "lumina-user-001";

function ChatBox({ setLoadingExternal }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      message: "👋 Hi! How can I help you with your diet today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(forcedText) {
    const messageText = forcedText ?? input;
    if (!messageText.trim() || loading) return;

    const userMessage = { role: "user", message: messageText };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    setLoadingExternal(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: USER_ID, question: messageText }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", message: data.response },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", message: "Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
      setLoadingExternal(false);
    }
  }

  return (
    <>
      <div className="chat-scroll">
        {messages.map((m, i) => (
          <div key={i} className={`message-wrapper ${m.role}`}>
            {m.role === "assistant" && <div className="avatar-mini">⚡</div>}
            <div className={`message-bubble ${m.role}`}>
              {m.role === "assistant" ? (
                <ReactMarkdown>{m.message}</ReactMarkdown>
              ) : (
                m.message
              )}
            </div>
          </div>
        ))}
        {loading && <div className="loading-text">Lumina is thinking...</div>}
        <div ref={bottomRef} />
      </div>

      <QuickActions onSelect={sendMessage} />

      <form
        className="input-container"
        onSubmit={(e) => { e.preventDefault(); sendMessage(); }}
      >
        <button className="icon-btn" type="button">+</button>
        <input
          name="message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Lumina about your diet..."
        />
        <button className="send-btn" type="submit" disabled={loading}>
          &#10148;
        </button>
      </form>
    </>
  );
}

export default ChatBox;
