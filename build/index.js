/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/main/Navbar.jsx":
/*!****************************************!*\
  !*** ./src/components/main/Navbar.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/esm/Grid/Grid.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/esm/Box/Box.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/esm/Button/Button.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/esm/styles/styled.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/system/esm/colorManipulator.js\");\n/* harmony import */ var _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/InputBase */ \"./node_modules/@mui/material/esm/InputBase/InputBase.js\");\n/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Search */ \"./node_modules/@mui/icons-material/Search.js\");\n/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css/navbar.css */ \"./src/css/navbar.css\");\n/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Tabs */ \"./node_modules/@mui/material/esm/Tabs/Tabs.js\");\n/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Tab */ \"./node_modules/@mui/material/esm/Tab/Tab.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/node_modules/react-router/esm/react-router.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst Search = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.default)('div')(({\n  theme\n}) => ({\n  position: 'relative',\n  borderRadius: theme.shape.borderRadius,\n  backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.alpha)(theme.palette.primary.main, 0.05),\n  color: theme.palette.primary.main,\n  '&:hover': {\n    backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.alpha)(theme.palette.primary.main, 0.15)\n  },\n  marginLeft: 0,\n  width: '100%',\n  transition: theme.transitions.create('margin'),\n  [theme.breakpoints.up('sm')]: {\n    marginLeft: theme.spacing(1),\n    width: 'auto',\n    marginRight: '80px',\n    '&:focus-within': {\n      marginRight: 0\n    }\n  }\n}));\nconst SearchIconWrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.default)('div')(({\n  theme\n}) => ({\n  padding: theme.spacing(0, 2),\n  height: '100%',\n  position: 'absolute',\n  pointerEvents: 'none',\n  display: 'flex',\n  alignItems: 'center',\n  justifyContent: 'center'\n}));\nconst StyledInputBase = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.default)(_mui_material_InputBase__WEBPACK_IMPORTED_MODULE_4__.default)(({\n  theme\n}) => ({\n  color: 'inherit',\n  '& .MuiInputBase-input': {\n    padding: theme.spacing(1, 1, 1, 0),\n    // vertical padding + font size from searchIcon\n    paddingLeft: `calc(1em + ${theme.spacing(4)})`,\n    transition: theme.transitions.create('width'),\n    width: '100%',\n    [theme.breakpoints.up('sm')]: {\n      width: '120px',\n      '&:focus': {\n        width: '200px'\n      }\n    }\n  }\n}));\n\nfunction Navbar() {\n  //display={{ 'xs': 'none', 'sm': 'block' }}\n  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useHistory)();\n  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)();\n  const [tabValue, setTabValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const currentPage = location.pathname;\n    setTabValue(routeIndexes[currentPage]);\n  }, [location]);\n  const routeIndexes = {\n    '/home': 0,\n    '/chats': 1,\n    '/myprofile': 2,\n    '/search': false\n  };\n  const routeNames = ['/home', '/chats', '/myprofile'];\n\n  const handleTabChange = (event, routeIndex) => {\n    // setTabValue(routeIndex);\n    history.push(routeNames[routeIndex]);\n  };\n\n  const disconnect = () => {\n    setTabValue(false);\n  };\n\n  const commenceSearch = e => {\n    if (e.key === 'Enter') console.log('siuuuuu');\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {\n    wrap: \"nowrap\",\n    columns: 20,\n    container: true,\n    direction: \"row\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    className: \"navbar-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {\n    item: true,\n    container: true,\n    sm: 7,\n    direction: \"row\",\n    alignItems: \"center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__.default, {\n    component: _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__.default,\n    item: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: \"./images/logo_ver13.png\",\n    className: \"navbar-logo\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__.default, {\n    component: _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__.default,\n    item: true,\n    className: \"search-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Search, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SearchIconWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_8__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledInputBase, {\n    placeholder: \"Search people\\u2026\",\n    inputProps: {\n      'aria-label': 'search'\n    },\n    className: \"test\",\n    onKeyDown: commenceSearch\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {\n    item: true,\n    container: true,\n    direction: \"row\",\n    sm: 6,\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    className: \"routes-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__.default, {\n    sx: {\n      width: '100%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_9__.default, {\n    value: tabValue,\n    onChange: handleTabChange,\n    sx: {\n      height: '65px'\n    },\n    centered: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_10__.default, {\n    label: \"Home\",\n    sx: {\n      height: '65px'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_10__.default, {\n    label: \"Chats\",\n    sx: {\n      height: '65px'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_10__.default, {\n    label: \"My Profile\",\n    sx: {\n      height: '65px'\n    }\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {\n    item: true,\n    container: true,\n    sm: 7,\n    direction: \"row\",\n    justifyContent: \"flex-end\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__.default, {\n    variant: \"contained\",\n    onClick: disconnect\n  }, \"Disconnect\")));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);\n\n//# sourceURL=webpack://myreact/./src/components/main/Navbar.jsx?");

