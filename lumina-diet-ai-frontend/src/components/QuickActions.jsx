import { motion } from "framer-motion";

const actions = [
  "Suggest today’s meals",
  "Healthy dinner ideas",
  "Calorie deficit plan",
  "High-protein foods",
  "Vegan options",
];

function QuickActions({ onSelect }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        overflowX: "auto",
        paddingBottom: "6px",
        marginBottom: "10px",
        scrollbarWidth: "none",       
        msOverflowStyle: "none",  
        WebkitOverflowScrolling: "touch", 
      }}
    >
      {actions.map((text, i) => (
        <motion.button
          key={i}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(text)}
          style={{
            whiteSpace: "nowrap",
            padding: "8px 14px",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
            background: "rgba(255,255,255,0.45)",
            backdropFilter: "blur(10px)",
            fontSize: "13px",
            fontWeight: 500,
          }}
        >
          {text}
        </motion.button>
      ))}
    </div>
  );
}

export default QuickActions;
