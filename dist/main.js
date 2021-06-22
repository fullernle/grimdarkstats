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

var renderHrzBar = function renderHrzBar(data) {
  var xValue = function xValue(d) {
    return d["Avg VP"];
  };

  var yValue = function yValue(d) {
    return d.Player;
  };

  var margin = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 180
  };
  var innerWidth = width - margin.left - margin.right;
  var innerHeight = height - margin.top - margin.bottom;
  var xScale = d3.scaleLinear().domain([0, d3.max(data, xValue)]).range([0, innerWidth]);
  var yScale = d3.scaleBand().domain(data.map(yValue)).range([0, innerHeight]).padding(0.1); // g = group element

  var g = svg.append("g").attr("transform", "translate(".concat(margin.left, ", ").concat(margin.top, ")"));
  g.append("g").call(d3.axisLeft(yScale));
  g.append("g").call(d3.axisBottom(xScale)).attr("transform", "translate(0, ".concat(innerHeight, ")"));
  g.selectAll("rect").data(data).enter().append("rect").attr("y", function (d) {
    return yScale(yValue(d));
  }).attr("width", function (d) {
    return xScale(xValue(d));
  }).attr("height", yScale.bandwidth());
};

data.then(function (d) {
  console.log(d);
  var factions = d.filter(function (row) {
    return row.Faction === "Adepta Sororitas";
  });
  renderHrzBar(factions);
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmltZGFya3N0YXRzLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2dyaW1kYXJrc3RhdHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ3JpbWRhcmtzdGF0cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dyaW1kYXJrc3RhdHMvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiZGF0YSIsImQzIiwiY3N2IiwiYXV0b1R5cGUiLCJzdmciLCJzZWxlY3QiLCJhdHRyIiwid2lkdGgiLCJoZWlnaHQiLCJyZW5kZXJIcnpCYXIiLCJ4VmFsdWUiLCJkIiwieVZhbHVlIiwiUGxheWVyIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwieFNjYWxlIiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJtYXgiLCJyYW5nZSIsInlTY2FsZSIsInNjYWxlQmFuZCIsIm1hcCIsInBhZGRpbmciLCJnIiwiYXBwZW5kIiwiY2FsbCIsImF4aXNMZWZ0IiwiYXhpc0JvdHRvbSIsInNlbGVjdEFsbCIsImVudGVyIiwiYmFuZHdpZHRoIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJmYWN0aW9ucyIsImZpbHRlciIsInJvdyIsIkZhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLEVBQUUsQ0FBQ0MsR0FBSCxDQUNYLG9J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VUFBQzNCLENBQUQsRUFBTztBQUNoQjRCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZN0IsQ0FBWjtBQUNDLE1BQUk4QixRQUFRLEdBQUc5QixDQUFDLENBQUMrQixNQUFGLENBQVMsVUFBQ0MsR0FBRCxFQUFTO0FBQy9CLFdBQU9BLEdBQUcsQ0FBQ0MsT0FBSixLQUFnQixrQkFBdkI7QUFDRCxHQUZjLENBQWY7QUFJQW5DLGNBQVksQ0FBQ2dDLFFBQUQsQ0FBWjtBQUNELENBUEQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5jb25zdCBkYXRhID0gZDMuY3N2KFxuICBcImh0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20vbGVmdWxsZXIvNzE5ZGFjZWQxY2MyNzJkNGVmMjQ0ZjdhYzJkOWUxMzcvcmF3LzMyNGJlMTdlMGFmODMwNzNlOGM1Y2FiZjE1YjdkZWNmNTNjYWQwZDcvMjAyMC5jc3ZcIixcbiAgZDMuYXV0b1R5cGVcbik7XG5cbmNvbnN0IHN2ZyA9IGQzLnNlbGVjdChcInN2Z1wiKS5hdHRyKFwid2lkdGhcIiwgXCIxMDAwXCIpLmF0dHIoXCJoZWlnaHRcIiwgXCI1MDBcIik7XG5cbmNvbnN0IHdpZHRoID0gK3N2Zy5hdHRyKFwid2lkdGhcIik7XG5jb25zdCBoZWlnaHQgPSArc3ZnLmF0dHIoXCJoZWlnaHRcIik7XG5cbmNvbnN0IHJlbmRlckhyekJhciA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IHhWYWx1ZSA9IChkKSA9PiBkW1wiQXZnIFZQXCJdO1xuICBjb25zdCB5VmFsdWUgPSAoZCkgPT4gZC5QbGF5ZXI7XG4gIGNvbnN0IG1hcmdpbiA9IHsgdG9wOiAyMCwgcmlnaHQ6IDIwLCBib3R0b206IDIwLCBsZWZ0OiAxODAgfTtcbiAgY29uc3QgaW5uZXJXaWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gIGNvbnN0IGlubmVySGVpZ2h0ID0gaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgY29uc3QgeFNjYWxlID0gZDNcbiAgICAuc2NhbGVMaW5lYXIoKVxuICAgIC5kb21haW4oWzAsIGQzLm1heChkYXRhLCB4VmFsdWUpXSlcbiAgICAucmFuZ2UoWzAsIGlubmVyV2lkdGhdKTtcblxuICBjb25zdCB5U2NhbGUgPSBkM1xuICAgIC5zY2FsZUJhbmQoKVxuICAgIC5kb21haW4oZGF0YS5tYXAoeVZhbHVlKSlcbiAgICAucmFuZ2UoWzAsIGlubmVySGVpZ2h0XSlcblx0XHQucGFkZGluZygwLjEpO1xuXG4gIC8vIGcgPSBncm91cCBlbGVtZW50XG4gIGNvbnN0IGcgPSBzdmdcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sICR7bWFyZ2luLnRvcH0pYCk7XG5cbiAgZy5hcHBlbmQoXCJnXCIpLmNhbGwoZDMuYXhpc0xlZnQoeVNjYWxlKSk7XG4gIGcuYXBwZW5kKFwiZ1wiKVxuICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeFNjYWxlKSlcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDAsICR7aW5uZXJIZWlnaHR9KWApO1xuXG4gIGcuc2VsZWN0QWxsKFwicmVjdFwiKVxuICAgIC5kYXRhKGRhdGEpXG4gICAgLmVudGVyKClcbiAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgIC5hdHRyKFwieVwiLCAoZCkgPT4geVNjYWxlKHlWYWx1ZShkKSkpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCAoZCkgPT4geFNjYWxlKHhWYWx1ZShkKSkpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgeVNjYWxlLmJhbmR3aWR0aCgpKTtcbn07XG5cbmRhdGEudGhlbigoZCkgPT4ge1xuXHRjb25zb2xlLmxvZyhkKTtcbiAgbGV0IGZhY3Rpb25zID0gZC5maWx0ZXIoKHJvdykgPT4ge1xuICAgIHJldHVybiByb3cuRmFjdGlvbiA9PT0gXCJBZGVwdGEgU29yb3JpdGFzXCI7XG4gIH0pO1xuXG4gIHJlbmRlckhyekJhcihmYWN0aW9ucyk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=