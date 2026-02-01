
import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, RefreshCcw, Lock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { Language } from '../types';

interface PortalProps {
  lang: Language;
  t: any;
}

const Portal: React.FC<PortalProps> = ({ lang, t }) => {
  const [domain, setDomain] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [assessment, setAssessment] = useState<string | null>(null);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isUnlocked && (window as any).Calendly) {
      (window as any).Calendly.initInlineWidget({
        url: 'https://calendly.com/access-ruleclear/30min?hide_event_type_details=1&hide_gdpr_banner=1',
        parentElement: calendlyRef.current,
        prefill: {},
        utm: {}
      });
    }
  }, [isUnlocked, lang]);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setAssessment(null);
    setIsUnlocked(false);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analyze enterprise domain "${domain}" for 2026 supply chain compliance risks in ${lang}. 150 words. Professional tone.`,
        config: {
          systemInstruction: `You are the RULECLEAR AI Risk Agent. Analyze in ${lang}.`,
        },
      });

      setAssessment(response.text || "Analysis complete.");
      setIsUnlocked(true);
    } catch (error) {
      setAssessment("Analysis engine offline. Please proceed.");
      setIsUnlocked(true);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="portal" className="py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* AI Risk Agent */}
          <div className="bg-[#0F172A] rounded-[40px] p-1 shadow-2xl">
            <div className="bg-slate-900/50 p-6 border-b border-slate-800 flex items-center justify-between rounded-t-[39px]">
               <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/30"></div>
                  <div className="w-3 h-3 rounded-full bg-orange-500/30"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/30"></div>
                </div>
                <div className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">Agent_Analysis_01</div>
            </div>
            
            <div className="p-10">
              <form onSubmit={handleGenerate} className="flex flex-col gap-4 mb-8">
                <input 
                  type="text" 
                  placeholder={t.placeholder}
                  className="bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-5 text-white font-mono text-sm focus:outline-none focus:border-[#2563EB] transition-colors"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  required
                />
                <button 
                  disabled={isGenerating}
                  className="bg-[#2563EB] text-white px-8 py-5 rounded-2xl font-extrabold text-lg flex items-center justify-center gap-3 hover:bg-blue-600 transition-all disabled:opacity-50"
                >
                  {isGenerating ? <RefreshCcw className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                  {isGenerating ? t.analyzing : t.initiate}
                </button>
              </form>

              {assessment && (
                <div className="animate-in fade-in duration-700 bg-slate-800/20 p-8 rounded-3xl border border-slate-700/50">
                  <div className="flex items-center gap-2 text-green-400 text-xs font-bold uppercase tracking-widest mb-6">
                    <CheckCircle2 className="w-4 h-4" /> Assessment Generated
                  </div>
                  <div className="text-slate-300 text-sm leading-relaxed font-mono whitespace-pre-wrap">
                    {assessment}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Calendly Portal */}
          <div className={`bg-white rounded-[40px] border-2 transition-all duration-1000 overflow-hidden min-h-[700px] flex flex-col ${isUnlocked ? 'border-blue-100 shadow-2xl' : 'border-slate-50 opacity-40 grayscale pointer-events-none'}`}>
            <div className={`p-8 flex items-center justify-between ${isUnlocked ? 'bg-blue-600' : 'bg-slate-100'}`}>
              <div className={isUnlocked ? 'text-white' : 'text-slate-400'}>
                <h4 className="font-extrabold text-lg">The Portal</h4>
                <p className="text-[10px] uppercase tracking-widest opacity-80">Reserved Scheduling Enclave</p>
              </div>
              {isUnlocked ? <ShieldCheck className="text-white w-6 h-6" /> : <Lock className="text-slate-300 w-6 h-6" />}
            </div>

            <div className="flex-grow">
              {!isUnlocked ? (
                <div className="flex flex-col items-center justify-center h-full p-20 text-center">
                   <Lock className="w-16 h-16 text-slate-100 mb-8" />
                   <h3 className="text-slate-300 font-bold mb-4">{t.locked}</h3>
                   <p className="text-slate-200 text-sm">{t.unlockDesc}</p>
                </div>
              ) : (
                <div ref={calendlyRef} className="calendly-inline-widget w-full h-full"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portal;
