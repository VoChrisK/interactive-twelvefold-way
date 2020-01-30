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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ball =
/*#__PURE__*/
function () {
  function Ball(label, pos, radius) {
    _classCallCheck(this, Ball);

    this.label = label;
    this.pos = pos;
    this.radius = radius;
    this.isClicked = false;
    this.boundingBox = [[this.pos[0] - this.radius, this.pos[1] - this.radius], [this.pos[0] - this.radius, this.pos[1] + this.radius], [this.pos[0] + this.radius, this.pos[1] - this.radius], [this.pos[0] + this.radius, this.pos[1] + this.radius]];
  }

  _createClass(Ball, [{
    key: "checkBounds",
    value: function checkBounds(x, y) {
      return x >= this.boundingBox[0][0] && y >= this.boundingBox[0][1] && x >= this.boundingBox[1][0] && y < this.boundingBox[1][1] && x < this.boundingBox[2][0] && y >= this.boundingBox[2][1] && x < this.boundingBox[3][0] && y < this.boundingBox[3][1];
    }
  }, {
    key: "draw",
    value: function draw(ctx, ballType) {
      //ctx is a number when clicked so I need to have a conditional here
      if (_typeof(ctx) === "object") {
        this.recalculateBoundingBox();
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.font = "30px sans-serif";

        if (ballType === "distinguishable") {
          ctx.fillText(this.label, this.pos[0] - 8, this.pos[1] + 8);
        }
      }
    }
  }, {
    key: "recalculateBoundingBox",
    value: function recalculateBoundingBox() {
      this.boundingBox = [[this.pos[0] - this.radius, this.pos[1] - this.radius], [this.pos[0] - this.radius, this.pos[1] + this.radius], [this.pos[0] + this.radius, this.pos[1] - this.radius], [this.pos[0] + this.radius, this.pos[1] + this.radius]];
    }
  }]);

  return Ball;
}();

/* harmony default export */ __webpack_exports__["default"] = (Ball);

/***/ }),

/***/ "./src/bin.js":
/*!********************!*\
  !*** ./src/bin.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bin =
/*#__PURE__*/
function () {
  function Bin(label, pos, bounds) {
    _classCallCheck(this, Bin);

    this.label = label;
    this.pos = pos;
    this.bounds = bounds; //[X1, X2, Y]

    this.balls = [];
    this.boundingBox = [[this.pos[0], this.pos[1]], [this.pos[0] + this.bounds[0], this.pos[1] + this.bounds[2]], [this.pos[0] + this.bounds[1], this.pos[1] + this.bounds[2]], [this.pos[0] + this.bounds[0] + this.bounds[1], this.pos[1]]];
  }

  _createClass(Bin, [{
    key: "checkBounds",
    value: function checkBounds(x, y) {
      return x >= this.boundingBox[0][0] && y >= this.boundingBox[0][1] && x >= this.boundingBox[1][0] && y < this.boundingBox[1][1] && x < this.boundingBox[2][0] && y < this.boundingBox[2][1] && x < this.boundingBox[3][0] && y >= this.boundingBox[3][1];
    } // checkCollision(x, y) {
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

  }, {
    key: "checkBall",
    value: function checkBall(ball) {
      return this.checkBounds(ball.boundingBox[0][0], ball.boundingBox[0][1]) && this.checkBounds(ball.boundingBox[1][0], ball.boundingBox[1][1]) && this.checkBounds(ball.boundingBox[2][0], ball.boundingBox[2][1]) && this.checkBounds(ball.boundingBox[3][0], ball.boundingBox[3][1]);
    }
  }, {
    key: "addBall",
    value: function addBall(ball) {
      if (!this.balls.includes(ball) && this.checkBall(ball)) {
        this.balls.push(ball);
      }
    }
  }, {
    key: "removeBall",
    value: function removeBall(ball) {
      if (this.balls.includes(ball) && !this.checkBall(ball)) {
        var index = this.balls.indexOf(ball);
        this.balls.splice(index, 1);
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx, binType) {
      if (_typeof(ctx) === "object") {
        this.recalculateBoundingBox();
        ctx.beginPath();
        ctx.moveTo(this.pos[0], this.pos[1]);
        ctx.lineTo(this.pos[0] + this.bounds[0], this.pos[1] + this.bounds[2]);
        ctx.lineTo(this.pos[0] + this.bounds[1], this.pos[1] + this.bounds[2]);
        ctx.lineTo(this.pos[0] + this.bounds[0] + this.bounds[1], this.pos[1]);
        ctx.stroke();

        if (binType === "distinguishable") {
          ctx.fillText(this.label, this.pos[0] + 95, this.pos[1] + 150);
        }

        ctx.fillText(this.balls.length, this.pos[0] + this.bounds[1] - 65, this.pos[1] + this.bounds[2] + 30);
      }
    }
  }, {
    key: "recalculateBoundingBox",
    value: function recalculateBoundingBox() {
      this.boundingBox = [[this.pos[0], this.pos[1]], [this.pos[0] + this.bounds[0], this.pos[1] + this.bounds[2]], [this.pos[0] + this.bounds[1], this.pos[1] + this.bounds[2]], [this.pos[0] + this.bounds[0] + this.bounds[1], this.pos[1]]];
    }
  }]);

  return Bin;
}();

/* harmony default export */ __webpack_exports__["default"] = (Bin);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ "./src/interface.js");
/* harmony import */ var _interface_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface-view */ "./src/interface-view.js");
/* harmony import */ var _util_formulas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../util/formulas */ "./util/formulas.js");



