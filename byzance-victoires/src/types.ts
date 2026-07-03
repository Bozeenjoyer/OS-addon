export type VictoryType =
  | "defensive"
  | "offensive"
  | "navale"
  | "siege"
  | "strategique";

export type Certitude = "connu" | "estimé" | "discuté" | "non fiable";

export interface Effectifs {
  byzantins: string;
  adverses: string;
  certitude: Certitude;
  note?: string;
}

export interface Battle {
  id: string;
  nom: string;
  /** Année utilisée pour le tri chronologique et la frise. */
  annee: number;
  date: string;
  lieu: string;
  /** Coordonnées approximatives [latitude, longitude]. */
  coords: [number, number];
  type: VictoryType;
  adversaires: string;
  commandantsByzantins: string[];
  commandantsAdverses: string[];
  resultat: string;
  importance: string;
  resume: string;
  effectifs: Effectifs;
  /** Réserves historiographiques éventuelles (sources divergentes, datation, etc.). */
  incertitudes?: string;
}

export interface Defeat {
  nom: string;
  annee: string;
  adversaire: string;
  contexte: string;
}

export interface ThemeSection {
  id: string;
  titre: string;
  paragraphes: string[];
  /** Identifiants des batailles liées à la section, pour navigation croisée. */
  batailles?: string[];
}

export const VICTORY_TYPE_LABELS: Record<VictoryType, string> = {
  defensive: "Victoire défensive",
  offensive: "Victoire offensive",
  navale: "Victoire navale",
  siege: "Siège victorieux",
  strategique: "Victoire stratégique majeure",
};

export const VICTORY_TYPE_COLORS: Record<VictoryType, string> = {
  defensive: "#2e6f95",
  offensive: "#c1121f",
  navale: "#0f8b7a",
  siege: "#d4a017",
  strategique: "#7b2d8b",
};
