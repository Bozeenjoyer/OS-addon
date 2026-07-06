import { useEffect, useMemo, useState } from "react";
import type {
  AnimSide,
  AnimUnit,
  BattleAnim,
  Terrain,
  UnitState,
} from "../data/anim-types";

const SIDE_COLORS: Record<AnimSide, { fill: string; stroke: string; light: string }> = {
  byz: { fill: "#6d2a63", stroke: "#c9a227", light: "#9a4b8d" },
  ennemi: { fill: "#8a4a2e", stroke: "#42291a", light: "#b06a45" },
  allie: { fill: "#0f8b7a", stroke: "#07564b", light: "#3aab99" },
};

const PHASE_INTERVAL_MS = 4000;

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

function bboxOf(points: string) {
  const nums = points.trim().split(/[ ,]+/).map(Number);
  const xs = nums.filter((_, i) => i % 2 === 0);
  const ys = nums.filter((_, i) => i % 2 === 1);
  return {
    minX: Math.min(...xs),
    maxX: Math.max(...xs),
    minY: Math.min(...ys),
    maxY: Math.max(...ys),
  };
}

function wavePath(x0: number, x1: number, y: number): string {
  let d = `M ${x0.toFixed(1)},${y.toFixed(1)}`;
  for (let x = x0; x < x1 - 6; x += 6) d += " q 3 -1.4 6 0";
  return d;
}

