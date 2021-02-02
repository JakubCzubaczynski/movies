"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getData = _interopRequireDefault(require("./getData.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var displayActorDetails = function displayActorDetails(id, element) {
  var key, urlPerson, posterPath, data, newElement, closeBtn;
  return regeneratorRuntime.async(function displayActorDetails$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          key = '25141123a6896a890d381900b61e2af6';
          urlPerson = "https://api.themoviedb.org/3/person/".concat(id, "?api_key=").concat(key, "&language=en-US");
          posterPath = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";
          data = JSON.parse(localStorage.getItem('actor'));
          console.log(data);
          element.innerHTML += "<div class=\"details-overlay\"></div>";
          newElement = document.querySelector('.details-overlay');
          newElement.innerHTML += "\n    <div class='details-img-wrapper'>\n        <img class='details-img' src='".concat(posterPath).concat(data.profile_path, "'>\n    </div>\n    <div class='details-info-wrapper'>\n       <p class='details-title'>").concat(data.name != null, "</p>\n       <p class='details-date'>").concat(data.birthday, "</p>\n      \n        <p class='details-popularity'>").concat(data.place_of_birth, "</p>\n        \n        <p class='details-description'>").concat(data.biography, "</p>\n        <span class='details-close'><i class=\"far fa-times-circle\"></i></span>\n    </div>\n    ");
          document.querySelector('.details-wrapper').scrollIntoView();
          closeBtn = document.querySelector('.details-close');
          closeBtn.addEventListener('click', function () {
            document.querySelector('.details-wrapper').remove();
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = displayActorDetails;
exports["default"] = _default;