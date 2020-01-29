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
    value: function draw(ctx) {
      //ctx is a number when clicked so I need to have a conditional here
      if (_typeof(ctx) === "object") {
        this.recalculateBoundingBox();
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.font = "30px sans-serif";
        ctx.fillText(this.label, this.pos[0] - 8, this.pos[1] + 8);
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
    value: function draw(ctx) {
      if (_typeof(ctx) === "object") {
        this.recalculateBoundingBox();
        ctx.beginPath();
        ctx.moveTo(this.pos[0], this.pos[1]);
        ctx.lineTo(this.pos[0] + this.bounds[0], this.pos[1] + this.bounds[2]);
        ctx.lineTo(this.pos[0] + this.bounds[1], this.pos[1] + this.bounds[2]);
        ctx.lineTo(this.pos[0] + this.bounds[0] + this.bounds[1], this.pos[1]);
        ctx.stroke();
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

document.addEventListener("DOMContentLoaded", function () {
  var canvasEl = document.getElementById("canvas");
  var ctx = canvasEl.getContext("2d");
  var newInterface = new _interface__WEBPACK_IMPORTED_MODULE_0__["default"](4, 3);
  var animation;
  console.log(canvasEl.getBoundingClientRect());
  canvasEl.addEventListener("mousedown", function (event) {
    for (var i = 0; i < newInterface.balls.length; i++) {
      if (newInterface.balls[i].checkBounds(event.offsetX, event.offsetY)) {
        animation = window.requestAnimationFrame(newInterface.balls[i].draw);
        newInterface.balls[i].isClicked = true;
        break; //break here to resolve conflict between overlapping balls
      }
    }
  });
  canvasEl.addEventListener("mousemove", function (event) {
    newInterface.balls.forEach(function (ball) {
      if (ball.isClicked) {
        ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height); //clear canvas to prevent trailing circles

        ball.pos[0] = event.offsetX;
        ball.pos[1] = event.offsetY;
        newInterface.draw(ctx);
      }
    });
  });
  canvasEl.addEventListener("mouseup", function (event) {
    window.cancelAnimationFrame(animation);
    newInterface.balls.forEach(function (ball) {
      if (ball.isClicked) {
        ball.isClicked = false;
        newInterface.bins.forEach(function (bin) {
          bin.addBall(ball);
          bin.removeBall(ball);
        });
      }
    });
  });
  newInterface.draw(ctx);
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
/* harmony import */ var _util_checks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/checks */ "./util/checks.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Interface =
/*#__PURE__*/
function () {
  function Interface(numBalls, numBins, ballType, binType) {
    var _this = this;

    _classCallCheck(this, Interface);

    this.balls = new Array(numBalls);
    this.bins = new Array(numBins);
    this.partitions = [];
    document.getElementsByClassName("submit-partition")[0].addEventListener("submit", function (event) {
      if (_this.addPartition(event)) {
        console.log(_this.partitions);
      } else {
        console.log("Cannot add partition!");
      }
    });

    for (var i = 0; i < this.balls.length; i++) {
      this.balls[i] = new _ball__WEBPACK_IMPORTED_MODULE_1__["default"](i + 1, [100 * (i + 1), 50], 35);
    }

    for (var _i = 0; _i < this.bins.length; _i++) {
      this.bins[_i] = new _bin__WEBPACK_IMPORTED_MODULE_0__["default"](_i + 1, [300 * _i + 20, 400], [40, 210, 200]);
    }
  }

  _createClass(Interface, [{
    key: "violateConstraints",
    value: function violateConstraints() {
      for (var i = 0; i < this.bins.length; i++) {
        if (!Object(_util_checks__WEBPACK_IMPORTED_MODULE_3__["checkConstraints"])("unrestricted", this.bins[i])) return true;
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
    value: function checkEachPartition() {
      for (var i = 0; i < this.partitions.length; i++) {
        if (this.partitions[i].checkBins(this.bins, Object(_util_checks__WEBPACK_IMPORTED_MODULE_3__["determineCases"])("distinguishable", "distinguishable"))) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "addPartition",
    value: function addPartition(event) {
      event.preventDefault();
      if (this.checkEachPartition() || this.violateConstraints() || !this.checkBalls()) return false; //create a deep copy of bins <- JSON.parse(JSON.stringify(bins))

      this.partitions.push(new _partiton__WEBPACK_IMPORTED_MODULE_2__["default"](JSON.parse(JSON.stringify(this.bins)), "surjective"));
      return true;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      this.balls.forEach(function (ball) {
        return ball.draw(ctx);
      });
      this.bins.forEach(function (bin) {
        return bin.draw(ctx);
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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map