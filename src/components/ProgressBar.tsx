import { motion } from "framer-motion";

interface ProgressBarProps {
  percent: number; // 0-100+
  color?: string;
}

export default function ProgressBar({ percent, color = "#4A9B7F" }: ProgressBarProps) {
  const clamped = Math.min(percent, 100);
  const isOver = percent > 100;

  return (
    <div className="w-full h-2 rounded-full bg-ink-700 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${clamped}%` }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{ backgroundColor: isOver ? "#B85450" : color }}
      />
    </div>
  );
}
