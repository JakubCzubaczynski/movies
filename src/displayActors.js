import categorySliderUtils from './categorySliderUtils.js';
import getData from './getData.js';
const displayActors = async () =>{
const url = `https://api.themoviedb.org/3/trending/person/week?api_key=25141123a6896a890d381900b61e2af6`;
const imagePath = `https://image.tmdb.org/t/p/w220_and_h330_face`;
const x = localStorage.getItem('people');
const popular = JSON.parse(x);
// const popular = await getData(url);
console.log('actors');
console.log(popular);
const wrapper = document.querySelector(`.actors .slider-section-wrapper`);

console.log(wrapper);

popular.results.map((item) => {
    if(item.profile_path!=null){

        wrapper.innerHTML += `
        <div data-id="${item.id}" class="item-2 actors">
        <img class="item-2-img" src='${imagePath+item.profile_path}' alt=''>
        <p class="item-vote-label"><i class="fas fa-star"></i>${item.popularity}</p>
        <p class="item-title-label">${item.name}</p>
      
        
        </div>
        `;
    }

})
categorySliderUtils('actors');
}
export default displayActors;