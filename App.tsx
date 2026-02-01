
import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Globe, 
  Zap, 
  ChevronRight, 
  Lock, 
  RefreshCcw, 
  Activity,
  Calendar,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Process from './components/Process';
import Trust from './components/Trust';
import Portal from './components/Portal';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Solutions />
        <Process />
        <Trust />
        <Portal />
      </main>
      <Footer />
    </div>
  );
};

export default App;
