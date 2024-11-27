import React from 'react';
import { motion } from 'framer-motion';

function Hero({ title, subtitle, image, overlay = true }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-[500px] rounded-xl overflow-hidden mb-12"
    >
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent"></div>
        )}
      </div>
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-4 text-white">{title}</h1>
            <p className="text-xl text-gray-200">{subtitle}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;