import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';

function InteractiveDemo() {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const simpleNeuralNetwork = async () => {
    setLoading(true);
    
    // Créer un modèle séquentiel simple
    const model = tf.sequential({
      layers: [
        tf.layers.dense({ units: 1, inputShape: [1] })
      ]
    });

    // Compiler le modèle
    model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

    // Données d'entraînement (relation linéaire simple y = 2x - 1)
    const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
    const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);

    // Entraîner le modèle
    await model.fit(xs, ys, { epochs: 50 });

    // Faire une prédiction
    const testValue = 5;
    const prediction = model.predict(tf.tensor2d([testValue], [1, 1]));
    setPrediction(await prediction.data());
    setLoading(false);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Démo Interactive : Régression Linéaire</h3>
      <button
        onClick={simpleNeuralNetwork}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        disabled={loading}
      >
        {loading ? 'Entraînement...' : 'Lancer la démo'}
      </button>
      {prediction && (
        <div className="mt-4">
          <p>Prédiction pour x = 5:</p>
          <p className="text-2xl font-bold text-blue-400">{prediction[0].toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default InteractiveDemo;