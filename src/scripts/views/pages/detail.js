import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestoDetailTemplate, createRestoReviewTemplate, createRiviewFormTemplate } from '../templates/template-creator';
import FavoriteButtonInitiator from '../../utils/favorite-btn-initiator';

const Detail = {
  async render() {
    return `
    <h2><span class="title-content">Detail Restaurants</span></h2>
      <resto-detail></resto-detail>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantById = await RestaurantSource.detailResto(url.id);
    const detail = restaurantById.restaurant;
    const restoContainer = document.querySelector('#resto-detail');
    restoContainer.innerHTML = createRestoDetailTemplate(detail);

    restoContainer.innerHTML += `
      <resto-review></resto-review>
    `;

    const restoReview = document.querySelector('#resto-review');
    detail.customerReviews.forEach((review) => {
      restoReview.innerHTML += createRestoReviewTemplate(review);
    });

    const formRiview = document.querySelector('.form-review');
    formRiview.innerHTML += createRiviewFormTemplate(restaurantById.restaurant);

    const form = document.querySelector('#form-review');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.querySelector('#name').value;
      const review = document.querySelector('#review').value;
      const id = document.querySelector('[name="id"]').value;
      RestaurantSource.addReview({ id, name, review });
      form.reset();
    });

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: detail.id,
        name: detail.name,
        city: detail.city,
        description: detail.description,
        pictureId: detail.pictureId,
        rating: detail.rating,
      },
    });
  },
};

export default Detail;
