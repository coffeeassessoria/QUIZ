
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Check, ChevronRight, Lock, ShieldCheck, Sparkles, Volume2, Play, AlertTriangle, Clock, FileText } from 'lucide-react';
import { quizData } from './data';
import { Field, LogicRule, Media } from './types';

// --- Helper Functions ---

const MOTIVATIONAL_PHRASES = [
  "Medindo vibração da Glândula Pineal...",
  "Acessando arquivos restritos...",
  "Verificando nível de calcificação...",
  "Sincronizando frequências de abundância...",
  "Não feche! Sua chance única está carregando...",
  "Detectando potencial oculto...",
  "Preparando o segredo de Danny Kelly..."
];

// Logic Evaluator
const evaluateLogic = (
  answer: any,
  rule: LogicRule
): boolean => {
  if (!rule.condition) return true;

  const { op, vars } = rule.condition;
  const targetValue = vars[1];

  switch (op) {
    case 'equal':
      return answer === targetValue;
    case 'not_equal':
      return answer !== targetValue;
    case 'contains':
      return String(answer).includes(targetValue);
    case 'greater_than':
      return Number(answer) > targetValue;
    case 'less_than':
      return Number(answer) < targetValue;
    default:
      return false;
  }
};

// --- Components ---

const AudioPlayer = ({ media }: { media: Media }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  
  useEffect(() => {
    // Tenta reproduzir automaticamente se autoplay estiver ativado
    if (media.autoplay && audioRef.current) {
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay bloqueado pelo navegador. Usuário deve interagir.", error);
          // O navegador bloqueou o autoplay (comum se não houve interação prévia suficiente)
          // O controles nativos permitirão o play manual.
        });
      }
    }
  }, [media]);

  return (
    <div className="w-full flex flex-col gap-3">
         <div className="flex items-center gap-2 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-1">
            <Volume2 size={14} className="animate-pulse text-indigo-500" />
            <span>Mensagem de Voz - Aumente o Volume</span>
         </div>
         
         <audio 
            ref={audioRef}
            src={media.url} 
            controls 
            className="w-full accent-indigo-600 h-10 focus:outline-none"
            preload="auto"
         >
            Seu navegador não suporta o elemento de áudio.
         </audio>

         {media.transcript && (
           <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 mt-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-400"></div>
              <div className="flex items-center gap-2 mb-2 text-amber-800/60 text-[10px] uppercase font-bold tracking-widest">
                <FileText size={10} />
                Transcrição Interceptada
              </div>
              <p className="text-sm font-medium text-slate-700 italic leading-relaxed">
                "{media.transcript}"
              </p>
           </div>
         )}
    </div>
  );
};

