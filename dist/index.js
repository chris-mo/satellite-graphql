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

/***/ "./data/messages.json":
/*!****************************!*\
  !*** ./data/messages.json ***!
  \****************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

eval("module.exports = [{\"id\":1,\"content\":\"I am interested in  your property\",\"isOwner\":true,\"readStatus\":true},{\"id\":2,\"content\":\"I am interested in money\",\"isOwner\":false,\"readStatus\":true},{\"id\":3,\"content\":\"Let me rent for free\",\"isOwner\":true,\"readStatus\":true}];\n\n//# sourceURL=webpack:///./data/messages.json?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tools */ \"graphql-tools\");\n/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tools__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema */ \"./schema.js\");\n/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers */ \"./resolvers.js\");\nconst { ApolloServer, PubSub } = __webpack_require__(/*! apollo-server */ \"apollo-server\");\n\n\n\n\n\nconst messages = __webpack_require__(/*! ./data/messages */ \"./data/messages.json\");\nconst schema = Object(graphql_tools__WEBPACK_IMPORTED_MODULE_0__[\"makeExecutableSchema\"])({\n    typeDefs: _schema__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\nconst pubsub = new PubSub();\n\nconst context = {\n    messages,\n    pubsub\n};\n\nconst server = new ApolloServer({\n    schema,\n    context\n});\n\nserver.listen().then(({ url }) => {\n    console.log(`Server running at ${url}`);\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./resolvers.js":
/*!**********************!*\
  !*** ./resolvers.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst messages = __webpack_require__(/*! ./data/messages */ \"./data/messages.json\");\nconst { PubSub } = __webpack_require__(/*! apollo-server */ \"apollo-server\");\nconst pubsub = new PubSub();\nconst typeDefs = __webpack_require__(/*! ./schema */ \"./schema.js\");\n\nconst resolvers = {\n    Query: {\n        allMessages: (root, args) => {\n            return messages;\n        }\n    },\n    Mutation: {\n        addMessage: (root, { content }) => {\n            let allMessages = messages;\n            const newMessage = {\n                id: allMessages.length + 1,\n                content,\n                isOwner: false,\n                readStatus: false\n            };\n            allMessages.push(newMessage);\n\n            pubsub.publish('messageAdded', {\n                messageAdded: newMessage\n            });\n            return newMessage;\n        }\n    },\n    Subscription: {\n        messageAdded: {\n            subscribe: () => pubsub.asyncIterator('messageAdded')\n        }\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (resolvers);\n\n//# sourceURL=webpack:///./resolvers.js?");

/***/ }),

/***/ "./schema.js":
/*!*******************!*\
  !*** ./schema.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst typeDefs = `\n    type Message {\n        id: ID!\n        content: String!\n        isOwner: Boolean!\n        readStatus: Boolean!\n    }\n\n    type Query {\n        allMessages: [Message!]!\n    }\n\n    type Lead {\n        id: ID!\n        messages: [Message]!\n    }\n\n    type Mutation {\n        addMessage(content: String!): Message!\n    }\n\n    type Subscription {\n        messageAdded: Message!\n    }\n`;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (typeDefs);\n\n//# sourceURL=webpack:///./schema.js?");

/***/ }),

/***/ "apollo-server":
/*!********************************!*\
  !*** external "apollo-server" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-server\");\n\n//# sourceURL=webpack:///external_%22apollo-server%22?");

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tools\");\n\n//# sourceURL=webpack:///external_%22graphql-tools%22?");

/***/ })

/******/ });