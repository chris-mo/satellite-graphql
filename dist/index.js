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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_gqlLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/gqlLoader */ \"./api/utils/gqlLoader.js\");\n/* harmony import */ var _utils_gqlLoader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_gqlLoader__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolvers */ \"./api/resolvers/index.js\");\n\n\n\nconst satellite = _utils_gqlLoader__WEBPACK_IMPORTED_MODULE_0___default()('./typeDefs/satellite.graphql');\nconst foaas = _utils_gqlLoader__WEBPACK_IMPORTED_MODULE_0___default()('./typeDefs/foaas.graphql');\nconst randomUser = _utils_gqlLoader__WEBPACK_IMPORTED_MODULE_0___default()('./typeDefs/randomUser.graphql');\n\nconst gqlServerConfig = {\n    typeDefs: [satellite, foaas, randomUser].join(' '),\n    resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (gqlServerConfig);\n\n//# sourceURL=webpack:///./api/index.js?");

/***/ }),

/***/ "./api/resolvers/foaasResolvers.js":
/*!*****************************************!*\
  !*** ./api/resolvers/foaasResolvers.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst baseUrl = 'https://www.foaas.com';\n\nconst options = {\n    headers: {\n        'Accept': 'application/json'\n    }\n};\n\nconst foaasResolvers = {\n    Query: {\n        getAnyway: () => {\n            return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${baseUrl}/anyway/Akshar/Kenny`, options).then(res => {\n                return res.json();\n            });\n        },\n        getBirthday: () => {\n            return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${baseUrl}/bday/Kenny/Akshar`, options).then(res => res.json());\n        },\n        getParticular: () => {\n            return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${baseUrl}/particular/redux/Akshar`, options).then(res => res.json());\n        },\n        getProgrammer: () => {\n            return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${baseUrl}/programmer/John`, options).then(res => res.json());\n        },\n        getPulp: () => {\n            return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${baseUrl}/pulp/GraphQL/Akshar`, options).then(res => res.json());\n        }\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (foaasResolvers);\n\n//# sourceURL=webpack:///./api/resolvers/foaasResolvers.js?");

/***/ }),

/***/ "./api/resolvers/index.js":
/*!********************************!*\
  !*** ./api/resolvers/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _satelliteResolvers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./satelliteResolvers */ \"./api/resolvers/satelliteResolvers.js\");\n/* harmony import */ var _foaasResolvers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foaasResolvers */ \"./api/resolvers/foaasResolvers.js\");\n/* harmony import */ var _randomUserResolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./randomUserResolvers */ \"./api/resolvers/randomUserResolvers.js\");\n\n\n\n\nvar merge = __webpack_require__(/*! merge-deep */ \"merge-deep\");\n\nconst allResolvers = [_foaasResolvers__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _satelliteResolvers__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _randomUserResolvers__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n\nlet resolvers = {};\n\nallResolvers.forEach(res => {\n    resolvers = merge(resolvers, res);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (resolvers);\n\n//# sourceURL=webpack:///./api/resolvers/index.js?");

/***/ }),

/***/ "./api/resolvers/randomUserResolvers.js":
/*!**********************************************!*\
  !*** ./api/resolvers/randomUserResolvers.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst baseUrl = 'https://randomuser.me/api/';\n\nconst randomUserResolver = {\n    Query: {\n        getUser: () => {\n            return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(baseUrl).then(res => {\n                const json = res.json();\n                return json;\n            }).then(res => {\n                return res.results[0];\n            });\n        }\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (randomUserResolver);\n\n//# sourceURL=webpack:///./api/resolvers/randomUserResolvers.js?");

/***/ }),

/***/ "./api/resolvers/satelliteResolvers.js":
/*!*********************************************!*\
  !*** ./api/resolvers/satelliteResolvers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst messages = __webpack_require__(/*! ../../data/messages */ \"./data/messages.json\");\nconst notifications = __webpack_require__(/*! ../../data/notifications */ \"./data/notifications.json\");\n\nconst satelliteResolvers = {\n    Query: {\n        allMessages: (root, args) => {\n            return messages;\n        },\n        notifications: (root, args) => {\n            return notifications;\n        }\n    },\n    Mutation: {\n        addMessage: (root, { content }) => {\n            let allMessages = messages;\n            const newMessage = {\n                id: allMessages.length + 1,\n                content,\n                isOwner: false,\n                readStatus: false\n            };\n            allMessages.push(newMessage);\n\n            // Subscription\n            pubsub.publish('messageAdded', {\n                messageAdded: newMessage\n            });\n\n            return newMessage;\n        },\n        addNotification: (root, args) => {\n            const newCount = {\n                count: ++notifications.count\n            };\n\n            // Subscription\n            pubsub.publish('notificationAdded', {\n                notificationAdded: newCount\n            });\n\n            return newCount;\n        }\n    },\n    Subscription: {\n        messageAdded: {\n            subscribe: () => pubsub.asyncIterator('messageAdded')\n        },\n        notificationAdded: {\n            subscribe: () => pubsub.asyncIterator('notificationAdded')\n        }\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (satelliteResolvers);\n\n//# sourceURL=webpack:///./api/resolvers/satelliteResolvers.js?");

/***/ }),

/***/ "./api/utils/gqlLoader.js":
/*!********************************!*\
  !*** ./api/utils/gqlLoader.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {const fs = __webpack_require__(/*! fs */ \"fs\");\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst loadGQLFile = type => {\n  const filePath = path.join(__dirname, `${process.cwd()}/api`, type);\n  return fs.readFileSync(filePath, 'utf-8');\n};\n\nmodule.exports = loadGQLFile;\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./api/utils/gqlLoader.js?");

/***/ }),

/***/ "./data/messages.json":
/*!****************************!*\
  !*** ./data/messages.json ***!
  \****************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

eval("module.exports = [{\"id\":1,\"content\":\"I am interested in  your property\",\"isOwner\":true,\"readStatus\":true},{\"id\":2,\"content\":\"I am interested in money\",\"isOwner\":false,\"readStatus\":true},{\"id\":3,\"content\":\"Let me rent for free\",\"isOwner\":true,\"readStatus\":true}];\n\n//# sourceURL=webpack:///./data/messages.json?");

/***/ }),

/***/ "./data/notifications.json":
/*!*********************************!*\
  !*** ./data/notifications.json ***!
  \*********************************/
/*! exports provided: count, default */
/***/ (function(module) {

eval("module.exports = {\"count\":3};\n\n//# sourceURL=webpack:///./data/notifications.json?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var graphql_yoga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-yoga */ \"graphql-yoga\");\n/* harmony import */ var graphql_yoga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_yoga__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./api/index.js\");\n// import { ApolloServer, PubSub } from 'apollo-server';\n// import { makeExecutableSchema } from 'graphql-tools';\n\n\n\nconst serverOptions = {\n    port: 5000,\n    endpoint: '/graphql',\n    playground: '/docs',\n    tracing: true,\n    debug: true\n};\n\nconst server = new graphql_yoga__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLServer\"](_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nserver.start(serverOptions, ({ port }) => console.log(`Server on port ${port}`));\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "graphql-yoga":
/*!*******************************!*\
  !*** external "graphql-yoga" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-yoga\");\n\n//# sourceURL=webpack:///external_%22graphql-yoga%22?");

/***/ }),

/***/ "merge-deep":
/*!*****************************!*\
  !*** external "merge-deep" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"merge-deep\");\n\n//# sourceURL=webpack:///external_%22merge-deep%22?");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");\n\n//# sourceURL=webpack:///external_%22node-fetch%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });