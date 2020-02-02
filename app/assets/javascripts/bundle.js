/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ball.js":
/*!*********************!*\
  !*** ./src/ball.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moveable_shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moveable_shape */ "./src/moveable_shape.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Ball =
/*#__PURE__*/
function (_MoveableShape) {
  _inherits(Ball, _MoveableShape);

  function Ball(label, pos, radius) {
    var _this;

    _classCallCheck(this, Ball);

    var boundingBox = [[pos[0] - radius, pos[1] - radius], [pos[0] + radius, pos[1] - radius], [pos[0] + radius, pos[1] + radius], [pos[0] - radius, pos[1] + radius]];
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Ball).call(this, pos, boundingBox));
    _this.label = label;
    _this.radius = radius;
    return _this;
  }

  _createClass(Ball, [{
    key: "draw",
    value: function draw(ctx, ballType, y) {
      if (_typeof(ctx) === "object") {
        //ctx is a number when clicked so I need to have a conditional here
        this.recalculateBoundingBox();
        var newPos = this.pos[1];

        if (this.pos[1] > y) {
          newPos -= y * 2.5;
        }

        ctx.beginPath();
        ctx.arc(this.pos[0], newPos, this.radius, 0, Math.PI * 2);
        ctx.stroke();

        if (ballType === "distinguishable") {
          ctx.font = "24px arial";
          ctx.fillText(this.label, this.pos[0] - 8, newPos + 8);
        }
      }
    }
  }, {
    key: "recalculateBoundingBox",
    value: function recalculateBoundingBox() {
      this.boundingBox = [[this.pos[0] - this.radius, this.pos[1] - this.radius], [this.pos[0] + this.radius, this.pos[1] - this.radius], [this.pos[0] + this.radius, this.pos[1] + this.radius], [this.pos[0] - this.radius, this.pos[1] + this.radius]];
    }
  }]);

  return Ball;
}(_moveable_shape__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Ball);

/***/ }),

/***/ "./src/bar.js":
/*!********************!*\
  !*** ./src/bar.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moveable_shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moveable_shape */ "./src/moveable_shape.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Bar =
/*#__PURE__*/
function (_MoveableShape) {
  _inherits(Bar, _MoveableShape);

  function Bar(pos, width, height) {
    var _this;

    _classCallCheck(this, Bar);

    var boundingBox = [[pos[0], pos[1]], [pos[0] + width, pos[1]], [pos[0] + width, pos[1] + height], [pos[0], pos[1] + height]];
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Bar).call(this, pos, boundingBox));
    _this.width = width;
    _this.height = height;
    return _this;
  }

  _createClass(Bar, [{
    key: "draw",
    value: function draw(ctx) {
      if (_typeof(ctx) === "object") {
        this.recalculateBoundingBox();
        ctx.beginPath();
        ctx.moveTo(this.pos[0], this.pos[1]);
        ctx.lineTo(this.pos[0] + this.width, this.pos[1]);
        ctx.lineTo(this.pos[0] + this.width, this.pos[1] + this.height);
        ctx.lineTo(this.pos[0], this.pos[1] + this.height);
        ctx.lineTo(this.pos[0], this.pos[1]);
        ctx.stroke();
        ctx.fill();
      }
    }
  }, {
    key: "recalculateBoundingBox",
    value: function recalculateBoundingBox() {
      this.boundingBox = [[this.pos[0], this.pos[1]], [this.pos[0] + this.width, this.pos[1]], [this.pos[0] + this.width, this.pos[1] + this.height], [this.pos[0], this.pos[1] + this.height]];
    }
  }]);

  return Bar;
}(_moveable_shape__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Bar);

/***/ }),

/***/ "./src/bin.js":
/*!********************!*\
  !*** ./src/bin.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _static_shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static_shape */ "./src/static_shape.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Bin =
/*#__PURE__*/
function (_StaticShape) {
  _inherits(Bin, _StaticShape);

  function Bin(label, pos, bounds) {
    var _this;

    _classCallCheck(this, Bin);

    var boundingBox = [[pos[0], pos[1]], [pos[0] + bounds[0] + bounds[1], pos[1]], [pos[0] + bounds[1], pos[1] + bounds[2]], [pos[0] + bounds[0], pos[1] + bounds[2]]];
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Bin).call(this, pos, boundingBox));
    _this.label = label;
    _this.bounds = bounds; //[X1, X2, Y]

    return _this;
  } // checkBounds(x, y) {
  //     return (x >= this.boundingBox[0][0] && y >= this.boundingBox[0][1]) && (x >= this.boundingBox[1][0] && y < this.boundingBox[1][1]) && (x < this.boundingBox[2][0] && y < this.boundingBox[2][1]) && (x < this.boundingBox[3][0] && y >= this.boundingBox[3][1]);
  // }
  // checkCollision(x, y) {
  //     let line1 = [this.boundingBox[1][0] - this.boundingBox[0][0], this.boundingBox[1][1] - this.boundingBox[0][1]];
  //     let line2 = [this.boundingBox[2][0] - this.boundingBox[1][0], this.boundingBox[2][1] - this.boundingBox[1][1]];
  //     let line3 = [this.boundingBox[3][0] - this.boundingBox[2][0], this.boundingBox[3][1] - this.boundingBox[2][1]];
  //     if(x === line1[0], y === line1[1]) {
  //         this.pos = line1;
  //     } else if(x === line2[0], line2[1]) {
  //         this.pos = line2;
  //     } else if(x === line3[0], line3[1]) {
  //     }
  // }


  _createClass(Bin, [{
    key: "draw",
    value: function draw(ctx, binType, y) {
      if (_typeof(ctx) === "object") {
        this.recalculateBoundingBox();
        var newPos = this.pos[1];

        if (this.pos[1] > y) {
          newPos = y;
        }

        ctx.beginPath();
        ctx.moveTo(this.pos[0], newPos);
        ctx.lineTo(this.pos[0] + this.bounds[0], newPos + this.bounds[2]);
        ctx.lineTo(this.pos[0] + this.bounds[1], newPos + this.bounds[2]);
        ctx.lineTo(this.pos[0] + this.bounds[0] + this.bounds[1], newPos);
        ctx.stroke();
        ctx.font = "24px arial";

        if (binType === "distinguishable") {
          ctx.fillText(this.label, this.pos[0] + 95, newPos + 150);
        }

        ctx.fillText(this.items.length, this.pos[0] + this.bounds[1] - 65, newPos + this.bounds[2] + 30);
      }
    }
  }, {
    key: "recalculateBoundingBox",
    value: function recalculateBoundingBox() {
      this.boundingBox = [[this.pos[0], this.pos[1]], [this.pos[0] + this.bounds[0] + this.bounds[1], this.pos[1]], [this.pos[0] + this.bounds[1], this.pos[1] + this.bounds[2]], [this.pos[0] + this.bounds[0], this.pos[1] + this.bounds[2]]];
    }
  }]);

  return Bin;
}(_static_shape__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Bin);

