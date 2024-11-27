import React from 'react';
import { motion } from 'framer-motion';

function AI() {
  const aiTypes = [
    {
      title: "Intelligence Artificielle Faible (ANI)",
      description: "Systèmes conçus pour des tâches spécifiques comme la reconnaissance vocale ou la conduite autonome.",
      examples: ["Siri", "Alexa", "Systèmes de recommandation"],
      details: "L'IA faible excelle dans des domaines spécifiques mais ne possède pas de conscience ou de compréhension générale."
    },
    {
      title: "Intelligence Artificielle Forte (AGI)",
      description: "Système hypothétique capable de comprendre, apprendre et appliquer des connaissances de manière similaire aux humains.",
      examples: ["Encore théorique", "Conscience artificielle", "Raisonnement général"],
      details: "L'AGI représente le niveau d'intelligence comparable à l'humain, capable de résoudre des problèmes généraux."
    },
    {
      title: "Super Intelligence Artificielle (ASI)",
      description: "Une forme théorique d'IA qui dépasserait l'intelligence humaine dans tous les domaines.",
      examples: ["Concept futuriste", "Evolution technologique", "Singularité technologique"],
      details: "L'ASI pourrait résoudre des problèmes complexes et innover de manière autonome."
    }
  ];

  const applications = [
    {
      domain: "Santé",
      examples: [
        "Diagnostic médical assisté par IA",
        "Découverte de médicaments",
        "Analyse d'images médicales"
      ]
    },
    {
      domain: "Transport",
      examples: [
        "Véhicules autonomes",
        "Optimisation du trafic",
        "Maintenance prédictive"
      ]
    },
    {
      domain: "Finance",
      examples: [
        "Détection de fraude",
        "Trading algorithmique",
        "Évaluation des risques"
      ]
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
          L'Intelligence Artificielle est un domaine de l'informatique qui vise à créer des systèmes capables de simuler
          l'intelligence humaine. Elle englobe plusieurs sous-domaines comme le Machine Learning et le Deep Learning,
          permettant aux machines d'apprendre et de s'améliorer à partir de l'expérience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Capacités Principales</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Apprentissage automatique</li>
              <li>Reconnaissance de motifs</li>
              <li>Traitement du langage naturel</li>
              <li>Vision par ordinateur</li>
            </ul>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Objectifs</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Automatisation des tâches</li>
              <li>Aide à la décision</li>
              <li>Résolution de problèmes complexes</li>
              <li>Innovation technologique</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 mb-8">
        {aiTypes.map((type, index) => (
          <motion.div
            key={type.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-800 rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
            <p className="text-gray-300 mb-4">{type.description}</p>
            <p className="text-gray-300 mb-4">{type.details}</p>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Exemples :</h4>
              <ul className="list-disc list-inside text-gray-300">
                {type.examples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800 rounded-lg p-6"
      >
        <h2 className="text-2xl font-semibold mb-4">Applications par Domaine</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {applications.map((app) => (
            <div key={app.domain} className="bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">{app.domain}</h3>
              <ul className="list-disc list-inside text-sm text-gray-300">
                {app.examples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default AI;