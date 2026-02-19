import { useEffect, useRef, useState } from "react";
import { API_URL } from "../services/api";
import QuickActions from "./QuickActions";

const USER_ID = "lumina-user-001";

function ChatBox({ setLoadingExternal }) {
  const [messages, setMessages] = useState([]);
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
        body: JSON.stringify({
          user_id: USER_ID,
          question: messageText,
         Liam: "diet-ai" 
        }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", message: data.message },
      ]);
    } catch {
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
      <div className="chat-scroll" style={{ flex: 1, overflowY: "auto", padding: "10px 5px" }}>
        {messages.map((m, i) => (
          <div
            key={i}
            className={`message-wrapper ${m.role}`}
            style={{
              display: "flex",
              justifyContent: m.role === "user" ? "flex-end" : "flex-start",
              marginBottom: "15px",
              alignItems: "flex-end",
              gap: "8px"
            }}
          >
            {/* Assistant Avatar Placeholder */}
            {m.role === "assistant" && (
              <div className="avatar-mini">⚡</div>
            )}
            
            <span
              style={{
                padding: "12px 18px",
                borderRadius: m.role === "user" ? "20px 20px 4px 20px" : "20px 20px 20px 4px",
                maxWidth: "80%",
                fontSize: "15px",
                lineHeight: "1.4",
                background: m.role === "user" ? "rgba(77, 182, 172, 0.4)" : "rgba(255, 255, 255, 0.6)",
                backdropFilter: "blur(5px)",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "#2c3e50",
                boxShadow: "0 4px 15px rgba(0,0,0,0.03)"
              }}
            >
              {m.message}
            </span>
          </div>
        ))}
        {loading && <div className="loading-text">Lumina is thinking...</div>}
        <div ref={bottomRef} />
      </div>

      {/* Quick Actions Component */}
      <QuickActions onSelect={sendMessage} />

      {/* Input Area */}
      <div className="input-container">
        <button className="icon-btn">+</button>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask Lumina about your diet..."
        />
        <button className="send-btn" onClick={() => sendMessage()} disabled={loading}>
          &#10148;
        </button>
      </div>
    </>
  );
}

export default ChatBox;