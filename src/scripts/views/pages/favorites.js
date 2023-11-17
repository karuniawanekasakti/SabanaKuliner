import FavoriteRestaurantDB from '../../data/favoriterestaurant-db';
import { createRestoItemTemplate } from '../templates/template-creator';
import '../components/_resto-favorite';

const Favorite = {
  async render() {
    return `
    <h2>
      <span class="title-content">Favorite Restaurant</span>
    </h2>
      <resto-favorite></resto-favorite>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantDB.getAllRestaurants();
    const restaurantsContainer = document.querySelector('.detail');
    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = '<div class="row"><h3 id="resto-item__not__found">Tidak ada restaurant untuk ditampilkan</h3></div>';
    } else {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
      });
    }
  },
};

export default Favorite;
