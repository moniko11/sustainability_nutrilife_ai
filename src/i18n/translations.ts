export type Language = 'en' | 'id';

export interface Translations {
  header: {
    tagline: string;
    philosophyButton: string;
    languageButton: string;
    indonesianOption: string;
    englishOption: string;
  };
  welcome: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    pill1Title: string;
    pill1Desc: string;
    pill2Title: string;
    pill2Desc: string;
    pill3Title: string;
    pill3Desc: string;
  };
  philosophyBanner: {
    badge: string;
    title: string;
    description: string;
    learnMore: string;
    pillar1: string;
    pillar1Desc: string;
    pillar2: string;
    pillar2Desc: string;
    pillar3: string;
    pillar3Desc: string;
    pillar4: string;
    pillar4Desc: string;
  };
  upload: {
    title: string;
    stepBadge: string;
    description: string;
    demoButton: string;
    dropzoneTitle: string;
    dropzoneSubtitle: string;
    cameraButton: string;
    chooseFileButton: string;
    sampleStripTitle: string;
    sampleStripSubtitle: string;
    imageReady: string;
    demoBadge: string;
    changeButton: string;
    clearButton: string;
    readyMeta: string;
    visionBadge: string;
    infoPrompt: string;
    analyzeButton: string;
    analyzingButton: string;
    loadingStep0: string;
    loadingStep1: string;
    loadingStep2: string;
    loadingStep3: string;
  };
  result: {
    aiBadge: string;
    geminiBadge: string;
    portionLabel: string;
    newPhotoButton: string;
    disclaimerBannerTitle: string;
    disclaimerBannerDesc: string;
    calories: string;
    protein: string;
    carbs: string;
    fat: string;
    fiber: string;
    estimated: string;
    range: string;
    pctOfCalories: string;
    macroRatioTitle: string;
    macroRatioSubtitle: string;
    componentsTitle: string;
    componentsBadge: string;
    componentsSubtitle: string;
    visibleTitle: string;
    inferredTitle: string;
    inferredFootnote: string;
    noComponents: string;
    noSeasonings: string;
    needsAttentionTitle: string;
    needsAttentionSubtitle: string;
    noAttention: string;
    attentionDisclaimer: string;
    betterChoicesTitle: string;
    betterChoicesSubtitle: string;
    whyLabel: string;
    noSuggestions: string;
    suggestionsFooter: string;
    culturalPrincipleBadge: string;
    culturalPrincipleTitle: string;
    safetyTitle: string;
    safetyDesc: string;
    analyzeAnotherButton: string;
    engineTag: string;
    unidentifiableBadge: string;
    unidentifiableDefaultTitle: string;
    unidentifiableDefaultMsg: string;
    confirmTitle: string;
    confirmDesc: string;
    confirmPlaceholder: string;
    reanalyzeButton: string;
    reanalyzingButton: string;
    clearerPhotoButton: string;
    analysisBasisTitle: string;
    basisVisibleCategory: string;
    basisVisibleDesc: string;
    basisEstimatedCategory: string;
    basisEstimatedDesc: string;
    basisUncertainCategory: string;
    basisUncertainDesc: string;
    toggleShow: string;
    toggleHide: string;
  };
  modal: {
    badge: string;
    title: string;
    subtitle: string;
    closeButton: string;
    corePillarsTitle: string;
    p1Title: string;
    p1Desc: string;
    p2Title: string;
    p2Desc: string;
    p3Title: string;
    p3Desc: string;
    p4Title: string;
    p4Desc: string;
    practicalExamplesTitle: string;
    ex1Dish: string;
    ex1Old: string;
    ex1Better: string;
    ex2Dish: string;
    ex2Old: string;
    ex2Better: string;
    ex3Dish: string;
    ex3Old: string;
    ex3Better: string;
    pledgeTitle: string;
    pledgeDesc: string;
    understoodButton: string;
  };
  error: {
    title: string;
    retryButton: string;
    dismissButton: string;
  };
  footer: {
    tagline: string;
    estimatesNote: string;
    principleLink: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    header: {
      tagline: 'Understand Your Food. Make Better Choices.',
      philosophyButton: 'Cultural Philosophy',
      languageButton: 'Bahasa',
      indonesianOption: 'Bahasa Indonesia',
      englishOption: 'English',
    },
    welcome: {
      badge: 'Multimodal Food Intelligence',
      titleStart: 'Understand Your Food. ',
      titleHighlight: 'Celebrate Your Culture.',
      titleEnd: '',
      subtitle:
        'Photograph your meal to reveal estimated nutrition, mindful ingredient highlights, and practical tweaks—without ever abandoning your heritage foods.',
      pill1Title: 'Snap & Learn',
      pill1Desc: 'Photograph any home-cooked dish or street food to explore its nutritional makeup.',
      pill2Title: 'Cultural Respect',
      pill2Desc: 'No demonizing rice, flatbreads, or family recipes. Heritage foods belong on your plate.',
      pill3Title: 'Practical Tweaks',
      pill3Desc: 'Actionable tips: portion balance, extra greens, and mindful cooking oils.',
    },
    philosophyBanner: {
      badge: 'Cultural Nutrition Principle',
      title: 'Traditional Foods Belong On Your Plate',
      description:
        'Healthy eating is not about giving up the meals that connect you to family, memory, and heritage. NutriLife AI never asks you to stop eating your cultural favorites. Instead, we offer constructive, joyful enhancements.',
      learnMore: 'Explore Our Philosophy',
      pillar1: 'Portion Harmony',
      pillar1Desc: 'Savor authentic recipes with balanced rice and soup proportions.',
      pillar2: 'Add Fresh Vegetables',
      pillar2Desc: 'Add colorful greens, cucumbers, and traditional herb plates.',
      pillar3: 'Moderate Cooking Oils',
      pillar3Desc: 'Light frying, grilling, or boiling options with equal flavor.',
      pillar4: 'Balance the Protein',
      pillar4Desc: 'Pair with eggs, tofu, tempeh, or lean skewers for steady energy.',
    },
    upload: {
      title: 'Upload or Photograph Your Meal',
      stepBadge: 'Multimodal Vision',
      description: 'Take a clear photo of your meal. Gemini will examine the actual image to estimate nutrition.',
      demoButton: 'Try Indonesian Nasi Goreng Demo',
      dropzoneTitle: 'Tap to upload or take a photo of your food',
      dropzoneSubtitle: 'Supports JPEG, PNG, or WebP. Smartphone cameras will open directly on mobile devices.',
      cameraButton: 'Camera Snapshot',
      chooseFileButton: 'Choose File',
      sampleStripTitle: 'Or test with sample dish photos:',
      sampleStripSubtitle: 'Sent to Gemini for real analysis',
      imageReady: 'Image Ready for Gemini',
      demoBadge: 'Test Case Photo',
      changeButton: 'Change',
      clearButton: 'Clear',
      readyMeta: 'Actual image data prepared for server-side analysis',
      visionBadge: 'Gemini Multimodal',
      infoPrompt: 'Gemini will inspect the image directly to identify the dish, visible ingredients, and portion.',
      analyzeButton: 'Analyze My Food',
      analyzingButton: 'Gemini is analyzing your food...',
      loadingStep0: 'Scanning actual meal image and visual food geometry...',
      loadingStep1: 'Identifying ingredients, cooking styles, and cultural context...',
      loadingStep2: 'Estimating calories, proteins, carbohydrates, and fats...',
      loadingStep3: 'Formulating practical, culturally respectful improvements...',
    },
    result: {
      aiBadge: 'AI Nutrition Analysis',
      geminiBadge: 'Gemini Multimodal Vision',
      portionLabel: 'Portion',
      newPhotoButton: 'New Photo',
      disclaimerBannerTitle: 'Estimated & Illustrative Values:',
      disclaimerBannerDesc:
        'A photograph alone cannot provide laboratory-accurate chemical measurements. Actual nutritional values depend on specific oils, hidden sugars, sauces, and cooking techniques.',
      calories: 'Calories',
      protein: 'Protein',
      carbs: 'Carbs',
      fat: 'Total Fat',
      fiber: 'Fiber',
      estimated: 'Estimated',
      range: 'Range',
      pctOfCalories: 'of total calories',
      macroRatioTitle: 'Macronutrient Calorie Ratio (Estimated)',
      macroRatioSubtitle: 'Illustrative breakdown',
      componentsTitle: 'Identified Dish Components',
      componentsBadge: 'Visual vs. Culinary Inferences',
      componentsSubtitle:
        'To maintain transparency, Gemini clearly separates what can be seen from ingredients assumed from traditional preparation.',
      visibleTitle: 'Directly Visible in Image',
      inferredTitle: 'Reasonably Inferred Preparation',
      inferredFootnote:
        '* Inferred from typical culinary preparation; exact oils, sauces, and salt cannot be verified without recipe details.',
      noComponents: 'No individual components isolated',
      noSeasonings: 'No additional seasonings inferred',
      needsAttentionTitle: 'Needs Attention',
      needsAttentionSubtitle: 'Based only on visible or reasonably inferred dish characteristics',
      noAttention: 'No specific caution flags detected for this meal.',
      attentionDisclaimer: 'Observations are visual suggestions and do not replace personalized health screening.',
      betterChoicesTitle: 'Better Choice Suggestions',
      betterChoicesSubtitle: 'Practical enhancements honoring your cultural heritage',
      whyLabel: 'Why:',
      noSuggestions: 'Enjoy your meal mindfully.',
      suggestionsFooter: 'Focus on addition and gentle balance, never deprivation.',
      culturalPrincipleBadge: 'Cultural Nutrition Principle',
      culturalPrincipleTitle: 'Food is Culture, Family, and Joy',
      safetyTitle: 'Safety & Informational Note:',
      safetyDesc:
        'Nutrition estimates are for informational purposes only and are not a medical diagnosis. A photograph alone cannot provide laboratory-accurate chemical measurements. Always consult a licensed clinical healthcare provider or dietitian for personalized clinical dietary guidance.',
      analyzeAnotherButton: 'Analyze Another Food Photo',
      engineTag: 'Gemini Multimodal Nutrition Engine',
      unidentifiableBadge: 'Identification Clarification Needed',
      unidentifiableDefaultTitle: 'Unable to Confidently Identify Meal',
      unidentifiableDefaultMsg:
        'Gemini could not identify this meal with reasonable confidence from the image. The photo might be blurry, taken in low light, or taken at an angle where the core ingredients are obscured.',
      confirmTitle: 'Confirm your food or ingredients',
      confirmDesc:
        'Tell Gemini what dish this is so it can analyze the visual portions accurately:',
      confirmPlaceholder: 'e.g. Homemade Soto Ayam / Veggie Burrito Bowl',
      reanalyzeButton: 'Re-Analyze with Hint',
      reanalyzingButton: 'Analyzing...',
      clearerPhotoButton: 'Take or Upload a Clearer Photo',
      analysisBasisTitle: '🔍 How NutriLife AI Reached This Estimate',
      basisVisibleCategory: 'Visible in the Image',
      basisVisibleDesc: 'What Gemini can directly observe',
      basisEstimatedCategory: 'Estimated',
      basisEstimatedDesc: 'What NutriLife AI estimates',
      basisUncertainCategory: 'Uncertain',
      basisUncertainDesc: 'What the photo cannot confirm',
      toggleShow: 'Show details',
      toggleHide: 'Hide details',
    },
    modal: {
      badge: 'NutriLife AI Constitution',
      title: 'The Cultural Nutrition Principle',
      subtitle: 'Why we never ask you to abandon your heritage dishes',
      closeButton: 'Close',
      corePillarsTitle: 'Four Pillars of Cultural Nutrition',
      p1Title: 'Respect the Plate',
      p1Desc:
        'Every culture has evolved staples that nourished generations. Banning rice, noodles, tortillas, or plantains breeds guilt, not wellness.',
      p2Title: 'Addition Over Subtraction',
      p2Desc:
        'Rather than cutting out what you love, add what nourishes: colorful local vegetables, crunchy pickles, and extra clean protein.',
      p3Title: 'Mindful Adjustments',
      p3Desc:
        'Small tweaks—like adjusting rice portions by 20%, choosing light oil, or sipping broth mindfully—make huge health impacts over time.',
      p4Title: 'No False Guilt',
      p4Desc:
        'Eating with family, enjoying street food, and sharing holiday feasts are vital for emotional and mental well-being.',
      practicalExamplesTitle: 'Real-World Cultural Swaps',
      ex1Dish: 'Indonesian Nasi Goreng',
      ex1Old: 'Old Diet Advice: "Never eat fried rice; pure refined carbs and saturated oils."',
      ex1Better:
        'NutriLife AI: "Enjoy 2/3 rice portion, ask for light wok oil, and pile on fresh cucumber/tomato lalapan with a grilled satay skewer."',
      ex2Dish: 'Vietnamese Pho Bo',
      ex2Old: 'Old Diet Advice: "Sodium bomb soup; avoid eating noodle soups completely."',
      ex2Better:
        'NutriLife AI: "Double the bean sprouts and fresh Thai basil herb basket, squeeze fresh lime, and enjoy several aromatic spoonfuls of broth without draining the bowl."',
      ex3Dish: 'Mexican Tacos',
      ex3Old: 'Old Diet Advice: "Fried street food loaded with excessive grease."',
      ex3Better:
        'NutriLife AI: "Choose soft corn tortillas, lean carne asada, and load up on fresh pico de gallo, shredded cabbage, and avocado salsa."',
      pledgeTitle: 'Our Promise to You',
      pledgeDesc:
        'NutriLife AI is here to help you enjoy your heritage food with vitality and balance—never shame.',
      understoodButton: 'I Understand & Agree',
    },
    error: {
      title: 'Gemini API Analysis Could Not Complete',
      retryButton: 'Retry Analysis',
      dismissButton: 'Dismiss',
    },
    footer: {
      tagline: 'Multimodal Vision Powered by Gemini',
      estimatesNote: 'Visual Nutritional Estimates',
      principleLink: 'Cultural Nutrition Principle',
    },
  },
  id: {
    header: {
      tagline: 'Pahami Makanan Anda. Buat Pilihan Lebih Baik.',
      philosophyButton: 'Filosofi Budaya',
      languageButton: 'Bahasa',
      indonesianOption: 'Bahasa Indonesia',
      englishOption: 'English',
    },
    welcome: {
      badge: 'Kecerdasan Nutrisi Multimodal',
      titleStart: 'Pahami Makanan Anda. ',
      titleHighlight: 'Rayakan Budaya Anda.',
      titleEnd: '',
      subtitle:
        'Potret makanan Anda untuk melihat perkiraan nutrisi, sorotan bahan yang bijak, dan saran penyesuaian praktis—tanpa harus meninggalkan masakan tradisional warisan Anda.',
      pill1Title: 'Foto & Pelajari',
      pill1Desc: 'Potret hidangan rumahan atau kuliner favorit untuk memahami komposisi nutrisinya.',
      pill2Title: 'Hormati Budaya',
      pill2Desc: 'Jangan tinggalkan nasi, mi, atau resep keluarga. Makanan tradisional berhak ada di piring Anda.',
      pill3Title: 'Langkah Praktis',
      pill3Desc: 'Tips nyata: keseimbangan porsi, tambahan lalapan/sayur, dan pengendalian minyak goreng.',
    },
    philosophyBanner: {
      badge: 'Prinsip Nutrisi Berbasis Budaya',
      title: 'Makanan Tradisional Berhak Ada di Piring Anda',
      description:
        'Makan sehat bukan berarti meninggalkan hidangan yang menghubungkan Anda dengan keluarga, kenangan, dan warisan leluhur. NutriLife AI tidak pernah meminta Anda berhenti menikmati masakan budaya favorit. Kami hadir memberi saran positif yang menyenangkan.',
      learnMore: 'Pelajari Filosofi Kami',
      pillar1: 'Keseimbangan Porsi',
      pillar1Desc: 'Nikmati resep autentik dengan porsi nasi dan kuah yang seimbang.',
      pillar2: 'Tambah Sayuran Segar',
      pillar2Desc: 'Lengkapi dengan lalapan segar, timun, tomat, dan sayuran hijau lokal.',
      pillar3: 'Kendalikan Minyak Goreng',
      pillar3Desc: 'Pilihan masak dengan minyak secukupnya, kukus, atau bakar tanpa mengurangi rasa.',
      pillar4: 'Seimbangkan Protein',
      pillar4Desc: 'Padukan dengan telur, tahu, tempe, atau sate ayam tanpa lemak untuk energi stabil.',
    },
    upload: {
      title: 'Unggah atau Foto Makanan Anda',
      stepBadge: 'Penglihatan Multimodal',
      description: 'Ambil foto yang jelas dari makanan Anda. Gemini akan memeriksa gambar sebenarnya untuk memperkirakan nutrisi.',
      demoButton: 'Coba Demo Nasi Goreng Indonesia',
      dropzoneTitle: 'Ketuk untuk mengunggah atau memotret makanan Anda',
      dropzoneSubtitle: 'Mendukung format JPEG, PNG, atau WebP. Kamera ponsel akan terbuka langsung di perangkat Anda.',
      cameraButton: 'Potret Kamera',
      chooseFileButton: 'Pilih Berkas',
      sampleStripTitle: 'Atau uji coba dengan foto hidangan contoh:',
      sampleStripSubtitle: 'Dikirim ke Gemini untuk analisis nyata',
      imageReady: 'Foto Siap untuk Gemini',
      demoBadge: 'Foto Uji Coba Demo',
      changeButton: 'Ubah',
      clearButton: 'Hapus',
      readyMeta: 'Data gambar asli siap dianalisis di sisi server',
      visionBadge: 'Gemini Multimodal',
      infoPrompt: 'Gemini akan memeriksa foto secara langsung untuk mengidentifikasi hidangan, bahan terlihat, dan porsi.',
      analyzeButton: 'Analisis Makanan Saya',
      analyzingButton: 'Gemini sedang menganalisis makanan Anda...',
      loadingStep0: 'Memindai gambar makanan asli dan geometri porsi visual...',
      loadingStep1: 'Mengidentifikasi bahan, gaya memasak, dan konteks kuliner...',
      loadingStep2: 'Memperkirakan kalori, protein, karbohidrat, dan lemak...',
      loadingStep3: 'Merumuskan saran perbaikan praktis yang menghormati budaya...',
    },
    result: {
      aiBadge: 'Analisis Nutrisi AI',
      geminiBadge: 'Penglihatan Multimodal Gemini',
      portionLabel: 'Porsi',
      newPhotoButton: 'Foto Baru',
      disclaimerBannerTitle: 'Nilai Perkiraan & Ilustratif:',
      disclaimerBannerDesc:
        'Foto saja tidak dapat memberikan pengukuran kimia seakurat laboratorium. Nilai nutrisi aktual bergantung pada jenis minyak, gula tersembunyi, saus, dan teknik memasak.',
      calories: 'Kalori',
      protein: 'Protein',
      carbs: 'Karbohidrat',
      fat: 'Lemak Total',
      fiber: 'Serat',
      estimated: 'Perkiraan',
      range: 'Rentang',
      pctOfCalories: 'dari total kalori',
      macroRatioTitle: 'Rasio Kalori Makronutrisi (Perkiraan)',
      macroRatioSubtitle: 'Rincian ilustratif',
      componentsTitle: 'Komponen Hidangan yang Teridentifikasi',
      componentsBadge: 'Visual Langsung vs. Perkiraan Kuliner',
      componentsSubtitle:
        'Demi transparansi, Gemini membedakan secara jelas bahan yang terlihat langsung dengan bahan yang diperkirakan dari cara memasak tradisional.',
      visibleTitle: 'Terlihat Langsung pada Gambar',
      inferredTitle: 'Perkiraan Persiapan Kuliner yang Wajar',
      inferredFootnote:
        '* Diperkirakan dari persiapan kuliner umum; takaran pasti minyak, saus, dan garam tidak dapat dipastikan tanpa resep mendalam.',
      noComponents: 'Tidak ada komponen terpisah yang terdeteksi',
      noSeasonings: 'Tidak ada bumbu tambahan yang diperkirakan',
      needsAttentionTitle: 'Perlu Perhatian',
      needsAttentionSubtitle: 'Berdasarkan karakteristik hidangan yang terlihat atau diperkirakan secara wajar',
      noAttention: 'Tidak ada catatan kehati-hatian khusus untuk makanan ini.',
      attentionDisclaimer: 'Pengamatan ini adalah saran visual dan tidak menggantikan pemeriksaan kesehatan pribadi.',
      betterChoicesTitle: 'Saran Pilihan Lebih Baik',
      betterChoicesSubtitle: 'Penyempurnaan praktis yang menghormati warisan budaya Anda',
      whyLabel: 'Alasan:',
      noSuggestions: 'Nikmati makanan Anda dengan penuh kesadaran.',
      suggestionsFooter: 'Fokus pada penambahan nutrisi dan keseimbangan, bukan pantangan yang menyiksa.',
      culturalPrincipleBadge: 'Prinsip Nutrisi Berbasis Budaya',
      culturalPrincipleTitle: 'Makanan adalah Budaya, Keluarga, dan Kebahagiaan',
      safetyTitle: 'Catatan Keamanan & Informasi:',
      safetyDesc:
        'Perkiraan nutrisi hanya untuk tujuan informasi dan bukan merupakan diagnosis medis. Foto saja tidak dapat memberikan pengukuran kimia laboratorium yang akurat. Selalu konsultasikan dengan dokter atau ahli gizi berlisensi untuk panduan diet klinis pribadi.',
      analyzeAnotherButton: 'Analisis Foto Makanan Lain',
      engineTag: 'Mesin Nutrisi Multimodal Gemini',
      unidentifiableBadge: 'Perlu Konfirmasi Identifikasi Makanan',
      unidentifiableDefaultTitle: 'Hidangan Belum Dapat Dipastikan',
      unidentifiableDefaultMsg:
        'Gemini belum dapat mengenali hidangan ini dengan tingkat kepastian yang memadai dari foto. Gambar mungkin buram, kurang pencahayaan, atau sudut foto menutupi bahan utama.',
      confirmTitle: 'Konfirmasi makanan atau bahan Anda',
      confirmDesc:
        'Beri tahu Gemini hidangan apa ini agar porsi visual dan nutrisi dapat dianalisis dengan akurat:',
      confirmPlaceholder: 'contoh: Soto Ayam Rumahan / Gado-Gado Spesial / Nasi Uduk',
      reanalyzeButton: 'Analisis Ulang dengan Petunjuk',
      reanalyzingButton: 'Menganalisis...',
      clearerPhotoButton: 'Ambil atau Unggah Foto yang Lebih Jelas',
      analysisBasisTitle: '🔍 Bagaimana NutriLife AI Membuat Perkiraan Ini',
      basisVisibleCategory: 'Terlihat pada Foto',
      basisVisibleDesc: 'Apa yang dapat diamati langsung oleh Gemini',
      basisEstimatedCategory: 'Diperkirakan',
      basisEstimatedDesc: 'Apa yang diperkirakan NutriLife AI',
      basisUncertainCategory: 'Tidak Dapat Dipastikan',
      basisUncertainDesc: 'Apa yang tidak dapat dipastikan dari foto',
      toggleShow: 'Tampilkan rincian',
      toggleHide: 'Sembunyikan rincian',
    },
    modal: {
      badge: 'Konstitusi NutriLife AI',
      title: 'Prinsip Nutrisi Berbasis Budaya',
      subtitle: 'Mengapa kami tidak pernah meminta Anda meninggalkan makanan tradisional',
      closeButton: 'Tutup',
      corePillarsTitle: 'Empat Pilar Nutrisi Budaya',
      p1Title: 'Hargai Piring Makanan Anda',
      p1Desc:
        'Setiap budaya telah mengembangkan makanan pokok yang menghidupi generasi demi generasi. Melarang nasi, mi, atau lauk tradisional hanya memicu rasa bersalah, bukan kebugaran.',
      p2Title: 'Menambah, Bukan Membatasi',
      p2Desc:
        'Daripada menyingkirkan makanan yang Anda sukai, tambahkan apa yang menyehatkan: lalapan segar, acar timun segar, dan protein berkualitas.',
      p3Title: 'Penyesuaian Bertahap',
      p3Desc:
        'Perubahan kecil—seperti mengurangi porsi nasi 20%, meminta minyak goreng lebih sedikit, atau menikmati kuah secukupnya—memberikan dampak kesehatan besar dalam jangka panjang.',
      p4Title: 'Bebas dari Rasa Bersalah',
      p4Desc:
        'Makan bersama keluarga, menikmati jajanan khas, dan berbagi hidangan hari raya sangat penting bagi kesehatan emosional dan mental.',
      practicalExamplesTitle: 'Contoh Penyesuaian Nyata',
      ex1Dish: 'Nasi Goreng Indonesia',
      ex1Old: 'Nasihat Diet Lama: "Jangan makan nasi goreng; penuh karbohidrat olahan dan minyak."',
      ex1Better:
        'NutriLife AI: "Nikmati 2/3 porsi nasi, minta sedikit minyak saat memasak, dan tambahkan lalapan timun/tomat serta sate ayam tanpa lemak."',
      ex2Dish: 'Pho Bo Vietnam',
      ex2Old: 'Nasihat Diet Lama: "Sup tinggi natrium; hindari makan sup berkuah sama sekali."',
      ex2Better:
        'NutriLife AI: "Gandakan tauge dan daun kemangi segar, peras jeruk nipis, dan nikmati beberapa sendok kuah aromatik tanpa harus menghabiskan seluruh mangkuk."',
      ex3Dish: 'Taco / Burrito Tradisional',
      ex3Old: 'Nasihat Diet Lama: "Makanan jalanan berminyak dengan kalori berlebihan."',
      ex3Better:
        'NutriLife AI: "Pilih tortilla jagung lembut, daging tanpa lemak, dan perbanyak salsa tomat segar serta selada renyah."',
      pledgeTitle: 'Janji Kami untuk Anda',
      pledgeDesc:
        'NutriLife AI hadir untuk membantu Anda menikmati masakan warisan budaya dengan vitalitas dan keseimbangan—tanpa penghakiman.',
      understoodButton: 'Saya Mengerti & Setuju',
    },
    error: {
      title: 'Analisis API Gemini Tidak Dapat Diselesaikan',
      retryButton: 'Coba Lagi Analisis',
      dismissButton: 'Tutup',
    },
    footer: {
      tagline: 'Didukung oleh Penglihatan Multimodal Gemini',
      estimatesNote: 'Perkiraan Nutrisi Visual',
      principleLink: 'Prinsip Nutrisi Berbasis Budaya',
    },
  },
};
