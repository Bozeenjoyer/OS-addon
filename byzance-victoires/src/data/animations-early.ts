import { U, P, H, R, type BattleAnim } from "./anim-types";

/**
 * Reconstitutions schématiques animées — période 530-941.
 * Positions et mouvements volontairement simplifiés, à visée pédagogique :
 * ils illustrent la logique de la bataille telle que la décrivent les
 * sources, pas une topographie exacte.
 */
export const earlyAnims: Record<string, BattleAnim> = {
  "dara-530": {
    terrain: [
      { type: "murs", points: "6,10 6,50", label: "Dara" },
      { type: "riviere", points: "22,8 26,20 24,34 27,48 24,56", label: "tranchées" },
      { type: "label", x: 80, y: 6, text: "← vers Nisibe (Perse)" },
    ],
    units: [
      U("inf", "byz", "infanterie", "Infanterie"),
      U("cavG", "byz", "cavalerie", "Huns (aile g.)"),
      U("cavD", "byz", "cavalerie", "Huns (aile d.)"),
      U("chef", "byz", "chef", "Bélisaire"),
      U("perG", "ennemi", "cavalerie", "Aile gauche perse"),
      U("perC", "ennemi", "infanterie", "Centre perse"),
      U("perD", "ennemi", "cavalerie", "Immortels"),
    ],
    phases: [
      {
        titre: "Le dispositif retranché",
        description:
          "Bélisaire range son infanterie derrière des tranchées, cavalerie hunnique sur les ailes. L'armée perse, supérieure en nombre, se déploie face au dispositif.",
        positions: {
          inf: P(16, 30), cavG: P(19, 12), cavD: P(19, 48), chef: P(12, 30),
          perG: P(60, 12, 180), perC: P(64, 30, 180), perD: P(60, 48, 180),
        },
      },
      {
        titre: "Les charges perses s'enlisent",
        description:
          "Les ailes perses chargent mais butent sur les tranchées ; les cavaliers huns et hérules contre-attaquent de flanc à chaque assaut.",
        positions: {
          perG: P(34, 12, 180), perD: P(34, 48, 180),
          cavG: P(30, 6, -30), cavD: P(30, 54, 30),
        },
      },
      {
        titre: "L'enveloppement final",
        description:
          "La cavalerie byzantine coupe l'aile des Immortels en deux ; l'aile perse s'effondre, entraînant la retraite générale — première grande défaite perse en rase campagne depuis des décennies.",
        positions: {
          cavD: P(48, 44, -20), cavG: P(44, 16, 20),
          perD: R(72, 52, -10), perG: R(74, 10, 10), perC: R(82, 30, 0),
        },
      },
    ],
  },

  "satala-530": {
    terrain: [
      { type: "murs", points: "38,34 50,30 62,34 60,44 40,44 38,34", label: "Satala" },
      { type: "colline", x: 24, y: 12, rx: 16, ry: 7, label: "hauteurs" },
    ],
    units: [
      U("gar", "byz", "infanterie", "Garnison"),
      U("sittas", "byz", "cavalerie", "Sittas (caché)"),
      U("per", "ennemi", "infanterie", "Armée perse"),
      U("perc", "ennemi", "chef", "Mermeroès"),
    ],
    phases: [
      {
        titre: "Le siège de Satala",
        description:
          "L'armée perse investit Satala. Sittas dissimule un petit corps de cavalerie sur les hauteurs dominant la ville.",
        positions: {
          gar: P(50, 38), sittas: P(22, 11), per: P(50, 20, 90), perc: P(60, 18),
        },
      },
      {
        titre: "La charge dans la poussière",
        description:
          "La cavalerie de Sittas dévale les pentes dans un nuage de poussière qui grossit ses effectifs, tandis que la garnison sort des murs : les Perses se croient pris entre deux armées.",
        positions: {
          sittas: P(38, 18, 30), gar: P(48, 28, -90),
        },
      },
      {
        titre: "La retraite perse",
        description:
          "Un étendard de commandement est capturé ; l'armée perse décroche, puis évacue l'Arménie romaine. Avec Dara, la frontière est sauvée la même année.",
        positions: {
          per: R(82, 16, 0), perc: R(88, 20, 0),
          sittas: P(52, 16, 10), gar: P(50, 26, -90),
        },
      },
    ],
  },

  "ad-decimum-533": {
    terrain: [
      { type: "mer", points: "0,0 100,0 100,8 0,8", label: "Méditerranée" },
      { type: "label", x: 14, y: 14, text: "vers Carthage →" },
      { type: "colline", x: 50, y: 34, rx: 10, ry: 5 },
    ],
    units: [
      U("avg", "byz", "cavalerie", "Avant-garde"),
      U("huns", "byz", "cavalerie", "Huns"),
      U("gros", "byz", "infanterie", "Bélisaire"),
      U("amm", "ennemi", "cavalerie", "Ammatas"),
      U("gib", "ennemi", "cavalerie", "Gibamund"),
      U("gel", "ennemi", "cavalerie", "Gélimer"),
    ],
    phases: [
      {
        titre: "La tenaille vandale",
        description:
          "La colonne byzantine marche sur Carthage le long de la côte. Gélimer prévoit de l'écraser en trois points à la fois : Ammatas de front, Gibamund sur le flanc, lui-même par l'arrière.",
        positions: {
          avg: P(30, 16), huns: P(34, 30), gros: P(44, 18),
          amm: P(16, 22, 180), gib: P(20, 44, -45), gel: P(72, 40, 135),
        },
      },
      {
        titre: "L'attaque désynchronisée",
        description:
          "Arrivé trop tôt et presque seul, Ammatas est tué par l'avant-garde ; les 600 fédérés huns écrasent Gibamund dans la plaine salée. La tenaille est déjà brisée.",
        positions: {
          amm: R(10, 22, 200), gib: R(12, 50, -160),
          avg: P(22, 20, 200), huns: P(24, 42, -140),
        },
      },
      {
        titre: "L'occasion perdue de Gélimer",
        description:
          "Gélimer bat d'abord des détachements byzantins, mais s'arrête pour ensevelir son frère. Bélisaire rallie ses troupes et contre-attaque : la route de Carthage est ouverte — la ville tombe le lendemain.",
        positions: {
          gel: R(84, 48, 90), gros: P(60, 32, -10),
          avg: P(56, 22, 0), huns: P(58, 42, 0),
        },
      },
    ],
  },

  "tricamarum-533": {
    terrain: [
      { type: "riviere", points: "50,4 48,20 51,36 49,58", label: "ruisseau" },
      { type: "camp", x: 84, y: 30, label: "camp vandale" },
    ],
    units: [
      U("cav", "byz", "cavalerie", "Cavalerie (Jean l'Arménien)"),
      U("inf", "byz", "infanterie", "Infanterie (en marche)"),
      U("van", "ennemi", "infanterie", "Ligne vandale"),
      U("tza", "ennemi", "chef", "Tzazon"),
      U("gel", "ennemi", "chef", "Gélimer"),
    ],
    phases: [
      {
        titre: "Bélisaire attaque sans attendre",
        description:
          "Les deux armées se font face de part et d'autre d'un ruisseau. Bélisaire engage sa cavalerie immédiatement, sans attendre son infanterie encore en marche.",
        positions: {
          cav: P(30, 30), inf: H(4, 30), van: P(66, 30, 180),
          tza: P(72, 24), gel: P(78, 36),
        },
      },
      {
        titre: "Trois charges au centre",
        description:
          "La cavalerie byzantine franchit trois fois le ruisseau pour frapper le centre vandale, où combat Tzazon. À la troisième charge, Tzazon tombe ; l'infanterie byzantine arrive en ligne.",
        positions: {
          cav: P(58, 30, 0), tza: R(70, 22, 90), inf: P(30, 30),
        },
      },
      {
        titre: "L'effondrement du royaume",
        description:
          "La ligne vandale se replie sur le camp, puis Gélimer s'enfuit à la nuit : l'armée se dissout. Le royaume vandale d'Afrique disparaît en une campagne.",
        positions: {
          van: R(84, 34, 200), gel: R(94, 44, 30),
          cav: P(76, 28, 10), inf: P(60, 32, 0),
        },
      },
    ],
  },

  "taginae-552": {
    terrain: [
      { type: "colline", x: 14, y: 14, rx: 12, ry: 6 },
      { type: "label", x: 80, y: 56, text: "Apennins (Busta Gallorum)" },
    ],
    units: [
      U("arcG", "byz", "archers", "Archers (aile g.)"),
      U("arcD", "byz", "archers", "Archers (aile d.)"),
      U("inf", "byz", "infanterie", "Cavaliers démontés"),
      U("res", "byz", "cavalerie", "Réserve (Narsès)"),
      U("gothC", "ennemi", "cavalerie", "Cavalerie de Totila"),
      U("gothI", "ennemi", "infanterie", "Infanterie gothique"),
    ],
    phases: [
      {
        titre: "Le croissant de Narsès",
        description:
          "Narsès démonte sa cavalerie au centre et déploie des milliers d'archers en croissant sur les ailes. Totila, qui attend des renforts, gagne du temps — puis choisit la charge frontale.",
        positions: {
          arcG: P(24, 8, 40), arcD: P(24, 52, -40), inf: P(18, 30),
          res: P(8, 30), gothC: P(70, 30, 180), gothI: P(84, 30, 180),
        },
      },
      {
        titre: "La charge sous les flèches",
        description:
          "La cavalerie gothique, lancée sans soutien d'infanterie, s'enfonce dans le croissant : les volées convergentes des deux ailes la déciment avant même le contact.",
        positions: {
          gothC: P(38, 30, 180),
        },
      },
      {
        titre: "La contre-attaque décisive",
        description:
          "En fin de journée, Narsès engage sa réserve : la cavalerie gothique épuisée reflue sur sa propre infanterie et tout se débande. Totila, blessé dans la fuite, meurt — la guerre gothique est décidée.",
        positions: {
          res: P(30, 30, 0), gothC: R(66, 34, 200), gothI: R(88, 32, 190),
          inf: P(34, 28, 0),
        },
      },
    ],
  },

  "casilinum-554": {
    terrain: [
      { type: "riviere", points: "8,58 20,44 30,26 36,6", label: "Volturno" },
      { type: "label", x: 78, y: 58, text: "vers Capoue" },
    ],
    units: [
      U("centre", "byz", "infanterie", "Centre (Hérules)"),
      U("cavG", "byz", "cavalerie", "Cav. + archers (g.)"),
      U("cavD", "byz", "cavalerie", "Cav. + archers (d.)"),
      U("coin", "ennemi", "infanterie", "Coin franc (Butilin)"),
    ],
    phases: [
      {
        titre: "Le coin franc",
        description:
          "L'infanterie franco-alamane attaque en formation de coin. Narsès place son infanterie au centre et sa cavalerie d'archers sur les ailes, légèrement en retrait.",
        positions: {
          centre: P(34, 30), cavG: P(40, 8), cavD: P(40, 52),
          coin: P(70, 30, 180),
        },
      },
      {
        titre: "Le centre plie, les ailes se referment",
        description:
          "Le coin enfonce le centre byzantin — qui recule en ordre, comme prévu. Les ailes pivotent et criblent de flèches la masse franque, incapable de riposter à distance.",
        positions: {
          centre: P(24, 30), coin: P(48, 30, 180),
          cavG: P(56, 14, 140), cavD: P(56, 46, -140),
        },
      },
      {
        titre: "L'anéantissement",
        description:
          "Encerclé, le coin franc est détruit ; Butilin tombe avec son armée. La dernière grande invasion de l'Italie justinienne s'achève sur le Volturno.",
        positions: {
          coin: R(50, 30, 90), centre: P(34, 30, 0),
          cavG: P(52, 22, 120), cavD: P(52, 40, -120),
        },
      },
    ],
  },

  "solachon-586": {
    terrain: [
      { type: "riviere", points: "4,54 30,56 60,54 96,58", label: "accès à l'eau (coupé)" },
      { type: "colline", x: 88, y: 14, rx: 10, ry: 5 },
      { type: "label", x: 16, y: 6, text: "vers Mardin" },
    ],
    units: [
      U("bG", "byz", "cavalerie", "Aile gauche"),
      U("bC", "byz", "infanterie", "Centre (Philippikos)"),
      U("bD", "byz", "cavalerie", "Aile droite"),
      U("pers", "ennemi", "cavalerie", "Armée perse"),
      U("kard", "ennemi", "chef", "Le Kardarigan"),
    ],
    phases: [
      {
        titre: "L'interception dans la plaine",
        description:
          "Philippikos intercepte l'armée perse en marche vers Mardin, par une chaleur accablante, en la maintenant loin de l'eau. Les deux armées se déploient en trois corps.",
        positions: {
          bG: P(22, 12), bC: P(18, 30), bD: P(22, 48),
          pers: P(66, 30, 180), kard: P(76, 30),
        },
      },
      {
        titre: "L'aile droite enfonce la ligne",
        description:
          "L'aile droite byzantine met en pièces la gauche perse ; le centre tient le choc pendant que la ligne sassanide, assoiffée, perd sa cohésion.",
        positions: {
          bD: P(50, 40, -20), pers: P(58, 28, 190), bC: P(30, 30),
        },
      },
      {
        titre: "La débandade",
        description:
          "L'armée perse s'effondre ; les rescapés se réfugient sur une colline sans eau avant de se disperser. Le Kardarigan s'échappe de justesse — plus grande victoire rangée de la guerre de 572-591.",
        positions: {
          pers: R(86, 16, 160), kard: R(92, 10, 150),
          bD: P(62, 34, -10), bC: P(44, 30), bG: P(48, 16, -20),
        },
      },
    ],
  },

  "constantinople-626": {
    terrain: [
      { type: "murs", points: "30,6 28,26 30,46", label: "murs théodosiens" },
      { type: "mer", points: "0,48 100,48 100,62 0,62", label: "Corne d'Or / Bosphore" },
      { type: "label", x: 88, y: 44, text: "Chalcédoine" },
    ],
    units: [
      U("gar", "byz", "infanterie", "Garnison (Bonos)"),
      U("flot", "byz", "flotte", "Marine byzantine"),
      U("avar", "ennemi", "infanterie", "Avars et Slaves"),
      U("mach", "ennemi", "machine", "Machines de siège"),
      U("mono", "ennemi", "flotte", "Monoxyles slaves"),
      U("pers", "ennemi", "infanterie", "Perses (Shahrbaraz)"),
    ],
    phases: [
      {
        titre: "La ville prise en tenaille",
        description:
          "Le khagan avar assiège les murs avec ses machines pendant que les Perses campent sur la rive asiatique. Tout dépend de la jonction des deux armées — donc de la mer.",
        positions: {
          gar: P(22, 26, 0), flot: P(40, 54, 0),
          avar: P(48, 20, 180), mach: P(40, 30), mono: H(70, 54),
          pers: P(90, 36, 180),
        },
      },
      {
        titre: "Les assauts échouent, la mer est verrouillée",
        description:
          "Les assauts contre les murs théodosiens sont repoussés. La flotte byzantine patrouille les détroits : les Perses ne peuvent pas traverser.",
        positions: {
          avar: P(38, 20, 180), mono: P(66, 54, 180),
        },
      },
      {
        titre: "Le massacre de la Corne d'Or",
        description:
          "La flottille slave qui devait porter l'assaut décisif est détruite dans la Corne d'Or. Le khagan brûle ses machines et se retire ; la tradition attribue le salut de la ville à la Vierge.",
        positions: {
          mono: R(58, 56, 160), flot: P(52, 52, 0),
          avar: R(64, 12, 20), mach: H(40, 30), pers: R(96, 36, 0),
        },
      },
    ],
  },

  "ninive-627": {
    terrain: [
      { type: "riviere", points: "6,10 20,8 40,10 70,6 96,10", label: "Tigre" },
      { type: "colline", x: 80, y: 50, rx: 14, ry: 6 },
      { type: "label", x: 20, y: 56, text: "plaine de Ninive" },
    ],
    units: [
      U("byz", "byz", "cavalerie", "Armée d'Héraclius"),
      U("her", "byz", "chef", "Héraclius"),
      U("per", "ennemi", "infanterie", "Armée perse"),
      U("rha", "ennemi", "chef", "Rhahzadh"),
    ],
    phases: [
      {
        titre: "Bataille acceptée dans le brouillard",
        description:
          "Après des années de campagnes par le Caucase, Héraclius offre la bataille dans la plaine de Ninive, un matin de brouillard qui masque les mouvements — avant l'arrivée des renforts perses.",
        positions: {
          byz: P(26, 30), her: P(18, 30), per: P(68, 30, 180), rha: P(78, 30),
        },
      },
      {
        titre: "La mêlée et le duel",
        description:
          "Huit heures de combat indécis. Selon la tradition — peut-être embellie — Héraclius abat Rhahzadh en combat singulier au cœur de la mêlée.",
        positions: {
          byz: P(44, 30), her: P(50, 26), per: P(56, 30, 180), rha: R(56, 36, 90),
        },
      },
      {
        titre: "La Perse à genoux",
        description:
          "Privée de son chef, l'armée perse se disloque à la nuit. Quelques semaines plus tard, Khosrô II est renversé : la Perse rend toutes ses conquêtes et la Vraie Croix.",
        positions: {
          per: R(84, 34, 170), byz: P(60, 30), her: P(54, 30),
        },
      },
    ],
  },

  "constantinople-674": {
    terrain: [
      { type: "murs", points: "24,4 22,24 24,44", label: "Constantinople" },
      { type: "mer", points: "0,44 100,44 100,62 0,62", label: "mer de Marmara" },
    ],
    units: [
      U("byzf", "byz", "flotte", "Flotte impériale (siphons)"),
      U("feu", "byz", "feu", "Feu grégeois"),
      U("arf1", "ennemi", "flotte", "Escadre omeyyade"),
      U("arf2", "ennemi", "flotte", "Escadre omeyyade"),
    ],
    phases: [
      {
        titre: "Le blocus saisonnier",
        description:
          "Selon le récit traditionnel, la flotte de Muʿawiya s'installe dans la Marmara et attaque la ville à chaque belle saison. (La chronologie exacte est aujourd'hui débattue.)",
        positions: {
          byzf: P(30, 50), feu: H(30, 50),
          arf1: P(60, 50, 180), arf2: P(76, 56, 180),
        },
      },
      {
        titre: "L'arme de Kallinikos",
        description:
          "Les navires byzantins équipés des nouveaux siphons projettent le feu grégeois — un incendiaire qui brûle sur l'eau. Les escadres arabes subissent des pertes croissantes.",
        positions: {
          byzf: P(44, 50), feu: P(54, 50), arf1: R(64, 50, 160),
        },
      },
      {
        titre: "Retraite et paix de trente ans",
        description:
          "La flotte omeyyade se retire, achevée par une tempête au large de Syllaion ; l'armée de terre est battue en Asie Mineure. Muʿawiya conclut une paix de trente ans : premier grand coup d'arrêt de l'expansion arabe.",
        positions: {
          arf1: H(90, 56), arf2: R(90, 56, 150), feu: H(54, 50),
          byzf: P(38, 50),
        },
      },
    ],
  },

  "constantinople-717": {
    terrain: [
      { type: "murs", points: "26,4 24,24 26,44", label: "murs théodosiens" },
      { type: "mer", points: "0,44 100,44 100,62 0,62", label: "Marmara / Bosphore" },
      { type: "label", x: 84, y: 6, text: "Thrace" },
    ],
    units: [
      U("gar", "byz", "infanterie", "Garnison (Léon III)"),
      U("byzf", "byz", "flotte", "Flotte (feu grégeois)"),
      U("feu", "byz", "feu", "Feu grégeois"),
      U("bulg", "allie", "cavalerie", "Bulgares de Tervel"),
      U("arm", "ennemi", "infanterie", "Armée de Maslama"),
      U("arf", "ennemi", "flotte", "Flotte omeyyade"),
    ],
    phases: [
      {
        titre: "L'investissement total",
        description:
          "Août 717 : Maslama investit la ville par terre avec des lignes retranchées, pendant qu'une flotte énorme tente de fermer les détroits.",
        positions: {
          gar: P(18, 24, 0), byzf: P(34, 50), feu: H(34, 50),
          bulg: H(80, 10), arm: P(44, 22, 180), arf: P(64, 52, 180),
        },
      },
      {
        titre: "Le feu grégeois frappe",
        description:
          "Dès l'automne, les chélandions à siphons incendient une partie de la flotte arabe ; le ravitaillement maritime des assiégeants devient précaire.",
        positions: {
          feu: P(52, 52), arf: R(72, 54, 160), byzf: P(46, 50),
        },
      },
      {
        titre: "L'hiver, la famine, les Bulgares",
        description:
          "Un hiver exceptionnellement rigoureux décime le camp arabe ; les cavaliers bulgares de Tervel attaquent les fourrageurs et infligent de lourdes pertes.",
        positions: {
          bulg: P(64, 12, 200), arm: P(46, 26, 180),
        },
      },
      {
        titre: "La levée du siège",
        description:
          "15 août 718 : un an jour pour jour après son début, le siège est levé. L'armée et la flotte omeyyades, décimées, refluent — la poussée arabe vers l'Europe du Sud-Est est brisée.",
        positions: {
          arm: R(84, 20, 0), arf: H(92, 56), feu: H(52, 52),
          gar: P(20, 24), bulg: P(72, 10, 180),
        },
      },
    ],
  },

  "akroinon-740": {
    terrain: [
      { type: "colline", x: 16, y: 12, rx: 12, ry: 6 },
      { type: "label", x: 78, y: 8, text: "← autres colonnes de raid" },
      { type: "label", x: 50, y: 58, text: "Phrygie" },
    ],
    units: [
      U("byz", "byz", "infanterie", "Léon III et Constantin"),
      U("cav", "byz", "cavalerie", "Cavalerie thématique"),
      U("arab", "ennemi", "cavalerie", "Colonne d'al-Battal"),
    ],
    phases: [
      {
        titre: "Le grand raid de 740",
        description:
          "Les colonnes omeyyades se dispersent pour piller l'Anatolie. Léon III et son fils suivent celle d'al-Battal, forte d'environ 20 000 hommes selon des sources tardives.",
        positions: {
          byz: P(24, 28), cav: P(28, 44), arab: P(66, 30, 180),
        },
      },
      {
        titre: "L'interception à Akroinon",
        description:
          "Les Byzantins acceptent la bataille rangée — fait rare depuis un siècle face aux armées du califat. Le déroulement précis est mal connu, mais le choc tourne à leur avantage.",
        positions: {
          byz: P(44, 26, 0), cav: P(48, 42, -20), arab: P(56, 30, 180),
        },
      },
      {
        titre: "La colonne détruite",
        description:
          "Al-Battal et al-Malik tombent avec le gros de la colonne. Combinée aux crises internes du califat, la défaite met fin aux grandes invasions annuelles de l'Anatolie.",
        positions: {
          arab: R(80, 34, 160), byz: P(54, 28), cav: P(62, 40, -10),
        },
      },
    ],
  },

  "lalakaon-863": {
    terrain: [
      { type: "riviere", points: "40,4 44,20 42,38 46,58", label: "Lalakaon" },
      { type: "colline", x: 60, y: 30, rx: 8, ry: 4, label: "Poson" },
      { type: "label", x: 14, y: 6, text: "mer Noire au nord" },
    ],
    units: [
      U("nord", "byz", "infanterie", "Corps du nord"),
      U("sud", "byz", "infanterie", "Corps du sud"),
      U("ouest", "byz", "cavalerie", "Petronas (ouest)"),
      U("omar", "ennemi", "cavalerie", "Armée d'Omar"),
    ],
    phases: [
      {
        titre: "La convergence",
        description:
          "Après son raid jusqu'à la mer Noire, Omar de Mélitène reprend le chemin du sud. Petronas fait converger trois groupes d'armées — nord, ouest, sud — vers son itinéraire.",
        positions: {
          nord: P(56, 8, 90), sud: P(58, 54, -90), ouest: P(18, 30),
          omar: P(58, 30, 200),
        },
      },
      {
        titre: "L'encerclement à Poson",
        description:
          "Près de la colline de Poson, toutes les routes sont bloquées. Omar tente de forcer le passage vers l'ouest, contre le corps de Petronas.",
        positions: {
          nord: P(58, 16, 90), sud: P(60, 46, -90), ouest: P(34, 30),
          omar: P(50, 30, 180),
        },
      },
      {
        titre: "L'anéantissement",
        description:
          "La percée échoue ; encerclée, l'armée de Mélitène est détruite et Omar tombe. L'initiative passe définitivement à Byzance sur la frontière orientale.",
        positions: {
          omar: R(50, 30, 90), nord: P(54, 22, 90), sud: P(56, 40, -90),
          ouest: P(42, 30),
        },
      },
    ],
  },

  "bathys-ryax-872": {
    terrain: [
      { type: "colline", x: 30, y: 12, rx: 16, ry: 6 },
      { type: "colline", x: 66, y: 12, rx: 14, ry: 6 },
      { type: "camp", x: 48, y: 34, label: "camp paulicien" },
      { type: "label", x: 48, y: 58, text: "défilé de Bathys Ryax" },
    ],
    units: [
      U("emb1", "byz", "infanterie", "Embuscade (g.)"),
      U("emb2", "byz", "infanterie", "Embuscade (d.)"),
      U("gros", "byz", "cavalerie", "Christophe (à distance)"),
      U("paul", "ennemi", "cavalerie", "Pauliciens"),
      U("chry", "ennemi", "chef", "Chrysocheir"),
    ],
    phases: [
      {
        titre: "La filature",
        description:
          "L'armée paulicienne, revenant de raid, campe dans le défilé. Deux détachements byzantins s'embusquent de nuit sur les crêtes ; le gros de l'armée suit à distance.",
        positions: {
          emb1: P(28, 14), emb2: P(64, 14), gros: P(10, 44),
          paul: P(48, 40), chry: P(56, 38),
        },
      },
      {
        titre: "L'attaque à l'aube",
        description:
          "À l'aube, les deux détachements dévalent sur le camp endormi en sonnant la charge : les Pauliciens croient l'armée impériale entière sur eux.",
        positions: {
          emb1: P(40, 26, 45), emb2: P(56, 26, 135),
        },
      },
      {
        titre: "La panique et la fin de Téphrikè",
        description:
          "La panique emporte tout ; Chrysocheir est tué dans la poursuite. L'État paulicien de Téphrikè s'effondre peu après — l'Anatolie orientale est consolidée.",
        positions: {
          paul: R(80, 46, 20), chry: R(88, 50, 30),
          emb1: P(48, 34, 20), emb2: P(60, 32, 150), gros: P(30, 44, 0),
        },
      },
    ],
  },

  "cap-stelai-880": {
    terrain: [
      { type: "mer", points: "0,0 100,0 100,62 0,62", label: "mer Ionienne" },
      { type: "murs", points: "0,50 8,44 14,52 6,58 0,50", label: "Calabre" },
    ],
    units: [
      U("byzf", "byz", "flotte", "Flotte de Nasar"),
      U("agf", "ennemi", "flotte", "Flotte aghlabide"),
      U("feu", "byz", "feu", "Attaque de nuit"),
    ],
    phases: [
      {
        titre: "L'approche nocturne",
        description:
          "Envoyé rétablir la situation en Occident, le drongaire Nasar localise la flotte aghlabide au mouillage près du cap Stelai et l'approche de nuit.",
        positions: {
          byzf: P(28, 30), agf: P(66, 34, 180), feu: H(50, 32),
        },
      },
      {
        titre: "La surprise",
        description:
          "L'attaque surprend les équipages : une grande partie des navires est incendiée ou capturée avant d'avoir pu manœuvrer.",
        positions: {
          byzf: P(50, 30), feu: P(60, 34), agf: R(70, 36, 150),
        },
      },
      {
        titre: "La mer redevient byzantine",
        description:
          "Le butin est énorme — les chroniqueurs disent que le prix des captifs s'effondra sur les marchés. La maîtrise de la Tyrrhénienne couvre la reconquête de l'Italie du Sud.",
        positions: {
          agf: H(84, 40), feu: H(60, 34), byzf: P(58, 32),
        },
      },
    ],
  },

  "melitene-934": {
    terrain: [
      { type: "murs", points: "40,20 60,20 62,40 38,40 40,20", label: "Mélitène" },
      { type: "riviere", points: "80,4 84,24 82,44 86,58", label: "Euphrate" },
      { type: "label", x: 18, y: 54, text: "campagnes dévastées" },
    ],
    units: [
      U("kour", "byz", "infanterie", "Jean Kourkouas"),
      U("arm", "allie", "cavalerie", "Arméniens (Mélias)"),
      U("gar", "ennemi", "infanterie", "Défenseurs"),
    ],
    phases: [
      {
        titre: "L'étau se referme",
        description:
          "Depuis des années, Kourkouas réduit les forteresses voisines et dévaste les campagnes : Mélitène, plusieurs fois soumise puis rebelle, se retrouve isolée.",
        positions: {
          kour: P(16, 30, 0), arm: P(30, 48, -45), gar: P(50, 30),
        },
      },
      {
        titre: "Le blocus final",
        description:
          "Le blocus affame la ville, sans espoir de secours : les émirats voisins, affaiblis, ne bougent pas.",
        positions: {
          kour: P(28, 28, 0), arm: P(40, 48, -60),
        },
      },
      {
        titre: "19 mai 934 : l'annexion",
        description:
          "Mélitène capitule et devient domaine impérial — première grande cité de la frontière arabe annexée durablement. L'époque des reconquêtes commence.",
        positions: {
          gar: H(50, 30), kour: P(50, 30, 0), arm: P(56, 44, -60),
        },
      },
    ],
  },

  "bosphore-941": {
    terrain: [
      { type: "mer", points: "0,10 100,10 100,62 0,62", label: "entrée du Bosphore" },
      { type: "murs", points: "0,10 100,10", label: "côte de Bithynie au sud" },
    ],
    units: [
      U("chel", "byz", "flotte", "15 chélandions (Théophane)"),
      U("feu", "byz", "feu", "Feu grégeois"),
      U("rus", "ennemi", "flotte", "Monoxyles rous'"),
      U("rus2", "ennemi", "flotte", "Monoxyles rous'"),
    ],
    phases: [
      {
        titre: "Une défense improvisée",
        description:
          "11 juin 941 : la grande flottille d'Igor approche pendant que la flotte principale est absente. Théophane arme en hâte quinze vieux chélandions équipés de siphons.",
        positions: {
          chel: P(24, 34), feu: H(24, 34),
          rus: P(66, 26, 180), rus2: P(74, 44, 180),
        },
      },
      {
        titre: "Mer calme : l'arme parfaite",
        description:
          "Par mer d'huile — condition idéale pour l'incendiaire —, les chélandions projettent le feu grégeois « comme la foudre » : les monoxyles flambent, les équipages se jettent à l'eau.",
        positions: {
          chel: P(42, 34), feu: P(54, 32), rus: R(62, 24, 150),
        },
      },
      {
        titre: "La destruction du raid",
        description:
          "Les survivants qui pillent la Bithynie sont écrasés à terre, puis le reste de la flottille est détruit au retour. Le traité byzantino-rous' de 944 suivra.",
        positions: {
          rus: H(84, 20), rus2: R(88, 48, 160), feu: H(54, 32),
          chel: P(52, 36),
        },
      },
    ],
  },
};
