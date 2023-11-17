class RestoList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      
      <div class="detail"></div>
      `;
  }
}

customElements.define('resto-list', RestoList);