/***/ }),

/***/ "./src/configuration.js":
/*!******************************!*\
  !*** ./src/configuration.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//true values denote there exists a partition, false values denote there doesn't not exist a partition
var Configuration =
/*#__PURE__*/
function () {
  function Configuration(staticShapes) {
    _classCallCheck(this, Configuration);

    this.staticShapes = staticShapes;
  } //this function checks if there is a parititon. 
  //It matches each input's bin with each partition's 
  //bin to check if they have the same configuration. 
  //A counter variable keeps track of simiarities: if 
  //the counter equals to the total # of bins, then this 
  //implies that the partition already exists or the parition
  //does not adhere to the rules


  _createClass(Configuration, [{
    key: "checkStaticShapes",
    value: function checkStaticShapes(otherShapes, checkBothShapes) {
      var counter = 0;

      for (var i = 0; i < this.staticShapes.length; i++) {
        if (checkBothShapes(otherShapes[i], this.staticShapes, i)) {
          console.log(otherShapes[i].items.length + " " + this.staticShapes[i].items.length);
          counter++;
        }
      }

      return counter === this.staticShapes.length;
    }
  }, {
    key: "draw",
    value: function draw(ctx, moveableType, staticType, y) {
      this.staticShapes.forEach(function (staticShape) {
        staticShape.draw(ctx, staticType, y);
        staticShape.items.forEach(function (moveableShape) {
          return moveableShape.draw(ctx, moveableType, y);
        });
      });
    }
  }]);

  return Configuration;
}();

/* harmony default export */ __webpack_exports__["default"] = (Configuration);

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interaction */ "./src/interaction.js");
/* harmony import */ var _util_formulas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/formulas */ "./util/formulas.js");
/* harmony import */ var _distribution__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./distribution */ "./src/distribution.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



 //this class is concerned with the presentation/event handling of the interface

