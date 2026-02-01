
import React from 'react';
import { ShieldCheck, Activity, Globe, Cpu } from 'lucide-react';
import { Language } from '../types';

const SolutionCard: React.FC<{ role: string; description: string; icon: React.ReactNode }> = ({ role, description, icon }) => (
  <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-500 flex flex-col h-full group">
    <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-8 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-[#0F172A] mb-6">● {role}</h3>
    <p className="text-slate-500 text-lg leading-relaxed flex-grow">{description}</p>
  </div>
);

const Solutions: React.FC<{ lang: Language; t: any }> = ({ lang, t }) => {
  const data = [
    { role: t.cfo.role, description: t.cfo.desc, icon: <Activity className="w-6 h-6" /> },
    { role: t.cso.role, description: t.cso.desc, icon: <Globe className="w-6 h-6" /> },
    { role: t.cio.role, description: t.cio.desc, icon: <Cpu className="w-6 h-6" /> },
    { role: t.supply.role, description: t.supply.desc, icon: <ShieldCheck className="w-6 h-6" /> }
  ];

  return (
    <section className="py-32 bg-[#F8FAFC]">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-extrabold text-[#0F172A] mb-4">
            {t.title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, idx) => (
            <SolutionCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
