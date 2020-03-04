webpackHotUpdate("static/development/pages/chat.js",{

/***/ "./components/ChatBoard.js":
/*!*********************************!*\
  !*** ./components/ChatBoard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatBoard; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ChatInstance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ChatInstance */ "./components/ChatInstance.js");






var _jsxFileName = "/home/guido/Documents/GitHub/react-resort/components/ChatBoard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



var ChatBoard = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ChatBoard, _Component);

  function ChatBoard() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ChatBoard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ChatBoard).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ChatBoard, [{
    key: "render",
    value: function render() {
      var currentUser = this.props.currentUser;
      return __jsx("div", {
        className: "chat-board",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(currentUser.rooms).map(function (room) {
        return __jsx(_ChatInstance__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: room.id,
          roomInfo: room,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        });
      }));
    }
  }]);

  return ChatBoard;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./components/ChatInstance.js":
/*!************************************!*\
  !*** ./components/ChatInstance.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatInstance; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);








var _jsxFileName = "/home/guido/Documents/GitHub/react-resort/components/ChatInstance.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;


var ChatInstance = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ChatInstance, _Component);

  function ChatInstance(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ChatInstance);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ChatInstance).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "componentDidMount", function () {
      var chatManager = new Chatkit.ChatManager({
        instanceLocator: 'v1:us1:fe088103-8b4d-4e06-a93c-4d2fb3f963be',
        userId: 'guido',
        tokenProvider: new Chatkit.TokenProvider({
          url: 'http://localhost:3001/authenticate'
        })
      });
      chatManager.connect().then(function (currentUser) {
        _this.setState({
          currentUser: currentUser
        });

        console.log(currentUser);
        return currentUser.subscribeToRoom({
          roomId: _this.props.roomInfo.id,
          messageLimit: 100,
          hooks: {
            onMessage: function onMessage(message) {
              console.log(message);

              _this.setState({
                messages: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.state.messages), [message])
              });
            },
            onUserStartedTyping: function onUserStartedTyping(user) {
              _this.setState({
                userTyping: user.name,
                isUserTyping: true
              });
            },
            onUserStoppedTyping: function onUserStoppedTyping(user) {
              _this.setState({
                userTyping: user.name,
                isUserTyping: false
              });
            }
          }
        });
      }).then(function (room) {
        return _this.setState({
          currentRoom: room
        });
      })["catch"](function (error) {
        return console.log('Hiiiii', error);
      });
    });

    _this.state = {
      messages: [],
      currentRoom: {},
      currentUser: {},
      userTyping: '',
      isUserTyping: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ChatInstance, [{
    key: "render",
    value: function render() {
      var roomInfo = this.props.roomInfo.roomInfo;
      return __jsx("div", {
        className: "chat-instance",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, this.state.messages);
    }
  }]);

  return ChatInstance;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return chat; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_chat_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/chat.jpg */ "./images/chat.jpg");
/* harmony import */ var _images_chat_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_chat_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _images_gif_loading_arrow_gif__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/gif/loading-arrow.gif */ "./images/gif/loading-arrow.gif");
/* harmony import */ var _images_gif_loading_arrow_gif__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_images_gif_loading_arrow_gif__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../context */ "./context.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @pusher/chatkit-client */ "./node_modules/@pusher/chatkit-client/dist/web/chatkit.js");
/* harmony import */ var _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_ChatList__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/ChatList */ "./components/ChatList.js");
/* harmony import */ var _components_ChatBoard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/ChatBoard */ "./components/ChatBoard.js");










var _jsxFileName = "/home/guido/Documents/GitHub/react-resort/pages/chat.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }










