
import React, { useState } from 'react';
import { Language } from './types';
import { translations } from './translations';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Whitepaper from './components/Whitepaper';
import Solutions from './components/Solutions';
import Process from './components/Process';
import Trust from './components/Trust';
import Portal from './components/Portal';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('繁中');
  const t = translations[lang];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header currentLang={lang} onLangChange={setLang} />
      <main className="flex-grow">
        <Hero lang={lang} t={t.hero} />
        <Whitepaper lang={lang} t={t.whitepaper} />
        <Solutions lang={lang} t={t.solutions} />
        <Process lang={lang} t={t.process} />
        <Trust lang={lang} t={t.portal} />
        <Portal lang={lang} t={t.portal} />
      </main>
      <Footer lang={lang} t={t.footer} />
    </div>
  );
};

export default App;
