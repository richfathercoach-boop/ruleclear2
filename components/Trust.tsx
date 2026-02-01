
import React from 'react';
import { ShieldCheck, FileText } from 'lucide-react';
import { Language } from '../types';

const Trust: React.FC<{ lang: Language; t: any }> = ({ lang, t }) => {
  return (
    <section className="py-24 bg-white border-b border-slate-50">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex items-start gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100">
            <ShieldCheck className="w-8 h-8 text-[#2563EB] mt-1" />
            <div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">{t.techTitle}</h3>
              <p className="text-slate-500 text-lg font-medium">{t.techSpec}</p>
            </div>
          </div>
          <div className="flex items-start gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100">
            <FileText className="w-8 h-8 text-[#2563EB] mt-1" />
            <div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">{t.noteTitle}</h3>
              <p className="text-slate-500 text-lg">{t.noteDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
