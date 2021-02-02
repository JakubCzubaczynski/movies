"use strict";

var _displayActors = _interopRequireDefault(require("./src/displayActors.js"));

var _displayCategorySlide = _interopRequireDefault(require("./src/displayCategorySlide.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var key = '25141123a6896a890d381900b61e2af6';
var trending = "https://api.themoviedb.org/3/movie/popular?api_key=".concat(key, "&language=en-US&page=1");
var discover = "https://api.themoviedb.org/3/discover/movie?api_key=".concat(key, "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2019");
var people = "https://api.themoviedb.org/3/trending/person/week?api_key=25141123a6896a890d381900b61e2af6";
var top = "https://api.themoviedb.org/3/discover/movie?api_key=".concat(key, "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=8.5");
(0, _displayCategorySlide["default"])('popular');
(0, _displayCategorySlide["default"])('discover');
(0, _displayCategorySlide["default"])('top');
(0, _displayActors["default"])(); // const getData = async()=>{
// const u = await fetch(top).then(data=>data.json()).then(
//     item=>{return item}
// )
// console.log(u);
// localStorage.setItem('top',JSON.stringify(u));
// }
// getData();
// const g =localStorage.getItem('discover');
// console.log(JSON.parse(g));

var imagePath = "https://image.tmdb.org/t/p/w220_and_h330_face";
var x = localStorage.getItem('people');
var popular = JSON.parse(x);
var wrapper = document.querySelector(".actors");
console.log(wrapper);