/***/ }),

/***/ "./src/components/main/chats/ChatMessage.jsx":
/*!***************************************************!*\
  !*** ./src/components/main/chats/ChatMessage.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Paper */ \"./node_modules/@mui/material/esm/Paper/Paper.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/esm/Typography/Typography.js\");\n\n\n\n\n\nfunction ChatMessage({\n  sender,\n  content\n}) {\n  const me = JSON.parse(window.localStorage.getItem('userInfo')).email;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"message-margin-anchor\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_1__.default, {\n    elevation: 1,\n    className: 'message ' + (sender === 'me' && 'message-me')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__.default, null, content)));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatMessage);\n\n//# sourceURL=webpack://myreact/./src/components/main/chats/ChatMessage.jsx?");

/***/ }),

/***/ "./src/components/main/chats/ChatScreen.jsx":
/*!**************************************************!*\
  !*** ./src/components/main/chats/ChatScreen.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _ChatScreenBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatScreenBar */ \"./src/components/main/chats/ChatScreenBar.jsx\");\n/* harmony import */ var _ChatScreenTypeBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatScreenTypeBar */ \"./src/components/main/chats/ChatScreenTypeBar.jsx\");\n/* harmony import */ var _ChatScreenMain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChatScreenMain */ \"./src/components/main/chats/ChatScreenMain.jsx\");\n\n\n\n\n\n\n\nfunction ChatScreen() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"chat-screen\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ChatScreenBar__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ChatScreenMain__WEBPACK_IMPORTED_MODULE_3__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ChatScreenTypeBar__WEBPACK_IMPORTED_MODULE_2__.default, null));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatScreen);\n\n//# sourceURL=webpack://myreact/./src/components/main/chats/ChatScreen.jsx?");

/***/ }),

/***/ "./src/components/main/chats/ChatScreenBar.jsx":
/*!*****************************************************!*\
  !*** ./src/components/main/chats/ChatScreenBar.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/AppBar */ \"./node_modules/@mui/material/esm/AppBar/AppBar.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/esm/Toolbar/Toolbar.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Avatar */ \"./node_modules/@mui/material/esm/Avatar/Avatar.js\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/ListItem */ \"./node_modules/@mui/material/esm/ListItem/ListItem.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/ListItemText */ \"./node_modules/@mui/material/esm/ListItemText/ListItemText.js\");\n/* harmony import */ var _mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/ListItemAvatar */ \"./node_modules/@mui/material/esm/ListItemAvatar/ListItemAvatar.js\");\n\n\n\n\n\n\n\n\n\n\nfunction ChatScreenBar() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"chat-screen-bar-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__.default, {\n    position: \"sticky\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_3__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_4__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5__.default, {\n    alt: \"Roy Brezner\",\n    src: \"/images/berez.jpg\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6__.default, {\n    primary: \"Roy Brezner\",\n    secondary: 'Online'\n  })))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatScreenBar);\n\n//# sourceURL=webpack://myreact/./src/components/main/chats/ChatScreenBar.jsx?");

/***/ }),

