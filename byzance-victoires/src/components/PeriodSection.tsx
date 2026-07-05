import type { Battle, ThemeSection } from "../types";

interface Props {
  section: ThemeSection;
  battles: Battle[];
  onBattleClick: (id: string) => void;
}

/** Section thématique (« dossier ») avec liens croisés vers les batailles de la carte. */
export function PeriodSection({ section, battles, onBattleClick }: Props) {
  const linked = (section.batailles ?? [])
    .map((id) => battles.find((b) => b.id === id))
    .filter((b): b is Battle => Boolean(b));

  return (
    <section className="period-section" id={section.id}>
      <h3>{section.titre}</h3>
      {section.paragraphes.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
      {linked.length > 0 && (
        <div className="section-battles">
          <span className="section-battles-label">Sur la carte :</span>
          {linked.map((battle) => (
            <button
              key={battle.id}
              type="button"
              className="battle-link"
              onClick={() => onBattleClick(battle.id)}
            >
              {battle.nom} ({battle.annee})
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
