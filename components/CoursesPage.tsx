import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Shield, BookOpen, Clock, Users } from 'lucide-react';
import ImportantWord from './ImportantWord';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';
import Trainers from './Trainers';
import LocationMap from './LocationMap';

const CoursesPage: React.FC = () => {
  const courseDetails = [
    {
      id: 'mma',
      title: 'MMA Elite Training',
      subtitle: 'Il Futuro del Combattimento',
      image: 'https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?auto=format&fit=crop&q=80&w=1200',
      description: "Il nostro programma di Mixed Martial Arts è progettato per creare atleti completi. Non ci limitiamo a insegnare come colpire o lottare; insegniamo la transizione, la strategia e la gestione dello spazio. Uniamo la potenza della Boxe e della Muay Thai con la sofisticata gestione del corpo del Wrestling e del BJJ, creando un sistema di combattimento moderno ed efficace sia per l'agonismo che per la difesa personale reale.",
      features: [
        { icon: <Zap />, title: 'Striking Dinamico', desc: 'Sviluppa riflessi fulminei e una pulizia tecnica impeccabile.' },
        { icon: <Target />, title: 'Grappling Avanzato', desc: 'Dalle proiezioni del wrestling alle sottomissioni più tecniche.' },
        { icon: <Shield />, title: 'Mental Grit', desc: 'Costruisci la tempra mentale necessaria per superare ogni sfida.' }
      ],
      details: [
        { label: 'Livello', value: 'Base, Intermedio, Avanzato' },
        { label: 'Attrezzatura', value: 'Guantoni 4oz/10oz, Parastinchi' },
        { label: 'Frequenza', value: 'Accesso Open Full-Time' }
      ]
    },
    {
      id: 'bjj',
      title: 'Brazilian Jujitsu',
      subtitle: 'La Scienza del Controllo',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200',
      description: "Definito spesso come la 'scacchi umani', il BJJ è la disciplina fondamentale per chiunque voglia comprendere il combattimento a terra. Il nostro metodo si focalizza sulla comprensione delle leve biomeccaniche: imparerai a neutralizzare avversari fisicamente più dotati attraverso la tecnica pura. Offriamo sessioni sia in Gi (kimono tradizionale) che No-Gi, coprendo l'intero spettro del grappling moderno, dal self-defense al competition training.",
      features: [
        { icon: <BookOpen />, title: 'Didattica Evoluta', desc: 'Un percorso strutturato che accompagna la tua crescita tecnica.' },
        { icon: <Users />, title: 'Team Spirit', desc: 'Lavoriamo in un clima di rispetto reciproco e crescita collettiva.' },
        { icon: <Clock />, title: 'Resistenza Fisica', desc: 'Migliora la tua capacità cardiovascolare in modo funzionale.' }
      ],
      details: [
        { label: 'Specialità', value: 'Lotta a Terra & Leve' },
        { label: 'Abbigliamento', value: 'Kimono (Gi) o Rashguard' },
        { label: 'Obiettivi', value: 'Sottomissione & Controllo' }
      ]
    },
    {
      id: 'kids',
      title: 'Jujitsu Kids',
      subtitle: 'Valori, Disciplina, Divertimento',
      image: 'https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?auto=format&fit=crop&q=80&w=1200',
      description: "Il futuro dell'Academy è nel nostro settore giovanile. Il corso Jujitsu Kids è strutturato per bambini dai 6 ai 12 anni e si svolge ogni Martedì e Giovedì dalle 18:00 alle 19:00. Attraverso esercizi ludico-motori e tecniche semplificate di difesa, insegniamo ai più piccoli i valori cardine delle arti marziali: rispetto per l'istruttore e i compagni, disciplina personale e la sicurezza necessaria per affrontare le sfide quotidiane con serenità.",
      features: [
        { icon: <Shield />, title: 'Safe Zone', desc: 'Un ambiente protetto dove crescere sani e sicuri.' },
        { icon: <Users />, title: 'Socialità', desc: "Incoraggiamo la collaborazione e l'integrazione sociale." },
        { icon: <Zap />, title: 'Agilità Motoria', desc: "Sviluppo armonico della coordinazione e dell'equilibrio." }
      ],
      details: [
        { label: 'Età Consigliata', value: '6 - 12 Anni' },
        { label: 'Orari Fisso', value: 'Mar/Gio 18:00 - 19:00' },
        { label: 'Valori', value: 'Rispetto & Autostima' }
      ]
    }
  ];

  return (
    <div className="pt-20" id="programmi">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="relative z-20 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 inline-block"
          >
            <span className="text-makotoGold font-black text-[12px] uppercase tracking-[0.5em] bg-black/50 px-6 py-2 rounded-full border border-makotoGold/30 backdrop-blur-md">
              Official Programs
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black font-heading tracking-tighter uppercase mb-6 leading-[0.9]"
          >
            I NOSTRI <ImportantWord text="CORSI" />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg md:text-2xl font-light tracking-widest max-w-2xl mx-auto drop-shadow-lg"
          >
            Scegli il percorso d'eccellenza per la tua evoluzione tecnica e fisica.
          </motion.p>
        </div>
      </section>

      {/* Detailed Courses */}
      <section className="py-32 bg-makotoBlack">
        <div className="container mx-auto px-6">
          {courseDetails.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 mb-48 items-center last:mb-0`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-[70px] overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                  <img
                    src={course.image}
                    className="w-full h-[650px] object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                    alt={course.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                  <div className="absolute bottom-12 left-12 right-12">
                    <span className="bg-makotoGold text-black px-5 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest mb-4 inline-block shadow-xl">
                      {course.subtitle}
                    </span>
                    <h2 className="text-4xl md:text-7xl font-black text-white font-heading leading-none">{course.title}</h2>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-12">
                <div className="space-y-6">
                  <div className="w-12 h-1.5 bg-makotoGold rounded-full" />
                  <p className="text-white/70 text-xl leading-relaxed font-light first-letter:text-4xl first-letter:font-black first-letter:text-white first-letter:mr-1">
                    {course.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {course.features.map((feat) => (
                    <div key={feat.title} className="bg-white/[0.03] border border-white/10 p-8 rounded-[40px] hover:border-makotoGold hover:bg-white/[0.05] transition-all group">
                      <div className="text-makotoGold mb-6 group-hover:scale-110 transition-transform origin-left">
                        {React.cloneElement(feat.icon as React.ReactElement<any>, { className: 'w-10 h-10' })}
                      </div>
                      <h4 className="text-lg font-bold mb-3 font-heading tracking-tight text-white">{feat.title}</h4>
                      <p className="text-white/40 text-xs leading-relaxed">{feat.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-10 border-t border-white/10">
                  {course.details.map((detail) => (
                    <div key={detail.label} className="space-y-1">
                      <span className="text-[10px] font-black text-makotoGold uppercase tracking-[0.3em] block">{detail.label}</span>
                      <p className="text-white font-bold text-lg">{detail.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trainers Section */}
      <Trainers />

      {/* Testimonials */}
      <section className="py-24 bg-makotoBlack border-t border-white/5">
        <Testimonials />
      </section>

      {/* Location Map */}
      <LocationMap />

      {/* Contact Form */}
      <section className="py-24 bg-makotoBlack border-t border-white/5">
        <ContactForm />
      </section>
    </div>
  );
};

export default CoursesPage;