document.addEventListener("DOMContentLoaded", function () {
  var canvasEl = document.getElementById("canvas");
  var ctx = canvasEl.getContext("2d");
  var result = Object(_util_formulas__WEBPACK_IMPORTED_MODULE_2__["determineFormula"])("distinguishable", "distinguishable", "unrestricted")(3, 3);
  var newInterfaceView = new _interface_view__WEBPACK_IMPORTED_MODULE_1__["default"]("distinguishable", "distinguishable", "unrestricted", result, ctx);
  var animation;
  canvasEl.addEventListener("mousedown", function (event) {
    for (var i = 0; i < newInterfaceView["interface"].balls.length; i++) {
      if (newInterfaceView["interface"].balls[i].checkBounds(event.offsetX, event.offsetY)) {
        animation = window.requestAnimationFrame(newInterfaceView["interface"].balls[i].draw);
        newInterfaceView["interface"].balls[i].isClicked = true;
        break; //break here to resolve conflict between overlapping balls
      }
    }
  });
  canvasEl.addEventListener("mousemove", function (event) {
    newInterfaceView["interface"].balls.forEach(function (ball) {
      if (ball.isClicked) {
        ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height); //clear canvas to prevent trailing circles

        ball.pos[0] = event.offsetX;
        ball.pos[1] = event.offsetY;
        newInterfaceView.start();
      }
    });
  });
  canvasEl.addEventListener("mouseup", function (event) {
    window.cancelAnimationFrame(animation);
    newInterfaceView["interface"].balls.forEach(function (ball) {
      if (ball.isClicked) {
        ball.isClicked = false;
        newInterfaceView["interface"].bins.forEach(function (bin) {
          bin.addBall(ball);
          bin.removeBall(ball);
        });
      }
    });
    ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height); //clear canvas to prevent trailing circles

    newInterfaceView.start();
  });
  newInterfaceView.addEventsToRules();
  newInterfaceView.addEventsToCases();
  newInterfaceView.addEventsToButtons();
  newInterfaceView.updateCount(canvasEl);
  newInterfaceView.start();
});

/***/ }),

/***/ "./src/interface-alt.js":
/*!******************************!*\
  !*** ./src/interface-alt.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _star__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./star */ "./src/star.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 //this class is concerned with handling the logic for stars and bars

var InterfaceAlt =
/*#__PURE__*/
function () {
  function InterfaceAlt(numStars, numBars, starPosition, barPosition) {
    _classCallCheck(this, InterfaceAlt);

    this.stars;
    this.bars;
    this.starPosition = starPosition;
    this.barPosition = barPosition;
    this.setStars(numStars);
  }

  _createClass(InterfaceAlt, [{
    key: "setStars",
    value: function setStars(numStars) {
      this.stars = new Array(numStars);

      for (var i = 0; i < this.stars.length; i++) {
        this.stars[i] = new _star__WEBPACK_IMPORTED_MODULE_0__["default"]([133 * (i + 1), 400]);
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      this.stars.forEach(function (star) {
        return star.draw(ctx);
      }); // this.barss.forEach(bar => bar.draw(ctx));
    }
  }]);

  return InterfaceAlt;
}();

/* harmony default export */ __webpack_exports__["default"] = (InterfaceAlt);

/***/ }),

