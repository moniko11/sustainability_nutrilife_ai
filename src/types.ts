export interface NutritionData {
  foodName: string;
  isIdentifiable: boolean;
  unidentifiableMessage?: string;
  culturalOrigin: string;
  portionEstimate: string;
  estimatedCalories: number | null;
  caloriesRange: string;
  estimatedProtein: number | null;
  estimatedCarbs: number | null;
  estimatedFat: number | null;
  estimatedFiber?: number | null;
  confidenceNote: string;
  visibleIngredients: string[];
  inferredIngredients: string[];
  needsAttention: Array<{
    title: string;
    description: string;
    severity?: 'moderate' | 'attention' | 'warning';
  }>;
  betterChoiceSuggestions: Array<{
    category: string;
    action: string;
    impact: string;
  }>;
  culturalPrincipleNote: string;
  source?: string;
  analysisBasis?: {
    visibleInImage: string;
    estimated: string;
    uncertain: string;
  };
}

export interface SampleMeal {
  id: string;
  name: string;
  cuisine: string;
  badge: string;
  image: string;
  data: NutritionData;
}
