import { motion } from "framer-motion";

export default function Card({ title, value }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <h3>{title}</h3>
      <p>{value}</p>
    </motion.div>
  );
}
