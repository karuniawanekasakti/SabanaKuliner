class RestoReview extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="review-container"><h2>Reviews</h2>
    <div id="resto-review"></div>
    <h2>Add Your Review</h2>
    <div class="form-review"></div>
    </div>
    
    `;
  }
}

customElements.define('resto-review', RestoReview);