/***/ "./src/components/main/chats/ChatScreenMain.jsx":
/*!******************************************************!*\
  !*** ./src/components/main/chats/ChatScreenMain.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _mui_material_Fab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Fab */ \"./node_modules/@mui/material/esm/Fab/Fab.js\");\n/* harmony import */ var _mui_material_useScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/useScrollTrigger */ \"./node_modules/@mui/material/esm/useScrollTrigger/useScrollTrigger.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/esm/Box/Box.js\");\n/* harmony import */ var _mui_material_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Fade */ \"./node_modules/@mui/material/esm/Fade/Fade.js\");\n/* harmony import */ var _DailyMessages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DailyMessages */ \"./src/components/main/chats/DailyMessages.jsx\");\n/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowDown */ \"./node_modules/@mui/icons-material/KeyboardArrowDown.js\");\n\n\n\n\n\n\n\n\n\nconst ScrollBottom = ({\n  scrollToBottom,\n  scrollRef,\n  children\n}) => {\n  const trigger = (0,_mui_material_useScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.default)({\n    target: scrollRef,\n    threshold: 0\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Fade__WEBPACK_IMPORTED_MODULE_3__.default, {\n    in: !trigger\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__.default, {\n    onClick: scrollToBottom,\n    role: \"presentation\",\n    sx: {\n      position: 'absolute',\n      bottom: 80,\n      right: 30\n    }\n  }, children));\n};\n\nfunction ChatScreenMain() {\n  const [scroller, setScroller] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);\n\n  const scrollToBottom = () => {\n    const anchor = document.querySelector('#bottom-anchor');\n\n    if (anchor) {\n      console.log('yesssssss');\n      anchor.scrollIntoView({\n        behavior: 'auto',\n        block: 'center'\n      });\n    }\n  };\n\n  scrollToBottom();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"chat-screen-main-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"daily-messages-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"daily-messages-content\",\n    ref: scrollerRef => {\n      if (scrollerRef) {\n        setScroller(scrollerRef);\n      }\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '20.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '20.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '20.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '20.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '20.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '20.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '20.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '20.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '20.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '20.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '20.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '20.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '20.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '20.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '20.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '20.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '20.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '20.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '20.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '20.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '20.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '20.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '16.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '17.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '18.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '19.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '20.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '21.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '22.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '23.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '24.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '25.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '26.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '27.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '28.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '29.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '30.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '31.12.2022'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DailyMessages__WEBPACK_IMPORTED_MODULE_1__.default, {\n    date: '01.01.2023'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ScrollBottom, {\n    scrollToBottom: scrollToBottom,\n    scrollRef: scroller\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Fab__WEBPACK_IMPORTED_MODULE_5__.default, {\n    size: \"small\",\n    \"aria-label\": \"scroll back to Bottom\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_6__.default, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"bottom-anchor\"\n  }))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatScreenMain);\n\n//# sourceURL=webpack://myreact/./src/components/main/chats/ChatScreenMain.jsx?");

/***/ }),

/***/ "./src/components/main/chats/ChatScreenTypeBar.jsx":
/*!*********************************************************!*\
  !*** ./src/components/main/chats/ChatScreenTypeBar.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/esm/styles/styled.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/system/esm/colorManipulator.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/esm/Toolbar/Toolbar.js\");\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/AppBar */ \"./node_modules/@mui/material/esm/AppBar/AppBar.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/esm/Box/Box.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/esm/IconButton/IconButton.js\");\n/* harmony import */ var _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/InputBase */ \"./node_modules/@mui/material/esm/InputBase/InputBase.js\");\n/* harmony import */ var _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Send */ \"./node_modules/@mui/icons-material/Send.js\");\n\n\n\n\n\n\n\n\n\nfunction ChatScreenTypeBar() {\n  const TypeMessage = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.default)('div')(({\n    theme\n  }) => ({\n    position: 'relative',\n    borderRadius: theme.shape.borderRadius,\n    backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.alpha)(theme.palette.common.white, 0.15),\n    '&:hover': {\n      backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.alpha)(theme.palette.common.white, 0.25)\n    },\n    marginRight: theme.spacing(2),\n    marginLeft: 0,\n    width: '100%'\n  }));\n  const StyledInputBase = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.default)(_mui_material_InputBase__WEBPACK_IMPORTED_MODULE_3__.default)(({\n    theme\n  }) => ({\n    color: 'inherit',\n    '& .MuiInputBase-input': {\n      padding: theme.spacing(1, 1, 1, 0),\n      paddingLeft: `calc(1em + ${theme.spacing(1)})`,\n      width: '100%'\n    }\n  }));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"chat-screen-type-bar-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__.default, {\n    position: \"sticky\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, {\n    sx: {\n      flexGrow: 1\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TypeMessage, {\n    sx: {\n      marginTop: '8px',\n      marginBottom: '8px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledInputBase, {\n    placeholder: \"Enter message\",\n    inputProps: {\n      'aria-label': 'enter message'\n    },\n    sx: {\n      width: '100%',\n      paddingBottom: 0,\n      paddingTop: 0\n    },\n    multiline: true\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__.default, {\n    size: \"large\",\n    \"aria-label\": \"show more\",\n    color: \"inherit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_8__.default, null))))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatScreenTypeBar);\n\n//# sourceURL=webpack://myreact/./src/components/main/chats/ChatScreenTypeBar.jsx?");

