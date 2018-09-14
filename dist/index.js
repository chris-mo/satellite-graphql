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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server */ \"apollo-server\");\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tools */ \"graphql-tools\");\n/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tools__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema */ \"./schema/index.js\");\n/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolvers */ \"./resolvers/index.js\");\n/* harmony import */ var _data_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/messages */ \"./data/messages.json\");\nvar _data_messages__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/messages */ \"./data/messages.json\", 1);\n\n\n\n\n\n\n\nconst executableSchema = Object(graphql_tools__WEBPACK_IMPORTED_MODULE_1__[\"makeExecutableSchema\"])({\n    typeDefs: [_schema__WEBPACK_IMPORTED_MODULE_2__[\"default\"]],\n    resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\n\nconst pubsub = new apollo_server__WEBPACK_IMPORTED_MODULE_0__[\"PubSub\"]();\n\nconst context = {\n    messages: _data_messages__WEBPACK_IMPORTED_MODULE_4__,\n    pubsub\n};\n\nconst server = new apollo_server__WEBPACK_IMPORTED_MODULE_0__[\"ApolloServer\"]({\n    schema: executableSchema,\n    context\n});\n\nserver.listen().then(({ url }) => {\n    console.log(`Server running at ${url}`);\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./resolvers/foaasResolvers.js":
/*!*************************************!*\
  !*** ./resolvers/foaasResolvers.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-server */ \"apollo-server\");\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst pubsub = new apollo_server__WEBPACK_IMPORTED_MODULE_1__[\"PubSub\"]();\n\nconst baseUrl = 'www.foaas.com';\n\nconst foaasResolvers = {\n    Query: {\n        getAnyway: () => {\n            return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${baseUrl}/anyway/Akshar/Kenny`).then(res => {\n                return res.json();\n            });\n        },\n        getBirthday: () => {\n            return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${baseUrl}/bday/Kenny/Akshar`).then(res => res.json());\n        },\n        getParticular: () => {\n            return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${baseUrl}/particular/redux/Akshar`).then(res => res.json());\n        }\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (foaasResolvers);\n\n//# sourceURL=webpack:///./resolvers/foaasResolvers.js?");

/***/ }),

/***/ "./resolvers/index.js":
/*!****************************!*\
  !*** ./resolvers/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _satelliteResolvers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./satelliteResolvers */ \"./resolvers/satelliteResolvers.js\");\n/* harmony import */ var _swapiResolvers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swapiResolvers */ \"./resolvers/swapiResolvers.js\");\n/* harmony import */ var _foaasResolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foaasResolvers */ \"./resolvers/foaasResolvers.js\");\n/* harmony import */ var _randomUserResolvers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./randomUserResolvers */ \"./resolvers/randomUserResolvers.js\");\n\n\n\n\n\nconst allResolvers = [_foaasResolvers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _swapiResolvers__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _satelliteResolvers__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _randomUserResolvers__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n\nlet allQueries,\n    allMutations,\n    allSubscriptions = {};\n\nfor (let resolver of allResolvers) {\n    let keys = Object.keys(resolver);\n\n    keys.forEach(key => {\n        if (key === 'Query') {\n            let singleResolver = resolver[key];\n            let tags = Object.keys(singleResolver);\n            tags.forEach(tag => {\n                allQueries[resolver[key]] = resolver[key][tag];\n            });\n        }\n        if (key === 'Mutation') {\n            let singleResolver = resolver[key];\n            let tags = Object.keys(singleResolver);\n            tags.forEach(tag => {\n                allMutations[resolver[key]] = resolver[key][tag];\n            });\n        }\n        if (key === 'Subscription') {\n            let singleResolver = resolver[key];\n            let tags = Object.keys(singleResolver);\n            tags.forEach(tag => {\n                allSubscriptions[resolver[key]] = resolver[key][tag];\n            });\n        }\n    });\n}\n\nconsole.log(allQueries);\n\n// let allQueries= allResolvers.reduce((current, accumulator)=> {\n//    return Object.assign({}, accumulator.Query, current.Query)\n// });\n\n// let allMutations = allResolvers.reduce((current, accumulator) => {\n//     return Object.assign({}, accumulator.Mutation, current.Mutation)\n// });\n\n// let allSubscriptions = allResolvers.reduce((current, accumulator) => {\n//     return Object.assign({}, accumulator.Subscription, current.Subscription)\n// });\n\n// const mergeResolvers = (objectType) => {\n//     return allResolvers.reduce((current, accumulator) => {\n//         return Object.assign({}, accumulator[objectType], current[objectType])\n//     });\n// }\n\n// const allQueries = mergeResolvers('Query');\n// const allMutations = mergeResolvers('Mutation');\n// const allSubscriptions = mergeResolvers('Subscription');\n\nconst resolvers = {\n    Query: allQueries,\n    Mutation: allMutations,\n    Subscription: allSubscriptions\n};\n\nconsole.log(resolvers);\n/* harmony default export */ __webpack_exports__[\"default\"] = (resolvers);\n\n//# sourceURL=webpack:///./resolvers/index.js?");

/***/ }),

/***/ "./resolvers/randomUserResolvers.js":
/*!******************************************!*\
  !*** ./resolvers/randomUserResolvers.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst baseUrl = 'https://randomuser.me/api/';\n\nconst randomUserResolver = {\n    Query: {\n        getUser: () => {\n            return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(baseUrl).then(res => {\n                const json = res.json();\n                return json;\n            }).then(res => {\n                console.log(res);\n            });\n        }\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (randomUserResolver);\n\n//# sourceURL=webpack:///./resolvers/randomUserResolvers.js?");

/***/ }),

