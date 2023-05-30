"use strict";
exports.__esModule = true;
var react_1 = require("react");
var operation_module_css_1 = require("./operation.module.css");
function Operation(typeOfOperation, setTypeOfOperation) {
    var operators = ["Addition", "Subtraction", "Multiplication", "Division"];
    var _a = react_1.useState(""), selectedOption = _a[0], setSelectedOption = _a[1];
    function onValueChange(event) {
        setSelectedOption(event.target.value);
    }
    return (React.createElement("div", null,
        React.createElement("div", { className: operation_module_css_1["default"].title }, "Choose Operation"),
        operators &&
            operators.map(function (operator) { return (React.createElement("div", { className: operation_module_css_1["default"].content },
                React.createElement("input", { type: "radio", id: operator.toLocaleLowerCase(), value: operator.toLocaleLowerCase(), onChange: function (e) {
                        onValueChange(e);
                        console.log(e.target.value);
                    }, checked: selectedOption === operator.toLocaleLowerCase() }),
                React.createElement("label", { htmlFor: operator.toLocaleLowerCase(), className: operation_module_css_1["default"].box },
                    React.createElement("div", { className: operation_module_css_1["default"].plan },
                        React.createElement("div", { className: operation_module_css_1["default"].name }, operator),
                        React.createElement("div", { className: operation_module_css_1["default"].circle + "} " + operation_module_css_1["default"].checked }))))); })));
}
exports["default"] = Operation;
