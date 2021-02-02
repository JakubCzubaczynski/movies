

import categorySliderUtils from './categorySliderUtils.js';

const displayCategorySlider = async (cond) =>{

const imagePath = `https://image.tmdb.org/t/p/w220_and_h330_face`;
const x = localStorage.getItem(cond);
const popular = JSON.parse(x);

const wrapper = document.querySelector(`.${cond} .slider-section-wrapper`);



popular.results.map((item) => {
    wrapper.innerHTML += `
    <div data-id='${item.id}' class="item ${cond}">
    <img class="item-img" src='${imagePath+item.poster_path}' alt=''>
    <p class="item-vote-label"><i class="fas fa-star"></i>${item.vote_average}</p>
    <p class="item-title-label">${item.title}</p>
    <p class="item-release-label">${item.release_date}</p>
    
    </div>
    `;

})

categorySliderUtils(cond);

} 
export default displayCategorySlider;