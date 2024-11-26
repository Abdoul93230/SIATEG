import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-8 text-center">
        Intelligence Artificielle, Machine Learning et Deep Learning
      </h1>
      
      <div className="bg-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Objectifs de la Formation</h2>
        <ul className="space-y-2">
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center"
          >
            <span className="mr-2">🎯</span>
            Comprendre les concepts fondamentaux de l'IA
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center"
          >
            <span className="mr-2">🔍</span>
            Explorer les différentes branches du Machine Learning
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center"
          >
            <span className="mr-2">🧠</span>
            Découvrir le Deep Learning et ses applications
          </motion.li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold mb-3">Pour Qui ?</h3>
          <ul className="space-y-2">
            <li>Débutants en IA</li>
            <li>Professionnels en reconversion</li>
            <li>Étudiants</li>
            <li>Curieux des nouvelles technologies</li>
          </ul>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold mb-3">Programme</h3>
          <ul className="space-y-2">
            <li>Histoire et évolution de l'IA</li>
            <li>Concepts fondamentaux</li>
            <li>Applications pratiques</li>
            <li>Démonstrations et exercices</li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;