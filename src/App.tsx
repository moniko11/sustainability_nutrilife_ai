import React, { useState, useRef } from 'react';
import { Header } from './components/Header';
import { WelcomeSection } from './components/WelcomeSection';
import { CulturalPhilosophyBanner } from './components/CulturalPhilosophyBanner';
import { FoodPhotoUpload } from './components/FoodPhotoUpload';
import { AnalysisResult } from './components/AnalysisResult';
import { PhilosophyModal } from './components/PhilosophyModal';
import { NutritionData } from './types';
import { Language, translations } from './i18n/translations';
import { AlertCircle, RefreshCw } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeSampleId, setActiveSampleId] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [isReanalyzing, setIsReanalyzing] = useState<boolean>(false);
  const [analysisData, setAnalysisData] = useState<NutritionData | null>(null);
  const [isPhilosophyModalOpen, setIsPhilosophyModalOpen] = useState<boolean>(false);
  const [analysisError, setAnalysisError] = useState<string | null>(null);

  const resultRef = useRef<HTMLDivElement>(null);
  const t = translations[language];

  const handleImageSelect = (
    base64Image: string,
    isSample = false,
    sampleId?: string
  ) => {
    setSelectedImage(base64Image);
    setAnalysisError(null);
    setAnalysisData(null); // Clear previous analysis so new image is analyzed
    setActiveSampleId(isSample && sampleId ? sampleId : null);
  };

  const handleClearImage = () => {
    setSelectedImage(null);
    setActiveSampleId(null);
    setAnalysisData(null);
    setAnalysisError(null);
  };

  const handleAnalyze = async (foodHint?: string, targetLanguage?: Language) => {
    if (!selectedImage) return;

    const langToUse = targetLanguage || language;
    setIsAnalyzing(true);
    setAnalysisError(null);

    try {
      const response = await fetch('/api/analyze-food', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageBase64: selectedImage,
          foodHint: foodHint || undefined,
          language: langToUse,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || `Server responded with status ${response.status}`);
      }

      if (result.analysis) {
        setAnalysisData({
          ...result.analysis,
          source: result.source || 'gemini-multimodal-vision',
        });

        // Smooth scroll to result
        setTimeout(() => {
          resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      } else {
        throw new Error('Gemini did not return structured nutrition data.');
      }
    } catch (err: any) {
      console.error('Error analyzing image with Gemini:', err);
      setAnalysisError(
        err.message ||
          (langToUse === 'id'
            ? 'Gagal terhubung ke layanan penglihatan nutrisi Gemini. Silakan coba lagi beberapa saat lagi.'
            : 'Failed to connect to the Gemini nutrition vision service. Please try again in a few moments.')
      );
      setAnalysisData(null);
    } finally {
      setIsAnalyzing(false);
    }
  };

  // If user switches language and an analysis is already shown, re-translate analysis seamlessly
  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    if (selectedImage && analysisData && !isAnalyzing) {
      handleAnalyze(undefined, newLang);
    }
  };

  const handleReanalyzeWithHint = async (hint: string) => {
    if (!selectedImage) return;
    setIsReanalyzing(true);
    await handleAnalyze(hint);
    setIsReanalyzing(false);
  };

  const handleResetToNew = () => {
    setSelectedImage(null);
    setActiveSampleId(null);
    setAnalysisData(null);
    setAnalysisError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* App Header with Language Selector */}
      <Header
        language={language}
        onLanguageChange={handleLanguageChange}
        onOpenPhilosophy={() => setIsPhilosophyModalOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-4 sm:py-6">
        {/* Welcome Section */}
        <WelcomeSection language={language} />

        {/* Cultural Nutrition Principle Guiding Banner */}
        <CulturalPhilosophyBanner language={language} />

        {/* Food Photo Section (Upload, Camera, Preview & Analyze CTA) */}
        <FoodPhotoUpload
          language={language}
          selectedImage={selectedImage}
          onImageSelect={handleImageSelect}
          onClearImage={handleClearImage}
          onAnalyze={() => handleAnalyze()}
          isAnalyzing={isAnalyzing}
          hasAnalyzed={!!analysisData}
          isDemoMeal={!!activeSampleId}
        />

        {/* Clear Error State */}
        {analysisError && (
          <div className="mb-6 p-4 sm:p-5 rounded-3xl bg-red-50 border border-red-200/90 text-red-900 shadow-xs animate-in fade-in duration-300">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-red-100 text-red-700 flex items-center justify-center shrink-0">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm sm:text-base font-bold text-red-950">
                  {t.error.title}
                </h3>
                <p className="text-xs sm:text-sm text-red-800 mt-1 leading-relaxed">
                  {analysisError}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => handleAnalyze()}
                    type="button"
                    disabled={isAnalyzing}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow-xs transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>{t.error.retryButton}</span>
                  </button>
                  <button
                    onClick={() => setAnalysisError(null)}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-red-200 text-red-700 hover:bg-red-50 text-xs font-semibold transition-colors"
                  >
                    <span>{t.error.dismissButton}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Analysis Result Section */}
        <div ref={resultRef}>
          {analysisData && (
            <AnalysisResult
              language={language}
              data={analysisData}
              onReset={handleResetToNew}
              imageUrl={selectedImage}
              onReanalyzeWithHint={handleReanalyzeWithHint}
              isReanalyzing={isReanalyzing}
            />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-slate-200/80 bg-white py-6 px-4 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-slate-800">NutriLife AI</span>
            <span>•</span>
            <span>{t.footer.tagline}</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>{t.footer.estimatesNote}</span>
            <span>•</span>
            <button
              onClick={() => setIsPhilosophyModalOpen(true)}
              className="text-emerald-700 font-semibold hover:underline"
            >
              {t.footer.principleLink}
            </button>
          </div>
        </div>
      </footer>

      {/* Cultural Philosophy Modal */}
      <PhilosophyModal
        language={language}
        isOpen={isPhilosophyModalOpen}
        onClose={() => setIsPhilosophyModalOpen(false)}
      />
    </div>
  );
}
