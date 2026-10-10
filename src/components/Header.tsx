import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, HeartHandshake, Leaf, Globe, ChevronDown, Check } from 'lucide-react';
import { Language, translations } from '../i18n/translations';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenPhilosophy?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  onOpenPhilosophy,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = translations[language].header;

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectLanguage = (lang: Language) => {
    onLanguageChange(lang);
    setIsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-4xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-600/20">
            <Leaf className="w-5 h-5 fill-white/20" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1.5">
                NutriLife <span className="text-emerald-600">AI</span>
              </h1>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                AI Builder Cup
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium hidden sm:block">
              {t.tagline}
            </p>
          </div>
        </div>

        {/* Action badges, Philosophy button, & Language Selector */}
        <div className="flex items-center gap-2">
          {onOpenPhilosophy && (
            <button
              onClick={onOpenPhilosophy}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
            >
              <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden sm:inline">{t.philosophyButton}</span>
              <span className="sm:hidden">Filosofi</span>
            </button>
          )}

          {/* Language Selector Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              type="button"
              aria-label="Select Language"
              aria-expanded={isDropdownOpen}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 transition-all shadow-2xs active:scale-95"
            >
              <span>🌐</span>
              <span>Bahasa</span>
              <ChevronDown className={`w-3 h-3 text-slate-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Compact Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-200/90 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Pilih Bahasa / Language
                </div>

                {/* Option 1: Bahasa Indonesia */}
                <button
                  type="button"
                  onClick={() => handleSelectLanguage('id')}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-left hover:bg-emerald-50 transition-colors ${
                    language === 'id' ? 'text-emerald-900 font-bold bg-emerald-50/70' : 'text-slate-700'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-sm">🇮🇩</span>
                    <span>Bahasa Indonesia</span>
                  </span>
                  {language === 'id' && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                </button>

                {/* Option 2: English */}
                <button
                  type="button"
                  onClick={() => handleSelectLanguage('en')}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-left hover:bg-emerald-50 transition-colors ${
                    language === 'en' ? 'text-emerald-900 font-bold bg-emerald-50/70' : 'text-slate-700'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-sm">🇬🇧</span>
                    <span>English</span>
                  </span>
                  {language === 'en' && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile tagline banner */}
      <div className="sm:hidden px-4 pb-2.5 pt-0.5 text-center bg-slate-50/50 border-t border-slate-100/60">
        <p className="text-[11px] text-slate-600 font-medium">
          {t.tagline}
        </p>
      </div>
    </header>
  );
};
