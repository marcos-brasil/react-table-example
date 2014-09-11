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
	Object.defineProperties(exports, {
	  App: {get: function() {
	      return App;
	    }},
	  __esModule: {value: true}
	});
	var $__components_47_Table__,
	    $__components_47_Card__,
	    $__reactjs__,
	    $__models__;
	var TableCtrl = ($__components_47_Table__ = __webpack_require__(2), $__components_47_Table__ && $__components_47_Table__.__esModule && $__components_47_Table__ || {default: $__components_47_Table__}).TableCtrl;
	var CardCtrl = ($__components_47_Card__ = __webpack_require__(3), $__components_47_Card__ && $__components_47_Card__.__esModule && $__components_47_Card__ || {default: $__components_47_Card__}).CardCtrl;
	var React = ($__reactjs__ = __webpack_require__(4), $__reactjs__ && $__reactjs__.__esModule && $__reactjs__ || {default: $__reactjs__}).React;
	var Model = ($__models__ = __webpack_require__(1), $__models__ && $__models__.__esModule && $__models__ || {default: $__models__}).Model;
	React.initializeTouchEvents(true);
	function _App() {
	  "use strict";
	}
	_App.prototype.render = function() {
	  "use strict";
	  return (React.DOM.div({className: "table-container"}, CardCtrl({
	    ctx: new Model(),
	    body: TableCtrl
	  }), CardCtrl({
	    ctx: new Model(),
	    body: TableCtrl
	  }), CardCtrl({
	    ctx: new Model(),
	    body: TableCtrl
	  }), CardCtrl({
	    ctx: new Model(),
	    body: TableCtrl
	  })));
	};
	var App = React.createClass(_App.prototype);
	var renderApp = function() {
	  return React.renderComponent(App(null), document.getElementById('react-app'));
	};
	renderApp();
	


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(exports, {
	  Model: {get: function() {
	      return Model;
	    }},
	  __esModule: {value: true}
	});
	var defaultList = [{
	  prefix: 'Mr.',
	  first: 'Harry',
	  last: 'Potter',
	  gender: 'm',
	  height: 70,
	  weight: 140,
	  age: 19,
	  has_nose: true
	}, {
	  prefix: 'Ms.',
	  first: 'Hermione',
	  last: 'Granger',
	  gender: 'f',
	  height: 66,
	  weight: 121,
	  age: 19,
	  has_nose: true
	}, {
	  prefix: undefined,
	  first: 'Dobby',
	  last: undefined,
	  gender: 'm',
	  height: 23,
	  weight: 20,
	  age: 284,
	  has_nose: true
	}, {
	  prefix: 'Ms.',
	  first: 'Luna',
	  last: 'Lovegood',
	  gender: 'f',
	  height: 68,
	  weight: 99,
	  age: 17,
	  has_nose: true
	}, {
	  prefix: undefined,
	  first: 'Hagrid',
	  last: undefined,
	  gender: 'm',
	  height: 108,
	  weight: 553,
	  age: 45,
	  has_nose: true
	}, {
	  prefix: 'Dark Lord',
	  first: 'Tom',
	  last: 'Riddle',
	  gender: 'm',
	  height: 74,
	  weight: 144,
	  age: 48,
	  has_nose: false
	}, {
	  prefix: '"Moaning"',
	  first: 'Myrtle',
	  last: undefined,
	  gender: 'f',
	  height: 65,
	  weight: 0,
	  age: 106,
	  has_nose: undefined
	}];
	var Model = function Model(list) {
	  list = list || defaultList;
	  this.store = new Map();
	  list.forEach(function(item, i) {
	    this.store.set(item, {
	      position: i,
	      positionOri: i,
	      visible: true
	    });
	  }.bind(this));
	};
	($traceurRuntime.createClass)(Model, {}, {});
	


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(exports, {
	  TableCtrl: {get: function() {
	      return TableCtrl;
	    }},
	  __esModule: {value: true}
	});
	var $__reactjs__,
	    $__Body__,
	    $__Head__,
	    $___46__46__47_utils__,
	    $___46__46__47_Popover__;
	var React = ($__reactjs__ = __webpack_require__(4), $__reactjs__ && $__reactjs__.__esModule && $__reactjs__ || {default: $__reactjs__}).React;
	var BodyView = ($__Body__ = __webpack_require__(8), $__Body__ && $__Body__.__esModule && $__Body__ || {default: $__Body__}).BodyView;
	var HeadView = ($__Head__ = __webpack_require__(9), $__Head__ && $__Head__.__esModule && $__Head__ || {default: $__Head__}).HeadView;
	var $__3 = ($___46__46__47_utils__ = __webpack_require__(10), $___46__46__47_utils__ && $___46__46__47_utils__.__esModule && $___46__46__47_utils__ || {default: $___46__46__47_utils__}),
	    sorter = $__3.sorter,
	    createCtxModel = $__3.createCtxModel,
	    preRender = $__3.preRender,
	    itemSorter = $__3.itemSorter;
	var $__4 = ($___46__46__47_Popover__ = __webpack_require__(11), $___46__46__47_Popover__ && $___46__46__47_Popover__.__esModule && $___46__46__47_Popover__ || {default: $___46__46__47_Popover__}),
	    FilterPopup = $__4.FilterPopup,
	    fixPopoverPosition = $__4.fixPopoverPosition,
	    popoverListHandler = $__4.popoverListHandler;
	var _table_count = 0;
	function _TableCtrl() {
	  "use strict";
	}
	_TableCtrl.prototype.getInitialState = function() {
	  "use strict";
	  var id = ("table-" + _table_count);
	  this.store = this.props.ctx.store;
	  _table_count += 1;
	  return {
	    model: createCtxModel(this.store),
	    sortHandler: this.sortHandler,
	    filterHandler: this.filterHandler,
	    sorted: false,
	    isAscendant: false,
	    isFilterUp: false,
	    id: id,
	    popover: {
	      id: (id + "-popover"),
	      position: 'top',
	      node: null,
	      first: true
	    }
	  };
	};
	_TableCtrl.prototype.$_TableCtrl_fixPopoverPosition = function() {
	  "use strict";
	  fixPopoverPosition(this.state);
	};
	_TableCtrl.prototype.filterSelection = function(evt, id, el) {
	  "use strict";
	  var tmp = id.split('-');
	  var pos = this.state.list[id];
	  var col = tmp[tmp.length - 2];
	  if ($(el.children()[0]).hasClass('hide')) {
	    $(el.children()[0]).removeClass('hide');
	  } else {
	    $(el.children()[0]).toggle('hide');
	  }
	  this.store.forEach(function(state, person) {
	    if (state.position === parseInt(pos, 10)) {
	      state.visible = !state.visible;
	    }
	  }.bind(this));
	  this.updateCtxModel();
	};
	_TableCtrl.prototype.componentDidMount = function() {
	  "use strict";
	  this.state.popover.ops = this.popoverListHandler();
	  $(("#" + this.state.id + " .table-wrap")).scroll(this.updateCtxModel);
	  $(window).resize(this.updateCtxModel);
	  var touchmove = false;
	  $(("#" + this.state.id)).bind('touchmove', function(evt) {
	    touchmove = true;
	  });
	  var clickEvt;
	  if ((typeof window.ontouchend) === 'undefined') {
	    clickEvt = 'click';
	  } else {
	    clickEvt = 'touchend';
	  }
	  $(("#" + this.state.id)).bind(clickEvt, function(evt) {
	    if (touchmove) {
	      touchmove = false;
	      return;
	    }
	    if ($(evt.target).parent().attr('id') === ("#" + this.state.popover.id + "-list")) {
	      this.filterSelection(evt, $(evt.target).attr('id'), $(evt.target));
	    }
	    if ($(evt.target).parent().parent().attr('id') === ("#" + this.state.popover.id + "-list")) {
	      this.filterSelection(evt, $(evt.target).parent().attr('id'), $(evt.target).parent());
	    }
	    if ($(evt.target).parent().parent().parent().attr('id') === ("#" + this.state.popover.id + "-list")) {
	      this.filterSelection(evt, $(evt.target).parent().parent().attr('id'), $(evt.target).parent().parent());
	    }
	  }.bind(this));
	};
	_TableCtrl.prototype.updateCtxModel = function() {
	  "use strict";
	  this.$_TableCtrl_fixPopoverPosition();
	  if (this.state.popover.first) {
	    this.state.popover.first = false;
	  }
	  if (this.state.isFilterUp && this.state.sorted) {
	    $(("#" + this.state.popover.id + " span")).popover('show');
	    this.state.sorted = false;
	  }
	  this.setState({
	    model: createCtxModel(this.store),
	    sorted: this.state.sorted,
	    isFilterUp: this.state.isFilterUp
	  });
	};
	_TableCtrl.prototype.sortHandler = function(evt, col, title) {
	  "use strict";
	  evt.stopPropagation();
	  this.state.sorted = true;
	  this.state.isAscendant = !this.state.isAscendant;
	  var cache = [];
	  this.store.forEach(function(state, person) {
	    cache.push([person, state]);
	  });
	  cache.sort(itemSorter(col, title)).forEach(function(pair, index, self) {
	    if (this.state.isAscendant) {
	      pair[1].position = index;
	    } else {
	      pair[1].position = self.length - (index + 1);
	    }
	  }.bind(this));
	  this.updateCtxModel();
	};
	_TableCtrl.prototype.popoverListHandler = function() {
	  "use strict";
	  return popoverListHandler(this.state.popover, function() {
	    var cache = [];
	    var widthValue = 3;
	    this.store.forEach(function(state, person) {
	      cache[state.position] = [person, state];
	      var value = person[this.state.popover.collumn];
	      if (value === true) {
	        value = 'TRUE';
	      }
	      if (value === false) {
	        value = 'FALSE';
	      }
	      if (value === 0) {
	        value = 0;
	      }
	      if (!value && (value !== 0) && (value !== '')) {
	        value = 'NULL';
	      }
	      var value = value + '';
	      var value = value ? value.length : 0;
	      if (widthValue < value) {
	        widthValue = value;
	      }
	    }.bind(this));
	    return (React.DOM.ul({
	      id: ("#" + this.state.popover.id + "-list"),
	      className: "list-unstyled list-group"
	    }, cache.map(function(pair, index) {
	      var value = pair[0][this.state.popover.collumn];
	      var elem = React.DOM.div(null, " ");
	      if (pair[1].visible) {
	        var padding = '0.7em';
	        var checked = React.DOM.i({className: "glyphicon glyphicon-ok pull-left"}, " ");
	      } else {
	        var padding = '0.7em';
	        var checked = React.DOM.i({className: "glyphicon glyphicon-ok pull-left hide"}, " ");
	      }
	      this.state.list = this.state.list || {};
	      var listId = ("#" + this.state.popover.id + "-" + this.state.popover.collumn + "-" + pair[1].positionOri);
	      this.state.list[listId] = index;
	      if (value === true) {
	        value = 'TRUE';
	      }
	      if (value === false) {
	        value = 'FALSE';
	      }
	      if (value === 0) {
	        value = 0;
	      }
	      if (!value && (value !== 0) && (value !== '')) {
	        value = 'NULL';
	      }
	      if (value === 'NULL') {
	        elem = React.DOM.span({
	          className: "text-muted",
	          style: {"padding-left": padding}
	        }, " ", value, " ");
	      } else {
	        elem = React.DOM.span({style: {"padding-left": padding}}, value);
	      }
	      return (React.DOM.li({
	        id: listId,
	        key: index,
	        position: index,
	        style: {width: 8 * (widthValue + 2)},
	        className: "list-group-item"
	      }, checked, " ", elem));
	    }.bind(this))));
	  }.bind(this));
	};
	_TableCtrl.prototype.filterHandler = function(evt, node, id) {
	  "use strict";
	  evt.stopPropagation();
	  var col = id.replace((this.state.id + "-"), '');
	  this.state.popover.node = node;
	  this.state.popover.collumn = col;
	  if (this.state.isFilterUp) {
	    $(("#" + this.state.popover.id + " span")).popover('hide');
	    this.state.popover.first = true;
	  }
	  if (this.state.isFilterUp !== id) {
	    $(("#" + this.state.popover.id + " span")).popover(this.state.popover.ops);
	    this.state.isFilterUp = id;
	    setTimeout(function() {
	      $(("#" + this.state.popover.id + " span")).popover('show');
	    }.bind(this), 200);
	  } else if (this.state.isFilterUp === id) {
	    this.state.isFilterUp = false;
	  }
	  setTimeout(this.updateCtxModel, 190);
	};
	_TableCtrl.prototype.headHandler = function() {
	  "use strict";
	  $(("#" + this.state.popover.id + " span")).popover('hide');
	  this.state.isFilterUp = false;
	  this.updateCtxModel();
	};
	_TableCtrl.prototype.bodyHandler = function() {
	  "use strict";
	  console.log('body clicked/touched');
	};
	_TableCtrl.prototype.render = function() {
	  "use strict";
	  return (React.DOM.div({id: this.state.id}, FilterPopup({ctx: this.state}), React.DOM.small(null, React.DOM.samp(null, "Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit." + ' ' + "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.")), React.DOM.div({className: "table-wrap"}, HeadView({
	    ctx: this.state,
	    onClick: this.headHandler,
	    onTouchEnd: this.headHandler
	  }), BodyView({
	    ctx: this.state,
	    onClick: this.bodyHandler,
	    onTouchEnd: this.bodyHandler
	  }))));
	};
	var TableCtrl = React.createClass(_TableCtrl.prototype);
	


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(exports, {
	  CardCtrl: {get: function() {
	      return CardCtrl;
	    }},
	  __esModule: {value: true}
	});
	function _DefautBody() {
	  "use strict";
	}
	_DefautBody.prototype.render = function() {
	  "use strict";
	  return React.DOM.div(null);
	};
	var DefautBody = React.createClass(_DefautBody.prototype);
	function _CardCtrl() {
	  "use strict";
	}
	_CardCtrl.prototype.getInitialState = function() {
	  "use strict";
	  return {
	    body: !!this.props.body ? this.props.body : DefautBody,
	    title: !!this.props.title ? this.props.title : (Math.random())
	  };
	};
	_CardCtrl.prototype.render = function() {
	  "use strict";
	  return (React.DOM.div({className: "card-wrap"}, React.DOM.div({className: "panel-heading"}, React.DOM.h3({className: "panel-title"}, " ", this.state.title, " ")), React.DOM.div({className: "panel-body"}, this.state.body({ctx: this.props.ctx}))));
	};
	var CardCtrl = React.createClass(_CardCtrl.prototype);
	


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(exports, {
	  React: {get: function() {
	      return React;
	    }},
	  __esModule: {value: true}
	});
	var React = window.React || function() {
	  console.error('no reactjs found');
	  return false;
	};
	


