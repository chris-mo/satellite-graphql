(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/index.ts":
/*!**********************!*\
  !*** ./api/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst graphql_yoga_1 = __webpack_require__(/*! graphql-yoga */ \"graphql-yoga\");\nconst pubsub = new graphql_yoga_1.PubSub();\nconst resolvers_1 = __webpack_require__(/*! ./resolvers */ \"./api/resolvers/index.ts\");\nconst typeDefs_1 = __webpack_require__(/*! ./typeDefs */ \"./api/typeDefs/index.ts\");\nconst gqlServerConfig = {\n    typeDefs: typeDefs_1.default,\n    resolvers: resolvers_1.default,\n    context: {\n        pubsub\n    }\n};\nexports.default = gqlServerConfig;\n\n\n//# sourceURL=webpack:///./api/index.ts?");

/***/ }),

/***/ "./api/resolvers/foaasResolvers.ts":
/*!*****************************************!*\
  !*** ./api/resolvers/foaasResolvers.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst node_fetch_1 = __webpack_require__(/*! node-fetch */ \"node-fetch\");\nconst baseUrl = 'https://www.foaas.com';\nconst options = {\n    headers: {\n        'Accept': 'application/json'\n    }\n};\nconst foaasResolvers = {\n    Query: {\n        getAnyway: () => {\n            return node_fetch_1.default(`${baseUrl}/anyway/Akshar/Kenny`, options)\n                .then((res) => {\n                return res.json();\n            });\n        },\n        getBirthday: () => {\n            return node_fetch_1.default(`${baseUrl}/bday/Kenny/Akshar`, options)\n                .then((res) => res.json());\n        },\n        getParticular: () => {\n            return node_fetch_1.default(`${baseUrl}/particular/redux/Akshar`, options)\n                .then((res) => res.json());\n        },\n        getProgrammer: () => {\n            return node_fetch_1.default(`${baseUrl}/programmer/John`, options)\n                .then((res) => res.json());\n        },\n        getPulp: () => {\n            return node_fetch_1.default(`${baseUrl}/pulp/GraphQL/Akshar`, options)\n                .then((res) => res.json());\n        },\n    }\n};\nexports.default = foaasResolvers;\n\n\n//# sourceURL=webpack:///./api/resolvers/foaasResolvers.ts?");

/***/ }),

/***/ "./api/resolvers/index.ts":
/*!********************************!*\
  !*** ./api/resolvers/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst satelliteResolvers_1 = __webpack_require__(/*! ./satelliteResolvers */ \"./api/resolvers/satelliteResolvers.ts\");\nconst foaasResolvers_1 = __webpack_require__(/*! ./foaasResolvers */ \"./api/resolvers/foaasResolvers.ts\");\nconst randomUserResolvers_1 = __webpack_require__(/*! ./randomUserResolvers */ \"./api/resolvers/randomUserResolvers.ts\");\nvar merge = __webpack_require__(/*! merge-deep */ \"merge-deep\");\nconst allResolvers = [\n    foaasResolvers_1.default,\n    satelliteResolvers_1.default,\n    randomUserResolvers_1.default\n];\nlet resolvers = {};\nallResolvers.forEach(res => {\n    resolvers = merge(resolvers, res);\n});\nexports.default = resolvers;\n\n\n//# sourceURL=webpack:///./api/resolvers/index.ts?");

/***/ }),

/***/ "./api/resolvers/randomUserResolvers.ts":
/*!**********************************************!*\
  !*** ./api/resolvers/randomUserResolvers.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst randomUserService_1 = __webpack_require__(/*! ../services/randomUserService */ \"./api/services/randomUserService.ts\");\nconst randomUserResolver = {\n    Query: {\n        getUser: () => {\n            return randomUserService_1.default.getUser();\n        }\n    }\n};\nexports.default = randomUserResolver;\n\n\n//# sourceURL=webpack:///./api/resolvers/randomUserResolvers.ts?");

/***/ }),

/***/ "./api/resolvers/satelliteResolvers.ts":
/*!*********************************************!*\
  !*** ./api/resolvers/satelliteResolvers.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst satelliteService_1 = __webpack_require__(/*! ../services/satelliteService */ \"./api/services/satelliteService.ts\");\nconst satelliteResolvers = {\n    Query: {\n        allMessages: (root, args) => satelliteService_1.default.getAllMessages(),\n        notifications: (root, args) => satelliteService_1.default.getAllNotifications()\n    },\n    Mutation: {\n        addMessage: (root, { content }, { pubsub }) => {\n            let allMessages = satelliteService_1.default.getAllMessages();\n            const newMessage = {\n                id: allMessages.length + 1,\n                content,\n                isOwner: false,\n                readStatus: false\n            };\n            allMessages.push(newMessage);\n            pubsub.publish('messageAdded', {\n                messageAdded: newMessage\n            });\n            return newMessage;\n        },\n        addNotification: (root, args, { pubsub }) => {\n            const notifications = satelliteService_1.default.getAllNotifications();\n            const newCount = {\n                count: ++notifications.count\n            };\n            pubsub.publish('notificationAdded', {\n                notificationAdded: newCount\n            });\n            return newCount;\n        }\n    },\n    Subscription: {\n        messageAdded: {\n            subscribe: (root, args, { pubsub }) => pubsub.asyncIterator('messageAdded')\n        },\n        notificationAdded: {\n            subscribe: (root, args, { pubsub }) => pubsub.asyncIterator('notificationAdded')\n        }\n    }\n};\nexports.default = satelliteResolvers;\n\n\n//# sourceURL=webpack:///./api/resolvers/satelliteResolvers.ts?");

