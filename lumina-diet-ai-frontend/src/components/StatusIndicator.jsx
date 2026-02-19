import { motion } from "framer-motion";

function StatusIndicator({ loading }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        margin: "14px 0 6px",
        textAlign: "center",
        fontSize: "13px",
        letterSpacing: "0.2px",
        color: "#1f2937",
        opacity: 0.7,
      }}
    >
      {loading ? (
        <motion.span
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          Lumina is tailoring your plan…
        </motion.span>
      ) : (
        <span>Your personal nutrition specialist</span>
      )}
    </motion.div>
  );
}

export default StatusIndicator;
