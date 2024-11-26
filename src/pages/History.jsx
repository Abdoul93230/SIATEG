import React from 'react';
import { motion } from 'framer-motion';

function History() {
  const pioneers = [
    {
      name: "Alan Turing",
      year: "1912-1954",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Alan_Turing_%281912-1954%29_in_1936_at_Princeton_University_%28cropped%29.jpg",
      contribution: "Père de l'informatique moderne et de l'IA. A créé le Test de Turing.",
      achievement: "A conçu la machine de Turing et posé les bases théoriques de l'informatique."
    },
    {
      name: "John McCarthy",
      year: "1927-2011",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/49/John_McCarthy_Stanford.jpg",
      contribution: "A inventé le terme 'Intelligence Artificielle' en 1956.",
      achievement: "Créateur du langage Lisp et organisateur de la conférence de Dartmouth."
    },
    {
      name: "Marvin Minsky",
      year: "1927-2016",
      image: "https://talgroupinc.wordpress.com/wp-content/uploads/2016/01/marvin_minsky_2-1.jpg?w=1200&h=675&crop=1",
      contribution: "Co-fondateur du laboratoire d'IA du MIT.",
      achievement: "A développé les premiers réseaux de neurones artificiels."
    }
  ];

  const timeline = [
    {
      year: '1950',
      title: 'Test de Turing',
      description: "Alan Turing propose un test pour évaluer l'intelligence des machines",
      image: "https://miro.medium.com/v2/resize:fit:758/1*dDv4ExVNwrY-IyaqnmzKcQ.png"
    },
    {
      year: '1956',
      title: 'Conférence de Dartmouth',
      description: "Naissance officielle de l'Intelligence Artificielle",
      image: "https://upload.wikimedia.org/wikipedia/en/b/b5/Dartmouth-Moscow_2008.jpg"
    },
    {
      year: '1964',
      title: 'ELIZA',
      description: "Premier chatbot de l'histoire créé par Joseph Weizenbaum",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/79/ELIZA_conversation.png"
    },
    {
      year: '1997',
      title: 'Deep Blue bat Kasparov',
      description: "L'IA d'IBM bat le champion du monde d'échecs",
      image: "https://pbs.twimg.com/media/EXvI7twXsAAERXw.jpg"
    },
    {
      year: '2012',
      title: 'AlexNet',
      description: "Révolution du Deep Learning avec la victoire d'AlexNet dans ImageNet",
      image: "https://production-media.paperswithcode.com/methods/Screen_Shot_2020-06-22_at_3.28.59_PM.png"
    },
    {
      year: '2022',
      title: 'ChatGPT',
      description: "OpenAI lance ChatGPT, marquant une nouvelle ère dans l'IA conversationnelle",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Histoire de l'Intelligence Artificielle
      </motion.h1>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold mb-6">Pionniers de l'IA</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pioneers.map((pioneer) => (
            <motion.div
              key={pioneer.name}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <img
                src={pioneer.image}
                alt={pioneer.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{pioneer.name}</h3>
                <p className="text-gray-400 text-sm">{pioneer.year}</p>
                <p className="mt-2 text-sm">{pioneer.contribution}</p>
                <p className="mt-2 text-sm text-gray-400">{pioneer.achievement}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <div className="space-y-8">
        {timeline.map((event, index) => (
          <motion.div
            key={event.year}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-800 rounded-lg overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex items-center mb-2">
                  <span className="text-2xl font-bold text-blue-400">{event.year}</span>
                  <div className="ml-4 h-0.5 flex-1 bg-blue-400"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-300">{event.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default History;
