"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProblems = getProblems;

var _connection = _interopRequireDefault(require("../connection"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getProblems(payload) {
  return regeneratorRuntime.async(function getProblems$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].post("http://localhost:3100/calculate", payload).then(function (res) {
            console.log(res.data, res.data.problem);
            return res.data.problem;
          }));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}