import { motion } from "framer-motion";
import React from "react";

const MotionContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
      duration: 0.5,
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

          transition: { duration: 0.5 },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedPage;
