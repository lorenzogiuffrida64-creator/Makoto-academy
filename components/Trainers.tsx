import React from 'react';
import { motion } from 'framer-motion';
import ImportantWord from './ImportantWord';

const trainers = [
  {
    name: "M° Dario Nucifora",
    role: "Brazilian & Japanese Jujitsu",
    image: "https://i.im.ge/2026/01/09/G1V2hM.Generated-Image-January-09-2026-5-50PM.jpeg",
    desc: "Maestro di Brazilian e Japanese Jujitsu con anni di esperienza nell'insegnamento."
  },
  {
    name: "M° Emmanuele Troia",
    role: "MMA Coach",
    image: "https://i.im.ge/2026/01/09/G1KYkp.Generated-Image-January-09-2026-6-05PM.jpeg",
    desc: "Istruttore esperto specializzato in Mixed Martial Arts e combattimento."
  },
  {
    name: "Gabriele Gennaro",
    role: "Strength & Conditioning",
    image: "https://i.im.ge/2026/01/10/G2iWPP.Gemini-Generated-Image-hscz7dhscz7dhscz.png",
    desc: "Preparatore atletico specializzato nel potenziamento fisico per sport da combattimento."
  }
];

const Trainers: React.FC = () => {
  return (
    <section className="py-32 bg-makotoBlack relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-makotoGold font-bold uppercase tracking-[0.4em] text-xs mb-6"
          >
            L'Elite di Palermo
          </motion.p>
          <h2 className="text-5xl md:text-7xl font-black mb-8 font-heading leading-tight tracking-tighter">
            I Nostri <ImportantWord text="Istruttori" />
          </h2>
          <p className="text-white/40 text-xl font-light max-w-2xl">
            Un team di professionisti certificati, atleti ed educatori dedicati alla tua trasformazione tecnica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[450px] rounded-[40px] overflow-hidden bg-neutral-900 border border-white/5"
            >
              <img
                src={trainer.image}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                alt={trainer.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-makotoGold font-black text-[10px] uppercase tracking-[0.2em] mb-2 block">{trainer.role}</span>
                <h3 className="text-2xl font-black text-white font-heading mb-3">{trainer.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{trainer.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;