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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");
/* harmony import */ var _components_sidemenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/sidemenu */ "./components/sidemenu.js");
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/carousel */ "./components/carousel.js");
/* harmony import */ var _components_movielist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/movielist */ "./components/movielist.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_moviedb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/moviedb */ "./components/moviedb.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "E:\\Movie-Adder\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









/* 
Issues -> 
  1. I am not able to do async for home function, i.e to provide intial props to the function
*/

var Home = function Home() {
  // const {movies} = props
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      movies = _useState[0],
      setmovies = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var fetchData = function fetchData() {
      var resMovies;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_components_moviedb__WEBPACK_IMPORTED_MODULE_9__["getMovies"])());

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
    className: "jsx-2559457967",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2559457967" + " " + "home-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2559457967" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2559457967" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2559457967" + " " + "col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_components_sidemenu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2559457967" + " " + "col-lg-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_components_carousel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2559457967" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(_components_movielist__WEBPACK_IMPORTED_MODULE_7__["default"], {
    movies: movies,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })))))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2559457967",
    __self: this
  }, ".home-page.jsx-2559457967{padding-top:60px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxNb3ZpZS1BZGRlclxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1EZ0IsQUFHMEIsaUJBQ25CIiwiZmlsZSI6IkU6XFxNb3ZpZS1BZGRlclxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xyXG5pbXBvcnQgU2lkZW1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9zaWRlbWVudSdcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJy4uL2NvbXBvbmVudHMvY2Fyb3VzZWwnXHJcbmltcG9ydCBNb3ZpZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9tb3ZpZWxpc3QnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXHJcbmltcG9ydCB7Z2V0TW92aWVzfSBmcm9tICcuLi9jb21wb25lbnRzL21vdmllZGInXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbi8qIFxyXG5Jc3N1ZXMgLT4gXHJcbiAgMS4gSSBhbSBub3QgYWJsZSB0byBkbyBhc3luYyBmb3IgaG9tZSBmdW5jdGlvbiwgaS5lIHRvIHByb3ZpZGUgaW50aWFsIHByb3BzIHRvIHRoZSBmdW5jdGlvblxyXG4qL1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICAvLyBjb25zdCB7bW92aWVzfSA9IHByb3BzXHJcbiAgY29uc3QgW21vdmllcywgc2V0bW92aWVzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4geyAgXHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc01vdmllcyA9IGF3YWl0IGdldE1vdmllcygpO1xyXG4gICAgICBzZXRtb3ZpZXMocmVzTW92aWVzKTtcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaERhdGEoKTtcclxuICAgIC8vIGdldE1vdmllcygpLnRoZW4oKG1vdmllcykgPT4ge1xyXG4gICAgLy8gICBzZXRtb3ZpZXMobW92aWVzKVxyXG4gICAgLy8gfSlcclxuICB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJob21lLXBhZ2VcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgIDxTaWRlbWVudSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy05XCI+ICBcclxuICAgICAgICAgICAgICA8Q2Fyb3VzZWwgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPE1vdmllTGlzdCBtb3ZpZXMgPSB7bW92aWVzfS8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPEZvb3RlciAvPlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuaG9tZS1wYWdlIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgICAgfVxyXG4gICAgYH1cclxuXHJcbiAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gSG9tZS5nZXRJbnRpYWxQcm9wcyA9IGFzeW5jKCkgPT4ge1xyXG4vLyAgIGNvbnN0IG1vdmllcyA9IGdldE1vdmllcygpXHJcblxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBtb3ZpZXM6IG1vdmllc1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbi8vICAgc3RhdGljIGFzeW5jIGdldEludGlhbFByb3BzKCl7XHJcbi8vICAgICBjb25zdCBtb3ZpZXMgPSBhd2FpdCBnZXRNb3ZpZXMoKVxyXG5cclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgIG1vdmllczogbW92aWVzXHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG5cclxuICAvLyBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gIC8vICAgc3VwZXIocHJvcHMpO1xyXG4gIC8vICAgdGhpcy5zdGF0ZSA9IHtcclxuICAvLyAgICAgbW92aWVzOiBbXVxyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuICAvLyBzdGF0ZSA9IHtcclxuICAvLyAgIG1vdmllczogW11cclxuICAvLyB9XHJcblxyXG4gIC8vIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gIC8vICAgY29uc3QgbW92aWVzID0gYXdhaXQgZ2V0TW92aWVzKCk7XHJcbiAgLy8gICB0aGlzLnNldFN0YXRlKHttb3ZpZXN9KVxyXG4gIC8vIH1cclxuICAvLyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAvLyAgIGdldE1vdmllcygpLnRoZW4oKG1vdmllcykgPT4ge1xyXG4gIC8vICAgICB0aGlzLnNldFN0YXRlKHttb3ZpZXN9KVxyXG4gIC8vICAgfSlcclxuICAvLyAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAvLyAgICAgYWxlcnQoZXJyb3IpXHJcbiAgLy8gICB9KVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gcmVuZGVyKCkge1xyXG4gIC8vICAgY29uc3Qge21vdmllc30gPSB0aGlzLnByb3BzXHJcbiAgLy8gICByZXR1cm4gKFxyXG4gIC8vICAgICA8ZGl2PlxyXG4gIC8vICAgICAgIDxIZWFkPlxyXG4gIC8vICAgICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxyXG4gIC8vICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtZ2dPeVIwaVhDYk1RdjNYaXBtYTM0TUQrZEgvMWZRNzg0L2o2Y1kvaUpUUVVPaGNXcjd4OUp2b1J4VDJNWncxVFwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cclxuICAvLyAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuMy4xLnNsaW0ubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhMzg0LXE4aS9YKzk2NUR6TzByVDdhYks0MUpTdFFJQXFWZ1JWenBiem81c21YS3A0WWZSdkgrOGFidFRFMVBpNmppem9cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxyXG4gIC8vICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9wb3BwZXIuanMvMS4xNC43L3VtZC9wb3BwZXIubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhMzg0LVVPMmVUMENwSHFkU0pRNmhKdHk1S1ZwaHRQaHpXajlXTzFjbEhUTUdhM0pEWndyblFxNHNGODZkSUhORHowVzFcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxyXG4gIC8vICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9qcy9ib290c3RyYXAubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhMzg0LUpqU21WZ3lkMHAzcFhCMXJSaWJaVUFZb0lJeTZPclE2VnJqSUVhRmYvbkpHekl4RkRzZjR4MHhJTStCMDdqUk1cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxyXG4gIC8vICAgICAgIDwvSGVhZD5cclxuICBcclxuICAvLyAgICAgICA8TmF2YmFyIC8+XHJcbiAgLy8gICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImhvbWUtcGFnZVwiPlxyXG4gIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zXCI+XHJcbiAgLy8gICAgICAgICAgICAgICA8U2lkZW1lbnUgLz5cclxuICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOVwiPiAgXHJcbiAgLy8gICAgICAgICAgICAgICA8Q2Fyb3VzZWwgLz5cclxuICAvLyAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgLy8gICAgICAgICAgICAgICAgIDxNb3ZpZUxpc3QgTW92aWVkYXRhID0ge21vdmllc30vPlxyXG4gIC8vICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgPEZvb3RlciAvPlxyXG4gIC8vICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAvLyAgICAgICAgIC5ob21lLXBhZ2Uge1xyXG4gIC8vICAgICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgICBgfVxyXG4gICAgXHJcbiAgLy8gICAgICAgPC9zdHlsZT5cclxuICAvLyAgICAgPC9kaXY+XHJcbiAgLy8gICApO1xyXG4gIC8vIH1cclxuICBcclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdfQ== */\n/*@ sourceURL=E:\\\\Movie-Adder\\\\pages\\\\index.js */"));
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
//# sourceMappingURL=index.js.c1e2e858b5636e6536bf.hot-update.js.map