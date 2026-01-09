import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  CloudSync, 
  LogOut, 
  Search, 
  Filter, 
  MoreVertical, 
  Trash2, 
  CheckCircle, 
  Clock, 
  XCircle, 
  MessageSquare,
  ChevronRight,
  ShieldCheck,
  User,
  ExternalLink
} from 'lucide-react';

interface LeadRequest {
  id: string;
  date: string;
  nome: string;
  email: string;
  telefono: string;
  corso: string;
  messaggio: string;
  status: 'new' | 'pending' | 'completed';
  notes: string;
}

const Dashboard: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [requests, setRequests] = useState<LeadRequest[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeNote, setActiveNote] = useState<string | null>(null);
  const [noteText, setNoteText] = useState('');

  useEffect(() => {
    // Load data from localStorage
    const saved = localStorage.getItem('makoto_requests');
    if (saved) {
      setRequests(JSON.parse(saved));
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'MakotoDario123') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Password Errata');
    }
  };

  const updateRequests = (newRequests: LeadRequest[]) => {
    setRequests(newRequests);
    localStorage.setItem('makoto_requests', JSON.stringify(newRequests));
  };

  const deleteRequest = (id: string) => {
    if (confirm('Sei sicuro di voler eliminare questa richiesta?')) {
      updateRequests(requests.filter(r => r.id !== id));
    }
  };

  const changeStatus = (id: string, status: 'new' | 'pending' | 'completed') => {
    updateRequests(requests.map(r => r.id === id ? { ...r, status } : r));
  };

  const saveNote = () => {
    if (activeNote) {
      updateRequests(requests.map(r => r.id === activeNote ? { ...r, notes: noteText } : r));
      setActiveNote(null);
    }
  };

  const filteredRequests = requests.filter(r => 
    r.nome.toLowerCase().includes(searchTerm.toLowerCase()) || 
    r.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = {
    total: requests.length,
    new: requests.filter(r => r.status === 'new').length,
    pending: requests.filter(r => r.status === 'pending').length,
    completed: requests.filter(r => r.status === 'completed').length,
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-neutral-900 border border-white/10 p-10 rounded-[40px] shadow-2xl"
        >
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-makotoGold/20 rounded-2xl flex items-center justify-center text-makotoGold mb-6">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-heading font-black text-white tracking-tighter uppercase">Area Riservata</h1>
            <p className="text-white/40 text-sm mt-2">Inserisci le credenziali admin</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/30">Password Privata</label>
              <input 
                autoFocus
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-makotoGold transition-colors text-white text-center"
                placeholder="••••••••"
              />
            </div>
            {error && <p className="text-red-500 text-center text-xs font-bold">{error}</p>}
            <button className="w-full bg-makotoGold text-black font-black uppercase tracking-widest py-4 rounded-2xl hover:bg-white transition-all">
              Accedi
            </button>
          </form>
          <div className="mt-8 text-center">
            <a href="#home" className="text-white/20 hover:text-white text-[10px] uppercase font-bold tracking-widest transition-colors">Torna al sito</a>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#050505] text-white">
      {/* Sidebar */}
      <aside className="w-72 bg-black border-r border-white/5 flex flex-col fixed h-full z-20">
        <div className="p-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-makotoGold rounded-2xl flex items-center justify-center text-black font-black text-xl">
              MA
            </div>
            <div>
              <h3 className="font-heading font-black text-sm tracking-tight">MAKOTO ACADEMY</h3>
              <p className="text-[9px] text-white/30 uppercase font-black tracking-widest">ADMIN PANEL</p>
            </div>
          </div>

          <nav className="space-y-2">
            <div className="flex items-center gap-4 bg-makotoGold/10 text-makotoGold p-4 rounded-2xl transition-all cursor-default">
              <LayoutDashboard className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-widest">Dashboard</span>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="flex items-center gap-4 text-white/40 hover:text-white p-4 rounded-2xl transition-all hover:bg-white/5 w-full"
            >
              <CloudSync className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-widest">Sincronizza</span>
            </button>
          </nav>
        </div>

        <div className="mt-auto p-8 border-t border-white/5">
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="flex items-center gap-4 text-white/40 hover:text-red-500 p-4 rounded-2xl transition-all w-full"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-widest">Esci</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-72 p-12">
        <header className="flex justify-between items-end mb-16">
          <div className="space-y-2">
            <h1 className="text-5xl font-heading font-black tracking-tighter">
              gestione <span className="text-makotoGold">richieste</span>
            </h1>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white/30">Database Connesso</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
             <div className="bg-neutral-900 border border-white/10 px-6 py-3 rounded-2xl flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-makotoGold" />
               <span className="text-[10px] font-black uppercase tracking-widest text-white/60">{stats.new} NUOVE</span>
             </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-8 mb-12">
          {[
            { label: 'Totali', value: stats.total, color: 'text-white' },
            { label: 'Nuove', value: stats.new, color: 'text-makotoGold' },
            { label: 'In Corso', value: stats.pending, color: 'text-makotoYellow' },
            { label: 'Gestite', value: stats.completed, color: 'text-green-500' }
          ].map((stat) => (
            <div key={stat.label} className="bg-white/[0.02] border border-white/5 p-8 rounded-[40px] hover:bg-white/[0.04] transition-all">
              <span className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-4 block">{stat.label}</span>
              <p className={`text-6xl font-heading font-black ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Table Container */}
        <div className="bg-white/[0.02] border border-white/5 rounded-[50px] overflow-hidden">
          <div className="p-10 border-b border-white/5 flex flex-col md:flex-row gap-6 justify-between items-center">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input 
                type="text" 
                placeholder="Cerca per nome o email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-black/40 border border-white/5 rounded-2xl pl-14 pr-6 py-4 text-sm outline-none focus:border-makotoGold transition-all"
              />
            </div>
            <button className="flex items-center gap-3 bg-black/40 border border-white/5 px-8 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              <Filter className="w-4 h-4" />
              Tutti gli stati
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Data</th>
                  <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Mittente</th>
                  <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Corso</th>
                  <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Stato</th>
                  <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/20 text-right">Azioni</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.03]">
                <AnimatePresence>
                  {filteredRequests.length > 0 ? filteredRequests.map((req) => (
                    <motion.tr 
                      key={req.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="group hover:bg-white/[0.01] transition-colors"
                    >
                      <td className="px-10 py-8">
                        <span className="text-xs text-white/40 block mb-1">{req.date.split(',')[0]}</span>
                        <span className="text-[10px] font-bold text-white/20">{req.date.split(',')[1]}</span>
                      </td>
                      <td className="px-10 py-8">
                        <div className="flex flex-col">
                          <span className="text-sm font-black text-white mb-1 uppercase tracking-tight">{req.nome}</span>
                          <span className="text-xs text-white/30">{req.email}</span>
                          <span className="text-[10px] text-makotoGold/60 font-bold mt-1">{req.telefono}</span>
                        </div>
                      </td>
                      <td className="px-10 py-8">
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white/60">
                          {req.corso}
                        </span>
                      </td>
                      <td className="px-10 py-8">
                        <div className="flex items-center gap-2">
                          {req.status === 'new' && (
                            <div className="flex items-center gap-2 text-makotoGold">
                              <div className="w-1.5 h-1.5 rounded-full bg-current" />
                              <span className="text-[9px] font-black uppercase tracking-widest">NUOVA</span>
                            </div>
                          )}
                          {req.status === 'pending' && (
                            <div className="flex items-center gap-2 text-makotoYellow">
                              <Clock className="w-3 h-3" />
                              <span className="text-[9px] font-black uppercase tracking-widest">IN CORSO</span>
                            </div>
                          )}
                          {req.status === 'completed' && (
                            <div className="flex items-center gap-2 text-green-500">
                              <CheckCircle className="w-3 h-3" />
                              <span className="text-[9px] font-black uppercase tracking-widest">GESTITA</span>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-10 py-8 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={() => {
                              setActiveNote(req.id);
                              setNoteText(req.notes);
                            }}
                            className={`p-3 rounded-xl transition-all ${req.notes ? 'bg-makotoGold text-black' : 'bg-white/5 text-white/40 hover:text-white'}`}
                            title="Aggiungi Note"
                          >
                            <MessageSquare className="w-4 h-4" />
                          </button>
                          
                          <div className="h-4 w-px bg-white/10 mx-2" />

                          <button 
                            onClick={() => changeStatus(req.id, req.status === 'completed' ? 'pending' : 'completed')}
                            className={`p-3 rounded-xl transition-all ${req.status === 'completed' ? 'bg-green-500/10 text-green-500' : 'bg-white/5 text-white/40 hover:text-green-500'}`}
                            title="Marca come gestita"
                          >
                            <CheckCircle className="w-4 h-4" />
                          </button>
                          
                          <button 
                            onClick={() => deleteRequest(req.id)}
                            className="p-3 bg-white/5 rounded-xl text-white/40 hover:text-red-500 hover:bg-red-500/10 transition-all"
                            title="Elimina"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  )) : (
                    <tr>
                      <td colSpan={5} className="px-10 py-32 text-center">
                        <div className="flex flex-col items-center gap-4">
                          <Search className="w-12 h-12 text-white/5" />
                          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Nessuna richiesta trovata</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Note Modal */}
      <AnimatePresence>
        {activeNote && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg bg-neutral-900 border border-white/10 p-10 rounded-[40px] shadow-2xl"
            >
              <h3 className="text-2xl font-heading font-black mb-6 uppercase tracking-tight">Note per <span className="text-makotoGold">{requests.find(r => r.id === activeNote)?.nome}</span></h3>
              <textarea 
                autoFocus
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                rows={6}
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-makotoGold transition-all text-white resize-none mb-8"
                placeholder="Inserisci note private qui..."
              />
              <div className="flex gap-4">
                <button 
                  onClick={() => setActiveNote(null)}
                  className="flex-1 py-4 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all"
                >
                  Annulla
                </button>
                <button 
                  onClick={saveNote}
                  className="flex-1 py-4 bg-makotoGold text-black rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all"
                >
                  Salva Note
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;