/***/ "./src/interface-view.js":
/*!*******************************!*\
  !*** ./src/interface-view.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ "./src/interface.js");
/* harmony import */ var _util_formulas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../util/formulas */ "./util/formulas.js");
/* harmony import */ var _interface_alt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface-alt */ "./src/interface-alt.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



 //this class is concerned with the presentation/event handling of the interface

var InterfaceView =
/*#__PURE__*/
function () {
  function InterfaceView(ballType, binType, rules, numPartitons, ctx) {
    _classCallCheck(this, InterfaceView);

    this.ballType = ballType;
    this.binType = binType;
    this.rules = rules;
    this.currentPartitions = 0;
    this.numPartitons = numPartitons;
    this.ctx = ctx;
    this["interface"] = new _interface__WEBPACK_IMPORTED_MODULE_0__["default"](3, 3, [100, 50], [245, 440]);
    this.interfaceAlt = new _interface_alt__WEBPACK_IMPORTED_MODULE_2__["default"](3, 3, [100, 50], [100, 100]);
  }

  _createClass(InterfaceView, [{
    key: "addEventsToCases",
    value: function addEventsToCases() {
      var _this = this;

      var case1 = document.getElementsByClassName("dd");
      var case2 = document.getElementsByClassName("di");
      var case3 = document.getElementsByClassName("id");
      var case4 = document.getElementsByClassName("ii");

      for (var i = 0; i < case1.length; i++) {
        case1[i].addEventListener("click", function (event) {
          _this.ballType = "distinguishable";
          _this.binType = "distinguishable";

          _this.calculateFormula();

          _this.resetInterface();

          _this.start();
        });
        case2[i].addEventListener("click", function (event) {
          _this.ballType = "distinguishable";
          _this.binType = "indistinguishable";

          _this.calculateFormula();

          _this.resetInterface();

          _this.start();
        });
        case3[i].addEventListener("click", function (event) {
          _this.ballType = "indistinguishable";
          _this.binType = "distinguishable";

          _this.calculateFormula();

          _this.resetInterface();

          if (_this.rules !== "injective") {
            _this.startAlt();
          } else {
            _this.start();
          }
        });
        case4[i].addEventListener("click", function (event) {
          _this.ballType = "indistinguishable";
          _this.binType = "indistinguishable";

          _this.calculateFormula();

          _this.resetInterface();

          _this.start();
        });
      }
    }
  }, {
    key: "addEventsToRules",
    value: function addEventsToRules() {
      var _this2 = this;

      var rule1 = document.getElementsByClassName("unr");
      var rule2 = document.getElementsByClassName("inj");
      var rule3 = document.getElementsByClassName("sur");

      for (var i = 0; i < rule1.length; i++) {
        rule1[i].addEventListener("click", function (event) {
          _this2.rules = "unrestricted";
        });
        rule2[i].addEventListener("click", function (event) {
          _this2.rules = "injective";
        });
        rule3[i].addEventListener("click", function (event) {
          _this2.rules = "surjective";
        });
      }
    }
  }, {
    key: "addEventsToButtons",
    value: function addEventsToButtons() {
      var _this3 = this;

      document.getElementsByClassName("reset-state")[0].addEventListener("click", function (event) {
        _this3.resetState();

        _this3.start();
      });
      document.getElementsByClassName("reset-problem")[0].addEventListener("click", function (event) {
        _this3.resetInterface();

        _this3.addToConfigurations();

        _this3.start();
      });
      document.getElementsByClassName("submit-config")[0].addEventListener("submit", function (event) {
        if (_this3["interface"].addPartition(event, _this3.rules, _this3.ballType, _this3.binType)) {
          _this3.currentPartitions++;

          _this3.addToConfigurations();
        } else {
          console.log("Cannot add partition!");
        }
      });
    }
  }, {
    key: "addToConfigurations",
    value: function addToConfigurations() {
      document.getElementsByClassName("configuration-count")[0].innerHTML = "Configurations: ".concat(this.currentPartitions, "/").concat(this.numPartitons);
    }
  }, {
    key: "calculateFormula",
    value: function calculateFormula() {
      console.log(this.ballType + " " + this.binType + " " + this.rules);
      this.numPartitons = Object(_util_formulas__WEBPACK_IMPORTED_MODULE_1__["determineFormula"])(this.ballType, this.binType, this.rules)(this["interface"].balls.length, this["interface"].bins.length);
      this.currentPartitions = 0;
      this.addToConfigurations();
    }
  }, {
    key: "updateCount",
    value: function updateCount(canvasEl) {
      var _this4 = this;

      var newValue;
      document.getElementById("ball-count").addEventListener("input", function (event) {
        event.preventDefault();
        newValue = event.target.value;
        document.getElementsByClassName("num-balls")[0].innerHTML = event.target.value;

        if (newValue > _this4["interface"].balls.length) {
          _this4["interface"].addBall();
        } else {
          _this4["interface"].removeBall();

          _this4.ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height);
        }

        _this4.calculateFormula();

        _this4.start();
      });
      document.getElementById("bin-count").addEventListener("input", function (event) {
        newValue = event.target.value;
        document.getElementsByClassName("num-bins")[0].innerHTML = event.target.value;

        if (newValue > _this4["interface"].bins.length) {
          _this4["interface"].addBin();
        } else {
          _this4["interface"].removeBin();

          _this4.ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height);
        }

        _this4.calculateFormula();

        _this4.start();
      });
    }
  }, {
    key: "resetState",
    value: function resetState() {
      this["interface"].setBalls(this["interface"].balls.length);
      this["interface"].setBins(this["interface"].bins.length);
      var canvasEl = document.getElementById("canvas");
      this.ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height);
    }
  }, {
    key: "resetInterface",
    value: function resetInterface() {
      this.resetState();
      this["interface"].partitions = [];
      this.currentPartitions = 0;
    }
  }, {
    key: "start",
    value: function start() {
      this["interface"].draw(this.ctx, this.ballType, this.binType);
    }
  }, {
    key: "startAlt",
    value: function startAlt() {
      this.interfaceAlt.draw(this.ctx);
    }
  }]);

  return InterfaceView;
}();

