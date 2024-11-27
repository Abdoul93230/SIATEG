import React from 'react';
import { motion } from 'framer-motion';
import CodeExample from '../components/CodeExample';

function LLM() {
  const llmExamples = {
    promptEngineering: `
// Exemple de prompt engineering avec GPT-3
const prompt = \`
Contexte: Vous êtes un assistant expert en IA.
Question: Expliquez le concept de machine learning en termes simples.
Format souhaité: Une explication courte suivie de 3 exemples concrets.
\`;

// La réponse sera structurée et adaptée au format demandé
    `,
    
    fewShotLearning: `
// Exemple de few-shot learning
const examples = [
  {
    input: "Ce film était fantastique !",
    sentiment: "positif"
  },
  {
    input: "Je ne recommande pas ce restaurant.",
    sentiment: "négatif"
  }
];

const newInput = "J'adore ce produit !";
// Le modèle utilisera les exemples pour classifier le nouveau texte
    `,
    
    chainOfThought: `
// Exemple de chain-of-thought prompting
const prompt = \`
Question: Un magasin vend des pommes à 0.50€ pièce ou 2.50€ les 6.
Combien économise-t-on en achetant 12 pommes en lot de 6 ?

Raisonnement:
1. Prix pour 12 pommes à l'unité:
   12 × 0.50€ = 6€
2. Prix pour 12 pommes en lots de 6:
   2 lots × 2.50€ = 5€
3. Économie:
   6€ - 5€ = 1€

Réponse: On économise 1€
\`;
    `
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Large Language Models (LLM)
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gray-800 rounded-lg p-6 mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4">Qu'est-ce qu'un LLM ?</h2>
        <p className="text-gray-300 mb-4">
          Les Large Language Models (LLM) sont des modèles d'intelligence artificielle
          entraînés sur d'énormes quantités de données textuelles. Ils peuvent comprendre
          et générer du texte de manière très naturelle, permettant des applications
          comme la génération de texte, la traduction, et la réponse à des questions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-800 rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold mb-4">Prompt Engineering</h3>
          <p className="text-gray-300 mb-4">
            Le prompt engineering est l'art de formuler des instructions précises
            pour obtenir les meilleurs résultats d'un LLM.
          </p>
          <CodeExample code={llmExamples.promptEngineering} language="javascript" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-800 rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold mb-4">Few-Shot Learning</h3>
          <p className="text-gray-300 mb-4">
            Le few-shot learning permet au modèle d'apprendre à partir de quelques
            exemples seulement, sans nécessiter un réentraînement complet.
          </p>
          <CodeExample code={llmExamples.fewShotLearning} language="javascript" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-800 rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold mb-4">Chain of Thought</h3>
          <p className="text-gray-300 mb-4">
            Cette technique permet d'améliorer les réponses du modèle en lui faisant
            suivre un raisonnement étape par étape.
          </p>
          <CodeExample code={llmExamples.chainOfThought} language="javascript" />
        </motion.div>
      </div>
    </div>
  );
}

export default LLM;