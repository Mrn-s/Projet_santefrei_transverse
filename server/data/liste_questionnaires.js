const questionnaires_l = [
  {
    id: 1,
    titre: 'Psychologie',
    duree:'10',
    questions:[{ qu: "Je rencontre des difficultés à m'endormir.", id_q: 1}, {qu: "J'ai des sommeils entrecoupés.", id_q: 2}, {qu: "J'ai subi un changement de poids anormal.", id_q: 3}, {qu: "J'ai déjà envisagé le suicide.", id_q: 4}, {qu: "Il m'arrive de répéter souvent la même action.", id_q: 5}, {qu: "Durant une conversation, j'imite souvent mon interlocuteur", id_q: 6}],
    photo: '',
    description:'Ce questionnaire décrit les troubles mentaux dont vous êtes susceptibles de souffrir.'
  },
  {
    id: 2,
    titre: 'Musculaire',
    duree:'15',
    questions:[{ qu: "J'effectue régulièrement des efforts physiques.", id_q: 1}, {qu: "Je subis souvent des chocs physiques.", id_q: 2}, {qu: "Je m'échauffe/m'étire toujours avant et après un effort.", id_q: 3}, {qu: "Je suis sous traitement.", id_q: 4}, {qu: "Mon problème est apparu progressivement.", id_q: 5}, {qu: "Je consomme souvent des produits afin de booster mes capacités.", id_q: 6}],
    photo: '',
    description:'Ce questionnaire fera le point sur vos derniers efforts physiques.'
  },
  {
    id: 3,
    titre: 'Ophtalmologie',
    duree:'20',
    questions:[{ qu: "Je porte souvent des lunettes.", id_q: 1}, {qu: "J'ai déjà été victime d'un choc au niveau des yeux.", id_q: 2}, {qu: "Je passe énormément de temps devant un écran.", id_q: 3}, {qu: "Les problèmes de vue sont récurrents dans ma vie.", id_q: 4}, {qu: "Ma vue s'est progressivement dégradée.", id_q: 5}, {qu: "Je suis sous traitement.", id_q: 6}],
    photo: '',
    description:"Ce questionnaire vous permettra d'identifier l'origine de vos problèmes de vision."
  },
  {
    id: 4,
    titre: 'Cardiologie',
    duree:'25',
    questions:[{ qu: "Je m'essoufle plus rapidement que d'habitude.", id_q: 1}, {qu: "J'ai l'habitude de faire du sport.", id_q: 2}, {qu: "Je rencontre souvent des problèmes cardiaques.", id_q: 3}, {qu: "Les problèmes cardiaques sont courants dans ma famille .", id_q: 4}, {qu: "J'ai subi des chocs répétés.", id_q: 5}, {qu: "J'ai eu une prise de poids rapide.", id_q: 6}],
    photo: '',
    description:'Difficultés à respirer ? Essoufflement inhabituel ? Faisons le point avec ce questionnaire.'
  },
  {
    id: 5,
    titre: 'Buccal',
    duree:'10',
    questions:[{ qu: "Je consulte régulièrement un dentiste.", id_q: 1}, {qu: "J'ai déjà porté un appareil dentaire ou autre dispositif du genre.", id_q: 2}, {qu: "Je fume souvent.", id_q: 3}, {qu: "Je suis sous traitement.", id_q: 4}, {qu: "J'ai des allergies alimentaires.", id_q: 5}, {qu: "Je souffres d'autre problèmes de santé.", id_q: 6}],
    photo: '',
    description:"Ce questionnaire fera le tour de vos problèmes buccaux."
  },
  {
    id: 6,
    titre: 'Digestion',
    duree:'15',
    questions:[{ qu: "Je rencontre souvent des problèmes de digestion.", id_q: 1}, {qu: "Les problèmes de digestion sont fréquents dans ma famille.", id_q: 2}, {qu: "Je vomis souvent.", id_q: 3}, {qu: "Il m'arrive d'avoir des douleurs abdominales.", id_q: 4}, {qu: "J'ai changé mon alimentation.", id_q: 5}, {qu: "J'ai voyagé récemment.", id_q: 6}],
    photo: '',
    description:'Maux de ventre ? Vomissement ? Dites nous tout avec ce questionnaire.'
  },
  {
    id: 7,
    titre: 'Audition',
    duree:'20',
    questions:[{ qu: "Je porte un appareil qui améliore mon audition.", id_q: 1}, {qu: "Au cours d'une discussion, j'ai besoin de faire répéter mon interlocuteur.", id_q: 2}, {qu: "Il m'arrive d'entendre des bourdonnements.", id_q: 3}, {qu: "J'écoute souvent de la musique avec le volume assez élevé.", id_q: 4}, {qu: "Les problèmes d'audition sont récurrents dans ma famille.", id_q: 5}, {qu: "J'entends difficilement la sonnerie de ma porte.", id_q: 6}],
    photo: '',
    description:"Ce questionnaire a pour objectif de nous faire part de vos problèmes d'audition."
  },
  {
    id: 8,
    titre: 'Dermatologie',
    duree:'25',
    questions:[{ qu: "J'ai la peau grasse.", id_q: 1}, {qu: "J'ai souvent la peau sèche.", id_q: 2}, {qu: "Ma peau me démange souvent.", id_q: 3}, {qu: "Je suis sous traitement.", id_q: 4}, {qu: "J'ai déjà subi une opération à cause de ma peau.", id_q: 5}, {qu: "J'ai des bulles qui apparaissent sur ma peau.", id_q: 6}],
    photo: '',
    description:'Besoin de nous faire part de vos problème de peau ? Remplissez ce questionnaire !'
  },
  {
    id: 9,
    titre: 'Neurologie',
    duree:'10',
    questions:[{ qu: "J'ai une très mauvaise mémoire ces derniers temps.", id_q: 1}, {qu: "J'ai des moments d'abscence.", id_q: 2}, {qu: "J'ai souvent des impressions de déja-vu.", id_q: 3}, {qu: "Je suis victime d'évanouissement.", id_q: 4}, {qu: "Je suis sous traitement.", id_q: 5}, {qu: "Les pertes de mémoire sont récurrents dans ma famille.", id_q: 6}],
    photo: '',
    description:"Problème de mémoire ? Maux de tête ? Voyons ensemble l'ensemble de vos problèmes neurologiques."
  }
]
module.exports = questionnaires_l
