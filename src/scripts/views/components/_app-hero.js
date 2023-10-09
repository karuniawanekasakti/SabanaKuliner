class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
      <picture>
        <source media="(max-width: 600px)" srcset="../images/heros/hero-image_2.jpg">
        <img src="../images/heros/hero-image_2.jpg"
          alt="Gambar macam-macam makanan yang diterapkan di komponen hero">
      </picture>
      <div class="inner">
          <h1 class="title">Sabana Kuliner</h1>
          <p class="subtitle">
              Cari tempat makan terbaik di sekitar Anda
          </p>
      </div>
    </div>
    `;
  }
}

customElements.define('app-hero', AppHero);