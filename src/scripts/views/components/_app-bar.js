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
      <button class="menu-button" title="canvas-button" aria-label="canvas-button">
          <i class="fa-solid fa-x"></i>
          <i class="fa-solid fa-bars"></i>
      </button>
      <ul class="menu-list">
          <li><a href="./" title="Home">Home</a></li>
          <li><a href="#" title="Favorite">Favorite</a></li>
          <li><a href="https://github.com/karuniawanekasakti" title="About Us" target="_blank" rel="noreferrer">About
                  Us</a></li>
      </ul>
    </nav>
    `;
    }
}

customElements.define('app-bar', AppBar);
