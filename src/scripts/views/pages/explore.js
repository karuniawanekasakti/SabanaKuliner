import RestaurantSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Explore = {
  async render() {
    return `
    <h2><span class="title-content">Explore Restaurants</span></h2>
    <resto-list></resto-list>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('.detail');
    restaurantsContainer.innerHTML = '<p>Loading...</p>'; // Display a loading message
    try {
      const restaurants = await RestaurantSource.getResto();
      if (restaurants.length === 0) {
        // If there are no restaurants, display a message
        restaurantsContainer.innerHTML = '<p>No restaurants available.</p>';
        console.log('data not loaded');
      } else {
        // Render the restaurants
        restaurantsContainer.innerHTML = ''; // Clear the loading message
        restaurants.forEach((restaurant) => {
          restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
        });
        console.log('data loaded');
      }
    } catch (error) {
      // Handle errors, e.g., display an error message
      restaurantsContainer.innerHTML = '<p>Error loading data.</p>';
      console.error(error);
    }
  },

};

export default Explore;
