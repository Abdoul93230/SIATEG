import React from 'react';
import { motion } from 'framer-motion';
import CodeExample from '../components/CodeExample';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ML() {
  const linearRegressionCode = `
import numpy as np
from sklearn.linear_model import LinearRegression

# Données d'exemple
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])

# Créer et entraîner le modèle
model = LinearRegression()
model.fit(X, y)

# Faire une prédiction
prediction = model.predict([[6]])
print(f"Prédiction pour x=6: {prediction[0]}")
  `;

  const classificationCode = `
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import make_classification

# Générer des données
X, y = make_classification(n_samples=1000, n_features=4,
                         n_informative=2, n_redundant=0,
                         random_state=0, shuffle=False)

# Créer et entraîner le classificateur
clf = RandomForestClassifier(max_depth=2, random_state=0)
clf.fit(X, y)

# Faire une prédiction
prediction = clf.predict(X[:1])
  `;

  const clusteringCode = `
from sklearn.cluster import KMeans
import numpy as np

# Générer des données
X = np.array([[1, 2], [1, 4], [1, 0],
              [4, 2], [4, 4], [4, 0]])

# Créer et entraîner le modèle
kmeans = KMeans(n_clusters=2, random_state=0)
kmeans.fit(X)

# Prédire les clusters
labels = kmeans.predict([[0, 0], [4, 4]])
  `;

  const chartData = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin'],
    datasets: [
      {
        label: 'Prédictions',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Valeurs réelles',
        data: [62, 57, 78, 84, 54, 57],
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Machine Learning
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gray-800 rounded-lg p-6 mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4">Exemple de Régression Linéaire</h2>
        <div className="mb-6">
          <Line data={chartData} options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Prédictions vs Valeurs Réelles'
              }
            }
          }} />
        </div>
        <CodeExample code={linearRegressionCode} language="python" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-800 rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold mb-4">Classification</h3>
          <CodeExample code={classificationCode} language="python" />
        </motion.div>

        <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-gray-800 rounded-lg p-6"
    >
      <div className="flex items-center mb-4">
        {/* <ClusteringIcon className="w-10 h-10 mr-4 text-green-400"/> */}
        <img
            src="https://cdn.analyticsvidhya.com/wp-content/uploads/2019/06/Screenshot-from-2019-06-17-20-05-30.png"
            alt="Transformer Architecture"
            className="w-10 h-10 mr-4 text-green-400"
          />
        <h3 className="text-xl font-semibold">Clustering</h3>
      </div>
      <p className="text-gray-300 mb-4">
        Le clustering est une technique d'apprentissage non supervisé qui regroupe des données similaires en clusters ou groupes. Il permet de découvrir des structures naturelles dans les données sans avoir besoin d'étiquettes prédéfinies, en se basant sur des similitudes intrinsèques.
      </p>
      <CodeExample code={clusteringCode} language="python" />
    </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800 rounded-lg p-6"
      >
        <h2 className="text-2xl font-semibold mb-4">Applications Pratiques</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-700 rounded-lg">
            <h3 className="font-semibold mb-2">Finance</h3>
            <ul className="list-disc list-inside text-sm">
              <li>Détection de fraude</li>
              <li>Prédiction de marché</li>
              <li>Évaluation des risques</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg">
            <h3 className="font-semibold mb-2">Santé</h3>
            <ul className="list-disc list-inside text-sm">
              <li>Diagnostic médical</li>
              <li>Analyse d'images</li>
              <li>Prédiction de maladies</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg">
            <h3 className="font-semibold mb-2">Marketing</h3>
            <ul className="list-disc list-inside text-sm">
              <li>Segmentation client</li>
              <li>Recommandations</li>
              <li>Prédiction des ventes</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ML;
