import { useCallback, useEffect, useMemo, useState } from "react";
import { Header } from "./components/Header";
import { AnimatedMap } from "./components/AnimatedMap";
import { Timeline } from "./components/Timeline";
import { BattleCard } from "./components/BattleCard";
import { VictoryFilters } from "./components/VictoryFilters";
import { PeriodSection } from "./components/PeriodSection";
import { Sources } from "./components/Sources";
import { battlesChronological } from "./data/battles";
import { defeats } from "./data/defeats";
import { sections } from "./data/sections";
import { VICTORY_TYPE_LABELS, type VictoryType } from "./types";

const ALL_TYPES = Object.keys(VICTORY_TYPE_LABELS) as VictoryType[];
/** Cadence d'apparition des batailles pendant la lecture (ms). */
const PLAY_INTERVAL_MS = 1600;

export default function App() {
  const battles = battlesChronological;
  const [revealedCount, setRevealedCount] = useState(battles.length);
  const [playing, setPlaying] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeTypes, setActiveTypes] = useState<Set<VictoryType>>(
    () => new Set(ALL_TYPES)
  );

  // Lecture chronologique : une bataille apparaît à intervalle régulier.
  useEffect(() => {
    if (!playing) return;
    const interval = window.setInterval(() => {
      setRevealedCount((count) => {
        if (count >= battles.length) {
          setPlaying(false);
          return count;
        }
        return count + 1;
      });
    }, PLAY_INTERVAL_MS);
    return () => window.clearInterval(interval);
  }, [playing, battles.length]);

  // Pendant la lecture, la fiche suit la dernière bataille révélée.
  useEffect(() => {
    if (playing && revealedCount > 0) {
      setSelectedId(battles[revealedCount - 1].id);
    }
  }, [playing, revealedCount, battles]);

  const togglePlay = useCallback(() => {
    setPlaying((p) => {
      if (!p && revealedCount >= battles.length) {
        // Relire depuis le début si l'animation est terminée.
        setRevealedCount(0);
        setSelectedId(null);
      }
      return !p;
    });
  }, [revealedCount, battles.length]);

  const reset = useCallback(() => {
    setPlaying(false);
    setRevealedCount(0);
    setSelectedId(null);
  }, []);

  const showAll = useCallback(() => {
    setPlaying(false);
    setRevealedCount(battles.length);
  }, [battles.length]);

  const selectIndex = useCallback(
    (index: number) => {
      setPlaying(false);
      setRevealedCount((count) => Math.max(count, index + 1));
      setSelectedId(battles[index].id);
    },
    [battles]
  );

  const selectBattleFromSection = useCallback(
    (id: string) => {
      const index = battles.findIndex((b) => b.id === id);
      if (index === -1) return;
      selectIndex(index);
      document
        .getElementById("carte")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [battles, selectIndex]
  );

  const toggleType = useCallback((type: VictoryType) => {
    setActiveTypes((prev) => {
      const next = new Set(prev);
      if (next.has(type)) {
        next.delete(type);
      } else {
        next.add(type);
      }
      return next;
    });
  }, []);

  const selectedBattle = useMemo(
    () => battles.find((b) => b.id === selectedId) ?? null,
    [battles, selectedId]
  );

  return (
    <div className="app">
      <Header />

      <main>
        <section className="map-section" id="carte">
          <VictoryFilters activeTypes={activeTypes} onToggle={toggleType} />
          <div className="map-and-card">
            <AnimatedMap
              battles={battles}
              revealedCount={revealedCount}
              activeTypes={activeTypes}
              selectedId={selectedId}
              onSelect={setSelectedId}
            />
            {selectedBattle && (
              <BattleCard
                battle={selectedBattle}
                onClose={() => setSelectedId(null)}
              />
            )}
          </div>
          <Timeline
            battles={battles}
            revealedCount={revealedCount}
            selectedId={selectedId}
            playing={playing}
            onTogglePlay={togglePlay}
            onReset={reset}
            onShowAll={showAll}
            onSelectIndex={selectIndex}
          />
        </section>

        <section className="themes" id="themes">
          <h2>Comprendre les victoires byzantines</h2>
          {sections.map((section) => (
            <PeriodSection
              key={section.id}
              section={section}
              battles={battles}
              onBattleClick={selectBattleFromSection}
            />
          ))}
        </section>

        <section className="defeats" id="defaites">
          <h2>Les défaites majeures, en contexte</h2>
          <p className="defeats-intro">
            Un récit honnête des succès byzantins exige de rappeler les
            désastres qui les encadrent. Les défaites ci-dessous ne figurent
            volontairement <strong>pas</strong> sur la carte des victoires :
            elles sont évoquées ici uniquement pour situer les triomphes dans
            leur véritable contexte.
          </p>
          <div className="defeats-grid">
            {defeats.map((defeat) => (
              <article key={defeat.nom} className="defeat-card">
                <h3>
                  {defeat.nom} <span className="defeat-year">({defeat.annee})</span>
                </h3>
                <p className="defeat-adversaire">Face à : {defeat.adversaire}</p>
                <p>{defeat.contexte}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Sources />
    </div>
  );
}
