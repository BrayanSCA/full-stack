customElements.define('star-rating',
  class extends HTMLElement {
    constructor(){
      super(); //always call "super()" firts in constructor
      const starRating = document.getElementById('star-rating-template').content;
      const shadowRoot = this.attachShadow({
        mode: 'open'
      });
      shadowRoot.appendChild(starRating.cloneNode(true));
    }
  }
)