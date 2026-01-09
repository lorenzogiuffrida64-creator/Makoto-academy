import React from 'react';
import { motion } from 'framer-motion';
import ImportantWord from './ImportantWord';

const courses = [
  {
    title: "MMA Elite Training",
    image: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?auto=format&fit=crop&q=80&w=800",
    desc: "Approccio tecnico basato sui principi della biomeccanica e strategia pro per dominare ogni fase del combattimento."
  },
  {
    title: "Brazilian Jujitsu",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    desc: "L'arte della leva e del controllo. Un sistema completo di difesa personale e grappling agonistico."
  },
  {
    title: "Jujitsu Kids",
    image: "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?auto=format&fit=crop&q=80&w=800",
    desc: "Sviluppo motorio e rispetto. Martedì e Giovedì dalle 18:00 alle 19:00. Costruiamo i campioni di domani."
  }
];

const DetailedValue: React.FC = () => {
  return (
    <div className="container mx-auto px-6" id="courses">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
        <h2 className="text-5xl md:text-7xl font-black mb-8 font-heading leading-tight tracking-tighter">
          I Nostri <ImportantWord text="Percorsi" /> Formativi
        </h2>
        <p className="text-white/40 text-xl font-light max-w-2xl">
          Metodologia scientifica applicata al combattimento. Scegli la tua strada tra le discipline regine del tatami.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative h-[600px] rounded-[50px] overflow-hidden cursor-pointer bg-neutral-900 border border-white/5"
          >
            <img 
              src={course.image} 
              className="absolute inset-0 w-full h-full object-cover opacity-100 transition-all duration-1000 group-hover:scale-105"
              alt={course.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-10">
              <h3 className="text-3xl font-black text-white font-heading group-hover:text-makotoYellow transition-colors mb-4 leading-tight">{course.title}</h3>
              <p className="text-white/70 text-sm font-medium leading-relaxed mb-8">
                {course.desc}
              </p>
              
              <motion.a
                href="#programmi"
                whileHover={{ scale: 1.02, backgroundColor: '#FACC15', color: '#000', borderColor: '#FACC15' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl border-2 border-white/20 bg-black/40 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.2em] text-white transition-all duration-300 flex items-center justify-center shadow-lg"
              >
                Scopri il Corso
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DetailedValue;