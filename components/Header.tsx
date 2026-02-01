
import React from 'react';
import { Language } from '../types';

interface HeaderProps {
  currentLang: Language;
  onLangChange: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ currentLang, onLangChange }) => {
  const languages: Language[] = ['EN', '繁中', '日本語', 'FR', 'DE', 'TH', 'VN'];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-screen-xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-extrabold italic uppercase tracking-extra-wide text-[#0F172A]">
            RULECLEAR
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-4 text-xs font-medium text-slate-500">
          {languages.map((lang, idx) => (
            <React.Fragment key={lang}>
              <button 
                onClick={() => onLangChange(lang)}
                className={`hover:text-[#2563EB] transition-colors ${currentLang === lang ? 'text-[#2563EB] font-bold' : ''}`}
              >
                {lang}
              </button>
              {idx < languages.length - 1 && <span className="text-slate-200">|</span>}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
