import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Battle, VictoryType } from "../types";
import { VICTORY_TYPE_COLORS, VICTORY_TYPE_LABELS } from "../types";

interface Props {
  /** Batailles dans l'ordre chronologique. */
  battles: Battle[];
  /** Nombre de batailles déjà « révélées » par l'animation. */
  revealedCount: number;
  activeTypes: Set<VictoryType>;
  selectedId: string | null;
  onSelect: (id: string) => void;
}

const MAP_BOUNDS: L.LatLngBoundsExpression = [
  [33.5, 7.0],
  [46.5, 45.0],
];

function makeIcon(battle: Battle, selected: boolean): L.DivIcon {
  const color = VICTORY_TYPE_COLORS[battle.type];
  return L.divIcon({
    className: "battle-marker-wrapper",
    html: `<span class="battle-marker${selected ? " selected" : ""}" style="--marker-color:${color}"></span>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
  });
}

export function AnimatedMap({
  battles,
  revealedCount,
  activeTypes,
  selectedId,
  onSelect,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  // Initialisation unique de la carte.
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    const map = L.map(containerRef.current, {
      scrollWheelZoom: false,
      minZoom: 4,
      maxZoom: 10,
    });
    map.fitBounds(MAP_BOUNDS);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; les contributeurs <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    mapRef.current = map;
    return () => {
      map.remove();
      mapRef.current = null;
      markersRef.current.clear();
    };
  }, []);

  // Synchronisation des marqueurs avec l'état (révélation + filtres + sélection).
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    const markers = markersRef.current;

    battles.forEach((battle, index) => {
      const visible = index < revealedCount && activeTypes.has(battle.type);
      const existing = markers.get(battle.id);

      if (visible && !existing) {
        const marker = L.marker(battle.coords, {
          icon: makeIcon(battle, battle.id === selectedId),
          title: `${battle.nom} (${battle.annee})`,
        });
        marker.bindTooltip(
          `<strong>${battle.nom}</strong> — ${battle.annee}<br/><em>${VICTORY_TYPE_LABELS[battle.type]}</em>`,
          { direction: "top", offset: [0, -10] }
        );
        marker.on("click", () => onSelectRef.current(battle.id));
        marker.addTo(map);
        markers.set(battle.id, marker);
      } else if (!visible && existing) {
        existing.remove();
        markers.delete(battle.id);
      } else if (existing) {
        existing.setIcon(makeIcon(battle, battle.id === selectedId));
      }
    });
  }, [battles, revealedCount, activeTypes, selectedId]);

  // Centrage doux sur la bataille sélectionnée.
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !selectedId) return;
    const battle = battles.find((b) => b.id === selectedId);
    if (battle) {
      map.panTo(battle.coords, { animate: true });
    }
  }, [battles, selectedId]);

  return (
    <div
      ref={containerRef}
      className="animated-map"
      role="application"
      aria-label="Carte animée des victoires byzantines"
    />
  );
}
