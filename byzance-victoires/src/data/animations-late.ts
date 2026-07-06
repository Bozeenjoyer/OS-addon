import { U, P, H, R, type BattleAnim } from "./anim-types";

/** Reconstitutions schématiques animées — période 960-1259. */
export const lateAnims: Record<string, BattleAnim> = {
  "andrassos-960": {
    terrain: [
      { type: "colline", x: 30, y: 12, rx: 20, ry: 6 },
      { type: "colline", x: 70, y: 12, rx: 18, ry: 6 },
      { type: "colline", x: 30, y: 50, rx: 20, ry: 6 },
      { type: "colline", x: 70, y: 50, rx: 18, ry: 6 },
      { type: "label", x: 50, y: 58, text: "défilé du Taurus (site débattu)" },
      { type: "label", x: 88, y: 30, text: "vers la Syrie →" },
    ],
    units: [
      U("emb1", "byz", "infanterie", "Léon Phokas (crêtes)"),
      U("emb2", "byz", "archers", "Archers (crêtes)"),
      U("ham", "ennemi", "cavalerie", "Colonne de Sayf al-Dawla"),
      U("but", "ennemi", "infanterie", "Butin et captifs"),
    ],
    phases: [
      {
        titre: "Laisser passer, puis fermer",
        description:
          "Trop faible pour une bataille rangée, Léon Phokas occupe en silence les pentes du défilé que doit emprunter l'armée hamdanide chargée de butin — la tactique du traité « De l'escarmouche ».",
        positions: {
          emb1: P(30, 16), emb2: P(70, 16), ham: P(20, 32, 0), but: P(8, 34, 0),
        },
      },
      {
        titre: "Le piège se referme",
        description:
          "Quand la colonne s'étire au plus profond du passage, les Byzantins dévalent des deux côtés : ni la cavalerie ni le commandement ne peuvent se déployer.",
        positions: {
          ham: P(50, 32, 0), but: P(34, 34, 0),
          emb1: P(36, 24, 60), emb2: P(66, 24, 120),
        },
      },
      {
        titre: "La fin de la menace hamdanide",
        description:
          "L'armée de raid est anéantie, les captifs libérés ; Sayf al-Dawla s'échappe avec une poignée de cavaliers. La voie des reconquêtes de Cilicie et d'Antioche est ouverte.",
        positions: {
          ham: R(64, 34, 30), but: P(24, 40, 180),
          emb1: P(44, 30, 40), emb2: P(60, 30, 140),
        },
      },
    ],
  },

  "crete-961": {
    terrain: [
      { type: "mer", points: "0,0 100,0 100,20 0,20", label: "mer de Crète" },
      { type: "murs", points: "38,30 62,30 60,46 40,46 38,30", label: "Chandax" },
      { type: "label", x: 14, y: 56, text: "Crète" },
    ],
    units: [
      U("flot", "byz", "flotte", "Armada impériale"),
      U("armee", "byz", "infanterie", "Nicéphore Phokas"),
      U("circ", "byz", "machine", "Circonvallation"),
      U("gar", "ennemi", "infanterie", "Défenseurs de l'émirat"),
    ],
    phases: [
      {
        titre: "Le débarquement (juillet 960)",
        description:
          "Une armada exceptionnelle débarque l'armée avec des rampes permettant aux cavaliers de charger directement depuis les navires. Les troupes de l'émirat sont battues et se réfugient dans Chandax.",
        positions: {
          flot: P(30, 12), armee: P(28, 26, 0), circ: H(50, 24), gar: P(50, 38),
        },
      },
      {
        titre: "Un hiver de siège",
        description:
          "Nicéphore enferme la ville derrière une ligne de circonvallation et maintient le siège tout l'hiver — prouesse logistique — en repoussant sorties et secours venus de l'intérieur de l'île.",
        positions: {
          armee: P(38, 26, 0), circ: P(50, 24), flot: P(50, 10),
        },
      },
      {
        titre: "L'assaut final (7 mars 961)",
        description:
          "Les machines ouvrent la brèche et la ville tombe. Après 135 ans, l'émirat corsaire disparaît : l'Égée respire, et le prestige de cette victoire portera Nicéphore vers le trône.",
        positions: {
          armee: P(50, 34, 0), gar: R(56, 42, 90), circ: P(46, 28),
        },
      },
    ],
  },

  "arcadiopolis-970": {
    terrain: [
      { type: "murs", points: "6,22 14,18 18,28 10,32 6,22", label: "Arcadiopolis" },
      { type: "colline", x: 52, y: 10, rx: 14, ry: 5, label: "bois (embuscade)" },
      { type: "colline", x: 56, y: 52, rx: 14, ry: 5, label: "bois (embuscade)" },
    ],
    units: [
      U("app", "byz", "cavalerie", "Corps d'appât"),
      U("emb1", "byz", "cavalerie", "Embuscade nord"),
      U("emb2", "byz", "cavalerie", "Embuscade sud"),
      U("pech", "ennemi", "cavalerie", "Petchénègues"),
      U("coal", "ennemi", "infanterie", "Coalition (Rous', Bulgares)"),
    ],
    phases: [
      {
        titre: "La feinte de Bardas Sklèros",
        description:
          "Face à une coalition supérieure en nombre, Sklèros envoie un petit corps harceler le contingent petchénègue, puis feindre la fuite vers Arcadiopolis.",
        positions: {
          app: P(38, 30, 180), emb1: P(50, 12), emb2: P(54, 50),
          pech: P(62, 30, 180), coal: P(86, 30, 180),
        },
      },
      {
        titre: "La poursuite dans le piège",
        description:
          "Les Petchénègues se lancent à la poursuite, se coupant du gros de la coalition — et passent entre les deux détachements dissimulés.",
        positions: {
          app: P(24, 28, 180), pech: P(42, 30, 180),
        },
      },
      {
        titre: "La nasse",
        description:
          "L'appât fait volte-face, les embuscades chargent les flancs : le contingent est détruit. Démoralisée, la coalition reflue — Tzimiskès aura le temps de préparer la campagne de 971.",
        positions: {
          app: P(30, 30, 0), emb1: P(44, 20, 60), emb2: P(48, 42, -60),
          pech: R(44, 30, 90), coal: R(90, 30, 0),
        },
      },
    ],
  },

  "dorostolon-971": {
    terrain: [
      { type: "riviere", points: "0,12 30,10 60,12 100,10", label: "Danube" },
      { type: "murs", points: "38,22 62,22 60,38 40,38 38,22", label: "Dorostolon" },
    ],
    units: [
      U("armee", "byz", "infanterie", "Jean Tzimiskès"),
      U("tagma", "byz", "cavalerie", "Tagmata"),
      U("flot", "byz", "flotte", "Flotte (feu grégeois)"),
      U("rus", "ennemi", "infanterie", "Rous' de Sviatoslav"),
    ],
    phases: [
      {
        titre: "L'investissement",
        description:
          "Après la prise de Preslav, Tzimiskès enferme Sviatoslav dans Dorostolon. La flotte impériale remonte le Danube : le blocus est complet, par terre et par fleuve.",
        positions: {
          armee: P(30, 46, 0), tagma: P(64, 46, 0), flot: P(50, 8),
          rus: P(50, 30),
        },
      },
      {
        titre: "Les sorties désespérées",
        description:
          "Pendant 65 jours, les Rous' multiplient les sorties en rangs serrés, murs de boucliers contre cataphractes ; leur champion Ikmor est abattu en pleine bataille.",
        positions: {
          rus: P(50, 44, -90), armee: P(34, 48, 0), tagma: P(60, 48, 180),
        },
      },
      {
        titre: "Le traité du Danube",
        description:
          "Affamé, Sviatoslav capitule : les survivants évacuent les Balkans par le fleuve. La Bulgarie orientale est annexée — le Danube redevient frontière impériale.",
        positions: {
          rus: R(80, 14, 0), armee: P(50, 30, 0), tagma: P(64, 40, 0),
          flot: P(64, 8),
        },
      },
    ],
  },

  "spercheios-997": {
    terrain: [
      { type: "riviere", points: "0,30 24,32 50,30 76,32 100,30", label: "Sperchée en crue" },
      { type: "camp", x: 66, y: 14, label: "camp bulgare" },
      { type: "label", x: 16, y: 56, text: "vers Lamía" },
    ],
    units: [
      U("byz", "byz", "cavalerie", "Nicéphore Ouranos"),
      U("bulg", "ennemi", "infanterie", "Armée de Samuel"),
      U("sam", "ennemi", "chef", "Samuel et Radomir"),
    ],
    phases: [
      {
        titre: "Le fleuve infranchissable",
        description:
          "Samuel, revenant d'un raid jusqu'au Péloponnèse, campe au nord du Sperchée en crue, persuadé que rien ne peut traverser. L'armée byzantine arrive sur la rive opposée.",
        positions: {
          byz: P(30, 46, 0), bulg: P(64, 18), sam: P(74, 12),
        },
      },
      {
        titre: "Le gué dans la nuit",
        description:
          "Les éclaireurs d'Ouranos découvrent un passage guéable en amont : l'armée traverse de nuit, en silence.",
        positions: {
          byz: P(20, 32, 45),
        },
      },
      {
        titre: "Le camp submergé",
        description:
          "L'attaque à l'aube surprend le camp endormi : l'armée bulgare est anéantie sans bataille rangée. Samuel et son fils, blessés, s'échappent en se cachant parmi les morts.",
        positions: {
          byz: P(52, 18, 10), bulg: R(70, 16, 100), sam: R(88, 10, 20),
        },
      },
    ],
  },

  "kleidion-1014": {
    terrain: [
      { type: "colline", x: 30, y: 8, rx: 26, ry: 6, label: "Belasitsa" },
      { type: "colline", x: 34, y: 52, rx: 26, ry: 6 },
      { type: "murs", points: "44,18 46,30 44,44", label: "palissade" },
      { type: "label", x: 84, y: 56, text: "vers la Bulgarie" },
    ],
    units: [
      U("bas", "byz", "infanterie", "Basile II (front)"),
      U("xiph", "byz", "cavalerie", "Xiphias (contournement)"),
      U("bulg", "ennemi", "infanterie", "Armée de Samuel"),
    ],
    phases: [
      {
        titre: "Le défilé barré",
        description:
          "Samuel barre le défilé de Kleidion d'une palissade que les assauts frontaux de Basile II ne parviennent pas à forcer.",
        positions: {
          bas: P(24, 30, 0), xiph: P(14, 44, 0), bulg: P(58, 30, 180),
        },
      },
      {
        titre: "Le sentier de Xiphias",
        description:
          "Nicéphore Xiphias contourne le massif du Belasitsa par un sentier de montagne et débouche sur les arrières bulgares.",
        positions: {
          xiph: P(60, 10, 90),
        },
      },
      {
        titre: "Pris entre deux feux",
        description:
          "Attaquée de front et à revers, l'armée bulgare s'effondre ; des milliers d'hommes sont capturés. La tradition de l'aveuglement des prisonniers, rapportée bien plus tard, est probablement amplifiée — la Bulgarie, elle, tombera en 1018.",
        positions: {
          xiph: P(66, 24, 135), bas: P(44, 30, 0), bulg: R(60, 34, 90),
        },
      },
    ],
  },

  "levounion-1091": {
    terrain: [
      { type: "riviere", points: "10,58 20,44 24,28 20,10", label: "Maritsa" },
      { type: "colline", x: 64, y: 10, rx: 16, ry: 5, label: "mont Lébounion" },
      { type: "camp", x: 66, y: 32, label: "camp petchénègue (familles)" },
    ],
    units: [
      U("byz", "byz", "infanterie", "Alexis Ier"),
      U("koum", "allie", "cavalerie", "Coumans alliés"),
      U("pech", "ennemi", "infanterie", "Petchénègues"),
    ],
    phases: [
      {
        titre: "L'alliance de la dernière chance",
        description:
          "Pris en tenaille entre les Petchénègues en Thrace et la flotte turque de Tzachas, Alexis conclut in extremis une alliance avec 40 000 Coumans — d'anciens ennemis des Petchénègues.",
        positions: {
          byz: P(34, 44, 0), koum: P(38, 12, 0), pech: P(66, 30),
        },
      },
      {
        titre: "L'assaut du 29 avril",
        description:
          "À l'aube, Byzantins et Coumans attaquent ensemble le camp, où l'ensemble du peuple petchénègue — guerriers et familles — s'est concentré.",
        positions: {
          byz: P(52, 38, 20), koum: P(54, 18, -20),
        },
      },
      {
        titre: "« Un peuple entier périt en un jour »",
        description:
          "La formule d'Anne Comnène est une image, mais la réalité est brutale : les Petchénègues disparaissent comme puissance. L'empire assiégé de 1091 est sauvé — le redressement comnène commence.",
        positions: {
          pech: R(70, 32, 90), byz: P(58, 34, 10), koum: P(62, 22, -10),
        },
      },
    ],
  },

  "philomelion-1116": {
    terrain: [
      { type: "label", x: 50, y: 6, text: "Anatolie centrale" },
      { type: "label", x: 14, y: 56, text: "← retour vers l'empire" },
    ],
    units: [
      U("carre", "byz", "infanterie", "Parataxis (carré creux)"),
      U("civ", "byz", "chef", "Civils et bagages"),
      U("turc1", "ennemi", "cavalerie", "Cavalerie seldjoukide"),
      U("turc2", "ennemi", "cavalerie", "Cavalerie seldjoukide"),
    ],
    phases: [
      {
        titre: "Le carré en marche",
        description:
          "Alexis fait avancer son armée en parataxis : un grand carré creux abritant bagages et populations grecques évacuées, que la cavalerie turque ne peut entamer.",
        positions: {
          carre: P(44, 30), civ: P(44, 36), turc1: P(70, 14, 200), turc2: P(72, 46, 160),
        },
      },
      {
        titre: "Le harcèlement stérile",
        description:
          "Les attaques tournoyantes se succèdent ; des contre-charges réglées, limitées à quelques centaines de mètres, les repoussent sans jamais rompre la formation.",
        positions: {
          turc1: P(56, 18, 200), turc2: P(58, 42, 160), carre: P(40, 30),
        },
      },
      {
        titre: "La paix et l'évacuation",
        description:
          "Malik Shah, impuissant, demande la paix. L'armée rentre en escortant les populations — dernière victoire, prudente et méthodique, du vieil Alexis.",
        positions: {
          turc1: R(80, 12, 0), turc2: R(84, 48, 0), carre: P(28, 30), civ: P(28, 36),
        },
      },
    ],
  },

  "beroia-1122": {
    terrain: [
      { type: "camp", x: 62, y: 30, label: "laager (chariots)" },
      { type: "label", x: 20, y: 8, text: "Thrace du nord" },
    ],
    units: [
      U("emp", "byz", "cavalerie", "Jean II"),
      U("inf", "byz", "infanterie", "Infanterie"),
      U("var", "byz", "infanterie", "Garde varangienne"),
      U("pech", "ennemi", "cavalerie", "Petchénègues"),
    ],
    phases: [
      {
        titre: "La forteresse de chariots",
        description:
          "La dernière grande horde petchénègue, passée au sud du Danube, se retranche derrière son laager — un cercle de chariots quasi imprenable — après l'échec des négociations.",
        positions: {
          emp: P(24, 16, 0), inf: P(20, 34, 0), var: P(12, 46, 0),
          pech: P(62, 30),
        },
      },
      {
        titre: "Les assauts repoussés",
        description:
          "Cavalerie et infanterie échouent contre la muraille de chariots, sous les flèches ; l'empereur lui-même est touché à la jambe.",
        positions: {
          emp: P(44, 18, -20), inf: P(42, 36, 20),
        },
      },
      {
        titre: "Les haches varangiennes",
        description:
          "Jean II engage sa garde : les haches danoises ouvrent le laager. Le camp est pris, les survivants enrôlés ou installés comme colons — les Petchénègues sortent de l'histoire.",
        positions: {
          var: P(54, 34, 10), emp: P(52, 20, -10), pech: R(70, 28, 90),
        },
      },
    ],
  },

  "sirmium-1167": {
    terrain: [
      { type: "riviere", points: "0,10 30,8 70,12 100,8", label: "Danube" },
      { type: "label", x: 16, y: 56, text: "plaine de Zemun" },
    ],
    units: [
      U("bG", "byz", "cavalerie", "Aile gauche"),
      U("bC", "byz", "infanterie", "Centre (Kontostéphanos)"),
      U("bD", "byz", "cavalerie", "Aile droite"),
      U("res", "byz", "cavalerie", "Réserve"),
      U("hon", "ennemi", "cavalerie", "Cavalerie lourde de Dénes"),
    ],
    phases: [
      {
        titre: "Le choc frontal",
        description:
          "8 juillet 1167 : l'armée hongroise de Dénes charge en masse profonde. L'aile gauche byzantine plie sous le premier choc.",
        positions: {
          bG: P(26, 14, 40), bC: P(22, 30), bD: P(26, 46), res: P(8, 30),
          hon: P(56, 26, 180),
        },
      },
      {
        titre: "Les flancs et la réserve",
        description:
          "Kontostéphanos engage sa réserve et fait pivoter son aile droite : masses de flèches, puis charge à la lance et à la masse d'armes sur les flancs hongrois.",
        positions: {
          bG: P(30, 12, 20), res: P(34, 30, 0), bD: P(44, 44, -30),
          hon: P(48, 26, 180),
        },
      },
      {
        titre: "La poursuite jusqu'au Danube",
        description:
          "L'armée hongroise se disloque ; la poursuite jusqu'au fleuve achève la victoire. La Hongrie cède la Dalmatie et Sirmium — apogée balkanique de Manuel Ier.",
        positions: {
          hon: R(70, 14, 140), bC: P(40, 28), bG: P(46, 14, 20),
          bD: P(56, 36, -20), res: P(48, 26, 0),
        },
      },
    ],
  },

  "hyelion-1177": {
    terrain: [
      { type: "riviere", points: "0,34 30,30 54,34 80,30 100,34", label: "Méandre (gué)" },
      { type: "label", x: 22, y: 8, text: "Hyélion" },
      { type: "label", x: 74, y: 56, text: "Leimochéir" },
    ],
    units: [
      U("emb1", "byz", "infanterie", "Vatatzès (rive nord)"),
      U("emb2", "byz", "infanterie", "Détachement (rive sud)"),
      U("turc", "ennemi", "cavalerie", "Colonne seldjoukide"),
      U("but", "ennemi", "infanterie", "Butin"),
    ],
    phases: [
      {
        titre: "L'attente aux gués",
        description:
          "La colonne d'Atapakes revient chargée du pillage de la vallée. Jean Vatatzès poste ses troupes des deux côtés du gué obligé du Méandre, entre Hyélion et Leimochéir.",
        positions: {
          emb1: P(30, 16), emb2: P(64, 48), turc: P(84, 44, 135), but: P(94, 48, 135),
        },
      },
      {
        titre: "L'attaque pendant la traversée",
        description:
          "Quand la moitié de la colonne a passé le fleuve, les deux détachements attaquent simultanément : l'armée turque, coupée en deux par l'eau, ne peut ni se déployer ni se secourir.",
        positions: {
          turc: P(56, 32, 160), emb1: P(42, 24, 60), emb2: P(66, 42, -120),
        },
      },
      {
        titre: "Acculés au fleuve",
        description:
          "La colonne est détruite contre le Méandre ; Atapakes est tué. Un an après Myriokephalon, l'armée byzantine prouve qu'elle tient toujours l'Asie Mineure occidentale.",
        positions: {
          turc: R(52, 34, 90), but: P(78, 40, 0),
          emb1: P(48, 26, 45), emb2: P(60, 40, -135),
        },
      },
    ],
  },

  "demetritzes-1185": {
    terrain: [
      { type: "riviere", points: "76,4 80,20 78,38 82,58", label: "Strymon" },
      { type: "camp", x: 56, y: 28, label: "camp normand dispersé" },
      { type: "label", x: 16, y: 8, text: "← vers Thessalonique" },
    ],
    units: [
      U("bran", "byz", "cavalerie", "Alexis Branas"),
      U("inf", "byz", "infanterie", "Infanterie"),
      U("norm", "ennemi", "infanterie", "Armée normande"),
    ],
    phases: [
      {
        titre: "L'excès de confiance",
        description:
          "Après le sac de Thessalonique, l'armée normande avance vers Constantinople et campe dispersée, sans se garder sérieusement. Branas la harcèle et attend son heure.",
        positions: {
          bran: P(20, 20, 0), inf: P(16, 40, 0), norm: P(56, 30),
        },
      },
      {
        titre: "L'attaque surprise",
        description:
          "7 novembre 1185 : Branas frappe le camp par surprise. La ligne normande, montée en désordre, s'effondre au premier choc.",
        positions: {
          bran: P(44, 22, 20), inf: P(40, 38, -10),
        },
      },
      {
        titre: "La déroute au Strymon",
        description:
          "Les fuyards sont massacrés ou se noient dans le Strymon ; les chefs sont capturés. Thessalonique est reprise aussitôt : la grande invasion normande de 1185 est anéantie.",
        positions: {
          norm: R(74, 32, 60), bran: P(60, 24, 10), inf: P(54, 38, 0),
        },
      },
    ],
  },

  "antioche-meandre-1211": {
    terrain: [
      { type: "riviere", points: "0,50 30,48 60,52 100,48", label: "Méandre" },
      { type: "murs", points: "10,20 20,16 24,26 14,30 10,20", label: "Antioche du Méandre" },
    ],
    units: [
      U("lat", "byz", "infanterie", "800 Latins de Nicée"),
      U("nic", "byz", "infanterie", "Grecs de Nicée"),
      U("theo", "byz", "chef", "Théodore Laskaris"),
      U("selj", "ennemi", "cavalerie", "Armée seldjoukide"),
      U("sult", "ennemi", "chef", "Kay Khusraw Ier"),
    ],
    phases: [
      {
        titre: "Le choc des mercenaires",
        description:
          "17 juin 1211 : le sultan, venu rétablir Alexis III, accepte la bataille. Les 800 mercenaires latins de Théodore chargent et enfoncent le premier rideau seldjoukide — au prix de pertes terribles.",
        positions: {
          lat: P(38, 30, 0), nic: P(24, 36, 0), theo: P(20, 30),
          selj: P(64, 30, 180), sult: P(76, 30),
        },
      },
      {
        titre: "Au bord de la défaite",
        description:
          "Les Latins submergés sont presque anéantis ; les Seldjoukides refoulent les Grecs et la bataille paraît perdue.",
        positions: {
          lat: R(56, 32, 90), nic: P(30, 36, 0), selj: P(46, 30, 180),
          sult: P(60, 30),
        },
      },
      {
        titre: "Le duel des souverains",
        description:
          "Selon la tradition — mêlée de légende —, Kay Khusraw désarçonne Théodore, qui se relève et l'abat. La mort du sultan disloque son armée : Nicée est sauvée, Alexis III capturé finit au monastère.",
        positions: {
          theo: P(56, 28), sult: R(58, 34, 90), selj: R(80, 28, 160),
          nic: P(44, 34, 0),
        },
      },
    ],
  },

  "poimanenon-1224": {
    terrain: [
      { type: "label", x: 22, y: 8, text: "lac de Manyas au nord" },
      { type: "label", x: 50, y: 58, text: "Poimanénon — lieu de la défaite grecque de 1204" },
    ],
    units: [
      U("vat", "byz", "cavalerie", "Jean III Vatatzès"),
      U("nic", "byz", "infanterie", "Armée nicéenne"),
      U("lat", "ennemi", "cavalerie", "Chevaliers latins"),
    ],
    phases: [
      {
        titre: "L'Empire latin attaque",
        description:
          "Profitant d'une querelle dynastique à Nicée — les propres frères de Vatatzès sont passés aux Latins —, l'armée de Constantinople envahit la Bithynie.",
        positions: {
          vat: P(26, 22, 0), nic: P(22, 40, 0), lat: P(68, 30, 180),
        },
      },
      {
        titre: "La charge brisée",
        description:
          "Vatatzès accepte la bataille à Poimanénon même, où les Latins avaient vaincu en 1204. La charge des chevaliers est absorbée puis enveloppée.",
        positions: {
          lat: P(48, 30, 180), vat: P(40, 16, -30), nic: P(36, 42, 20),
        },
      },
      {
        titre: "La revanche de 1204",
        description:
          "L'armée latine est écrasée ; presque toutes les possessions latines d'Asie Mineure tombent ensuite une à une. Réduit à Constantinople, l'Empire latin n'attaquera plus jamais en Asie.",
        positions: {
          lat: R(64, 32, 130), vat: P(52, 22, 0), nic: P(48, 40, 0),
        },
      },
    ],
  },

  "pelagonia-1259": {
    terrain: [
      { type: "colline", x: 16, y: 12, rx: 12, ry: 5, label: "Pélagonie" },
      { type: "label", x: 80, y: 56, text: "coalition hétéroclite" },
    ],
    units: [
      U("nic", "byz", "infanterie", "Jean Paléologue"),
      U("koum", "allie", "archers", "Archers coumans"),
      U("epir", "ennemi", "infanterie", "Épirotes (Michel II)"),
      U("ach", "ennemi", "cavalerie", "Chevaliers d'Achaïe"),
      U("manf", "ennemi", "cavalerie", "Chevaliers de Manfred"),
    ],
    phases: [
      {
        titre: "Une coalition sous tension",
        description:
          "Épirotes grecs et chevaliers latins d'Achaïe et de Sicile se méfient les uns des autres. Les Nicéens attisent les rumeurs de trahison — la guerre psychologique avant la bataille.",
        positions: {
          nic: P(22, 26, 0), koum: P(26, 44, 0),
          epir: P(62, 12, 180), ach: P(70, 30, 180), manf: P(72, 46, 180),
        },
      },
      {
        titre: "La coalition se disloque",
        description:
          "Le fils bâtard de Michel II fait défection ; les Épirotes se retirent de nuit. Les chevaliers francs, restés seuls, découvrent le vide à leurs côtés.",
        positions: {
          epir: H(90, 6),
        },
      },
      {
        titre: "L'enveloppement",
        description:
          "Archers coumans et troupes nicéennes harcèlent puis enveloppent les chevaliers ; Guillaume II de Villehardouin, capturé, cédera Mistra et Monemvasia. La route de Constantinople (1261) est ouverte.",
        positions: {
          koum: P(52, 44, -30), nic: P(46, 24, 10),
          ach: R(66, 30, 120), manf: R(72, 44, 140),
        },
      },
    ],
  },
};