var Display =
/*#__PURE__*/
function () {
  function Display(moveableType, staticType, restriction, totalConfigurations, ctx) {
    _classCallCheck(this, Display);

    this.moveableType = moveableType;
    this.staticType = staticType;
    this.restriction = restriction;
    this.totalConfigurations = totalConfigurations;
    this.ctx = ctx;
    this.distribution = new _distribution__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.distribution.usesStarsAndBars(this.moveableType, this.staticType, this.restriction);
    var numMoveableShapes = document.getElementsByClassName("num-balls")[0].innerHTML;
    var numStaticShapes = document.getElementsByClassName("num-bins")[0].innerHTML;
    var moveableShapes = this.distribution.setMoveableShapes(numMoveableShapes);
    var staticShapes = this.distribution.setStaticShapes(numStaticShapes);
    this.interaction = new _interaction__WEBPACK_IMPORTED_MODULE_0__["default"](moveableShapes, staticShapes);
  }

  _createClass(Display, [{
    key: "addToConfigurations",
    value: function addToConfigurations() {
      document.getElementsByClassName("configuration-count")[0].innerHTML = "Configurations: ".concat(this.interaction.configurations.length, "/").concat(this.totalConfigurations);
    } //account for stars and bars later

  }, {
    key: "calculateFormula",
    value: function calculateFormula() {
      this.totalConfigurations = Object(_util_formulas__WEBPACK_IMPORTED_MODULE_1__["determineFormula"])(this.moveableType, this.staticType, this.restriction)(this.interaction.moveableShapes.length, this.interaction.staticShapes.length);
      this.addToConfigurations();
    }
  }, {
    key: "updateValues",
    value: function updateValues() {
      var numMoveableShapes = document.getElementsByClassName("num-balls")[0].innerHTML;
      var numStaticShapes = document.getElementsByClassName("num-bins")[0].innerHTML;
      var moveableShapes = this.distribution.setMoveableShapes(numMoveableShapes);
      var staticShapes = this.distribution.setStaticShapes(numStaticShapes);
      this.interaction.setMoveableShapes(moveableShapes);
      this.interaction.setStaticShapes(staticShapes);
    }
  }, {
    key: "updateCount",
    value: function updateCount(canvasEl) {
      var _this = this;

      var newValue;
      document.getElementById("ball-count").addEventListener("input", function (event) {
        event.preventDefault();
        newValue = event.target.value;
        var moveableShape;

        if (newValue > _this.interaction.moveableShapes.length) {
          moveableShape = _this.distribution.addMoveableShape(_this.interaction.moveableShapes.length);

          _this.interaction.addMoveableShape(moveableShape);
        } else {
          _this.interaction.removeMoveableShape();

          _this.ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height);
        }

        _this.calculateFormula();

        _this.start();
      });
      document.getElementById("bin-count").addEventListener("input", function (event) {
        newValue = event.target.value;
        document.getElementsByClassName("num-bins")[0].innerHTML = event.target.value;
        var staticShape;
        var length = _this.interaction.staticShapes.length;
        if (_this.distribution.starsAndBars) length -= 1;

        if (newValue > length) {
          staticShape = _this.distribution.addStaticShape(_this.interaction.staticShapes.length);

          _this.interaction.addStaticShape(staticShape);
        } else {
          _this.interaction.removeStaticShape();

          _this.ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height);
        }

        _this.calculateFormula();

        _this.start();
      });
    }
  }, {
    key: "resetState",
    value: function resetState() {
      this.interaction.setMoveableShapes(this.interaction.moveableShapes);
      this.interaction.setStaticShapes(this.interaction.staticShapes);
      var canvasEl = document.getElementById("canvas");
      this.ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height);
    }
  }, {
    key: "resetInterface",
    value: function resetInterface() {
      this.resetState();
      this.interaction.configurations = [];
      this.addToConfigurations();
    }
  }, {
    key: "restart",
    value: function restart() {
      this.calculateFormula();
      this.changeDisplay();
      this.resetInterface();
      this.clearConfigurations();
      this.start();
    }
  }, {
    key: "clearConfigurations",
    value: function clearConfigurations() {
      var configurations = document.getElementsByClassName("configuration");

      for (var i = 0; i < configurations.length; i++) {
        configurations[i].remove();
      }
    }
  }, {
    key: "changeDisplay",
    value: function changeDisplay() {
      if (this.distribution.starsAndBars !== this.distribution.usesStarsAndBars(this.moveableType, this.staticType, this.restriction)) {
        this.distribution.starsAndBars = this.distribution.usesStarsAndBars(this.moveableType, this.staticType, this.restriction);
        this.distribution.setMoveableShapePosition();
        this.distribution.setStaticShapePosition();
        this.distribution.updateDisplayCount(this.interaction.moveableShapes.length);
        this.updateValues();
        this.distribution.changeLabels();
      }
    }
  }, {
    key: "start",
    value: function start() {
      this.interaction.draw(this.ctx, this.moveableType, this.staticType);
    }
  }]);

  return Display;
}();

/* harmony default export */ __webpack_exports__["default"] = (Display);

/***/ }),

/***/ "./src/distribution.js":
/*!*****************************!*\
  !*** ./src/distribution.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ball */ "./src/ball.js");
/* harmony import */ var _bin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bin */ "./src/bin.js");
/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bar */ "./src/bar.js");
/* harmony import */ var _star__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./star */ "./src/star.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Distribution =
/*#__PURE__*/
function () {
  function Distribution() {
    _classCallCheck(this, Distribution);

    this.starsAndBars = false;
    this.moveableShapePosition;
    this.staticShapePosition;
    this.setMoveableShapePosition();
    this.setStaticShapePosition();
  }

  _createClass(Distribution, [{
    key: "usesStarsAndBars",
    value: function usesStarsAndBars(moveableType, staticType, restriction) {
      return moveableType === "indistinguishable" && staticType === "distinguishable" && (restriction === "unrestricted" || restriction === "surjective");
    }
  }, {
    key: "setMoveableShapePosition",
    value: function setMoveableShapePosition() {
      if (this.starsAndBars) {
        this.moveableShapePosition = [100, 200];
      } else {
        this.moveableShapePosition = [100, 50];
      }
    }
  }, {
    key: "setStaticShapePosition",
    value: function setStaticShapePosition() {
      if (this.starsAndBars) {
        this.staticShapePosition = [200, 400];
      } else {
        this.staticShapePosition = [245, 440];
      }
    }
  }, {
    key: "setMoveableShapes",
    value: function setMoveableShapes(numMoveableShapes) {
      var moveableShapes = new Array(parseInt(numMoveableShapes));

      if (this.starsAndBars) {
        for (var i = 0; i < moveableShapes.length; i++) {
          moveableShapes[i] = new _bar__WEBPACK_IMPORTED_MODULE_2__["default"]([this.moveableShapePosition[0] * (i + 1), this.moveableShapePosition[1]], 10, 60);
        }
      } else {
        for (var _i = 0; _i < moveableShapes.length; _i++) {
          moveableShapes[_i] = new _ball__WEBPACK_IMPORTED_MODULE_0__["default"](_i + 1, [this.moveableShapePosition[0] * (_i + 1), this.moveableShapePosition[1]], 35);
        }
      }

      return moveableShapes;
    }
  }, {
    key: "setStaticShapes",
    value: function setStaticShapes(numStaticShapes) {
      var staticShapes = new Array(parseInt(numStaticShapes));

      if (this.starsAndBars) {
        for (var i = 0; i < staticShapes.length; i++) {
          staticShapes[i] = new _star__WEBPACK_IMPORTED_MODULE_3__["default"]([this.staticShapePosition[0] * i - 50, this.staticShapePosition[1]], this.staticShapePosition[0]);
        }

        staticShapes.push(this.addStaticShape(staticShapes.length));
      } else {
        for (var _i2 = 0; _i2 < staticShapes.length; _i2++) {
          staticShapes[_i2] = new _bin__WEBPACK_IMPORTED_MODULE_1__["default"](_i2 + 1, [this.staticShapePosition[0] * _i2 + 20, this.staticShapePosition[1]], [40, 160, 300]);
        }
      }

      return staticShapes;
    }
  }, {
    key: "addMoveableShape",
    value: function addMoveableShape(length) {
      if (this.starsAndBars) {
        return new _bar__WEBPACK_IMPORTED_MODULE_2__["default"]([this.moveableShapePosition[0] * (length + 1), this.moveableShapePosition[1]], 10, 60);
      } else {
        return new _ball__WEBPACK_IMPORTED_MODULE_0__["default"](length + 1, [this.moveableShapePosition[0] * (length + 1), this.moveableShapePosition[1]], 35);
      }
    }
  }, {
    key: "addStaticShape",
    value: function addStaticShape(length) {
      if (this.starsAndBars) {
        return new _star__WEBPACK_IMPORTED_MODULE_3__["default"]([this.staticShapePosition[0] * length - 50, this.staticShapePosition[1]], this.staticShapePosition[0]);
      } else {
        return new _bin__WEBPACK_IMPORTED_MODULE_1__["default"](length + 1, [this.staticShapePosition[0] * length + 20, this.staticShapePosition[1]], [40, 160, 300]);
      }
    }
  }, {
    key: "changeLabels",
    value: function changeLabels() {
      var ballLabel = document.getElementById("ball-label-header");
      var binLabel = document.getElementById("bin-label-header");

      if (this.starsAndBars) {
        ballLabel.innerText = "Bars";
      } else {
        ballLabel.innerText = "Balls";
      }

      if (this.starsAndBars) {
        binLabel.innerText = "Stars";
      } else {
        binLabel.innerText = "Bins";
      }
    } //updateAmount

  }, {
    key: "updateDisplayCount",
    value: function updateDisplayCount(value) {
      if (this.starsAndBars) {
        document.getElementsByClassName("num-balls")[0].innerHTML = value - 1;
      } else {
        document.getElementsByClassName("num-balls")[0].innerHTML = value + 1;
      }
    }
  }]);

  return Distribution;
}();