/***/ }),

/***/ "./src/components/main/chats/Chats.jsx":
/*!*********************************************!*\
  !*** ./src/components/main/chats/Chats.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/esm/Grid/Grid.js\");\n/* harmony import */ var _PeopleList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PeopleList */ \"./src/components/main/chats/PeopleList.jsx\");\n/* harmony import */ var _ChatScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatScreen */ \"./src/components/main/chats/ChatScreen.jsx\");\n/* harmony import */ var _css_chats_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../css/chats.css */ \"./src/css/chats.css\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pusher-js */ \"./node_modules/pusher-js/dist/web/pusher.js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _main_axiosClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../main/axiosClient */ \"./src/main/axiosClient.js\");\n\n\n\n\n\n\n\n\n\nfunction Chats() {\n  const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});\n  const [peopleList, setPeopleList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n\n  const emailSorter = (email1, email2) => {\n    const email1Lower = email1.toLowerCase(),\n          email2Lower = email2.toLowerCase();\n    if (email1Lower < email2Lower) //sort string ascending\n      return -1;\n    if (email1Lower > email2Lower) return 1;\n    return 0; //default return value (no sorting)\n  };\n\n  const generateRoomNames = (email, friends) => {\n    return friends.map(friend => {\n      const roomName = [email, friend.email].sort(emailSorter).join('-');\n      return roomName;\n    });\n  };\n\n  const calculateTimeInSeconds = time => {\n    const [HH, MM] = time.split(':');\n    return Number(HH) * 60 * 60 + Number(MM) * 60;\n  };\n\n  const preparePeopleList = messages => {\n    //need to get user email and friends from local storage, generate room names and take the last message from each room\n    //this can be passed to PeopleList component\n    const userObj = JSON.parse(window.localStorage.getItem('userInfo'));\n    const roomNames = generateRoomNames(userObj.email, userObj.friends);\n    return userObj.friends.map((friend, i) => {\n      const toReturn = {\n        displayName: friend.displayName,\n        roomName: roomNames[i]\n      };\n      if (Object.keys(messages).length === 0) return toReturn; //if there are no messages\n\n      if (!messages[roomNames[i]]) return toReturn; //or there arent any messages in a specific room\n\n      const latestMessageDate = Object.keys(messages[roomNames[i]]).sort((date1, date2) => Number(date2) - Number(date1))[0];\n      toReturn.firstMessage = messages[roomNames[i]][latestMessageDate].sort((message1, message2) => message2.timeSeconds - message1.timeSeconds)[0];\n      return toReturn;\n    });\n  };\n\n  const handleInsertedMessage = msg => {\n    messages[msg.room][msg.date].push(msg);\n    setMessages({ ...messages\n    });\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    _main_axiosClient__WEBPACK_IMPORTED_MODULE_5__.default.get('/chats/messages/initial').then(res => {\n      console.log('messages');\n      console.log(res.data);\n      setMessages(res.data);\n      setPeopleList(preparePeopleList(res.data));\n    });\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const pusher = new (pusher_js__WEBPACK_IMPORTED_MODULE_4___default())('ce66e5fa38c1f6d6235d', {\n      cluster: 'eu'\n    });\n    const channel = pusher.subscribe('messages');\n    channel.bind('inserted', data => {\n      // alert(JSON.stringify(data));\n      handleInsertedMessage(data);\n    });\n    return () => {\n      channel.unbind_all();\n      channel.unsubscribe();\n    };\n  }, [messages]); // console.log(messages);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {\n    container: true,\n    direction: \"row\",\n    className: \"chats-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {\n    item: true,\n    xs: 2,\n    className: \"chats-grid-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PeopleList__WEBPACK_IMPORTED_MODULE_1__.default, {\n    list: peopleList\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {\n    item: true,\n    flexGrow: 1,\n    className: \"chats-grid-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ChatScreen__WEBPACK_IMPORTED_MODULE_2__.default, null)));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chats);\n\n//# sourceURL=webpack://myreact/./src/components/main/chats/Chats.jsx?");

/***/ }),

