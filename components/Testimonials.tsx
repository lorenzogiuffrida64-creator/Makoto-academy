
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: "Marco Rossi", role: "Atleta MMA", text: "Makoto ha alzato l'asticella delle arti marziali in Sicilia. Eccellenza pura." },
  { name: "Sofia Bianchi", role: "Studentessa BJJ", text: "Ambiente rispettoso e stimolante. Ideale sia per principianti che per pro." },
  { name: "Giuseppe Verdi", role: "Amatore", text: "Incredibile trasformazione. Il miglior investimento sulla mia salute e sicurezza." },
  { name: "Alessio Moretti", role: "Pro Grappler", text: "La cura dei dettagli tecnici è ciò che rende questa academy superiore a tutte." },
  { name: "Elena Neri", role: "Fitness Lover", text: "Disciplina, sudore e grandi soddisfazioni. Qui si respira vera passione." },
];

const Testimonials: React.FC = () => {
  return (
    <div className="py-24 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-24 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-6 font-heading tracking-tighter">Voci dal <span className="text-makotoGold">Tappeto</span></h2>
        <p className="text-white/30 uppercase tracking-[0.5em] text-[10px] font-bold">L'Elite di Palermo parla per noi</p>
      </div>

      <div className="flex gap-10 pointer-events-none">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex gap-10"
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="min-w-[450px] bg-white/[0.02] border border-white/5 p-16 rounded-[60px] flex flex-col justify-between hover:bg-white/[0.04] transition-colors"
            >
              <p className="text-2xl font-light text-white/70 mb-12 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-makotoGold/10 flex items-center justify-center font-bold text-makotoGold text-xl font-heading">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-lg font-heading tracking-tight">{t.name}</h4>
                  <p className="text-[10px] text-makotoGold uppercase tracking-[0.2em] font-black">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
      <div className="absolute inset-y-0 left-0 w-60 bg-gradient-to-r from-makotoBlack to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-60 bg-gradient-to-l from-makotoBlack to-transparent z-10" />
    </div>
  );
};

export default Testimonials;
