/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
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
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");

var subFactions = d3.csv("https://gist.githubusercontent.com/lefuller/378bb2d512cbbc81ddd66cb0c4a571bf/raw/884221966feb9a98fcc66b9e960ee11b68cb908e/subfactions.csv", d3.autoType);
var factions = d3.csv("https://gist.githubusercontent.com/lefuller/378bb2d512cbbc81ddd66cb0c4a571bf/raw/884221966feb9a98fcc66b9e960ee11b68cb908e/Overall.csv", d3.autoType);
var svg = d3.select("svg").attr("width", "1000").attr("height", "500");
var width = +svg.attr("width");
var height = +svg.attr("height");

var renderHrzBar = function renderHrzBar(data, x, y) {
  // const xValue = (d) => d["Win %"];
  // const yValue = (d) => d.Faction;
  var xValue = x;
  var yValue = y;
  var margin = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 180
  };
  var innerWidth = width - margin.left - margin.right;
  var innerHeight = height - margin.top - margin.bottom;
  var xScale = d3.scaleLinear().domain([0, d3.max(data, xValue)]).range([0, innerWidth]);
  var yScale = d3.scaleBand().domain(data.map(yValue)).range([0, innerHeight]).padding(0.1);
  var g = svg.append("g").attr("transform", "translate(".concat(margin.left, ", ").concat(margin.top, ")"));
  g.append("g").call(d3.axisLeft(yScale));
  g.append("g").call(d3.axisBottom(xScale)).attr("transform", "translate(0, ".concat(innerHeight, ")"));
  g.selectAll("rect").data(data).enter().append("rect").attr("fill", ran).attr("y", function (d) {
    return yScale(yValue(d));
  }).attr("width", function (d) {
    return xScale(xValue(d));
  }).attr("height", yScale.bandwidth());
}; // subFactions.then((d) => {
//   console.log(d);
//   renderHrzBar(d, d => d.Faction, d => d.Chapter)
// });


