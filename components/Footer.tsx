
import React from 'react';
import { Mail } from 'lucide-react';
import { Language } from '../types';

const Footer: React.FC<{ lang: Language; t: any }> = ({ lang, t }) => {
  return (
    <footer className="bg-white py-32 border-t border-slate-50">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
          <div>
            <div className="text-3xl font-extrabold italic uppercase tracking-extra-wide text-[#0F172A] mb-8">
              RULECLEAR
            </div>
            <a href="mailto:access@ruleclear.com" className="group flex items-center gap-4 text-[#0F172A] font-bold text-lg hover:text-[#2563EB] transition-colors">
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              access@ruleclear.com
            </a>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-[#0F172A] font-extrabold uppercase tracking-widest text-xs">Legal Bastion</h4>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <p className="text-sm text-slate-500 leading-relaxed">
                <span className="font-bold text-[#0F172A] block mb-4 uppercase">免責聲明 / Disclaimer</span>
                {t.disclaimer}
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
          <div>© 2026 RULECLEAR TECHNOLOGY CO. GLOBAL OPERATIONS.</div>
          <div className="flex gap-12">
            <a href="#" className="hover:text-[#2563EB] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#2563EB] transition-colors">Security Audit</a>
            <a href="#" className="hover:text-[#2563EB] transition-colors">TEE Protocols</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