/* harmony default export */ __webpack_exports__["default"] = (InterfaceView);

/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bin */ "./src/bin.js");
/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ball */ "./src/ball.js");
/* harmony import */ var _partiton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partiton */ "./src/partiton.js");
/* harmony import */ var _util_checks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/checks */ "./util/checks.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




 //this class is concerned with the logic of the interface

var Interface =
/*#__PURE__*/
function () {
  function Interface(numBalls, numBins, ballPosition, binPosition) {
    _classCallCheck(this, Interface);

    this.balls;
    this.bins;
    this.ballPosition = ballPosition;
    this.binPosition = binPosition;
    this.partitions = [];
    this.setBalls(numBalls);
    this.setBins(numBins);
  }

  _createClass(Interface, [{
    key: "setBalls",
    value: function setBalls(numBalls) {
      this.balls = new Array(numBalls);

      for (var i = 0; i < this.balls.length; i++) {
        this.balls[i] = new _ball__WEBPACK_IMPORTED_MODULE_1__["default"](i + 1, [this.ballPosition[0] * (i + 1), this.ballPosition[1]], 35);
      }
    }
  }, {
    key: "setBins",
    value: function setBins(numBins) {
      this.bins = new Array(numBins);

      for (var i = 0; i < this.bins.length; i++) {
        this.bins[i] = new _bin__WEBPACK_IMPORTED_MODULE_0__["default"](i + 1, [this.binPosition[0] * i + 20, this.binPosition[1]], [40, 160, 300]);
      }
    }
  }, {
    key: "addBall",
    value: function addBall() {
      this.balls.push(new _ball__WEBPACK_IMPORTED_MODULE_1__["default"](this.balls.length + 1, [this.ballPosition[0] * (this.balls.length + 1), this.ballPosition[1]], 35));
    }
  }, {
    key: "removeBall",
    value: function removeBall() {
      this.balls.pop();
    }
  }, {
    key: "addBin",
    value: function addBin() {
      this.bins.push(new _bin__WEBPACK_IMPORTED_MODULE_0__["default"](this.bins.length + 1, [this.binPosition[0] * this.bins.length + 20, this.binPosition[1]], [40, 160, 300]));
    }
  }, {
    key: "removeBin",
    value: function removeBin() {
      this.bins.pop();
    }
  }, {
    key: "violateConstraints",
    value: function violateConstraints(rules) {
      for (var i = 0; i < this.bins.length; i++) {
        if (!Object(_util_checks__WEBPACK_IMPORTED_MODULE_3__["checkConstraints"])(rules, this.bins[i])) return true;
      }

      return false;
    } //this function checks if all balls are in the bins by checking if the total balls in bins equals to the total balls

  }, {
    key: "checkBalls",
    value: function checkBalls() {
      return this.balls.length === this.bins.reduce(function (acc, bin) {
        return acc + bin.balls.length;
      }, 0);
    } //checks if there exists a partition that is identical. Returns true if that's the case

  }, {
    key: "checkEachPartition",
    value: function checkEachPartition(ballType, binType) {
      for (var i = 0; i < this.partitions.length; i++) {
        if (this.partitions[i].checkBins(this.bins, Object(_util_checks__WEBPACK_IMPORTED_MODULE_3__["determineCases"])(ballType, binType))) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "addPartition",
    value: function addPartition(event, rules, ballType, binType) {
      event.preventDefault();
      if (this.checkEachPartition(ballType, binType) || this.violateConstraints(rules) || !this.checkBalls()) return false; //create a deep copy of bins <- JSON.parse(JSON.stringify(bins))

      this.partitions.push(new _partiton__WEBPACK_IMPORTED_MODULE_2__["default"](JSON.parse(JSON.stringify(this.bins)), rules));
      return true;
    }
  }, {
    key: "draw",
    value: function draw(ctx, ballType, binType) {
      this.balls.forEach(function (ball) {
        return ball.draw(ctx, ballType);
      });
      this.bins.forEach(function (bin) {
        return bin.draw(ctx, binType);
      });
    }
  }]);

  return Interface;
}();

/* harmony default export */ __webpack_exports__["default"] = (Interface);

/***/ }),