/***/ "./src/components/main/chats/DailyMessages.jsx":
/*!*****************************************************!*\
  !*** ./src/components/main/chats/DailyMessages.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/esm/Grid/Grid.js\");\n/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Chip */ \"./node_modules/@mui/material/esm/Chip/Chip.js\");\n/* harmony import */ var _ChatMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatMessage */ \"./src/components/main/chats/ChatMessage.jsx\");\n\n\n\n\n\n\nfunction DailyMessages({\n  date,\n  messages\n}) {\n  //message : {sender:'me'|'other',content:'string'}\n  const message3 = {\n    sender: 'me',\n    content: 'WE GO JIMMMMMMM!!!!!!!!!!!!!!'\n  };\n  const message2 = {\n    sender: 'other',\n    content: 'SIUUUUUUUUUUUU'\n  };\n  const message = {\n    sender: 'me',\n    content: 'YOOOOOOOOOOOOOOO'\n  };\n  const message4 = {\n    sender: 'other',\n    content: 'LETS GOOOOOO'\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__.default, {\n    container: true,\n    direction: \"column\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__.default, {\n    item: true,\n    textAlign: \"center\",\n    className: \"messages-date\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_3__.default, {\n    label: date\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__.default, {\n    item: true,\n    container: true,\n    className: \"all-messages\",\n    direction: \"column\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__.default, {\n    item: true,\n    container: true,\n    justifyContent: message.sender === 'me' ? 'left' : 'right'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ChatMessage__WEBPACK_IMPORTED_MODULE_1__.default, {\n    sender: message.sender,\n    content: message.content\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__.default, {\n    item: true,\n    container: true,\n    justifyContent: message3.sender === 'me' ? 'left' : 'right'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ChatMessage__WEBPACK_IMPORTED_MODULE_1__.default, {\n    sender: message3.sender,\n    content: message3.content\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__.default, {\n    item: true,\n    container: true,\n    justifyContent: message2.sender === 'me' ? 'left' : 'right'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ChatMessage__WEBPACK_IMPORTED_MODULE_1__.default, {\n    sender: message2.sender,\n    content: message2.content\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__.default, {\n    item: true,\n    container: true,\n    justifyContent: message4.sender === 'me' ? 'left' : 'right'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ChatMessage__WEBPACK_IMPORTED_MODULE_1__.default, {\n    sender: message4.sender,\n    content: message4.content\n  }))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DailyMessages);\n\n//# sourceURL=webpack://myreact/./src/components/main/chats/DailyMessages.jsx?");

/***/ }),

/***/ "./src/components/main/chats/PeopleList.jsx":
/*!**************************************************!*\
  !*** ./src/components/main/chats/PeopleList.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _PeopleListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PeopleListItem */ \"./src/components/main/chats/PeopleListItem.jsx\");\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/List */ \"./node_modules/@mui/material/esm/List/List.js\");\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Divider */ \"./node_modules/@mui/material/esm/Divider/Divider.js\");\n\n\n\n\n\n\n\nfunction PeopleList({\n  list\n}) {\n  console.log(list);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_2__.default, {\n    sx: {\n      width: '100%',\n      maxWidth: 360\n    }\n  }, list.map((roomInfo, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PeopleListItem__WEBPACK_IMPORTED_MODULE_1__.default, {\n    name: roomInfo.displayName,\n    previewMsg: roomInfo.firstMessage ? roomInfo.firstMessage.content : '',\n    itemIndex: i\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_3__.default, {\n    variant: \"fullWidth\",\n    component: \"li\"\n  }))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PeopleList);\n\n//# sourceURL=webpack://myreact/./src/components/main/chats/PeopleList.jsx?");

/***/ }),

/***/ "./src/components/main/chats/PeopleListItem.jsx":
/*!******************************************************!*\
  !*** ./src/components/main/chats/PeopleListItem.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/ListItemButton */ \"./node_modules/@mui/material/esm/ListItemButton/ListItemButton.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/ListItemText */ \"./node_modules/@mui/material/esm/ListItemText/ListItemText.js\");\n/* harmony import */ var _mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/ListItemAvatar */ \"./node_modules/@mui/material/esm/ListItemAvatar/ListItemAvatar.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Avatar */ \"./node_modules/@mui/material/esm/Avatar/Avatar.js\");\n/* harmony import */ var _redux_slices_chatSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../redux/slices/chatSlice */ \"./src/redux/slices/chatSlice.js\");\n\n\n\n\n\n\n\n\n\n\n\nfunction PeopleListItem({\n  itemIndex,\n  name,\n  previewMsg\n}) {\n  const selectedIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.chat.selectedPeopleIndex);\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n\n  const handleListItemClick = itemIndex => {\n    dispatch(_redux_slices_chatSlice__WEBPACK_IMPORTED_MODULE_2__.actions.selected(itemIndex));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_3__.default, {\n    alignItems: \"flex-start\",\n    selected: selectedIndex === itemIndex,\n    onClick: e => handleListItemClick(itemIndex)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_4__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5__.default, {\n    alt: name\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6__.default, {\n    primary: name,\n    secondary: previewMsg,\n    className: \"person-preview\"\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PeopleListItem);\n\n//# sourceURL=webpack://myreact/./src/components/main/chats/PeopleListItem.jsx?");