function chat() {
  var context = Object(react__WEBPACK_IMPORTED_MODULE_10__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_14__["RoomContext"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])({}),
      input = _useState[0],
      setInput = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(false),
      btnDisabled = _useState2[0],
      setbtnDisabled = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])({}),
      errors = _useState3[0],
      setErrors = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(null),
      currentUser = _useState4[0],
      setCurrentUser = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])({}),
      currentRoom = _useState5[0],
      setCurrentRoom = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(0),
      value = _useState6[0],
      setValue = _useState6[1];

  var style = {
    minHeight: 600,
    width: "100%",
    padding: "50px 0 50px 0"
  };

  var handleChange = function handleChange(event) {
    return setInput(_objectSpread({}, input, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, event.target.name, event.target.value)));
  };

  var useForceUpdate = function useForceUpdate() {
    setValue(Math.random());
  };

  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(function () {
    context.updateCredentials(true);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(function () {
    if (context.authenticated && context.authenticated !== null) {
      handleChatSession();
    } else {}
  }, [context.authenticated]);

  var handleSubmit = function handleSubmit(event) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function handleSubmit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            setbtnDisabled(true);
            axios__WEBPACK_IMPORTED_MODULE_13___default()({
              url: 'http://localhost:8000/api/users/login',
              method: 'POST',
              data: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8___default()({
                email: input.email,
                password: input.password
              }),
              headers: {
                'Content-Type': 'application/json'
              }
            }).then(function (res) {
              setbtnDisabled(false);
              context.updateCredentials(false, res.data.userId, res.data.email, res.data.token);
            })["catch"](function (err) {
              console.log(err);
              setErrors(_objectSpread({}, errors, {
                error: "No se pudo conectar. Revise sus credenciales"
              }));
              setbtnDisabled(false);
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  var handleChatSession = function handleChatSession() {
    var chatManager = new _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_16___default.a.ChatManager({
      instanceLocator: 'v1:us1:fe088103-8b4d-4e06-a93c-4d2fb3f963be',
      userId: context.chatUserId,
      tokenProvider: new _pusher_chatkit_client__WEBPACK_IMPORTED_MODULE_16___default.a.TokenProvider({
        url: 'http://localhost:3001/authenticate'
      })
    });
    chatManager.connect().then(function (currentUser) {
      setCurrentUser(currentUser);
      console.log(currentUser);
      currentUser;
      return currentUser.subscribeToRoom({
        roomId: '992194b2-feaa-4842-a546-5c3482ae69c4',
        messageLimit: 100,
        hooks: {
          onMessage: function onMessage(message) {
            console.log(message);
            useForceUpdate();
          }
        }
      })["catch"](function (err) {
        return console.log(err);
      }); // return currentUser.createRoom({
      //     id: `${currentUser.id}-room`,
      //     name: `${currentUser.id}-room`,
      //     private: true,
      //     addUserIds: [currentUser.id, 'guido']
      // }).then(room => {
      //     setCurrentRoom(room)
      // //     return currentUser.subscribeToRoom({
      // //     roomId: room.id,
      // //     messageLimit: 100,
      // //     hooks: {
      // //         onMessage: (message) => {
      // //             console.log(message)
      // //             this.setState({
      // //                 messages: [...this.state.messages, message]
      // //             })
      // //         },
      // //         onUserStartedTyping: user => {
      // //             this.setState({
      // //                 userTyping: user.name,
      // //                 isUserTyping: true
      // //             })
      // //         },
      // //         onUserStoppedTyping: user => {
      // //             this.setState({
      // //                 userTyping: user.name,
      // //                 isUserTyping: false
      // //             })
      // //         }
      // //     }
      // // })
      // }).catch(err => {
      //     console.log('error', err)
      // })
    })["catch"](function (error) {
      return console.log('Hiiiii', error);
    });
  };

  var renderForm = function renderForm() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, "Login to Chat"), _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_6___default()(errors).map(function (err, index) {
      return __jsx("div", {
        key: index,
        className: "login-err",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, err);
    }), __jsx("form", {
      onSubmit: handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, "Email"), __jsx("input", {
      type: "email",
      name: "email",
      id: "email",
      onChange: handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }), __jsx("label", {
      htmlFor: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, "Password"), __jsx("input", {
      type: "password",
      name: "password",
      id: "password",
      onChange: handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }), __jsx("button", {
      disabled: btnDisabled,
      className: btnDisabled ? "btn-primary submit-btn disabled" : "btn-primary submit-btn",
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, btnDisabled ? __jsx("img", {
      className: "loading-login",
      src: _images_gif_loading_arrow_gif__WEBPACK_IMPORTED_MODULE_12___default.a,
      alt: "loading spinner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }) : "Enviar")));
  };

  var renderLoggedin = function renderLoggedin() {
    return __jsx("div", {
      className: "signed",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, "You are logged in"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, __jsx("a", {
      className: "btn-primary signed",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, "Go Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
      href: "/admin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, __jsx("a", {
      className: "btn-primary signed",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, "Admin Panel")), __jsx("div", {
      className: "chat-window",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, __jsx(_components_ChatList__WEBPACK_IMPORTED_MODULE_17__["default"], {
      currentUser: currentUser,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }), __jsx(_components_ChatBoard__WEBPACK_IMPORTED_MODULE_18__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    })));
  };

  if (context.authenticated === null) {
    return __jsx("div", {
      style: style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, __jsx("div", {
      className: "log-box loading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, __jsx("img", {
      className: "loading-spinner",
      src: _images_gif_loading_arrow_gif__WEBPACK_IMPORTED_MODULE_12___default.a,
      alt: "loading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    })));
  }

  return __jsx("div", {
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, __jsx("div", {
    className: "log-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, context.authenticated ? renderLoggedin() : renderForm()));
}

/***/ })

})
//# sourceMappingURL=chat.js.c02a62f35bc4d43d99f0.hot-update.js.map