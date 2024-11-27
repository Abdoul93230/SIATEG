import React from 'react';
import { motion } from 'framer-motion';

function TimelineEvent({ year, title, description, image, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.02 }}
      className="relative bg-gray-800 rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
      onClick={onClick}
    >
      <div className="md:flex">
        <div className="md:w-1/3 relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-60 md:bg-gradient-to-b"></div>
        </div>
        <div className="p-6 md:w-2/3">
          <div className="flex items-center mb-2">
            <span className="text-2xl font-bold text-blue-400">{year}</span>
            <div className="ml-4 h-0.5 flex-1 bg-blue-400 bg-opacity-50"></div>
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default TimelineEvent;