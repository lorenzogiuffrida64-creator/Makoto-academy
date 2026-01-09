import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Lock } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Vision', href: '#vision' },
  { name: 'Programmi', href: '#programmi' },
  { name: 'Academy', href: '#location' },
  { name: 'Contatti', href: '#contact' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleHashChange = () => setCurrentHash(window.location.hash);
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-700 ${
          scrolled || isOpen ? 'bg-black/95 backdrop-blur-2xl py-4 border-b border-white/5' : 'bg-transparent py-10'
        }`}
      >
        <div className="container mx-auto px-6 md:px-10 flex justify-between items-center">
          <a href="#home" className="flex flex-col leading-none group cursor-pointer relative z-[110]">
            <span className="text-white font-heading font-black text-2xl tracking-tighter group-hover:text-makotoGold transition-colors">MAKOTO</span>
            <span className="text-makotoGold/50 font-bold text-[7px] uppercase tracking-[0.5em] mt-1">Academy Palermo</span>
          </a>
          
          <nav className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => {
              const isActive = currentHash === item.href || (item.href === '#programmi' && currentHash.includes('#programmi'));
              return (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors py-2 ${
                    isActive ? 'text-makotoGold' : 'text-white/40 hover:text-white'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <motion.a
              href="#dashboard"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-2 border border-white/10 bg-white/5 text-white/60 px-5 py-2.5 rounded-xl font-bold text-[9px] uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all relative z-[110]"
            >
              <Lock className="w-3 h-3" />
              Area Soci
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex bg-white text-black px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-makotoGold transition-colors relative z-[110] items-center justify-center shadow-xl"
            >
              Prenota Lezione
            </motion.a>

            <button 
              onClick={toggleMenu}
              className="lg:hidden relative z-[110] w-10 h-10 flex items-center justify-center text-white hover:text-makotoGold transition-colors"
              aria-label="Toggle Menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    className="flex flex-col gap-1.5 items-end"
                  >
                    <div className="w-6 h-0.5 bg-current rounded-full" />
                    <div className="w-4 h-0.5 bg-current rounded-full" />
                    <div className="w-6 h-0.5 bg-current rounded-full" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[105] bg-black/98 backdrop-blur-3xl lg:hidden flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-6 md:gap-10">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-4xl md:text-5xl font-heading font-black transition-all tracking-tighter uppercase ${
                    currentHash === item.href ? 'text-makotoGold' : 'text-white hover:text-makotoGold'
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex flex-col items-center gap-4"
              >
                <motion.a
                  href="#dashboard"
                  onClick={() => setIsOpen(false)}
                  className="text-white/40 font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2"
                >
                  <Lock className="w-3 h-3" /> Area Soci
                </motion.a>
                <motion.a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  className="bg-makotoGold text-black px-10 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest mb-4 shadow-2xl"
                >
                  Prenota Lezione
                </motion.a>
                <div className="w-12 h-0.5 bg-makotoGold/20 rounded-full mb-2" />
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30">
                  Makoto Academy Palermo
                </p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;