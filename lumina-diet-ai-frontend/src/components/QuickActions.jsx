import { motion } from "framer-motion";
import "../styles/index.css";

const actions = [
  "Suggest today’s meals",
  "Healthy dinner ideas",
  "Calorie deficit plan",
  "High-protein foods",
  "Vegan options",
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
