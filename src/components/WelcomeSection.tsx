import React from 'react';
import { Camera, Sparkles, UtensilsCrossed, Heart } from 'lucide-react';
import { Language, translations } from '../i18n/translations';

interface WelcomeSectionProps {
  language: Language;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ language }) => {
  const t = translations[language].welcome;

  return (
    <section className="text-center pt-3 pb-5 sm:pt-6 sm:pb-8">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-emerald-800 bg-emerald-100/70 border border-emerald-200/80 mb-3 shadow-xs">
        <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
        <span>{t.badge}</span>
      </div>

      <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight max-w-xl mx-auto leading-snug">
        {t.titleStart}
        <br className="hidden sm:inline" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
          {t.titleHighlight}
        </span>
        {t.titleEnd}
      </h2>

      <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
        {t.subtitle}
      </p>

      {/* 3 Value Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-2xl mx-auto mt-6 text-left">
        <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Camera className="w-4.5 h-4.5" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-slate-900">{t.pill1Title}</h3>
            <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
              {t.pill1Desc}
            </p>
          </div>
        </div>

        <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
            <UtensilsCrossed className="w-4.5 h-4.5" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-slate-900">{t.pill2Title}</h3>
            <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
              {t.pill2Desc}
            </p>
          </div>
        </div>

        <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Heart className="w-4.5 h-4.5" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-slate-900">{t.pill3Title}</h3>
            <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
              {t.pill3Desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
