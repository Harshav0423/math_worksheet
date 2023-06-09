"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var selection1_module_css_1 = require("./selection1.module.css");
var react_1 = require("react");
function default_1(props) {
    var _this = this;
    var _a = react_1.useState(50), noOfProblems = _a[0], setNoOfProblems = _a[1];
    var _b = react_1.useState(100), minNumber = _b[0], setMinNumber = _b[1];
    var _c = react_1.useState(1000), maxNumber = _c[0], setMaxNumber = _c[1];
    var _d = react_1.useState(60), timePerProblem = _d[0], setTimerPerProblem = _d[1];
    var _e = react_1.useState(1), minutes = _e[0], setMinutes = _e[1];
    var _f = react_1.useState(0), seconds = _f[0], setSeconds = _f[1];
    // useEffect(() => {
    // 	setNoOfProblems(noOfProblems);
    // 	props.setNoOfProblems(noOfProblems);
    // 	setMinNumber(minNumber);
    // 	props.setMinNumber(minNumber);
    // 	setMaxNumber(maxNumber);
    // 	props.setMaxNumber(maxNumber);
    // 	setTimerPerProblem(timePerProblem);
    // 	props.setTimerPerProblem(timePerProblem);
    // 	setMinutes(minutes);
    // 	props.setMinutes(minutes);
    // 	setSeconds(seconds);
    // 	props.setSeconds(seconds);
    // }, [noOfProblems, minNumber, maxNumber, timePerProblem, seconds, minutes]);
    function onValueChange(value, func, increment) {
        if (increment) {
            func(value + 1);
        }
        else {
            func(value - 1);
        }
    }
    function onTimeChange(value, func, increment) {
        return __awaiter(this, void 0, Promise, function () {
            var mins, secs;
            return __generator(this, function (_a) {
                if (increment) {
                    func(value + 10);
                }
                else {
                    func(value - 10);
                }
                mins = Math.floor(value / 60);
                secs = value - mins * 60;
                setMinutes(mins);
                setSeconds(secs);
                return [2 /*return*/];
            });
        });
    }
    return (React.createElement("div", { className: selection1_module_css_1["default"].container },
        React.createElement("div", { className: selection1_module_css_1["default"].content },
            React.createElement("div", { className: selection1_module_css_1["default"].namelabel }, "Number of Problems :"),
            React.createElement("div", { className: selection1_module_css_1["default"].selectiondiv },
                React.createElement("div", { className: selection1_module_css_1["default"].value }, noOfProblems),
                React.createElement("div", { className: selection1_module_css_1["default"].icon },
                    React.createElement("div", { className: selection1_module_css_1["default"].iconup, onClick: function () {
                            onValueChange(noOfProblems, setNoOfProblems, true);
                        } }),
                    React.createElement("div", { className: selection1_module_css_1["default"].icondown, onClick: function () {
                            onValueChange(noOfProblems, setNoOfProblems, false);
                        } }))),
            React.createElement("div", { className: selection1_module_css_1["default"].namelabel }, "Min :"),
            React.createElement("div", { className: selection1_module_css_1["default"].selectiondiv },
                React.createElement("div", { className: selection1_module_css_1["default"].value }, minNumber),
                React.createElement("div", { className: selection1_module_css_1["default"].icon },
                    React.createElement("div", { className: selection1_module_css_1["default"].iconup, onClick: function () {
                            onValueChange(minNumber, setMinNumber, true);
                        } }),
                    React.createElement("div", { className: selection1_module_css_1["default"].icondown, onClick: function () {
                            onValueChange(minNumber, setMinNumber, false);
                        } }))),
            React.createElement("div", { className: selection1_module_css_1["default"].namelabel }, "Max :"),
            React.createElement("div", { className: selection1_module_css_1["default"].selectiondiv },
                React.createElement("div", { className: selection1_module_css_1["default"].value }, maxNumber),
                React.createElement("div", { className: selection1_module_css_1["default"].icon },
                    React.createElement("div", { className: selection1_module_css_1["default"].iconup, onClick: function () {
                            onValueChange(maxNumber, setMaxNumber, true);
                        } }),
                    React.createElement("div", { className: selection1_module_css_1["default"].icondown, onClick: function () {
                            onValueChange(maxNumber, setMaxNumber, false);
                        } }))),
            React.createElement("div", { className: selection1_module_css_1["default"].namelabel }, "Time Per Problem :"),
            React.createElement("div", { className: selection1_module_css_1["default"].selectiondiv },
                React.createElement("div", { className: selection1_module_css_1["default"].value }, minutes + ": " + (seconds < 10 ? "0" + seconds : seconds) + "sec"),
                React.createElement("div", { className: selection1_module_css_1["default"].icon },
                    React.createElement("div", { className: selection1_module_css_1["default"].iconup, onClick: function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, onTimeChange(timePerProblem, setTimerPerProblem, true)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); } }),
                    React.createElement("div", { className: selection1_module_css_1["default"].icondown, onClick: function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, onTimeChange(timePerProblem, setTimerPerProblem, false)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); } }))))));
}
exports["default"] = default_1;
