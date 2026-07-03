import type { Defeat } from "../types";

/**
 * Grandes défaites mentionnées UNIQUEMENT en contexte.
 * Elles ne figurent volontairement ni sur la carte principale,
 * ni sur la frise des victoires.
 */
export const defeats: Defeat[] = [
  {
    nom: "Bataille du Yarmouk",
    annee: "636",
    adversaire: "Califat rachidoune",
    contexte:
      "Six ans après le triomphe d'Héraclius sur la Perse, l'armée d'Orient épuisée est détruite sur le Yarmouk : la Syrie, puis l'Égypte, sont perdues en une décennie. C'est ce cataclysme qui donne tout leur sens aux défenses victorieuses de Constantinople (626, 717-718) et à Akroinon : l'empire amputé survit là où la Perse, elle, disparaît.",
  },
  {
    nom: "Bataille de Manzikert",
    annee: "1071",
    adversaire: "Turcs seldjoukides",
    contexte:
      "Défaite plus politique que militaire — les pertes furent limitées, mais la capture de Romain IV déclencha dix ans de guerres civiles pendant lesquelles l'Anatolie fut perdue. Les victoires d'Alexis Ier (Lébounion) et de ses successeurs sont précisément l'histoire du redressement après Manzikert.",
  },
  {
    nom: "Bataille de Myriokephalon",
    annee: "1176",
    adversaire: "Sultanat seldjoukide de Roum",
    contexte:
      "Échec de la grande expédition de Manuel Ier contre Konya, au retentissement moral considérable. Son ampleur matérielle est toutefois débattue : dès 1177, la victoire d'Hyélion et Leimochéir montre une armée byzantine encore pleinement opérationnelle en Asie Mineure occidentale.",
  },
  {
    nom: "Prise de Constantinople par la quatrième croisade",
    annee: "1204",
    adversaire: "Croisés latins et Venise",
    contexte:
      "La ville réputée imprenable tombe pour la première fois — non face à un empire rival, mais au terme du détournement d'une croisade, sur fond de crises dynastiques byzantines. La victoire de Pélagonie (1259) et la reprise de la ville en 1261 répondent directement à ce traumatisme.",
  },
  {
    nom: "Chute de Constantinople",
    annee: "29 mai 1453",
    adversaire: "Empire ottoman de Mehmed II",
    contexte:
      "Après deux mois de siège et malgré une défense acharnée menée par Constantin XI, l'artillerie ottomane vient à bout des murs théodosiens qui avaient tenu mille ans. La fin de l'empire souligne, en creux, l'exploit que représente sa survie : onze siècles, dont huit sous pression quasi constante.",
  },
];
