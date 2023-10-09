class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav id="nav" class="menu">
      <h1>
        <a href="./" title="Sabana Kuliner">Sabana Kuliner</a>
      </h1>
      <button class="menu-button" title="off canvas button" aria-label="off canvas button">
          <i class="fa-regular fa-circle-xmark"></i>
          <i class="fa-solid fa-bars"></i>
      </button>
      <ul class="menu-list">
          <li><a href="./" title="Home">Home</a></li>
          <li><a href="#/favorite" title="Favorite">Favorite</a></li>
          <li><a href="https://www.linkedin.com/in/virgiawankusuma" title="About Us" target="_blank" rel="noreferrer">About
                  Us</a></li>
      </ul>
    </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);