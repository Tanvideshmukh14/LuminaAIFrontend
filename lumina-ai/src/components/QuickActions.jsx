import { motion } from "framer-motion";
import "../styles/index.css";

const actions = [
  "Refactor for performance",
  "Audit security risks",
  "Generate unit tests",
  "Explain this module",
  "Mordernize syntax",
];

function QuickActions({ onSelect }) {
  return (
    <div className="quick-actions">
      {actions.map((text, i) => (
        <motion.button
          key={i}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(text)}
        >
          {text}
        </motion.button>
      ))}
    </div>
  );
}

export default QuickActions;
