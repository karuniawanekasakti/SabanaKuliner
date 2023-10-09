import data from '../../../public/data/DATA.json';

class RestoList extends HTMLElement {
  connectedCallback() {
    this.cardContainer = document.createElement('div');
    this.cardContainer.classList.add('detail');
    this.appendChild(this.cardContainer); // Append the cardContainer to the DOM
    this.render();
  }

  render() {
    let restaurant = '';
    data.restaurants.forEach(resto => {
      restaurant += `
      <div class="col"> 
        <div class="card">
            <div class="card-img">
                <div class="city-label">
                    <span class="city-label-text">
                        Kota ${resto.city}
                    </span>
                </div>
                <img src="${resto.pictureId}" alt="Food at${resto.name}">
            </div>
            <div class="card-body">
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <span>${resto.rating}</span>
                </div>
                <h3 class="card-title">
                    <a href="#" title="Food at ${resto.name}">${resto.name}</a>
                </h3>
                <p class="card-text">${resto.description}</p>
            </div>
        </div>
      </div>
      `;
    });
    this.cardContainer.innerHTML = restaurant;
  }
}

customElements.define('resto-list', RestoList);