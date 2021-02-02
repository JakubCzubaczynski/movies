"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _categorySliderUtils = _interopRequireDefault(require("./categorySliderUtils.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var displayCategorySlider = function displayCategorySlider(cond) {
  var imagePath, x, popular, wrapper;
  return regeneratorRuntime.async(function displayCategorySlider$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          imagePath = "https://image.tmdb.org/t/p/w220_and_h330_face";
          x = localStorage.getItem(cond);
          popular = JSON.parse(x);
          wrapper = document.querySelector(".".concat(cond, " .slider-section-wrapper"));
          popular.results.map(function (item) {
            wrapper.innerHTML += "\n    <div data-id='".concat(item.id, "' class=\"item ").concat(cond, "\">\n    <img class=\"item-img\" src='").concat(imagePath + item.poster_path, "' alt=''>\n    <p class=\"item-vote-label\"><i class=\"fas fa-star\"></i>").concat(item.vote_average, "</p>\n    <p class=\"item-title-label\">").concat(item.title, "</p>\n    <p class=\"item-release-label\">").concat(item.release_date, "</p>\n    \n    </div>\n    ");
          });
          (0, _categorySliderUtils["default"])(cond);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = displayCategorySlider;
exports["default"] = _default;