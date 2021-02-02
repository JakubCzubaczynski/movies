"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getData = function getData(url) {
  var data;
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(url).then(function (response) {
            return response.json();
          }).then(function (item) {
            return item;
          }));

        case 2:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = getData;
exports["default"] = _default;