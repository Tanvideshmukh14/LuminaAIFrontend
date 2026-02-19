import { useState } from "react";
import GlassCard from "../components/GlassCard";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      message: "👋 Hi! I’m Lumina.\nWhat’s your name?"
    }
  ]);

  const handleSend = (text) => {
    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", message: text }
    ]);

    // backend response comes next step
  };

  return (
    <GlassCard
      messages={messages}
      onSend={handleSend}
    />
  );
}
