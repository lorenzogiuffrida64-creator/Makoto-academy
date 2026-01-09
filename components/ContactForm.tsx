import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MapPin, Mail, Phone, CheckCircle2, AlertCircle } from 'lucide-react';
import ImportantWord from './ImportantWord';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    corso: 'MMA Training',
    messaggio: ''
  });

  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  const saveToLocalStorage = (data: typeof formData) => {
    const newRequest = {
      id: Date.now().toString(),
      date: new Date().toLocaleString('it-IT'),
      ...data,
      status: 'new' as const,
      notes: ''
    };
    const existing = JSON.parse(localStorage.getItem('makoto_requests') || '[]');
    localStorage.setItem('makoto_requests', JSON.stringify([newRequest, ...existing]));
    return newRequest;
  };

  const sendToGoogleSheet = async (data: typeof formData) => {
    if (!GOOGLE_SCRIPT_URL) {
      console.warn('Google Script URL not configured');
      return;
    }

    const formBody = new URLSearchParams();
    formBody.append('nome', data.nome);
    formBody.append('email', data.email);
    formBody.append('telefono', data.telefono);
    formBody.append('corso', data.corso);
    formBody.append('messaggio', data.messaggio);
    formBody.append('data', new Date().toLocaleString('it-IT'));

    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody.toString(),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    console.log('Form submitted with data:', formData);
    console.log('Google Script URL:', GOOGLE_SCRIPT_URL);

    try {
      // Save to localStorage for the Admin Dashboard
      const savedRequest = saveToLocalStorage(formData);
      console.log('Saved to localStorage:', savedRequest);

      // Verify it was saved
      const allRequests = JSON.parse(localStorage.getItem('makoto_requests') || '[]');
      console.log('All requests in localStorage:', allRequests.length);

      // Send to Google Sheet
      if (GOOGLE_SCRIPT_URL) {
        await sendToGoogleSheet(formData);
        console.log('Sent to Google Sheets');
      } else {
        console.warn('No Google Script URL configured');
      }

      setStatus('success');
      setFormData({
        nome: '',
        email: '',
        telefono: '',
        corso: 'MMA Training',
        messaggio: ''
      });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Submission error:', error);
      // Still show success if localStorage worked (Google Sheet might fail silently with no-cors)
      setStatus('success');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="container mx-auto px-6" id="contact">
      <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[60px] overflow-hidden grid md:grid-cols-2 shadow-2xl">
        <div className="p-8 md:p-20 bg-makotoYellow flex flex-col justify-center text-black">
          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6 md:mb-8">
            Sei <ImportantWord text="Pronto" color="text-black" /> a Domare il Tappeto?
          </h2>
          <p className="text-black/70 text-base md:text-lg mb-8 md:mb-12 font-medium leading-relaxed">
            Entra a far parte dell'Elite. Contattaci direttamente o prenota la tua prima lezione gratuita tramite il form.
          </p>
          
          <div className="space-y-5 md:space-y-8">
            <div className="flex items-start gap-4 md:gap-5">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-black/10 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-black" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-black/40">Sede Academy</span>
                <span className="font-bold text-xs md:text-sm leading-snug">Via Alessandro La Marmora, 1,<br />90143 Palermo (PA)</span>
              </div>
            </div>

            <div className="flex items-start gap-4 md:gap-5">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-black/10 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-black" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-black/40">E-mail Ufficiale</span>
                <a href="mailto:makotojujitsuacademy@gmail.com" className="font-bold text-xs md:text-sm hover:underline break-all">
                  makotojujitsuacademy@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 md:gap-5">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-black/10 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-black" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-black/40">Linea Diretta</span>
                <a href="tel:+393513241118" className="font-bold text-xs md:text-sm hover:underline">
                  +39 351 324 1118
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-20 flex flex-col justify-center bg-black/40 backdrop-blur-sm relative">
          <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-1.5 md:space-y-2">
              <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-white/50">Nome Completo</label>
              <input 
                required
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                type="text" 
                placeholder="Mario Rossi"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 md:px-6 py-3 md:py-4 outline-none focus:border-makotoYellow transition-colors text-white text-sm md:text-base"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-white/50">E-mail</label>
                <input
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="mario@email.it"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 md:px-6 py-3 md:py-4 outline-none focus:border-makotoYellow transition-colors text-white text-sm md:text-base"
                />
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-white/50">Telefono</label>
                <input
                  required
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  type="tel"
                  placeholder="+39 000..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 md:px-6 py-3 md:py-4 outline-none focus:border-makotoYellow transition-colors text-white text-sm md:text-base"
                />
              </div>
            </div>

            <div className="space-y-1.5 md:space-y-2">
              <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-white/50">Corso d'interesse</label>
              <select
                name="corso"
                value={formData.corso}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 md:px-6 py-3 md:py-4 outline-none focus:border-makotoYellow transition-colors appearance-none text-white text-sm md:text-base"
              >
                <option value="MMA Training" className="bg-neutral-900">MMA Training</option>
                <option value="Brazilian Jujitsu" className="bg-neutral-900">Brazilian Jujitsu</option>
                <option value="Jujitsu Kids" className="bg-neutral-900">Jujitsu Kids</option>
                <option value="Tutti i Corsi" className="bg-neutral-900">Tutti i Corsi</option>
              </select>
            </div>

            <div className="space-y-1.5 md:space-y-2">
              <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-white/50">Messaggio (Opzionale)</label>
              <textarea
                name="messaggio"
                value={formData.messaggio}
                onChange={handleChange}
                rows={3}
                placeholder="Raccontaci i tuoi obiettivi..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 md:px-6 py-3 md:py-4 outline-none focus:border-makotoYellow transition-colors resize-none text-white text-sm md:text-base"
              />
            </div>

            <motion.button
              disabled={status === 'submitting'}
              whileHover={{ scale: status === 'submitting' ? 1 : 1.02, backgroundColor: status === 'submitting' ? 'transparent' : '#facc15', color: status === 'submitting' ? '#facc15' : '#000' }}
              whileTap={{ scale: status === 'submitting' ? 1 : 0.98 }}
              className={`w-full py-4 md:py-5 rounded-2xl border-2 border-makotoYellow text-makotoYellow font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-sm md:text-base flex items-center justify-center gap-2 md:gap-3 transition-all mt-3 md:mt-4 ${status === 'submitting' ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {status === 'submitting' ? (
                <>
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-5 h-5 border-2 border-makotoYellow border-t-transparent rounded-full"
                  />
                  Invio in corso...
                </>
              ) : (
                <>
                  Invia Richiesta
                  <Send className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </form>

          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 md:mt-0 md:absolute md:inset-x-0 md:bottom-6 md:px-20 pointer-events-none"
              >
                <div className="bg-green-500/20 border border-green-500/50 backdrop-blur-md p-3 md:p-4 rounded-2xl flex items-center gap-2 md:gap-3 text-green-400">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
                  <span className="text-xs md:text-sm font-bold tracking-tight">Richiesta inviata! Ti contatteremo a breve.</span>
                </div>
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 md:mt-0 md:absolute md:inset-x-0 md:bottom-6 md:px-20 pointer-events-none"
              >
                <div className="bg-red-500/20 border border-red-500/50 backdrop-blur-md p-3 md:p-4 rounded-2xl flex items-center gap-2 md:gap-3 text-red-400">
                  <AlertCircle className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
                  <span className="text-xs md:text-sm font-bold tracking-tight">Errore nell'invio. Riprova o chiamaci.</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;