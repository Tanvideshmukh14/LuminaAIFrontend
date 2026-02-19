import ChatBox from "./ChatBox";
import StatusIndicator from "./StatusIndicator";
import { useState } from "react";

function GlassCard() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="glass-card">
      <h2 style={{ textAlign: "center", marginBottom: "4px" }}>
        Lumina Diet AI 
      </h2>

      <StatusIndicator loading={loading} />

      <ChatBox setLoadingExternal={setLoading} />
    </div>
  );
}

export default GlassCard;
