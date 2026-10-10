import React, { useRef, useState } from 'react';
import { Camera, UploadCloud, RefreshCw, Sparkles, Image as ImageIcon, ArrowRight, CheckCircle2, FlaskConical } from 'lucide-react';
import { SAMPLE_MEALS } from '../data/sampleMeals';
import { Language, translations } from '../i18n/translations';

interface FoodPhotoUploadProps {
  language: Language;
  selectedImage: string | null;
  onImageSelect: (base64Image: string, isSample?: boolean, sampleId?: string) => void;
  onClearImage: () => void;
  onAnalyze: () => void;
  isAnalyzing: boolean;
  hasAnalyzed: boolean;
  isDemoMeal?: boolean;
}

export const FoodPhotoUpload: React.FC<FoodPhotoUploadProps> = ({
  language,
  selectedImage,
  onImageSelect,
  onClearImage,
  onAnalyze,
  isAnalyzing,
  hasAnalyzed,
  isDemoMeal,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const t = translations[language].upload;

  // Cycle loading step messages during analysis
  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAnalyzing) {
      setLoadingStep(0);
      interval = setInterval(() => {
        setLoadingStep((prev) => (prev + 1) % 4);
      }, 900);
    }
    return () => clearInterval(interval);
  }, [isAnalyzing]);

  const loadingMessages = [
    t.loadingStep0,
    t.loadingStep1,
    t.loadingStep2,
    t.loadingStep3,
  ];

  // Helper to convert an image asset URL to a Base64 data URL
  const convertUrlToBase64 = async (url: string): Promise<string> => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch (err) {
      console.error('Error converting image to base64:', err);
      return url;
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      if (base64) {
        onImageSelect(base64, false);
      }
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        if (base64) {
          onImageSelect(base64, false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const loadSample = async (sampleId: string) => {
    const sample = SAMPLE_MEALS.find((m) => m.id === sampleId) || SAMPLE_MEALS[0];
    const base64Data = await convertUrlToBase64(sample.image);
    onImageSelect(base64Data, true, sample.id);
  };

  const nasiGorengSample = SAMPLE_MEALS[0];

  return (
    <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-sm mb-6 transition-all">
      {/* Hidden file inputs */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={handleFileChange}
      />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <span>{t.title}</span>
            <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-semibold">
              {t.stepBadge}
            </span>
          </h3>
          <p className="text-xs text-slate-500">
            {t.description}
          </p>
        </div>

        {/* Quick sample loader button (Test Case / Demo) */}
        <button
          onClick={() => loadSample(nasiGorengSample.id)}
          type="button"
          className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 transition-colors self-start sm:self-auto shadow-2xs"
        >
          <FlaskConical className="w-3.5 h-3.5 text-emerald-600" />
          <span>{t.demoButton}</span>
        </button>
      </div>

      {/* Main Upload / Preview Area */}
      {!selectedImage ? (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`border-2 border-dashed rounded-3xl p-6 sm:p-10 text-center transition-all cursor-pointer ${
            isDragOver
              ? 'border-emerald-500 bg-emerald-50/50 scale-[0.99]'
              : 'border-slate-200 hover:border-emerald-400 bg-slate-50/50 hover:bg-emerald-50/20'
          }`}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="w-16 h-16 mx-auto rounded-3xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center mb-4 shadow-xs">
            <UploadCloud className="w-8 h-8" />
          </div>

          <h4 className="text-sm sm:text-base font-bold text-slate-800">
            {t.dropzoneTitle}
          </h4>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            {t.dropzoneSubtitle}
          </p>

          {/* Quick Buttons inside dropzone */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                cameraInputRef.current?.click();
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-emerald-700 shadow-xs transition-colors"
            >
              <Camera className="w-4 h-4 text-emerald-600" />
              <span>{t.cameraButton}</span>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-emerald-700 shadow-xs transition-colors"
            >
              <ImageIcon className="w-4 h-4 text-emerald-600" />
              <span>{t.chooseFileButton}</span>
            </button>
          </div>

          {/* Preset Example Strip for Testing */}
          <div className="mt-6 pt-5 border-t border-slate-200/70 text-left">
            <div className="flex items-center justify-between mb-2.5">
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                {t.sampleStripTitle}
              </p>
              <span className="text-[10px] text-slate-400 font-medium">
                {t.sampleStripSubtitle}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {SAMPLE_MEALS.map((meal) => (
                <button
                  key={meal.id}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    loadSample(meal.id);
                  }}
                  className="flex items-center gap-2.5 p-1.5 pr-3 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50 shadow-2xs transition-all text-left"
                >
                  <img
                    src={meal.image}
                    alt={meal.name}
                    className="w-10 h-10 rounded-xl object-cover"
                  />
                  <div>
                    <span className="block text-xs font-bold text-slate-800">
                      {meal.name}
                    </span>
                    <span className="block text-[10px] text-emerald-700 font-medium">
                      {language === 'id' && meal.id === 'nasi-goreng' ? 'Contoh Hidangan Unggulan' : meal.badge}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Image Preview Box */
        <div className="space-y-4">
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-inner group">
            <img
              src={selectedImage}
              alt="Meal Preview"
              className="w-full max-h-80 sm:max-h-96 object-cover mx-auto"
            />

            {/* Overlay Badges */}
            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-slate-900 shadow-md backdrop-blur-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                {t.imageReady}
              </span>
              {isDemoMeal && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-200 border border-emerald-400/30 backdrop-blur-xs">
                  <FlaskConical className="w-3 h-3 text-emerald-400" />
                  {t.demoBadge}
                </span>
              )}
            </div>

            {/* Change / Clear actions */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={isAnalyzing}
                className="px-2.5 py-1.5 rounded-xl bg-white/90 hover:bg-white text-slate-800 text-xs font-semibold shadow-md backdrop-blur-xs transition-all flex items-center gap-1 disabled:opacity-50"
                title={t.changeButton}
              >
                <RefreshCw className="w-3.5 h-3.5 text-slate-600" />
                <span className="hidden sm:inline">{t.changeButton}</span>
              </button>
              <button
                type="button"
                onClick={onClearImage}
                disabled={isAnalyzing}
                className="px-2.5 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow-md transition-all disabled:opacity-50"
                title={t.clearButton}
              >
                {t.clearButton}
              </button>
            </div>

            {/* Bottom photo metadata banner */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3.5 text-white flex items-center justify-between">
              <span className="text-xs font-medium text-slate-200 flex items-center gap-1.5">
                <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />
                {t.readyMeta}
              </span>
              <span className="text-[10px] text-emerald-300 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                {t.visionBadge}
              </span>
            </div>
          </div>

          {/* Action Button Section */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {t.infoPrompt}
              </span>
            </div>

            <button
              onClick={onAnalyze}
              disabled={isAnalyzing}
              type="button"
              className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm sm:text-base text-white shadow-lg transition-all ${
                isAnalyzing
                  ? 'bg-slate-400 cursor-not-allowed opacity-90'
                  : 'bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] shadow-emerald-600/30 hover:shadow-emerald-600/40'
              }`}
            >
              {isAnalyzing ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span>{t.analyzingButton}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 fill-white/20" />
                  <span>{t.analyzeButton}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          {/* Explicit Loading State */}
          {isAnalyzing && (
            <div className="bg-emerald-50 border border-emerald-200/90 rounded-2xl p-4 sm:p-5 text-center animate-pulse">
              <div className="flex items-center justify-center gap-2.5 text-emerald-900 text-sm font-bold">
                <RefreshCw className="w-4 h-4 animate-spin text-emerald-600" />
                <span>{t.analyzingButton}</span>
              </div>
              <p className="text-xs text-emerald-700 mt-1 font-medium">
                {loadingMessages[loadingStep]}
              </p>
              <div className="w-full max-w-md mx-auto bg-emerald-200/70 h-2 rounded-full mt-3 overflow-hidden">
                <div
                  className="bg-emerald-600 h-full rounded-full transition-all duration-700"
                  style={{ width: `${((loadingStep + 1) / 4) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
