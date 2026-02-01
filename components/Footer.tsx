
import React from 'react';
import { Mail, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F172A] text-slate-400 py-20 px-6 border-t border-slate-800">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
             <div className="text-2xl font-extrabold italic uppercase tracking-extra-wide text-white mb-6">
              RULECLEAR
            </div>
            <p className="max-w-md text-sm leading-relaxed mb-8">
              我們致力於定義下一個世代的「物理主權」。透過先進的隱密計算技術，為全球企業在極端地緣政治環境中，建立零信任、高效率的合規新秩序。
            </p>
            <div className="flex items-center gap-6">
              <a href="mailto:access@ruleclear.com" className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4" />
                access@ruleclear.com
              </a>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Global Presence
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">The Legal Bastion</h4>
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
              <p className="text-[11px] leading-relaxed">
                <span className="text-slate-300 font-semibold uppercase block mb-2">免責聲明：</span>
                RuleClear 'Compliance Option' refers to a technical priority service reservation and does not constitute a financial derivative or investment instrument. All technological implementations are subject to regional jurisdiction and hardware availability.
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest">
          <div>© 2026 RULECLEAR TECHNOLOGY CO. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Technical Audit</a>
            <a href="#" className="hover:text-white transition-colors">GCP & Azure SLA</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