factions.then(function (d) {
  console.log(d);
  renderHrzBar(d, function (d) {
    return d["Actual Win %"];
  }, function (d) {
    return d.Faction;
  });
}); // var nodeData = {
//   name: "TOPICS",
//   children: [
//     {
//       name: "Topic A",
//       children: [
//         { name: "Sub A1", size: 4 },
//         { name: "Sub A2", size: 4 },
//       ],
//     },
//     {
//       name: "Topic B",
//       children: [
//         { name: "Sub B1", size: 3 },
//         { name: "Sub B2", size: 3 },
//         {
//           name: "Sub B3",
//           size: 3,
//         },
//       ],
//     },
//     {
//       name: "Topic C",
//       children: [
//         { name: "Sub A1", size: 4 },
//         { name: "Sub A2", size: 4 },
//       ],
//     },
//   ],
// };
// var nodeData2 = {
//   name: "Factions Breakdown",
//   children: [
//     {
//       name: "Adepta Sororitas",
//       children: [
//         { name: "Order of the Bloody Rose", size: 4 },
//         { name: "Order of the Ebon Chalice", size: 4 },
//         { name: "Order of the Sacred Rose", size: 4 },
//         { name: "Order of the Valorous Heart", size: 4 },
//         { name: "Order of Our Martyred Lady", size: 4 },
// 				{ name: "Adeptus Ministorum", size: 4}
//       ],
//     },
//     {
//       name: "Adeptus Custodes",
//       children: [
//         { name: "Solar Watch", size: 3 },
//         { name: "Shadowkeepers", size: 3 },
//         { name: "Dread Host", size: 3 },
//         { name: "Emissaries Imperaturs", size: 3 },
//         { name: "Aquilan Shield", size: 3 },
//         {
//           name: "Sub B3",
//           size: 3,
//         },
//       ],
//     },
//     {
//       name: "Blood Angels",
//       children: [
//         { name: "Blood Angels", size: 4 },
//         { name: "Flesh Tearers", size: 4 },
//       ],
//     },
//   ],
// };
// const filterFactions = (data) => {
// 	let allFactions ={}
// 	let adeptaSoriritas = data.forEach((row) => {
// 		let faction = {
// 			faction: row.Faction,
// 			chapter: row.Chapter
// 		}
//   });
// 	return allFactions;
// };
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmltZGFya3N0YXRzLy4vc3JjL3N0eWxlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vZ3JpbWRhcmtzdGF0cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ncmltZGFya3N0YXRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ3JpbWRhcmtzdGF0cy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzdWJGYWN0aW9ucyIsImQzIiwiY3N2IiwiYXV0b1R5cGUiLCJmYWN0aW9ucyIsInN2ZyIsInNlbGVjdCIsImF0dHIiLCJ3aWR0aCIsImhlaWdodCIsInJlbmRlckhyekJhciIsImRhdGEiLCJ4IiwieSIsInhWYWx1ZSIsInlWYWx1ZSIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInhTY2FsZSIsInNjYWxlTGluZWFyIiwiZG9tYWluIiwibWF4IiwicmFuZ2UiLCJ5U2NhbGUiLCJzY2FsZUJhbmQiLCJtYXAiLCJwYWRkaW5nIiwiZyIsImFwcGVuZCIsImNhbGwiLCJheGlzTGVmdCIsImF4aXNCb3R0b20iLCJzZWxlY3RBbGwiLCJlbnRlciIsInJhbiIsImQiLCJiYW5kd2lkdGgiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsIkZhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLEVBQUUsQ0FBQ0MsR0FBSCxDQUNs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LENBdUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQXJDLFFBQVEsQ0FBQ3NDLElBQVQsQ0FBYyxVQUFDRixDQUFELEVBQU87QUFDbkJHLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixDQUFaO0FBQ0E5QixjQUFZLENBQ1o4QixDQURZLEVBRVYsVUFBQ0EsQ0FBRDtBQUFBLFdBQU9BLENBQUMsQ0FBQyxjQUFELENBQVI7QUFBQSxHQUZVLEVBR1YsVUFBQ0EsQ0FBRDtBQUFBLFdBQU9BLENBQUMsQ0FBQ0ssT0FBVDtBQUFBLEdBSFUsQ0FBWjtBQUtELENBUEQsRSxDQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0EsSyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguY3NzXCJcblxuY29uc3Qgc3ViRmFjdGlvbnMgPSBkMy5jc3YoXG4gIFwiaHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9sZWZ1bGxlci8zNzhiYjJkNTEyY2JiYzgxZGRkNjZjYjBjNGE1NzFiZi9yYXcvODg0MjIxOTY2ZmViOWE5OGZjYzY2YjllOTYwZWUxMWI2OGNiOTA4ZS9zdWJmYWN0aW9ucy5jc3ZcIixcbiAgZDMuYXV0b1R5cGVcbik7XG5cbmNvbnN0IGZhY3Rpb25zID0gZDMuY3N2KFxuICBcImh0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20vbGVmdWxsZXIvMzc4YmIyZDUxMmNiYmM4MWRkZDY2Y2IwYzRhNTcxYmYvcmF3Lzg4NDIyMTk2NmZlYjlhOThmY2M2NmI5ZTk2MGVlMTFiNjhjYjkwOGUvT3ZlcmFsbC5jc3ZcIixcbiAgZDMuYXV0b1R5cGVcbik7XG5cbmNvbnN0IHN2ZyA9IGQzLnNlbGVjdChcInN2Z1wiKS5hdHRyKFwid2lkdGhcIiwgXCIxMDAwXCIpLmF0dHIoXCJoZWlnaHRcIiwgXCI1MDBcIik7XG5cbmNvbnN0IHdpZHRoID0gK3N2Zy5hdHRyKFwid2lkdGhcIik7XG5jb25zdCBoZWlnaHQgPSArc3ZnLmF0dHIoXCJoZWlnaHRcIik7XG5cbmNvbnN0IHJlbmRlckhyekJhciA9IChkYXRhLCB4LCB5KSA9PiB7XG4gIC8vIGNvbnN0IHhWYWx1ZSA9IChkKSA9PiBkW1wiV2luICVcIl07XG4gIC8vIGNvbnN0IHlWYWx1ZSA9IChkKSA9PiBkLkZhY3Rpb247XG4gIGNvbnN0IHhWYWx1ZSA9IHg7XG4gIGNvbnN0IHlWYWx1ZSA9IHk7XG4gIGNvbnN0IG1hcmdpbiA9IHsgdG9wOiAyMCwgcmlnaHQ6IDIwLCBib3R0b206IDIwLCBsZWZ0OiAxODAgfTtcbiAgY29uc3QgaW5uZXJXaWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gIGNvbnN0IGlubmVySGVpZ2h0ID0gaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgY29uc3QgeFNjYWxlID0gZDNcbiAgICAuc2NhbGVMaW5lYXIoKVxuICAgIC5kb21haW4oWzAsIGQzLm1heChkYXRhLCB4VmFsdWUpXSlcbiAgICAucmFuZ2UoWzAsIGlubmVyV2lkdGhdKTtcblxuICBjb25zdCB5U2NhbGUgPSBkM1xuICAgIC5zY2FsZUJhbmQoKVxuICAgIC5kb21haW4oZGF0YS5tYXAoeVZhbHVlKSlcbiAgICAucmFuZ2UoWzAsIGlubmVySGVpZ2h0XSlcbiAgICAucGFkZGluZygwLjEpO1xuXG4gIGNvbnN0IGcgPSBzdmdcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sICR7bWFyZ2luLnRvcH0pYCk7XG5cbiAgZy5hcHBlbmQoXCJnXCIpLmNhbGwoZDMuYXhpc0xlZnQoeVNjYWxlKSk7XG4gIGcuYXBwZW5kKFwiZ1wiKVxuICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeFNjYWxlKSlcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDAsICR7aW5uZXJIZWlnaHR9KWApO1xuXG4gIGcuc2VsZWN0QWxsKFwicmVjdFwiKVxuICAgIC5kYXRhKGRhdGEpXG4gICAgLmVudGVyKClcbiAgICAuYXBwZW5kKFwicmVjdFwiKVxuXHRcdC5hdHRyKFwiZmlsbFwiLCByYW4pXG4gICAgLmF0dHIoXCJ5XCIsIChkKSA9PiB5U2NhbGUoeVZhbHVlKGQpKSlcbiAgICAuYXR0cihcIndpZHRoXCIsIChkKSA9PiB4U2NhbGUoeFZhbHVlKGQpKSlcbiAgICAuYXR0cihcImhlaWdodFwiLCB5U2NhbGUuYmFuZHdpZHRoKCkpO1xufTtcblxuLy8gc3ViRmFjdGlvbnMudGhlbigoZCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhkKTtcbi8vICAgcmVuZGVySHJ6QmFyKGQsIGQgPT4gZC5GYWN0aW9uLCBkID0+IGQuQ2hhcHRlcilcbi8vIH0pO1xuXG5mYWN0aW9ucy50aGVuKChkKSA9PiB7XG4gIGNvbnNvbGUubG9nKGQpO1xuICByZW5kZXJIcnpCYXIoXG5cdFx0ZCxcbiAgICAoZCkgPT4gZFtcIkFjdHVhbCBXaW4gJVwiXSxcbiAgICAoZCkgPT4gZC5GYWN0aW9uXG4gICk7XG59KTtcblxuLy8gdmFyIG5vZGVEYXRhID0ge1xuLy8gICBuYW1lOiBcIlRPUElDU1wiLFxuLy8gICBjaGlsZHJlbjogW1xuLy8gICAgIHtcbi8vICAgICAgIG5hbWU6IFwiVG9waWMgQVwiLFxuLy8gICAgICAgY2hpbGRyZW46IFtcbi8vICAgICAgICAgeyBuYW1lOiBcIlN1YiBBMVwiLCBzaXplOiA0IH0sXG4vLyAgICAgICAgIHsgbmFtZTogXCJTdWIgQTJcIiwgc2l6ZTogNCB9LFxuLy8gICAgICAgXSxcbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAgIG5hbWU6IFwiVG9waWMgQlwiLFxuLy8gICAgICAgY2hpbGRyZW46IFtcbi8vICAgICAgICAgeyBuYW1lOiBcIlN1YiBCMVwiLCBzaXplOiAzIH0sXG4vLyAgICAgICAgIHsgbmFtZTogXCJTdWIgQjJcIiwgc2l6ZTogMyB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgbmFtZTogXCJTdWIgQjNcIixcbi8vICAgICAgICAgICBzaXplOiAzLFxuLy8gICAgICAgICB9LFxuLy8gICAgICAgXSxcbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAgIG5hbWU6IFwiVG9waWMgQ1wiLFxuLy8gICAgICAgY2hpbGRyZW46IFtcbi8vICAgICAgICAgeyBuYW1lOiBcIlN1YiBBMVwiLCBzaXplOiA0IH0sXG4vLyAgICAgICAgIHsgbmFtZTogXCJTdWIgQTJcIiwgc2l6ZTogNCB9LFxuLy8gICAgICAgXSxcbi8vICAgICB9LFxuLy8gICBdLFxuLy8gfTtcblxuLy8gdmFyIG5vZGVEYXRhMiA9IHtcbi8vICAgbmFtZTogXCJGYWN0aW9ucyBCcmVha2Rvd25cIixcbi8vICAgY2hpbGRyZW46IFtcbi8vICAgICB7XG4vLyAgICAgICBuYW1lOiBcIkFkZXB0YSBTb3Jvcml0YXNcIixcbi8vICAgICAgIGNoaWxkcmVuOiBbXG4vLyAgICAgICAgIHsgbmFtZTogXCJPcmRlciBvZiB0aGUgQmxvb2R5IFJvc2VcIiwgc2l6ZTogNCB9LFxuLy8gICAgICAgICB7IG5hbWU6IFwiT3JkZXIgb2YgdGhlIEVib24gQ2hhbGljZVwiLCBzaXplOiA0IH0sXG4vLyAgICAgICAgIHsgbmFtZTogXCJPcmRlciBvZiB0aGUgU2FjcmVkIFJvc2VcIiwgc2l6ZTogNCB9LFxuLy8gICAgICAgICB7IG5hbWU6IFwiT3JkZXIgb2YgdGhlIFZhbG9yb3VzIEhlYXJ0XCIsIHNpemU6IDQgfSxcbi8vICAgICAgICAgeyBuYW1lOiBcIk9yZGVyIG9mIE91ciBNYXJ0eXJlZCBMYWR5XCIsIHNpemU6IDQgfSxcbi8vIFx0XHRcdFx0eyBuYW1lOiBcIkFkZXB0dXMgTWluaXN0b3J1bVwiLCBzaXplOiA0fVxuLy8gICAgICAgXSxcbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAgIG5hbWU6IFwiQWRlcHR1cyBDdXN0b2Rlc1wiLFxuLy8gICAgICAgY2hpbGRyZW46IFtcbi8vICAgICAgICAgeyBuYW1lOiBcIlNvbGFyIFdhdGNoXCIsIHNpemU6IDMgfSxcbi8vICAgICAgICAgeyBuYW1lOiBcIlNoYWRvd2tlZXBlcnNcIiwgc2l6ZTogMyB9LFxuLy8gICAgICAgICB7IG5hbWU6IFwiRHJlYWQgSG9zdFwiLCBzaXplOiAzIH0sXG4vLyAgICAgICAgIHsgbmFtZTogXCJFbWlzc2FyaWVzIEltcGVyYXR1cnNcIiwgc2l6ZTogMyB9LFxuLy8gICAgICAgICB7IG5hbWU6IFwiQXF1aWxhbiBTaGllbGRcIiwgc2l6ZTogMyB9LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgbmFtZTogXCJTdWIgQjNcIixcbi8vICAgICAgICAgICBzaXplOiAzLFxuLy8gICAgICAgICB9LFxuLy8gICAgICAgXSxcbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAgIG5hbWU6IFwiQmxvb2QgQW5nZWxzXCIsXG4vLyAgICAgICBjaGlsZHJlbjogW1xuLy8gICAgICAgICB7IG5hbWU6IFwiQmxvb2QgQW5nZWxzXCIsIHNpemU6IDQgfSxcbi8vICAgICAgICAgeyBuYW1lOiBcIkZsZXNoIFRlYXJlcnNcIiwgc2l6ZTogNCB9LFxuLy8gICAgICAgXSxcbi8vICAgICB9LFxuLy8gICBdLFxuLy8gfTtcblxuLy8gY29uc3QgZmlsdGVyRmFjdGlvbnMgPSAoZGF0YSkgPT4ge1xuLy8gXHRsZXQgYWxsRmFjdGlvbnMgPXt9XG5cbi8vIFx0bGV0IGFkZXB0YVNvcmlyaXRhcyA9IGRhdGEuZm9yRWFjaCgocm93KSA9PiB7XG4vLyBcdFx0bGV0IGZhY3Rpb24gPSB7XG4vLyBcdFx0XHRmYWN0aW9uOiByb3cuRmFjdGlvbixcbi8vIFx0XHRcdGNoYXB0ZXI6IHJvdy5DaGFwdGVyXG4vLyBcdFx0fVxuXG4vLyAgIH0pO1xuXG4vLyBcdHJldHVybiBhbGxGYWN0aW9ucztcbi8vIH07XG4iXSwic291cmNlUm9vdCI6IiJ9