/* harmony default export */ __webpack_exports__["default"] = (Distribution);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _util_formulas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../util/formulas */ "./util/formulas.js");
/* harmony import */ var _util_event_listeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../util/event_listeners */ "./util/event_listeners.js");



document.addEventListener("DOMContentLoaded", function () {
  var canvasEl = document.getElementById("canvas");
  var ctx = canvasEl.getContext("2d");
  var result = Object(_util_formulas__WEBPACK_IMPORTED_MODULE_1__["determineFormula"])("distinguishable", "distinguishable", "unrestricted")(document.getElementsByClassName("num-balls")[0].innerHTML, document.getElementsByClassName("num-bins")[0].innerHTML);
  var display = new _display__WEBPACK_IMPORTED_MODULE_0__["default"]("distinguishable", "distinguishable", "unrestricted", result, ctx);
  var animation;
  canvasEl.addEventListener("mousedown", function (event) {
    for (var i = 0; i < display.interaction.moveableShapes.length; i++) {
      if (display.interaction.moveableShapes[i].checkBounds(event.offsetX, event.offsetY)) {
        animation = window.requestAnimationFrame(display.interaction.moveableShapes[i].draw);
        display.interaction.moveableShapes[i].isClicked = true;
        break; //break here to resolve conflict between overlapping balls
      }
    }
  });
  canvasEl.addEventListener("mousemove", function (event) {
    display.interaction.moveableShapes.forEach(function (shape) {
      if (shape.isClicked) {
        ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height); //clear canvas to prevent trailing circles

        shape.pos[0] = event.offsetX;
        shape.pos[1] = event.offsetY;
      }
    });
    display.start();
  });
  canvasEl.addEventListener("mouseup", function (event) {
    window.cancelAnimationFrame(animation);
    ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height); //clear canvas to prevent trailing circles

    display.interaction.moveableShapes.forEach(function (shape) {
      if (shape.isClicked) {
        shape.isClicked = false;
        display.interaction.staticShapes.forEach(function (otherShape) {
          otherShape.addItem(shape);
          otherShape.removeItem(shape);
        });
      }
    });
    display.start();
  });
  _util_event_listeners__WEBPACK_IMPORTED_MODULE_2__["addEventsToRules"](display);
  _util_event_listeners__WEBPACK_IMPORTED_MODULE_2__["addEventsToCases"](display);
  _util_event_listeners__WEBPACK_IMPORTED_MODULE_2__["addEventsToButtons"](display);
  display.updateCount(canvasEl);
  display.start();
});

/***/ }),

/***/ "./src/interaction.js":
/*!****************************!*\
  !*** ./src/interaction.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration */ "./src/configuration.js");
