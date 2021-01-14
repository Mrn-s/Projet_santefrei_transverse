const symptomes = [
  {
    id: 1,
    name: 'Fièvre',
    type:"symptômes généraux",
    description:'Hausse de la température corporelle suite à une infection.'
  },
  {
    id: 2,
    name: 'Diarrhée',
    type:"troubles digestifs",
    description:"Emission d'au moins trois selles molles ou liquides par jour, ou à une fréquence anormale pour l'individu"
  },
  {
    id: 3,
    name: 'Démangeaison',
    type:"dermatologie",
    description:"Déclenchement anormale d'une réaction de type immunitaire suite au contact avec une substance allergènes"
  },
  {
    id: 4,
    name: 'Crampes',
    type:"musculaire",
    description:'Contraction musculaire soudaine, involontaire et douloureuse durant quelues secondes ou plusieurs minutes'
  },
  {
    id: 5,
    name: 'Nez bouché',
    type:"troubles liés au nez et à la gorge",
    description:' Infection des fosses nasales, de la bouche et de la gorge'
  },
  {
    id: 6,
    name: 'Angine',
    type:"troubles liés au nez et à la gorge",
    description:'Infection de la gorge'
  },
  {
    id: 7,
    name: 'Anorexie',
    type:"symptômes généraux",
    description:"L'anorexie est un symptôme qui correspond à une perte de l'appétit."
  },
  {
    id: 8,
    name: 'Mélancolie',
    type:"psychiatrie",
    description:"La mélancolie est un symptôme donnant lieu à un sentiment d'incapacité, à une profonde tristesse, voire à une absence de joie de vivre."
  },
  {
    id: 9,
    name: 'Tachychardie',
    type:"cardiologie",
    description:"La tachycardie correspond à un rythme cardiaque plus rapide que la normale."
  },
  {
    id: 10,
    name: 'Amaigrissement',
    type:"symptômes généraux",
    description:"Un amaigrissement est une perte de poids. Il témoigne d'un déséquilibre entre les apports et les dépenses énergétiques."
  },
  {
    id: 11,
    name: 'Sueurs nocturnes',
    type:"symptômes généraux",
    description:"Transpiration excessive nocturne pouvant être liées aux fièvres de maladies infectieuses"
  },
  {
    id: 12,
    name: 'Oedème',
    type:"cardiologie",
    description:"Un œdème correspond au gonflement d'un organe ou d'un tissu dû à une accumulation ou un excès intratissulaire de liquides dans le milieu interstitiel chez les animaux ou dans les cellules chez les végétaux."
  },
  {
    id: 13,
    name: 'Palpitations',
    type:"cardiologie",
    description:"Des palpitations correspondent au fait de ressentir ses propres battements cardiaques de façon désagréable (des battements cardiaques plus rapides, plus forts ou irréguliers)."
  },
  {
    id: 14,
    name: 'Vomissements',
    type:"troubles digestifs",
    description:"Le vomissement est le rejet par la bouche d'une partie du contenu de l'estomac. C'est une action protectrice de l'organisme qui a pour but de protéger ce dernier contre l'ingestion de substances toxiques."
  },
  {
    id: 15,
    name: 'Apnée',
    type:"pneumologie",
    description:"L'apnée désigne l'arrêt de la ventilation. On parle aussi d'arrêt respiratoire ou d'arrêt ventilatoire."
  },
  {
    id: 16,
    name: 'Toux',
    type:"pneumologie",
    description:"La toux est un acte réflexe déclenché par l'irritation de zones réflexogènes et tussigènes, destiné à protéger les voies aériennes, en évacuant des corps obstruant ces voies et les sécrétions bronchiques."
  },
  {
    id: 17,
    name: 'Déshydratation',
    type:"symptômes généraux",
    description:"La déshydratation représente la sensation d'assoiffament ou de secheresse sur une partie du corps. Sa cause principale est la perte de sodium, qui fixe les molécules d'eau."
  },
  {
    id: 18,
    name: 'Agitation',
    type:"psychiatrie",
    description:"L'agitation est l'expression dans le comportement de l’excitation psychique. Il s’agit d’une activité motrice augmentée et inadaptée. Cette activité peut être contrôlable ou non par le sujet."
  },

  {
    id: 20,
    name: 'Insomnie',
    type:"psychiatrie",
    description:"L'insomnie est la diminution de la durée habituelle du sommeil et/ou l'atteinte de la qualité du sommeil avec répercussion sur la qualité de la veille du lendemain"
  },
  {
    id: 21,
    name: 'Tics',
    type:"psychiatrie",
    description:"Les tics sont des mouvements compulsifs surprenant par leur caractère brusque et inapproprié à la situation."
  },
  {
    id: 22,
    name: 'Amnésie',
    type:"problèmes cérébraux",
    description:"L'amnésie est une perte partielle ou totale de la mémoire. État pathologique permanent ou transitoire, cet état peut être d'origine organique, fonctionnel ou considéré comme un mécanisme de défense contre l'anxiété ou l'angoisse."
  },
  {
    id: 23,
    name: 'Céphalées',
    type:"problèmes cérébraux",
    description:"Une céphalée, appelée familièrement mal de tête, est une douleur locale ressentie au niveau de la boîte crânienne ou parfois de la nuque."
  },
  {
    id: 24,
    name: 'Hallucinations',
    type:"problèmes cérébraux",
    description:"Une hallucination est une perception sensorielle factice : elle s'exprime par le biai dapparitions d'objets physiquement absents, ou bien par la perception de sons qui n'éxistent pas."
  },
  {
    id: 25,
    name: 'Vertiges',
    type:"problèmes cérébraux",
    description:"Impression par laquelle une personne croit que les objets environnants et elle-même sont animés d'un mouvement circulaire ou d'oscillations."
  },
  {
    id: 26,
    name: 'Thermophobie',
    type:"symptômes généraux",
    description:"La thermophobie est une intolérance aux températures élevées des matériaux inorganiques ou des organismes"
  },
  {
    id: 27,
    name: 'Acouphènes',
    type:"oreilles",
    description:"Il s'agit d'un tintement, d'un bourdonnement, d'un sifflement ou d'un ronronnement qui peut être temporaire ou permanent. Ce bruit à l'interieur de vos oreilles est unique."
  },
  {
    id: 28,
    name: 'Surdité',
    type:"oreilles",
    description:"La surdité est un état pathologique de l'audition caractérisé par une perte partielle ou totale de la perception des sons."
  },
  {
    id: 29,
    name: 'Dysphonie',
    type:"oreilles",
    description:"Trouble de la voix, souvent dû au dysfonctionnement des cordes vocales."
  },
  {
    id: 30,
    name: 'Pâleur',
    type:"problèmes sanguins",
    description:"La pâleur est une couleur pâle de la peau ou des muqueuses pouvant être causée par une maladie ou un choc."
  },
  {
    id: 31,
    name: 'Toux sèche',
    type:"troubles liés au nez et à la gorge",
    description:"Contrairement à la toux dite grasse, la toux sèche ne produit pas d’expectorations (elle est non productive). Il s’agit le plus souvent d’une toux d’irritation."
  },
  {
    id: 32,
    name: 'Toux grasse',
    type:"troubles liés au nez et à la gorge",
    description:"La toux grasse provoque des expectorations de glaires ou crachats plus ou moins épais."
  },
  {
    id: 33,
    name: 'Otite',
    type:"oreilles",
    description:"L'otite est une infection et inflammation de l'oreille. C'est une maladie courante chez l'enfant, mais elle peut également concerner l'adulte."
  },
  {
    id: 34,
    name: 'Aphte',
    type:"bouche",
    description:"Un aphte est un ulcère superficiel douloureux de la muqueuse buccale ou d'un autre organe. Il se forme la plupart du temps sur l'intérieur des lèvres et des joues, la langue, le palais, les gencives ou la gorge."
  },
  {
    id: 35,
    name: 'Gingivite',
    type:"bouche",
    description:"La gingivite se manifeste par une gencive qui saigne facilement au brossage, parfois spontannément."
  },
  {
    id: 36,
    name: 'Démangeaison des yeux',
    type:"vision",
    description:"Bien souvent les causes des démangeaisons au yeux sont bénignes : allergies, sécheresse oculaire due à la pollution, piqûre… mais parfois, il convient de consulter un médecin car elles peuvent être causée par une infection bactérienne ou virale."
  },
  {
    id: 37,
    name: 'Taches noires',
    type:"vision",
    description:"L'apparition brutale de nombreux points noirs devant les yeux peut être le signe d'un décollement de la rétine."
  },
  {
    id: 19,
    name: 'Anxiété',
    type:"psychiatrie",
    description:"Etat psychologique caractérisé par une augmentation du stress émotionnel et physiologique."
  }
]

module.exports = symptomes
