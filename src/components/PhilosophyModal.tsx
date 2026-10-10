import React from 'react';
import { X, HeartHandshake, Salad, Scale, Droplets, Egg } from 'lucide-react';
import { Language, translations } from '../i18n/translations';

interface PhilosophyModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const PhilosophyModal: React.FC<PhilosophyModalProps> = ({ isOpen, onClose, language }) => {
  if (!isOpen) return null;
  const t = translations[language].modal;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-5 sm:p-7 shadow-2xl border border-slate-100 relative">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label={t.closeButton}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-600/30">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
              {t.badge}
            </span>
            <h3 className="text-xl font-bold text-slate-900 mt-1">
              {t.title}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">{t.subtitle}</p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <h4 className="font-bold text-slate-900 text-xs sm:text-sm pt-1">
            {t.corePillarsTitle}
          </h4>

          <div className="space-y-3">
            <div className="bg-emerald-50/70 p-3.5 rounded-2xl border border-emerald-100 flex items-start gap-3">
              <Salad className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-slate-900 text-xs sm:text-sm">
                  1. {t.p1Title}
                </h5>
                <p className="text-xs text-slate-600 mt-0.5">
                  {t.p1Desc}
                </p>
              </div>
            </div>

            <div className="bg-teal-50/70 p-3.5 rounded-2xl border border-teal-100 flex items-start gap-3">
              <Scale className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-slate-900 text-xs sm:text-sm">
                  2. {t.p2Title}
                </h5>
                <p className="text-xs text-slate-600 mt-0.5">
                  {t.p2Desc}
                </p>
              </div>
            </div>

            <div className="bg-amber-50/70 p-3.5 rounded-2xl border border-amber-100 flex items-start gap-3">
              <Droplets className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-slate-900 text-xs sm:text-sm">
                  3. {t.p3Title}
                </h5>
                <p className="text-xs text-slate-600 mt-0.5">
                  {t.p3Desc}
                </p>
              </div>
            </div>

            <div className="bg-sky-50/70 p-3.5 rounded-2xl border border-sky-100 flex items-start gap-3">
              <Egg className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-slate-900 text-xs sm:text-sm">
                  4. {t.p4Title}
                </h5>
                <p className="text-xs text-slate-600 mt-0.5">
                  {t.p4Desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            type="button"
            className="px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition-all"
          >
            {t.understoodButton}
          </button>
        </div>
      </div>
    </div>
  );
};
