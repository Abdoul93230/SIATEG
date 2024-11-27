import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';

function History() {
  const [selectedItem, setSelectedItem] = useState(null);

  const pioneers = [
    {
      name: "Alan Turing",
      year: "1912-1954",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Alan_Turing_%281912-1954%29_in_1936_at_Princeton_University_%28cropped%29.jpg",
      contribution: "Père de l'informatique moderne et de l'IA. A créé le Test de Turing.",
      achievement: "A conçu la machine de Turing et posé les bases théoriques de l'informatique.",
      details: [
        {
          title: "Le Test de Turing",
          content: "Un test d'intelligence artificielle consistant à faire converser un humain avec une machine sans qu'il sache s'il parle à un humain ou à une machine."
        },
        {
          title: "La Machine de Turing",
          content: "Un modèle abstrait du fonctionnement des algorithmes de calcul, qui a posé les bases de l'informatique moderne."
        },
        {
          title: "Cryptanalyse",
          content: "Contribution majeure au décryptage de la machine Enigma pendant la Seconde Guerre mondiale."
        }
      ]
    },
    {
      name: "John McCarthy",
      year: "1927-2011",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/49/John_McCarthy_Stanford.jpg",
      contribution: "A inventé le terme 'Intelligence Artificielle' en 1956.",
      achievement: "Créateur du langage Lisp et organisateur de la conférence de Dartmouth.",
      details: [
        {
          title: "Conférence de Dartmouth",
          content: "A organisé la conférence historique qui a marqué la naissance officielle de l'IA en tant que discipline."
        },
        {
          title: "LISP",
          content: "A créé le langage de programmation LISP, largement utilisé en IA et encore influent aujourd'hui."
        },
        {
          title: "Contributions Théoriques",
          content: "A développé des concepts fondamentaux en IA comme le raisonnement automatique."
        }
      ]
    },
    {
      name: "Marvin Minsky",
      year: "1927-2016",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Marvin_Minsky_2008.jpg",
      contribution: "Co-fondateur du laboratoire d'IA du MIT.",
      achievement: "A développé les premiers réseaux de neurones artificiels.",
      details: [
        {
          title: "Perceptron",
          content: "A contribué au développement du perceptron, un des premiers modèles de réseaux de neurones."
        },
        {
          title: "Théorie de l'Esprit",
          content: "A écrit 'Society of Mind', théorisant sur le fonctionnement de l'intelligence humaine."
        },
        {
          title: "Robotique",
          content: "Pionnier de la robotique et de la vision par ordinateur."
        }
      ]
    }
  ];

  const timeline = [
    {
      year: '1950',
      title: 'Test de Turing',
      description: "Alan Turing propose un test pour évaluer l'intelligence des machines",
      image: "https://miro.medium.com/v2/resize:fit:758/1*dDv4ExVNwrY-IyaqnmzKcQ.png",
      details: [
        {
          title: "Impact",
          content: "Le test de Turing est devenu une référence pour évaluer l'intelligence artificielle."
        },
        {
          title: "Méthodologie",
          content: "Un évaluateur humain engage une conversation à l'aveugle avec un humain et une machine."
        }
      ]
    },
    {
      year: '1956',
      title: 'Conférence de Dartmouth',
      description: "Naissance officielle de l'Intelligence Artificielle",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Dartmouth_College_campus_2007-10-20_09.JPG",
      details: [
        {
          title: "Importance Historique",
          content: "Cette conférence a marqué la naissance officielle de l'IA en tant que discipline académique."
        },
        {
          title: "Participants",
          content: "A réuni les plus grands esprits de l'époque, dont McCarthy, Minsky, et Claude Shannon."
        }
      ]
    },
    {
      year: '1964',
      title: 'ELIZA',
      description: "Premier chatbot de l'histoire créé par Joseph Weizenbaum",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/79/ELIZA_conversation.png",
      details: [
        {
          title: "Innovation",
          content: "Premier programme capable de simuler une conversation en langage naturel."
        },
        {
          title: "Impact",
          content: "A ouvert la voie au traitement du langage naturel et aux chatbots modernes."
        }
      ]
    },
    {
      year: '1997',
      title: 'Deep Blue bat Kasparov',
      description: "L'IA d'IBM bat le champion du monde d'échecs",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Kasparov-34.jpg",
      details: [
        {
          title: "Victoire Historique",
          content: "Première victoire d'une machine contre un champion du monde d'échecs en titre."
        },
        {
          title: "Impact Médiatique",
          content: "A démontré au grand public la puissance potentielle de l'IA."
        }
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
        Histoire de l'Intelligence Artificielle
      </motion.h1>

      <Modal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        {...selectedItem}
      />
      
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
              className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedItem(pioneer)}
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
            className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setSelectedItem(event)}
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