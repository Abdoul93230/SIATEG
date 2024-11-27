import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CodeExample from './CodeExample';

function CodeDemo({ title, description, code, language, output }) {
  const [showOutput, setShowOutput] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800 rounded-lg overflow-hidden"
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <CodeExample code={code} language={language} />
        {output && (
          <div className="mt-4">
            <button
              onClick={() => setShowOutput(!showOutput)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              {showOutput ? 'Masquer le résultat' : 'Voir le résultat'}
            </button>
            {showOutput && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-4 p-4 bg-gray-700 rounded-md"
              >
                <pre className="text-gray-300">{output}</pre>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default CodeDemo;