/***/ "./src/partiton.js":
/*!*************************!*\
  !*** ./src/partiton.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bin */ "./src/bin.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 //true values denote there exists a partition, false values denote there doesn't not exist a partition

var Partition =
/*#__PURE__*/
function () {
  function Partition(bins, rules) {
    _classCallCheck(this, Partition);

    this.bins = bins; //array or object of bins

    this.rules = rules; //unrestricted, injective, surjective
  } //this function checks if there is a parititon. 
  //It matches each input's bin with each partition's 
  //bin to check if they have the same configuration. 
  //A counter variable keeps track of simiarities: if 
  //the counter equals to the total # of bins, then this 
  //implies that the partition already exists or the parition
  //does not adhere to the rules


  _createClass(Partition, [{
    key: "checkBins",
    value: function checkBins(bins, checkBothBins) {
      var counter = 0;

      for (var i = 0; i < this.bins.length; i++) {
        if (checkBothBins(bins[i], this.bins, i)) {
          counter++;
        }
      }

      return counter === this.bins.length;
    }
  }]);

  return Partition;
}();

/* harmony default export */ __webpack_exports__["default"] = (Partition);

/***/ }),

/***/ "./src/star.js":
/*!*********************!*\
  !*** ./src/star.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Star =
/*#__PURE__*/
function () {
  function Star(pos) {
    _classCallCheck(this, Star);

    this.pos = pos;
  }

  _createClass(Star, [{
    key: "draw",
    value: function draw(ctx) {
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
    }
  }]);

  return Star;
}();

/* harmony default export */ __webpack_exports__["default"] = (Star);

/***/ }),

/***/ "./util/checks.js":
/*!************************!*\
  !*** ./util/checks.js ***!
  \************************/
