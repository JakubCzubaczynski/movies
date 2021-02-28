import categorySliderUtils from './categorySliderUtils.js';
const displayWatchList = () => {
  const imagePath = `https://image.tmdb.org/t/p/w220_and_h330_face`;
  const wrapper = document.querySelector(`.watchlist .slider-section-wrapper`);
  const data = JSON.parse(localStorage.getItem('watchlist'));
  wrapper.innerHTML = '';
  if (data) {
    data.map((item) => {
      wrapper.innerHTML += `
    <div data-id='${item.id}' class="item watchlist">
    <img class="item-img" src='${imagePath + item.poster_path}' alt=''>
    
    <p class="item-vote-label"><i class="fas fa-star"></i>${
      item.vote_average
    }</p>
    <p class="item-title-label">${item.title}</p>
    <p class="item-release-label">${item.release_date}</p>
    
    </div>
    `;
    });
    categorySliderUtils('watchlist');
  } else {
    $(`.watchlist .next-icon-element`).hide();
    $(`.watchlist .prev-icon-element`).hide();
    console.log('chowam');
    wrapper.innerHTML = `<h2 style='text-align:center;width:100%'>Watch List is empty...</h2>`;
  }
};
export default displayWatchList;
