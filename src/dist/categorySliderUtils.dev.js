"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _displayMovieDetails = _interopRequireDefault(require("./displayMovieDetails.js"));

var _displayActorDetails = _interopRequireDefault(require("./displayActorDetails.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var categorySliderUtils = function categorySliderUtils(cond) {
  var nextt, prevv, items;
  return regeneratorRuntime.async(function categorySliderUtils$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // const nextElement = document.querySelector('.next-icon-element');
          // nextElement.addEventListener('click', () => {
          //     nextElement.style.display="none";
          //     const item = document.querySelector('.item');
          //     const width = item.offsetWidth;
          //     let compStyles = window.getComputedStyle(item);
          //     let margin = parseInt(compStyles.getPropertyValue('margin-left'));
          //     if(margin>-(15*width))
          //     item.style.marginLeft =`${margin-(5*width)}px`;
          //     setTimeout(function(){
          //         nextElement.style.display="unset";
          //         }, 500);
          // })
          // const prevElement = document.querySelector('.prev-icon-element');
          // prevElement.addEventListener('click', () => {
          //     prevElement.style.display="none";
          //     const item = document.querySelector('.item');
          //     const width = item.offsetWidth;
          //     let compStyles = window.getComputedStyle(item);
          //     let margin = parseInt(compStyles.getPropertyValue('margin-left'));
          //     if(margin<0)
          //     item.style.marginLeft =`${margin+(5*width)}px`;
          //         setTimeout(function(){
          //         prevElement.style.display="unset";
          //         }, 500);
          // });
          nextt = document.querySelector(".".concat(cond, " .next-icon-element"));
          nextt.addEventListener('click', function () {
            console.log('klik');
            var wrapper = document.querySelector(".".concat(cond, " .slider-section-wrapper"));
            var width = wrapper.offsetWidth;
            wrapper.scrollLeft += width / 2;
          });
          prevv = document.querySelector(".".concat(cond, " .prev-icon-element"));
          prevv.addEventListener('click', function () {
            console.log('klik');
            var wrapper = document.querySelector(".".concat(cond, " .slider-section-wrapper"));
            var width = wrapper.offsetWidth;
            wrapper.scrollLeft -= width / 2;
          });
          items = _toConsumableArray(document.querySelectorAll(".item.".concat(cond, ",.item-2.").concat(cond)));
          items.map(function (item) {
            item.addEventListener('click', function () {
              if (document.querySelector('.details-wrapper')) {
                document.querySelector('.details-wrapper').remove();
              }

              var newDiv = document.createElement("div");
              newDiv.classList.add('details-wrapper');
              var parent = document.querySelector(".".concat(cond));
              parent.insertBefore(newDiv, parent.firstChild);
              var id = item.getAttribute('data-id');
              console.log(cond);
              if (cond === 'actors') (0, _displayActorDetails["default"])(id, newDiv);else (0, _displayMovieDetails["default"])(id, newDiv);
            });
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = categorySliderUtils;
exports["default"] = _default;