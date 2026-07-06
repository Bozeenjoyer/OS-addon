import { useEffect, useMemo, useState } from "react";
import type {
  AnimSide,
  AnimUnit,
  BattleAnim,
  Terrain,
  UnitState,
} from "../data/anim-types";

const SIDE_COLORS: Record<AnimSide, { fill: string; stroke: string }> = {
  byz: { fill: "#6d2a63", stroke: "#c9a227" },
  ennemi: { fill: "#8a4a2e", stroke: "#4a2a18" },
  allie: { fill: "#0f8b7a", stroke: "#0a5c51" },
};

const PHASE_INTERVAL_MS = 3400;

/** Fusionne cumulativement les positions des phases 0..index. */
function resolvePositions(
  anim: BattleAnim,
  phaseIndex: number
): Record<string, UnitState> {
  const result: Record<string, UnitState> = {};
  for (let i = 0; i <= phaseIndex; i++) {
    for (const [id, partial] of Object.entries(anim.phases[i].positions)) {
      result[id] = {
        visible: true,
        angle: 0,
        routed: false,
        ...result[id],
        ...partial,
      } as UnitState;
    }
  }
  return result;
}

function TerrainShape({ t }: { t: Terrain }) {
  switch (t.type) {
    case "mer":
      return (
        <g>
          <polygon points={t.points} className="anim-mer" />
          {t.label && <TerrainLabel t={t} />}
        </g>
      );
    case "riviere":
      return (
        <g>
          <polyline points={t.points} className="anim-riviere" />
          {t.label && <TerrainLabel t={t} />}
        </g>
      );
    case "colline":
      return (
        <g>
          <ellipse cx={t.x} cy={t.y} rx={t.rx} ry={t.ry} className="anim-colline" />
          {t.label && (
            <text x={t.x} y={t.y + 1} className="anim-terrain-label" textAnchor="middle">
              {t.label}
            </text>
          )}
        </g>
      );
    case "murs":
      return (
        <g>
          <polyline points={t.points} className="anim-murs" />
          {t.label && <TerrainLabel t={t} />}
        </g>
      );
    case "camp":
      return (
        <g>
          <rect
            x={t.x - 7}
            y={t.y - 5}
            width={14}
            height={10}
            className="anim-camp"
          />
          {t.label && (
            <text x={t.x} y={t.y + 9} className="anim-terrain-label" textAnchor="middle">
              {t.label}
            </text>
          )}
        </g>
      );
    case "label":
      return (
        <text x={t.x} y={t.y} className="anim-terrain-label" textAnchor="middle">
          {t.text}
        </text>
      );
  }
}

function TerrainLabel({ t }: { t: Extract<Terrain, { points: string }> }) {
  const first = t.points.split(" ")[0].split(",").map(Number);
  return (
    <text x={first[0] + 2} y={first[1] + 3} className="anim-terrain-label">
      {t.label}
    </text>
  );
}

function UnitShape({ unit }: { unit: AnimUnit }) {
  const { fill, stroke } = SIDE_COLORS[unit.side];
  switch (unit.kind) {
    case "infanterie":
      return <rect x={-4.5} y={-1.8} width={9} height={3.6} fill={fill} stroke={stroke} strokeWidth={0.5} />;
    case "archers":
      return (
        <rect
          x={-4.5}
          y={-1.5}
          width={9}
          height={3}
          fill={fill}
          stroke={stroke}
          strokeWidth={0.5}
          strokeDasharray="1.4 0.9"
        />
      );
    case "cavalerie":
      return <polygon points="-4,-2.4 4.4,0 -4,2.4" fill={fill} stroke={stroke} strokeWidth={0.5} />;
    case "flotte":
      return (
        <g>
          <polygon points="-4.4,1.4 4.4,1.4 2.8,-1 -2.8,-1" fill={fill} stroke={stroke} strokeWidth={0.5} />
          <line x1={0} y1={-1} x2={0} y2={-3.2} stroke={stroke} strokeWidth={0.6} />
        </g>
      );
    case "chef":
      return (
        <g>
          <circle r={1.9} fill={fill} stroke={stroke} strokeWidth={0.6} />
          <circle r={0.7} fill={stroke} />
        </g>
      );
    case "machine":
      return <rect x={-2.2} y={-2.2} width={4.4} height={4.4} fill={fill} stroke={stroke} strokeWidth={0.5} />;
    case "feu":
      return (
        <g className="anim-feu">
          <circle r={2.6} fill="#e2711d" opacity={0.5} />
          <circle r={1.3} fill="#f4b942" />
        </g>
      );
  }
}

