import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async getResto() {
    const response = await fetch(API_ENDPOINT.RESTO);
    const responseJson = await response.json();

    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.RESTO_DETAIL(id));
    return response.json();
  }

  static async addReview(review) {
    const response = await fetch(API_ENDPOINT.RESTO_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
    return response.json();
  }
}

export default RestaurantSource;
