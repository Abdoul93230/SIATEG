import React from 'react';
import { motion } from 'framer-motion';

function AnimatedSection({ children, className = '', delay = 0 }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`mb-8 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export default AnimatedSection;