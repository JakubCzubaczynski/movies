"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _categorySliderUtils = _interopRequireDefault(require("./categorySliderUtils.js"));

var _getData = _interopRequireDefault(require("./getData.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var displayActors = function displayActors() {
  var url, imagePath, x, popular, wrapper;
  return regeneratorRuntime.async(function displayActors$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = "https://api.themoviedb.org/3/trending/person/week?api_key=25141123a6896a890d381900b61e2af6";
          imagePath = "https://image.tmdb.org/t/p/w220_and_h330_face";
          x = localStorage.getItem('people');
          popular = JSON.parse(x); // const popular = await getData(url);

          console.log('actors');
          console.log(popular);
          wrapper = document.querySelector(".actors .slider-section-wrapper");
          console.log(wrapper);
          popular.results.map(function (item) {
            if (item.profile_path != null) {
              wrapper.innerHTML += "\n        <div data-id=\"".concat(item.id, "\" class=\"item-2 actors\">\n        <img class=\"item-2-img\" src='").concat(imagePath + item.profile_path, "' alt=''>\n        <p class=\"item-vote-label\"><i class=\"fas fa-star\"></i>").concat(item.popularity, "</p>\n        <p class=\"item-title-label\">").concat(item.name, "</p>\n      \n        \n        </div>\n        ");
            }
          });
          (0, _categorySliderUtils["default"])('actors');

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = displayActors;
exports["default"] = _default;