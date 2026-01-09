
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  text: string;
  color?: string;
}

const ImportantWord: React.FC<Props> = ({ text, color = "text-makotoGold" }) => {
  return (
    <span className={`relative inline-block ${color} px-2 whitespace-nowrap`}>
      {text}
      <div className="absolute -bottom-3 left-0 w-full h-5 pointer-events-none select-none">
        <motion.svg
          className="w-full h-full overflow-visible"
          viewBox="0 0 100 15"
          preserveAspectRatio="none"
        >
          {/* Main Power Stroke (Tapered feel using multiple lines) */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.9 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            d="M1 8.5 C 20 7, 45 7, 99 9.5"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          
          {/* Top Taper Highlight (Simulates brush bristles) */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.55 }}
            d="M8 7.2 C 30 6.5, 60 6.5, 92 8.2"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
          
          {/* Bottom Flourish (The "Flick") */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.7 }}
            d="M5 11.5 C 35 10.5, 75 10.5, 96 12"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Rapid Accent Slash */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0, x: -10 }}
            whileInView={{ pathLength: 1, opacity: 0.6, x: 0 }}
            transition={{ duration: 0.5, ease: "circOut", delay: 0.5 }}
            d="M0 9 L15 8"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </motion.svg>
      </div>
    </span>
  );
};

export default ImportantWord;
