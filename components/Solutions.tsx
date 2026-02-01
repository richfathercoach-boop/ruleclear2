
import React from 'react';
import { ShieldCheck, Activity, Globe, Cpu } from 'lucide-react';
import { SolutionCardProps } from '../types';

const SolutionCard: React.FC<SolutionCardProps> = ({ role, description, icon }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col h-full">
    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-[#2563EB]">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-[#0F172A] mb-4">{role}</h3>
    <p className="text-slate-500 text-base leading-relaxed">{description}</p>
  </div>
);

const Solutions: React.FC = () => {
  const data = [
    {
      role: 'For CFO (財務長)',
      description: '消除跨境合規摩擦，確保現金流動性，規避 CBAM 高額罰金。',
      icon: <Activity className="w-6 h-6" />
    },
    {
      role: 'For CSO (永續長)',
      description: '自動化對齊全球標準，一鍵完成歐盟格式轉譯，取代人工審核。',
      icon: <Globe className="w-6 h-6" />
    },
    {
      role: 'For CIO (資安長)',
      description: '物理級隔離判定。採用 TEE 硬體環境，數據判定結束立即觸發物理歸零。',
      icon: <Cpu className="w-6 h-6" />
    },
    {
      role: 'For 採購/供應鏈經理',
      description: '獲取優先准入席位，鎖定全球龍頭企業的優先供應商地位。',
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F172A] mb-4">
            Strategic Solutions
          </h2>
          <p className="text-slate-500 text-lg">四大艦隊對接方案 — 專業且無可撼動的防禦架構</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, idx) => (
            <SolutionCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
