import { motion } from "framer-motion";
import React from "react";

const MotionContainer = {
  hidden: { opacity: 0, y: window.innerHeight },
  show: {
    opacity: 1,
    y: 0,

    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
      duration: 0.8,
    },
  },
};
const AnimatedPage = ({ children }) => {
  return (
    <div>
      <motion.div
        variants={MotionContainer}
        initial="hidden"
        animate="show"
        exit={{
          opacity: 0,
          y: window.innerHeight,

          transition: { duration: 0.8 },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedPage;
