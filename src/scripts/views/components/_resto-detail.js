class RestoDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div id="content" tabindex="0">
      <div id="resto-detail" class="row"></div>
      <div id="favoriteButtonContainer"></div>
    </div>
    `;
  }
}

customElements.define('resto-detail', RestoDetail);