/* harmony import */ var _util_checks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/checks */ "./util/checks.js");
/* harmony import */ var _static_shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./static_shape */ "./src/static_shape.js");
/* harmony import */ var _moveable_shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moveable_shape */ "./src/moveable_shape.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Interaction =
/*#__PURE__*/
function () {
  function Interaction(moveableShapes, staticShapes) {
    _classCallCheck(this, Interaction);

    this.moveableShapes = moveableShapes;
    this.staticShapes = staticShapes;
    this.configurations = [];
  }

  _createClass(Interaction, [{
    key: "setMoveableShapes",
    value: function setMoveableShapes(moveableShapes) {
      this.moveableShapes = moveableShapes;
    }
  }, {
    key: "setStaticShapes",
    value: function setStaticShapes(staticShapes) {
      this.staticShapes = staticShapes;
    }
  }, {
    key: "addMoveableShape",
    value: function addMoveableShape(moveableShape) {
      this.moveableShapes.push(moveableShape);
    }
  }, {
    key: "removeMoveableShape",
    value: function removeMoveableShape() {
      this.moveableShapes.pop();
    }
  }, {
    key: "addStaticShape",
    value: function addStaticShape(staticShape) {
      this.staticShapes.push(staticShape);
    }
  }, {
    key: "removeStaticShape",
    value: function removeStaticShape() {
      this.staticShapes.pop();
    }
  }, {
    key: "violateRestriction",
    value: function violateRestriction(restriction) {
      for (var i = 0; i < this.staticShapes.length; i++) {
        if (!Object(_util_checks__WEBPACK_IMPORTED_MODULE_1__["checkConstraints"])(restriction, this.staticShapes[i])) return true;
      }

      return false;
    } //this function checks if all balls are in the bins by checking if the total balls in bins equals to the total balls

  }, {
    key: "checkMoveableShapes",
    value: function checkMoveableShapes() {
      return this.moveableShapes.length === this.staticShapes.reduce(function (acc, shape) {
        return acc + shape.items.length;
      }, 0);
    } //checks if there exists a partition that is identical. Returns true if that's the case

  }, {
    key: "checkEachConfiguration",
    value: function checkEachConfiguration(moveableType, staticType) {
      for (var i = 0; i < this.configurations.length; i++) {
        if (this.configurations[i].checkStaticShapes(this.staticShapes, Object(_util_checks__WEBPACK_IMPORTED_MODULE_1__["determineCases"])(moveableType, staticType))) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "addConfiguration",
    value: function addConfiguration(event, restriction, moveableType, staticType, starsAndBars) {
      event.preventDefault();
      if (this.checkEachConfiguration(moveableType, staticType) || !this.checkMoveableShapes()) return false;

      if (starsAndBars && restriction === "surjective") {
        if (!Object(_util_checks__WEBPACK_IMPORTED_MODULE_1__["checkIDSurjective"])(this.staticShapes)) return false;
      } else {
        if (this.violateRestriction(restriction)) return false;
      }

      this.configurations.push(new _configuration__WEBPACK_IMPORTED_MODULE_0__["default"](this.cloneStaticShapes()));
      return true;
    }
  }, {
    key: "cloneStaticShapes",
    value: function cloneStaticShapes() {
      var newStaticShapes = [];
      var newStaticShape;
      var newMoveableShapes;
      this.staticShapes.forEach(function (staticShape) {
        newMoveableShapes = [];
        staticShape.items.forEach(function (moveableShape) {
          newMoveableShapes.push(Object.assign(Object.create(Object.getPrototypeOf(moveableShape)), moveableShape));
        });
        newStaticShape = Object.assign(Object.create(Object.getPrototypeOf(staticShape)), staticShape);
        newStaticShape.items = newMoveableShapes;
        newStaticShapes.push(newStaticShape);
      });
      return newStaticShapes;
    }
  }, {
    key: "draw",
    value: function draw(ctx, moveableType, staticType) {
      this.moveableShapes.forEach(function (shape) {
        return shape.draw(ctx, moveableType);
      });
      this.staticShapes.forEach(function (shape) {
        return shape.draw(ctx, staticType);
      });
    }
  }]);

  return Interaction;
}();

/* harmony default export */ __webpack_exports__["default"] = (Interaction);

/***/ }),

/***/ "./src/moveable_shape.js":
/*!*******************************!*\
  !*** ./src/moveable_shape.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MoveableShape =
/*#__PURE__*/
function () {
  function MoveableShape(pos, boundingBox) {
    _classCallCheck(this, MoveableShape);

    this.pos = pos;
    this.boundingBox = boundingBox;
    this.isClicked = false;
  }

  _createClass(MoveableShape, [{
    key: "checkBounds",
    value: function checkBounds(x, y) {
      var topLeft = x >= this.boundingBox[0][0] && y >= this.boundingBox[0][1];
      var topRight = x < this.boundingBox[1][0] && y >= this.boundingBox[1][1];
      var bottomRight = x < this.boundingBox[2][0] && y < this.boundingBox[2][1];
      var bottomLeft = x >= this.boundingBox[3][0] && y < this.boundingBox[3][1];
      return topLeft && topRight && bottomRight && bottomLeft;
    }
  }, {
    key: "recalculateBoundingBox",
    value: function recalculateBoundingBox() {}
  }, {
    key: "draw",
    value: function draw(ctx) {}
  }]);

  return MoveableShape;
}();

/* harmony default export */ __webpack_exports__["default"] = (MoveableShape);

/***/ }),

/***/ "./src/star.js":
/*!*********************!*\
  !*** ./src/star.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _static_shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static_shape */ "./src/static_shape.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Star =