/***/ }),

/***/ "./src/main/App.js":
/*!*************************!*\
  !*** ./src/main/App.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _components_main_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/main/Navbar */ \"./src/components/main/Navbar.jsx\");\n/* harmony import */ var _mui_material_styles_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/styles/ThemeProvider */ \"./node_modules/@mui/material/styles/ThemeProvider.js\");\n/* harmony import */ var _themes_mainTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../themes/mainTheme */ \"./src/themes/mainTheme.js\");\n/* harmony import */ var _css_shared_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/shared.css */ \"./src/css/shared.css\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _components_main_chats_Chats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/main/chats/Chats */ \"./src/components/main/chats/Chats.jsx\");\n/* harmony import */ var _axiosClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./axiosClient */ \"./src/main/axiosClient.js\");\n\n\n\n\n\n\n\n\n\nfunction App() {\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    _axiosClient__WEBPACK_IMPORTED_MODULE_5__.default.get('/user/initial').then(res => {\n      window.localStorage.setItem('userInfo', JSON.stringify(res.data));\n    });\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_styles_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__.default, {\n    theme: _themes_mainTheme__WEBPACK_IMPORTED_MODULE_2__.default\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"app-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_main_Navbar__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {\n    exact: true,\n    path: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Redirect, {\n    to: \"/home\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {\n    path: \"/home\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"home siuuuuuuuu\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {\n    path: \"/chats\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_main_chats_Chats__WEBPACK_IMPORTED_MODULE_4__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {\n    path: \"/myprofile\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"myprofile siuuuuuuuu\")))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://myreact/./src/main/App.js?");

/***/ }),

/***/ "./src/main/axiosClient.js":
/*!*********************************!*\
  !*** ./src/main/axiosClient.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nconst instance = axios__WEBPACK_IMPORTED_MODULE_0__.default.create({\n  baseURL: 'https://localhost:3000'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);\n\n//# sourceURL=webpack://myreact/./src/main/axiosClient.js?");

/***/ }),

/***/ "./src/main/index.js":
/*!***************************!*\
  !*** ./src/main/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/configureStore */ \"./src/redux/configureStore.js\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ \"./src/main/App.js\");\n\n\n\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n  store: _redux_configureStore__WEBPACK_IMPORTED_MODULE_3__.default\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_5__.default, null)))), document.getElementById('root'));\n\n//# sourceURL=webpack://myreact/./src/main/index.js?");

/***/ }),

/***/ "./src/redux/configureStore.js":
/*!*************************************!*\
  !*** ./src/redux/configureStore.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _slices_chatSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slices/chatSlice */ \"./src/redux/slices/chatSlice.js\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.configureStore)({\n  reducer: {\n    chat: _slices_chatSlice__WEBPACK_IMPORTED_MODULE_0__.default\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n\n//# sourceURL=webpack://myreact/./src/redux/configureStore.js?");

/***/ }),

/***/ "./src/redux/slices/chatSlice.js":
/*!***************************************!*\
  !*** ./src/redux/slices/chatSlice.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"actions\": () => (/* binding */ actions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst initialState = {\n  selectedPeopleIndex: false,\n  messages: {}\n};\nconst chatSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: 'chat',\n  initialState: initialState,\n  reducers: {\n    selected: (state, action) => {\n      console.log('das ist dispatch');\n      state.selectedPeopleIndex = action.payload;\n    }\n  }\n});\nconst actions = chatSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chatSlice.reducer);\n\n//# sourceURL=webpack://myreact/./src/redux/slices/chatSlice.js?");

/***/ }),

