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
  }

  _createClass(Ball, [{
    key: "checkBounds",
    value: function checkBounds(event) {
      var x = event.clientX;
      var y = event.clientY;
      var box = [[this.pos[0] - this.radius, this.pos[1] - this.radius], [this.pos[0] - this.radius, this.pos[1] + this.radius], [this.pos[0] + this.radius, this.pos[1] - this.radius], [this.pos[0] + this.radius, this.pos[1] + this.radius]];
      return x >= box[0][0] && y >= box[0][1] && x >= box[1][0] && y < box[1][1] && x < box[2][0] && y >= box[2][1] && x < box[3][0] && y < box[3][1];
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2);
      ctx.stroke();
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bin = function Bin() {
  _classCallCheck(this, Bin);

  this.amount = [];
};

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

document.addEventListener("DOMContentLoaded", function () {
  var canvasEl = document.getElementById("interface");
  var ctx = canvasEl.getContext("2d");
  var newInterface = new _interface__WEBPACK_IMPORTED_MODULE_0__["default"](2, 5);
  var animation;
  canvasEl.addEventListener("mousedown", function (event) {
    newInterface.balls.forEach(function (ball) {
      if (ball.checkBounds(event)) {
        animation = window.requestAnimationFrame(ball.draw);
        ball.isClicked = true;
      }
    });
  });
  canvasEl.addEventListener("mousemove", function (event) {
    newInterface.balls.forEach(function (ball) {
      if (ball.isClicked) {
        ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height);
        ball.pos[0] = event.clientX;
        ball.pos[1] = event.clientY;
        ball.draw(ctx);
      }
    });
  });
  canvasEl.addEventListener("mouseup", function (event) {
    window.cancelAnimationFrame(animation);
    newInterface.balls.forEach(function (ball) {
      if (ball.isClicked) ball.isClicked = false;
    });
  });
  window.ctx = ctx;
  newInterface.start(ctx);
});

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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Interface =
/*#__PURE__*/
function () {
  function Interface(numBalls, numBins) {
    _classCallCheck(this, Interface);

    this.balls = new Array(numBalls);

    for (var i = 0; i < this.balls.length; i++) {
      this.balls[i] = new _ball__WEBPACK_IMPORTED_MODULE_1__["default"](i, [100 * (i + 1), 50], 35);
    }

    this.bins = new Array(numBins);
  }

  _createClass(Interface, [{
    key: "start",
    value: function start(ctx) {
      this.balls.forEach(function (ball) {
        return ball.draw(ctx);
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



var Partition = function Partition() {
  _classCallCheck(this, Partition);

  this.bins = [];
};

/* harmony default export */ __webpack_exports__["default"] = (Partition);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map