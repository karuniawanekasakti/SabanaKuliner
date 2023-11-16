/* eslint-disable no-undef */
import FavoriteButtonInitiator from '../src/scripts/utils/favorite-btn-initiator';
import FavoriteRestaurantDB from '../src/scripts/data/favoriterestaurant-db';
import * as TestFactories from './helpers/test.Factories';

// eslint-disable-next-line no-undef
describe('Favorite a restaurant', () => {
  // eslint-disable-next-line no-undef
  it('should show the favorite button when the restaurant has not been favorited before', async () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';

    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="favorite this restaurant"]'))
      .toBeTruthy();
  });

  // eslint-disable-next-line no-undef
  it('should not show the unlike button when the movie has not been liked before', async () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1,
      },
    });
    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="unfavorite this restaurant"]')).toBeFalsy();
  });

  // eslint-disable-next-line no-undef
  it('should be able to like the restaurant', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
    const resto = await FavoriteRestaurantDB.getRestaurant(1);
    // eslint-disable-next-line no-undef
    expect(resto).toEqual({ id: 1 });

    await FavoriteRestaurantDB.deleteRestaurant(1);
  });

  // eslint-disable-next-line no-undef
  it('should not add a restaurant again when its already favorited', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteRestaurantDB.putRestaurant({ id: 1 });
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
    // tidak ada film yang ganda
    // eslint-disable-next-line no-undef
    expect(await FavoriteRestaurantDB.getAllRestaurants()).toEqual([{ id: 1 }]);

    await FavoriteRestaurantDB.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({});

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    // eslint-disable-next-line no-undef
    expect(await FavoriteRestaurantDB.getAllRestaurants()).toEqual([]);
  });
});
