import React, { useState } from 'react';
import { HeartHandshake, ChevronDown, ChevronUp, Salad, Scale, Droplets, Egg } from 'lucide-react';
import { Language, translations } from '../i18n/translations';

interface CulturalPhilosophyBannerProps {
  language: Language;
}

export const CulturalPhilosophyBanner: React.FC<CulturalPhilosophyBannerProps> = ({ language }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = translations[language].philosophyBanner;

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-teal-50/50 to-white rounded-3xl p-4 sm:p-5 border border-emerald-200/80 shadow-xs mb-6">
      <div className="flex items-start sm:items-center justify-between gap-3">
        <div className="flex items-start sm:items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-emerald-600/30">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                {t.badge}
              </span>
              <span className="text-xs text-slate-500 font-medium">NutriLife AI</span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
              {t.title}
            </h3>
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          type="button"
          className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 shrink-0 bg-white/80 hover:bg-white px-2.5 py-1.5 rounded-xl border border-emerald-200/60 transition-all"
          aria-expanded={isExpanded}
        >
          <span>{isExpanded ? (language === 'id' ? 'Tutup' : 'Less') : (language === 'id' ? 'Pelajari' : 'Learn How')}</span>
          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
        {t.description}
      </p>

      {/* Expandable 4 Actionable Pillars */}
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-emerald-200/60 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          <div className="bg-white/90 p-3 rounded-2xl border border-emerald-100 shadow-xs flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
              <Salad className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">1. {t.pillar2}</h4>
              <p className="text-[11px] text-slate-600 mt-0.5 leading-normal">
                {t.pillar2Desc}
              </p>
            </div>
          </div>

          <div className="bg-white/90 p-3 rounded-2xl border border-emerald-100 shadow-xs flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">2. {t.pillar1}</h4>
              <p className="text-[11px] text-slate-600 mt-0.5 leading-normal">
                {t.pillar1Desc}
              </p>
            </div>
          </div>

          <div className="bg-white/90 p-3 rounded-2xl border border-emerald-100 shadow-xs flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
              <Droplets className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">3. {t.pillar3}</h4>
              <p className="text-[11px] text-slate-600 mt-0.5 leading-normal">
                {t.pillar3Desc}
              </p>
            </div>
          </div>

          <div className="bg-white/90 p-3 rounded-2xl border border-emerald-100 shadow-xs flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
              <Egg className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">4. {t.pillar4}</h4>
              <p className="text-[11px] text-slate-600 mt-0.5 leading-normal">
                {t.pillar4Desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
