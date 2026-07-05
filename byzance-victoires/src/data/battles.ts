import type { Battle } from "../types";

/**
 * Les grandes victoires militaires byzantines (330–1453).
 *
 * Règles éditoriales :
 * - Aucun chiffre précis inventé : quand les sources divergent ou sont
 *   invérifiables, les effectifs sont donnés en fourchette et marqués
 *   « discuté » ou « non fiable ».
 * - Les coordonnées sont approximatives (champ de bataille souvent
 *   localisé de façon incertaine).
 * - Ce fichier ne contient QUE des victoires : les grandes défaites
 *   (Yarmouk, Manzikert, Myriokephalon, 1204, 1453) sont traitées à part,
 *   hors de la carte principale, dans defeats.ts.
 */
export const battles: Battle[] = [
  {
    id: "dara-530",
    nom: "Bataille de Dara",
    annee: 530,
    date: "Juin 530",
    lieu: "Dara (Anastasioupolis), Mésopotamie, près de l'actuelle Oğuz (Turquie)",
    coords: [37.18, 40.95],
    type: "defensive",
    adversaires: "Empire sassanide (Perses)",
    commandantsByzantins: ["Bélisaire", "Hermogène"],
    commandantsAdverses: ["Pérôz (Firouz), mihran"],
    resultat:
      "Victoire byzantine nette : l'armée perse, pourtant supérieure en nombre, est repoussée avec de lourdes pertes.",
    importance:
      "Première grande victoire rangée sur les Sassanides depuis des décennies. Elle révèle Bélisaire, restaure le moral de l'armée d'Orient et pèse sur la négociation de la « Paix éternelle » de 532. Victoire tactique éclatante, aux effets stratégiques réels mais limités dans le temps.",
    resume:
      "Devant la forteresse frontalière de Dara, Bélisaire fait creuser des tranchées pour briser l'élan de la cavalerie perse et dispose ses cavaliers hunniques et hérules sur les ailes. Les contre-attaques byzantines enveloppent successivement les deux ailes perses, provoquant la déroute d'une armée réputée invincible en terrain ouvert.",
    effectifs: {
      byzantins: "≈ 25 000 hommes selon Procope",
      adverses: "≈ 40 000, puis renforts, selon Procope",
      certitude: "estimé",
      note: "Procope, témoin proche de Bélisaire, est notre source principale ; ses chiffres sont plausibles mais invérifiables et probablement arrondis.",
    },
    incertitudes:
      "Le déroulement précis des charges de flanc varie selon les reconstitutions modernes ; le récit dépend presque entièrement de Procope.",
  },
  {
    id: "ad-decimum-533",
    nom: "Bataille d'Ad Decimum",
    annee: 533,
    date: "13 septembre 533",
    lieu: "« Au dixième milliaire » au sud de Carthage (Tunisie actuelle)",
    coords: [36.72, 10.28],
    type: "offensive",
    adversaires: "Royaume vandale d'Afrique",
    commandantsByzantins: ["Bélisaire"],
    commandantsAdverses: ["Gélimer", "Ammatas", "Gibamund"],
    resultat:
      "Victoire byzantine : le plan d'encerclement vandale échoue, Ammatas est tué, la route de Carthage est ouverte.",
    importance:
      "Ouvre la reconquête justinienne de l'Afrique : Carthage tombe dès le lendemain sans combat. Victoire à la fois tactique et stratégique, quoique gagnée en partie grâce aux erreurs de coordination vandales.",
    resume:
      "Débarqué en Byzacène, Bélisaire marche sur Carthage le long de la côte. Gélimer tente de prendre la colonne byzantine dans une triple tenaille, mais les trois corps vandales attaquent sans coordination. Les fédérés huns écrasent Gibamund, l'avant-garde tue Ammatas, et Gélimer, qui s'attarde à ensevelir son frère, laisse Bélisaire retourner la situation.",
    effectifs: {
      byzantins: "≈ 15 000 à 18 000 hommes débarqués (armée expéditionnaire complète)",
      adverses: "effectifs discutés, peut-être comparables",
      certitude: "discuté",
      note: "Les chiffres vandales sont inconnus ; seule l'armée de Bélisaire est décrite en détail par Procope.",
    },
  },
  {
    id: "tricamarum-533",
    nom: "Bataille de Tricamarum",
    annee: 533,
    date: "15 décembre 533",
    lieu: "À environ 30 km à l'ouest de Carthage (Tunisie actuelle)",
    coords: [36.85, 9.95],
    type: "strategique",
    adversaires: "Royaume vandale d'Afrique",
    commandantsByzantins: ["Bélisaire", "Jean l'Arménien"],
    commandantsAdverses: ["Gélimer", "Tzazon"],
    resultat:
      "Victoire décisive : l'armée vandale est brisée, Tzazon tué, Gélimer s'enfuit puis capitule au printemps 534.",
    importance:
      "Anéantit le royaume vandale après un siècle d'existence et rend l'Afrique du Nord à l'Empire pour près d'un siècle et demi. Victoire stratégique majeure : un État ennemi disparaît en une seule campagne.",
    resume:
      "Gélimer, renforcé par les troupes de son frère Tzazon rappelées de Sardaigne, tente de reprendre Carthage. Bélisaire attaque sans attendre son infanterie : trois charges successives de la cavalerie byzantine contre le centre vandale suffisent. La mort de Tzazon provoque l'effondrement, puis la fuite nocturne de Gélimer entraîne la dissolution complète de l'armée vandale.",
    effectifs: {
      byzantins: "≈ 5 000 cavaliers engagés d'abord, infanterie arrivée en cours de bataille",
      adverses: "effectifs discutés (les sources anciennes donnent des totaux invraisemblables)",
      certitude: "discuté",
      note: "Procope avance des dizaines de milliers de Vandales ; les historiens modernes jugent ces totaux très exagérés.",
    },
  },
  {
    id: "taginae-552",
    nom: "Bataille de Taginae (Busta Gallorum)",
    annee: 552,
    date: "Juin ou juillet 552",
    lieu: "Apennins ombriens, près de Gualdo Tadino (Italie)",
    coords: [43.23, 12.78],
    type: "strategique",
    adversaires: "Royaume ostrogoth d'Italie",
    commandantsByzantins: ["Narsès"],
    commandantsAdverses: ["Totila (Baduila)"],
    resultat:
      "Victoire décisive : l'armée gothique est détruite, Totila mortellement blessé dans la fuite.",
    importance:
      "Bataille qui décide de la guerre gothique après dix-sept ans de conflit : Rome est reprise, et la résistance ostrogothe ne s'en remet pas. Modèle de coordination entre archers, infanterie démontée et cavalerie de réserve.",
    resume:
      "Narsès dispose ses cavaliers dépités au centre, encadrés par des milliers d'archers en croissant. La charge frontale de la cavalerie gothique, lancée sans soutien, est fauchée par les flèches convergentes avant d'être contre-attaquée. C'est l'une des rares batailles antiques où un plan défensif préparé fonctionne presque exactement comme prévu.",
    effectifs: {
      byzantins: "≈ 20 000 à 25 000 hommes (armée cosmopolite : Lombards, Hérules, Huns)",
      adverses: "≈ 15 000 à 20 000 hommes",
      certitude: "estimé",
      note: "Ordres de grandeur reconstitués par les historiens modernes à partir de Procope ; aucune source ne donne de décompte fiable.",
    },
  },
  {
    id: "casilinum-554",
    nom: "Bataille du Casilinum (Volturnus)",
    annee: 554,
    date: "554 (probablement à l'automne)",
    lieu: "Rives du Volturno, près de Capoue (Campanie, Italie)",
    coords: [41.08, 14.21],
    type: "defensive",
    adversaires: "Francs et Alamans (expédition de Butilin)",
    commandantsByzantins: ["Narsès"],
    commandantsAdverses: ["Butilin (Buccelin)"],
    resultat:
      "Victoire écrasante : la colonne franco-alamane est pratiquement anéantie, Butilin tué.",
    importance:
      "Met fin à la dernière grande invasion de l'Italie pendant la reconquête justinienne et scelle le contrôle byzantin de la péninsule pour une génération. Victoire tactique complète à portée stratégique régionale.",
    resume:
      "Après avoir pillé l'Italie du Sud, Butilin se retranche près de Capoue. Narsès attire l'infanterie franque, formée en coin, dans un dispositif en tenaille : le centre byzantin plie de façon contrôlée pendant que la cavalerie et les archers montés enveloppent les flancs. Le coin franc, encerclé, est détruit.",
    effectifs: {
      byzantins: "≈ 18 000 hommes",
      adverses: "effectifs discutés (Agathias avance 30 000, chiffre jugé exagéré)",
      certitude: "discuté",
      note: "Agathias, source principale, prête aux vaincus des pertes quasi totales — un topos littéraire à manier avec prudence.",
    },
  },
  {
    id: "constantinople-626",
    nom: "Siège de Constantinople de 626",
    annee: 626,
    date: "29 juin – 7 août 626",
    lieu: "Constantinople (Istanbul actuelle)",
    coords: [41.01, 28.96],
    type: "siege",
    adversaires: "Avars et Slaves, coordonnés avec les Perses sassanides de Shahrbaraz",
    commandantsByzantins: [
      "Bonos (patrice, régent)",
      "Patriarche Serge (rôle moral)",
      "Héraclius (absent, en campagne en Orient)",
    ],
    commandantsAdverses: ["Le khagan des Avars", "Shahrbaraz (Perses, rive asiatique)"],
    resultat:
      "Échec complet du siège : les assauts avars sont repoussés et la flottille slave est détruite dans la Corne d'Or ; les Perses ne peuvent jamais traverser le Bosphore.",
    importance:
      "Sauvetage de la capitale au moment le plus critique de la guerre romano-perse : la victoire libère Héraclius pour sa contre-offensive. La tradition attribue la protection de la ville à la Vierge — naissance d'une puissante mémoire religieuse (hymne acathiste).",
    resume:
      "Pendant qu'Héraclius fait campagne loin à l'est, le khagan avar assiège les murs théodosiens avec des machines de siège, tandis que les Perses campent à Chalcédoine. La marine byzantine verrouille les détroits : privées de jonction, les deux armées échouent. La destruction des monoxyles slaves dans la Corne d'Or brise l'assaut final.",
    effectifs: {
      byzantins: "≈ 12 000 défenseurs réguliers selon les estimations modernes",
      adverses: "effectifs discutés (les sources parlent de dizaines de milliers d'Avars et de Slaves)",
      certitude: "discuté",
      note: "Le Chronicon Paschale, source contemporaine, décrit le siège sans décompte fiable des assiégeants.",
    },
  },
  {
    id: "ninive-627",
    nom: "Bataille de Ninive",
    annee: 627,
    date: "12 décembre 627",
    lieu: "Plaine de Ninive, près de Mossoul (Irak actuel)",
    coords: [36.36, 43.16],
    type: "strategique",
    adversaires: "Empire sassanide",
    commandantsByzantins: ["Héraclius"],
    commandantsAdverses: ["Rhahzadh (Roch Vehan)"],
    resultat:
      "Victoire byzantine : l'armée perse est défaite, Rhahzadh tué ; la Mésopotamie sassanide est ouverte au pillage.",
    importance:
      "Point culminant de la contre-offensive d'Héraclius : quelques semaines plus tard, Khosrô II est renversé et la Perse demande la paix, restituant toutes les provinces conquises et la Vraie Croix. Victoire stratégique majeure qui clôt la dernière grande guerre de l'Antiquité.",
    resume:
      "Après des années de campagnes audacieuses via le Caucase, Héraclius affronte l'armée de Rhahzadh dans la plaine de Ninive, dans le brouillard matinal. La bataille, longue et acharnée, tourne quand Rhahzadh est tué — selon la tradition, en combat singulier contre l'empereur lui-même. L'armée perse se disloque.",
    effectifs: {
      byzantins: "≈ 25 000 à 50 000 hommes selon les reconstitutions",
      adverses: "≈ 12 000 hommes, renforts perses arrivés trop tard",
      certitude: "discuté",
      note: "Les chiffres varient fortement selon les historiens ; le duel d'Héraclius et de Rhahzadh relève peut-être de l'embellissement héroïque.",
    },
  },
  {
    id: "constantinople-717",
    nom: "Siège de Constantinople de 717-718",
    annee: 717,
    date: "15 août 717 – 15 août 718",
    lieu: "Constantinople (Istanbul actuelle)",
    coords: [41.02, 28.98],
    type: "siege",
    adversaires: "Califat omeyyade",
    commandantsByzantins: ["Léon III l'Isaurien"],
    commandantsAdverses: ["Maslama ibn Abd al-Malik", "Sulayman (amiral)"],
    resultat:
      "Désastre omeyyade : l'armée de siège, décimée par l'hiver, la famine et les attaques bulgares, se retire ; la flotte est détruite par le feu grégeois et les tempêtes.",
    importance:
      "Peut-être la victoire défensive la plus lourde de conséquences de l'histoire byzantine : elle brise la dynamique de conquête omeyyade vers l'Europe du Sud-Est. Beaucoup d'historiens la comparent à Poitiers, avec un impact stratégique supérieur.",
    resume:
      "Maslama investit la ville par terre et par mer avec des forces énormes. Léon III s'appuie sur les murs théodosiens, le feu grégeois contre les escadres arabes, la diplomatie avec les Bulgares de Tervel — qui infligent de lourdes pertes aux assiégeants — et un hiver exceptionnellement rigoureux. Après un an jour pour jour, le siège est levé.",
    effectifs: {
      byzantins: "garnison inconnue",
      adverses: "effectifs discutés : les sources donnent 80 000 à 120 000 hommes et plus de 1 800 navires, chiffres jugés très gonflés",
      certitude: "non fiable",
      note: "Théophane et les sources arabes divergent considérablement ; seul l'ordre de grandeur « très supérieur aux défenseurs » est assuré.",
    },
  },
  {
    id: "akroinon-740",
    nom: "Bataille d'Akroinon",
    annee: 740,
    date: "740",
    lieu: "Près d'Afyonkarahisar, Phrygie (Turquie actuelle)",
    coords: [38.76, 30.54],
    type: "defensive",
    adversaires: "Califat omeyyade",
    commandantsByzantins: ["Léon III l'Isaurien", "Constantin V"],
    commandantsAdverses: ["Abdallah al-Battal", "al-Malik ibn Shu'aib"],
    resultat:
      "Victoire byzantine nette : la colonne arabe principale est détruite, ses deux chefs tués.",
    importance:
      "Première grande victoire rangée sur les armées du califat en Anatolie : elle marque le passage des Byzantins de la survie à la stabilisation de la frontière du Taurus. La mort d'al-Battal en fera une figure légendaire… des deux côtés de la frontière.",
    resume:
      "Lors du grand raid omeyyade de 740, les colonnes arabes se dispersent pour piller l'Anatolie. Léon III et son fils interceptent à Akroinon la colonne d'al-Battal et l'écrasent. Combinée aux difficultés internes du califat (révolte berbère, puis révolution abbasside), la défaite met fin aux grandes invasions annuelles.",
    effectifs: {
      byzantins: "inconnus",
      adverses: "≈ 20 000 hommes pour la colonne engagée, sur un raid total bien plus vaste",
      certitude: "discuté",
      note: "Les chiffres proviennent de sources tardives ; le déroulement même de la bataille est très mal documenté.",
    },
    incertitudes:
      "Bataille connue par des mentions brèves ; son ampleur exacte est débattue, mais son écho dans les deux traditions atteste son importance.",
  },
  {
    id: "lalakaon-863",
    nom: "Bataille de Lalakaon (Poson)",
    annee: 863,
    date: "3 septembre 863",
    lieu: "Vallée du Lalakaon, Paphlagonie, près du fleuve Halys (Turquie actuelle)",
    coords: [41.0, 33.6],
    type: "strategique",
    adversaires: "Émirat de Mélitène et alliés (monde abbasside frontalier)",
    commandantsByzantins: ["Petronas (oncle de Michel III)"],
    commandantsAdverses: ["Omar al-Aqta, émir de Mélitène"],
    resultat:
      "Anéantissement de l'armée d'invasion : Omar al-Aqta est tué, son armée encerclée par trois corps byzantins convergents.",
    importance:
      "Tournant de la guerre arabo-byzantine : la puissance offensive de Mélitène est brisée pour toujours, et l'initiative passe durablement à Byzance sur la frontière orientale — prélude aux reconquêtes du Xe siècle. Victoire stratégique majeure obtenue par manœuvre.",
    resume:
      "Après un raid dévastateur d'Omar jusqu'à la mer Noire, Petronas coordonne la convergence de plusieurs armées thématiques et impériales autour de l'envahisseur. Cerné près de la colline de Poson, Omar tente de forcer le passage : toutes les issues sont bloquées, et l'armée de Mélitène est détruite avec son émir.",
    effectifs: {
      byzantins: "inconnus (plusieurs corps d'armée convergents)",
      adverses: "effectifs discutés (les sources byzantines parlent de dizaines de milliers)",
      certitude: "discuté",
      note: "La manœuvre d'encerclement est bien décrite ; les chiffres, non.",
    },
  },
  {
    id: "bathys-ryax-872",
    nom: "Bataille de Bathys Ryax",
    annee: 872,
    date: "872 (ou 878 selon la datation retenue)",
    lieu: "Défilé de Bathys Ryax, près de Sivas (Turquie actuelle)",
    coords: [39.85, 36.6],
    type: "offensive",
    adversaires: "Pauliciens de Téphrikè (alliés des émirats frontaliers)",
    commandantsByzantins: ["Christophe (domestique des Scholes)"],
    commandantsAdverses: ["Chrysocheir"],
    resultat:
      "Déroute complète des Pauliciens : Chrysocheir est tué pendant la poursuite ; l'État paulicien de Téphrikè s'effondre peu après.",
    importance:
      "Élimine une menace installée au cœur de l'Anatolie orientale, qui avait porté ses raids jusqu'à Éphèse. La chute de Téphrikè consolide la frontière et prive les émirats voisins d'un allié précieux.",
    resume:
      "Après des années de raids pauliciens, l'armée de Chrysocheir est suivie à distance par les troupes byzantines. Deux corps embusqués au-dessus du camp paulicien à Bathys Ryax déclenchent une attaque surprise à l'aube ; la panique fait le reste. La victoire doit plus à l'audace de deux commandants locaux qu'à un plan d'ensemble.",
    effectifs: {
      byzantins: "inconnus",
      adverses: "inconnus",
      certitude: "non fiable",
      note: "Aucune source ne fournit de chiffres exploitables ; la date même (872 ou 878) est discutée.",
    },
    incertitudes: "La datation oscille entre 872 et 878 selon les chronologies modernes.",
  },
  {
    id: "cap-stelai-880",
    nom: "Bataille navale du cap Stelai (Punta Stilo)",
    annee: 880,
    date: "880",
    lieu: "Au large de Punta Stilo, Calabre (Italie actuelle)",
    coords: [38.45, 16.58],
    type: "navale",
    adversaires: "Aghlabides de Sicile et d'Ifriqiya",
    commandantsByzantins: ["Nasar (drongaire de la flotte)"],
    commandantsAdverses: ["Commandants aghlabides (noms incertains)"],
    resultat:
      "Victoire navale nette : la flotte aghlabide est détruite ou capturée en grande partie, lors d'une attaque nocturne.",
    importance:
      "Rétablit pour un temps la maîtrise byzantine de la mer Tyrrhénienne et couvre la reconquête de l'Italie du Sud par les généraux de Basile Ier — fondement du futur catépanat d'Italie.",
    resume:
      "Envoyé en Occident avec une flotte reconstituée, Nasar surprend de nuit l'escadre aghlabide près du cap Stelai. Le butin est tel, disent les chroniqueurs, que le prix des captifs s'effondre sur les marchés. La victoire s'inscrit dans l'offensive générale byzantine en Italie du Sud sous Basile Ier.",
    effectifs: {
      byzantins: "≈ 140 navires selon les sources, chiffre incertain",
      adverses: "inconnus",
      certitude: "discuté",
      note: "Les récits (Théophane continué) sont favorables à la dynastie macédonienne et embellissent probablement l'ampleur du succès.",
    },
  },
  {
    id: "bosphore-941",
    nom: "Victoire navale du Bosphore contre la Rous'",
    annee: 941,
    date: "11 juin 941 (premier engagement), puis destruction de la flotte au retour",
    lieu: "Entrée du Bosphore, près de Constantinople",
    coords: [41.18, 29.09],
    type: "navale",
    adversaires: "Rous' de Kiev",
    commandantsByzantins: ["Théophane (protovestiaire)", "Bardas Phokas et Jean Kourkouas (à terre)"],
    commandantsAdverses: ["Igor de Kiev"],
    resultat:
      "La flotte de raid rous' est dispersée puis détruite par le feu grégeois ; les débarquements en Bithynie sont écrasés à terre.",
    importance:
      "Démonstration éclatante de l'arme secrète byzantine : le feu grégeois projeté par siphons. L'échec du raid conduit au traité byzantino-rous' de 944 et, à terme, au rapprochement commercial puis religieux avec Kiev.",
    resume:
      "Profitant de l'absence de la flotte principale, Igor attaque avec une grande flottille de monoxyles. Théophane improvise une escadre de quinze vieux chélandions équipés de siphons à feu grégeois et brise l'attaque à l'entrée du Bosphore, par mer calme — condition idéale pour l'arme incendiaire. Les survivants sont détruits au retour.",
    effectifs: {
      byzantins: "15 navires équipés du feu grégeois au premier engagement, puis renforts",
      adverses: "les sources parlent de « 1 000 » ou « 10 000 » barques : chiffres non fiables",
      certitude: "non fiable",
      note: "Liutprand de Crémone, dont le beau-père fut témoin, confirme l'usage décisif du feu grégeois ; les totaux des chroniques sont symboliques.",
    },
  },
  {
    id: "arcadiopolis-970",
    nom: "Bataille d'Arcadiopolis",
    annee: 970,
    date: "970 (printemps, datation discutée)",
    lieu: "Arcadiopolis, aujourd'hui Lüleburgaz, Thrace orientale (Turquie)",
    coords: [41.4, 27.35],
    type: "defensive",
    adversaires: "Rous' de Sviatoslav avec contingents bulgares, petchénègues et magyars",
    commandantsByzantins: ["Bardas Sklèros"],
    commandantsAdverses: ["Chefs rous' et alliés (Sviatoslav absent du champ de bataille)"],
    resultat:
      "Victoire byzantine : l'avant-garde de la coalition est attirée dans une embuscade et mise en déroute.",
    importance:
      "Stoppe la poussée de Sviatoslav vers Constantinople et donne à Jean Ier Tzimiskès le temps de préparer la contre-offensive de 971, qui chassera la Rous' de Bulgarie. Victoire tactique au rôle stratégique de temporisation.",
    resume:
      "Face à une coalition supérieure en nombre, Bardas Sklèros feint la retraite avec un petit corps de cavalerie pour attirer les Petchénègues, séparés du gros de l'armée, dans une double embuscade. La destruction de ce contingent désorganise l'ensemble de la coalition, qui reflue.",
    effectifs: {
      byzantins: "≈ 10 000 à 12 000 hommes selon les sources byzantines",
      adverses: "effectifs discutés (Skylitzès avance des totaux énormes, invérifiables)",
      certitude: "discuté",
      note: "Les proportions exactes — et l'ampleur réelle de la bataille — sont débattues par les historiens.",
    },
  },
  {
    id: "spercheios-997",
    nom: "Bataille du Sperchée (Spercheios)",
    annee: 997,
    date: "997 (probablement l'été)",
    lieu: "Rives du Sperchée, près de Lamía (Grèce actuelle)",
    coords: [38.87, 22.35],
    type: "defensive",
    adversaires: "Premier Empire bulgare (tsar Samuel)",
    commandantsByzantins: ["Nicéphore Ouranos"],
    commandantsAdverses: ["Samuel de Bulgarie", "Gabriel Radomir"],
    resultat:
      "Surprise nocturne dévastatrice : l'armée bulgare de retour de raid est détruite ; Samuel, blessé, échappe de justesse à la capture.",
    importance:
      "Met fin aux grands raids bulgares en Grèce méridionale et rend l'initiative à Byzance dans la longue guerre contre Samuel. Première d'une série de victoires qui culmineront à Kleidion.",
    resume:
      "Samuel, revenant d'un raid jusqu'au Péloponnèse, campe au bord du Sperchée en crue, persuadé que le fleuve est infranchissable. Nicéphore Ouranos trouve un gué de nuit, traverse et tombe sur le camp endormi. L'armée bulgare est anéantie sans vraie bataille rangée.",
    effectifs: {
      byzantins: "inconnus",
      adverses: "inconnus",
      certitude: "non fiable",
      note: "Skylitzès décrit la surprise et la blessure de Samuel, mais ne fournit aucun chiffre exploitable.",
    },
  },
  {
    id: "kleidion-1014",
    nom: "Bataille de Kleidion (Clidion)",
    annee: 1014,
    date: "29 juillet 1014",
    lieu: "Défilé de Kleidion, massif du Belasitsa, près de l'actuel village de Klyuch (Bulgarie)",
    coords: [41.37, 23.0],
    type: "strategique",
    adversaires: "Premier Empire bulgare",
    commandantsByzantins: ["Basile II", "Nicéphore Xiphias"],
    commandantsAdverses: ["Samuel de Bulgarie", "Gabriel Radomir"],
    resultat:
      "Victoire décisive : l'armée bulgare, prise à revers dans le défilé, est détruite ; des milliers de prisonniers sont capturés.",
    importance:
      "Brise la capacité de résistance du Premier Empire bulgare, annexé en 1018 : la frontière danubienne est rétablie pour la première fois depuis quatre siècles. Victoire stratégique majeure, au prix d'une mémoire sombre — l'épisode des prisonniers aveuglés, rapporté par des sources tardives et probablement amplifié.",
    resume:
      "Samuel barre le défilé de Kleidion d'une palissade. Pendant que Basile II attaque de front, Nicéphore Xiphias contourne le massif du Belasitsa par un sentier de montagne et prend les Bulgares à revers. La légende veut que 14 000 (ou 15 000) prisonniers aient été aveuglés — chiffre rond que les historiens jugent invraisemblable, même si des mutilations massives sont plausibles.",
    effectifs: {
      byzantins: "inconnus",
      adverses: "effectifs discutés ; le chiffre traditionnel de 14 000 à 15 000 prisonniers est non fiable",
      certitude: "non fiable",
      note: "Le récit de l'aveuglement apparaît surtout chez Skylitzès, près de 70 ans plus tard ; l'ampleur exacte reste débattue.",
    },
    incertitudes:
      "La guerre ne s'achève pas d'un coup : la Bulgarie résiste encore quatre ans. Kleidion est décisive par accumulation, pas par effet immédiat.",
  },
  {
    id: "levounion-1091",
    nom: "Bataille du mont Lébounion (Levounion)",
    annee: 1091,
    date: "29 avril 1091",
    lieu: "Près de l'embouchure de la Maritsa (Hèbre), Thrace, non loin d'Enez (Turquie actuelle)",
    coords: [40.83, 26.1],
    type: "strategique",
    adversaires: "Petchénègues (avec la menace conjointe de l'émir turc Tzachas)",
    commandantsByzantins: ["Alexis Ier Comnène"],
    commandantsAdverses: ["Chefs petchénègues"],
    resultat:
      "Anéantissement quasi complet du peuple petchénègue en armes, avec l'appoint décisif des Coumans alliés.",
    importance:
      "Sauve l'empire au terme d'une décennie catastrophique : la tenaille turco-petchénègue sur Constantinople est brisée. Point de départ du redressement comnène. Une des victoires les plus complètes — et les plus impitoyables — de l'histoire byzantine.",
    resume:
      "Acculé par les Petchénègues en Thrace et la flotte de Tzachas en mer Égée, Alexis Ier conclut in extremis une alliance avec les Coumans. À Lébounion, l'armée byzantino-coumane écrase le camp petchénègue, familles comprises. Anne Comnène rapporte qu'« un peuple entier périt en un seul jour » — formule à prendre comme une image, mais la disparition des Petchénègues comme puissance est réelle.",
    effectifs: {
      byzantins: "armée byzantine réduite, renforcée par ≈ 40 000 Coumans selon Anne Comnène",
      adverses: "effectifs discutés (totaux invérifiables, familles incluses)",
      certitude: "discuté",
      note: "L'Alexiade, écrite par la fille de l'empereur, est précise sur le déroulement mais partiale et peu fiable sur les nombres.",
    },
  },
  {
    id: "beroia-1122",
    nom: "Bataille de Beroia",
    annee: 1122,
    date: "1122",
    lieu: "Près de Beroia, aujourd'hui Stara Zagora (Bulgarie)",
    coords: [42.43, 25.64],
    type: "offensive",
    adversaires: "Petchénègues (dernière grande horde passée au sud du Danube)",
    commandantsByzantins: ["Jean II Comnène"],
    commandantsAdverses: ["Chefs petchénègues"],
    resultat:
      "Victoire totale : le camp retranché de chariots est pris d'assaut, les survivants sont enrôlés ou installés comme colons.",
    importance:
      "Fait disparaître définitivement les Petchénègues de l'histoire balkanique — la menace récurrente du XIe siècle s'éteint. Illustre l'efficacité de la garde varangienne en assaut frontal.",
    resume:
      "Une dernière grande migration petchénègue franchit le Danube en 1122. Jean II feint de négocier, puis attaque. La bataille se joue autour du laager, la forteresse circulaire de chariots : les assauts échouent jusqu'à ce que l'empereur engage la garde varangienne, dont les haches ouvrent la muraille de chariots.",
    effectifs: {
      byzantins: "inconnus",
      adverses: "inconnus",
      certitude: "non fiable",
      note: "Jean Kinnamos et Nicétas Choniatès décrivent la bataille sans données chiffrées sérieuses.",
    },
  },
  {
    id: "sirmium-1167",
    nom: "Bataille de Sirmium (Zemun)",
    annee: 1167,
    date: "8 juillet 1167",
    lieu: "Plaine près de Zemun / Sirmium, actuelle Serbie (région de Belgrade)",
    coords: [44.97, 19.61],
    type: "offensive",
    adversaires: "Royaume de Hongrie",
    commandantsByzantins: ["Andronic Kontostéphanos (sous l'autorité de Manuel Ier Comnène)"],
    commandantsAdverses: ["Dénes (Dionysios), comte hongrois"],
    resultat:
      "Victoire complète de l'armée comnène : l'armée hongroise est mise en déroute avec de lourdes pertes et de nombreux prisonniers.",
    importance:
      "Conclut victorieusement les longues guerres hongroises de Manuel Ier : la Hongrie cède la Dalmatie, la Croatie du Sud et Sirmium. Apogée de la puissance militaire du XIIe siècle byzantin dans les Balkans.",
    resume:
      "Andronic Kontostéphanos, commandant pour un Manuel resté à Constantinople, affronte l'armée hongroise près de Zemun. Après un choc frontal très dur — les Hongrois enfoncent d'abord une aile —, la réserve et les flancs byzantins renversent la bataille ; la poursuite jusqu'au Danube achève la victoire.",
    effectifs: {
      byzantins: "≈ 15 000 hommes selon les estimations modernes",
      adverses: "≈ 15 000 hommes, dont une forte cavalerie lourde",
      certitude: "estimé",
      note: "Kinnamos donne un ordre de bataille détaillé, rare pour l'époque, mais les totaux restent des reconstructions.",
    },
  },
  {
    id: "hyelion-1177",
    nom: "Bataille d'Hyélion et Leimochéir",
    annee: 1177,
    date: "1177",
    lieu: "Vallée du Méandre, entre Tralles et Antioche du Méandre (Turquie actuelle)",
    coords: [37.87, 28.35],
    type: "defensive",
    adversaires: "Sultanat seldjoukide de Roum",
    commandantsByzantins: ["Jean Comnène Vatatzès"],
    commandantsAdverses: ["Atapakes (commandant du raid seldjoukide)"],
    resultat:
      "L'armée de raid seldjoukide, prise en embuscade au passage du Méandre, est détruite ; son chef est tué.",
    importance:
      "Démontre qu'après le choc de Myriokephalon (1176), l'armée byzantine reste capable de défendre efficacement ses provinces : la vallée du Méandre est conservée. Victoire tactique qui corrige l'image d'un effondrement immédiat après 1176.",
    resume:
      "Revenant chargée de butin après avoir pillé jusqu'à la mer Égée, la colonne seldjoukide doit repasser le Méandre. Jean Vatatzès l'attend aux gués, entre les localités d'Hyélion et de Leimochéir : attaquée des deux rives pendant la traversée, l'armée turque est acculée au fleuve et anéantie.",
    effectifs: {
      byzantins: "inconnus",
      adverses: "effectifs discutés (Choniatès parle d'une armée nombreuse, sans chiffre fiable)",
      certitude: "non fiable",
      note: "Nicétas Choniatès est la source essentielle ; son récit est vivant mais rhétorique.",
    },
  },
  {
    id: "pelagonia-1259",
    nom: "Bataille de Pélagonie",
    annee: 1259,
    date: "Été ou automne 1259",
    lieu: "Plaine de Pélagonie, région de Bitola (Macédoine du Nord actuelle)",
    coords: [41.03, 21.34],
    type: "strategique",
    adversaires:
      "Coalition du despotat d'Épire, de la principauté d'Achaïe (Guillaume II de Villehardouin) et du royaume de Sicile (Manfred de Hohenstaufen)",
    commandantsByzantins: ["Jean Paléologue (frère de Michel VIII)", "Alexis Stratégopoulos"],
    commandantsAdverses: ["Michel II d'Épire", "Guillaume II de Villehardouin", "Chevaliers de Manfred"],
    resultat:
      "La coalition se disloque — les Épirotes se retirent avant le choc — puis les chevaliers francs sont écrasés ; Guillaume II est capturé.",
    importance:
      "Victoire fondatrice de la restauration paléologue : elle neutralise la dernière coalition capable d'empêcher la reprise de Constantinople (1261) et livre à Byzance ses premières places fortes en Morée. Victoire autant diplomatique et psychologique que militaire.",
    resume:
      "Face à une coalition hétéroclite, les Byzantins de Nicée exploitent les défiances entre alliés : rumeurs et défections (notamment celle de Jean l'Épirote, fils bâtard de Michel II) désagrègent le front adverse avant la bataille. Restés seuls, les chevaliers d'Achaïe et de Sicile sont enveloppés par les archers à cheval coumans et les troupes nicéennes.",
    effectifs: {
      byzantins: "armée mixte (Nicéens, Coumans, mercenaires) aux effectifs inconnus",
      adverses: "inconnus (les « 400 chevaliers » de Manfred sont l'un des rares chiffres transmis)",
      certitude: "discuté",
      note: "Les récits (Akropolitès, Pachymère, Chronique de Morée) divergent sensiblement sur le déroulement même de la campagne.",
    },
    incertitudes:
      "La part de la ruse, de la trahison et du combat réel est difficile à démêler : chaque source raconte une bataille assez différente.",
  },
];

/** Batailles triées par ordre chronologique (ordre d'apparition sur la carte animée). */
export const battlesChronological: Battle[] = [...battles].sort(
  (a, b) => a.annee - b.annee
);
