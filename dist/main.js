/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");

var data = d3.csv("https://gist.githubusercontent.com/lefuller/719daced1cc272d4ef244f7ac2d9e137/raw/324be17e0af83073e8c5cabf15b7decf53cad0d7/2020.csv", d3.autoType);
var svg = d3.select("svg").attr("width", "1000").attr("height", "500");
var width = +svg.attr("width");
var height = +svg.attr("height");

var render = function render(data) {
  var xValue = function xValue(d) {
    return d["Avg VP"];
  };

  var yValue = function yValue(d) {
    return d.Player;
  };

  var xScale = d3.scaleLinear().domain([0, d3.max(data, xValue)]).range([0, width]);
  var yScale = d3.scaleBand().domain(data.map(yValue)).range([0, height]);
  svg.selectAll("rect").data(data).enter().append("rect").attr("y", function (d) {
    return yScale(yValue(d));
  }).attr("width", function (d) {
    return xScale(xValue(d));
  }).attr("height", yScale.bandwidth());
};

data.then(function (d) {
  var factions = d.filter(function (row) {
    return row.Faction === "Adepta Sororitas";
  });
  render(factions);
  console.log(factions);
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmltZGFya3N0YXRzLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2dyaW1kYXJrc3RhdHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ3JpbWRhcmtzdGF0cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dyaW1kYXJrc3RhdHMvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiZGF0YSIsImQzIiwiY3N2IiwiYXV0b1R5cGUiLCJzdmciLCJzZWxlY3QiLCJhdHRyIiwid2lkdGgiLCJoZWlnaHQiLCJyZW5kZXIiLCJ4VmFsdWUiLCJkIiwieVZhbHVlIiwiUGxheWVyIiwieFNjYWxlIiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJtYXgiLCJyYW5nZSIsInlTY2FsZSIsInNjYWxlQmFuZCIsIm1hcCIsInNlbGVjdEFsbCIsImVudGVyIiwiYXBwZW5kIiwiYmFuZHdpZHRoIiwidGhlbiIsImZhY3Rpb25zIiwiZmlsdGVyIiwicm93IiwiRmFjdGlvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLEVBQUUsQ0FBQ0MsR0FBSCxDQUNYLG9JQURXLEVBRVhELEVBQUUsQ0FBQ0UsUUFGUSxDQUFiO0FBS0EsSUFBTUMsR0FBRyxHQUFHSCxFQUFFLENBQUNJLE1BQUgsQ0FBVSxLQUFWLEVBQWlCQyxJQUFqQixDQUFzQixPQUF0QixFQUErQixNQUEvQixFQUF1Q0EsSUFBdkMsQ0FBNEMsUUFBNUMsRUFBc0QsS0FBdEQsQ0FBWjtBQUVBLElBQU1DLEtBQUssR0FBRyxDQUFDSCxHQUFHLENBQUNFLElBQUosQ0FBUyxPQUFULENBQWY7QUFDQSxJQUFNRSxNQUFNLEdBQUcsQ0FBQ0osR0FBRyxDQUFDRSxJQUFKLENBQVMsUUFBVCxDQUFoQjs7QUFFQSxJQUFNRyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDVCxJQUFELEVBQVU7QUFDdkIsTUFBTVUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsQ0FBRDtBQUFBLFdBQU9BLENBQUMsQ0FBQyxRQUFELENBQVI7QUFBQSxHQUFmOztBQUNBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNELENBQUQ7QUFBQSxXQUFPQSxDQUFDLENBQUNFLE1BQVQ7QUFBQSxHQUFmOztBQUVBLE1BQU1DLE1BQU0sR0FBR2IsRUFBRSxDQUNkYyxXQURZLEdBRVpDLE1BRlksQ0FFTCxDQUFDLENBQUQsRUFBSWYsRUFBRSxDQUFDZ0IsR0FBSCxDQUFPakIsSUFBUCxFQUFhVSxNQUFiLENBQUosQ0FGSyxFQUdaUSxLQUhZLENBR04sQ0FBQyxDQUFELEVBQUlYLEtBQUosQ0FITSxDQUFmO0FBS0EsTUFBTVksTUFBTSxHQUFHbEIsRUFBRSxDQUNkbUIsU0FEWSxHQUVaSixNQUZZLENBRUxoQixJQUFJLENBQUNxQixHQUFMLENBQVNULE1BQVQsQ0FGSyxFQUdaTSxLQUhZLENBR04sQ0FBQyxDQUFELEVBQUlWLE1BQUosQ0FITSxDQUFmO0FBS0FKLEtBQUcsQ0FDQWtCLFNBREgsQ0FDYSxNQURiLEVBRUd0QixJQUZILENBRVFBLElBRlIsRUFHR3VCLEtBSEgsR0FJR0MsTUFKSCxDQUlVLE1BSlYsRUFLR2xCLElBTEgsQ0FLUSxHQUxSLEVBS2EsVUFBQ0ssQ0FBRDtBQUFBLFdBQU9RLE1BQU0sQ0FBQ1AsTUFBTSxDQUFDRCxDQUFELENBQVAsQ0FBYjtBQUFBLEdBTGIsRUFNR0wsSUFOSCxDQU1RLE9BTlIsRUFNaUIsVUFBQ0ssQ0FBRDtBQUFBLFdBQU9HLE1BQU0sQ0FBQ0osTUFBTSxDQUFDQyxDQUFELENBQVAsQ0FBYjtBQUFBLEdBTmpCLEVBT0dMLElBUEgsQ0FPUSxRQVBSLEVBT2tCYSxNQUFNLENBQUNNLFNBQVAsRUFQbEI7QUFRRCxDQXRCRDs7QUF3QkF6QixJQUFJLENBQUMwQixJQUFMLENBQVUsVUFBQ2YsQ0FBRCxFQUFPO0FBQ2YsTUFBSWdCLFFBQVEsR0FBR2hCLENBQUMsQ0FBQ2lCLE1BQUYsQ0FBUyxVQUFDQyxHQUFELEVBQVM7QUFDL0IsV0FBT0EsR0FBRyxDQUFDQyxPQUFKLEtBQWdCLGtCQUF2QjtBQUNELEdBRmMsQ0FBZjtBQUlBckIsUUFBTSxDQUFDa0IsUUFBRCxDQUFOO0FBQ0FJLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxRQUFaO0FBQ0QsQ0FQRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmNvbnN0IGRhdGEgPSBkMy5jc3YoXG4gIFwiaHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sZWZ1bGxlci83MTlkYWNlZDFjYzI3MmQ0ZWYyNDRmN2FjMmQ5ZTEzNy9yYXcvMzI0YmUxN2UwYWY4MzA3M2U4YzVjYWJmMTViN2RlY2Y1M2NhZDBkNy8yMDIwLmNzdlwiLFxuICBkMy5hdXRvVHlwZVxuKTtcblxuY29uc3Qgc3ZnID0gZDMuc2VsZWN0KFwic3ZnXCIpLmF0dHIoXCJ3aWR0aFwiLCBcIjEwMDBcIikuYXR0cihcImhlaWdodFwiLCBcIjUwMFwiKTtcblxuY29uc3Qgd2lkdGggPSArc3ZnLmF0dHIoXCJ3aWR0aFwiKTtcbmNvbnN0IGhlaWdodCA9ICtzdmcuYXR0cihcImhlaWdodFwiKTtcblxuY29uc3QgcmVuZGVyID0gKGRhdGEpID0+IHtcbiAgY29uc3QgeFZhbHVlID0gKGQpID0+IGRbXCJBdmcgVlBcIl07XG4gIGNvbnN0IHlWYWx1ZSA9IChkKSA9PiBkLlBsYXllcjtcblxuICBjb25zdCB4U2NhbGUgPSBkM1xuICAgIC5zY2FsZUxpbmVhcigpXG4gICAgLmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIHhWYWx1ZSldKVxuICAgIC5yYW5nZShbMCwgd2lkdGhdKTtcblxuICBjb25zdCB5U2NhbGUgPSBkM1xuICAgIC5zY2FsZUJhbmQoKVxuICAgIC5kb21haW4oZGF0YS5tYXAoeVZhbHVlKSlcbiAgICAucmFuZ2UoWzAsIGhlaWdodF0pO1xuXG4gIHN2Z1xuICAgIC5zZWxlY3RBbGwoXCJyZWN0XCIpXG4gICAgLmRhdGEoZGF0YSlcbiAgICAuZW50ZXIoKVxuICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgLmF0dHIoXCJ5XCIsIChkKSA9PiB5U2NhbGUoeVZhbHVlKGQpKSlcbiAgICAuYXR0cihcIndpZHRoXCIsIChkKSA9PiB4U2NhbGUoeFZhbHVlKGQpKSlcbiAgICAuYXR0cihcImhlaWdodFwiLCB5U2NhbGUuYmFuZHdpZHRoKCkpO1xufTtcblxuZGF0YS50aGVuKChkKSA9PiB7XG4gIGxldCBmYWN0aW9ucyA9IGQuZmlsdGVyKChyb3cpID0+IHtcbiAgICByZXR1cm4gcm93LkZhY3Rpb24gPT09IFwiQWRlcHRhIFNvcm9yaXRhc1wiO1xuICB9KTtcblxuICByZW5kZXIoZmFjdGlvbnMpO1xuICBjb25zb2xlLmxvZyhmYWN0aW9ucyk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=