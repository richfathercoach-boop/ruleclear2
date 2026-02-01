
import React from 'react';
import { Lock, RefreshCcw, ShieldCheck } from 'lucide-react';
import { ProcessStepProps } from '../types';

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description }) => (
  <div className="flex gap-6 items-start group">
    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white border-2 border-slate-100 flex items-center justify-center text-xl font-bold text-[#2563EB] group-hover:border-[#2563EB] transition-colors">
      {step.split(' ')[1].replace('.', '')}
    </div>
    <div className="pt-2">
      <h3 className="text-xl font-bold text-[#0F172A] mb-2">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{description}</p>
    </div>
  </div>
);

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F172A] mb-8">
              The Physical Logic
            </h2>
            <p className="text-slate-500 text-lg mb-12">
              物理邏輯 — 戰術性隱藏流程
            </p>
            
            <div className="space-y-10">
              <ProcessStep 
                step="Step 1." 
                title="Secure Ingress" 
                description="端到端加密封裝，數據由廠區直達硬體安全區。" 
              />
              <ProcessStep 
                step="Step 2." 
                title="Enclave Verification" 
                description="隔離硬體環境執行格式判定，管理者與外部完全無法探視。" 
              />
              <ProcessStep 
                step="Step 3." 
                title="Physical Zeroing" 
                description="判定完成瞬間，電子位元強制歸零，數據於物理世界完全消失。" 
              />
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-slate-900 rounded-3xl p-8 aspect-square flex items-center justify-center shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
              {/* Simulated Tech UI */}
              <div className="relative z-10 w-full h-full border border-slate-700/50 rounded-2xl p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                    <Lock className="text-blue-400 w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Status</div>
                    <div className="text-xs text-green-400 font-mono tracking-tighter">ENCLAVE_ACTIVE</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-2/3 animate-pulse"></div>
                  </div>
                  <div className="font-mono text-[10px] text-slate-400 space-y-1">
                    <p>0x74656368207768697465</p>
                    <p>VERIFYING_CREDENTIALS...</p>
                    <p className="text-blue-400">PHYSICAL_ZERO_READY</p>
                  </div>
                </div>

                <div className="flex justify-center">
                   <RefreshCcw className="text-slate-600 w-12 h-12 animate-spin-slow opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
