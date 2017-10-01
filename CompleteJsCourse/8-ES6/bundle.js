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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TownElementBase__ = __webpack_require__(1);


class Park extends __WEBPACK_IMPORTED_MODULE_0__TownElementBase__["a" /* TownElementBase */] {

    constructor(name, buildYear, numberOfTrees, area) {
        super(name, buildYear);

        this.numberOfTrees = numberOfTrees;
        this.area = area;
    }

    get NumberOfTrees() {
        return this.numberOfTrees;
    }

    set NumberOfTrees(value) {
        if (value < 0) {
            throw new Error('The number of trees cannot be negative');
        } else {
            this.numberOfTrees = value;
        }
    }

    get treeDensity() {
        return this.numberOfTrees / this.area;
    }

    info() {
        let result = super.info();
        result += ` has a tree density of ${this.treeDensity} trees per square km.
`;
        return result;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Park;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class TownElementBase {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }

    info() {
        return `${this.name} (${this.buildYear})`;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TownElementBase;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TownElementBase__ = __webpack_require__(1);


class Street extends __WEBPACK_IMPORTED_MODULE_0__TownElementBase__["a" /* TownElementBase */] {

    constructor(name, buildYear, strLength, sizeClassification = 'normal') {
        super(name, buildYear);

        this.strLength = strLength;
        this.sizeClassification = sizeClassification;
    }

    info() {
        let result = super.info();
        result += ` is a ${this.sizeClassification} street.
`;
        return result;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Street;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TownElements_Park__ = __webpack_require__(0);


class ParkAnalyzer {
    constructor(...parks) {
        this.parks = parks;
    }

    calculateAverageAge() {
        const ageSum = this.parks.reduce((sum, curr) => {
            return sum + (new Date().getFullYear() - curr.buildYear);
        }, 0);

        return ageSum / this.parks.length;
    }

    withMoreThan1000Trees() {
        let result = '';

        this.parks.forEach(p => {
            if (p.numberOfTrees > 1000) {
                result += p.name + ', ';
            }
        })

        return result;
    }

    summary() {
        const header = '---------- PARKS REPORT ----------';
        const body = 
`
Our ${this.parks.length} parks have an average age of ${this.calculateAverageAge()} years.
`;
        let parksInfos = '';
        this.parks.forEach(p => parksInfos += p.info());

        let moreThan1000 = '';
        if(this.withMoreThan1000Trees() !== '') {
            moreThan1000 = this.withMoreThan1000Trees() + 'have(-s) more than 100 trees.\n';
        }
        return header + body + parksInfos + moreThan1000 + '\n';
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ParkAnalyzer;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TownElements_Street__ = __webpack_require__(2);


class StreetAnalyzer {
    constructor(...streets) {
        this.streets = streets;
    }

    totalLength() {
        var total = this.streets.reduce((sum, curr) => {
            return sum + curr.strLength;
        }, 0);

        return total;
    }

    averageLength() {
        return this.streets.reduce((sum, curr) => {
            return sum + curr.strLength;
        }, 0) / this.streets.length;
    }

    summary() {
        const header = '---------- STREETS REPORT ----------';
        const body =
            `
Our ${this.streets.length} streets have a total length of ${this.totalLength()} km, with an average of ${this.averageLength()} km.
`;
        let streetInfos = '';
        this.streets.forEach(s => streetInfos += s.info());
        return header + body + streetInfos + '\n';
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = StreetAnalyzer;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TownElements_TownElements_factory__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Reporting_Report__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ElementAnalyzers_ParkAnalyzer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ElementAnalyzers_StreetAnalyzer__ = __webpack_require__(4);





const townElementsFactory = new __WEBPACK_IMPORTED_MODULE_0__TownElements_TownElements_factory__["a" /* TownElementsFactory */]();

// PARKS
const sheva = townElementsFactory.createExistingPark('Sheva', 1999, 200, 5.4);
const fomin = townElementsFactory.createExistingPark('Fomin', 1960, 1500, 17.3);
const grishko = townElementsFactory.createExistingPark('Grishko', 1978, 7000, 25.1);

// STREETS
const soborna = townElementsFactory.createExistingStreet('Soborna', 2011, 20, 'small');
const lenina = townElementsFactory.createNewStreet('Lenina', 32);
const komarova = townElementsFactory.createExistingStreet('Komarova', 1988, 15, 'big');
const kiltseva = townElementsFactory.createNewStreet('Kiltseva', 70, 'huge');

// ANALYZERS
const parkAnalyzer = new __WEBPACK_IMPORTED_MODULE_2__ElementAnalyzers_ParkAnalyzer__["a" /* ParkAnalyzer */](sheva, fomin, grishko);
const streetAnalyzer = new __WEBPACK_IMPORTED_MODULE_3__ElementAnalyzers_StreetAnalyzer__["a" /* StreetAnalyzer */](soborna, lenina, komarova, kiltseva);

const finalReport = new __WEBPACK_IMPORTED_MODULE_1__Reporting_Report__["a" /* Report */](parkAnalyzer, streetAnalyzer);

finalReport.printReport();

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Park__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Street__ = __webpack_require__(2);



class TownElementsFactory {
    createExistingPark(...params) {
        let [name, buildYear, numberOfTrees, area] = params;
        return new __WEBPACK_IMPORTED_MODULE_0__Park__["a" /* Park */](name, buildYear, numberOfTrees, area);
    }

    createNewPark(name, area) {
        return new __WEBPACK_IMPORTED_MODULE_0__Park__["a" /* Park */](name, new Date().getFullYear(), 0, area);
    }

    createExistingStreet(...params) {
        let [name, buildYear, strLength, sizeClassification] = params;
        return new __WEBPACK_IMPORTED_MODULE_1__Street__["a" /* Street */](name, buildYear, strLength, sizeClassification);
    }

    createNewStreet(name, strLength, sizeClassification) {
        return new __WEBPACK_IMPORTED_MODULE_1__Street__["a" /* Street */](name, new Date().getFullYear(), strLength, sizeClassification);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TownElementsFactory;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ElementAnalyzers_ParkAnalyzer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ElementAnalyzers_StreetAnalyzer__ = __webpack_require__(4);



class Report {
    constructor(...elementAnalyzers) {
        this.elementAnalyzers = elementAnalyzers;    
    }

    printReport() {
        this.elementAnalyzers.forEach(ea => {
            console.log(ea.summary());
        })
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Report;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDAyZGQ3OGRjN2FhYzU5Mjg1MTIiLCJ3ZWJwYWNrOi8vLy4vVG93bkVsZW1lbnRzL1BhcmsuanMiLCJ3ZWJwYWNrOi8vLy4vVG93bkVsZW1lbnRzL1Rvd25FbGVtZW50QmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9Ub3duRWxlbWVudHMvU3RyZWV0LmpzIiwid2VicGFjazovLy8uL0VsZW1lbnRBbmFseXplcnMvUGFya0FuYWx5emVyLmpzIiwid2VicGFjazovLy8uL0VsZW1lbnRBbmFseXplcnMvU3RyZWV0QW5hbHl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9Ub3duRWxlbWVudHMvVG93bkVsZW1lbnRzLmZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vUmVwb3J0aW5nL1JlcG9ydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQzdEMEI7O0FBRTFCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDLGlCQUFpQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixVQUFVLElBQUksZUFBZTtBQUMvQztBQUNBLEM7Ozs7Ozs7Ozs7QUNUMEI7O0FBRTFCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsd0JBQXdCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7QUNqQmU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGtCQUFrQixnQ0FBZ0MsMkJBQTJCO0FBQ25GO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7O0FDeENDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG9CQUFvQixrQ0FBa0MsbUJBQW1CLDBCQUEwQixxQkFBcUI7QUFDOUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDakM4QjtBQUNiO0FBQ007QUFDRTs7QUFFekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMEI7Ozs7Ozs7OztBQ3hCZTtBQUNFOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7OztBQ3JCdUI7QUFDRTs7QUFFekI7QUFDQTtBQUNBLGlEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0MDJkZDc4ZGM3YWFjNTkyODUxMiIsImltcG9ydCB7IFRvd25FbGVtZW50QmFzZSB9IGZyb20gJy4vVG93bkVsZW1lbnRCYXNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJrIGV4dGVuZHMgVG93bkVsZW1lbnRCYXNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBidWlsZFllYXIsIG51bWJlck9mVHJlZXMsIGFyZWEpIHtcclxuICAgICAgICBzdXBlcihuYW1lLCBidWlsZFllYXIpO1xyXG5cclxuICAgICAgICB0aGlzLm51bWJlck9mVHJlZXMgPSBudW1iZXJPZlRyZWVzO1xyXG4gICAgICAgIHRoaXMuYXJlYSA9IGFyZWE7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IE51bWJlck9mVHJlZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyT2ZUcmVlcztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgTnVtYmVyT2ZUcmVlcyh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgbnVtYmVyIG9mIHRyZWVzIGNhbm5vdCBiZSBuZWdhdGl2ZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubnVtYmVyT2ZUcmVlcyA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgdHJlZURlbnNpdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyT2ZUcmVlcyAvIHRoaXMuYXJlYTtcclxuICAgIH1cclxuXHJcbiAgICBpbmZvKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBzdXBlci5pbmZvKCk7XHJcbiAgICAgICAgcmVzdWx0ICs9IGAgaGFzIGEgdHJlZSBkZW5zaXR5IG9mICR7dGhpcy50cmVlRGVuc2l0eX0gdHJlZXMgcGVyIHNxdWFyZSBrbS5cclxuYDtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Ub3duRWxlbWVudHMvUGFyay5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgVG93bkVsZW1lbnRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGJ1aWxkWWVhcikge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5idWlsZFllYXIgPSBidWlsZFllYXI7XHJcbiAgICB9XHJcblxyXG4gICAgaW5mbygpIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5uYW1lfSAoJHt0aGlzLmJ1aWxkWWVhcn0pYDtcclxuICAgIH1cclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vVG93bkVsZW1lbnRzL1Rvd25FbGVtZW50QmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBUb3duRWxlbWVudEJhc2UgfSBmcm9tICcuL1Rvd25FbGVtZW50QmFzZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RyZWV0IGV4dGVuZHMgVG93bkVsZW1lbnRCYXNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBidWlsZFllYXIsIHN0ckxlbmd0aCwgc2l6ZUNsYXNzaWZpY2F0aW9uID0gJ25vcm1hbCcpIHtcclxuICAgICAgICBzdXBlcihuYW1lLCBidWlsZFllYXIpO1xyXG5cclxuICAgICAgICB0aGlzLnN0ckxlbmd0aCA9IHN0ckxlbmd0aDtcclxuICAgICAgICB0aGlzLnNpemVDbGFzc2lmaWNhdGlvbiA9IHNpemVDbGFzc2lmaWNhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBpbmZvKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBzdXBlci5pbmZvKCk7XHJcbiAgICAgICAgcmVzdWx0ICs9IGAgaXMgYSAke3RoaXMuc2l6ZUNsYXNzaWZpY2F0aW9ufSBzdHJlZXQuXHJcbmA7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vVG93bkVsZW1lbnRzL1N0cmVldC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBQYXJrIH0gZnJvbSAnLi8uLi9Ub3duRWxlbWVudHMvUGFyayc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFya0FuYWx5emVyIHtcclxuICAgIGNvbnN0cnVjdG9yKC4uLnBhcmtzKSB7XHJcbiAgICAgICAgdGhpcy5wYXJrcyA9IHBhcmtzO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZUF2ZXJhZ2VBZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgYWdlU3VtID0gdGhpcy5wYXJrcy5yZWR1Y2UoKHN1bSwgY3VycikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc3VtICsgKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIGN1cnIuYnVpbGRZZWFyKTtcclxuICAgICAgICB9LCAwKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFnZVN1bSAvIHRoaXMucGFya3MubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHdpdGhNb3JlVGhhbjEwMDBUcmVlcygpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XHJcblxyXG4gICAgICAgIHRoaXMucGFya3MuZm9yRWFjaChwID0+IHtcclxuICAgICAgICAgICAgaWYgKHAubnVtYmVyT2ZUcmVlcyA+IDEwMDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBwLm5hbWUgKyAnLCAnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBzdW1tYXJ5KCkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9ICctLS0tLS0tLS0tIFBBUktTIFJFUE9SVCAtLS0tLS0tLS0tJztcclxuICAgICAgICBjb25zdCBib2R5ID0gXHJcbmBcclxuT3VyICR7dGhpcy5wYXJrcy5sZW5ndGh9IHBhcmtzIGhhdmUgYW4gYXZlcmFnZSBhZ2Ugb2YgJHt0aGlzLmNhbGN1bGF0ZUF2ZXJhZ2VBZ2UoKX0geWVhcnMuXHJcbmA7XHJcbiAgICAgICAgbGV0IHBhcmtzSW5mb3MgPSAnJztcclxuICAgICAgICB0aGlzLnBhcmtzLmZvckVhY2gocCA9PiBwYXJrc0luZm9zICs9IHAuaW5mbygpKTtcclxuXHJcbiAgICAgICAgbGV0IG1vcmVUaGFuMTAwMCA9ICcnO1xyXG4gICAgICAgIGlmKHRoaXMud2l0aE1vcmVUaGFuMTAwMFRyZWVzKCkgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIG1vcmVUaGFuMTAwMCA9IHRoaXMud2l0aE1vcmVUaGFuMTAwMFRyZWVzKCkgKyAnaGF2ZSgtcykgbW9yZSB0aGFuIDEwMCB0cmVlcy5cXG4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGVhZGVyICsgYm9keSArIHBhcmtzSW5mb3MgKyBtb3JlVGhhbjEwMDAgKyAnXFxuJztcclxuICAgIH1cclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vRWxlbWVudEFuYWx5emVycy9QYXJrQW5hbHl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtcclxuICAgIFN0cmVldFxyXG59IGZyb20gJy4uL1Rvd25FbGVtZW50cy9TdHJlZXQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0cmVldEFuYWx5emVyIHtcclxuICAgIGNvbnN0cnVjdG9yKC4uLnN0cmVldHMpIHtcclxuICAgICAgICB0aGlzLnN0cmVldHMgPSBzdHJlZXRzO1xyXG4gICAgfVxyXG5cclxuICAgIHRvdGFsTGVuZ3RoKCkge1xyXG4gICAgICAgIHZhciB0b3RhbCA9IHRoaXMuc3RyZWV0cy5yZWR1Y2UoKHN1bSwgY3VycikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc3VtICsgY3Vyci5zdHJMZW5ndGg7XHJcbiAgICAgICAgfSwgMCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0b3RhbDtcclxuICAgIH1cclxuXHJcbiAgICBhdmVyYWdlTGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0cmVldHMucmVkdWNlKChzdW0sIGN1cnIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1bSArIGN1cnIuc3RyTGVuZ3RoO1xyXG4gICAgICAgIH0sIDApIC8gdGhpcy5zdHJlZXRzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBzdW1tYXJ5KCkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9ICctLS0tLS0tLS0tIFNUUkVFVFMgUkVQT1JUIC0tLS0tLS0tLS0nO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPVxyXG4gICAgICAgICAgICBgXHJcbk91ciAke3RoaXMuc3RyZWV0cy5sZW5ndGh9IHN0cmVldHMgaGF2ZSBhIHRvdGFsIGxlbmd0aCBvZiAke3RoaXMudG90YWxMZW5ndGgoKX0ga20sIHdpdGggYW4gYXZlcmFnZSBvZiAke3RoaXMuYXZlcmFnZUxlbmd0aCgpfSBrbS5cclxuYDtcclxuICAgICAgICBsZXQgc3RyZWV0SW5mb3MgPSAnJztcclxuICAgICAgICB0aGlzLnN0cmVldHMuZm9yRWFjaChzID0+IHN0cmVldEluZm9zICs9IHMuaW5mbygpKTtcclxuICAgICAgICByZXR1cm4gaGVhZGVyICsgYm9keSArIHN0cmVldEluZm9zICsgJ1xcbic7XHJcbiAgICB9XHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0VsZW1lbnRBbmFseXplcnMvU3RyZWV0QW5hbHl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgVG93bkVsZW1lbnRzRmFjdG9yeSB9IGZyb20gJy4vVG93bkVsZW1lbnRzL1Rvd25FbGVtZW50cy5mYWN0b3J5JztcclxuaW1wb3J0IHsgUmVwb3J0IH0gZnJvbSAnLi9SZXBvcnRpbmcvUmVwb3J0JztcclxuaW1wb3J0IHsgUGFya0FuYWx5emVyIH0gZnJvbSAnLi9FbGVtZW50QW5hbHl6ZXJzL1BhcmtBbmFseXplcic7XHJcbmltcG9ydCB7IFN0cmVldEFuYWx5emVyIH0gZnJvbSAnLi9FbGVtZW50QW5hbHl6ZXJzL1N0cmVldEFuYWx5emVyJztcclxuXHJcbmNvbnN0IHRvd25FbGVtZW50c0ZhY3RvcnkgPSBuZXcgVG93bkVsZW1lbnRzRmFjdG9yeSgpO1xyXG5cclxuLy8gUEFSS1NcclxuY29uc3Qgc2hldmEgPSB0b3duRWxlbWVudHNGYWN0b3J5LmNyZWF0ZUV4aXN0aW5nUGFyaygnU2hldmEnLCAxOTk5LCAyMDAsIDUuNCk7XHJcbmNvbnN0IGZvbWluID0gdG93bkVsZW1lbnRzRmFjdG9yeS5jcmVhdGVFeGlzdGluZ1BhcmsoJ0ZvbWluJywgMTk2MCwgMTUwMCwgMTcuMyk7XHJcbmNvbnN0IGdyaXNoa28gPSB0b3duRWxlbWVudHNGYWN0b3J5LmNyZWF0ZUV4aXN0aW5nUGFyaygnR3Jpc2hrbycsIDE5NzgsIDcwMDAsIDI1LjEpO1xyXG5cclxuLy8gU1RSRUVUU1xyXG5jb25zdCBzb2Jvcm5hID0gdG93bkVsZW1lbnRzRmFjdG9yeS5jcmVhdGVFeGlzdGluZ1N0cmVldCgnU29ib3JuYScsIDIwMTEsIDIwLCAnc21hbGwnKTtcclxuY29uc3QgbGVuaW5hID0gdG93bkVsZW1lbnRzRmFjdG9yeS5jcmVhdGVOZXdTdHJlZXQoJ0xlbmluYScsIDMyKTtcclxuY29uc3Qga29tYXJvdmEgPSB0b3duRWxlbWVudHNGYWN0b3J5LmNyZWF0ZUV4aXN0aW5nU3RyZWV0KCdLb21hcm92YScsIDE5ODgsIDE1LCAnYmlnJyk7XHJcbmNvbnN0IGtpbHRzZXZhID0gdG93bkVsZW1lbnRzRmFjdG9yeS5jcmVhdGVOZXdTdHJlZXQoJ0tpbHRzZXZhJywgNzAsICdodWdlJyk7XHJcblxyXG4vLyBBTkFMWVpFUlNcclxuY29uc3QgcGFya0FuYWx5emVyID0gbmV3IFBhcmtBbmFseXplcihzaGV2YSwgZm9taW4sIGdyaXNoa28pO1xyXG5jb25zdCBzdHJlZXRBbmFseXplciA9IG5ldyBTdHJlZXRBbmFseXplcihzb2Jvcm5hLCBsZW5pbmEsIGtvbWFyb3ZhLCBraWx0c2V2YSk7XHJcblxyXG5jb25zdCBmaW5hbFJlcG9ydCA9IG5ldyBSZXBvcnQocGFya0FuYWx5emVyLCBzdHJlZXRBbmFseXplcik7XHJcblxyXG5maW5hbFJlcG9ydC5wcmludFJlcG9ydCgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBQYXJrIH0gZnJvbSAnLi9QYXJrJztcclxuaW1wb3J0IHsgU3RyZWV0IH0gZnJvbSAnLi9TdHJlZXQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRvd25FbGVtZW50c0ZhY3Rvcnkge1xyXG4gICAgY3JlYXRlRXhpc3RpbmdQYXJrKC4uLnBhcmFtcykge1xyXG4gICAgICAgIGxldCBbbmFtZSwgYnVpbGRZZWFyLCBudW1iZXJPZlRyZWVzLCBhcmVhXSA9IHBhcmFtcztcclxuICAgICAgICByZXR1cm4gbmV3IFBhcmsobmFtZSwgYnVpbGRZZWFyLCBudW1iZXJPZlRyZWVzLCBhcmVhKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVOZXdQYXJrKG5hbWUsIGFyZWEpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBhcmsobmFtZSwgbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLCAwLCBhcmVhKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVFeGlzdGluZ1N0cmVldCguLi5wYXJhbXMpIHtcclxuICAgICAgICBsZXQgW25hbWUsIGJ1aWxkWWVhciwgc3RyTGVuZ3RoLCBzaXplQ2xhc3NpZmljYXRpb25dID0gcGFyYW1zO1xyXG4gICAgICAgIHJldHVybiBuZXcgU3RyZWV0KG5hbWUsIGJ1aWxkWWVhciwgc3RyTGVuZ3RoLCBzaXplQ2xhc3NpZmljYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU5ld1N0cmVldChuYW1lLCBzdHJMZW5ndGgsIHNpemVDbGFzc2lmaWNhdGlvbikge1xyXG4gICAgICAgIHJldHVybiBuZXcgU3RyZWV0KG5hbWUsIG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSwgc3RyTGVuZ3RoLCBzaXplQ2xhc3NpZmljYXRpb24pO1xyXG4gICAgfVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Ub3duRWxlbWVudHMvVG93bkVsZW1lbnRzLmZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUGFya0FuYWx5emVyIH0gZnJvbSAnLi8uLi9FbGVtZW50QW5hbHl6ZXJzL1BhcmtBbmFseXplcic7XHJcbmltcG9ydCB7IFN0cmVldEFuYWx5emVyIH0gZnJvbSAnLi8uLi9FbGVtZW50QW5hbHl6ZXJzL1N0cmVldEFuYWx5emVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXBvcnQge1xyXG4gICAgY29uc3RydWN0b3IoLi4uZWxlbWVudEFuYWx5emVycykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudEFuYWx5emVycyA9IGVsZW1lbnRBbmFseXplcnM7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaW50UmVwb3J0KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudEFuYWx5emVycy5mb3JFYWNoKGVhID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZWEuc3VtbWFyeSgpKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9SZXBvcnRpbmcvUmVwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=