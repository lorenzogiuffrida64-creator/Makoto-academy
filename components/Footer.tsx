import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 md:py-24 border-t border-white/5 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-12">
          {/* Brand Identity */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <a href="#home" className="flex flex-col group transition-opacity hover:opacity-80">
              <div className="flex flex-col">
                <span className="text-makotoGold font-heading font-black text-3xl md:text-4xl tracking-tighter uppercase">
                  MAKOTO<span className="text-white/20 ml-2">ACADEMY</span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-makotoGold/40 mt-1">Palermo Elite Training</span>
              </div>
            </a>
            <p className="text-white/40 max-w-sm leading-relaxed font-light text-sm md:text-base">
              L'eccellenza nelle arti marziali a Palermo. Un percorso di crescita tecnica e personale guidato dai migliori professionisti del settore.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-white">Navigazione</h4>
            <ul className="space-y-4 text-white/50 text-[13px] font-medium tracking-wide">
              <li><a href="#home" className="hover:text-makotoGold transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-makotoGold/30 rounded-full group-hover:w-3 transition-all"></span> Home</a></li>
              <li><a href="#vision" className="hover:text-makotoGold transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-makotoGold/30 rounded-full group-hover:w-3 transition-all"></span> Vision</a></li>
              <li><a href="#programmi" className="hover:text-makotoGold transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-makotoGold/30 rounded-full group-hover:w-3 transition-all"></span> Programmi</a></li>
              <li><a href="#location" className="hover:text-makotoGold transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-makotoGold/30 rounded-full group-hover:w-3 transition-all"></span> Academy</a></li>
              <li><a href="#contact" className="hover:text-makotoGold transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-makotoGold/30 rounded-full group-hover:w-3 transition-all"></span> Contatti</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-white">Contatti</h4>
            <ul className="space-y-6">
              <li className="flex flex-col gap-1">
                <span className="text-[9px] font-black text-makotoGold/60 uppercase tracking-widest">Sede Academy</span>
                <a 
                  href="https://maps.google.com/?q=Via+Alessandro+La+Marmora+1+Palermo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/60 text-[13px] font-light leading-snug hover:text-white transition-colors"
                >
                  Via Alessandro La Marmora, 1,<br />90143 Palermo (PA)
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[9px] font-black text-makotoGold/60 uppercase tracking-widest">Digital</span>
                <a href="mailto:makotojujitsuacademy@gmail.com" className="text-white/60 text-[13px] font-light hover:text-white transition-colors">
                  makotojujitsuacademy@gmail.com
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[9px] font-black text-makotoGold/60 uppercase tracking-widest">Telefono</span>
                <a href="tel:+393513241118" className="text-white/60 text-[13px] font-light hover:text-white transition-colors">
                  +39 351 324 1118
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-medium uppercase tracking-widest text-white/20 text-center md:text-left">
            © 2026 Makoto Jujitsu Academy. Tutti i diritti riservati.
          </p>
          <div className="flex gap-4 items-center">
            <a 
              href="https://www.instagram.com/makoto_jujitsu_academy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-makotoGold hover:bg-white/10 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.facebook.com/Makoto.JuJitsu.Academy/?locale=it_IT" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-makotoGold hover:bg-white/10 transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;