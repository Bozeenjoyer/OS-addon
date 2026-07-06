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
    id: "satala-530",
    nom: "Bataille de Satala",
    annee: 530,
    date: "Été 530",
    lieu: "Satala, Arménie romaine, près de l'actuel Sadak (Turquie)",
    coords: [40.02, 39.59],
    type: "defensive",
    adversaires: "Empire sassanide (Perses)",
    commandantsByzantins: ["Sittas", "Dorothée"],
    commandantsAdverses: ["Mihr-Mihroe (Mermeroès)"],
    resultat:
      "L'armée perse, surprise devant Satala qu'elle assiégeait, est mise en déroute et évacue l'Arménie romaine.",
    importance:
      "Avec Dara la même année, Satala forme un double échec perse qui pousse Ctésiphon à négocier : la frontière nord est sécurisée. Victoire défensive obtenue contre une armée nettement supérieure en nombre.",
    resume:
      "Pendant que Mermeroès investit Satala, Sittas dissimule un petit corps de cavalerie sur les hauteurs : sa charge dans un nuage de poussière fait croire à l'arrivée d'une grande armée, tandis que la garnison sort des murs. Pris entre deux feux et ayant perdu un étendard de commandement, les Perses se replient puis quittent la province.",
    effectifs: {
      byzantins: "≈ 15 000 hommes selon Procope",
      adverses: "≈ 30 000 hommes selon Procope",
      certitude: "estimé",
      note: "Comme pour Dara, les chiffres reposent sur le seul Procope : plausibles en proportion, invérifiables en valeur absolue.",
    },
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
    id: "solachon-586",
    nom: "Bataille de Solachon",
    annee: 586,
    date: "Printemps 586",
    lieu: "Plaine de Solachon, au sud de Mardin, entre Dara et Nisibe (Turquie actuelle)",
    coords: [37.2, 40.55],
    type: "defensive",
    adversaires: "Empire sassanide (Perses)",
    commandantsByzantins: ["Philippikos", "Héraclius l'Ancien (père du futur empereur)"],
    commandantsAdverses: ["Le Kardarigan (titre du général perse)"],
    resultat:
      "Victoire byzantine nette : l'armée perse, coupée de l'eau et enfoncée sur son aile, se débande ; le Kardarigan s'échappe de justesse.",
    importance:
      "Plus grande victoire rangée de la guerre de 572-591 : elle rétablit la position byzantine en Mésopotamie du Nord. Victoire tactique aux effets stratégiques réels mais non décisifs — la guerre durera encore cinq ans.",
    resume:
      "Philippikos intercepte l'armée perse qui marche sur Mardin par une chaleur accablante, en la coupant du fleuve. L'aile droite byzantine enfonce la gauche perse ; le centre tient, puis l'ensemble du dispositif sassanide s'effondre. Les rescapés, assoiffés, se réfugient sur une colline avant de se disperser.",
    effectifs: {
      byzantins: "inconnus",
      adverses: "inconnus",
      certitude: "non fiable",
      note: "Théophylacte Simocatte, source principale, décrit le dispositif en trois corps mais ne transmet aucun total crédible.",
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
    id: "constantinople-674",
    nom: "Premier siège arabe de Constantinople",
    annee: 674,
    date: "674-678 (chronologie traditionnelle)",
    lieu: "Constantinople et mer de Marmara",
    coords: [40.99, 29.0],
    type: "siege",
    adversaires: "Califat omeyyade de Muʿawiya",
    commandantsByzantins: ["Constantin IV"],
    commandantsAdverses: ["Commandants de la flotte omeyyade (Fadala ibn Ubayd, Yazid selon les traditions)"],
    resultat:
      "Échec du blocus arabe : la flotte omeyyade, décimée par le feu grégeois puis par les tempêtes au retour, se retire ; Muʿawiya conclut une paix de trente ans.",
    importance:
      "Premier coup d'arrêt majeur infligé à l'expansion omeyyade en Méditerranée, et premier emploi décisif attesté du feu grégeois, mis au point par l'ingénieur Kallinikos. La survie de la capitale préserve l'existence même de l'empire.",
    resume:
      "Selon le récit de Théophane, la flotte arabe s'installe plusieurs années de suite dans la Marmara et attaque la ville à la belle saison. Les navires byzantins équipés de siphons incendiaires infligent des pertes croissantes, jusqu'au retrait final, achevé par une tempête au large de Syllaion et une défaite terrestre en Asie Mineure.",
    effectifs: {
      byzantins: "inconnus",
      adverses: "inconnus",
      certitude: "non fiable",
      note: "Aucune source ne permet de chiffrer les forces en présence.",
    },
    incertitudes:
      "La chronologie même de ce « siège » est aujourd'hui débattue : des travaux récents (M. Jankowiak) proposent de lire les sources comme un grand siège unique vers 667-669 plutôt qu'un blocus de quatre ans (674-678). L'échec arabe et le rôle du feu grégeois, eux, ne sont pas contestés.",
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
    id: "melitene-934",
    nom: "Prise de Mélitène",
    annee: 934,
    date: "19 mai 934",
    lieu: "Mélitène, aujourd'hui Malatya (Turquie)",
    coords: [38.35, 38.31],
    type: "siege",
    adversaires: "Émirat de Mélitène",
    commandantsByzantins: ["Jean Kourkouas", "Mélias (Mleh l'Arménien, mort avant la chute finale)"],
    commandantsAdverses: ["Notables de la ville (l'émirat affaibli n'a plus de chef militaire de premier plan)"],
    resultat:
      "La ville, assiégée et affamée après des années de campagnes, capitule définitivement et est annexée à l'empire.",
    importance:
      "Première grande cité de la frontière arabe annexée durablement depuis les conquêtes du VIIe siècle : Mélitène devient domaine impérial (kouratôreia). Le verrou du haut Euphrate saute — début véritable de l'époque des reconquêtes byzantines en Orient.",
    resume:
      "Après la destruction de la puissance de Mélitène à Lalakaon (863), la ville demeurait une place frontière turbulente, soumise puis rebelle à plusieurs reprises. Jean Kourkouas la réduit par une stratégie méthodique : dévastation des campagnes, prise des forteresses voisines, puis blocus final. La population doit choisir entre conversion et départ.",
    effectifs: {
      byzantins: "inconnus",
      adverses: "inconnus",
      certitude: "non fiable",
      note: "Les sources (Théophane continué, sources arabes) décrivent la chute politique de la ville, pas les effectifs engagés.",
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
    id: "andrassos-960",
    nom: "Bataille d'Andrassos",
    annee: 960,
    date: "8 novembre 960",
    lieu: "Défilé d'Andrassos, Taurus cilicien (localisation exacte débattue, Turquie actuelle)",
    coords: [37.45, 34.7],
    type: "defensive",
    adversaires: "Émirat hamdanide d'Alep",
    commandantsByzantins: ["Léon Phokas (frère de Nicéphore)"],
    commandantsAdverses: ["Sayf al-Dawla, émir d'Alep"],
    resultat:
      "L'armée de raid hamdanide, embusquée dans un défilé du Taurus au retour, est anéantie ; Sayf al-Dawla s'échappe avec une poignée de cavaliers.",
    importance:
      "Brise définitivement la capacité offensive de Sayf al-Dawla, le dernier grand adversaire musulman de la frontière — au moment précis où le gros de l'armée byzantine assiège la Crète. Les reconquêtes de Cilicie et d'Antioche (965-969) en découlent directement.",
    resume:
      "Profitant de l'expédition byzantine en Crète, Sayf al-Dawla lance un grand raid jusqu'au cœur de la Cappadoce. Léon Phokas, trop faible pour l'affronter en plaine, l'attend au passage obligé du Taurus : l'avant-garde laisse passer la colonne chargée de butin et de prisonniers, puis les pentes se ferment. C'est l'application exemplaire du traité byzantin De velitatione (« De l'escarmouche »).",
    effectifs: {
      byzantins: "inconnus (forces des thèmes, inférieures à l'armée de raid)",
      adverses: "effectifs discutés (les sources parlent d'une grande armée de raid, sans total fiable)",
      certitude: "discuté",
      note: "La localisation précise du défilé d'Andrassos reste elle-même débattue par les historiens.",
    },
    incertitudes: "Site du champ de bataille non identifié avec certitude.",
  },
  {
    id: "crete-961",
    nom: "Reconquête de la Crète (siège de Chandax)",
    annee: 961,
    date: "Juillet 960 – 7 mars 961",
    lieu: "Chandax, aujourd'hui Héraklion (Crète, Grèce)",
    coords: [35.34, 25.13],
    type: "siege",
    adversaires: "Émirat de Crète",
    commandantsByzantins: ["Nicéphore Phokas (futur empereur)"],
    commandantsAdverses: ["Abd al-Aziz ibn Shu'ayb (« Kouroupas »)"],
    resultat:
      "Après huit mois de siège et un hiver sur place, Chandax est prise d'assaut : l'émirat de Crète, vieux de 135 ans, disparaît.",
    importance:
      "Élimine le grand nid de course qui ravageait l'Égée depuis les années 820 : les côtes et les îles grecques revivent, la marine byzantine redevient maîtresse de la Méditerranée orientale. L'immense prestige de cette victoire porte Nicéphore Phokas vers le trône.",
    resume:
      "Une armada impériale débarque en Crète à l'été 960. Nicéphore bat les troupes de l'émirat, puis investit Chandax derrière une ligne de circonvallation et maintient le siège tout l'hiver — prouesse logistique rare. L'assaut final du 7 mars 961 emporte la ville ; le butin accumulé par un siècle de piraterie est rapporté à Constantinople.",
    effectifs: {
      byzantins: "flotte de plusieurs centaines de navires selon les sources ; totaux d'hommes discutés",
      adverses: "inconnus",
      certitude: "discuté",
      note: "Les listes de navires transmises (Théophane continué) mélangent types et unités ; l'ordre de grandeur — une expédition exceptionnelle — est seul assuré.",
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
    id: "dorostolon-971",
    nom: "Siège de Dorostolon (Dristra)",
    annee: 971,
    date: "Avril – 21 juillet 971 (environ 65 jours)",
    lieu: "Dorostolon, aujourd'hui Silistra, sur le Danube (Bulgarie)",
    coords: [44.12, 27.26],
    type: "siege",
    adversaires: "Rous' de Kiev de Sviatoslav (avec des Bulgares ralliés)",
    commandantsByzantins: ["Jean Ier Tzimiskès"],
    commandantsAdverses: ["Sviatoslav Igorevitch", "Sphangel, Ikmor"],
    resultat:
      "Après plusieurs batailles sous les murs et un blocus complet par terre et par fleuve, Sviatoslav capitule par traité et évacue les Balkans.",
    importance:
      "Conclut victorieusement la guerre contre la Rous' : la Bulgarie orientale est annexée et le Danube redevient frontière impériale. La flotte au feu grégeois remontée sur le fleuve verrouille le siège — modèle de guerre combinée terre-fleuve.",
    resume:
      "Après avoir forcé les passes du Balkan et pris Preslav par surprise, Tzimiskès enferme Sviatoslav dans Dorostolon. Les Rous' livrent des sorties acharnées — Ikmor est abattu en pleine bataille — mais la famine et l'arrivée de la flotte impériale rendent la position intenable. Le traité laisse la vie sauve aux survivants ; Sviatoslav périra sur le chemin du retour, tué par les Petchénègues.",
    effectifs: {
      byzantins: "effectifs discutés (Léon le Diacre décrit une grande armée impériale avec les tagmata)",
      adverses: "effectifs discutés (les chiffres des sources byzantines sont contradictoires et gonflés)",
      certitude: "discuté",
      note: "Léon le Diacre et Skylitzès divergent sur presque tous les totaux ; seule la durée du siège est bien établie.",
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
    id: "philomelion-1116",
    nom: "Bataille de Philomélion",
    annee: 1116,
    date: "Automne 1116",
    lieu: "Près de Philomélion, aujourd'hui Akşehir (Turquie)",
    coords: [38.36, 31.42],
    type: "defensive",
    adversaires: "Sultanat seldjoukide d'Iconium",
    commandantsByzantins: ["Alexis Ier Comnène"],
    commandantsAdverses: ["Malik Shah (sultan d'Iconium)"],
    resultat:
      "Les attaques répétées des Seldjoukides contre l'armée impériale en marche échouent ; le sultan demande la paix.",
    importance:
      "Dernière campagne victorieuse d'Alexis Ier : la frontière occidentale de l'Anatolie est stabilisée et des populations grecques exposées sont évacuées vers les territoires impériaux. Victoire défensive et méthodique, sans lendemain offensif — un choix assumé d'économie des forces.",
    resume:
      "Alexis fait avancer son armée en Anatolie centrale dans une formation défensive inédite, la parataxis : un carré creux abritant bagages et civils, que la cavalerie turque assaille en vain. Après plusieurs jours de harcèlement stérile et de contre-attaques réglées, Malik Shah traite. L'armée rentre en escortant les populations grecques de la région.",
    effectifs: {
      byzantins: "inconnus",
      adverses: "inconnus",
      certitude: "non fiable",
      note: "Le récit vient de l'Alexiade d'Anne Comnène, précise sur la formation, muette sur les nombres — et naturellement favorable à son père.",
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
    id: "demetritzes-1185",
    nom: "Bataille de Démétritzès",
    annee: 1185,
    date: "7 novembre 1185",
    lieu: "Démétritzès, près du bas Strymon, à l'ouest de Serrès (Grèce actuelle)",
    coords: [41.08, 23.47],
    type: "offensive",
    adversaires: "Royaume normand de Sicile",
    commandantsByzantins: ["Alexis Branas"],
    commandantsAdverses: ["Richard d'Acerra, Baudouin (commandants de Guillaume II de Sicile)"],
    resultat:
      "L'armée normande, surprise et enfoncée, est mise en déroute complète ; ses chefs sont capturés et Thessalonique est reprise aussitôt.",
    importance:
      "Anéantit la grande invasion normande de 1185, la plus dangereuse offensive occidentale contre l'empire avant 1204 : trois mois après le sac de Thessalonique, la menace sur Constantinople est levée. Dernière grande victoire byzantine avant l'effondrement de 1204.",
    resume:
      "Après avoir saccagé Thessalonique, l'armée normande s'avance vers Constantinople avec une confiance excessive. Alexis Branas la harcèle, puis l'attaque par surprise à Démétritzès alors qu'elle campe dispersée. La déroute est totale ; les fuyards sont massacrés ou noyés dans le Strymon, et les débris de l'expédition évacuent Thessalonique puis Dyrrachion.",
    effectifs: {
      byzantins: "inconnus",
      adverses: "les sources parlent de dizaines de milliers d'envahisseurs au départ de l'expédition : chiffres non fiables",
      certitude: "non fiable",
      note: "Nicétas Choniatès, témoin de la génération, décrit la campagne en détail mais ses totaux sont rhétoriques.",
    },
  },
  {
    id: "antioche-meandre-1211",
    nom: "Bataille d'Antioche du Méandre",
    annee: 1211,
    date: "17 juin 1211",
    lieu: "Antioche du Méandre, vallée du Méandre (Turquie actuelle)",
    coords: [37.87, 28.58],
    type: "defensive",
    adversaires: "Sultanat seldjoukide de Roum (soutenant l'ex-empereur déchu Alexis III)",
    commandantsByzantins: ["Théodore Ier Laskaris (empereur de Nicée)"],
    commandantsAdverses: ["Kay Khusraw Ier, sultan de Roum"],
    resultat:
      "Victoire nicéenne chèrement acquise : le sultan Kay Khusraw est tué sur le champ de bataille, son armée se retire et un traité suit.",
    importance:
      "Sauve l'empire de Nicée, l'État grec qui restaurera Byzance en 1261 : la mort du sultan met fin à la tentative de restauration d'Alexis III sous protectorat seldjoukide et stabilise la frontière du Méandre pour une génération.",
    resume:
      "Kay Khusraw envahit la vallée du Méandre au nom d'Alexis III, beau-père évincé de Théodore. Les 800 mercenaires latins de Nicée — chiffre transmis par les sources, à prendre avec prudence — brisent le premier choc au prix de pertes presque totales ; la bataille semble perdue quand, selon la tradition, Théodore abat le sultan en combat singulier. L'armée seldjoukide se disloque ; Alexis III capturé finira ses jours dans un monastère.",
    effectifs: {
      byzantins: "≈ 2 000 hommes selon les sources, dont 800 Latins : ordre de grandeur discuté",
      adverses: "effectifs discutés, supérieurs aux forces nicéennes",
      certitude: "discuté",
      note: "Le duel entre l'empereur et le sultan, rapporté par Akropolitès et les sources orientales avec des variantes, mêle probablement fait et légende.",
    },
    incertitudes:
      "Victoire tactiquement très coûteuse — la perte du corps latin affaiblit durablement l'armée nicéenne — mais stratégiquement décisive.",
  },
  {
    id: "poimanenon-1224",
    nom: "Bataille de Poimanénon",
    annee: 1224,
    date: "1224 (ou 1223 selon la datation retenue)",
    lieu: "Poimanénon, au sud de Cyzique, près du lac de Manyas (Turquie actuelle)",
    coords: [40.05, 27.92],
    type: "offensive",
    adversaires: "Empire latin de Constantinople",
    commandantsByzantins: ["Jean III Doukas Vatatzès (empereur de Nicée)"],
    commandantsAdverses: ["Commandants latins, dont les frères de l'empereur Robert de Courtenay"],
    resultat:
      "L'armée latine est écrasée ; Nicée reprend dans la foulée presque toutes les possessions latines d'Asie Mineure.",
    importance:
      "Renverse définitivement le rapport de forces entre Nicée et l'Empire latin : réduit à Constantinople et ses abords, celui-ci ne mènera plus d'offensive en Asie. La voie de la restauration de 1261 s'ouvre — et la victoire a lieu à l'endroit même où les Latins avaient battu les Grecs vingt ans plus tôt.",
    resume:
      "Profitant d'une contestation dynastique à Nicée, les Latins attaquent en Bithynie et soutiennent les frères rebelles de Vatatzès. L'empereur accepte la bataille près de Poimanénon, où les chevaliers latins sont enveloppés et détruits ; les places latines d'Asie Mineure tombent ensuite une à une. Le traité de 1225 entérine leur perte.",
    effectifs: {
      byzantins: "inconnus",
      adverses: "inconnus",
      certitude: "non fiable",
      note: "Georges Akropolitès mentionne la bataille brièvement ; ni chiffres ni déroulement détaillé ne sont transmis.",
    },
    incertitudes: "La date exacte (1223 ou 1224) et le déroulement tactique précis restent discutés.",
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
