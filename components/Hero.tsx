
import React from 'react';
import { Zap } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
  t: any;
}

const Hero: React.FC<HeroProps> = ({ lang, t }) => {
  const handleInitiate = (e: React.MouseEvent) => {
    e.preventDefault();
    const portal = document.getElementById('portal');
    portal?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-24 lg:pt-48 lg:pb-40">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 skew-x-12 transform origin-top-right"></div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h1 className="text-6xl lg:text-8xl font-extrabold text-[#0F172A] tracking-tighter mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {t.headline.split('0.1s')[0]}<span className="text-[#2563EB]">0.1s</span>{t.headline.split('0.1s')[1]}
        </h1>
        
        <h2 className="text-2xl lg:text-3xl font-medium text-slate-500 mb-12 tracking-tight">
          {t.sub}
        </h2>
        
        <p className="max-w-3xl mx-auto text-xl text-slate-400 mb-16 leading-relaxed">
          {t.desc}
        </p>

        <button 
          onClick={handleInitiate}
          className="px-10 py-5 bg-[#2563EB] text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 inline-flex items-center group"
        >
          Initiate Briefing | {lang === '繁中' ? '預約閃電諮詢' : 'Book Consultation'}
          <Zap className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
