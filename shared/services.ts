export const SERVICES_DATA = {
  "head-spa": {
    name: "Head Spa",
    description: "Rituels holistiques pour libérer les tensions et harmoniser l'énergie",
    services: [
      {
        id: "head-spa-serenity",
        name: "Le Head Spa Sérénité",
        duration: 120,
        price: 12000,
        description: "Soin premium avec accueil immersif en sonothérapie, modelage du visage, massage crânien expert et soins adaptés.",
      },
      {
        id: "head-spa-aroma",
        name: "Rituel Head Spa Aroma",
        duration: 100,
        price: 10000,
        description: "Expérience aromatique d'exception avec huiles essentielles, massage crânien haute précision et infusion aromatique ciblée.",
      },
      {
        id: "head-spa-ritual",
        name: "Le Rituel Head Spa",
        duration: 85,
        price: 7000,
        description: "Protocole expert avec modelage visage, massage crânien inspiré du shiatsu et modelage du buste.",
      },
      {
        id: "head-spa-detox",
        name: "Le Head Spa Détox",
        duration: 60,
        price: 5000,
        description: "Soin détoxifiant pour libérer les tensions et revitaliser.",
      },
    ],
  },
  "body-rituals": {
    name: "Rituels Corps & Énergie",
    description: "Soins profonds qui libèrent les tensions et rééquilibrent les énergies",
    services: [
      {
        id: "massage-infini",
        name: "Massage de l'infini",
        duration: 90,
        price: 9000,
        description: "Rituel d'harmonisation avec mouvements continus et amples créant un effet de vague apaisant.",
      },
      {
        id: "belly-flow",
        name: "Belly Flow",
        duration: 70,
        price: 9000,
        description: "Rituel du ventre et des émotions, profondément libérateur et transformateur.",
      },
      {
        id: "massage-cranien",
        name: "Massage Crânien",
        duration: 60,
        price: 6000,
        description: "Rituel d'apaisement et de clarté avec pressions ciblées et gestes ayurvédiques.",
      },
    ],
  },
  "drainage": {
    name: "Drainage Lymphatique",
    description: "Soins experts dédiés à la fluidité, légèreté et silhouette",
    services: [
      {
        id: "lympho-drain-sculpt",
        name: "Lympho Drain Sculpt",
        duration: 90,
        price: 8500,
        description: "Drainage manuel doux et complet pour détoxifier, affiner et apporter légèreté.",
      },
      {
        id: "lympho-leg-sculpt",
        name: "Lympho Leg Sculpt",
        duration: 45,
        price: 5000,
        description: "Drainage expert pour des jambes plus légères, affinées et dégonflées.",
      },
      {
        id: "lympho-face-sculpt",
        name: "Lympho Face Sculpt",
        duration: 45,
        price: 6000,
        description: "Drainage expert qui décongestionne, affine les traits et ravive l'éclat.",
      },
    ],
  },
  "reflexology": {
    name: "Réflexologie",
    description: "Voyage vers l'équilibre profond par la stimulation des zones réflexes",
    services: [
      {
        id: "reflexo-plantaire",
        name: "Réflexologie Plantaire Thérapeutique",
        duration: 45,
        price: 5000,
        description: "Soin précis ciblé pour rééquilibrer les systèmes internes et libérer les tensions profondes.",
      },
      {
        id: "reflexo-circulatoire",
        name: "Réflexologie Circulatoire",
        duration: 75,
        price: 7500,
        description: "Soin combiné avec drainage manuel des jambes pour retrouver légèreté et confort.",
      },
      {
        id: "reflexo-lymphatique",
        name: "Réflexologie Lymphatique Intégrale",
        duration: 140,
        price: 14000,
        description: "Rituel complet associant réflexologie et drainage lymphatique intégral du corps.",
      },
    ],
  },
  "di-nina": {
    name: "Soins Di Nina",
    description: "La Corse dans la peau - cosmétique raffinée avec essences naturelles",
    services: [
      {
        id: "soleil-abricot",
        name: "Soleil d'Abricot",
        duration: 45,
        price: 5000,
        description: "Rituel dos lumière et détente avec senteurs solaires et gourmandes.",
      },
      {
        id: "eclat-sacre-kansa",
        name: "L'Éclat Sacré au Kansa Wand",
        duration: 60,
        price: 7000,
        description: "Soin d'exception combinant savoir-faire botanique et tradition ayurvédique.",
      },
      {
        id: "eveil-sens",
        name: "Éveil des Sens",
        duration: 60,
        price: 7500,
        description: "Rituel visage et bien-être enveloppé d'essences naturelles d'immortelle corse.",
      },
    ],
  },
};

export const RESET_PROGRAM = {
  title: "Programme RESET",
  subtitle: "4 semaines pour te remettre au centre",
  description: "Un engagement envers toi-même pendant 1 mois. Chaque semaine, on travaille une dimension différente avec un carnet d'exercices doux, de la cohérence cardiaque et des playlists.",
  weeks: [
    {
      week: 1,
      title: "Le Mental et les Tensions",
      soin: "Head Spa Aroma",
      description: "Libérez les tensions mentales et apaisez votre esprit avec le Head Spa Aroma. Un voyage sensoriel unique pour commencer votre transformation.",
      benefits: [
        "Libération des tensions mentales",
        "Apaisement du système nerveux",
        "Clarté d'esprit",
        "Relaxation immédiate",
      ],
    },
    {
      week: 2,
      title: "Le Ventre et les Émotions",
      soin: "Belly Flow",
      description: "Travaillez le centre émotionnel du corps avec le Belly Flow. Un soin profondément libérateur qui dénoue les tensions abdominales.",
      benefits: [
        "Libération émotionnelle",
        "Dénouer les tensions abdominales",
        "Lâcher-prise émotionnel",
        "Reconnexion à la respiration",
      ],
    },
    {
      week: 3,
      title: "L'Organisme en Profondeur",
      soin: "Réflexologie Plantaire",
      description: "Harmonisez votre organisme en profondeur avec la réflexologie plantaire. Stimulez les zones réflexes pour rééquilibrer vos systèmes internes.",
      benefits: [
        "Rééquilibrage des systèmes internes",
        "Libération des tensions profondes",
        "Activation de l'auto-guérison",
        "Bien-être global",
      ],
    },
    {
      week: 4,
      title: "L'Énergie",
      soin: "Lahochi",
      description: "Complétez votre transformation avec le Lahochi. Un soin énergétique puissant pour harmoniser et revitaliser votre énergie vitale.",
      benefits: [
        "Harmonisation énergétique",
        "Revitalisation",
        "Alignement corps-esprit",
        "Transformation complète",
      ],
    },
  ],
};

export const GIFT_CARD_AMOUNTS = [
  { amount: 5000, label: "50 €" },
  { amount: 7500, label: "75 €" },
  { amount: 10000, label: "100 €" },
  { amount: 15000, label: "150 €" },
  { amount: 20000, label: "200 €" },
];
