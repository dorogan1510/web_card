/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

var reveal = function reveal() {
  // about me animations
  var scrollByElementLeft = document.querySelectorAll('.about-left');
  var scrollByElementRight = document.querySelectorAll('.about-right');

  var cycleForAbout = function cycleForAbout(event) {
    for (var i = 0; i < event.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = event[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        event[i].classList.add('__active');
      } else {
        event[i].classList.remove('__active');
      }
    }
  };

  cycleForAbout(scrollByElementLeft);
  cycleForAbout(scrollByElementRight); //my services animations

  var individualSessions = document.querySelectorAll('.individual-sessions');
  var consultationForRepetitors = document.querySelectorAll('.consultation-for-repetitors');
  var consultationForSpecificRequests = document.querySelectorAll('.consultation-for-specific-requests');
  var telegramWithHelpfulInformation = document.querySelectorAll('.telegram-with-helpful-information');
  var checklistForCardGames = document.querySelectorAll('.checklist-for-card-games');
  var checklistWithUsefulStuff = document.querySelectorAll('.checklist-with-useful-stuff');
  var telegramWithTextbooksAndMaterilas = document.querySelectorAll('.telegram-with-textbooks-and-materials');

  var cycleForServices = function cycleForServices(event) {
    for (var i = 0; i < event.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = event[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        event[i].classList.add('__animations');
      }
    }
  };

  cycleForServices(individualSessions);
  cycleForServices(consultationForRepetitors);
  cycleForServices(consultationForSpecificRequests);
  cycleForServices(telegramWithHelpfulInformation);
  cycleForServices(checklistForCardGames);
  cycleForServices(checklistWithUsefulStuff);
  cycleForServices(telegramWithTextbooksAndMaterilas);
};

window.addEventListener('scroll', reveal); // Btn script

var btn = document.getElementById('btn');

var changeBtnDisplay = function changeBtnDisplay() {
  var delayAnimation = function delayAnimation() {
    document.getElementById('btn').style.display = 'none';
  };

  document.getElementById('btn').style.visibility = 'none';
  setTimeout(delayAnimation, 800);
  document.getElementById('btn').style.opacity = '0';
};

var changeContactsDisplay = function changeContactsDisplay() {
  var delayAnimation = function delayAnimation() {
    document.querySelector('.contacts').style.display = 'flex';
    document.querySelector('.contacts').style.opacity = '1';
  };

  setTimeout(delayAnimation, 800);
};

btn.addEventListener('click', function () {
  changeContactsDisplay();
  changeBtnDisplay();
}); // reviews script

var revealReviews = function revealReviews() {
  var cycleForReviews = function cycleForReviews(event) {
    for (var i = 0; i < event.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = event[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        event[i].classList.add('__animations');
      }
    }
  };

  var boxLeft = document.querySelectorAll('.box-left');
  var boxRight = document.querySelectorAll('.box-right');
  cycleForReviews(boxLeft);
  cycleForReviews(boxRight);
};

window.addEventListener('scroll', revealReviews);

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/js/index": 0,
/******/ 			"public/css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkweb_card"] = self["webpackChunkweb_card"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["public/css/style"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/css/style"], () => (__webpack_require__("./src/sass/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;