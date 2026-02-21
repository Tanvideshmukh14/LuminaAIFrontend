import ChatBox from "./ChatBox";
import StatusIndicator from "./StatusIndicator";
import { useState } from "react";
import "../styles/index.css";

function GlassCard() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="glass-card">
      <h2>Lumina AI</h2>
      <StatusIndicator loading={loading} />
      <ChatBox setLoadingExternal={setLoading} />
    </div>
  );
}

export default GlassCard;
