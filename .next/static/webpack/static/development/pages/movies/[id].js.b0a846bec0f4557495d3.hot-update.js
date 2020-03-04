webpackHotUpdate("static\\development\\pages\\movies\\[id].js",{

/***/ "./pages/movies/[id].js":
/*!******************************!*\
  !*** ./pages/movies/[id].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_moviedb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/moviedb */ "./actions/moviedb.js");
var _jsxFileName = "E:\\Movie-Adder\\pages\\movies\\[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Movie = function Movie(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var id = router.query.id;
  var movie = props.movie;
  return __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "jumbotron",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("h1", {
    className: "display-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, movie.name), __jsx("p", {
    className: "lead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."), __jsx("hr", {
    className: "my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "It uses utility classes for typography and spacing to space content out within the larger container."), __jsx("a", {
    className: "btn btn-primary btn-lg",
    href: "#",
    role: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Learn more")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Hey There how is it going!!!!"));
};

Movie.getIntialProps = function () {
  var movie = Object(_actions_moviedb__WEBPACK_IMPORTED_MODULE_2__["getMoviesbyId"])("2");
  return {
    movie: movie
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Movie);

/***/ })

})
//# sourceMappingURL=[id].js.b0a846bec0f4557495d3.hot-update.js.map