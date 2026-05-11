/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
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
  Quote,
  Facebook,
  Twitter,
  Linkedin,
  CheckCircle2,
  AlertCircle,
  Info,
  X,
  Layers,
  Image,
  Cpu,
  Calendar,
  MessageCircle,
  type LucideIcon
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';
import logoNextLevel from './Logo_NEXTLEVEL.svg';

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
const PHOTO_GOL_BANNER = "https://i.postimg.cc/wM9byj8T/Whats-App-Image-2026-05-06-at-11-28-55-(4).jpg";
const COLOR_ACID = "#D4FF00";
const COLOR_ROSA = "#E8327C";
const COLOR_TEAL_MIST = "#637877";
const COLOR_BG = "#1B292D";
const COLOR_SURFACE = "#2C4248";
const COLOR_TEXT_PARA = "#9CAEAE";

// --- Components ---

const ToolCard = ({ name, desc, icon: Icon, link }: { name: string, desc: string, icon: LucideIcon, link: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <motion.div 
        whileHover={{ y: -5 }}
        className="p-6 rounded-2xl border bg-white/5 border-white/10 flex flex-col items-center text-center gap-4"
      >
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white" style={{ backgroundColor: COLOR_ROSA }}>
          <Icon size={32} />
        </div>
        <h3 className="text-xl font-black text-white">{name}</h3>
        <p className="text-sm text-white/50 leading-relaxed line-clamp-2">{desc}</p>
        <button 
          onClick={() => setIsOpen(true)}
          className="mt-2 text-[10px] font-black text-[#E8327C] uppercase tracking-widest flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Info size={14} /> + Info
        </button>
      </motion.div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/90 backdrop-blur-md" 
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative bg-[#151C17] border border-[#E8327C]/30 p-8 md:p-12 rounded-[2rem] max-w-xl w-full shadow-2xl"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white/20 hover:text-white"
            >
              <X size={24} />
            </button>
            <div className="w-20 h-20 rounded-3xl bg-[#E8327C] flex items-center justify-center text-white mb-8">
              <Icon size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase">
              {name} <span className="text-[#E8327C]">Insight</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              {desc}
            </p>
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#E8327C] text-white px-8 py-4 rounded-xl font-black uppercase tracking-tighter hover:bg-white hover:text-black transition-all"
            >
              Documentazione Ufficiale
              <ExternalLink size={18} />
            </a>
          </motion.div>
        </div>
      )}
    </>
  );
};

const ToolsShowcase = () => (
  <section className="py-20 md:py-32" style={{ backgroundColor: COLOR_BG }}>
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16 underline-offset-8">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4 uppercase">
          I Nostri <span className="text-[#D4FF00]">Superpoteri</span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg" style={{ color: COLOR_TEXT_PARA }}>
          I modelli generativi e i tool di automazione che padroneggerai durante il percorso.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ToolCard 
          name="ComfyUI" 
          icon={Layers}
          desc="La soluzione professionale basata su nodi per creare pipeline di AI Generativa personalizzate e scalabili."
          link="https://www.comfyuianalytics.com/"
        />
        <ToolCard 
          name="FLUX" 
          icon={Cpu}
          desc="Il nuovo standard per il fotorealismo e la gestione del testo nelle immagini generatire."
          link="https://blackforestlabs.ai/"
        />
        <ToolCard 
          name="Wan 2.2" 
          icon={Film}
          desc="Modello all'avanguardia per la generazione video cinematografica con dinamismo estremo."
          link="https://wanvideo.github.io/"
        />
        <ToolCard 
          name="LTX 2.3" 
          icon={Video}
          desc="Velocità e precisione nel video-to-video e text-to-video per flussi di produzione real-time."
          link="https://github.com/lightricks/LTX-Video"
        />
      </div>
    </div>
  </section>
);

