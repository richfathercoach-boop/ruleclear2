
import React from 'react';
import { Language } from '../types';

interface WhitepaperProps {
  lang: Language;
  t: any;
}

const Whitepaper: React.FC<WhitepaperProps> = ({ lang, t }) => {
  return (
    <section className="py-32 lg:py-48 bg-[#F1F5F9] border-y border-slate-200">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left Side: Identifiers and Document Info */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <div className="mb-4 flex items-center gap-2">
              <div className="w-8 h-[2px] bg-[#2563EB]"></div>
              <span className="text-[#2563EB] text-xs font-black uppercase tracking-[0.3em]">
                Whitepaper v2.0
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-8 leading-[1.1] tracking-tight">
              {t.title}
            </h2>
            <p className="text-[#2563EB] text-sm font-bold uppercase tracking-widest mb-12">
              {t.sub}
            </p>
            
            <div className="p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-white shadow-sm">
              <div className="space-y-4">
                <div>
                  <div className="text-[10px] text-slate-400 font-mono uppercase tracking-widest mb-1">Status</div>
                  <div className="text-xs text-[#0F172A] font-bold font-mono">CLASSIFICATION: PUBLIC</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-mono uppercase tracking-widest mb-1">Last Update</div>
                  <div className="text-xs text-[#0F172A] font-bold font-mono">JAN 2026.01.Q1</div>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <div className="text-[10px] text-slate-400 font-mono uppercase tracking-widest mb-1">Protocol Type</div>
                  <div className="text-xs text-[#0F172A] font-bold font-mono">SUPPLY CHAIN SOVEREIGNTY</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: High-Impact Content Sections */}
          <div className="lg:col-span-8 space-y-24">
            {/* The Global Crisis Section */}
            <div className="animate-in fade-in slide-in-from-right-4 duration-700">
              <h3 className="text-2xl lg:text-3xl font-extrabold text-[#0F172A] mb-8">
                {t.crisisTitle}
              </h3>
              <p className="text-slate-600 text-xl lg:text-2xl leading-relaxed font-light">
                {t.crisisDesc}
              </p>
            </div>

            {/* The 0.1s Protocol Section with Enhanced Design */}
            <div className="relative p-10 lg:p-16 border-l-4 border-[#2563EB] bg-white rounded-r-[40px] shadow-xl shadow-slate-200/50">
              <h3 className="text-2xl lg:text-3xl font-extrabold text-[#0F172A] mb-10">
                {t.protocolTitle}
              </h3>
              <ul className="space-y-10">
                {t.protocolItems.map((item: string, idx: number) => (
                  <li key={idx} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#2563EB] font-bold text-lg">
                      {idx + 1}
                    </div>
                    <div className="text-slate-700 text-xl lg:text-2xl leading-relaxed">
                      {item.replace(/^\d\.\s/, '')}
                    </div>
                  </li>
                ))}
              </ul>
              {/* Technical watermark */}
              <div className="absolute top-10 right-10 opacity-5 pointer-events-none hidden md:block">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="0.5">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                  <path d="M2 17L12 22L22 17" />
                  <path d="M2 12L12 17L22 12" />
                </svg>
              </div>
            </div>

            {/* The Compliance Option Section */}
            <div className="animate-in fade-in slide-in-from-right-8 duration-1000">
              <h3 className="text-2xl lg:text-3xl font-extrabold text-[#0F172A] mb-8">
                {t.optionTitle}
              </h3>
              <div className="bg-slate-900 text-white p-10 lg:p-14 rounded-[40px] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="text-6xl font-serif italic text-blue-400">"</span>
                </div>
                <p className="text-xl lg:text-2xl leading-relaxed italic text-slate-200 relative z-10">
                  {t.optionDesc}
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="h-px w-12 bg-blue-500"></div>
                  <span className="text-xs uppercase tracking-[0.5em] text-blue-400 font-bold">RuleClear Policy Logic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whitepaper;
