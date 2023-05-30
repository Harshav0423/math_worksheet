"use strict";
exports.__esModule = true;
var options_1 = require("./options/options");
var selection_1 = require("../Selection/selection");
var home_module_css_1 = require("./home.module.css");
var problem_1 = require("./problem/problem");
var react_1 = require("react");
function Home() {
    var _a = react_1.useState(50), noOfProblems = _a[0], setNoOfProblems = _a[1];
    var _b = react_1.useState(100), minNumber = _b[0], setMinNumber = _b[1];
    var _c = react_1.useState(1000), maxNumber = _c[0], setMaxNumber = _c[1];
    var _d = react_1.useState(60), timePerProblem = _d[0], setTimerPerProblem = _d[1];
    var _e = react_1.useState(1), minutes = _e[0], setMinutes = _e[1];
    var _f = react_1.useState(0), seconds = _f[0], setSeconds = _f[1];
    var _g = react_1.useState({
        noOfProblems: 50,
        minNumber: 100,
        maxNumber: 1000,
        timePerProblem: 60
    }), selectionObject = _g[0], setSelectionObject = _g[1];
    react_1.useEffect(function () {
        setNoOfProblems(noOfProblems);
        setMinNumber(minNumber);
        setMaxNumber(maxNumber);
        setTimerPerProblem(timePerProblem);
        setMinutes(minutes);
        setSeconds(seconds);
    }, []);
    return (React.createElement("div", { className: home_module_css_1["default"].container },
        React.createElement("div", { className: home_module_css_1["default"].left_part },
            React.createElement(options_1["default"], null)),
        React.createElement("div", { className: home_module_css_1["default"].divider }),
        React.createElement("div", { className: home_module_css_1["default"].right_part },
            React.createElement("div", { className: home_module_css_1["default"].middle_part },
                React.createElement(selection_1["default"], { setNoOfProblems: setNoOfProblems })),
            React.createElement("div", { className: home_module_css_1["default"].liner }),
            React.createElement("div", { className: home_module_css_1["default"].bottom_part },
                React.createElement(problem_1["default"], { selectionObject: selectionObject })))));
}
exports["default"] = Home;
