// index.js
const ramenUrl = 'http://localhost:3000/ramens'

// Callbacks
const handleClick = (ramenDish) => {
  // Add code
  let bigRamenImg = document.querySelector('.detail-image');
  bigRamenImg.src = ramenDish.image;
  let bigRamenName = document.querySelector('.name');
  bigRamenName.textContent = ramenDish.name;
  let bigRamenRestaurantName = document.querySelector('.restaurant');
  bigRamenRestaurantName.textContent = ramenDish.restaurant;
  let ramenRating = document.querySelector('#rating-display');
  ramenRating.textContent = ramenDish.rating;
  let ramenComment = document.querySelector('#comment-display');
  ramenComment.textContent = ramenDish.comment;
};

const addSubmitListener = () => {
  // Add code

  const ramenSubmission = document.getElementById('new-ramen');
  ramenSubmission.addEventListener('submit', (event) => {
    event.preventDefault();

    let newRamen = {
      name: event.target.name.value,
      restaurant: event.target.restaurant.value,
      image: event.target.image.value,
      rating: event.target.rating.value,
      comment: event.target['new-comment'].value
    }
    renderDish(newRamen);
  })

}

const displayRamens = () => {
  // Add code
  fetch(ramenUrl)
    .then((response) => response.json())
    .then((ramensData) => {
      ramensData.forEach((ramenDish) => {
        renderDish(ramenDish)
      })
    }
    );
};

const renderDish = (ramenDish) => {
  let div = document.getElementById('ramen-menu');
  const ramenImg = document.createElement('img');
  ramenImg.src = ramenDish.image;

  div.append(ramenImg);
  ramenImg.addEventListener('click', () => handleClick(ramenDish))
};

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
  displayRamens();
  addSubmitListener();
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
