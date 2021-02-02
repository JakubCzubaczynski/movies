import displayActors from './src/displayActors.js';
import displayCategorySlider from './src/displayCategorySlide.js';
const key = '25141123a6896a890d381900b61e2af6';
let trending = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`;
let discover = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2019`;
let people = `https://api.themoviedb.org/3/trending/person/week?api_key=25141123a6896a890d381900b61e2af6`;
let top= `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=8.5`;

displayCategorySlider('popular');
displayCategorySlider('discover');
displayCategorySlider('top');
displayActors();

// const getData = async()=>{

// const u = await fetch(top).then(data=>data.json()).then(
//     item=>{return item}
// )
// console.log(u);
// localStorage.setItem('top',JSON.stringify(u));
// }

// getData();
// const g =localStorage.getItem('discover');
// console.log(JSON.parse(g));

const imagePath = `https://image.tmdb.org/t/p/w220_and_h330_face`;
const x = localStorage.getItem('people');
const popular = JSON.parse(x);

const wrapper = document.querySelector(`.actors`);

console.log(wrapper);
