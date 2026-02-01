
import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Send, Sparkles, RefreshCcw, Lock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const Portal: React.FC = () => {
  const [domain, setDomain] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [assessment, setAssessment] = useState<string | null>(null);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const calendlyRef = useRef<HTMLDivElement>(null);

  // 當分析完成後，嘗試初始化 Calendly
  useEffect(() => {
    if (isUnlocked && (window as any).Calendly) {
      (window as any).Calendly.initInlineWidget({
        url: 'https://calendly.com/access-ruleclear/30min?hide_event_type_details=1&hide_gdpr_banner=1',
        parentElement: calendlyRef.current,
        prefill: {},
        utm: {}
      });
    }
  }, [isUnlocked]);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setAssessment(null);
    setIsUnlocked(false);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analyze the enterprise domain "${domain}" and provide a high-impact, professional financial risk assessment related to CBAM and global supply chain compliance in the 2026 trade landscape.
        Requirements:
        1. Professional and authoritative tone.
        2. Traditional Chinese (繁體中文).
        3. Highlight financial impact and supply chain access risks.
        4. Max length: 150 words.`,
        config: {
          systemInstruction: "You are the RULECLEAR AI Risk Agent. You provide technical, urgent, and authoritative compliance risk assessments.",
        },
      });

      setAssessment(response.text || "Assessment generation failed.");
      setIsUnlocked(true); // 評估完成，解鎖預約
    } catch (error) {
      console.error("AI Generation Error:", error);
      setAssessment("目前分析系統繁忙。請確認網域格式後再試。");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="portal" className="py-24 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: AI Risk Agent Terminal */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold tracking-widest border border-blue-100 uppercase">
                Step 01: Secure Identity
              </div>
              <h2 className="text-3xl lg:text-5xl font-extrabold text-[#0F172A] mb-6 tracking-tight">
                The Portal
              </h2>
              <div className="space-y-4 text-slate-500 mb-8">
                <p className="flex items-center gap-3">
                  <span className="text-[#2563EB] font-bold">●</span>
                  說明：每日限額 VIP 諮詢。
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-[#2563EB] font-bold">●</span>
                  請提供企業域名，由 AI Agent 預先生成財務風險評估。
                </p>
              </div>
            </div>

            <div className="bg-[#0F172A] rounded-3xl p-1 overflow-hidden shadow-2xl">
              <div className="bg-slate-900/50 p-4 border-b border-slate-800 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                </div>
                <div className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Risk_Analyzer_v2.6</div>
              </div>
              
              <div className="p-6">
                <form onSubmit={handleGenerate} className="flex flex-col sm:flex-row gap-3 mb-6">
                  <input 
                    type="text" 
                    placeholder="ENTER DOMAIN (e.g. corp.com)" 
                    className="flex-grow bg-slate-800/50 border border-slate-700 rounded-xl px-5 py-4 text-white font-mono text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    required
                  />
                  <button 
                    disabled={isGenerating}
                    className="bg-[#2563EB] text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all disabled:opacity-50"
                  >
                    {isGenerating ? <RefreshCcw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                    {isGenerating ? 'ANALYZING' : 'INITIATE'}
                  </button>
                </form>

                {assessment ? (
                  <div className="space-y-4 animate-in fade-in duration-700">
                    <div className="flex items-center gap-2 text-green-400 text-[10px] font-bold uppercase tracking-widest">
                      <CheckCircle2 className="w-3 h-3" /> Analysis Complete
                    </div>
                    <div className="text-slate-300 text-sm leading-relaxed font-mono bg-slate-800/30 p-4 rounded-xl border border-slate-800/50">
                      {assessment}
                    </div>
                  </div>
                ) : (
                  <div className="py-12 flex flex-col items-center justify-center text-slate-600 border border-dashed border-slate-800 rounded-xl">
                    <ActivityIcon className="w-8 h-8 mb-4 opacity-20 animate-pulse" />
                    <p className="text-[10px] font-mono tracking-widest uppercase">Waiting for input...</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Scheduling Portal Enclave */}
          <div className="relative">
             <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-slate-50 text-slate-400 text-xs font-bold tracking-widest border border-slate-100 uppercase lg:invisible">
                Step 02: Scheduling
              </div>
            
            <div className={`bg-white rounded-[32px] border transition-all duration-700 overflow-hidden min-h-[600px] flex flex-col ${isUnlocked ? 'border-blue-100 shadow-2xl' : 'border-slate-100 shadow-sm grayscale opacity-60'}`}>
              <div className={`p-6 flex items-center justify-between ${isUnlocked ? 'bg-blue-600' : 'bg-slate-100'}`}>
                <div className={isUnlocked ? 'text-white' : 'text-slate-400'}>
                  <h4 className="font-bold text-sm tracking-tight">RULECLEAR Briefing</h4>
                  <p className="text-[10px] opacity-70 uppercase tracking-widest">Official Scheduling Portal</p>
                </div>
                {isUnlocked ? <ShieldCheck className="text-white w-5 h-5" /> : <Lock className="text-slate-400 w-5 h-5" />}
              </div>

              <div className="flex-grow flex flex-col">
                {!isUnlocked ? (
                  <div className="flex-grow flex flex-col items-center justify-center p-12 text-center">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
                      <Lock className="w-8 h-8 text-slate-200" />
                    </div>
                    <h3 className="text-[#0F172A] font-bold mb-2">Portal Locked</h3>
                    <p className="text-sm text-slate-400 max-w-[240px]">請先完成左側企業風險評估以解鎖專屬預約時段。</p>
                  </div>
                ) : (
                  <div className="flex-grow bg-white animate-in zoom-in-95 duration-500">
                    <div ref={calendlyRef} className="calendly-inline-widget w-full h-full" style={{ height: '700px' }}></div>
                  </div>
                )}
              </div>
            </div>

            {/* Verification Badge */}
            {isUnlocked && (
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-200 animate-bounce">
                <CheckCircle2 className="text-white w-6 h-6" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const ActivityIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

export default Portal;
