import {
  VICTORY_TYPE_COLORS,
  VICTORY_TYPE_LABELS,
  type VictoryType,
} from "../types";

const ALL_TYPES = Object.keys(VICTORY_TYPE_LABELS) as VictoryType[];

interface Props {
  activeTypes: Set<VictoryType>;
  onToggle: (type: VictoryType) => void;
}

/** Légende interactive : chaque type de victoire peut être affiché ou masqué. */
export function VictoryFilters({ activeTypes, onToggle }: Props) {
  return (
    <div className="victory-filters" role="group" aria-label="Filtrer par type de victoire">
      {ALL_TYPES.map((type) => {
        const active = activeTypes.has(type);
        return (
          <button
            key={type}
            type="button"
            className={`filter-chip${active ? " active" : ""}`}
            aria-pressed={active}
            onClick={() => onToggle(type)}
          >
            <span
              className="filter-dot"
              style={{ background: VICTORY_TYPE_COLORS[type] }}
              aria-hidden="true"
            />
            {VICTORY_TYPE_LABELS[type]}
          </button>
        );
      })}
    </div>
  );
}
