
function Header() {
  return (
    <header className="site-header">
      <img
        src="/assets/logo.svg"
        alt="Erased Tapes logo"
        className="site-logo"
      />

      <nav className="main-nav">
        <a href="#blog">Our Blog</a>
        <a href="#artists">Our Artists</a>
        <a href="#story">Our Story</a>
      </nav>
    </header>
  );
}

export default Header;
