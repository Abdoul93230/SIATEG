import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navigation() {
  const links = [
    { to: '/', label: 'Accueil' },
    { to: '/history', label: 'Histoire' },
    { to: '/ai', label: 'Intelligence Artificielle' },
    { to: '/ml', label: 'Machine Learning' },
    { to: '/dl', label: 'Deep Learning' }
  ];

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-xl font-bold text-white"
          >
            IA & ML Formation
          </motion.div>
          <div className="flex space-x-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;