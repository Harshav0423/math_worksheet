"use strict";
exports.__esModule = true;
exports.getProblems = void 0;
var axios_1 = require("axios");
function getProblems(payload) {
    // const payload = {
    // 	min: 100,
    // 	max: 1000,
    // 	count: 50,
    // };
    return axios_1["default"].post("http://localhost:3100/calculate", payload).then(function (res) {
        console.log(res);
    });
    // return AX.post("/calculate", payload).then((res) => {
    // 	console.log(res);
    // });
}
exports.getProblems = getProblems;
