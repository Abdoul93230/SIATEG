import React from 'react';
import { motion } from 'framer-motion';

function AI() {
  const concepts = [
    {
      title: "Intelligence Artificielle Faible (ANI)",
      description: "Systèmes conçus pour des tâches spécifiques comme la reconnaissance vocale ou la conduite autonome.",
      examples: ["Siri", "Alexa", "Systèmes de recommandation"]
    },
    {
      title: "Intelligence Artificielle Forte (AGI)",
      description: "Système hypothétique capable de comprendre, apprendre et appliquer des connaissances de manière similaire aux humains.",
      examples: ["Encore théorique", "Conscience artificielle", "Raisonnement général"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Intelligence Artificielle
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gray-800 rounded-lg p-6 mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4">Qu'est-ce que l'IA ?</h2>
        <p className="text-gray-300 mb-4">
          L'Intelligence Artificielle est la simulation de l'intelligence humaine par des machines programmées
          pour penser et apprendre. Elle englobe un large éventail de technologies qui permettent aux ordinateurs
          de percevoir, comprendre, agir et apprendre.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {concepts.map((concept, index) => (
          <motion.div
            key={concept.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-800 rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-3">{concept.title}</h3>
            <p className="text-gray-300 mb-4">{concept.description}</p>
            <div>
              <h4 className="font-semibold mb-2">Exemples :</h4>
              <ul className="list-disc list-inside text-gray-300">
                {concept.examples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AI;