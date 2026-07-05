export function Header() {
  return (
    <header className="site-header">
      <div className="header-ornament" aria-hidden="true">
        ☧
      </div>
      <h1>Les grandes victoires militaires de Byzance</h1>
      <p className="header-subtitle">
        De la fondation de Constantinople (330) à la fin de l'Empire romain
        d'Orient (1453) — carte animée, frise chronologique et fiches
        historiques prudentes et sourcées.
      </p>
      <nav className="header-nav" aria-label="Navigation principale">
        <a href="#carte">Carte animée</a>
        <a href="#frise">Frise</a>
        <a href="#themes">Dossiers</a>
        <a href="#defaites">Défaites en contexte</a>
        <a href="#sources">Sources</a>
      </nav>
    </header>
  );
}
