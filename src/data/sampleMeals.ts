import { SampleMeal } from '../types';
import nasiGorengImg from '../assets/images/nasi_goreng.jpg';
import phoImg from '../assets/images/pho_sample.jpg';

export const SAMPLE_MEALS: SampleMeal[] = [
  {
    id: 'nasi-goreng',
    name: 'Indonesian Nasi Goreng Spesial',
    cuisine: 'Indonesian / Southeast Asian',
    badge: 'Featured Demo Meal',
    image: nasiGorengImg,
    data: {
      foodName: 'Indonesian Nasi Goreng Spesial',
      isIdentifiable: true,
      culturalOrigin: 'Indonesian / Southeast Asian Heritage',
      portionEstimate: 'Estimated: ~1 standard plate (~320g based on plate diameter)',
      estimatedCalories: 630,
      caloriesRange: '580 - 680 kcal (Estimated)',
      estimatedProtein: 22,
      estimatedCarbs: 82,
      estimatedFat: 24,
      estimatedFiber: 3.5,
      confidenceNote:
        'Visual estimate based on typical ingredients: white rice, sunny-side fried egg, grilled chicken skewer, cucumber slices, and fried shallots. Photograph alone cannot measure exact cooking oil or sauce amounts.',
      visibleIngredients: [
        'Wok-tossed white rice',
        'Sunny-side-up fried egg with golden yolk',
        'Grilled chicken satay skewer',
        'Fresh sliced cucumbers (lalapan)',
        'Crispy fried shallots (bawang goreng)'
      ],
      inferredIngredients: [
        'Cooking oil (palm oil or vegetable oil used for wok-frying)',
        'Sweet soy sauce (kecap manis) used for caramelization',
        'Aromatic seasoning paste (shallots, garlic, chili, and trace shrimp paste / terasi)'
      ],
      needsAttention: [
        {
          title: 'High Proportion of Refined Rice',
          description:
            'White jasmine rice constitutes approximately two-thirds of the plate volume, representing a dense carbohydrate load relative to fiber.',
          severity: 'moderate',
        },
        {
          title: 'Wok Cooking Oil & Sweet Soy Sauce',
          description:
            'Wok-frying typically incorporates several tablespoons of cooking oil, while caramelized sweet soy sauce (kecap manis) adds sugars.',
          severity: 'moderate',
        },
        {
          title: 'Sodium in Seasoning Paste & Kerupuk',
          description:
            'Traditional seasoning pastes, bouillon, and deep-fried kerupuk crackers typically carry higher sodium concentrations.',
          severity: 'attention',
        },
      ],
      betterChoiceSuggestions: [
        {
          category: 'Add Fresh Vegetables (Lalapan)',
          action:
            'Request extra fresh cucumber and tomato slices, or stir in generous sawi hijau (mustard greens) and bean sprouts into the wok.',
          impact:
            'Boosts dietary fiber and micronutrients, slows glucose absorption, and adds satisfying freshness without altering authentic flavors.',
        },
        {
          category: 'Portion Harmony',
          action:
            'Enjoy two-thirds of the rice portion and balance your meal with an accompanying clear vegetable soup (sayur bening) or extra lalapan.',
          impact:
            'Moderates overall calorie load while preserving every bit of smoky wok hei flavor.',
        },
        {
          category: 'Protein Balancing & Light Oil',
          action:
            'Ask for the egg cooked with minimal oil (or choose a soft-boiled egg), and prioritize lean grilled chicken skewers over deep-fried side meats.',
          impact:
            'Maintains healthy protein (22g) for sustained fullness while moderating cooking oil.',
        },
        {
          category: 'Crunch & Pickle Alternative',
          action:
            'Limit deep-fried kerupuk crackers to 1-2 pieces and enjoy generous servings of fresh shallot-cucumber pickle (acar).',
          impact:
            'Vinegar in acar provides zesty brightness and replaces fried starch with crisp, tangy refreshment.',
        },
        {
          category: 'Keberlanjutan & Bahan Lokal',
          action:
            'Pertimbangkan memilih bahan pangan lokal dan musiman, seperti sayuran lalapan segar (sawi hijau, mentimun, atau tomat) serta bahan pendukung dari produsen atau petani lokal di sekitar Anda.',
          impact:
            'Membantu mendukung petani serta komoditas lokal dan, dalam kondisi tertentu, dapat membantu mengurangi jejak lingkungan dari rantai pasok dan transportasi pangan.',
        },
      ],
      culturalPrincipleNote:
        'Tradition belongs on your plate. Nasi goreng is a beloved national treasure that brings families together across the archipelago. You never need to cut out heritage foods to be healthy; thoughtful adjustments like piling on fresh lalapan and moderating oil keep both your culture and your vitality thriving.',
    },
  },
  {
    id: 'vietnamese-pho',
    name: 'Vietnamese Pho Bo (Beef Noodle Soup)',
    cuisine: 'Vietnamese / Southeast Asian',
    badge: 'Popular Demo Meal',
    image: phoImg,
    data: {
      foodName: 'Vietnamese Pho Bo (Beef Noodle Soup)',
      isIdentifiable: true,
      culturalOrigin: 'Vietnamese Culinary Heritage',
      portionEstimate: 'Estimated: ~1 standard noodle soup bowl (~450ml broth + noodles)',
      estimatedCalories: 480,
      caloriesRange: '430 - 530 kcal (Estimated)',
      estimatedProtein: 28,
      estimatedCarbs: 64,
      estimatedFat: 12,
      estimatedFiber: 4.2,
      confidenceNote:
        'Visual estimate based on banh pho rice noodles, sliced beef, aromatic spiced bone broth, fresh bean sprouts, and Thai basil. Visual analysis cannot measure exact dissolved sodium in the broth.',
      visibleIngredients: [
        'Flat rice noodles (banh pho)',
        'Thinly sliced beef cuts',
        'Spiced clear bone broth',
        'Fresh bean sprouts',
        'Thai basil, culantro, and fresh lime'
      ],
      inferredIngredients: [
        'Simmered bone broth seasonings (star anise, cinnamon, ginger, charred onion)',
        'Fish sauce (nuoc mam) contributing sodium',
        'Sugar or rock sugar used in broth simmering'
      ],
      needsAttention: [
        {
          title: 'Broth Sodium Concentration',
          description:
            'Slow-simmered bone broth seasoned with fish sauce can provide more than half of recommended daily sodium if the entire bowl of broth is consumed.',
          severity: 'attention',
        },
        {
          title: 'Refined Rice Noodle Portion',
          description:
            'Rice noodles digest quickly; pairing with the lean beef and fresh herb basket first helps balance the meal.',
          severity: 'moderate',
        },
      ],
      betterChoiceSuggestions: [
        {
          category: 'Load the Fresh Herb Basket',
          action:
            'Add double portions of fresh bean sprouts, Thai basil, and culantro directly into the hot broth.',
          impact:
            'Adds crisp texture, polyphenols, and dietary fiber.',
        },
        {
          category: 'Broth Sipping Mindset',
          action:
            'Savor several spoonfuls of the aromatic spiced broth for flavor, but avoid drinking the entire bowl.',
          impact:
            'Saves up to 800-1,000mg of sodium while enjoying the full essence of the dish.',
        },
        {
          category: 'Fresh Lime Squeeze',
          action:
            'Squeeze extra fresh lime wedges rather than adding sugary bottled hoisin sauce.',
          impact:
            'Adds zesty citrus aroma without extra refined sugar.',
        },
        {
          category: 'Keberlanjutan & Bahan Lokal',
          action:
            'Pertimbangkan memilih rempah segar, tauge, dan daun herbal musiman dari petani lokal untuk melengkapi semangkuk sup hangat ini.',
          impact:
            'Membantu mendukung produsen serta komoditas lokal dan, dalam kondisi tertentu, dapat membantu mengurangi jejak lingkungan dari rantai pasok dan transportasi pangan.',
        },
      ],
      culturalPrincipleNote:
        'Pho is a masterpiece of slow-simmered herbs and wholesome bone broth. By leaning into its vibrant fresh herbs and enjoying the broth mindfully, pho remains one of the most nourishing comfort soups in the world.',
    },
  },
];
