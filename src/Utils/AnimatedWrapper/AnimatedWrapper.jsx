import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";
export const AnimatedWrapper = ({ children, animationType, ...rest }) => {
  const ref = useRef();
  const inView = useInView(ref);
  return (
    <div
      style={{
        width: "fit-content",
        height: "fit-content",
        overflow: "hidden",
      }}
      {...rest}
    >
      <motion.div
        ref={ref}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? "0px" : "100px",
        }}
        transition={{
          type: "tween",
          duration: 0.3,
          delay: 0.1,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
