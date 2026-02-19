import { motion } from "framer-motion";
import "../styles/index.css";

function StatusIndicator({ loading }) {
  return (
    <motion.div className="status-indicator" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {loading ? (
        <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.6, repeat: Infinity }}>
          Lumina is tailoring your plan…
        </motion.span>
      ) : (
        <span>Your personal nutrition specialist</span>
      )}
    </motion.div>
  );
}

export default StatusIndicator;
