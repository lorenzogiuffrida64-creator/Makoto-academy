import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import DetailedValue from './components/DetailedValue';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import BackgroundEffects from './components/BackgroundEffects';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';
import CoursesPage from './components/CoursesPage';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [view, setView] = useState<'home' | 'courses' | 'dashboard'>('home');
  const scrollTimeout = useRef<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      if (hash === '#programmi' || hash.startsWith('#programmi')) {
        setView('courses');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#dashboard' || hash.startsWith('#dashboard')) {
        setView('dashboard');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        // If we are on home but have a specific hash, scroll to it
        if (view !== 'home') {
          setView('home');
          // Wait for mount then scroll
          if (scrollTimeout.current) window.clearTimeout(scrollTimeout.current);
          scrollTimeout.current = window.setTimeout(() => {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      if (scrollTimeout.current) window.clearTimeout(scrollTimeout.current);
    };
  }, [view]);

  return (
    <div className="relative min-h-screen bg-makotoBlack selection:bg-makotoYellow selection:text-black">
      {view !== 'dashboard' && <BackgroundEffects />}
      {view !== 'dashboard' && <Header />}
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {view === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Hero />
              <section className="py-32 bg-makotoBlack relative z-20">
                <ValueProp />
              </section>
              <section className="py-32 bg-gradient-to-b from-transparent via-makotoYellow/5 to-transparent relative z-20">
                <DetailedValue />
              </section>
              <section className="py-32 bg-makotoBlack relative z-20">
                <Testimonials />
              </section>
              <section className="py-32 bg-makotoBlack relative z-20">
                <ContactForm />
              </section>
              <LocationMap />
            </motion.div>
          )}
          {view === 'courses' && (
            <motion.div
              key="courses"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <CoursesPage />
            </motion.div>
          )}
          {view === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Dashboard />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {view !== 'dashboard' && <Footer />}

      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-makotoBlack flex items-center justify-center"
          >
            <motion.h1 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-makotoYellow font-heading font-black text-6xl tracking-tighter"
            >
              MAKOTO
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;