import getData from './getData.js';
import categorySliderUtils from './categorySliderUtils.js';

const displayCategorySlider = async (cond, url) => {
  const key = '25141123a6896a890d381900b61e2af6';
  const data = await getData(url);
  const imagePath = `https://image.tmdb.org/t/p/w220_and_h330_face`;

  const wrapper = document.querySelector(`.${cond} .slider-section-wrapper`);
  console.log(cond);
  console.log(wrapper);
  data.results.map((item) => {
    wrapper.innerHTML += `
    <div data-id='${item.id}' class="item ${cond}">
    <img class="item-img" src='${imagePath + item.poster_path}' alt=''>
    
    <p class="item-vote-label"><i class="fas fa-star"></i>${
      item.vote_average
    }</p>
    <p class="item-title-label">${item.title}</p>
    <p class="item-release-label">${item.release_date}</p>
    
    </div>
    `;
  });

  categorySliderUtils(cond);
};
export default displayCategorySlider;
