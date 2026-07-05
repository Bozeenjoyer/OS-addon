import type { Battle, Certitude } from "../types";
import { VICTORY_TYPE_COLORS, VICTORY_TYPE_LABELS } from "../types";

const CERTITUDE_CLASS: Record<Certitude, string> = {
  connu: "certitude-connu",
  "estimé": "certitude-estime",
  "discuté": "certitude-discute",
  "non fiable": "certitude-non-fiable",
};

interface Props {
  battle: Battle;
  onClose: () => void;
}

/** Fiche détaillée d'une bataille, ouverte au clic sur un marqueur ou un jalon. */
export function BattleCard({ battle, onClose }: Props) {
  return (
    <aside className="battle-card" aria-label={`Fiche : ${battle.nom}`}>
      <button
        type="button"
        className="battle-card-close"
        onClick={onClose}
        aria-label="Fermer la fiche"
      >
        ✕
      </button>

      <span
        className="battle-type-badge"
        style={{ background: VICTORY_TYPE_COLORS[battle.type] }}
      >
        {VICTORY_TYPE_LABELS[battle.type]}
      </span>
      <h3>{battle.nom}</h3>
      <p className="battle-date">{battle.date}</p>

      <dl className="battle-fields">
        <dt>Lieu</dt>
        <dd>{battle.lieu}</dd>

        <dt>Coordonnées approximatives</dt>
        <dd>
          {battle.coords[0].toFixed(2)}° N, {battle.coords[1].toFixed(2)}° E
        </dd>

        <dt>Adversaires</dt>
        <dd>{battle.adversaires}</dd>

        <dt>Commandants byzantins</dt>
        <dd>{battle.commandantsByzantins.join(" · ")}</dd>

        <dt>Commandants adverses</dt>
        <dd>{battle.commandantsAdverses.join(" · ")}</dd>

        <dt>Résultat</dt>
        <dd>{battle.resultat}</dd>

        <dt>Importance stratégique</dt>
        <dd>{battle.importance}</dd>

        <dt>Résumé</dt>
        <dd>{battle.resume}</dd>

        <dt>
          Effectifs{" "}
          <span
            className={`certitude-badge ${CERTITUDE_CLASS[battle.effectifs.certitude]}`}
          >
            {battle.effectifs.certitude}
          </span>
        </dt>
        <dd>
          <strong>Byzantins :</strong> {battle.effectifs.byzantins}
          <br />
          <strong>Adverses :</strong> {battle.effectifs.adverses}
          {battle.effectifs.note && (
            <p className="effectifs-note">{battle.effectifs.note}</p>
          )}
        </dd>

        {battle.incertitudes && (
          <>
            <dt>Réserves historiographiques</dt>
            <dd className="incertitudes">{battle.incertitudes}</dd>
          </>
        )}
      </dl>
    </aside>
  );
}
