class RestoFavorite extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <main id="content" tabindex="0">
      <div class="detail"></div>
    </main>
    `;
  }
}

customElements.define('resto-favorite', RestoFavorite);
