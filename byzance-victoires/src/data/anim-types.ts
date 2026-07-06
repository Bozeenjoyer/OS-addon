/**
 * Types et aides pour les reconstitutions animées de batailles.
 *
 * Chaque reconstitution est une suite de phases : la phase 0 définit la
 * position initiale de toutes les unités, les phases suivantes ne décrivent
 * que les changements (positions fusionnées cumulativement par le lecteur).
 * Le repère est le viewBox SVG : x de 0 à 100, y de 0 à 62.
 */

export type AnimSide = "byz" | "ennemi" | "allie";

export type AnimKind =
  | "infanterie"
  | "cavalerie"
  | "archers"
  | "flotte"
  | "chef"
  | "machine"
  | "feu";

export interface AnimUnit {
  id: string;
  side: AnimSide;
  kind: AnimKind;
  label: string;
}

export interface UnitState {
  x: number;
  y: number;
  /** Rotation en degrés (0 = pointe vers la droite pour la cavalerie). */
  angle?: number;
  /** false = unité masquée (pas encore arrivée, détruite...). */
  visible?: boolean;
  /** true = unité en déroute (affichage estompé et désorganisé). */
  routed?: boolean;
}

export type Terrain =
  | { type: "mer"; points: string; label?: string }
  | { type: "riviere"; points: string; label?: string }
  | { type: "colline"; x: number; y: number; rx: number; ry: number; label?: string }
  | { type: "murs"; points: string; label?: string }
  | { type: "camp"; x: number; y: number; label?: string }
  | { type: "label"; x: number; y: number; text: string };

export interface AnimPhase {
  titre: string;
  description: string;
  positions: Record<string, Partial<UnitState>>;
}

export interface BattleAnim {
  terrain: Terrain[];
  units: AnimUnit[];
  phases: AnimPhase[];
}

/* ---------- Aides d'écriture compactes ---------- */

export const U = (
  id: string,
  side: AnimSide,
  kind: AnimKind,
  label: string
): AnimUnit => ({ id, side, kind, label });

/** Position visible. */
export const P = (x: number, y: number, angle = 0): UnitState => ({
  x,
  y,
  angle,
  visible: true,
  routed: false,
});

/** Position masquée (unité pas encore engagée ou détruite). */
export const H = (x: number, y: number): UnitState => ({
  x,
  y,
  visible: false,
});

/** Position en déroute. */
export const R = (x: number, y: number, angle = 0): UnitState => ({
  x,
  y,
  angle,
  visible: true,
  routed: true,
});