/***/ "./src/themes/mainTheme.js":
/*!*********************************!*\
  !*** ./src/themes/mainTheme.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles_createTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles/createTheme */ \"./node_modules/@mui/material/styles/createTheme.js\");\n\nconst theme = (0,_mui_material_styles_createTheme__WEBPACK_IMPORTED_MODULE_0__.default)({\n  palette: {\n    primary: {\n      main: '#355C7D'\n    },\n    text: {\n      primary: '#355C7D'\n    }\n  },\n  typography: {\n    fontFamily: ['Oswald', 'sans-serif'].join(',')\n  },\n  paper: {\n    fontFamily: ['Oswald', 'sans-serif'].join(',')\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n\n//# sourceURL=webpack://myreact/./src/themes/mainTheme.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/chats.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/chats.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".chat-screen {\\r\\n  background-color: #f5f7f8;\\r\\n  height: 100%;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.chats-container {\\r\\n  height: calc(100% - 80px);\\r\\n}\\r\\n\\r\\n.chat-screen-main-container {\\r\\n  height: 100%;\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.chat-screen-bar-container {\\r\\n  position: absolute;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.chat-screen-type-bar-container {\\r\\n  position: absolute;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.daily-messages-container {\\r\\n  flex: 1;\\r\\n  padding-top: 72px;\\r\\n  padding-bottom: 64px;\\r\\n  display: flex;\\r\\n  flex-direction: column-reverse;\\r\\n}\\r\\n\\r\\n.daily-messages-content {\\r\\n  flex: 1 1 auto;\\r\\n  overflow-y: auto;\\r\\n  height: 0px;\\r\\n}\\r\\n\\r\\n.message {\\r\\n  width: fit-content;\\r\\n  padding-left: 10px;\\r\\n  padding-right: 20px;\\r\\n  padding-top: 5px;\\r\\n  padding-bottom: 5px;\\r\\n  max-width: 530px;\\r\\n  overflow-wrap: break-word;\\r\\n}\\r\\n\\r\\n.messages-date {\\r\\n  margin-bottom: 12px !important;\\r\\n\\r\\n}\\r\\n.all-messages{\\r\\n  margin-bottom: 12px !important;\\r\\n}\\r\\n\\r\\n.message-me {\\r\\n  background-color: #355C7D !important;\\r\\n  color: white !important;\\r\\n}\\r\\n\\r\\n.message-margin-anchor{\\r\\n  margin-bottom: 2px;\\r\\n}\\r\\n\\r\\n.person-preview p.MuiTypography-body2{\\r\\n  overflow:hidden;\\r\\n  text-overflow: ellipsis;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://myreact/./src/css/chats.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#root,.app-container{\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://myreact/./src/css/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/navbar.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/navbar.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".navbar-container{\\r\\n  border-bottom: 1px solid rgba(53,92,125,0.2);\\r\\n  /* margin-left: 8px !important; */\\r\\n  padding-right: 20px !important;\\r\\n  padding-left: 20px !important;\\r\\n}\\r\\n\\r\\n.navbar-logo{\\r\\n  height: 60px;\\r\\n}\\r\\n\\r\\n.routes-container{\\r\\n  cursor: pointer;\\r\\n  height: 65px;\\r\\n}\\r\\n\\r\\n/* .search-container{\\r\\n  width: 25ch;\\r\\n} */\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://myreact/./src/css/navbar.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/shared.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/shared.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Oswald&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\r\\n    height: 100%;\\r\\n    \\r\\n  }\\r\\n\\r\\n  body {\\r\\n    height: 100%;\\r\\n    margin: 0;\\r\\n  }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://myreact/./src/css/shared.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/css/chats.css":
/*!***************************!*\
  !*** ./src/css/chats.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_chats_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./chats.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/chats.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_chats_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_chats_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://myreact/./src/css/chats.css?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/index.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://myreact/./src/css/index.css?");

/***/ }),

/***/ "./src/css/navbar.css":
/*!****************************!*\
  !*** ./src/css/navbar.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./navbar.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/navbar.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://myreact/./src/css/navbar.css?");

/***/ }),

/***/ "./src/css/shared.css":
/*!****************************!*\
  !*** ./src/css/shared.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_shared_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./shared.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/shared.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_shared_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_shared_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://myreact/./src/css/shared.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(key => def[key] = () => value[key]);
/******/ 			}
/******/ 			def['default'] = () => value;
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/main/index.js","vendors"]
/******/ 		];
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
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmyreact"] = self["webpackChunkmyreact"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	__webpack_require__.x();
/******/ })()
;