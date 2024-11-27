import React from 'react';
import { motion } from 'framer-motion';
import CodeExample from '../components/CodeExample';

function NLP() {
  const nlpExamples = {
    tokenization: `
import natural from 'natural';
const tokenizer = new natural.WordTokenizer();

const text = "L'intelligence artificielle transforme notre monde.";
const tokens = tokenizer.tokenize(text);
console.log(tokens);
// Output: ['L', 'intelligence', 'artificielle', 'transforme', 'notre', 'monde']
    `,
    
    sentimentAnalysis: `
import natural from 'natural';
const analyzer = new natural.SentimentAnalyzer('French');

const text = "Ce produit est vraiment excellent !";
const sentiment = analyzer.getSentiment(tokenizer.tokenize(text));
console.log(sentiment); // Score positif/négatif
    `,
    
    namedEntityRecognition: `
import nlp from 'compromise';

const text = "Apple a lancé son nouveau iPhone à Paris.";
const doc = nlp(text);
const organizations = doc.organizations().text();
const places = doc.places().text();
console.log({ organizations, places });
// Output: { organizations: 'Apple', places: 'Paris' }
    `
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Traitement du Langage Naturel (NLP)
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gray-800 rounded-lg p-6 mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4">Qu'est-ce que le NLP ?</h2>
        <p className="text-gray-300 mb-4">
          Le Traitement du Langage Naturel (NLP) est une branche de l'intelligence artificielle
          qui permet aux machines de comprendre, interpréter et générer le langage humain.
          Cette technologie est au cœur de nombreuses applications modernes comme les assistants
          vocaux, la traduction automatique et l'analyse de sentiment.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-800 rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold mb-4">Tokenization</h3>
          <p className="text-gray-300 mb-4">
            La tokenization est le processus de découpage d'un texte en unités plus petites
            (tokens) comme des mots ou des phrases.
          </p>
          <CodeExample code={nlpExamples.tokenization} language="javascript" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-800 rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold mb-4">Analyse de Sentiment</h3>
          <p className="text-gray-300 mb-4">
            L'analyse de sentiment permet de déterminer la tonalité émotionnelle
            d'un texte (positive, négative ou neutre).
          </p>
          <CodeExample code={nlpExamples.sentimentAnalysis} language="javascript" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-800 rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold mb-4">Reconnaissance d'Entités Nommées</h3>
          <p className="text-gray-300 mb-4">
            Cette technique permet d'identifier et de classifier les entités nommées
            (personnes, organisations, lieux, etc.) dans un texte.
          </p>
          <CodeExample code={nlpExamples.namedEntityRecognition} language="javascript" />
        </motion.div>
      </div>
    </div>
  );
}

export default NLP;