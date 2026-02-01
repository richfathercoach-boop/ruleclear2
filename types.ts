
import React from 'react';

export interface SolutionCardProps {
  role: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
}

export type Language = 'EN' | '繁中' | '日本語' | 'FR' | 'DE' | 'TH' | 'VN';
