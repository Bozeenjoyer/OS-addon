import type { Battle } from "../types";
import { VICTORY_TYPE_COLORS } from "../types";

const START_YEAR = 330;
const END_YEAR = 1453;
const CENTURY_MARKS = [400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400];

function yearToPercent(year: number): number {
  return ((year - START_YEAR) / (END_YEAR - START_YEAR)) * 100;
}

interface Props {
  battles: Battle[];
  revealedCount: number;
  selectedId: string | null;
  playing: boolean;
  onTogglePlay: () => void;
  onReset: () => void;
  onShowAll: () => void;
  onSelectIndex: (index: number) => void;
}

/**
 * Frise chronologique 330–1453 : les batailles apparaissent au fil de la
 * lecture ; cliquer sur un jalon révèle la carte jusqu'à cette bataille.
 */
export function Timeline({
  battles,
  revealedCount,
  selectedId,
  playing,
  onTogglePlay,
  onReset,
  onShowAll,
  onSelectIndex,
}: Props) {
  const lastRevealed = revealedCount > 0 ? battles[revealedCount - 1] : null;
  const progressPercent = lastRevealed ? yearToPercent(lastRevealed.annee) : 0;
  const finished = revealedCount >= battles.length;

  return (
    <div className="timeline" id="frise">
      <div className="timeline-controls">
        <button
          type="button"
          className="control-button primary"
          onClick={onTogglePlay}
          aria-label={playing ? "Mettre en pause" : "Lancer la lecture chronologique"}
        >
          {playing ? "⏸ Pause" : finished ? "▶ Relire" : "▶ Lecture"}
        </button>
        <button type="button" className="control-button" onClick={onReset}>
          ↺ Réinitialiser
        </button>
        <button type="button" className="control-button" onClick={onShowAll}>
          Tout afficher
        </button>
        <span className="timeline-status" aria-live="polite">
          {lastRevealed
            ? `${revealedCount}/${battles.length} — ${lastRevealed.nom} (${lastRevealed.annee})`
            : "Appuyez sur Lecture pour dérouler les victoires dans l'ordre chronologique."}
        </span>
      </div>

      <div className="timeline-track-wrapper">
        <div className="timeline-track">
          <div
            className="timeline-progress"
            style={{ width: `${progressPercent}%` }}
            aria-hidden="true"
          />
          {CENTURY_MARKS.map((year) => (
            <div
              key={year}
              className="timeline-century"
              style={{ left: `${yearToPercent(year)}%` }}
            >
              <span>{year}</span>
            </div>
          ))}
          {battles.map((battle, index) => {
            const revealed = index < revealedCount;
            return (
              <button
                key={battle.id}
                type="button"
                className={`timeline-tick${revealed ? " revealed" : ""}${
                  battle.id === selectedId ? " selected" : ""
                }`}
                style={{
                  left: `${yearToPercent(battle.annee)}%`,
                  background: VICTORY_TYPE_COLORS[battle.type],
                }}
                title={`${battle.nom} (${battle.annee})`}
                aria-label={`${battle.nom}, ${battle.annee}`}
                onClick={() => onSelectIndex(index)}
              />
            );
          })}
        </div>
        <div className="timeline-bounds">
          <span>330 — fondation de Constantinople</span>
          <span>1453 — chute de Constantinople</span>
        </div>
      </div>
    </div>
  );
}
