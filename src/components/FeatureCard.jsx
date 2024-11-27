import React from 'react';
import { motion } from 'framer-motion';

function FeatureCard({ icon, title, description, className = '' }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`bg-gray-800 rounded-lg p-6 shadow-lg ${className}`}
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">{icon}</span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}

export default FeatureCard;