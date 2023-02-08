import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackGroundCircle({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [2, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["10%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute border border-gray-500 rounded-full h-[200px] w-[200px] mt-2 animate-ping" />
      <div className="absolute border border-gray-500 rounded-full h-[300px] w-[300px] mt-2 animate-ping" />
      <div className="absolute border border-gray-500 rounded-full h-[500px] w-[500px] mt-2 animate-ping" />
      <div className="absolute border-2 mt-2 border-teal-200 rounded-full opacity-20 animate-pulse h-[650px] w-[650px]" />
      <div className="absolute border-2 mt-2 border-teal-200 rounded-full opacity-20 animate-pulse h-[800px] w-[800px]" />
    </motion.div>
  );
}

export default BackGroundCircle;
