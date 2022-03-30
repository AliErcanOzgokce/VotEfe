"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/elections/status",{

/***/ "./components/Chart.js":
/*!*****************************!*\
  !*** ./components/Chart.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ethereum_election__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/election */ \"./ethereum/election.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar Chart = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(Chart, Component1);\n    var _super = _createSuper(Chart);\n    function Chart(props) {\n        _classCallCheck(this, Chart);\n        var _this;\n        _this = _super.call(this, props);\n        _this.state = {\n            chartData: props.chartData\n        };\n        return _this;\n    }\n    _createClass(Chart, [\n        {\n            key: \"render\",\n            value: function render() {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"chart\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Bar, {\n                        data: this.state.chartData,\n                        options: {\n                            title: {\n                                display: this.props.displayTitle,\n                                fontSize: 25\n                            },\n                            legend: {\n                                display: this.props.displayLegend,\n                                position: this.props.legendPosition\n                            }\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/aliercanozgokce/Desktop/VotEfe/components/Chart.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/aliercanozgokce/Desktop/VotEfe/components/Chart.js\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                }, this));\n            }\n        }\n    ]);\n    return Chart;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n_defineProperty(Chart, \"defaultProps\", {\n    displayTitle: true,\n    displayLegend: true,\n    legendPosition: 'right'\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoYXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFxQztBQUNHO0FBQ0c7QUFDUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTdCSyxLQUFLLGlCQUFYLFFBQVE7Ozs7YUFBRkEsS0FBSyxDQUNHQyxLQUFLOzs7a0NBQ1RBLEtBQUs7Y0FDTkMsS0FBSyxHQUFHLENBQUM7WUFDWkMsU0FBUyxFQUFDRixLQUFLLENBQUNFLFNBQVM7UUFDM0IsQ0FBQzs7Ozs7WUFTSEMsR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sR0FBRSxDQUFDO2dCQUNQLE1BQU0sNkVBQ0hDLENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFPOzBHQUNuQlgsZ0RBQUc7d0JBQ0ZZLElBQUksRUFBRSxJQUFJLENBQUNMLEtBQUssQ0FBQ0MsU0FBUzt3QkFDMUJLLE9BQU8sRUFBRSxDQUFDOzRCQUNSQyxLQUFLLEVBQUMsQ0FBQztnQ0FDTEMsT0FBTyxFQUFDLElBQUksQ0FBQ1QsS0FBSyxDQUFDVSxZQUFZO2dDQUMvQkMsUUFBUSxFQUFDLEVBQUU7NEJBQ2IsQ0FBQzs0QkFDREMsTUFBTSxFQUFDLENBQUM7Z0NBQ05ILE9BQU8sRUFBQyxJQUFJLENBQUNULEtBQUssQ0FBQ2EsYUFBYTtnQ0FDaENDLFFBQVEsRUFBQyxJQUFJLENBQUNkLEtBQUssQ0FBQ2UsY0FBYzs0QkFDcEMsQ0FBQzt3QkFDSCxDQUFDOzs7Ozs7Ozs7OztZQUtULENBQUM7Ozs7RUFqQ2lCbkIsNENBQVM7Z0JBQXZCRyxLQUFLLEVBUUZpQixDQUFZLGVBQUcsQ0FBQztJQUNyQk4sWUFBWSxFQUFDLElBQUk7SUFDakJHLGFBQWEsRUFBRSxJQUFJO0lBQ25CRSxjQUFjLEVBQUMsQ0FBTztBQUN4QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hhcnQuanM/NTkyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXIgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRWxlY3Rpb24gZnJvbSBcIi4uL2V0aGVyZXVtL2VsZWN0aW9uXCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vZXRoZXJldW0vd2ViM1wiO1xuXG5jbGFzcyBDaGFydCBleHRlbmRzIENvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2hhcnREYXRhOnByb3BzLmNoYXJ0RGF0YVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGlzcGxheVRpdGxlOnRydWUsXG4gICAgZGlzcGxheUxlZ2VuZDogdHJ1ZSxcbiAgICBsZWdlbmRQb3NpdGlvbjoncmlnaHQnLFxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRcIj5cbiAgICAgICAgPEJhclxuICAgICAgICAgIGRhdGE9e3RoaXMuc3RhdGUuY2hhcnREYXRhfVxuICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgIHRpdGxlOntcbiAgICAgICAgICAgICAgZGlzcGxheTp0aGlzLnByb3BzLmRpc3BsYXlUaXRsZSxcbiAgICAgICAgICAgICAgZm9udFNpemU6MjVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWdlbmQ6e1xuICAgICAgICAgICAgICBkaXNwbGF5OnRoaXMucHJvcHMuZGlzcGxheUxlZ2VuZCxcbiAgICAgICAgICAgICAgcG9zaXRpb246dGhpcy5wcm9wcy5sZWdlbmRQb3NpdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkJhciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiRWxlY3Rpb24iLCJ3ZWIzIiwiQ2hhcnQiLCJwcm9wcyIsInN0YXRlIiwiY2hhcnREYXRhIiwicmVuZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGF0YSIsIm9wdGlvbnMiLCJ0aXRsZSIsImRpc3BsYXkiLCJkaXNwbGF5VGl0bGUiLCJmb250U2l6ZSIsImxlZ2VuZCIsImRpc3BsYXlMZWdlbmQiLCJwb3NpdGlvbiIsImxlZ2VuZFBvc2l0aW9uIiwiZGVmYXVsdFByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Chart.js\n");

/***/ })

});