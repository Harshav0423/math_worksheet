"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./problem.css");
function Problem() {
    var problem;
    var _a = react_1.useState({}), problems = _a[0], setProblems = _a[1];
    var _b = react_1.useState({}), selection = _b[0], setSelection = _b[1];
    var _c = react_1.useState(50), noOfProblems = _c[0], setNoOfProblems = _c[1];
    var _d = react_1.useState(100), minNumber = _d[0], setMinNumber = _d[1];
    var _e = react_1.useState(1000), maxNumber = _e[0], setMaxNumber = _e[1];
    var _f = react_1.useState(60), timePerProblem = _f[0], setTimerPerProblem = _f[1];
    var _g = react_1.useState(1), minutes = _g[0], setMinutes = _g[1];
    var _h = react_1.useState(0), seconds = _h[0], setSeconds = _h[1];
    react_1.useEffect(function () {
        // noOfProblems = selection['noOfProblems'];
        setNoOfProblems(noOfProblems);
        setMinNumber(minNumber);
        setMaxNumber(maxNumber);
        setTimerPerProblem(timePerProblem);
        setMinutes(minutes);
        setSeconds(seconds);
    }, [selection]);
    // useEffect(() => {
    // 	const res = getProblems();
    // 	setProblems(res);
    // 	console.log("useEffect", res);
    // }, []);
    return (React.createElement("div", { className: "container" },
        React.createElement("div", { className: "content" },
            React.createElement("div", { className: "div1" }, "Timer"),
            React.createElement("div", { className: "div2" },
                React.createElement("div", { className: "left" }, "Icon"),
                React.createElement("div", { className: "right" },
                    React.createElement("label", { htmlFor: "operand1", title: "operand1", className: "content box" },
                        React.createElement("span", { className: "name" }, "1289321up")),
                    React.createElement("label", { htmlFor: "operand2", title: "operand2", className: "content box" },
                        React.createElement("span", { className: "name" }, "1289321down")))),
            React.createElement("div", { className: "div3" },
                React.createElement("label", { htmlFor: "ansbyuser", title: "ansbyuser", className: "content box my" },
                    React.createElement("span", { className: "name" }, "1289321upper")),
                React.createElement("label", { htmlFor: "actualans", title: "actualans", className: "content box my" },
                    React.createElement("span", { className: "name" }, "1289321lower"))))));
}
exports["default"] = Problem;
