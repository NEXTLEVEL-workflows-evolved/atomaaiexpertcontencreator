/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Brain, 
  Camera, 
  Video, 
  Music, 
  Film, 
  ArrowRight, 
  ExternalLink,
  Clock,
  MapPin,
  Users,
  Award,
  Sparkles,
  Network,
  Smartphone,
  type LucideIcon
} from 'lucide-react';

// --- Types ---

interface Module {
  title: string;
  content: string[];
  image: string;
  icon: LucideIcon;
}

interface ModuleCardProps extends Module {
  number: number;
}

interface KeyInfoItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface HeroStat {
  label: string;
  val: string;
  color?: string;
}

// --- Constants ---
const LOGO_ATOMA = "https://i.postimg.cc/kX1VSZR1/logo.png";
const PHOTO_TEACHER = "https://i.postimg.cc/7YtZQ29Z/un-uomo-mezzo-202604141438.jpg";
const PHOTO_HERO_UP = "https://i.postimg.cc/KjMNrNTy/Up-Photo-low.jpg";
const COLOR_ACID = "#d4ff00";

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#15191c]/90 backdrop-blur-xl border-b border-white/5">
    <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
      <div className="flex items-center gap-3 md:gap-6">
        <motion.a 
          href="https://www.atoma.com/"
          whileHover={{ opacity: 0.8 }}
          className="h-8 md:h-10 bg-white/10 backdrop-blur-sm rounded-lg px-2 md:px-3 py-1 flex items-center"
        >
          <img src={LOGO_ATOMA} alt="ATOMA Logo" className="h-full object-contain" />
        </motion.a>
        <div className="h-5 md:h-6 w-[1px] bg-white/10" />
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-lg md:text-2xl font-black tracking-tighter text-[#d4ff00] cursor-default whitespace-nowrap"
        >
          NEXT.LEVEL
        </motion.div>
      </div>
      <div className="hidden lg:flex items-center gap-8 text-[9px] font-bold text-white/50 uppercase tracking-[0.2em]">
        <a href="#programma" className="hover:text-[#d4ff00] transition-colors">Programma</a>
        <a href="#docente" className="hover:text-[#d4ff00] transition-colors">Docente</a>
        <a href="#gol" className="hover:text-[#d4ff00] transition-colors">Progetto GOL</a>
      </div>
      <motion.a 
        href="https://api.leadconnectorhq.com/widget/form/6JTRXjB5riLah1CoOkWJ" 
        target="_blank" 
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${COLOR_ACID}44` }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#d4ff00] text-black px-4 md:px-8 py-2 rounded-full font-black text-[10px] md:text-xs tracking-widest hover:bg-white transition-all"
      >
        CONTATTACI
      </motion.a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-[#15191c]">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#d4ff00]/10 blur-[160px] rounded-full" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#2d5a27]/10 blur-[160px] rounded-full" />
    </div>
    
    <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8 md:mb-12 inline-block relative"
      >
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#15191c] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#15191c] to-transparent z-10" />
        <img 
          src={PHOTO_HERO_UP} 
          alt="Course Intro" 
          className="max-w-full h-auto rounded-2xl md:rounded-3xl shadow-2xl"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-[#d4ff00]/10 border border-[#d4ff00]/20 text-[#d4ff00] text-[8px] md:text-[10px] font-black tracking-[0.2em] uppercase mb-6 md:mb-8">
          <Award size={12} className="md:w-[14px] md:h-[14px]" />
          Programma GOL Regione Lombardia
        </div>
        
        <p className="text-base md:text-xl lg:text-[22px] text-white/70 mb-10 md:mb-14 max-w-4xl mx-auto leading-relaxed font-medium px-4">
          Tecnico della Produzione Multimediale e AI Content Creation.<br className="hidden md:block" />
          Un percorso di 100 ore per dominare il ciclo di produzione digitale tramite&nbsp;AI.
        </p>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16 max-w-4xl mx-auto">
          {( [
            { label: "Durata", val: "100 Ore" },
            { label: "Modalità", val: "FAD Sincrona" },
            { label: "Qualifica", val: "Tecnico Prod. Multi." },
            { label: "Costo", val: "Gratuito", color: COLOR_ACID }
          ] as HeroStat[]).map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1 md:gap-2 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/5">
              <span className="text-white/40 text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em]">{item.label}</span>
              <span className="text-white font-bold text-base md:text-lg" style={{ color: item.color }}>{item.val}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6 md:gap-8">
          <motion.a 
            href="https://api.leadconnectorhq.com/widget/form/6JTRXjB5riLah1CoOkWJ" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${COLOR_ACID}66` }}
            className="group relative inline-flex items-center gap-3 md:gap-4 bg-[#d4ff00] text-black px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-lg md:text-xl hover:bg-white transition-all overflow-hidden shadow-xl"
          >
            <span>ISCRIVITI ORA</span>
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <div className="flex items-center gap-3 md:gap-4 px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="flex -space-x-2 md:-space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`} 
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#15191c] grayscale hover:grayscale-0 transition-all" 
                  alt="User"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <span className="text-[9px] md:text-xs text-white/50 font-bold uppercase tracking-widest">Posti limitati</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const InstitutionalLogos = () => (
  <div className="bg-white py-8 md:py-10 border-y border-black/5">
    <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-20">
      <div className="flex flex-col items-center text-center">
        <span className="text-[8px] md:text-[9px] font-black text-black/40 uppercase tracking-widest mb-2 md:mb-3">Finanziato da</span>
        <div className="h-8 md:h-10 flex items-center gap-2 md:gap-3">
          <div className="w-10 md:w-12 h-6 md:h-8 bg-blue-800 rounded-sm" />
          <span className="text-[8px] md:text-[9px] font-bold leading-tight">Unione Europea<br/>NextGenerationEU</span>
        </div>
      </div>
      <div className="flex flex-col items-center text-center">
        <span className="text-[8px] md:text-[9px] font-black text-black/40 uppercase tracking-widest mb-2 md:mb-3">Promosso da</span>
        <span className="text-lg md:text-xl font-black tracking-tighter text-[#2d5a27]">Regione Lombardia</span>
      </div>
      <div className="flex flex-col items-center text-center">
        <span className="text-[8px] md:text-[9px] font-black text-black/40 uppercase tracking-widest mb-2 md:mb-3">In collaborazione con</span>
        <span className="text-lg md:text-xl font-black tracking-tighter text-black">ANPAL</span>
      </div>
      <div className="flex flex-col items-center text-center">
        <span className="text-[8px] md:text-[9px] font-black text-black/40 uppercase tracking-widest mb-2 md:mb-3">Programma</span>
        <span className="text-lg md:text-xl font-black tracking-tighter text-blue-600">GOL</span>
      </div>
    </div>
  </div>
);

const ModuleCard = ({ number, title, content, image, icon: Icon }: ModuleCardProps) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="group relative bg-[#1e1b2e] rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 border border-white/5 overflow-hidden grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-8 md:mb-12"
  >
    <div className="relative z-10">
      <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#d4ff00] flex items-center justify-center text-black shadow-[0_0_20px_rgba(212,255,0,0.3)]">
          <Icon size={24} className="md:w-8 md:h-8" />
        </div>
        <span className="text-4xl md:text-6xl font-black text-white">0{number}</span>
      </div>
      
      <h3 className="text-2xl md:text-4xl font-black text-white mb-4 md:mb-6 group-hover:text-[#d4ff00] transition-colors leading-tight">{title}</h3>
      
      <ul className="space-y-3 md:space-y-4 mb-4">
        {content.map((item, i) => (
          <li key={i} className="flex items-start gap-3 md:gap-4 text-base md:text-lg text-white/60 leading-relaxed">
            <div className="mt-2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#d4ff00] shrink-0 shadow-[0_0_10px_#d4ff00]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
    
    <div className="relative h-[250px] md:h-[400px] rounded-xl md:rounded-[2rem] overflow-hidden border border-white/10">
      <img 
        src={image} 
        alt={title} 
        loading="lazy"
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1c2125] via-transparent to-transparent opacity-40" />
      <div className="absolute inset-0 bg-[#d4ff00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  </motion.div>
);

const Program = () => {
  const modules: Module[] = [
    {
      title: "Strategia, Storytelling e Agenti Proattivi (12 Ore)",
      content: [
        "Configurazione Agenti: Creare agenti specializzati nella pianificazione editoriale",
        "Agentic Storytelling: Generazione di narrazioni e strategie di contenuto proattive",
        "Analisi dei Trend: Automazione degli script per campagne ADV basata sui dati di mercato correnti"
      ],
      image: "https://i.postimg.cc/JnmGFFb9/Students-shooting-video-202604221201.jpg",
      icon: Brain
    },
    {
      title: "Visual Design e Advanced Prompting (12 Ore)",
      content: [
        "Digital Shooting: Utilizzo di Nano Banana 2 per il compositing di base tra soggetti e sfondi",
        "Advanced Lighting Prompting: Studio della luce fisica applicata ai prompt per ottenere illuminazione fotorealistica",
        "Coerenza Visiva: Tecniche per mantenere i tratti somatici e l'identità di marca attraverso diverse generazioni"
      ],
      image: "https://i.postimg.cc/mDRtnnQK/Digital-Shooting-Visual-202604221201.jpg",
      icon: Camera
    },
    {
      title: "Generazione Multimodale e Automazione Cloud (12 Ore)",
      content: [
        "Produzione Video 1.0: Trasformazione di script in video dinamici con Veo 3.1 e MetaAI",
        "Automazione Contenuti: Utilizzo di estensioni browser gratuite per automatizzare clip per Reel e TikTok",
        "Master Prompting: Creazione di flussi rapidi per convertire un'idea in asset multimediali pronti all'uso"
      ],
      image: "https://i.postimg.cc/0N7zcvJh/Automazione-Contenuti-Master-202604221202.jpg",
      icon: Video
    },
    {
      title: "ComfyUI – Architettura a Nodi e Workflow Avanzati (24 Ore)",
      content: [
        "Workflow Ottimizzati: Installazione e gestione di flussi di lavoro a nodi già pronti per la produzione",
        "Fotorealismo Estremo: Utilizzo di FLUX dev + Lora per iniezione di texture cutanee reali",
        "Gestione Materiale Cliente e Faceswap Etico (Sostituzione esclusivamente su soggetti creati con IA)",
        "Video Generation Pro: Flussi FMLM con modelli Wan 2.2 e LTX 2.3"
      ],
      image: "https://i.postimg.cc/cHZrzzQj/Comfy-UI-Node-Architecture-202604221202.jpg",
      icon: Network
    },
    {
      title: "Sound Design, Voice Cloning e AI Avatar (12 Ore)",
      content: [
        "Sound Design: Creazione di colonne sonore originali e pulizia audio con IA",
        "Clonazione Vocale: Voice cloning per la creazione di speech con voci specifiche e personalizzate",
        "Talking Avatar: Creazione di video \"human-like\" con sincronizzazione labiale di base per marketing e formazione"
      ],
      image: "https://i.postimg.cc/Bv2jM31y/Sound-Design-AI-202604221202.jpg",
      icon: Music
    },
    {
      title: "Creazione Influencer AI e Produzione UGC (16 Ore)",
      content: [
        "Creazione Influencer: Sviluppo di modelli ultra-reali (espressioni, texture, illuminazione)",
        "Adattamento Ambientale: Inserimento coerente dei modelli digitali in ambienti reali o generati",
        "Produzione UGC e Sync Labiale Avanzato per la perfetta sincronizzazione dei contenuti social"
      ],
      image: "https://i.postimg.cc/3w2knhDs/Ragazzi-realizzano-video-202604221202.jpg",
      icon: Smartphone
    },
    {
      title: "Post-Produzione con DaVinci Resolve (12 Ore)",
      content: [
        "Struttura del Montaggio Professionale: Organizzazione media, timeline e gerarchia livelli video/audio",
        "Tecniche di Taglio e Assemblaggio & Editing Video con le funzioni principali della versione gratuita",
        "Color Correction & Visual Enhancement per uniformare gli asset prodotti dall'IA",
        "Mastering Audio e Finalizzazione: Pulizia sonora ed esportazione ottimizzata per i canali digitali"
      ],
      image: "https://i.postimg.cc/mr7P84FJ/Student-smiling-in-202604221203.jpg",
      icon: Film
    }
  ];

  return (
    <section id="programma" className="py-20 md:py-32 bg-[#15191c]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 md:gap-12 mb-16 md:mb-24 border-b border-white/5 pb-12 md:pb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4 md:mb-6">
              PROGRAMMA <br />
              <span className="text-[#d4ff00]">DIDATTICO</span>
            </h2>
            <p className="text-white/40 text-lg md:text-xl font-medium">
              Un percorso intensivo di 100 ore progettato per trasformarti in un professionista della produzione digitale con AI.
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-[#d4ff00] rounded-2xl md:rounded-3xl p-6 md:p-10 flex flex-col justify-between w-full lg:max-w-xl shadow-[0_0_50px_rgba(212,255,0,0.15)]"
          >
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <Sparkles className="text-black w-6 h-6 md:w-7 md:h-7" />
              <h3 className="text-xl md:text-2xl font-black text-black leading-none uppercase">Profilo Professionale</h3>
            </div>
            <p className="text-black/80 font-bold text-base md:text-lg mb-6 md:mb-8 leading-snug">
              Il corso forma l' <span className="underline">Expert AI Content Creator</span>, figura specializzata nel dominio del ciclo di produzione digitale tramite AI. 
              Il profilo è in grado di generare asset fotorealistici e video ADV ad alto impatto, delegando all'intelligenza artificiale il carico operativo e garantendo standard professionali tramite software di post-produzione cinematografica.
            </p>
            <div className="flex flex-wrap gap-2">
              {["AI Expert", "Digital Production", "VFX & Cinema"].map(tag => (
                <span key={tag} className="px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-black text-white text-[8px] md:text-[10px] font-black uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col">
          {modules.map((m, i) => (
            <ModuleCard key={i} number={i + 1} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Teacher = () => (
  <section id="docente" className="py-16 md:py-20 bg-[#d4ff00]">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
        <div className="relative max-w-[280px] md:max-w-sm mx-auto lg:mx-0">
          <div className="absolute inset-0 bg-[#2d5a27] rounded-full translate-x-2 md:translate-x-3 translate-y-2 md:translate-y-3" />
          <div className="relative aspect-square rounded-full overflow-hidden border-4 border-[#2d5a27] shadow-xl">
            <img 
              src={PHOTO_TEACHER} 
              alt="Corrado Canziani" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl tracking-tighter leading-none text-black">
            <span className="text-[#d4ff00] bg-black px-4 py-1 inline-block font-black">CORRADO CANZIANI</span>
          </h2>
          
          <div className="space-y-4">
            <div className="p-5 md:p-6 bg-black/5 text-black rounded-xl md:rounded-2xl border-l-4 border-[#2d5a27] text-left">
              <h4 className="text-black font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mb-3">docente</h4>
              <p className="text-sm md:text-base leading-relaxed font-medium opacity-90">
                Professionista Senior nel campo della produzione di contenuti digitali con Intelligenza Artificiale. Esperto nell'utilizzo e nell'integrazione di tutti i principali modelli generativi del momento — dai modelli proprietari ai modelli open source — con padronanza avanzata di ComfyUI per la creazione di pipeline visive personalizzate e l'automazione dei processi generativi. Senior Editor Video con competenze approfondite in Adobe Premiere Pro e Adobe After Effects, combina la maestria tecnica della post-produzione tradizionale con le più recenti tecnologie AI per la generazione di immagini, video, audio e voice design. Specializzato nella progettazione di Agenti Proattivi e Master Prompt per automatizzare oltre il 70% del carico operativo nella produzione di contenuti per social media e advertising.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start gap-8 md:gap-10 pt-2 md:pt-4">
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black text-black">20+</span>
              <span className="text-[8px] md:text-[9px] font-bold text-black/60 uppercase tracking-widest">Anni Exp</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black text-black">500+</span>
              <span className="text-[8px] md:text-[9px] font-bold text-black/60 uppercase tracking-widest">Studenti</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-20 md:py-32 bg-[#15191c] relative overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#d4ff00_1px,transparent_1px)] [background-size:40px_40px]" />
    </div>
    
    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
      <div className="flex flex-col items-center gap-6 md:gap-10">
        <p className="text-[#d4ff00] font-black tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs uppercase bg-[#d4ff00]/10 px-4 md:px-6 py-2 rounded-full">
          Richiedi ora la verifica dei requisiti GOL
        </p>
        
        <motion.a 
          href="https://api.leadconnectorhq.com/widget/form/6JTRXjB5riLah1CoOkWJ" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ 
            scale: 1.05, 
            boxShadow: `0 0 50px ${COLOR_ACID}88`,
            backgroundColor: COLOR_ACID,
            color: '#000'
          }}
          whileTap={{ scale: 0.98 }}
          className="group relative inline-flex items-center gap-4 md:gap-6 bg-white text-black px-8 md:px-14 py-5 md:py-7 rounded-xl md:rounded-[2rem] font-black text-lg md:text-3xl transition-all shadow-2xl text-center"
        >
          <span className="leading-tight">CONTATTACI PER MAGGIORI INFORMAZIONI</span>
          <ExternalLink className="w-5 h-5 md:w-8 md:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" />
        </motion.a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#0e1113] py-12 md:py-16 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12 text-center lg:text-left">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <motion.a 
            href="https://www.atoma.com/"
            whileHover={{ scale: 1.1, rotate: -2 }}
            className="h-10 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center"
          >
            <img src={LOGO_ATOMA} alt="ATOMA Logo" className="h-full object-contain opacity-80 hover:opacity-100 transition-opacity" />
          </motion.a>
          <div className="h-8 w-[1px] bg-white/10 hidden md:block" />
          <motion.span 
            whileHover={{ x: 5, color: COLOR_ACID }}
            className="text-[10px] md:text-xs font-black text-white/30 tracking-[0.2em] uppercase cursor-default"
          >
            Expert AI Content Creator
          </motion.span>
        </div>
        
        <div className="flex flex-col lg:items-end gap-4">
          <div className="flex flex-wrap justify-center lg:justify-end gap-4 md:gap-8 text-[9px] md:text-[10px] font-black text-white/20 uppercase tracking-widest">
            <motion.a whileHover={{ color: '#fff', x: -2 }} href="#" className="transition-colors">Privacy Policy</motion.a>
            <motion.a whileHover={{ color: '#fff', x: -2 }} href="#" className="transition-colors">Cookie Policy</motion.a>
            <motion.a whileHover={{ color: '#fff', x: -2 }} href="https://www.atoma.com/" className="transition-colors">Official Site</motion.a>
          </div>
          <p className="text-[9px] md:text-[10px] text-white/10 font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} ATOMA s.r.l. - Tutti i diritti riservati. In collaborazione con NEXT.LEVEL.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-[#15191c] font-sans selection:bg-[#d4ff00] selection:text-black scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <InstitutionalLogos />
        
        <section className="bg-[#1c2125] py-12 md:py-16 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
            {( [
              { icon: Clock, title: "100 ORE", desc: "Formazione intensiva" },
              { icon: MapPin, title: "MODALITÀ FAD", desc: "Sincrona (Online)" },
              { icon: Users, title: "GOL LOMBARDIA", desc: "Accesso gratuito" }
            ] as KeyInfoItem[]).map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }}
                className="flex items-center gap-4 md:gap-6 p-5 md:p-6 rounded-2xl md:rounded-3xl bg-white/[0.02] border border-white/5"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center text-[#d4ff00] shadow-inner">
                  <item.icon size={24} className="md:w-7 md:h-7" />
                </div>
                <div>
                  <h4 className="text-white font-black tracking-tight text-base md:text-lg">{item.title}</h4>
                  <p className="text-white/30 text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-black">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <Program />
        <Teacher />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
