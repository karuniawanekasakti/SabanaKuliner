class RestoDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `

    <div id="resto-detail" class="row"></div>
    <div id="favoriteButtonContainer"></div>
    `;
  }
}

customElements.define('resto-detail', RestoDetail);
