const actualites = [
  {
    id: 1,
    titre: 'Nouvelle souche britannique du Covid',
    redacteur: 'Albert Reporter',
    theme: 'Thème : Covid',
    sources:'https://www.santepubliquefrance.fr/',
    photo: 'https://www.santepubliquefrance.fr/var/site/storage/images/8/4/3/5/2755348-1-fre-FR/spf_dossier_covid_header.jpg',
    description:"Angleterre, Afrique du Sud, Japon. Des variants du coronavirus inquiètent à cause de leur forte contagiosité. Surtout le variant anglais présent en France qui pourrait toucher plusieurs dizaines de milliers de personnes d'ici à début avril, a prévenu Jean-François Delfraissy. Que sait-on de ces versions mutantes du Sars-CoV-2 ? Les symptômes sont-ils différents ? Les enfants sont-ils plus touchés ?"
  },
  {
    id: 2,
    titre: "Les scientifiques identifient un mécanisme qui cause l'apparition du syndrome du côlon irritable",
    redacteur: 'Mérandry Déhodji',
    theme: 'Thème : Organisme',
    sources:'https://www.santemagazine.fr/actualites/actualites-sante/les-scientifiques-identifient-un-mecanisme-qui-cause-lapparition-du-syndrome-du-colon-irritable-876809',
    photo: 'https://i-sam.unimedias.fr/2021/01/14/istock-1250173635.jpg?auto=format%2Ccompress&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=227&amp;w=405',
    description:"Le syndrome du côlon irritable concerne 5% de la population française et touche deux plus les femmes que les hommes. En Belgique, les chercheurs de la KU Leuven ont identifié le mécanisme biologique qui explique pourquoi certaines personnes ressentent des douleurs abdominales lorsqu'elles mangent certains aliments. Cette découverte ouvre la voie à un traitement plus efficace du syndrome du côlon irritable. L'étude, réalisée chez la souris et l'homme, a été publiée dans la revue scientifique Nature."
  },
  {
    id: 3,
    titre: "Gad Elmaleh hospitalisé pour la Covid-19 : 'C'était vraiment éprouvant' ",
    redacteur: 'Eli Dupont',
    theme: 'Thème : Personnalités',
    sources:'https://www.parismatch.com/People/Gad-Elmaleh-hospitalise-pour-la-Covid-19-C-etait-vraiment-eprouvant-1720159',
    photo: 'https://resize-parismatch.lanmedia.fr/img/var/news/storage/images/paris-match/people/gad-elmaleh-hospitalise-pour-la-covid-19-c-etait-vraiment-eprouvant-1720159/28364448-1-fre-FR/Gad-Elmaleh-hospitalise-pour-la-Covid-19-C-etait-vraiment-eprouvant.jpg',
    description:"Gad Elmaleh se confie. Dimanche 10 janvier 2021, l'acteur et humoriste de 49 ans était interviewé par Audrey Crespo-Mara pour le portrait de la semaine dans l'émission «Sept à Huit» sur TF1. L'occasion pour lui de révéler qu'il a été hospitalisé au début de la pandémie de coronavirus après avoir contracté la maladie. «Je suis rentré à l'hôpital Saint-Antoine le 5 mars. Dans un état... C'est vraiment la fatigue."
  },
  {
    id: 4,
    titre: "Fièvre : quand faut-il s'inquiéter  ?",
    redacteur: 'Camélia Aoussedj Tesfaye',
    theme: 'Thème : Maladies fréquentes',
    sources:'https://www.santemagazine.fr/sante/maladies/fievre-a-quelle-temperature-faut-il-sinquieter-170622',
    photo: 'https://i-sam.unimedias.fr/2015/06/15/fievre.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=590&w=1050',
    description:"La fièvre accompagne grand nombre de nos infections, mais la moindre poussée nous laisse parfois désemparés. Voici les questions qu'il faut vous poser lorsque votre température ou celle de votre enfant atteint 38, 39, 40 °C... Et voici nos réponses."  },
  {
    id: 5,
    titre: "Santé : « L’avenir est à la médecine des comportements et à la relation soignante »",
    redacteur: 'Arizona Robbins',
    theme: "Thème : hôpital Grey's Anatomy",
    sources:'https://www.lemonde.fr/idees/article/2019/11/28/sante-l-avenir-est-a-la-medecine-des-comportements-et-a-la-relation-soignante_6020876_3232.html',
    photo: 'https://images.bfmtv.com/5Lm9HMO6W6k5IsQT0dL1IIYZopo=/2x48:898x552/1600x0/images/-206646.jpg',
    description:'L’acte soignant est insuffisamment valorisé par rapport au médicament et à la technique, déplore, dans une tribune au « Monde », le professeur de médecine Patrice Couzigou.'
  },
  {
    id: 6,
    titre: 'Hypnose relaxation et sommeil autour d’un thé, par Benjamin Lubszynski',
    redacteur: 'Mesmer Lejigabosz',
    theme: 'Thème : Bien-être',
    sources:'https://sante.lefigaro.fr/article/hypnose-relaxation-et-sommeil-autour-d-un-the-par-benjamin-lubszynski/',
    photo: 'https://www.leparisien.fr/resizer/Q0jtKc01IrEclpAnx-rrp57BR-s=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/D4AKXQ26CVKDFMEZQZASMQQDMQ.jpg',
    description:'Figaro Live vous propose une collection de vidéos pour vous aider à vous relaxer. Dans cette séance, le coach et youtubeur Benjamin Lubszynski vous accompagne vers la détente autour d’une tasse de thé.'
  },
  {
    id: 7,
    titre: 'Paludisme : un régime médical réduit la mortalité infantile en saison des pluies',
    redacteur: 'Jean Guy',
    theme: 'Thème : Monde',
    sources:'https://www.scidev.net/afrique-sub-saharienne/news/child-malaria-deaths-slashed-by-rainy-season-regimen/',
    photo: 'https://www.scidev.net/afrique-sub-saharienne/wp-content/uploads/sites/2/child-suffering-from-Malaria-1536x1022.jpg',
    description:"[NAIROBI] Selon une étude, une administration mensuelle de médicaments antipaludiques aux enfants pendant la saison des pluies réduit de 42% le nombre de décès dus au paludisme chez les enfants ; ce qui plaide en faveur de sa large large implémentation dans les régions d’Afrique où le paludisme est endémique. En 2012, l’Organisation mondiale de la santé (OMS) avait publié des directives pour la mise en œuvre de l’administration mensuelle intermittente de médicaments, également connue sous le nom de chimioprévention saisonnière du paludisme (SMC[1]), dans les zones de forte transmission ; laquelle se produit pendant des saisons particulières. L’objectif était d’aider à prévenir le paludisme chez les enfants de moins de cinq ans."
  }

]
module.exports = actualites