/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(exports, {
	  BodyCell: {get: function() {
	      return BodyCell;
	    }},
	  BodyView: {get: function() {
	      return BodyView;
	    }},
	  __esModule: {value: true}
	});
	function _BodyCell() {
	  "use strict";
	}
	_BodyCell.prototype.render = function() {
	  "use strict";
	  return (React.DOM.td({style: {display: 'none'}}, this.props.ctx.model[this.props.title].map(function(val, key) {
	    var value = this.props.data[this.props.title][val];
	    var elem = React.DOM.span(null, " ");
	    if (value === true) {
	      value = 'TRUE';
	    }
	    if (value === false) {
	      value = 'FALSE';
	    }
	    if (value === 0) {
	      value = 0;
	    }
	    if (!value && (value !== 0) && (value !== '')) {
	      value = 'NULL';
	    }
	    if (value === 'NULL') {
	      elem = React.DOM.span({className: "text-muted"}, value, " ");
	    } else {
	      elem = React.DOM.span(null, value);
	    }
	    return (React.DOM.td({key: key}, React.DOM.div({className: "body-cell"}, elem)));
	  }.bind(this))));
	};
	var BodyCell = React.createClass(_BodyCell.prototype);
	function _BodyView() {
	  "use strict";
	}
	_BodyView.prototype.render = function() {
	  "use strict";
	  return (React.DOM.table({className: "table-body"}, React.DOM.tbody(null, this.props.ctx.model.data.map(function(val, key, m) {
	    if (!m[key].state.visible) {
	      return null;
	    }
	    return (React.DOM.tr({key: key}, BodyCell({
	      ctx: this.props.ctx,
	      title: "name",
	      data: val
	    }), BodyCell({
	      ctx: this.props.ctx,
	      title: "features",
	      data: val
	    })));
	  }.bind(this)))));
	};
	var BodyView = React.createClass(_BodyView.prototype);
	


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(exports, {
	  HeadCell: {get: function() {
	      return HeadCell;
	    }},
	  HeadItem: {get: function() {
	      return HeadItem;
	    }},
	  HeadView: {get: function() {
	      return HeadView;
	    }},
	  __esModule: {value: true}
	});
	function _HeadCell() {
	  "use strict";
	}
	_HeadCell.prototype.getInitialState = function() {
	  "use strict";
	  return {id: (this.props.ctx.id + "-" + this.props.value)};
	};
	_HeadCell.prototype.filterHandler = function(evt) {
	  "use strict";
	  this.props.ctx.filterHandler(evt, this.getDOMNode(), this.state.id);
	};
	_HeadCell.prototype.sortHandler = function(evt) {
	  "use strict";
	  this.props.ctx.sortHandler(evt, this.props.value, this.props.title);
	};
	_HeadCell.prototype.render = function() {
	  "use strict";
	  return (React.DOM.div({
	    className: "head-cell",
	    onClick: this.filterHandler,
	    onTouchEnd: this.filterHandler
	  }, this.props.value, React.DOM.span({
	    className: "glyphicon glyphicon-sort",
	    onClick: this.sortHandler,
	    onTouchEnd: this.sortHandler
	  })));
	};
	var HeadCell = React.createClass(_HeadCell.prototype);
	function _HeadItem() {
	  "use strict";
	}
	_HeadItem.prototype.render = function() {
	  "use strict";
	  return (React.DOM.table({className: "table-head"}, React.DOM.tr(null, React.DOM.th({colSpan: this.props.ctx.model[this.props.title].length}, React.DOM.div({className: "head-cell"}, this.props.title))), React.DOM.tr(null, this.props.ctx.model[this.props.title].map(function(col, key) {
	    return (React.DOM.th({key: key}, HeadCell({
	      ctx: this.props.ctx,
	      value: col
	    })));
	  }.bind(this)))));
	};
	var HeadItem = React.createClass(_HeadItem.prototype);
	function _HeadView() {
	  "use strict";
	}
	_HeadView.prototype.render = function() {
	  "use strict";
	  return (React.DOM.table({
	    className: "table-head",
	    onClick: this.props.onClick,
	    onTouchEnd: this.props.onTouchEnd
	  }, React.DOM.tr(null, React.DOM.th(null, React.DOM.div({className: "rounded-left"}, HeadItem({
	    ctx: this.props.ctx,
	    title: "name"
	  }))), React.DOM.th(null, React.DOM.div({className: "rounded-right"}, HeadItem({
	    ctx: this.props.ctx,
	    title: "features"
	  }))))));
	};
	var HeadView = React.createClass(_HeadView.prototype);
	


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(exports, {
	  preRender: {get: function() {
	      return preRender;
	    }},
	  createCtxModel: {get: function() {
	      return createCtxModel;
	    }},
	  sortAlphaNum: {get: function() {
	      return sortAlphaNum;
	    }},
	  itemSorter: {get: function() {
	      return itemSorter;
	    }},
	  __esModule: {value: true}
	});
	function preRender(elem) {
	  return React.renderComponentToString(React.createClass({render: function() {
	      return elem;
	    }})(null));
	}
	function createCtxModel(store) {
	  var ctxModel = {
	    name: ['prefix', 'first', 'last'],
	    features: ['gender', 'height', 'weight', 'age', 'has_nose'],
	    data: []
	  };
	  store.forEach(function(state, person) {
	    var obj = ctxModel.data[state.position] = Object.create(null);
	    obj.name = {};
	    ctxModel.name.forEach(function(item) {
	      obj.name[item] = person[item];
	    });
	    obj.features = {};
	    ctxModel.features.forEach(function(item) {
	      obj.features[item] = person[item];
	    });
	    obj.state = state;
	  });
	  return ctxModel;
	}
	var reA = /[^a-zA-Z]/g;
	var reN = /[^0-9]/g;
	function sortAlphaNum(a, b) {
	  var aA = a.replace(reA, "");
	  var bA = b.replace(reA, "");
	  if (aA === bA) {
	    var aN = parseInt(a.replace(reN, ""), 10);
	    var bN = parseInt(b.replace(reN, ""), 10);
	    return aN === bN ? 0 : aN > bN ? 1 : -1;
	  } else {
	    return aA > bA ? 1 : -1;
	  }
	}
	function itemSorter(col, title) {
	  function _fixValue(value) {
	    if (value === true) {
	      value = 'TRUE';
	    }
	    if (value === false) {
	      value = 'FALSE';
	    }
	    if (value === 0) {
	      value = 0;
	    }
	    if (!value && (value !== 0) && (value !== '')) {
	      value = 'NULL';
	    }
	    return value;
	  }
	  return function(a, b) {
	    var strA = _fixValue(a[0][col]);
	    var strB = _fixValue(b[0][col]);
	    var aNum = parseInt(strA, 10);
	    var bNum = parseInt(strB, 10);
	    if (!isNaN(aNum) && !isNaN(bNum)) {
	      return bNum - aNum;
	    }
	    return sortAlphaNum(strA, strB);
	  };
	}
	


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(exports, {
	  FilterPopup: {get: function() {
	      return FilterPopup;
	    }},
	  popoverListHandler: {get: function() {
	      return popoverListHandler;
	    }},
	  fixPopoverPosition: {get: function() {
	      return fixPopoverPosition;
	    }},
	  __esModule: {value: true}
	});
	var $__reactjs__,
	    $___46__46__47_utils__;
	var React = ($__reactjs__ = __webpack_require__(4), $__reactjs__ && $__reactjs__.__esModule && $__reactjs__ || {default: $__reactjs__}).React;
	var preRender = ($___46__46__47_utils__ = __webpack_require__(10), $___46__46__47_utils__ && $___46__46__47_utils__.__esModule && $___46__46__47_utils__ || {default: $___46__46__47_utils__}).preRender;
	var _popover_count = 0;
	function _FilterPopup() {
	  "use strict";
	}
	_FilterPopup.prototype.render = function() {
	  "use strict";
	  return (React.DOM.div({
	    id: this.props.ctx.popover.id,
	    style: {position: 'absolute'}
	  }, React.DOM.span({rel: "popover"}, " ")));
	};
	var FilterPopup = React.createClass(_FilterPopup.prototype);
	function popoverListHandler(state, fn) {
	  function content() {
	    return preRender(fn());
	  }
	  return {
	    placement: state.position || 'top',
	    html: true,
	    content: content
	  };
	}
	function fixPopoverPosition(state) {
	  var targetOffset = $(state.popover.node).offset();
	  var targetWidth = $(state.popover.node).width();
	  var tableOffset = $(("#" + state.id)).offset();
	  var popoverOffset = $(("#" + state.popover.id + " .popover")).offset();
	  var popoverWidth = $(("#" + state.popover.id + " .popover")).width() || (targetWidth * 1.3);
	  var win = $(window).width();
	  if (!state.isFilterUp) {
	    return;
	  }
	  var cssObj = {top: targetOffset.top};
	  var tableLeftOffset = tableOffset.left;
	  var targetLeftOffset = targetOffset.left;
	  var popoverLeftOffset = popoverOffset ? popoverOffset.left : 0;
	  var leftOffset = targetLeftOffset + (targetWidth / 2);
	  var leftCorrection = (tableLeftOffset * 0.4) + (popoverWidth / 2);
	  if (leftOffset >= leftCorrection) {
	    cssObj.left = leftOffset;
	  } else {
	    cssObj.left = leftCorrection;
	  }
	  var rightOffset = (win - (tableLeftOffset * 0.4)) - (popoverWidth / 2);
	  if (cssObj.left >= rightOffset) {
	    cssObj.left = rightOffset;
	  }
	  $(("#" + state.popover.id)).css({
	    top: cssObj.top,
	    left: cssObj.left
	  });
	}
	


/***/ }
/******/ ])
//# sourceMappingURL=maps/p1.chunk.js.map