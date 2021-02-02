"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var displayActorDetails = function displayActorDetails(id, element) {
  var key, urlPerson, url, backgroundPath, posterPath, data, closeBtn;
  return regeneratorRuntime.async(function displayActorDetails$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(id, element);
          key = '25141123a6896a890d381900b61e2af6';
          urlPerson = "https://api.themoviedb.org/3/person/".concat(id, "?api_key=").concat(key, "&language=en-US");
          url = "https://api.themoviedb.org/3/find/".concat(end_id, "?api_key=").concat(key, "&language=en-US&external_source=imdb_id");
          backgroundPath = "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces";
          posterPath = "https://image.tmdb.org/t/p/w600_and_h900_bestv2"; // const data = await getData(urlPerson);

          data = JSON.parse(localStorage.getItem('actor'));
          console.log(data);
          [data].map(function (item) {
            element.style.background = "url(".concat(backgroundPath).concat(item.backdrop_path, ")");
            element.innerHTML += "<div class=\"details-overlay\"></div>";
            var newElement = document.querySelector('.details-overlay');
            newElement.innerHTML += "\n    <div class='details-img-wrapper'>\n        <img class='details-img' src='".concat(posterPath).concat(item.poster_path, "'>\n    </div>\n    <div class='details-info-wrapper'>\n       <p class='details-title'>").concat(item.original_title, "</p>\n       <p class='details-date'>").concat(item.release_date, " <span class=\"details-countries\">\n        ").concat(item.production_countries.map(function (item) {
              return "(" + item.iso_3166_1 + ")";
            }), "</span></p>\n        <p> <span class=\"details-genres\">\n        ").concat(item.genres.map(function (item) {
              return item.name;
            }).join(' <i class="fas fa-dot-circle"></i> '), "</span></p>\n        <p class='details-popularity'>Popularity: ").concat(item.popularity, "</p>\n        <p class='details-tagline'>").concat(item.tagline, "</p>\n        <p class='details-description'>").concat(item.overview, "</p>\n        <span class='details-close'><i class=\"far fa-times-circle\"></i></span>\n    </div>\n    ");
          });
          document.querySelector('.details-wrapper').scrollIntoView();
          closeBtn = document.querySelector('.details-close');
          closeBtn.addEventListener('click', function () {
            document.querySelector('.details-wrapper').remove();
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = displayActorDetails;
exports["default"] = _default;