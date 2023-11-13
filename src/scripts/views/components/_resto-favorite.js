class RestoFavorite extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div id="content" tabindex="0">
      <div class="detail"></div>
    </div>
    `;
  }
}

customElements.define('resto-favorite', RestoFavorite);