/*#__PURE__*/
function (_StaticShape) {
  _inherits(Star, _StaticShape);

  function Star(pos, gap) {
    var _this;

    _classCallCheck(this, Star);

    var boundingBox = [[pos[0], pos[1] - 20], [pos[0] + gap, pos[1] - 20], [pos[0] + gap, pos[1] + 90], [pos[0], pos[1] + 90]];
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Star).call(this, pos, boundingBox));
    _this.gap = gap;
    return _this;
  }

  _createClass(Star, [{
    key: "draw",
    value: function draw(ctx) {
      if (_typeof(ctx) === "object") {
        ctx.beginPath();
        ctx.moveTo(this.pos[0] - 5, this.pos[1] - 3);
        ctx.lineTo(this.pos[0] + 4, this.pos[1] + 24);
        ctx.lineTo(this.pos[0] + 35, this.pos[1] + 25);
        ctx.lineTo(this.pos[0] + 9, this.pos[1] + 37);
        ctx.lineTo(this.pos[0] + 20, this.pos[1] + 60);
        ctx.lineTo(this.pos[0] - 5, this.pos[1] + 42);
        ctx.lineTo(this.pos[0] - 27, this.pos[1] + 60);
        ctx.lineTo(this.pos[0] - 19, this.pos[1] + 37);
        ctx.lineTo(this.pos[0] - 45, this.pos[1] + 25);
        ctx.lineTo(this.pos[0] - 14, this.pos[1] + 24);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.fillText(this.items.length, this.pos[0] + 90, this.pos[1] + 150);
      }
    }
  }]);

  return Star;
}(_static_shape__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Star);

/***/ }),

/***/ "./src/static_shape.js":
/*!*****************************!*\
  !*** ./src/static_shape.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StaticShape =
/*#__PURE__*/
function () {
  function StaticShape(pos, boundingBox) {
    _classCallCheck(this, StaticShape);

    this.pos = pos;
    this.boundingBox = boundingBox;
    this.items = [];
  }

  _createClass(StaticShape, [{
    key: "checkBounds",
    value: function checkBounds(x, y) {
      var topLeft = x >= this.boundingBox[0][0] && y >= this.boundingBox[0][1];
      var topRight = x < this.boundingBox[1][0] && y >= this.boundingBox[1][1];
      var bottomRight = x < this.boundingBox[2][0] && y < this.boundingBox[2][1];
      var bottomLeft = x >= this.boundingBox[3][0] && y < this.boundingBox[3][1];
      return topLeft && topRight && bottomRight && bottomLeft;
    }
  }, {
    key: "checkItem",
    value: function checkItem(item) {
      var bound1 = this.checkBounds(item.boundingBox[0][0], item.boundingBox[0][1]);
      var bound2 = this.checkBounds(item.boundingBox[1][0], item.boundingBox[1][1]);
      var bound3 = this.checkBounds(item.boundingBox[2][0], item.boundingBox[2][1]);
      var bound4 = this.checkBounds(item.boundingBox[3][0], item.boundingBox[3][1]);
      return bound1 && bound2 && bound3 && bound4;
    }
  }, {
    key: "addItem",
    value: function addItem(item) {
      if (!this.items.includes(item) && this.checkItem(item)) {
        this.items.push(item);
      }
    }
  }, {
    key: "removeItem",
    value: function removeItem(item) {
      if (this.items.includes(item) && !this.checkItem(item)) {
        var index = this.items.indexOf(item);
        this.items.splice(index, 1);
      }
    }
  }, {
    key: "recalculateBoundingBox",
    value: function recalculateBoundingBox() {}
  }, {
    key: "draw",
    value: function draw(ctx) {}
  }]);

  return StaticShape;
}();

/* harmony default export */ __webpack_exports__["default"] = (StaticShape);

/***/ }),

/***/ "./util/checks.js":
/*!************************!*\
  !*** ./util/checks.js ***!
  \************************/
/*! exports provided: determineCases, checkConstraints, checkIDSurjective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determineCases", function() { return determineCases; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkConstraints", function() { return checkConstraints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIDSurjective", function() { return checkIDSurjective; });
var determineCases = function determineCases(moveableType, staticType) {
  if (moveableType.toLowerCase() === "distinguishable") {
    if (staticType.toLowerCase() === "distinguishable") {
      return function (shape1, shape2, i) {
        return checkOrderOfShapes(shape1.items, shape2[i].items);
      };
    } else if (staticType.toLowerCase() === "indistinguishable") {
      return function (shape1, shape2) {
        return checkAgainstOtherShapes(shape1.items, shape2, checkForSimilarShapes);
      };
    }
  } else if (moveableType.toLowerCase() === "indistinguishable") {
    if (staticType.toLowerCase() === "distinguishable") {
      return function (shape1, shape2, i) {
        return checkTotalShapes(shape1.items, shape2[i].items);
      };
    } else if (staticType.toLowerCase() === "indistinguishable") {
      return function (shape1, shape2) {
        return checkAgainstOtherShapes(shape1.items, shape2, checkForSimilarLength);
      };
    }
  }
}; //only if the bins and balls are distinguishable

var checkOrderOfShapes = function checkOrderOfShapes(items1, items2) {
  if (items1.length !== items2.length) return false;

  for (var i = 0; i < items1.length; i++) {
    if (items1[i].label !== items2[i].label) return false; //return false if the order is incorrect
  }

  return true; //return true if the order is the same for both bins
}; //only if the bins are distinguishable, and balls are indistinguishable, check count of bins


var checkTotalShapes = function checkTotalShapes(items1, items2) {
  return items1.length === items2.length;
}; // For a given order of balls, check against other bins in a partition 
// if there exist similar order.


var checkAgainstOtherShapes = function checkAgainstOtherShapes(items, otherShapes, checkCallback) {
  for (var i = 0; i < otherShapes.length; i++) {
    if (checkCallback(items, otherShapes[i].items)) return true;
  }

  return false;
}; //this function checks if two bins have the same balls, but not necessarily in order


var checkForSimilarShapes = function checkForSimilarShapes(items1, items2) {
  if (items1.length !== items2.length) return false;
  var labels = {};

  for (var i = 0; i < items2.length; i++) {
    labels[items2[i].label] = items2[i].label;
  }

  for (var _i = 0; _i < items1.length; _i++) {
    if (!Boolean(labels[items1[_i].label])) return false;
  }

  return true; //return true if the order is the same for both bins
}; //this function checks if two bins have the same amount of balls, regardless of their labels


var checkForSimilarLength = function checkForSimilarLength(items1, items2) {
  return items1.length === items2.length;
};

var checkConstraints = function checkConstraints(restriction, shape) {
  if (restriction.toLowerCase() === "injective") {
    return checkInjective(shape);
  } else if (restriction.toLowerCase() === "surjective") {
    return checkSurjective(shape);
  } else {
    return true;
  }
};
var checkIDSurjective = function checkIDSurjective(shapes) {
  if (shapes[0].items.length > 0 || shapes[shapes.length - 1].items.length > 0) return false;

  for (var i = 1; i < shapes.length - 1; i++) {
    if (!checkInjective(shapes[i])) return false;
  }

  return true;
}; //if a bin has at most one ball

var checkInjective = function checkInjective(shape) {
  if (shape.items.length <= 1) {
    return true;
  } else {
    return false;
  }
}; //if a bin has at least one ball


var checkSurjective = function checkSurjective(shape) {
  if (shape.items.length > 0) {
    return true;
  } else {
    return false;
  }
};

/***/ }),

