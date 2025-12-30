// Données du mémorial - Formulaire Premium
// Toutes les informations peuvent être personnalisées selon le questionnaire

export const memorialData = {
  // 1. INFORMATIONS PERSONNELLES DU DÉFUNT
  personalInfo: {
    fullName: "Henock Ngandu Kabadi",
    firstName: "Henock",
    lastName: "Ngandu Kabadi",
    nickname: "Petit Zidane",
    birthDate: {
      day: 15,
      month: 5,
      year: 1992
    },
    deathDate: {
      day: 2,
      month: 9,
      year: 2024
    },
    birthPlace: "République Démocratique du Congo",
    deathPlace: "",
    residence: "Afrique du Sud (Pretoria, puis Cape Town)",
    profession: "Passionné de football",
    previousProfessions: [],
    company: "",
    education: {
      primary: "École catholique Sainte-Marie Goretti",
      secondary: "Télé de la Victoire",
      university: "Université Révérend Kim"
    }
  },

  // 2. INFORMATIONS FAMILIALES
  familyInfo: {
    parents: {
      father: {
        name: "Kabadi",
        deathDate: null
      },
      mother: {
        name: "Philo",
        deathDate: null
      }
    },
    spouse: {
      name: "",
      marriageDate: "",
      status: ""
    },
    children: [
      { name: "Karine Fumbi", age: null }
    ],
    siblings: {
      count: 7,
      position: "5ème d'une famille de 7 enfants (2 filles et 4 garçons)",
      names: []
    },
    grandchildren: {
      count: 0,
      names: []
    }
  },

  // 3. BIOGRAPHIE COMPLÈTE
  biography: {
    childhood: {
      place: "République Démocratique du Congo",
      events: "Talent prometteur dès son jeune âge, Henock a développé une passion profonde pour le football.",
      passions: "Football"
    },
    achievements: [
      "Meilleur joueur au sein du COÉ",
      "Sélectionné pour un stage de perfectionnement en France à 14 ans",
      "Surnommé 'Petit Zidane' par les sélectionneurs",
      "A surpris Claude Le Roy, entraîneur des Léopards de la RDC"
    ],
    hobbies: ["Football"],
    sports: ["Football"],
    travels: [
      "Stage de perfectionnement en France (à 14 ans)",
      "Résidence en Afrique du Sud (Pretoria, puis Cape Town)"
    ],
    personality: {
      adjectives: ["Déterminé", "Talentueux", "Persévérant", "Passionné", "Au grand cœur"],
      values: ["Passion", "Persévérance", "Famille", "Détermination"]
    },
    fullBiography: `Henock Ngandu Kabadi était un passionné de football qui a marqué le football congolais de son talent et de sa détermination.
    
    Dès son jeune âge, il a montré un talent exceptionnel pour le football. Il a été désigné meilleur joueur au sein du COÉ et a été sélectionné pour un stage de perfectionnement en France à l'âge de 14 ans. Son jeu a surpris les sélectionneurs, dont Claude Le Roy, entraîneur des Léopards de la RDC, qui l'a surnommé "Petit Zidane".
    
    Bien que les circonstances de la vie l'aient éloigné du football professionnel, Henock n'a jamais abandonné sa passion pour ce sport. Il a continué à vivre pour le football, partageant son amour du jeu avec tous ceux qui l'entouraient.
    
    Henock était le 5ème d'une famille de 7 enfants et était un père aimant pour sa fille Karine Fumbi. Il était connu pour son grand cœur et sa détermination, laissant une empreinte indélébile dans le cœur de tous ceux qui l'ont connu.
    
    Sa passion pour le football et son esprit persévérant continueront d'inspirer tous ceux qui l'ont connu. Il restera à jamais dans nos cœurs comme le "Petit Zidane" qui a marqué le football congolais.`
  },

  // 4. INFORMATIONS SUR LES OBSÈQUES
  funeralInfo: {
    wake: {
      date: {
        day: 8,
        month: 9,
        year: 2024
      },
      time: "18h00",
      location: "Domicile familial"
    },
    ceremony: {
      date: {
        day: 9,
        month: 9,
        year: 2024
      },
      time: "10h00",
      location: "Église",
      type: "Religieuse",
      church: "Église"
    },
    burial: {
      date: {
        day: 9,
        month: 9,
        year: 2024
      },
      time: "",
      cemetery: "Nécropole de l'Eternité",
      address: "Nécropole de l'Eternité de N'sele Bambou",
      googleMaps: true,
      googleMapsUrl: "https://www.google.com/maps/place/N%C3%A9cropole+de+l'Eternit%C3%A9+de+N'sele+Bambou/@-4.2012429,15.590191,15z/data=!4m6!3m5!1s0x1a6bb30071b64863:0x3402a0ca1c56ba02!8m2!3d-4.2012429!4d15.590191!16s%2Fg%2F11vxlqqb6v?entry=ttu",
      coordinates: {
        lat: -4.2012429,
        lng: 15.590191
      }
    }
  },

  // 5. PHOTOS
  photos: {
    total: 73, // Total des photos disponibles
    categories: [
      "Photos personnelles",
      "Veillée et cérémonie",
      "Morgue",
      "Cimetière",
      "Bain de consolation"
    ],
    mainPhoto: "/assets/img/portfolio/henock/henock.jpg", // Photo principale de Henock
    gallery: [
      // Photos personnelles de Henock (dossier henock uniquement)
      { src: "/assets/img/portfolio/henock/henock.jpg", alt: "Henock Ngandu Kabadi", category: "Photos personnelles" },
      { src: "/assets/img/portfolio/henock/henock (2).jpg", alt: "Henock", category: "Photos personnelles" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0023.jpg", alt: "Henock", category: "Photos personnelles" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0024.jpg", alt: "Henock", category: "Photos personnelles" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0025.jpg", alt: "Henock", category: "Photos personnelles" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0026.jpg", alt: "Henock", category: "Photos personnelles" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0027.jpg", alt: "Henock", category: "Photos personnelles" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0029.jpg", alt: "Henock", category: "Photos personnelles" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0030.jpg", alt: "Henock", category: "Photos personnelles" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0031.jpg", alt: "Henock", category: "Photos personnelles" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0032.jpg", alt: "Henock", category: "Photos personnelles" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0033.jpg", alt: "Henock", category: "Photos personnelles" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0034.jpg", alt: "Henock", category: "Photos personnelles" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0036.jpg", alt: "Henock", category: "Photos personnelles" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0037.jpg", alt: "Henock", category: "Photos personnelles" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0040.jpg", alt: "Henock", category: "Photos personnelles" },
      { src: "/assets/img/portfolio/henock/IMG-20240905-WA0042.jpg", alt: "Henock", category: "Photos personnelles" },
      { src: "/assets/img/portfolio/henock/IMG-20240919-WA0038.jpg", alt: "Henock", category: "Photos personnelles" },
      
      // Photos de veillée et cérémonie (portfolio général)
      { src: "/assets/img/portfolio/IMG-20240905-WA0023.jpg", alt: "Veillée", category: "Veillée et cérémonie" },
      { src: "/assets/img/portfolio/IMG-20240905-WA0024.jpg", alt: "Veillée", category: "Veillée et cérémonie" },
      { src: "/assets/img/portfolio/IMG-20240905-WA0025.jpg", alt: "Veillée", category: "Veillée et cérémonie" },
      { src: "/assets/img/portfolio/IMG-20240905-WA0026.jpg", alt: "Veillée", category: "Veillée et cérémonie" },
      { src: "/assets/img/portfolio/IMG-20240905-WA0027.jpg", alt: "Veillée", category: "Veillée et cérémonie" },
      { src: "/assets/img/portfolio/IMG-20240905-WA0029.jpg", alt: "Veillée", category: "Veillée et cérémonie" },
      { src: "/assets/img/portfolio/IMG-20240905-WA0030.jpg", alt: "Veillée", category: "Veillée et cérémonie" },
      { src: "/assets/img/portfolio/IMG-20240905-WA0031.jpg", alt: "Veillée", category: "Veillée et cérémonie" },
      { src: "/assets/img/portfolio/IMG-20240905-WA0032.jpg", alt: "Veillée", category: "Veillée et cérémonie" },
      { src: "/assets/img/portfolio/IMG-20240905-WA0033.jpg", alt: "Veillée", category: "Veillée et cérémonie" },
      { src: "/assets/img/portfolio/IMG-20240905-WA0034.jpg", alt: "Veillée", category: "Veillée et cérémonie" },
      { src: "/assets/img/portfolio/IMG-20240905-WA0036.jpg", alt: "Veillée", category: "Veillée et cérémonie" },
      { src: "/assets/img/portfolio/IMG-20240905-WA0037.jpg", alt: "Veillée", category: "Veillée et cérémonie" },
      { src: "/assets/img/portfolio/IMG-20240905-WA0040.jpg", alt: "Veillée", category: "Veillée et cérémonie" },
      { src: "/assets/img/portfolio/IMG-20240905-WA0042.jpg", alt: "Veillée", category: "Veillée et cérémonie" },
      { src: "/assets/img/portfolio/IMG-20240919-WA0017.jpg", alt: "Cérémonie", category: "Veillée et cérémonie" },
      { src: "/assets/img/portfolio/IMG-20240919-WA0038.jpg", alt: "Cérémonie", category: "Veillée et cérémonie" },
      { src: "/assets/img/portfolio/IMG-20240919-WA0108.jpg", alt: "Cérémonie", category: "Veillée et cérémonie" },
      { src: "/assets/img/portfolio/Capture.PNG", alt: "Cérémonie", category: "Veillée et cérémonie" },
      
      // Photos de la morgue
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0055.jpg", alt: "Morgue", category: "Morgue" },
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0056.jpg", alt: "Morgue", category: "Morgue" },
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0057.jpg", alt: "Morgue", category: "Morgue" },
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0060.jpg", alt: "Morgue", category: "Morgue" },
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0063.jpg", alt: "Morgue", category: "Morgue" },
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0064.jpg", alt: "Morgue", category: "Morgue" },
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0084.jpg", alt: "Morgue", category: "Morgue" },
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0085.jpg", alt: "Morgue", category: "Morgue" },
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0086.jpg", alt: "Morgue", category: "Morgue" },
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0090.jpg", alt: "Morgue", category: "Morgue" },
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0091.jpg", alt: "Morgue", category: "Morgue" },
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0092.jpg", alt: "Morgue", category: "Morgue" },
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0093.jpg", alt: "Morgue", category: "Morgue" },
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0094.jpg", alt: "Morgue", category: "Morgue" },
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0095.jpg", alt: "Morgue", category: "Morgue" },
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0096.jpg", alt: "Morgue", category: "Morgue" },
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0097.jpg", alt: "Morgue", category: "Morgue" },
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0102.jpg", alt: "Morgue", category: "Morgue" },
      { src: "/assets/img/portfolio/morgue/IMG-20240919-WA0107.jpg", alt: "Morgue", category: "Morgue" },
      
      // Photos du cimetière
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0019.jpg", alt: "Cimetière", category: "Cimetière" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0020.jpg", alt: "Cimetière", category: "Cimetière" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0021.jpg", alt: "Cimetière", category: "Cimetière" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0022.jpg", alt: "Cimetière", category: "Cimetière" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0023.jpg", alt: "Cimetière", category: "Cimetière" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0024.jpg", alt: "Cimetière", category: "Cimetière" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0034.jpg", alt: "Cimetière", category: "Cimetière" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0035.jpg", alt: "Cimetière", category: "Cimetière" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0036.jpg", alt: "Cimetière", category: "Cimetière" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0037.jpg", alt: "Cimetière", category: "Cimetière" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0045.jpg", alt: "Cimetière", category: "Cimetière" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0046.jpg", alt: "Cimetière", category: "Cimetière" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0047.jpg", alt: "Cimetière", category: "Cimetière" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0048.jpg", alt: "Cimetière", category: "Cimetière" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0049.jpg", alt: "Cimetière", category: "Cimetière" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0120.jpg", alt: "Cimetière", category: "Cimetière" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0122.jpg", alt: "Cimetière", category: "Cimetière" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0125.jpg", alt: "Cimetière", category: "Cimetière" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0126.jpg", alt: "Cimetière", category: "Cimetière" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0127.jpg", alt: "Cimetière", category: "Cimetière" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0128.jpg", alt: "Cimetière", category: "Cimetière" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0129.jpg", alt: "Cimetière", category: "Cimetière" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0130.jpg", alt: "Cimetière", category: "Cimetière" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0131.jpg", alt: "Cimetière", category: "Cimetière" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0132.jpg", alt: "Cimetière", category: "Cimetière" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0133.jpg", alt: "Cimetière", category: "Cimetière" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0134.jpg", alt: "Cimetière", category: "Cimetière" },
      { src: "/assets/img/portfolio/cimetiere/IMG-20240919-WA0139.jpg", alt: "Cimetière", category: "Cimetière" },
      
      // Photos du bain de consolation
      { src: "/assets/img/portfolio/bain.PNG", alt: "Bain de consolation", category: "Bain de consolation" }
    ]
  },

  // 6. VIDÉOS
  videos: {
    available: [
      {
        title: "Veillée mortuaire",
        url: "https://youtu.be/alXebRn-WJY",
        type: "wake"
      },
      {
        title: "Morgue",
        url: "https://youtu.be/22zi-VKROwc",
        type: "morgue"
      },
      {
        title: "Cimetière de Nécropole",
        url: "https://youtu.be/239sjdqiMNc",
        type: "cemetery"
      },
      {
        title: "Bain de Consolation",
        url: "https://youtu.be/nDJObACGeBo",
        type: "consolation"
      },
      {
        title: "Vidéo de Henock",
        url: "https://youtu.be/ChOY6AXYWdQ",
        type: "tribute"
      }
    ],
    youtubeLinks: [
      "https://youtu.be/alXebRn-WJY",
      "https://youtu.be/22zi-VKROwc",
      "https://youtu.be/239sjdqiMNc",
      "https://youtu.be/nDJObACGeBo",
      "https://youtu.be/ChOY6AXYWdQ"
    ]
  },

  // 7. TÉMOIGNAGES ET HOMMAGES
  testimonials: [
    {
      text: "Henock Ngandu Kabadi était bien plus qu'un passionné de football ; il incarnait la détermination, le talent et la persévérance. Dès son plus jeune âge, Henock a su captiver son entourage par son habileté avec le ballon et son esprit d'équipe. Son talent l'a rapidement hissé au sommet du football congolais, attirant l'attention de grands noms comme Claude Le Roy. Sélectionné pour un stage de perfectionnement en France à seulement 14 ans, il a fait preuve d'un potentiel exceptionnel.\n\nBien que les chemins de la vie l'aient finalement éloigné du terrain de football professionnel, Henock n'a jamais abandonné sa passion pour le sport qui avait tant marqué son enfance. Sa vie, partagée entre ses responsabilités familiales et ses rêves sportifs, a été une source d'inspiration pour ceux qui l'entouraient. En tant que père aimant de sa fille Karine et frère dévoué au sein de sa famille, Henock a toujours montré l'importance de la famille, du travail acharné et de l'amour pour ce que l'on fait.\n\nSon départ laisse un grand vide, mais son souvenir, marqué par ses accomplissements et sa personnalité chaleureuse, restera à jamais gravé dans nos cœurs. Henock, tu étais un véritable modèle, et ta mémoire continuera de briller à travers ceux que tu as touchés.",
      author: "Wazamani",
      relationship: "",
      image: "/assets/img/portfolio/temoignage/wazamani.jpg"
    },
    {
      text: "À Toi, Mon Frère\n\nDans le doux souffle du vent, je sens ton passage,\nTon rire, ton cœur, résonnent au-delà des âges.\nTon absence est un vide, un chagrin silencieux,\nMais je sais que tu brilles parmi les bienheureux.\n\nTon amour, ton sourire, demeurent éternels,\nComme les étoiles qui veillent dans le ciel.\nChaque instant partagé, gravé dans ma mémoire,\nUn trésor que je garde, une flamme d'espoir.\n\nMême si nos chemins se séparent ici-bas,\nJe sais qu'un jour, au-delà des tracas,\nNous nous retrouverons, dans la lumière infinie,\nDans les bras de Jésus, pour l'éternité réunis.\n\nAdieu pour un temps, mon frère bien-aimé,\nDans l'espoir de ce jour, je reste à espérer.\nEn Christ, nous nous reverrons, dans Sa gloire,\nEt là, sans fin, nous partagerons notre histoire.",
      author: "Israel Mutombo",
      relationship: "",
      image: "/assets/img/portfolio/temoignage/israel.jpg"
    }
  ],
  poems: [
    {
      title: "À Toi, Mon Frère",
      author: "Israel Mutombo",
      text: "Poème rendant hommage à Henock, célébrant sa vie, son talent et son esprit indomptable."
    }
  ],
  specialTributes: [
    {
      title: "Frère bien-aimé",
      description: "Henock était un frère aimant et dévoué"
    },
    {
      title: "Passionné de football",
      description: "Sa passion pour le football était au cœur de sa vie"
    },
    {
      title: "Petit Zidane",
      description: "Surnom donné par Claude Le Roy, entraîneur des Léopards de la RDC"
    },
    {
      title: "Homme au grand cœur",
      description: "Connu pour sa générosité et sa bonté"
    },
    {
      title: "Toujours dans nos cœurs",
      description: "Sa mémoire vivra éternellement dans nos cœurs"
    }
  ],

  // 8. ÉLÉMENTS SPIRITUELS ET CULTURELS
  spiritual: {
    religion: "Chrétien",
    favoriteVerses: [
      "Jean 14:27 - Je vous laisse la paix, je vous donne ma paix. Je ne vous la donne pas comme le monde la donne. Que votre cœur ne se trouble point, et ne s'alarme point.",
      "2 Corinthiens 5:8 - Nous sommes pleins de confiance, et nous aimons mieux quitter ce corps et demeurer auprès du Seigneur.",
      "Apocalypse 21:4 - Il essuiera toute larme de leurs yeux, et la mort ne sera plus, et il n'y aura plus ni deuil, ni cri, ni douleur, car les premières choses ont disparu."
    ],
    favoriteQuotes: [
      "Le football n'est pas seulement un sport, c'est une passion qui rassemble les cœurs et crée des souvenirs éternels."
    ],
    personalWords: "Le football n'est pas seulement un sport, c'est une passion qui rassemble les cœurs et crée des souvenirs éternels.",
    favoriteSongs: [],
    religiousHymns: []
  },

  // 9. DESIGN ET PERSONNALISATION
  design: {
    favoriteColors: ["Or", "Blanc", "Noir"],
    colorsToAvoid: [],
    style: "Sobre et élégant",
    logo: "",
    favicon: "",
    backgroundImages: [],
    welcomePhrases: [
      "En mémoire de",
      "Unis dans le souvenir",
      "Pour toujours dans nos cœurs",
      "Une vie bien vécue",
      "L'amour ne meurt jamais"
    ],
    animationStyle: "Douces et subtiles"
  },

  // 10. CONTACT ET INFORMATIONS
  contact: {
    siteContact: {
      name: "Israel Mutombo",
      relationship: "",
      phone: "+243 991 683 269",
      email: "imdigitallabs@gmail.com",
      whatsapp: "+243 991 683 269"
    },
    condolences: {
      showContact: true,
      phone: "+243 991 683 269",
      email: "israelmutombo9319@gmail.com",
      whatsapp: "+243 991 683 269",
      postalAddress: ""
    }
  },

  // 11. FONCTIONNALITÉS SUPPLÉMENTAIRES
  features: {
    advancedContactForm: true,
    socialMediaIntegration: true,
    blogSection: false,
    otherFeatures: []
  },

  // 12. INSPIRATIONS
  inspirations: {
    referenceSites: [],
    specificElements: []
  },

  // 13. DATES ET DÉLAIS
  timeline: {
    launchDate: "2024-05-20",
    upcomingEvents: []
  }
}

// Fonctions utilitaires pour formater les dates
export function formatDate(dateObj) {
  if (!dateObj) return ""
  const months = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ]
  return `${dateObj.day} ${months[dateObj.month - 1]} ${dateObj.year}`
}

export function formatDateShort(dateObj) {
  if (!dateObj) return ""
  return `${dateObj.day}/${dateObj.month}/${dateObj.year}`
}

export function getAge(birthDate, deathDate) {
  let age = deathDate.year - birthDate.year
  if (deathDate.month < birthDate.month || 
      (deathDate.month === birthDate.month && deathDate.day < birthDate.day)) {
    age--
  }
  return age
}

// Fonction pour calculer le nombre de jours depuis le décès
export function getDaysSinceDeath(deathDate) {
  const death = new Date(deathDate.year, deathDate.month - 1, deathDate.day)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  death.setHours(0, 0, 0, 0)
  
  const diffTime = today - death
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  
  return diffDays
}