/*! exports provided: determineCases, checkConstraints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determineCases", function() { return determineCases; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkConstraints", function() { return checkConstraints; });
var determineCases = function determineCases(ballType, binType) {
  if (ballType.toLowerCase() === "distinguishable") {
    if (binType.toLowerCase() === "distinguishable") {
      return function (bin1, bin2, i) {
        return checkOrderOfBalls(bin1.balls, bin2[i].balls);
      };
    } else if (binType.toLowerCase() === "indistinguishable") {
      return function (bin1, bin2) {
        return checkAgainstOtherBins(bin1.balls, bin2, checkForSimilarBalls);
      };
    }
  } else if (ballType.toLowerCase() === "indistinguishable") {
    if (binType.toLowerCase() === "distinguishable") {
      return function (bin1, bin2, i) {
        return checkTotalBalls(bin1.balls, bin2[i].balls);
      };
    } else if (binType.toLowerCase() === "indistinguishable") {
      return function (bin1, bin2) {
        return checkAgainstOtherBins(bin1.balls, bin2, checkForSimilarLength);
      };
    }
  }
}; //only if the bins and balls are distinguishable

var checkOrderOfBalls = function checkOrderOfBalls(balls1, balls2) {
  if (balls1.length !== balls2.length) return false;

  for (var i = 0; i < balls1.length; i++) {
    if (balls1[i].label !== balls2[i].label) return false; //return false if the order is incorrect
  }

  return true; //return true if the order is the same for both bins
}; //only if the bins are distinguishable, and balls are indistinguishable, check count of bins


var checkTotalBalls = function checkTotalBalls(bin1, bin2) {
  return bin1.length === bin2.length;
}; // For a given order of balls, check against other bins in a partition 
// if there exist similar order.


var checkAgainstOtherBins = function checkAgainstOtherBins(balls, otherBins, checkCallback) {
  for (var i = 0; i < otherBins.length; i++) {
    if (checkCallback(balls, otherBins[i].balls)) return true;
  }

  return false;
}; //this function checks if two bins have the same balls, but not necessarily in order


var checkForSimilarBalls = function checkForSimilarBalls(balls1, balls2) {
  if (balls1.length !== balls2.length) return false;
  var labels = {};

  for (var i = 0; i < balls2.length; i++) {
    labels[balls2[i].label] = balls2[i].label;
  }

  for (var _i = 0; _i < balls1.length; _i++) {
    if (!Boolean(labels[balls1[_i].label])) return false;
  }

  return true; //return true if the order is the same for both bins
}; //this function checks if two bins have the same amount of balls, regardless of their labels


var checkForSimilarLength = function checkForSimilarLength(balls1, balls2) {
  return balls1.length === balls2.length;
};

var checkConstraints = function checkConstraints(rules, bin) {
  if (rules.toLowerCase() === "injective") {
    return checkInjective(bin);
  } else if (rules.toLowerCase() === "surjective") {
    return checkSurjective(bin);
  } else {
    return true;
  }
}; //if a bin has at most one ball

var checkInjective = function checkInjective(bin) {
  if (bin.balls.length <= 1) {
    return true;
  } else {
    return false;
  }
}; //if a bin has at least one ball


var checkSurjective = function checkSurjective(bin) {
  if (bin.balls.length > 0) {
    return true;
  } else {
    return false;
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
  console.log(k + " " + n);
  if (k > n) return 0;
  return calculateFactorial(n) / calculateFactorial(n - k);
}; //k distinguishable balls, n distinguishable bins, surjective


var calculateDDSurjective = function calculateDDSurjective(k, n) {
  return calculateStirlingNumber(k, n) * calculateFactorial(n);
}; //k indistinguishable balls, n distinguishable bins, no restrictions


var calculateIDUnrestricted = function calculateIDUnrestricted(k, n) {
  return calculateBinomialCoefficient(k - 1, n - 1);
}; //k indistinguishable balls, n distinguishable bins, injective


var calculateIDInjective = function calculateIDInjective(k, n) {
  return calculateBinomialCoefficient(n, k);
}; //k indistinguishable balls, n distinguishable bins, surjective


var calculateIDSurjective = function calculateIDSurjective(k, n) {
  return calculateBinomialCoefficient(n + k + 1, n - 1);
}; //k distinguishable balls, n indistinguishable bins, no restrictions


var calculateDIUnrestricted = function calculateDIUnrestricted(k, n) {
  var numbers = getNumbersArray(k);

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


var calculateIIUnrestricted = function calculateIIUnrestricted(n, k) {}; //k indistinguishable balls, n indistinguishable bins, injective


var calculateIIInjective = function calculateIIInjective(k, n) {
  if (k <= n) {
    return 1;
  } else {
    return 0;
  }
}; //k indistinguishable balls, n indistinguishable bins, surjective


var calculateIISurjective = function calculateIISurjective(n, k) {};

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