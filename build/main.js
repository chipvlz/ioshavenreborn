require('source-map-support/register')
module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(3);





var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 3000;

app.set('port', port);

// Import API Routes
app.use('/api', __WEBPACK_IMPORTED_MODULE_2__api__["a" /* default */]);

// Import and Set Nuxt.js options
<<<<<<< HEAD
var config = __webpack_require__(10);
=======
var config = __webpack_require__(5);
>>>>>>> master
config.dev = !("development" === 'production');

// Init Nuxt.js
var nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Nuxt"](config);

// Build only in dev mode
if (config.dev) {
  var builder = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt);
  builder.build();
}

// Give nuxt middleware to express
app.use(nuxt.render);

// Listen the server
app.listen(port, host);
console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users__ = __webpack_require__(4);




var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

// Add USERS Routes
router.use(__WEBPACK_IMPORTED_MODULE_1__users__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_User__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_User___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__classes_User__);



var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

/* GET users listing. */
router.get('/users', function (req, res, next) {
  var george = new __WEBPACK_IMPORTED_MODULE_1__classes_User___default.a('george');
  george.set('age', 4);
  george.save();
  res.json(george.get());
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __init__ = __webpack_require__(6);

var User = function (_init__) {
  _inherits(User, _init__);

  function User(name) {
    _classCallCheck(this, User);

    var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this));

    _this.__key__ = name;
    return _this;
  }

  return User;
}(__init__);

module.exports = User;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = __webpack_require__(7);
var path = __webpack_require__(8);

var __init__ = function () {
  function __init__(a) {
    _classCallCheck(this, __init__);

    this.__type__ = this.constructor.name;
    this.__db__ = path.join(__dirname, '../db/', this.__type__ + '.json');
    this.__data__ = this.constructor.all();
  }

  // export () {
  //   let e = Object.assign({}, this.__data__)
  //   Object.keys(e).forEach(k => {
  //     if (k[0] == '_' && k[1] == '_') delete e[k]
  //   })
  //   return e
  // }

  _createClass(__init__, [{
    key: 'set',
    value: function set(item, value) {
      this.__data__[this.__key__][item] = value;
    }
  }, {
    key: 'public',
    value: function _public() {
      var e = Object.assign({}, this.get());
      Object.keys(e).forEach(function (k) {
        if (k[0] === '_') delete e[k];
      });
      return e;
    }
  }, {
    key: 'private',
    value: function _private() {
      var e = Object.assign({}, this.get());
      Object.keys(e).forEach(function (k) {
        if (k[0] !== '_') delete e[k];
      });
      return e;
    }
  }, {
    key: 'data',
    value: function data() {
      var o1 = Object.assign({}, this);
      var o2 = Object.assign({}, this.get());
      var e = Object.assign(o1, o2);
      delete e['__data__'];
      return e;
    }
  }, {
    key: 'get',
    value: function get() {
      return this.__data__[this.__key__] || {};
    }
  }, {
    key: 'drop',
    value: function drop() {
      delete this.__data__[this.__key__];
      return this.save();
    }
  }, {
    key: 'save',
    value: function save() {
      var _this = this;

      this.__data__[this.__key__] = this.get();
      return new Promise(function (resolve, reject) {
        fs.writeFile(_this.__db__, JSON.stringify(_this.__data__, null, 2), function (err) {
          if (err) return reject();
          resolve(_this.__data__);
        });
      });
    }
  }], [{
    key: 'all',
    value: function all() {
      var _db = path.join(__dirname, '../db/', this.name + '.json');
      var data = void 0;
      try {
        data = !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
      } catch (e) {
        data = {};
      }
      return data;
    }
  }]);

  return __init__;
}();

module.exports = __init__;
/* WEBPACK VAR INJECTION */}.call(exports, "server/classes"))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 9;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'iOS Haven',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }, { name: 'apple-mobile-web-app-title', content: 'iOS Haven' }, { name: 'application-name', content: 'iOS Haven' }, { name: 'theme-color', content: '#ffffff' }],
    link: [
    // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href: '/fa/css/fontawesome-pro-brands.css' }, { rel: 'stylesheet', href: '/fa/css/fontawesome-pro-solid.css' }, { rel: 'stylesheet', href: '/fa/css/fontawesome-pro-light.css' }, { rel: 'stylesheet', href: '/fa/css/fontawesome-pro-regular.css' }, { rel: 'stylesheet', href: '/fa/css/fontawesome-pro-core.css' }, { rel: 'stylesheet', href: '/markdown.css' }, { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png?v=QEMYzE9pb35555' }, { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png?v=QEMYzE9pb35555' }, { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png?v=QEMYzE9pb35555' }, { rel: 'manifest', href: '/favicons/manifest.json?v=QEMYzE9pb35555' }, { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg?v=QEMYzE9pb35555', color: '#e81e1e' }, { rel: 'shortcut icon', href: '/favicons/favicon.ico?v=QEMYzE9pb35555' }],
    script: [{ type: 'text/javascript', 'src': 'discord.min.js' }]
  },
  /*
  ** Global CSS
  */
  // css: ['~/assets/css/main.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend: function extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map