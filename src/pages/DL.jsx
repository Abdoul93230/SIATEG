import React from 'react';
import { motion } from 'framer-motion';
import CodeExample from '../components/CodeExample';
import InteractiveDemo from '../components/InteractiveDemo';

function DL() {
  const cnnCode = `
import tensorflow as tf
from tensorflow.keras import layers, models

def create_cnn_model():
    model = models.Sequential([
        layers.Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)),
        layers.MaxPooling2D((2, 2)),
        layers.Conv2D(64, (3, 3), activation='relu'),
        layers.MaxPooling2D((2, 2)),
        layers.Conv2D(64, (3, 3), activation='relu'),
        layers.Flatten(),
        layers.Dense(64, activation='relu'),
        layers.Dense(10, activation='softmax')
    ])
    return model

# Créer et compiler le modèle
model = create_cnn_model()
model.compile(optimizer='adam',
             loss='sparse_categorical_crossentropy',
             metrics=['accuracy'])
  `;

  const transformerCode = `
import tensorflow as tf

class TransformerBlock(layers.Layer):
    def __init__(self, embed_dim, num_heads, ff_dim, rate=0.1):
        super(TransformerBlock, self).__init__()
        self.att = layers.MultiHeadAttention(num_heads=num_heads, key_dim=embed_dim)
        self.ffn = tf.keras.Sequential([
            layers.Dense(ff_dim, activation="relu"),
            layers.Dense(embed_dim),
        ])
        self.layernorm1 = layers.LayerNormalization(epsilon=1e-6)
        self.layernorm2 = layers.LayerNormalization(epsilon=1e-6)
        self.dropout1 = layers.Dropout(rate)
        self.dropout2 = layers.Dropout(rate)

    def call(self, inputs, training):
        attn_output = self.att(inputs, inputs)
        attn_output = self.dropout1(attn_output, training=training)
        out1 = self.layernorm1(inputs + attn_output)
        ffn_output = self.ffn(out1)
        ffn_output = self.dropout2(ffn_output, training=training)
        return self.layernorm2(out1 + ffn_output)
  `;

  return (
    <div className="max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Deep Learning
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-800 rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold mb-4">CNN pour la Vision par Ordinateur</h3>
          <img
            src="https://forum.huawei.com/enterprise/en/data/attachment/forum/202105/12/171754x3k76y3823h9b239.png?12.png"
            alt="CNN Architecture"
            className="w-full h-48 object-contain mb-4"
          />
          <CodeExample code={cnnCode} language="python" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-800 rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold mb-4">Transformers pour le NLP</h3>
          <img
            src="https://cdn.analyticsvidhya.com/wp-content/uploads/2019/06/Screenshot-from-2019-06-17-20-05-30.png"
            alt="Transformer Architecture"
            className="w-full h-48 object-contain mb-4"
          />
          <CodeExample code={transformerCode} language="python" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <InteractiveDemo />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800 rounded-lg p-6"
      >
        <h2 className="text-2xl font-semibold mb-4">Applications Avancées</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-700 rounded-lg">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20231122180335/gans_gfg-(1).jpg"
              alt="GAN Example"
              className="w-full h-32 object-cover rounded-lg mb-2"
            />
            <h3 className="font-semibold mb-2">GANs</h3>
            <p className="text-sm">Génération d'images réalistes et style transfer</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg">
            <img
              src="https://www.researchgate.net/publication/354908597/figure/fig1/AS:1073191841722368@1632880282219/Model-structure-of-BERT-and-GPT.png"
              alt="BERT Architecture"
              className="w-full h-32 object-cover rounded-lg mb-2"
            />
            <h3 className="font-semibold mb-2">BERT & GPT</h3>
            <p className="text-sm">Compréhension et génération de texte avancées</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg">
            <img
              src="https://production-media.paperswithcode.com/methods/Screen_Shot_2020-06-22_at_3.28.59_PM.png"
              alt="RL Example"
              className="w-full h-32 object-cover rounded-lg mb-2"
            />
            <h3 className="font-semibold mb-2">Deep RL</h3>
            <p className="text-sm">Apprentissage par renforcement pour la robotique et les jeux</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default DL;
