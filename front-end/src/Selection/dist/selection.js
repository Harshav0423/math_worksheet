"use strict";
exports.__esModule = true;
var react_1 = require("react");
var operation_1 = require("../operation/operation");
var selection1_1 = require("../selection1/selection1");
var selection_module_css_1 = require("./selection.module.css");
function Selection() {
    var operators = ["Addition", "Subtraction", "Multiplication", "Division"];
    var _a = react_1.useState("addition"), operation = _a[0], setOperation = _a[1];
    return (React.createElement("div", { className: selection_module_css_1["default"].container },
        React.createElement("div", { className: selection_module_css_1["default"].top },
            React.createElement("span", { className: selection_module_css_1["default"].maintitle }, "Math Worksheets")),
        React.createElement("div", { className: selection_module_css_1["default"].bottom },
            React.createElement("div", { className: selection_module_css_1["default"].bottomleft },
                React.createElement(operation_1["default"], { typeOfOperation: operation, setOperation: setOperation })),
            React.createElement("div", { className: selection_module_css_1["default"].bottomright },
                React.createElement(selection1_1["default"], null)))));
}
exports["default"] = Selection;
