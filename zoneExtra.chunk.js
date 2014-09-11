/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Zone.exceptZone = {
	  boringZone: window.zone,
	  interestingZone: window.zone,
	  beforeTask: function() {
	    this._oldZone = window.zone;
	    window.zone = Zone.exceptZone.boringZone;
	  },
	  afterTask: function() {
	    window.zone = this._oldZone;
	  },
	  fork: function(ops) {
	    return window.zone = window.zone.fork(ops);
	  }
	};
	


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Zone.countingZone = {
	  '+enqueueTask': function() {
	    this.data.count += 1;
	  },
	  '-dequeueTask': function() {
	    this.data.count -= 1;
	  },
	  '+afterTask': function() {
	    if (this.data.count === 0 && !this.data.flushed) {
	      this.data.flushed = true;
	      this.run(this.onFlush);
	    }
	  },
	  counter: function() {
	    return this.data.count;
	  },
	  data: {
	    count: 0,
	    flushed: false
	  },
	  onFlush: function() {}
	};
	


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Zone.Stacktrace = function(e) {
	  this._e = e;
	};
	Zone.Stacktrace.prototype.get = function() {
	  if (zone.stackFramesFilter) {
	    return this._e.stack.split('\n').filter(zone.stackFramesFilter).join('\n');
	  }
	  return this._e.stack;
	};
	Zone.getStacktrace = function() {
	  function getStacktraceWithUncaughtError() {
	    return new Zone.Stacktrace(new Error());
	  }
	  function getStacktraceWithCaughtError() {
	    try {
	      throw new Error();
	    } catch (e) {
	      return new Zone.Stacktrace(e);
	    }
	  }
	  var stack = getStacktraceWithUncaughtError();
	  if (stack && stack._e.stack) {
	    Zone.getStacktrace = getStacktraceWithUncaughtError;
	    return stack;
	  } else {
	    Zone.getStacktrace = getStacktraceWithCaughtError;
	    return Zone.getStacktrace();
	  }
	};
	Zone.longStackTraceZone = {
	  getLongStacktrace: function(exception) {
	    var trace = [];
	    var zone = this;
	    if (zone.stackFramesFilter) {
	      trace.push(exception.stack.split('\n').filter(zone.stackFramesFilter).join('\n'));
	    } else {
	      trace.push(exception.stack);
	    }
	    var now = Date.now();
	    while (zone && zone.constructedAtException) {
	      trace.push('--- ' + (Date(zone.constructedAtTime)).toString() + ' - ' + (now - zone.constructedAtTime) + 'ms ago', zone.constructedAtException.get());
	      zone = zone.parent;
	    }
	    return trace.join('\n');
	  },
	  stackFramesFilter: function(line) {
	    return line.indexOf('zone.js') === -1;
	  },
	  onError: function(exception) {
	    var reporter = this.reporter || console.log.bind(console);
	    reporter(exception.toString());
	    reporter(this.getLongStacktrace(exception));
	  },
	  fork: function(locals) {
	    var newZone = this._fork(locals);
	    newZone.constructedAtException = Zone.getStacktrace();
	    newZone.constructedAtTime = Date.now();
	    return newZone;
	  },
	  _fork: zone.fork
	};
	


/***/ }
/******/ ])
//# sourceMappingURL=maps/zoneExtra.chunk.js.map