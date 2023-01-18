import { motion } from "framer-motion";
import React from "react";

const MotionContainer = {
  hidden: { opacity: 0, x: window.innerWidth },
  show: {
    opacity: 1,
    x: 0,

    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
      duration: 0.8,
    },
  },
};
const AnimatedPageLeft = ({ children }) => {
  return (
    <div>
      <motion.div
        variants={MotionContainer}
        initial="hidden"
        animate="show"
        exit={{
          opacity: 0,
          x: window.innerWidth,

          transition: { duration: 0.8 },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedPageLeft;