/***/ "./util/event_listeners.js":
/*!*********************************!*\
  !*** ./util/event_listeners.js ***!
  \*********************************/
/*! exports provided: addEventsToCases, addEventsToRules, addEventsToButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventsToCases", function() { return addEventsToCases; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventsToRules", function() { return addEventsToRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventsToButtons", function() { return addEventsToButtons; });
var addEventsToCases = function addEventsToCases(display) {
  var case1 = document.getElementsByClassName("dd");
  var case2 = document.getElementsByClassName("di");
  var case3 = document.getElementsByClassName("id");
  var case4 = document.getElementsByClassName("ii");

  for (var i = 0; i < case1.length; i++) {
    case1[i].addEventListener("click", function (event) {
      display.moveableType = "distinguishable";
      display.staticType = "distinguishable";
      display.restart();
    });
    case2[i].addEventListener("click", function (event) {
      display.moveableType = "distinguishable";
      display.staticType = "indistinguishable";
      display.restart();
    });
    case3[i].addEventListener("click", function (event) {
      display.moveableType = "indistinguishable";
      display.staticType = "distinguishable";
      display.restart();
    });
    case4[i].addEventListener("click", function (event) {
      display.moveableType = "indistinguishable";
      display.staticType = "indistinguishable";
      display.restart();
    });
  }
};
var addEventsToRules = function addEventsToRules(display) {
  var rule1 = document.getElementsByClassName("unr");
  var rule2 = document.getElementsByClassName("inj");
  var rule3 = document.getElementsByClassName("sur");

  for (var i = 0; i < rule1.length; i++) {
    rule1[i].addEventListener("click", function (event) {
      display.restriction = "unrestricted";
    });
    rule2[i].addEventListener("click", function (event) {
      display.restriction = "injective";
    });
    rule3[i].addEventListener("click", function (event) {
      display.restriction = "surjective";
    });
  }
};
var addEventsToButtons = function addEventsToButtons(display) {
  document.getElementsByClassName("reset-state")[0].addEventListener("click", function (event) {
    display.resetState();
    display.start();
  });
  document.getElementsByClassName("reset-problem")[0].addEventListener("click", function (event) {
    display.resetInterface();
    display.addToConfigurations();
    display.start();
  });
  document.getElementsByClassName("submit-config")[0].addEventListener("submit", function (event) {
    if (display.interaction.addConfiguration(event, display.restriction, display.moveableType, display.staticType, display.distribution.starsAndBars)) {
      display.addToConfigurations();
      appendPartition(display);
    } else {
      console.log("Cannot add partition!");
    }
  });
};

var appendPartition = function appendPartition(display) {
  var newCanvas = document.createElement("CANVAS");
  newCanvas.classList.add("configuration");
  newCanvas.setAttribute("width", "290");
  var ctx = newCanvas.getContext("2d");
  var length = display.interaction.configurations.length;
  var y = scaleNewCanvas(display, ctx, newCanvas);
  display.interaction.configurations[length - 1].draw(ctx, display.moveableType, display.staticType, y);
};

var scaleNewCanvas = function scaleNewCanvas(display, ctx, newCanvas) {
  var length = display.interaction.staticShapes.length;
  var history = document.getElementsByClassName("history")[0];

  if (length === 1 || length === 2) {
    newCanvas.setAttribute("height", "275");
    ctx.scale(0.5, 0.5);
    history.appendChild(newCanvas);
    return newCanvas.getBoundingClientRect().height - 150;
  } else if (length === 3) {
    newCanvas.setAttribute("height", "225");
    ctx.scale(0.4, 0.4);
    history.appendChild(newCanvas);
    return newCanvas.getBoundingClientRect().height - 100;
  } else if (length === 4) {
    newCanvas.setAttribute("height", "175");
    ctx.scale(0.3, 0.3);
    history.appendChild(newCanvas);
    return newCanvas.getBoundingClientRect().height - 50;
  } else {
    newCanvas.setAttribute("height", "125");
    ctx.scale(0.24, 0.24);
    history.appendChild(newCanvas);
    return newCanvas.getBoundingClientRect().height;
  }
};

/***/ }),

