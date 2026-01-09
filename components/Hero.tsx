import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ImportantWord from './ImportantWord';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 767;
  const isTablet = windowWidth > 767 && windowWidth <= 1024;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Light smoothing - high stiffness for quick response, high damping to prevent oscillation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
    restDelta: 0.001
  });

  const phase1End = 0.5;
  const maxScale = isMobile ? 2.2 : (isTablet ? 2.8 : 3.8);

  const subOpacity = useTransform(smoothProgress, [0, phase1End], [1, 0]);
  const headlineScale = useTransform(smoothProgress, [0, phase1End, 1], [1, maxScale * 0.5, maxScale]);
  const headlineOpacity = useTransform(smoothProgress, [0, phase1End, 1], [1, 1, 0]);
  const bgOpacity = useTransform(smoothProgress, [phase1End, 1], [0, 1]);

  return (
    <div ref={containerRef} id="home" className="relative h-[200vh] w-full bg-black m-0 p-0 border-none overflow-visible">
      <div className="sticky top-0 h-screen h-[100dvh] w-full flex items-center justify-center overflow-hidden m-0 p-0 bg-black gpu-optimized">
        
        {/* Background Layer */}
        <motion.div
          style={{ opacity: bgOpacity }}
          className="absolute inset-0 z-0 transform-gpu hero-smooth"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Martial Arts Academy Background"
          />
        </motion.div>

        {/* Visibility Enhancer: Subtle dark pocket behind text */}
        <motion.div 
          style={{ opacity: subOpacity }}
          className="absolute inset-0 z-[2] pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.8)_0%,_transparent_60%)] opacity-60" 
        />

        <motion.div style={{ opacity: subOpacity }} className="absolute inset-0 z-[1] pointer-events-none landscape-hide">
          <div className="absolute inset-0 shimmer-grid opacity-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vw] bg-makotoGold/5 blur-[120px] rounded-full" />
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl h-full flex flex-col items-center justify-center text-center px-4 md:px-12">
          <motion.div
            style={{
              scale: headlineScale,
              opacity: headlineOpacity,
              zIndex: 50
            }}
            className="origin-center pointer-events-none mb-4 md:mb-10 transform-gpu backface-hidden hero-smooth"
          >
            <h1 
              className="leading-[0.85] tracking-tighter uppercase select-none antialiased text-white whitespace-nowrap"
              style={{ fontSize: 'var(--hero-main-size)' }}
            >
              <span className="hero-subtitle-accent block text-[0.35em] md:text-[0.3em] font-heading font-light tracking-[0.2em] mb-[-0.05em] opacity-80">
                L'arte della
              </span>
              <span className="block text-image-clip font-heading font-black">
                ECCELLENZA
              </span>
            </h1>
          </motion.div>

          <motion.div
            style={{
              opacity: subOpacity,
              zIndex: 10
            }}
            className="flex flex-col items-center w-full mb-8 md:mb-16 pointer-events-none max-w-[90%] md:max-w-[80%] hero-smooth"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-light tracking-tight text-white/70 mb-4 md:mb-8">
              Padroneggia l' <ImportantWord text="Arte" />. Supera i tuoi Limiti.
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-white/30 max-w-xl font-inter font-light leading-relaxed px-4">
              La fusione definitiva tra la scienza del movemento e l'istinto puro del combattimento.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 relative z-[100] mt-4 w-full px-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, backgroundColor: '#FFFFFF', color: '#000000' }}
              whileTap={{ scale: 0.95 }}
              className="bg-makotoGold text-black w-full max-w-[280px] md:w-auto px-8 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl font-black text-[12px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] flex items-center justify-center gap-4 shadow-[0_15px_40px_rgba(212,175,55,0.3)] transition-all"
            >
              Prova Gratuita
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </motion.a>
            
            <a 
              href="#programmi"
              className="text-white w-full max-w-[280px] md:w-auto px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl border border-white/20 hover:border-white/50 font-bold text-[12px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all bg-black/60 backdrop-blur-xl flex items-center justify-center"
            >
              Scopri i Corsi
            </a>
          </div>

          <motion.div
            style={{ opacity: subOpacity, zIndex: 5 }}
            className="absolute bottom-8 md:bottom-20 flex flex-col items-center gap-3 md:gap-4 pointer-events-none landscape-hide"
          >
            <p className="text-[8px] md:text-[9px] font-bold text-white/20 uppercase tracking-[0.3em] md:tracking-[0.5em]">
              Elite Training Center Palermo
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;