import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestoDetailTemplate, createRestoReviewTemplate, createRiviewFormTemplate } from '../templates/template-creator';
import FavoriteButtonInitiator from '../../utils/favorite-btn-initiator';
import CONFIG from '../../globals/config';

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
    const openDB = indexedDB.open(CONFIG.DATABASE_NAME, CONFIG.DATABASE_VERSION);
    openDB.onerror = function (error) {
      console.error('Error opening the database:', error.target.error);
    };

    openDB.onsuccess = function (a) {
      const db = a.target.result;

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.querySelector('#name').value;
        const review = document.querySelector('#review').value;
        const id = document.querySelector('[name="id"]').value;

        const data = {
          id,
          name,
          review,
        };

        const transaction = db.transaction([CONFIG.OBJECT_STORE_NAME], 'readwrite');
        const store = transaction.objectStore(CONFIG.OBJECT_STORE_NAME);

        function refreshPage() {
          window.location.reload();
        }

        transaction.oncomplete = function () {
          console.log('Transaction completed');
        };

        transaction.onerror = function (event) {
          console.error('Transaction error:', event.target.error);
        };

        // Add or update the review data in the object store
        store.put(data);

        // Send the review data to the API
        try {
          const response = await fetch(`${CONFIG.BASE_URL}review`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });

          if (!response.ok) {
            window.alert('Review gagal ditambahkan');
          } else {
            window.alert('Review berhasil ditambahkan');
            refreshPage();
          }
        } catch (error) {
          window.alert(`Error saat mengirim review ke API: ${error}`);
        }
      });
    };

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