/***/ }),

/***/ "./api/services/randomUserService.ts":
/*!*******************************************!*\
  !*** ./api/services/randomUserService.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst node_fetch_1 = __webpack_require__(/*! node-fetch */ \"node-fetch\");\nconst baseUrl = 'https://randomuser.me/api/';\nconst getUserService = {\n    getUser: () => {\n        return node_fetch_1.default(baseUrl)\n            .then((res) => {\n            const json = res.json();\n            return json;\n        })\n            .then((res) => {\n            return res.results[0];\n        });\n    }\n};\nexports.default = getUserService;\n\n\n//# sourceURL=webpack:///./api/services/randomUserService.ts?");

/***/ }),

/***/ "./api/services/satelliteService.ts":
/*!******************************************!*\
  !*** ./api/services/satelliteService.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst messages_js_1 = __webpack_require__(/*! ../../data/messages.js */ \"./data/messages.js\");\nconst notifications_js_1 = __webpack_require__(/*! ../../data/notifications.js */ \"./data/notifications.js\");\nconst satelliteService = {\n    getAllMessages: () => {\n        return messages_js_1.default;\n    },\n    getAllNotifications: () => {\n        return notifications_js_1.default;\n    }\n};\nexports.default = satelliteService;\n\n\n//# sourceURL=webpack:///./api/services/satelliteService.ts?");

/***/ }),

/***/ "./api/typeDefs/index.ts":
/*!*******************************!*\
  !*** ./api/typeDefs/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst gqlLoader_1 = __webpack_require__(/*! ../utils/gqlLoader */ \"./api/utils/gqlLoader.ts\");\nconst satellite = gqlLoader_1.default('./typeDefs/satellite.graphql');\nconst foaas = gqlLoader_1.default('./typeDefs/foaas.graphql');\nconst randomUser = gqlLoader_1.default('./typeDefs/randomUser.graphql');\nconst constructor = gqlLoader_1.default('./typeDefs/constructor.graphql');\nconst allTypeDefs = [\n    constructor,\n    satellite,\n    foaas,\n    randomUser,\n];\nconst typeDefs = allTypeDefs.join(' ');\nexports.default = typeDefs;\n\n\n//# sourceURL=webpack:///./api/typeDefs/index.ts?");

/***/ }),

/***/ "./api/utils/gqlLoader.ts":
/*!********************************!*\
  !*** ./api/utils/gqlLoader.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst path = __webpack_require__(/*! path */ \"path\");\nconst loadGQLFile = (type) => {\n    const filePath = path.join(__dirname, `${process.cwd()}/api`, type);\n    return fs.readFileSync(filePath, 'utf-8');\n};\nexports.default = loadGQLFile;\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./api/utils/gqlLoader.ts?");

/***/ }),

/***/ "./data/messages.js":
/*!**************************!*\
  !*** ./data/messages.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst messages = [{\n    \"id\": 1,\n    \"content\": \"I am interested in  your property\",\n    \"isOwner\": true,\n    \"readStatus\": true\n}, {\n    \"id\": 2,\n    \"content\": \"I am interested in money\",\n    \"isOwner\": false,\n    \"readStatus\": true\n}, {\n    \"id\": 3,\n    \"content\": \"Let me rent for free\",\n    \"isOwner\": true,\n    \"readStatus\": true\n}];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (messages);\n\n//# sourceURL=webpack:///./data/messages.js?");

/***/ }),

/***/ "./data/notifications.js":
/*!*******************************!*\
  !*** ./data/notifications.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst notifications = {\n    \"count\": 3\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (notifications);\n\n//# sourceURL=webpack:///./data/notifications.js?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// import { ApolloServer, PubSub } from 'apollo-server';\n// import { makeExecutableSchema } from 'graphql-tools';\nconst graphql_yoga_1 = __webpack_require__(/*! graphql-yoga */ \"graphql-yoga\");\nconst api_1 = __webpack_require__(/*! ./api */ \"./api/index.ts\");\nconst serverOptions = {\n    port: 5000,\n    endpoint: '/graphql',\n    subscriptions: '/subscriptions',\n    playground: '/docs',\n    tracing: true,\n    debug: true\n};\nconsole.log(process);\nconst server = new graphql_yoga_1.GraphQLServer(api_1.default);\nserver.start(serverOptions, ({ port }) => console.log(`Server on port ${port}`));\n\n\n//# sourceURL=webpack:///./index.ts?");

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

/******/ })));