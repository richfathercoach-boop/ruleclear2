
import React from 'react';
import { ShieldCheck, FileText } from 'lucide-react';

const Trust: React.FC = () => {
  return (
    <section className="py-24 bg-[#F8FAFC] border-y border-slate-100">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F172A] mb-4">
            Trust Infrastructure
          </h2>
          <p className="text-slate-500 text-lg">信任基石 — 全球頂尖硬體與法律背書</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Certification */}
          <div className="bg-white p-10 rounded-3xl border border-slate-100 flex items-start gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-[#2563EB] flex items-center justify-center rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-3">● 技術認證</h3>
              <p className="text-slate-500 leading-relaxed mb-4">
                Powered by <span className="text-[#0F172A] font-semibold">Intel SGX</span> & <span className="text-[#0F172A] font-semibold">Azure Confidential Computing</span>.
              </p>
              <p className="text-sm text-slate-400 italic">我們採用硬體隔離技術 (Hardware Enclaves)，確保即便在雲端運算中也擁有物理級的安全隔離。</p>
            </div>
          </div>

          {/* Security Protocols */}
          <div className="bg-white p-10 rounded-3xl border border-slate-100 flex items-start gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-[#2563EB] flex items-center justify-center rounded-xl">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-3">● 安全協議</h3>
              <p className="text-slate-500 leading-relaxed">
                提供第三方技術審計報告與『供應鏈合規選擇權』法律協議。
              </p>
              <div className="mt-4 flex gap-2">
                <span className="text-[10px] bg-slate-50 border border-slate-100 px-2 py-1 rounded text-slate-400 font-mono uppercase">SOC2 Type II</span>
                <span className="text-[10px] bg-slate-50 border border-slate-100 px-2 py-1 rounded text-slate-400 font-mono uppercase">ISO 27001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
