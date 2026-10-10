import React, { useState } from 'react';
import {
  AlertTriangle,
  CheckCircle,
  Sparkles,
  Info,
  Scale,
  Flame,
  Dna,
  Wheat,
  Droplet,
  HeartHandshake,
  ShieldCheck,
  RefreshCw,
  Eye,
  ChefHat,
  HelpCircle,
  BadgeAlert,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { NutritionData } from '../types';
import { Language, translations } from '../i18n/translations';

interface AnalysisResultProps {
  data: NutritionData;
  onReset: () => void;
  imageUrl?: string | null;
  onReanalyzeWithHint?: (hint: string) => void;
  isReanalyzing?: boolean;
  language: Language;
}

export const AnalysisResult: React.FC<AnalysisResultProps> = ({
  data,
  onReset,
  imageUrl,
  onReanalyzeWithHint,
  isReanalyzing,
  language,
}) => {
  const [userFoodHint, setUserFoodHint] = useState('');
  const [isBasisExpanded, setIsBasisExpanded] = useState(false);
  const t = translations[language].result;

  // Handle unidentifiable dish state with respect and clarity
  if (!data.isIdentifiable) {
    return (
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/90 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-200 mb-2">
              {t.unidentifiableBadge}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {data.foodName || t.unidentifiableDefaultTitle}
            </h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              {data.unidentifiableMessage || t.unidentifiableDefaultMsg}
            </p>

            {data.confidenceNote && (
              <p className="text-xs text-amber-900/80 bg-amber-50 p-3 rounded-2xl border border-amber-200/60 mt-3 leading-normal">
                <span className="font-semibold">Gemini note: </span>
                {data.confidenceNote}
              </p>
            )}

            {/* User confirmation form */}
            <div className="mt-5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                {t.confirmTitle}
              </h3>
              <p className="text-xs text-slate-500 mb-3">
                {t.confirmDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={userFoodHint}
                  onChange={(e) => setUserFoodHint(e.target.value)}
                  placeholder={t.confirmPlaceholder}
                  className="flex-1 px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 bg-white"
                />
                <button
                  type="button"
                  disabled={!userFoodHint.trim() || isReanalyzing}
                  onClick={() => onReanalyzeWithHint?.(userFoodHint.trim())}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-300 text-white text-xs sm:text-sm font-bold shadow-xs transition-all inline-flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{isReanalyzing ? t.reanalyzingButton : t.reanalyzeButton}</span>
                </button>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <button
                onClick={onReset}
                type="button"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-colors shadow-2xs"
              >
                <RefreshCw className="w-3.5 h-3.5 text-slate-500" />
                <span>{t.clearerPhotoButton}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Calculate approximate macro caloric percentages
  const proteinVal = data.estimatedProtein ?? 0;
  const carbVal = data.estimatedCarbs ?? 0;
  const fatVal = data.estimatedFat ?? 0;
  const proteinCals = proteinVal * 4;
  const carbCals = carbVal * 4;
  const fatCals = fatVal * 9;
  const totalCalculatedCals = proteinCals + carbCals + fatCals || 1;

  const proteinPct = Math.round((proteinCals / totalCalculatedCals) * 100);
  const carbPct = Math.round((carbCals / totalCalculatedCals) * 100);
  const fatPct = Math.round((fatCals / totalCalculatedCals) * 100);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* 1. Identified Dish & Result Header Hero Card */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-sm relative overflow-hidden">
        {/* Subtle accent background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100/80 text-emerald-800 border border-emerald-200">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t.aiBadge}</span>
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                {data.culturalOrigin}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-800 border border-teal-200">
                {t.geminiBadge}
              </span>
            </div>

            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {data.foodName}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-slate-400" />
              <span>{t.portionLabel}: {data.portionEstimate}</span>
            </p>
          </div>

          <div className="flex items-center gap-2 self-start">
            <button
              onClick={onReset}
              type="button"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-emerald-700 bg-slate-50 hover:bg-slate-100 px-3 py-2 rounded-xl border border-slate-200 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{t.newPhotoButton}</span>
            </button>
          </div>
        </div>

        {/* Clear "Estimated" and "Illustrative" Banner */}
        <div className="mt-4 p-3 rounded-2xl bg-amber-50/80 border border-amber-200/70 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 leading-relaxed">
            <span className="font-bold">{t.disclaimerBannerTitle} </span>
            {t.disclaimerBannerDesc}
          </div>
        </div>

        {/* 2. Estimated Nutrition: Primary Macro Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
          {/* Calories Card */}
          <div className="bg-gradient-to-b from-emerald-50/70 to-emerald-50/20 p-4 rounded-2xl border border-emerald-200/80 flex flex-col justify-between">
            <div className="flex items-center justify-between text-emerald-800">
              <span className="text-xs font-bold uppercase tracking-wider">{t.calories}</span>
              <Flame className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="my-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-950">
                {data.estimatedCalories ?? '—'}
                <span className="text-xs font-semibold text-emerald-700 ml-1">kcal</span>
              </div>
              <span className="inline-block text-[10px] font-bold uppercase text-emerald-700/80 mt-0.5">
                {t.estimated}
              </span>
            </div>
            <div className="text-[11px] text-slate-500 font-medium truncate" title={data.caloriesRange}>
              {t.range}: {data.caloriesRange}
            </div>
          </div>

          {/* Protein Card */}
          <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-700">
              <span className="text-xs font-bold uppercase tracking-wider">{t.protein}</span>
              <Dna className="w-4 h-4 text-blue-500" />
            </div>
            <div className="my-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {data.estimatedProtein ?? '—'}
                <span className="text-xs font-semibold text-slate-500 ml-1">g</span>
              </div>
              <span className="inline-block text-[10px] font-bold uppercase text-slate-400 mt-0.5">
                {t.estimated}
              </span>
            </div>
            <div className="text-[11px] text-slate-500 font-medium">
              ~{proteinPct}% {t.pctOfCalories}
            </div>
          </div>

          {/* Carbs Card */}
          <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-700">
              <span className="text-xs font-bold uppercase tracking-wider">{t.carbs}</span>
              <Wheat className="w-4 h-4 text-amber-500" />
            </div>
            <div className="my-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {data.estimatedCarbs ?? '—'}
                <span className="text-xs font-semibold text-slate-500 ml-1">g</span>
              </div>
              <span className="inline-block text-[10px] font-bold uppercase text-slate-400 mt-0.5">
                {t.estimated}
              </span>
            </div>
            <div className="text-[11px] text-slate-500 font-medium">
              ~{carbPct}% {t.pctOfCalories}
            </div>
          </div>

          {/* Fat Card */}
          <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-700">
              <span className="text-xs font-bold uppercase tracking-wider">{t.fat}</span>
              <Droplet className="w-4 h-4 text-orange-500" />
            </div>
            <div className="my-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {data.estimatedFat ?? '—'}
                <span className="text-xs font-semibold text-slate-500 ml-1">g</span>
              </div>
              <span className="inline-block text-[10px] font-bold uppercase text-slate-400 mt-0.5">
                {t.estimated}
              </span>
            </div>
            <div className="text-[11px] text-slate-500 font-medium">
              ~{fatPct}% {t.pctOfCalories}
            </div>
          </div>
        </div>

        {/* Visual Macro Balance Ratio Bar */}
        <div className="mt-5 pt-5 border-t border-slate-100">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
            <span>{t.macroRatioTitle}</span>
            <span className="text-[11px] text-slate-400 font-normal">{t.macroRatioSubtitle}</span>
          </div>

          <div className="h-3 w-full bg-slate-100 rounded-full flex overflow-hidden p-0.5 gap-0.5">
            <div
              style={{ width: `${carbPct}%` }}
              className="bg-amber-400 rounded-l-full transition-all"
              title={`${t.carbs}: ${carbPct}%`}
            />
            <div
              style={{ width: `${fatPct}%` }}
              className="bg-orange-400 transition-all"
              title={`${t.fat}: ${fatPct}%`}
            />
            <div
              style={{ width: `${proteinPct}%` }}
              className="bg-blue-500 rounded-r-full transition-all"
              title={`${t.protein}: ${proteinPct}%`}
            />
          </div>

          <div className="flex items-center justify-center gap-4 text-xs font-medium text-slate-600 mt-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span>{t.carbs} {carbPct}%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-orange-400" />
              <span>{t.fat} {fatPct}%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <span>{t.protein} {proteinPct}%</span>
            </div>
            {data.estimatedFiber !== null && data.estimatedFiber !== undefined && (
              <div className="hidden sm:flex items-center gap-1.5 text-slate-500">
                <span className="font-bold">•</span>
                <span>{t.fiber} ~{data.estimatedFiber}g</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3. Identified Dish Components (Visible vs. Inferred) */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-1">
          <span>{t.componentsTitle}</span>
          <span className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
            {t.componentsBadge}
          </span>
        </h3>
        <p className="text-xs text-slate-500 mb-4">
          {t.componentsSubtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Visible Ingredients */}
          <div className="bg-emerald-50/40 p-4 rounded-2xl border border-emerald-200/60">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs sm:text-sm mb-2.5">
              <Eye className="w-4 h-4 text-emerald-600" />
              <span>{t.visibleTitle}</span>
            </div>
            <ul className="space-y-1.5">
              {data.visibleIngredients?.length > 0 ? (
                data.visibleIngredients.map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))
              ) : (
                <li className="text-xs text-slate-400 italic">{t.noComponents}</li>
              )}
            </ul>
          </div>

          {/* Inferred Ingredients */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
            <div className="flex items-center gap-2 text-slate-800 font-bold text-xs sm:text-sm mb-2.5">
              <ChefHat className="w-4 h-4 text-slate-600" />
              <span>{t.inferredTitle}</span>
            </div>
            <ul className="space-y-1.5">
              {data.inferredIngredients?.length > 0 ? (
                data.inferredIngredients.map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))
              ) : (
                <li className="text-xs text-slate-400 italic">{t.noSeasonings}</li>
              )}
            </ul>
            <p className="text-[10px] text-slate-400 mt-3 italic">
              {t.inferredFootnote}
            </p>
          </div>
        </div>
      </div>

      {/* AI Analysis Basis (Compact Expandable Section) */}
      <div className="bg-slate-50/90 rounded-3xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all">
        <button
          type="button"
          onClick={() => setIsBasisExpanded((prev) => !prev)}
          className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-slate-100/70 transition-colors"
          aria-expanded={isBasisExpanded}
        >
          <div className="flex items-center gap-2.5">
            <h3 className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-1.5">
              <span>{t.analysisBasisTitle}</span>
            </h3>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs shrink-0">
            <span>{isBasisExpanded ? t.toggleHide : t.toggleShow}</span>
            {isBasisExpanded ? <ChevronUp className="w-3.5 h-3.5 text-slate-600" /> : <ChevronDown className="w-3.5 h-3.5 text-slate-600" />}
          </div>
        </button>

        {isBasisExpanded && (
          <div className="px-4 pb-5 sm:px-5 sm:pb-6 pt-1 border-t border-slate-200/70 grid grid-cols-1 md:grid-cols-3 gap-3 animate-in fade-in duration-200">
            {/* Category 1: Visible in the Image */}
            <div className="bg-white p-4 rounded-2xl border border-emerald-200/80 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Eye className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">
                      {t.basisVisibleCategory}
                    </h4>
                    <p className="text-[10px] text-emerald-700 font-semibold">
                      {t.basisVisibleDesc}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mt-2.5">
                  {data.analysisBasis?.visibleInImage ||
                    (language === 'id'
                      ? `${data.visibleIngredients?.slice(0, 4).join(', ') || 'Bahan makanan utama'} serta porsi tampak pada piring.`
                      : `${data.visibleIngredients?.slice(0, 4).join(', ') || 'Primary visible food items'} and visible plated arrangement.`)}
                </p>
              </div>
            </div>

            {/* Category 2: Estimated */}
            <div className="bg-white p-4 rounded-2xl border border-teal-200/80 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">
                      {t.basisEstimatedCategory}
                    </h4>
                    <p className="text-[10px] text-teal-700 font-semibold">
                      {t.basisEstimatedDesc}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mt-2.5">
                  {data.analysisBasis?.estimated ||
                    (language === 'id'
                      ? `Porsi sekitar ${data.portionEstimate}. Nilai nutrisi (~${data.estimatedCalories} kkal) diperkirakan berdasarkan profil nutrisi umum untuk hidangan ini.`
                      : `Portion is approximately ${data.portionEstimate}. Nutrition values (~${data.estimatedCalories} kcal) are estimated using typical nutritional profiles for this dish.`)}
                </p>
              </div>
            </div>

            {/* Category 3: Uncertain */}
            <div className="bg-white p-4 rounded-2xl border border-amber-200/80 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">
                      {t.basisUncertainCategory}
                    </h4>
                    <p className="text-[10px] text-amber-700 font-semibold">
                      {t.basisUncertainDesc}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mt-2.5">
                  {data.analysisBasis?.uncertain ||
                    (language === 'id'
                      ? 'Berat gram pasti, takaran minyak goreng tersembunyi, kadar gula/garam, dan bahan tersembunyi tidak dapat ditentukan hanya dari foto.'
                      : 'Exact gram weight, hidden cooking oil amount, exact sugar/salt quantity, and hidden recipe ingredients cannot be determined from the photo.')}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 4. Needs Attention & 5. Better Choice Suggestions Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Needs Attention Section */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {t.needsAttentionTitle}
                </h3>
                <p className="text-xs text-slate-500">
                  {t.needsAttentionSubtitle}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {data.needsAttention && data.needsAttention.length > 0 ? (
                data.needsAttention.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-amber-50/50 hover:bg-amber-50/80 rounded-2xl p-3.5 border border-amber-200/60 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <BadgeAlert className="w-4 h-4 text-amber-600 shrink-0" />
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6">
                      {item.description}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-xs text-slate-500 italic p-3">
                  {t.noAttention}
                </p>
              )}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400 italic">
            {t.attentionDisclaimer}
          </div>
        </div>

        {/* Better Choice Suggestions Section */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-emerald-200/90 shadow-sm flex flex-col justify-between relative overflow-hidden">
          {/* Subtle gradient corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 rounded-full blur-2xl -z-10" />

          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-emerald-600/30">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {t.betterChoicesTitle}
                </h3>
                <p className="text-xs text-emerald-700 font-medium">
                  {t.betterChoicesSubtitle}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {(() => {
                const hasSustainability = data.betterChoiceSuggestions?.some(
                  (s) =>
                    s.category.toLowerCase().includes('keberlanjutan') ||
                    s.category.toLowerCase().includes('sustainability') ||
                    s.category.toLowerCase().includes('bahan lokal') ||
                    s.category.toLowerCase().includes('local ingredient')
                );

                const suggestions = [...(data.betterChoiceSuggestions || [])];
                if (!hasSustainability && suggestions.length > 0) {
                  suggestions.push({
                    category: language === 'id' ? 'Keberlanjutan & Bahan Lokal' : 'Sustainability & Local Ingredients',
                    action: language === 'id'
                      ? 'Pertimbangkan memilih bahan pangan lokal, segar, atau musiman (seperti sayuran daun, bumbu segar, atau komoditas setempat) yang setara atau selaras dengan hidangan ini.'
                      : 'Consider choosing fresh, local, or seasonal ingredients (such as regional greens, fresh herbs, or local produce) that naturally align with this dish.',
                    impact: language === 'id'
                      ? 'Mendukung petani serta komoditas lokal dan, dalam kondisi tertentu, dapat membantu mengurangi jejak lingkungan dari rantai pasok dan transportasi pangan.'
                      : 'Helps support local farmers and commodities and, under certain conditions, can help reduce the environmental footprint from food supply chains and transportation.'
                  });
                }

                if (suggestions.length === 0) {
                  return (
                    <p className="text-xs text-slate-500 italic p-3">
                      {t.noSuggestions}
                    </p>
                  );
                }

                return suggestions.map((suggestion, idx) => {
                  const isSustainability =
                    suggestion.category.toLowerCase().includes('keberlanjutan') ||
                    suggestion.category.toLowerCase().includes('sustainability') ||
                    suggestion.category.toLowerCase().includes('bahan lokal') ||
                    suggestion.category.toLowerCase().includes('local ingredient');

                  const displayCategory = isSustainability
                    ? (language === 'id' ? 'Keberlanjutan & Bahan Lokal' : 'Sustainability & Local Ingredients')
                    : suggestion.category;

                  return (
                    <div
                      key={idx}
                      className="bg-emerald-50/50 hover:bg-emerald-50 rounded-2xl p-3.5 border border-emerald-200/70 transition-colors"
                    >
                      <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs sm:text-sm mb-1">
                        <span className="w-5 h-5 rounded-lg bg-emerald-200/80 text-emerald-800 text-[11px] flex items-center justify-center font-extrabold">
                          {idx + 1}
                        </span>
                        <span>{displayCategory}</span>
                      </div>
                      <p className="text-xs text-slate-700 font-medium leading-relaxed mb-1 pl-7">
                        {suggestion.action}
                      </p>
                      <p className="text-[11px] text-emerald-800/90 bg-emerald-100/60 rounded-xl px-2.5 py-1 ml-7 inline-block">
                        <span className="font-bold">{t.whyLabel}</span> {suggestion.impact}
                      </p>
                    </div>
                  );
                });
              })()}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-emerald-100 text-[11px] text-emerald-700 font-medium flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.suggestionsFooter}</span>
          </div>
        </div>
      </div>

      {/* 6. Cultural Nutrition Principle Pledge Card */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 rounded-3xl p-5 sm:p-6 text-white shadow-md shadow-emerald-700/20">
        <div className="flex items-start sm:items-center gap-3 mb-2.5">
          <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-white shrink-0">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-wider font-extrabold bg-white/25 px-2 py-0.5 rounded-full text-white">
              {t.culturalPrincipleBadge}
            </span>
            <h4 className="text-base sm:text-lg font-bold mt-0.5">
              {t.culturalPrincipleTitle}
            </h4>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-emerald-50 leading-relaxed font-normal">
          {data.culturalPrincipleNote}
        </p>
      </div>

      {/* 7. Safety & Informational Note */}
      <div className="bg-slate-100/80 rounded-2xl p-4 border border-slate-200/80 flex items-start gap-3 text-slate-600 text-xs">
        <ShieldCheck className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-slate-800">{t.safetyTitle} </span>
          {t.safetyDesc}
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <button
          onClick={onReset}
          type="button"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all active:scale-[0.99]"
        >
          <RefreshCw className="w-4 h-4" />
          <span>{t.analyzeAnotherButton}</span>
        </button>

        <div className="flex items-center gap-2 text-xs text-slate-500 w-full sm:w-auto justify-end">
          <span className="inline-flex items-center gap-1 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs font-semibold text-slate-700">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            {t.engineTag}
          </span>
        </div>
      </div>
    </div>
  );
};
