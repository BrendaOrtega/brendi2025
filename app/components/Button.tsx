import { motion, useSpring } from "motion/react";
import { twMerge } from "tailwind-merge";

export const Button = ({
  label,
  className,
  delay = 0,
}: {
  label?: string;
  delay?: number;
  className?: string;
}) => {
  const scale = useSpring(0.5);
  return (
    <motion.div
      onHoverStart={() => {
        scale.set(1.1);
      }}
      onHoverEnd={() => {
        scale.set(1);
      }}
      custom={2}
      style={{
        scale,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, type: "spring", delay }}
      className={twMerge(" cursor-pointer ", className)}
    >
      <button className="bg-[#9346ed] text-white text-lg  hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer rounded-full px-4 h-12">
        <p>{label ? label : "Let's talk"}</p>
      </button>
    </motion.div>
  );
};
