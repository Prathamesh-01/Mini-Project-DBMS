webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_sidemenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/sidemenu */ "./components/sidemenu.js");
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/carousel */ "./components/carousel.js");
/* harmony import */ var _components_movielist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/movielist */ "./components/movielist.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_moviedb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/moviedb */ "./components/moviedb.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "E:\\Movie-Adder\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







/* 
Issues -> 
  1. I am not able to do async for home function, i.e to provide intial props to the function
*/

var Home = function Home() {
  // const {movies} = props
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      movies = _useState[0],
      setmovies = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var fetchData = function fetchData() {
      var resMovies;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_components_moviedb__WEBPACK_IMPORTED_MODULE_6__["getMovies"])());

            case 2:
              resMovies = _context.sent;
              setmovies(resMovies);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    };

    fetchData(); // getMovies().then((movies) => {
    //   setmovies(movies)
    // })
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "home-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_components_sidemenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), __jsx("div", {
    className: "col-lg-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_components_carousel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_components_movielist__WEBPACK_IMPORTED_MODULE_4__["default"], {
    movies: movies,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })))))));
}; // Home.getIntialProps = async() => {
//   const movies = getMovies()
//   return {
//     movies: movies
//   }
// }
// class Home extends React.Component{
//   static async getIntialProps(){
//     const movies = await getMovies()
//     return {
//       movies: movies
//     }
//   }
// constructor(props) {
//   super(props);
//   this.state = {
//     movies: []
//   }
// }
// state = {
//   movies: []
// }
// async componentDidMount() {
//   const movies = await getMovies();
//   this.setState({movies})
// }
// componentDidMount() {
//   getMovies().then((movies) => {
//     this.setState({movies})
//   })
//   .catch((error) => {
//     alert(error)
//   })
// }
// render() {
//   const {movies} = this.props
//   return (
//     <div>
//       <Head>
//         <title>Home</title>
//         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
//         <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
//         <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
//         <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
//       </Head>
//       <Navbar />
//       <div className = "home-page">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-3">
//               <Sidemenu />
//             </div>
//             <div className="col-lg-9">  
//               <Carousel />
//               <div className="row">
//                 <MovieList Moviedata = {movies}/>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//       <style jsx>{`
//         .home-page {
//           padding-top: 60px;
//         }
//       `}
//       </style>
//     </div>
//   );
// }
// }


/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.ae5c3d779a450613728b.hot-update.js.map