function TerrainShape({ t }: { t: Terrain }) {
  switch (t.type) {
    case "mer": {
      const b = bboxOf(t.points);
      const h = b.maxY - b.minY;
      return (
        <g>
          <polygon points={t.points} className="anim-mer" />
          <path d={wavePath(b.minX + 5, b.maxX - 5, b.minY + h * 0.38)} className="anim-vague" />
          <path d={wavePath(b.minX + 9, b.maxX - 9, b.minY + h * 0.72)} className="anim-vague v2" />
          {t.label && <TerrainLabel t={t} />}
        </g>
      );
    }
    case "riviere":
      return (
        <g>
          <polyline points={t.points} className="anim-riviere" />
          <polyline points={t.points} className="anim-riviere-flux" />
          {t.label && <TerrainLabel t={t} />}
        </g>
      );
    case "colline":
      return (
        <g>
          <ellipse cx={t.x} cy={t.y} rx={t.rx} ry={t.ry} className="anim-colline" />
          <ellipse
            cx={t.x}
            cy={t.y - t.ry * 0.18}
            rx={t.rx * 0.55}
            ry={t.ry * 0.5}
            className="anim-colline-contour"
          />
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
          <polyline points={t.points} className="anim-murs-crenel" />
          {t.label && <TerrainLabel t={t} />}
        </g>
      );
    case "camp":
      return (
        <g>
          <rect x={t.x - 7} y={t.y - 5} width={14} height={10} className="anim-camp" />
          <polygon
            points={`${t.x - 3.4},${t.y + 1.4} ${t.x - 1.6},${t.y - 1.8} ${t.x + 0.2},${t.y + 1.4}`}
            className="anim-tente"
          />
          <polygon
            points={`${t.x + 1.2},${t.y + 2.2} ${t.x + 3},${t.y - 1} ${t.x + 4.8},${t.y + 2.2}`}
            className="anim-tente"
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

/** Silhouettes d'unités, dessinées pointe vers la droite (angle 0). */
function UnitShape({ unit }: { unit: AnimUnit }) {
  const { fill, stroke, light } = SIDE_COLORS[unit.side];
  switch (unit.kind) {
    case "infanterie":
      return (
        <g>
          <rect x={-4.6} y={-2} width={9.2} height={4} rx={0.5} fill={fill} stroke={stroke} strokeWidth={0.45} />
          <line x1={-1.6} y1={-2} x2={-1.6} y2={2} stroke={light} strokeWidth={0.35} />
          <line x1={1.4} y1={-2} x2={1.4} y2={2} stroke={light} strokeWidth={0.35} />
          <line x1={4.6} y1={-1.2} x2={5.8} y2={-1.2} stroke={stroke} strokeWidth={0.4} />
          <line x1={4.6} y1={0} x2={6.2} y2={0} stroke={stroke} strokeWidth={0.4} />
          <line x1={4.6} y1={1.2} x2={5.8} y2={1.2} stroke={stroke} strokeWidth={0.4} />
        </g>
      );
    case "archers":
      return (
        <g>
          <rect x={-4.2} y={-1.7} width={8.4} height={3.4} rx={0.5} fill={fill} stroke={stroke} strokeWidth={0.45} />
          <path d="M 4.8,-2.2 q 2.4 2.2 0 4.4" fill="none" stroke={stroke} strokeWidth={0.5} />
          <line x1={4.8} y1={0} x2={7} y2={0} stroke={stroke} strokeWidth={0.35} />
        </g>
      );
    case "cavalerie":
      return (
        <g>
          <polygon points="-4.4,-2.7 4.8,0 -4.4,2.7 -1.8,0" fill={fill} stroke={stroke} strokeWidth={0.45} />
          <line x1={2} y1={0} x2={6.4} y2={0} stroke={stroke} strokeWidth={0.45} />
        </g>
      );
    case "flotte":
      return (
        <g>
          <polygon points="-4.8,1.7 4.8,1.7 3.1,-0.6 -3.1,-0.6" fill={fill} stroke={stroke} strokeWidth={0.45} />
          <line x1={0} y1={-0.6} x2={0} y2={-4} stroke={stroke} strokeWidth={0.5} />
          <polygon points="0.3,-4 3,-1.2 0.3,-1.2" fill={light} stroke={stroke} strokeWidth={0.35} />
        </g>
      );
    case "chef":
      return (
        <g>
          <circle r={1.5} fill={fill} stroke={stroke} strokeWidth={0.5} />
          <line x1={0} y1={0} x2={0} y2={-4} stroke={stroke} strokeWidth={0.5} />
          <polygon points="0,-4 3.2,-3.1 0,-2.2" fill={light} stroke={stroke} strokeWidth={0.3} />
        </g>
      );
    case "machine":
      return (
        <g>
          <rect x={-2.5} y={-1.6} width={5} height={3.2} fill={fill} stroke={stroke} strokeWidth={0.45} />
          <line x1={-1.2} y1={-1.4} x2={2.8} y2={-3.8} stroke={stroke} strokeWidth={0.55} />
          <circle cx={-1.2} cy={-1.4} r={0.7} fill={stroke} />
        </g>
      );
    case "feu":
      return (
        <g className="anim-feu">
          <circle r={3.4} fill="#e2711d" opacity={0.28} />
          <path d="M 0,-3.2 Q 1.8,-1.4 1.2,0.6 Q 0.8,1.8 0,2 Q -0.8,1.8 -1.2,0.6 Q -1.8,-1.4 0,-3.2 Z" fill="#e2711d" />
          <path d="M 0,-1.6 Q 0.9,-0.5 0.6,0.7 Q 0.3,1.4 0,1.5 Q -0.3,1.4 -0.6,0.7 Q -0.9,-0.5 0,-1.6 Z" fill="#f4b942" />
        </g>
      );
  }
}

interface Props {
  anim: BattleAnim;
}

/**
 * Lecteur de reconstitution : carte schématique animée où les unités
 * manœuvrent entre les phases décrites par les sources, avec flèches de
 * mouvement, points de mêlée et mode plein écran.
 */
export function BattleAnimation({ anim }: Props) {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [expanded, setExpanded] = useState(false);
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

  useEffect(() => {
    if (!expanded) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expanded]);

  const positions = useMemo(
    () => resolvePositions(anim, phaseIndex),
    [anim, phaseIndex]
  );

  // Flèches de mouvement : trajectoires depuis la phase précédente.
  const arrows = useMemo(() => {
    if (phaseIndex === 0) return [];
    const prev = resolvePositions(anim, phaseIndex - 1);
    return anim.units.flatMap((unit) => {
      const a = prev[unit.id];
      const b = positions[unit.id];
      if (!a || !b || a.visible === false || b.visible === false) return [];
      const dist = Math.hypot(b.x - a.x, b.y - a.y);
      if (dist < 5) return [];
      const t = (dist - 3.5) / dist;
      const ex = a.x + (b.x - a.x) * t;
      const ey = a.y + (b.y - a.y) * t;
      const mx = (a.x + ex) / 2 - (ey - a.y) * 0.2;
      const my = (a.y + ey) / 2 + (ex - a.x) * 0.2;
      return [
        {
          id: unit.id,
          side: unit.side,
          d: `M ${a.x},${a.y} Q ${mx},${my} ${ex},${ey}`,
        },
      ];
    });
  }, [anim, phaseIndex, positions]);

  // Points de mêlée : unités adverses au contact.
  const clashes = useMemo(() => {
    const pts: { x: number; y: number }[] = [];
    const friendly = anim.units.filter((u) => u.side !== "ennemi" && u.kind !== "feu");
    const enemy = anim.units.filter((u) => u.side === "ennemi");
    for (const f of friendly) {
      const fs = positions[f.id];
      if (!fs || fs.visible === false || fs.routed) continue;
      for (const e of enemy) {
        const es = positions[e.id];
        if (!es || es.visible === false || es.routed) continue;
        if (Math.hypot(fs.x - es.x, fs.y - es.y) < 14) {
          const cx = (fs.x + es.x) / 2;
          const cy = (fs.y + es.y) / 2;
          if (!pts.some((p) => Math.hypot(p.x - cx, p.y - cy) < 8)) {
            pts.push({ x: cx, y: cy });
          }
        }
      }
    }
    return pts.slice(0, 3);
  }, [anim.units, positions]);

  const phase = anim.phases[phaseIndex];

  const togglePlay = () => {
    if (!playing && phaseIndex >= lastPhase) {
      setPhaseIndex(0);
    }
    setPlaying((p) => !p);
  };

  return (
    <>
      {expanded && (
        <div className="battle-anim-backdrop" onClick={() => setExpanded(false)} />
      )}
      <div className={`battle-anim${expanded ? " expanded" : ""}`}>
        <div className="battle-anim-head">
          <span className="battle-anim-title">Reconstitution animée</span>
          <span className="battle-anim-disclaimer">schéma pédagogique simplifié</span>
          <button
            type="button"
            className="battle-anim-expand"
            onClick={() => setExpanded((e) => !e)}
            aria-label={expanded ? "Réduire" : "Agrandir en plein écran"}
            title={expanded ? "Réduire" : "Agrandir"}
          >
            {expanded ? "✕" : "⛶"}
          </button>
        </div>

        <svg viewBox="0 0 100 62" role="img" aria-label={`Reconstitution : ${phase.titre}`}>
          <defs>
            <radialGradient id="anim-parchemin" cx="50%" cy="42%" r="78%">
              <stop offset="0%" stopColor="#f4ecd6" />
              <stop offset="65%" stopColor="#ecdfc0" />
              <stop offset="100%" stopColor="#ddc9a0" />
            </radialGradient>
            <marker id="arr-byz" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4.2" markerHeight="4.2" orient="auto-start-reverse">
              <path d="M0,0 L6,3 L0,6 z" fill={SIDE_COLORS.byz.fill} />
            </marker>
            <marker id="arr-ennemi" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4.2" markerHeight="4.2" orient="auto-start-reverse">
              <path d="M0,0 L6,3 L0,6 z" fill={SIDE_COLORS.ennemi.fill} />
            </marker>
            <marker id="arr-allie" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4.2" markerHeight="4.2" orient="auto-start-reverse">
              <path d="M0,0 L6,3 L0,6 z" fill={SIDE_COLORS.allie.fill} />
            </marker>
          </defs>

          <rect x={0} y={0} width={100} height={62} fill="url(#anim-parchemin)" />
          <rect x={0.6} y={0.6} width={98.8} height={60.8} className="anim-cadre" />

          {anim.terrain.map((t, i) => (
            <TerrainShape key={i} t={t} />
          ))}

          <g className="anim-compass" transform="translate(94.5,9)">
            <circle r={4} />
            <path d="M 0,-3 L 1.1,1.7 L 0,0.8 L -1.1,1.7 Z" />
            <text y={-4.8} textAnchor="middle">N</text>
          </g>

          {arrows.map((a) => (
            <path
              key={`${a.id}-${phaseIndex}`}
              d={a.d}
              pathLength={100}
              className={`anim-arrow ${a.side}`}
              markerEnd={`url(#arr-${a.side})`}
            />
          ))}

          {anim.units.map((unit) => {
            const state = positions[unit.id];
            if (!state) return null;
            const visible = state.visible !== false;
            const angle = (state.angle ?? 0) + (state.routed ? 16 : 0);
            return (
              <g
                key={unit.id}
                className={`anim-unit${state.routed ? " routed" : ""}`}
                style={{
                  transform: `translate(${state.x}px, ${state.y}px)`,
                  opacity: visible ? (state.routed ? 0.42 : 1) : 0,
                }}
              >
                {unit.kind !== "feu" && (
                  <ellipse cx={0.5} cy={1.6} rx={4.4} ry={1.3} className="anim-ombre" />
                )}
                <g style={{ transform: `rotate(${angle}deg)` }}>
                  <UnitShape unit={unit} />
                </g>
                <text y={6} className="anim-unit-label" textAnchor="middle">
                  {unit.label}
                </text>
              </g>
            );
          })}

          {clashes.map((c, i) => (
            <g
              key={`clash-${i}-${phaseIndex}`}
              className="anim-clash"
              style={{ transform: `translate(${c.x}px, ${c.y}px)` }}
            >
              <circle r={3.6} className="anim-clash-glow" />
              <text y={1.7} textAnchor="middle" className="anim-clash-ico">
                ⚔
              </text>
            </g>
          ))}
        </svg>

        {playing && (
          <div className="battle-anim-progress">
            <span key={phaseIndex} />
          </div>
        )}

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
          <button type="button" onClick={togglePlay} aria-label={playing ? "Pause" : "Lecture"}>
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
          <div className="battle-anim-legend" aria-hidden="true">
            <span><i style={{ background: SIDE_COLORS.byz.fill }} /> Byzantins</span>
            <span><i style={{ background: SIDE_COLORS.allie.fill }} /> Alliés</span>
            <span><i style={{ background: SIDE_COLORS.ennemi.fill }} /> Adversaires</span>
          </div>
        </div>
      </div>
    </>
  );
}