/***/ "./resolvers/satelliteResolvers.js":
/*!*****************************************!*\
  !*** ./resolvers/satelliteResolvers.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst messages = __webpack_require__(/*! ../data/messages */ \"./data/messages.json\");\nconst notifications = __webpack_require__(/*! ../data/notifications */ \"./data/notifications.json\");\n\nconst { PubSub } = __webpack_require__(/*! apollo-server */ \"apollo-server\");\nconst pubsub = new PubSub();\n\nconst satelliteResolvers = {\n    Query: {\n        allMessages: (root, args) => {\n            return messages;\n        },\n        notifications: (root, args) => {\n            return notifications;\n        }\n    },\n    Mutation: {\n        addMessage: (root, { content }) => {\n            let allMessages = messages;\n            const newMessage = {\n                id: allMessages.length + 1,\n                content,\n                isOwner: false,\n                readStatus: false\n            };\n            allMessages.push(newMessage);\n\n            pubsub.publish('messageAdded', {\n                messageAdded: newMessage\n            });\n            return newMessage;\n        },\n        addNotification: (root, args) => {\n            const newCount = {\n                count: ++notifications.count\n            };\n\n            pubsub.publish('notificationAdded', {\n                notificationAdded: newCount\n            });\n\n            return newCount;\n        }\n    },\n    Subscription: {\n        messageAdded: {\n            subscribe: () => pubsub.asyncIterator('messageAdded')\n        },\n        notificationAdded: {\n            subscribe: () => pubsub.asyncIterator('notificationAdded')\n        }\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (satelliteResolvers);\n\n//# sourceURL=webpack:///./resolvers/satelliteResolvers.js?");

/***/ }),

/***/ "./resolvers/swapiResolvers.js":
/*!*************************************!*\
  !*** ./resolvers/swapiResolvers.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { PubSub } = __webpack_require__(/*! apollo-server */ \"apollo-server\");\nconst pubsub = new PubSub();\nconst baseUrl = 'https://swapi.co/api/people/2';\n\nconst swapiResolvers = {\n    Query: {\n        getPerson: () => {\n            return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(baseUrl).then(res => {\n                return res.json();\n            });\n        }\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (swapiResolvers);\n\n//# sourceURL=webpack:///./resolvers/swapiResolvers.js?");

/***/ }),

/***/ "./schema/foaas.js":
/*!*************************!*\
  !*** ./schema/foaas.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst foaasSchema = `\n    type Foaas {\n        message: String!\n        subtitle: String!\n    }\n\n    extend type Query {\n        getAnyway: Foaas!\n        getBirthday: Foaas!\n        getParticular: Foaas!\n    }\n`;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (foaasSchema);\n\n//# sourceURL=webpack:///./schema/foaas.js?");

/***/ }),

/***/ "./schema/index.js":
/*!*************************!*\
  !*** ./schema/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _satellite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./satellite */ \"./schema/satellite.js\");\n/* harmony import */ var _swapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swapi */ \"./schema/swapi.js\");\n/* harmony import */ var _foaas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foaas */ \"./schema/foaas.js\");\n/* harmony import */ var _randomUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./randomUser */ \"./schema/randomUser.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => [_swapi__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _satellite__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _randomUser__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _foaas__WEBPACK_IMPORTED_MODULE_2__[\"default\"]]);\n\n//# sourceURL=webpack:///./schema/index.js?");

/***/ }),

/***/ "./schema/randomUser.js":
/*!******************************!*\
  !*** ./schema/randomUser.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst randomUser = `\n    type RandomUser {\n        gender: String!\n        first: String!\n        last: String!\n    }\n\n    extend type Query {\n        getUser: RandomUser!\n    }\n`;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (randomUser);\n\n//# sourceURL=webpack:///./schema/randomUser.js?");

/***/ }),

/***/ "./schema/satellite.js":
/*!*****************************!*\
  !*** ./schema/satellite.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst satelliteSchema = `\n    type Message {\n        id: ID!\n        content: String!\n        isOwner: Boolean!\n        readStatus: Boolean!\n    }\n\n    type Lead {\n        id: ID!\n        messages: [Message]!\n    }\n\n    type Notifications {\n        count: Int!\n    }\n\n    type Query {\n        allMessages: [Message!]!\n        notifications: Notifications!\n    }\n\n    type Mutation {\n        addMessage(content: String!): Message!\n        addNotification: Notifications!\n    }\n\n    type Subscription {\n        messageAdded: Message!\n        notificationAdded: Notifications!\n    }\n`;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (satelliteSchema);\n\n//# sourceURL=webpack:///./schema/satellite.js?");

/***/ }),

/***/ "./schema/swapi.js":
/*!*************************!*\
  !*** ./schema/swapi.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst swapiSchema = `\n        type Person {\n            name: String!\n            gender: String!\n            skin_color: String\n        }\n\n        extend type Query {\n            getPerson: Person!\n        }\n    `;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (swapiSchema);\n\n//# sourceURL=webpack:///./schema/swapi.js?");

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

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");\n\n//# sourceURL=webpack:///external_%22node-fetch%22?");

/***/ })

/******/ });