import type { BattleAnim } from "./anim-types";
import { earlyAnims } from "./animations-early";
import { lateAnims } from "./animations-late";

/** Reconstitutions animées, indexées par identifiant de bataille. */
export const animations: Record<string, BattleAnim> = {
  ...earlyAnims,
  ...lateAnims,
};
