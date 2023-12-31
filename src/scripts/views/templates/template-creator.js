import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => `
  <div class="col" id="card-item">
      <div class="card">
          <div class="card-img">
              <div class="city-label">
                  <span class="city-label-text">
                      Kota ${resto.city}
                  </span>
              </div>
              <img class="lazyload" src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'images/heros/hero-image_2.jpg'}" alt="${resto.name}" crossorigin="anonymous">
          </div>
          <div class="card-body">
              <div class="rating">
                  <i class="fas fa-star"></i>
                  <span>${resto.rating}</span>
              </div>
              <h3 class="card-title">
                  <a href="./#/detail/${resto.id}" title="Restaurant Detail">${resto.name}</a>
              </h3>
              <p class="card-text">${resto.description}</p>
          </div>
      </div>
  </div>
`;

const createRestoDetailTemplate = (resto) => `
  <div class="resto-detail">
  
    <h1 class="title">
      ${resto.name}
    </h1>
    <img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" crossorigin="anonymous"/>

    <div class="info">
      <h2>Information</h2>
      <ul>
        <li>
          <h3>Kota</h3>
          <p>${resto.city}</p>
        </li>
        <li>
          <h3>Alamat</h3>
          <p>${resto.address}</p>
        </li>
        <li>
          <h3>Rating</h3>
          <p>${resto.rating}</p>
        </li>
        <li>
          <h3>Foods Menu</h3>
          <span id="food">
          <p>${resto.menus.foods.map((food) => food.name).join(', ')}</p>
          </span>
        </li>
        <li>
          <h3>Drinks Menu</h3>
          <span id="drink">
            <p>${resto.menus.drinks.map((food) => food.name).join(', ')}</p>
          </span>
        </li>
      </ul>
    </div>

    <div class="overview">
      <h2>Overview</h2>
      <p>${resto.description}</p>
    </div>

  </div>
`;

const createRestoReviewTemplate = (reviews) => `
  <div class="review">
    <p>
    <span class="name">${reviews.name}</span> &bull; <span class="date">${reviews.date}</span>
    </p>
    <p>${reviews.review}</p>
  </div>
`;

const createRiviewFormTemplate = (resto) => `
  <div class="review-form">
  <form method="POST" action="${CONFIG.BASE_URL}/review" id="form-review">
  <input type="hidden" name="id" value="${resto.id}" />
  <div class="review-form-full">
    <input type="text" placeholder="Name" id="name" name="name" class="form-input" 
    required data-error="Please enter your name">
  </div>
  <div class="review-form-full">
    <textarea class="form-input" id="review" name="review" placeholder="Enter your review" rows="5" data-error="Write your review" required></textarea>
  </div>
  <div class="review-form-full">
    <input type="submit" role="button" value="Submit" class="review-form-submit" />
  </div>
</form>
  </div>
`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="favoriteButton" class="favorite">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="favoriteButton" class="favorite">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createRestoReviewTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
  createRiviewFormTemplate,
};