const Navbar = ({ onSwitch, isPaid }: { onSwitch: () => void, isPaid: boolean }) => (
  <nav 
    className="fixed top-0 w-full z-50 backdrop-blur-xl border-b" 
    style={{ backgroundColor: `${COLOR_BG}E6`, borderColor: `${COLOR_TEAL_MIST}33` }}
    aria-label="Navigazione principale"
  >
    <div className="max-w-7xl mx-auto px-4 h-16 md:h-24 flex items-center justify-between">
      <div className="flex items-center gap-3 md:gap-5">
        <motion.a 
          href="https://www.atoma.com/"
          aria-label="Torna al sito ufficiale ATOMA"
          whileHover={{ opacity: 0.8 }}
          className="h-9 md:h-12 border rounded-xl px-2 md:px-4 py-1 flex items-center shadow-inner"
          style={{ backgroundColor: COLOR_BG, borderColor: `${COLOR_TEAL_MIST}4D` }}
        >
          <img src={LOGO_ATOMA} alt="Logo ATOMA" className="h-full object-contain" decoding="async" />
        </motion.a>
        <div className="h-6 md:h-8 w-[1px]" style={{ backgroundColor: `${COLOR_TEAL_MIST}33` }} />
        <motion.div 
          whileHover={{ scale: 1.05 }}
          onClick={onSwitch}
          className="cursor-pointer flex items-center"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onSwitch()}
          aria-label="Passa alla versione del corso"
        >
          <img 
            src={logoNextLevel} 
            alt="Logo NEXT.LEVEL" 
            className="h-10 md:h-14 object-contain rounded-lg"
            decoding="async"
          />
        </motion.div>
      </div>
      <div className="hidden lg:flex items-center gap-8 text-[10px] font-[900] text-white/50 uppercase tracking-[0.2em]">
        <a href="#programma" className="hover:text-[#D4FF00] transition-colors">Programma</a>
        <a href="#docente" className="hover:text-[#D4FF00] transition-colors">Docente</a>
        {!isPaid && <a href="#gol" className="hover:text-[#D4FF00] transition-colors">Progetto GOL</a>}
      </div>
      <div className="flex items-center gap-4">
        <motion.a 
          href={isPaid ? "https://www.atoma.com/contatti/" : "https://api.leadconnectorhq.com/widget/form/6JTRXjB5riLah1CoOkWJ"} 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${COLOR_ACID}44` }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#D4FF00] text-[#0D1A1D] px-4 md:px-6 py-2 rounded-full font-[900] text-[10px] md:text-xs tracking-widest hover:bg-white transition-all shadow-lg"
        >
          {isPaid ? 'INFO ACQUISTO' : 'CONTATTACI'}
        </motion.a>
      </div>
    </div>
  </nav>
);

const Hero = ({ isPaid, onSwitch }: { isPaid: boolean, onSwitch: () => void }) => (
  <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden" style={{ backgroundColor: COLOR_BG }}>
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-[#D4FF00]/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] blur-[120px] rounded-full" style={{ backgroundColor: `${COLOR_ROSA}1A` }} />
    </div>
    
    <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-10 md:space-y-16"
      >
        <h1 className="text-5xl md:text-8xl lg:text-[110px] font-[900] text-white tracking-tighter leading-[0.85] font-display uppercase">
          Expert AI <br />
          <span className="text-[#D4FF00]">Content Creator</span>
        </h1>

        {!isPaid ? (
          <div id="gol" className="max-w-4xl mx-auto space-y-10 scroll-mt-24">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[#D4FF00] text-[10px] md:text-sm font-black tracking-[0.2em] uppercase" style={{ backgroundColor: `${COLOR_ACID}1A`, borderColor: `${COLOR_ACID}33` }}>
                <Award size={16} />
                Programma GOL Regione Lombardia
              </div>
              
              <div className="text-left bg-white/5 backdrop-blur-md p-6 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
                <h2 className="text-2xl md:text-3xl font-[900] text-white mb-6 uppercase tracking-tight">
                  I Requisiti <span className="text-[#D4FF00]">Fondamentali</span>
                </h2>
                <ul className="grid md:grid-cols-2 gap-4 md:gap-6">
                  {( [
                    "Residenza o domicilio in Lombardia",
                    "Stato di disoccupazione documentato",
                    "Età compresa tra i 16 e i 65 anni",
                    "Partecipazione al programma GOL"
                  ]).map((req, i) => (
                    <li key={i} className="flex items-center gap-4 text-white/80 text-base md:text-lg font-bold">
                      <CheckCircle2 className="text-[#D4FF00] shrink-0" size={24} />
                      {req}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 rounded-2xl bg-[#D4FF00]/10 border border-[#D4FF00]/20 flex items-start gap-4">
                  <AlertCircle className="text-[#D4FF00] shrink-0 mt-1" size={20} />
                  <p className="text-sm md:text-base leading-relaxed font-medium" style={{ color: COLOR_TEXT_PARA }}>
                    L’iscrizione al nostro corso è <span className="text-[#D4FF00] font-[900] underline">TOTALMENTE GRATUITA</span> per chi possiede questi requisiti, grazie al finanziamento di Regione Lombardia.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[2rem] border space-y-6 shadow-2xl" style={{ backgroundColor: COLOR_SURFACE, borderColor: `${COLOR_TEAL_MIST}33` }}>
              <p className="text-xl md:text-3xl font-[900] text-white tracking-tight uppercase leading-[0.9]">
                NON HAI I REQUISITI? <br className="hidden md:block" /> 
                <span className="text-[#E8327C] font-[900] text-xl md:text-2xl">ABBIAMO LA SOLUZIONE PER TE</span>
              </p>
              <button 
                onClick={onSwitch}
                className="inline-flex items-center gap-3 bg-white text-[#0D1A1D] px-8 py-4 rounded-2xl font-[900] text-base md:text-lg hover:bg-[#D4FF00] transition-all transform hover:scale-105 shadow-xl"
              >
                SCOPRI LA VERSIONE PRIVATA
                <ArrowRight size={22} />
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="p-8 md:p-12 rounded-[2.5rem] border shadow-2xl" style={{ backgroundColor: `${COLOR_ROSA}0D`, borderColor: `${COLOR_ROSA}33` }}>
              <h2 className="text-2xl md:text-4xl font-[900] text-white mb-6 uppercase tracking-tighter">
                ACCESSO <span className="text-[#E8327C]">EXCLUSIVE</span>
              </h2>
              <p className="text-xl md:text-3xl text-white/90 leading-tight font-[900] uppercase mb-8">
                Corso d'eccellenza: <span className="text-[#E8327C]">2.000 euro</span> <br />
                con possibilità di <span className="text-[#E8327C] underline decoration-wavy">RIMBORSO</span>.
              </p>
              <p className="text-white/60 font-bold text-lg leading-relaxed max-w-2xl mx-auto">
                Tu pensa a contattarci e la soluzione adatta a te la troviamo noi. Il nostro team ti guiderà nella scelta migliore per la tua carriera.
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <motion.a 
                href="https://www.atoma.com/contatti/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${COLOR_ROSA}66` }}
                className="bg-[#E8327C] text-white px-10 py-4 rounded-2xl font-[900] text-lg hover:bg-white hover:text-[#0D1A1D] transition-all shadow-xl uppercase tracking-tighter"
              >
                RICHIEDI INFO ACQUISTO
              </motion.a>
              <button 
                onClick={onSwitch} 
                className="text-white/40 text-xs font-bold uppercase tracking-widest hover:text-[#D4FF00] transition-colors"
                aria-label="Passa al programma GOL gratuito"
              >
                TORNA AL PROGRAMMA GOL GRATUITO
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
          {( [
            { label: "Durata", val: isPaid ? "40 Ore" : "100 Ore" },
            { label: "Modalità", val: "FAD Sincrona" },
            { label: "Qualifica", val: isPaid ? "Attestato Privato" : "Tecnico Prod. Multi." },
            { label: "Costo", val: isPaid ? "€ 2.000" : "Gratuito", color: COLOR_ACID }
          ] as HeroStat[]).map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1 md:gap-2 p-4 rounded-2xl border" style={{ backgroundColor: COLOR_SURFACE, borderColor: `${COLOR_TEAL_MIST}22` }}>
              <span className="text-white/40 text-[9px] font-[900] uppercase tracking-[0.2em]">{item.label}</span>
              <span className="text-white font-bold text-base md:text-lg" style={{ color: item.color }}>{item.val}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const InstitutionalLogos = () => (
  <div className="bg-white border-y border-black/5 flex items-center justify-center p-0">
    <div className="max-w-7xl mx-auto px-4 w-full">
      <img 
        src={PHOTO_GOL_BANNER} 
        alt="Partner Loghi" 
        className="w-full h-auto object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  </div>
);

const ModuleCard = ({ number, title, content, image, icon: Icon }: ModuleCardProps) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="group relative rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 border overflow-hidden grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-8 md:mb-12 shadow-xl"
    style={{ backgroundColor: COLOR_SURFACE, borderColor: `${COLOR_TEAL_MIST}22` }}
  >
    <div className="relative z-10">
      <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
        <div 
          className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center text-[#0D1A1D] shadow-lg"
          style={{ backgroundColor: COLOR_ACID, boxShadow: `0 0 20px ${COLOR_ACID}4D` }}
        >
          <Icon size={24} className="md:w-8 md:h-8" aria-hidden="true" />
        </div>
        <span className="text-4xl md:text-6xl font-[900]" style={{ color: COLOR_ROSA, opacity: 0.8 }}>0{number}</span>
      </div>
      
      <h3 className="text-2xl md:text-4xl font-[900] text-white mb-4 md:mb-6 group-hover:text-[#D4FF00] transition-colors leading-tight uppercase">{title}</h3>
      
      <ul className="space-y-3 md:space-y-4 mb-4">
        {content.map((item, i) => (
          <li key={i} className="flex items-start gap-3 md:gap-4 text-base md:text-lg leading-relaxed" style={{ color: COLOR_TEXT_PARA }}>
            <div className="mt-2.5 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full shrink-0 shadow-lg" style={{ backgroundColor: COLOR_ACID, boxShadow: `0 0 8px ${COLOR_ACID}` }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
    
    <div className="relative h-[250px] md:h-[400px] rounded-xl md:rounded-[2rem] overflow-hidden border border-white/5">
      <img 
        src={image} 
        alt={`Immagine rappresentativa per ${title}`} 
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1A1D] via-transparent to-transparent opacity-60" />
      <div className="absolute inset-0 bg-[#D4FF00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  </motion.div>
);

const Program = ({ isPaid }: { isPaid: boolean }) => {
  const getHours = (h: number) => isPaid ? Math.round(h / 2.5) : h;

  const modules: Module[] = [
    {
      title: `Strategia, Storytelling e Agenti Proattivi (${getHours(12)} Ore)`,
      content: [
        "Configurazione Agenti: Creare agenti specializzati nella pianificazione editoriale",
        "Agentic Storytelling: Generazione di narrazioni e strategie di contenuto proattive",
        "Analisi dei Trend: Automazione degli script per campagne ADV basata sui dati di mercato correnti"
      ],
      image: "https://i.postimg.cc/JnmGFFb9/Students-shooting-video-202604221201.jpg",
      icon: Brain
    },
    {
      title: `Visual Design e Advanced Prompting (${getHours(12)} Ore)`,
      content: [
        "Digital Shooting: Utilizzo di Nano Banana 2 per il compositing di base tra soggetti e sfondi",
        "Advanced Lighting Prompting: Studio della luce fisica applicata ai prompt per ottenere illuminazione fotorealistica",
        "Coerenza Visiva: Tecniche per mantenere i tratti somatici e l'identità di marca attraverso diverse generazioni"
      ],
      image: "https://i.postimg.cc/mDRtnnQK/Digital-Shooting-Visual-202604221201.jpg",
      icon: Camera
    },
    {
      title: `Generazione Multimodale e Automazione Cloud (${getHours(12)} Ore)`,
      content: [
        "Produzione Video 1.0: Trasformazione di script in video dinamici con Veo 3.1 e MetaAI",
        "Automazione Contenuti: Utilizzo di estensioni browser gratuite per automatizzare processo produzione foto e video",
        "Master Prompting: Creazione di flussi rapidi per convertire un'idea in asset multimediali pronti all'uso"
      ],
      image: "https://i.postimg.cc/0N7zcvJh/Automazione-Contenuti-Master-202604221202.jpg",
      icon: Video
    },
    {
      title: `ComfyUI – Architettura a Nodi e Workflow Avanzati (${getHours(24)} Ore)`,
      content: [
        "Workflow Ottimizzati: Installazione e gestione di flussi di lavoro a nodi già pronti per la produzione",
        "Fotorealismo Estremo: Utilizzo di FLUX dev + Lora per iniezione di texture cutanee reali",
        "Gestione Materiale Cliente e Faceswap Etico (Sostituzione esclusivamente su soggetti creati con IA)",
        "Video Generation Pro: Flussi di generazione video con i modelli Wan 2.2 e LTX 2.3"
      ],
      image: "https://i.postimg.cc/cHZrzzQj/Comfy-UI-Node-Architecture-202604221202.jpg",
      icon: Network
    },
    {
      title: `Sound Design, Voice Cloning e AI Avatar (${getHours(12)} Ore)`,
      content: [
        "Sound Design: Creazione di colonne sonore originali e pulizia audio con IA",
        "Clonazione Vocale: Voice cloning per la creazione di speech con voci specifiche e personalizzate",
        "Talking Avatar: Creazione di video \"human-like\" con sincronizzazione labiale di base per marketing e formazione"
      ],
      image: "https://i.postimg.cc/Bv2jM31y/Sound-Design-AI-202604221202.jpg",
      icon: Music
    },
    {
      title: `Creazione Influencer AI e Produzione UGC (${getHours(16)} Ore)`,
      content: [
        "Creazione Influencer: Sviluppo di modelli ultra-reali (espressioni, texture, illuminazione)",
        "Adattamento Ambientale: Inserimento coerente dei modelli digitali in ambienti reali o generati",
        "Produzione UGC e Sync Labiale Avanzato per la perfetta sincronizzazione dei contenuti social"
      ],
      image: "https://i.postimg.cc/3w2knhDs/Ragazzi-realizzano-video-202604221202.jpg",
      icon: Smartphone
    },
    {
      title: `Post-Produzione con DaVinci Resolve (${getHours(12)} Ore)`,
      content: [
        "Struttura del Montaggio Professionale: Organizzazione media, timeline e gerarchia livelli video/audio",
        "Tecniche di Taglio e Assemblaggio & Editing Video con le funzioni principali della versione gratuita",
        "Color Correction & Visual Enhancement per uniformare gli asset prodotti dall'IA",
        "Mastering Audio e Finalizzazione: Pulizia sonora ed esportazione ottimizzata per i canali digitali"
      ],
      image: "https://i.postimg.cc/KvDGdNyk/Ricrea-immagine-simile-a-image1-202605061858.jpg",
      icon: Film
    }
  ];

  return (
    <section id="programma" className="py-20 md:py-32 border-t border-white/5 scroll-mt-24" style={{ backgroundColor: COLOR_BG }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 md:gap-12 mb-16 md:mb-24 border-b border-white/5 pb-12 md:pb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-7xl font-[900] text-white tracking-tighter mb-4 md:mb-6 uppercase">
              PROGRAMMA <br />
              <span className="text-[#D4FF00]">DIDATTICO</span>
            </h2>
            <p className="text-lg md:text-xl font-medium leading-relaxed" style={{ color: COLOR_TEXT_PARA }}>
              Un percorso intensivo di {getHours(100)} ore progettato per trasformarti in un professionista della produzione digitale con AI.
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="rounded-2xl md:rounded-3xl p-6 md:p-10 flex flex-col justify-between w-full lg:max-w-xl shadow-2xl relative overflow-hidden"
            style={{ backgroundColor: COLOR_ROSA }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <Sparkles className="text-white w-6 h-6 md:w-7 md:h-7" />
                <h3 className="text-xl md:text-2xl font-[900] text-white leading-none uppercase">Profilo Professionale</h3>
              </div>
              <p className="text-white font-bold text-base md:text-lg mb-6 md:mb-8 leading-tight">
                Il corso forma l' <span className="text-[#D4FF00] font-[900]">Expert AI Content Creator</span>, figura specializzata nel dominio del ciclo di produzione digitale tramite AI. 
                {isPaid ? " Un percorso d'elite progettato per professionisti che vogliono l'eccellenza senza compromessi." : " Il profilo è in grado di generare asset fotorealistici e video ADV ad alto impatto."}
              </p>
              <div className="flex flex-wrap gap-2">
                {["AI Expert", "Digital Production", "Professional"].map(tag => (
                  <span key={tag} className="px-3 md:px-4 py-1.5 rounded-full bg-white/20 text-white text-[8px] md:text-[10px] font-black uppercase tracking-widest backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>
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

const Teacher = () => {
  return (
    <section id="docente" className="py-20 md:py-32 scroll-mt-24" style={{ backgroundColor: COLOR_ACID }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative max-w-[320px] md:max-w-md mx-auto lg:mx-0">
            <div className="absolute inset-0 rounded-[3rem] translate-x-4 translate-y-4" style={{ backgroundColor: COLOR_SURFACE }} />
            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border-4 shadow-2xl" style={{ borderColor: COLOR_SURFACE }}>
              <img 
                src={PHOTO_TEACHER} 
                alt="Corrado Canziani - Docente Senior" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block px-6 py-2 bg-[#0D1A1D] text-[#D4FF00] font-[900] text-3xl md:text-5xl uppercase tracking-tighter shadow-lg transform -rotate-1">
              CORRADO CANZIANI
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {( ["Senior Video Editor", "Motion Designer", "Camera Operator"]).map((role) => (
                <span key={role} className="px-4 py-1 bg-[#0D1A1D] text-white text-[10px] md:text-sm font-black uppercase tracking-widest rounded-lg">
                  {role}
                </span>
              ))}
            </div>
            
            <div className="space-y-6">
              <div className="p-8 bg-[#0D1A1D]/5 text-[#0D1A1D] rounded-[2rem] border-l-8 shadow-inner text-left" style={{ borderColor: COLOR_SURFACE }}>
                <h4 className="font-[900] text-[11px] uppercase tracking-[0.25em] mb-4 opacity-60">Profilo Docente</h4>
                <p className="text-base md:text-lg leading-relaxed font-medum text-[#0D1A1D]">
                  Professionista Senior nel campo della produzione di contenuti digitali con Intelligenza Artificiale. Esperto nell'integrazione di flussi di lavoro avanzati, con padronanza di ComfyUI e pipeline visive personalizzate. Senior Editor Video con competenze decennali in Adobe Creative Cloud.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-3xl bg-white/40 backdrop-blur-sm border-2 border-[#0D1A1D]/10 flex items-center gap-4">
                <Calendar className="text-[#0D1A1D]" size={36} />
                <div className="flex flex-col text-left">
                  <span className="text-3xl md:text-4xl font-[900] text-[#0D1A1D] leading-none">20+</span>
                  <span className="text-[10px] font-black text-[#0D1A1D]/50 uppercase tracking-widest">Anni Exp</span>
                </div>
              </div>
              <div className="p-6 rounded-3xl bg-white/40 backdrop-blur-sm border-2 border-[#0D1A1D]/10 flex items-center gap-4">
                <Users className="text-[#0D1A1D]" size={36} />
                <div className="flex flex-col text-left">
                  <span className="text-3xl md:text-4xl font-[900] text-[#0D1A1D] leading-none">500+</span>
                  <span className="text-[10px] font-black text-[#0D1A1D]/50 uppercase tracking-widest">Studenti</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marco R.",
      role: "Content Creator",
      photo: "https://i.pravatar.cc/150?img=11",
      quote: "Corso eccezionale! Ho imparato a ottimizzare i miei flussi di lavoro con l'AI raddoppiando la mia produttività. Corrado è un docente straordinario."
    },
    {
      name: "Elena F.",
      role: "Social Media Manager",
      photo: "https://i.pravatar.cc/150?img=5",
      quote: "Finalmente un percorso pratico e concreto. Le tecniche di Advanced Prompting e la generazione video mi hanno permesso di ampliare i servizi per la mia agenzia."
    },
    {
      name: "Luca B.",
      role: "Video Maker",
      photo: "https://i.pravatar.cc/150?img=12",
      quote: "L'approccio a ComfyUI e la parte pratica mi hanno aperto un mondo. Mai visto un programma così completo e aggiornato sulle ultime release dei modelli AI."
    }
  ];

  return (
    <section 
      className="py-20 md:py-32 border-y" 
      style={{ backgroundColor: `${COLOR_SURFACE}80`, borderColor: `${COLOR_TEAL_MIST}33` }}
      aria-labelledby="testimonials-title"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <h2 id="testimonials-title" className="text-3xl md:text-5xl font-[900] text-white tracking-tighter mb-4 uppercase">
            Feedback <span className="text-[#D4FF00]">Studenti</span>
          </h2>
          <p className="text-lg font-medium" style={{ color: COLOR_TEXT_PARA }}>Storie di successo dai nostri corsisti.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 md:p-8 rounded-3xl border relative group hover:border-[#D4FF00]/30 transition-colors shadow-lg"
              style={{ backgroundColor: COLOR_BG, borderColor: `${COLOR_TEAL_MIST}22` }}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#D4FF00] opacity-10 group-hover:opacity-20 transition-opacity" aria-hidden="true" />
              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 relative z-10 font-medium">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.photo} 
                  alt={`Foto di ${t.name}`} 
                  loading="lazy"
                  decoding="async"
                  className="w-12 h-12 rounded-full border-2"
                  style={{ borderColor: `${COLOR_TEAL_MIST}33` }}
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-white font-[900] text-sm uppercase tracking-widest">{t.name}</h4>
                  <p className="text-[#D4FF00] text-[10px] font-bold uppercase tracking-[0.2em]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = ({ isPaid, onSwitch }: { isPaid: boolean, onSwitch: () => void }) => {
  const shareUrl = encodeURIComponent("https://atomaaiexpertcontencreator.vercel.app/");
  const shareText = encodeURIComponent(`Diventa un Tecnico della Produzione Multimediale e AI Content Creation con questo corso ${isPaid ? 'Privato' : 'GOL Gratuito'}! 🚀`);
  
  return (
    <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: COLOR_BG }}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#D4FF00_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="flex flex-col items-center gap-6 md:gap-10">
          <p 
            className="font-[900] tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs uppercase px-4 md:px-6 py-2 rounded-full"
            style={{ backgroundColor: `${COLOR_ROSA}1A`, color: COLOR_ROSA, border: `1px solid ${COLOR_ROSA}33` }}
          >
            {isPaid ? "NON PERDERE QUESTA OPPORTUNITÀ" : "POSTI LIMITATI — VERIFICA I REQUISITI"}
          </p>
          
          <motion.a 
            href={isPaid ? "https://www.atoma.com/contatti/" : "https://api.leadconnectorhq.com/widget/form/6JTRXjB5riLah1CoOkWJ"} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={isPaid ? "Richiedi informazioni per l'acquisto" : "Richiedi informazioni per il corso gratuito GOL"}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: isPaid ? `0 0 50px ${COLOR_ROSA}88` : `0 0 50px ${COLOR_ACID}88`,
              backgroundColor: isPaid ? COLOR_ROSA : COLOR_ACID,
              color: isPaid ? '#FFFFFF' : '#0D1A1D'
            }}
            whileTap={{ scale: 0.98 }}
            className={`group relative inline-flex items-center gap-4 md:gap-6 bg-white text-[#0D1A1D] rounded-xl md:rounded-[2rem] font-[900] transition-all shadow-2xl text-center uppercase tracking-tighter ${isPaid ? 'px-6 md:px-10 py-4 md:py-6 text-base md:text-2xl' : 'px-8 md:px-14 py-5 md:py-7 text-lg md:text-3xl'}`}
          >
            <span>
              {isPaid ? "ISCRIVITI AL CORSO PRO" : "COMINCIA ORA - GRATIS"}
            </span>
            <ExternalLink className="w-5 h-5 md:w-8 md:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" />
          </motion.a>

          {isPaid && (
            <button onClick={onSwitch} className="text-white/40 text-xs font-bold uppercase tracking-widest hover:text-[#d4ff00] transition-colors">
              SCOPRI SE PUOI ACCEDERE AL PROGRAMMA GOL GRATUITO
            </button>
          )}
          
          {/* Social Social */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Condividi questa opportunità</span>
            <div className="flex items-center gap-4">
              <motion.a 
                whileHover={{ scale: 1.1, backgroundColor: '#1877F2' }}
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white transition-colors"
                title="Condividi su Facebook"
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, backgroundColor: '#1DA1F2' }}
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white transition-colors"
                title="Condividi su Twitter (X)"
              >
                <Twitter size={18} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, backgroundColor: '#0A66C2' }}
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white transition-colors"
                title="Condividi su LinkedIn"
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, backgroundColor: '#25D366' }}
                href={`https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white transition-colors"
                title="Condividi su WhatsApp"
              >
                <MessageCircle size={18} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 md:py-16 border-t" style={{ backgroundColor: COLOR_BG, borderColor: `${COLOR_TEAL_MIST}33` }}>
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12 text-center lg:text-left">
        <div className="flex flex-col items-center lg:items-start gap-4">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="h-8 md:h-10 flex items-center"
          >
            <img 
              src={logoNextLevel} 
              alt="Logo NEXT.LEVEL" 
              className="h-full object-contain"
              decoding="async"
            />
          </motion.div>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <motion.a 
              href="https://www.atoma.com/"
              aria-label="Official Website ATOMA"
              whileHover={{ scale: 1.1, rotate: -2 }}
              className="h-10 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center border"
              style={{ backgroundColor: `${COLOR_SURFACE}4D`, borderColor: `${COLOR_TEAL_MIST}22` }}
            >
              <img src={LOGO_ATOMA} alt="Logo ATOMA white" className="h-full object-contain opacity-80 hover:opacity-100 transition-opacity" loading="lazy" decoding="async" />
            </motion.a>
            <div className="h-8 w-[1px] hidden md:block" style={{ backgroundColor: `${COLOR_TEAL_MIST}33` }} />
            <motion.span 
              whileHover={{ x: 5, color: COLOR_ACID }}
              className="text-[10px] md:text-xs font-[900] tracking-[0.2em] uppercase cursor-default"
              style={{ color: `${COLOR_TEXT_PARA}4D` }}
            >
              Expert AI Content Creator
            </motion.span>
          </div>
        </div>
        
        <div className="flex flex-col lg:items-end gap-4">
          <div className="flex flex-wrap justify-center lg:justify-end gap-4 md:gap-8 text-[10px] font-[900] uppercase tracking-widest" style={{ color: `${COLOR_TEXT_PARA}66` }}>
            <motion.a whileHover={{ color: '#fff', x: -2 }} href="#" className="transition-colors">Privacy Policy</motion.a>
            <motion.a whileHover={{ color: '#fff', x: -2 }} href="#" className="transition-colors">Cookie Policy</motion.a>
            <motion.a whileHover={{ color: '#fff', x: -2 }} href="https://www.atoma.com/" className="transition-colors">Official Site</motion.a>
          </div>
          <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest opacity-30" style={{ color: COLOR_TEXT_PARA }}>
            © {new Date().getFullYear()} ATOMA s.r.l. - Tutti i diritti riservati. In collaborazione con NEXT.LEVEL.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  const [isPaid, setIsPaid] = React.useState(false);

  return (
    <div className="min-h-screen font-sans selection:bg-[#d4ff00] selection:text-black overflow-x-hidden" style={{ backgroundColor: COLOR_BG }}>
      <Navbar isPaid={isPaid} onSwitch={() => setIsPaid(!isPaid)} />
      <main>
        <Hero isPaid={isPaid} onSwitch={() => setIsPaid(!isPaid)} />
        {!isPaid && <InstitutionalLogos />}
        
        <ToolsShowcase />

        <Program isPaid={isPaid} />
        <Teacher />
        <Testimonials />
        <CTA isPaid={isPaid} onSwitch={() => setIsPaid(!isPaid)} />
      </main>
      <Footer />
    </div>
  );
}
