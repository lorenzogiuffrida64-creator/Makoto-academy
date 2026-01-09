
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Zap } from 'lucide-react';
import ImportantWord from './ImportantWord';

const outcomes = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Potenza Esplosiva",
    desc: "Metodologie di allenamento MMA focalizzate sullo sviluppo di una forza funzionale superiore."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Mente Strategica",
    desc: "Il BJJ insegna a risolvere problemi complessi sotto pressione estrema. Una skill per la vita."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Elite Defence",
    desc: "Acquisisci la sicurezza che deriva dalla reale competenza tecnica nel combattimento corpo a corpo."
  }
];

const ValueProp: React.FC = () => {
  return (
    <div className="container mx-auto px-6" id="vision">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-makotoGold font-bold uppercase tracking-[0.4em] text-xs mb-6"
        >
          Standard di Eccellenza
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black mb-8 leading-tight font-heading"
        >
          Trasforma la tua <ImportantWord text="Disciplina" /> in Forza Reale
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-white/50 text-lg font-light leading-relaxed"
        >
          Oltre il semplice fitness: costruiamo atleti tecnicamente impeccabili e mentalmente indistruttibili.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {outcomes.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-12 rounded-[40px] bg-white/[0.03] border border-white/5 hover:border-makotoGold/30 transition-all group relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-makotoGold/10 rounded-2xl flex items-center justify-center text-makotoGold mb-8 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 font-heading tracking-tight">{item.title}</h3>
              <p className="text-white/40 leading-relaxed font-light">{item.desc}</p>
            </div>
            {/* Subtle glow effect */}
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-makotoGold/5 blur-[60px] rounded-full group-hover:bg-makotoGold/10 transition-colors" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ValueProp;