// --- Media Component (Enhanced UI) ---
const MediaRenderer = ({ media }: { media: Media }) => {
  if (!media) return null;

  // Optimized for mobile: rounded corners, shadow, aspect ratio control
  const containerClasses = "w-full rounded-2xl overflow-hidden shadow-sm mb-5 bg-slate-100 border border-slate-200 relative group";

  switch (media.type) {
    case 'image':
      return (
        <div className={containerClasses}>
          <img 
            src={media.url} 
            alt={media.alt || "Quiz media"} 
            className="w-full h-auto object-cover max-h-[220px] md:max-h-[300px] transition-transform duration-700"
          />
          {/* Subtle gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
        </div>
      );
    case 'video':
      return (
        <div className={containerClasses}>
          <video 
            src={media.url} 
            controls 
            autoPlay={media.autoplay} 
            className="w-full h-auto max-h-[250px]"
            playsInline
          />
        </div>
      );
    case 'youtube':
      let videoId = media.url;
      if (media.url.includes('v=')) {
        videoId = media.url.split('v=')[1].split('&')[0];
      } else if (media.url.includes('youtu.be/')) {
        videoId = media.url.split('youtu.be/')[1];
      }

      return (
        <div className={`${containerClasses} aspect-video relative shadow-md`}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=${media.autoplay ? 1 : 0}&rel=0&modestbranding=1&controls=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
    case 'audio':
      return (
        <div className={`${containerClasses} bg-white p-4 flex items-center justify-center border-l-4 border-indigo-500 shadow-md`}>
            <AudioPlayer media={media} />
        </div>
      );
    default:
      return null;
  }
};

export default function App() {
  const [currentFieldId, setCurrentFieldId] = useState<string>(quizData.fields[0].id);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [history, setHistory] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [inputValue, setInputValue] = useState<string | number>("");
  const [motivationalMessage, setMotivationalMessage] = useState<string | null>(null);
  
  // UX States
  const [selectedChoiceLabel, setSelectedChoiceLabel] = useState<string | null>(null);
  const [animating, setAnimating] = useState(false);

  // Scroll to top on step change
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll container to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setInputValue(""); 
    
    // Motivational Message Logic
    if (history.length > 0 && history.length % 2 === 0 && !isFinished) {
      const randomPhrase = MOTIVATIONAL_PHRASES[Math.floor(Math.random() * MOTIVATIONAL_PHRASES.length)];
      setMotivationalMessage(randomPhrase);
      const timer = setTimeout(() => setMotivationalMessage(null), 3500);
      return () => clearTimeout(timer);
    } else {
        setMotivationalMessage(null);
    }
  }, [currentFieldId, isFinished]);

  const currentField = isFinished 
    ? quizData.thankyou_screens[0] 
    : quizData.fields.find(f => f.id === currentFieldId) || quizData.fields[0];

  const progress = Math.min(100, Math.round(((history.length) / (quizData.fields.length)) * 100)); 

  // Improved Haptic feedback
  const vibrate = (pattern = [50]) => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(pattern);
    }
  };

  const processNextStep = (answer: any) => {
    const newAnswers = { ...answers, [currentFieldId]: answer };
    setAnswers(newAnswers);
    setHistory(prev => [...prev, currentFieldId]);

    const applicableRules = quizData.logic.filter(l => l.from === currentFieldId);
    let nextId: string | null = null;

    for (const rule of applicableRules) {
      if (evaluateLogic(answer, rule)) {
        nextId = rule.to;
        break;
      }
    }

    if (nextId === 'thankyou_screen') {
      setIsFinished(true);
      vibrate([50, 50, 100]); // Success pattern
    } else if (nextId) {
      setCurrentFieldId(nextId);
    } else {
      const currentArrIndex = quizData.fields.findIndex(f => f.id === currentFieldId);
      if (currentArrIndex < quizData.fields.length - 1) {
        setCurrentFieldId(quizData.fields[currentArrIndex + 1].id);
      } else {
        setIsFinished(true);
        vibrate([50, 50, 100]);
      }
    }
    
    setSelectedChoiceLabel(null);
    setAnimating(false);
  };

  const handleNext = (answer: any) => {
    if (animating) return;

    vibrate(); // Tap feedback
    setAnimating(true);
    
    if (currentField.type === 'multiple_choice') {
        setSelectedChoiceLabel(answer);
        // Small delay to visualize selection
        setTimeout(() => {
            processNextStep(answer);
        }, 300); 
    } else {
        processNextStep(answer);
    }
  };

  // --- Render Components ---

  const renderProgressBar = () => (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200/60 px-5 py-3 shadow-sm transition-all duration-300">
      <div className="max-w-md mx-auto flex flex-col gap-1.5">
        <div className="flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <span className="flex items-center gap-1">
                {isFinished ? <Check size={10} /> : <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>}
                {isFinished ? "Análise Concluída" : "Analisando Perfil..."}
            </span>
            <span>{isFinished ? 100 : progress}%</span>
        </div>
        
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden p-[1px]">
            <div 
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-700 ease-out relative shadow-[0_0_10px_rgba(99,102,241,0.5)]"
            style={{ width: `${isFinished ? 100 : progress}%` }}
            >
                <div className="absolute inset-0 bg-white/40 animate-[shimmer_1.5s_infinite]"></div>
            </div>
        </div>
      </div>
      
      {motivationalMessage && !isFinished && (
        <div className="absolute top-[60px] left-0 w-full flex justify-center z-40 px-4 pointer-events-none">
            <span className="inline-flex items-center gap-2 bg-slate-800/90 text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-xl animate-fade-in backdrop-blur-sm border border-slate-600/50">
             <Clock size={12} className="text-pink-400 animate-pulse" />
             {motivationalMessage}
            </span>
        </div>
      )}
    </div>
  );

  const renderContent = () => {
    // --- Thank You Screen ---
    if (isFinished) {
      const endScreen = quizData.thankyou_screens[0];
      return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center animate-slide-up pt-4">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-emerald-200 shadow-sm animate-pulse">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping absolute opacity-75"></div>
            <div className="w-2 h-2 bg-emerald-500 rounded-full relative"></div>
            Acesso Liberado
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
            {endScreen.title}
          </h2>
          
          <div className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-100 mb-8 w-full relative">
             <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl"></div>
             <p className="text-base text-slate-600 leading-relaxed font-medium text-left">
                {endScreen.subtitle}
            </p>
          </div>

          {endScreen.properties?.show_button && (
            <div className="w-full space-y-6">
                <a
                href={endScreen.properties.redirect_url || "#"}
                className="w-full group relative flex flex-col items-center justify-center px-6 py-5 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl shadow-[0_8px_30px_rgb(16,185,129,0.4)] active:scale-[0.98] transition-all duration-200 overflow-hidden border-t border-white/20"
                onClick={() => vibrate([50])}
                >
                    {/* Shimmer Effect */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite] animate-[shimmer_3s_infinite_ease-in-out]"></span>
                    
                    <div className="flex items-center gap-2 mb-1 relative z-10">
                        <span className="text-lg font-black text-white uppercase tracking-tight drop-shadow-sm text-center">
                            {endScreen.properties.button_text}
                        </span>
                        <ChevronRight size={24} className="text-white animate-bounce-subtle hidden sm:block" />
                    </div>
                    <span className="text-[10px] font-bold text-green-100 uppercase tracking-widest bg-black/10 px-2 py-0.5 rounded-md">
                        Compra Segura & Verificada
                    </span>
                </a>
                
                <div className="flex flex-col gap-3 items-center opacity-80">
                    <div className="flex -space-x-3">
                         {[1,2,3,4,5].map(i => (
                             <div key={i} className="w-9 h-9 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500 overflow-hidden shadow-sm">
                                <img src={`https://i.pravatar.cc/100?img=${15+i}`} alt="user" className="w-full h-full object-cover" />
                             </div>
                         ))}
                         <div className="w-9 h-9 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-indigo-600 shadow-sm">+99</div>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">Pessoas acessaram nos últimos 10 minutos.</p>
                </div>
            </div>
          )}
        </div>
      );
    }

    // --- Question Screen ---
    return (
      <div key={currentFieldId} className={`flex-1 flex flex-col animate-slide-up pb-8 pt-4 w-full`}>
        
        {/* Header Section */}
        <div className="mb-6">
           {currentField.subtitle && (
             <div className="inline-flex items-start gap-2 mb-4 px-3 py-2 bg-amber-50/80 text-amber-800 border border-amber-100/50 text-xs font-bold uppercase tracking-wide rounded-lg shadow-sm w-full">
                <AlertTriangle size={14} className="text-amber-500 shrink-0 mt-[1px]" />
                <span className="leading-snug">{currentField.subtitle}</span>
             </div>
           )}
           
           <h2 className="text-[22px] md:text-3xl font-extrabold text-slate-900 leading-[1.2] mb-3 tracking-tight">
            {currentField.title}
          </h2>
          
          <div className="w-16 h-1 bg-indigo-500 rounded-full mb-6 opacity-20"></div>
          
          {/* Media Rendering */}
          {currentField.media && <MediaRenderer media={currentField.media} />}
        </div>

        {/* Inputs Section */}
        <div className="space-y-3.5 w-full">
            {currentField.type === 'multiple_choice' && currentField.properties?.choices?.map((choice, idx) => {
                const isSelected = selectedChoiceLabel === choice.label;
                const isOtherSelected = selectedChoiceLabel !== null && !isSelected;
                
                return (
                <button
                    key={idx}
                    onClick={() => handleNext(choice.label)}
                    disabled={selectedChoiceLabel !== null}
                    className={`
                        w-full group relative overflow-hidden p-5 text-left rounded-2xl border-b-[3px] transition-all duration-200 no-select
                        ${isSelected 
                            ? 'border-indigo-800 bg-indigo-600 text-white shadow-lg translate-y-[2px] border-b-0' // Pressed State
                            : 'border-slate-200 bg-white text-slate-700 shadow-sm active:border-b-0 active:translate-y-[2px] active:bg-slate-50'
                        }
                        ${isOtherSelected ? 'opacity-50 blur-[0.5px]' : 'opacity-100'}
                    `}
                >
                    <div className="flex items-center justify-between relative z-10 gap-3">
                        <span className={`text-[16px] md:text-[17px] font-bold leading-snug ${isSelected ? 'text-white' : 'text-slate-700'}`}>
                            {choice.label}
                        </span>
                        
                        {/* Selection Indicator */}
                        <div className={`
                            shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300
                            ${isSelected ? 'border-white bg-white/20 scale-110' : 'border-slate-300 bg-slate-50 group-hover:border-indigo-300'}
                        `}>
                            {isSelected && <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />}
                        </div>
                    </div>
                </button>
                )
            })}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 flex flex-col selection:bg-indigo-200">
      {renderProgressBar()}
      
      {/* Spacer for fixed header */}
      <div className="h-[80px]"></div>

      {/* Main Content Area - constrained for mobile readibility */}
      <main ref={containerRef} className="flex-1 flex flex-col w-full max-w-md mx-auto px-5 pb-8">
         {renderContent()}
      </main>

      {/* Footer Branding - Minimal Trust Signal */}
      {!isFinished && (
        <footer className="py-6 text-center opacity-50 pb-safe">
            <div className="flex items-center justify-center gap-1.5 text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em]">Segredo Protegido</span>
            </div>
        </footer>
      )}
    </div>
  );
}