interface Props {
  anim: BattleAnim;
}

/**
 * Lecteur de reconstitution : diagramme SVG animé où les unités se
 * déplacent entre les phases décrites par les sources.
 */
export function BattleAnimation({ anim }: Props) {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const lastPhase = anim.phases.length - 1;

  useEffect(() => {
    if (!playing) return;
    const interval = window.setInterval(() => {
      setPhaseIndex((i) => {
        if (i >= lastPhase) {
          setPlaying(false);
          return i;
        }
        return i + 1;
      });
    }, PHASE_INTERVAL_MS);
    return () => window.clearInterval(interval);
  }, [playing, lastPhase]);

  const positions = useMemo(
    () => resolvePositions(anim, phaseIndex),
    [anim, phaseIndex]
  );
  const phase = anim.phases[phaseIndex];

  const togglePlay = () => {
    if (!playing && phaseIndex >= lastPhase) {
      setPhaseIndex(0);
    }
    setPlaying((p) => !p);
  };

  return (
    <div className="battle-anim">
      <div className="battle-anim-head">
        <span className="battle-anim-title">Reconstitution animée</span>
        <span className="battle-anim-disclaimer">
          schéma simplifié, à visée pédagogique
        </span>
      </div>

      <svg viewBox="0 0 100 62" role="img" aria-label={`Reconstitution : ${phase.titre}`}>
        <rect x={0} y={0} width={100} height={62} className="anim-fond" />
        {anim.terrain.map((t, i) => (
          <TerrainShape key={i} t={t} />
        ))}
        {anim.units.map((unit) => {
          const state = positions[unit.id];
          if (!state) return null;
          const visible = state.visible !== false;
          const angle = (state.angle ?? 0) + (state.routed ? 18 : 0);
          return (
            <g
              key={unit.id}
              className={`anim-unit${state.routed ? " routed" : ""}`}
              style={{
                transform: `translate(${state.x}px, ${state.y}px)`,
                opacity: visible ? (state.routed ? 0.4 : 1) : 0,
              }}
            >
              <g style={{ transform: `rotate(${angle}deg)` }}>
                <UnitShape unit={unit} />
              </g>
              <text y={5.6} className="anim-unit-label" textAnchor="middle">
                {unit.label}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="battle-anim-caption">
        <strong>
          Phase {phaseIndex + 1}/{anim.phases.length} — {phase.titre}.
        </strong>{" "}
        {phase.description}
      </div>

      <div className="battle-anim-controls">
        <button
          type="button"
          onClick={() => {
            setPlaying(false);
            setPhaseIndex((i) => Math.max(0, i - 1));
          }}
          disabled={phaseIndex === 0}
          aria-label="Phase précédente"
        >
          ⏮
        </button>
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Pause" : "Lecture"}
        >
          {playing ? "⏸" : phaseIndex >= lastPhase ? "↺" : "▶"}
        </button>
        <button
          type="button"
          onClick={() => {
            setPlaying(false);
            setPhaseIndex((i) => Math.min(lastPhase, i + 1));
          }}
          disabled={phaseIndex === lastPhase}
          aria-label="Phase suivante"
        >
          ⏭
        </button>
        <div className="battle-anim-dots" aria-hidden="true">
          {anim.phases.map((_, i) => (
            <button
              key={i}
              type="button"
              className={i === phaseIndex ? "active" : ""}
              onClick={() => {
                setPlaying(false);
                setPhaseIndex(i);
              }}
              tabIndex={-1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