/***/ "./util/formulas.js":
/*!**************************!*\
  !*** ./util/formulas.js ***!
  \**************************/
/*! exports provided: determineFormula */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determineFormula", function() { return determineFormula; });
//function naming convention: First character is label (Distinguishable or Indistinguishable) of ball, second character is label of bin, last word is rules
var determineFormula = function determineFormula(ballType, binType, rules) {
  switch (ballType) {
    case "distinguishable":
      switch (binType) {
        case "distinguishable":
          switch (rules) {
            case "unrestricted":
              return calculateDDUnrestricted;

            case "injective":
              return calculateDDInjective;

            case "surjective":
              return calculateDDSurjective;
          }

        case "indistinguishable":
          switch (rules) {
            case "unrestricted":
              return calculateDIUnrestricted;

            case "injective":
              return calculateDIInjective;

            case "surjective":
              return calculateDISurjective;
          }

      }

    case "indistinguishable":
      switch (binType) {
        case "distinguishable":
          switch (rules) {
            case "unrestricted":
              return calculateIDUnrestricted;

            case "injective":
              return calculateIDInjective;

            case "surjective":
              return calculateIDSurjective;
          }

        case "indistinguishable":
          switch (rules) {
            case "unrestricted":
              return calculateIIUnrestricted;

            case "injective":
              return calculateIIInjective;

            case "surjective":
              return calculateIISurjective;
          }

      }

    default:
      return null;
  }

  ;
}; //k distinguishable balls, n distinguishable bins, no restrictions

var calculateDDUnrestricted = function calculateDDUnrestricted(k, n) {
  return Math.pow(n, k);
}; //k distinguishable balls, n distinguishable bins, injective


var calculateDDInjective = function calculateDDInjective(k, n) {
  if (k > n) return 0;
  return calculateFactorial(n) / calculateFactorial(n - k);
}; //k distinguishable balls, n distinguishable bins, surjective


var calculateDDSurjective = function calculateDDSurjective(k, n) {
  return calculateStirlingNumber(k, n) * calculateFactorial(n);
}; //k indistinguishable balls, n distinguishable bins, no restrictions


var calculateIDUnrestricted = function calculateIDUnrestricted(k, n) {
  k += 1; //since I removed one less bar than usual

  n -= 1; //since I added one more star than usual

  return calculateBinomialCoefficient(n + k - 1, k - 1);
}; //k indistinguishable balls, n distinguishable bins, injective


var calculateIDInjective = function calculateIDInjective(k, n) {
  return calculateBinomialCoefficient(n, k);
}; //k indistinguishable balls, n distinguishable bins, surjective


var calculateIDSurjective = function calculateIDSurjective(k, n) {
  k += 1;
  n -= 1;
  return calculateBinomialCoefficient(n - 1, k - 1);
}; //k distinguishable balls, n indistinguishable bins, no restrictions


var calculateDIUnrestricted = function calculateDIUnrestricted(k, n) {
  var numbers = getNumbersArray(n);

  var formula = function formula(acc, i) {
    return acc + calculateStirlingNumber(k, i);
  };

  return numbers.reduce(formula, 0);
}; //k distinguishable balls, n indistinguishable bins, injective


var calculateDIInjective = function calculateDIInjective(k, n) {
  if (k <= n) {
    return 1;
  } else {
    return 0;
  }
}; //k distinguishable balls, n indistinguishable bins, surjective


var calculateDISurjective = function calculateDISurjective(k, n) {
  return calculateStirlingNumber(k, n);
}; //k indistinguishable balls, n indistinguishable bins, no restrictions


var calculateIIUnrestricted = function calculateIIUnrestricted(k, n) {
  var numbers = getNumbersArray(n);

  var formula = function formula(acc, i) {
    return acc + calculatePartition(k, i);
  };

  return numbers.reduce(formula, 0);
}; //k indistinguishable balls, n indistinguishable bins, injective


var calculateIIInjective = function calculateIIInjective(k, n) {
  if (k <= n) {
    return 1;
  } else {
    return 0;
  }
}; //k indistinguishable balls, n indistinguishable bins, surjective


var calculateIISurjective = function calculateIISurjective(k, n) {
  return calculatePartition(k, n);
}; //calculated using recurrence relation P(n,k)=P(n-1,k-1)+P(n-k,k) <- by wolfram mathworld
//k and n will be reversed because we use k balls and n bins


var calculatePartition = function calculatePartition(k, n) {
  if (k === n) {
    return 1;
  }

  if (k <= 0 || n <= 0) {
    return 0;
  }

  return calculatePartition(k - 1, n - 1) + calculatePartition(k - n, n);
};

var calculateStirlingNumber = function calculateStirlingNumber(n, k) {
  var numbers = getNumbersArray(k);

  var formula = function formula(acc, i) {
    return acc + Math.pow(-1, i) * calculateBinomialCoefficient(k, i) * Math.pow(k - i, n);
  };

  var sumResults = numbers.reduce(formula, 0);
  return 1 / calculateFactorial(k) * sumResults;
};

var calculateBinomialCoefficient = function calculateBinomialCoefficient(n, k) {
  return Math.floor(calculateFactorial(n) / (calculateFactorial(n - k) * calculateFactorial(k)));
};

var calculateFactorial = function calculateFactorial(n) {
  var total = 1;

  while (n > 0) {
    total *= n;
    n -= 1;
  }

  return total;
};

var getNumbersArray = function getNumbersArray(n) {
  var numbers = new Array(n + 1);

  for (var i = 0; i < numbers.length; i++) {
    numbers[i] = i;
  }

  return numbers;
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map