import { bibliography } from "../data/bibliography";

/** Bibliographie et note de méthode, en pied de page. */
export function Sources() {
  return (
    <footer className="sources" id="sources">
      <h2>Sources et bibliographie</h2>
      <p className="sources-method">
        <strong>Note de méthode.</strong> Les récits de batailles médiévales
        reposent sur des sources partiales, souvent tardives, et presque jamais
        sur des décomptes fiables. Ce site distingue systématiquement victoire
        tactique et victoire stratégique, indique le niveau de certitude des
        effectifs (<em>connu / estimé / discuté / non fiable</em>) et signale
        les points sur lesquels les historiens divergent. Aucun chiffre précis
        n'a été inventé : lorsque les sources sont contradictoires ou
        invraisemblables, les effectifs sont donnés comme « discutés » ou
        « non fiables ».
      </p>
      <ul className="bibliography">
        {bibliography.map((entry) => (
          <li key={entry.titre}>
            <strong>{entry.auteur}</strong>, <em>{entry.titre}</em> —{" "}
            {entry.details}
          </li>
        ))}
      </ul>
      <p className="sources-footer">
        Site pédagogique sans but lucratif. Fond de carte ©&nbsp;contributeurs
        OpenStreetMap. Les coordonnées des champs de bataille sont
        approximatives.
      </p>
    </footer>
  );
}
