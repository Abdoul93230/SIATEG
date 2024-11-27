import React from 'react';
import { motion } from 'framer-motion';

function InteractiveCard({ title, description, image, onClick, className = '' }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-gray-800 rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}

export default InteractiveCard;