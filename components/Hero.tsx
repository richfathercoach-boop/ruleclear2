
import React from 'react';
import { Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const handleInitiate = (e: React.MouseEvent) => {
    e.preventDefault();
    // 使用 Calendly 全域 API 直接顯示彈窗
    if ((window as any).Calendly) {
      (window as any).Calendly.showPopupWidget('https://calendly.com/access-ruleclear/30min?hide_event_type_details=1&hide_gdpr_banner=1');
    } else {
      // 若腳本尚未載入，則回退至滾動跳轉
      const portal = document.getElementById('portal');
      portal?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-20 lg:pt-32 lg:pb-40">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-blue-50/50 blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[-5%] w-[300px] h-[300px] rounded-full bg-slate-50 blur-3xl"></div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <div className="inline-flex items-center px-3 py-1 mb-8 rounded-full bg-blue-50 text-[#2563EB] text-sm font-semibold tracking-wide border border-blue-100 uppercase">
          Technology Sovereignty
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-extrabold text-[#0F172A] tracking-tight mb-6">
          The <span className="text-[#2563EB]">0.1s</span> Commitment.
        </h1>
        
        <h2 className="text-xl lg:text-3xl font-medium text-slate-600 mb-8">
          定義供應鏈准入的「物理主權」。
        </h2>
        
        <p className="max-w-2xl mx-auto text-lg text-slate-500 mb-12 leading-relaxed">
          數據判定即歸零。在 2026 年全球貿易環境中，我們以 TEE 硬體架構為您消除行政摩擦，並 100% 確保製程機密不留痕。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={handleInitiate}
            className="w-full sm:w-auto px-8 py-4 bg-[#2563EB] text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center group"
          >
            Initiate Briefing | 預約 30 分鐘閃電諮詢
            <Zap className="ml-2 w-5 h-5 group-hover:fill-current" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
