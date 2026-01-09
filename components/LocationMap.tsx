
import React from 'react';
import { motion } from 'framer-motion';
import ImportantWord from './ImportantWord';

const LocationMap: React.FC = () => {
  return (
    <section id="location" className="py-32 bg-makotoBlack relative z-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 font-heading tracking-tighter"
          >
            La Nostra <ImportantWord text="Sede" />
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 uppercase tracking-[0.5em] text-[10px] font-bold"
          >
            Vieni a trovarci a Palermo
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-[500px] rounded-[60px] overflow-hidden border border-white/10 shadow-2xl transition-all duration-1000 group relative"
        >
          {/* Map Overlay for Aesthetics */}
          <div className="absolute inset-0 pointer-events-none border-[1px] border-white/10 rounded-[60px] z-10" />
          
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.6642685971683!2d13.347595999999998!3d38.1434369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319e94c21c74a47%3A0x5dbc67ced0280a29!2sMakoto%20ju%20jitsu%20academy!5e1!3m2!1sit!2sit!4v1767946463490!5m2!1sit!2sit" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
            className="w-full h-full"
          />
        </motion.div>
        
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-black text-makotoGold uppercase tracking-[0.3em]">Indirizzo</span>
            <p className="text-white/60 font-light">Via Alessandro La Marmora, 1, 90143 Palermo, Italia</p>
          </div>
          <div className="w-px h-10 bg-white/10 hidden md:block" />
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-black text-makotoGold uppercase tracking-[0.3em]">Orari Academy</span>
            <p className="text-white/60 font-light">Lun - Sab: 09:00 - 22:00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
