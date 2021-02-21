import displayActors from './src/displayActors.js';
import getData from './src/getData.js';
import displayCategorySlider from './src/displayCategorySlide.js';
import displayGenre from './src/displayGenre.js';
import asideMenu from './src/asideMenu.js';
import displayWatchList from './src/displayWatchList.js';
import asideSign from './src/asideSign.js';
const key = '25141123a6896a890d381900b61e2af6';
let trending = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`;
let discover = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2019`;
let people = `https://api.themoviedb.org/3/trending/person/week?api_key=25141123a6896a890d381900b61e2af6`;
let top = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=8.5`;
const preloader = document.querySelector('.preloader');

const initialLoading = async () => {
  window.addEventListener('load', () => {
    preloader.classList.remove('preloader');
  });
  asideMenu();
  asideSign();

  displayCategorySlider('popular', trending);
  displayCategorySlider('discover', discover);

  displayWatchList();
  displayActors(people);
  displayGenre();
};

initialLoading();
