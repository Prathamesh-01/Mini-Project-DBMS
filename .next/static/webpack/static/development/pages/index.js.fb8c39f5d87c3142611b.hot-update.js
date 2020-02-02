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
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2559457967" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2559457967" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2559457967" + " " + "col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_components_sidemenu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2559457967" + " " + "col-lg-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_components_carousel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2559457967" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_components_movielist__WEBPACK_IMPORTED_MODULE_7__["default"], {
    movies: movies,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })))))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2559457967",
    __self: this
  }, ".home-page.jsx-2559457967{padding-top:60px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxNb3ZpZS1BZGRlclxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEZ0IsQUFHMEIsaUJBQ25CIiwiZmlsZSI6IkU6XFxNb3ZpZS1BZGRlclxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xyXG5pbXBvcnQgU2lkZW1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9zaWRlbWVudSdcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJy4uL2NvbXBvbmVudHMvY2Fyb3VzZWwnXHJcbmltcG9ydCBNb3ZpZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9tb3ZpZWxpc3QnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXHJcbmltcG9ydCB7Z2V0TW92aWVzfSBmcm9tICcuLi9jb21wb25lbnRzL21vdmllZGInXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbi8qIFxyXG5Jc3N1ZXMgLT4gXHJcbiAgMS4gSSBhbSBub3QgYWJsZSB0byBkbyBhc3luYyBmb3IgaG9tZSBmdW5jdGlvbiwgaS5lIHRvIHByb3ZpZGUgaW50aWFsIHByb3BzIHRvIHRoZSBmdW5jdGlvblxyXG4qL1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICAvLyBjb25zdCB7bW92aWVzfSA9IHByb3BzXHJcbiAgY29uc3QgW21vdmllcywgc2V0bW92aWVzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4geyAgXHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc01vdmllcyA9IGF3YWl0IGdldE1vdmllcygpO1xyXG4gICAgICBzZXRtb3ZpZXMocmVzTW92aWVzKTtcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaERhdGEoKTtcclxuICAgIC8vIGdldE1vdmllcygpLnRoZW4oKG1vdmllcykgPT4ge1xyXG4gICAgLy8gICBzZXRtb3ZpZXMobW92aWVzKVxyXG4gICAgLy8gfSlcclxuICB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImhvbWUtcGFnZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgPFNpZGVtZW51IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTlcIj4gIFxyXG4gICAgICAgICAgICAgIDxDYXJvdXNlbCAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8TW92aWVMaXN0IG1vdmllcyA9IHttb3ZpZXN9Lz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Rm9vdGVyIC8+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5ob21lLXBhZ2Uge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgICB9XHJcbiAgICBgfVxyXG5cclxuICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG4vLyBIb21lLmdldEludGlhbFByb3BzID0gYXN5bmMoKSA9PiB7XHJcbi8vICAgY29uc3QgbW92aWVzID0gZ2V0TW92aWVzKClcclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIG1vdmllczogbW92aWVzXHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuLy8gICBzdGF0aWMgYXN5bmMgZ2V0SW50aWFsUHJvcHMoKXtcclxuLy8gICAgIGNvbnN0IG1vdmllcyA9IGF3YWl0IGdldE1vdmllcygpXHJcblxyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgbW92aWVzOiBtb3ZpZXNcclxuLy8gICAgIH1cclxuLy8gICB9XHJcblxyXG4gIC8vIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgLy8gICBzdXBlcihwcm9wcyk7XHJcbiAgLy8gICB0aGlzLnN0YXRlID0ge1xyXG4gIC8vICAgICBtb3ZpZXM6IFtdXHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG4gIC8vIHN0YXRlID0ge1xyXG4gIC8vICAgbW92aWVzOiBbXVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgLy8gICBjb25zdCBtb3ZpZXMgPSBhd2FpdCBnZXRNb3ZpZXMoKTtcclxuICAvLyAgIHRoaXMuc2V0U3RhdGUoe21vdmllc30pXHJcbiAgLy8gfVxyXG4gIC8vIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gIC8vICAgZ2V0TW92aWVzKCkudGhlbigobW92aWVzKSA9PiB7XHJcbiAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe21vdmllc30pXHJcbiAgLy8gICB9KVxyXG4gIC8vICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gIC8vICAgICBhbGVydChlcnJvcilcclxuICAvLyAgIH0pXHJcbiAgLy8gfVxyXG5cclxuICAvLyByZW5kZXIoKSB7XHJcbiAgLy8gICBjb25zdCB7bW92aWVzfSA9IHRoaXMucHJvcHNcclxuICAvLyAgIHJldHVybiAoXHJcbiAgLy8gICAgIDxkaXY+XHJcbiAgLy8gICAgICAgPEhlYWQ+XHJcbiAgLy8gICAgICAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XHJcbiAgLy8gICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC1nZ095UjBpWENiTVF2M1hpcG1hMzRNRCtkSC8xZlE3ODQvajZjWS9pSlRRVU9oY1dyN3g5SnZvUnhUMk1adzFUXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxyXG4gIC8vICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy4zLjEuc2xpbS5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtcThpL1grOTY1RHpPMHJUN2FiSzQxSlN0UUlBcVZnUlZ6cGJ6bzVzbVhLcDRZZlJ2SCs4YWJ0VEUxUGk2aml6b1wiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XHJcbiAgLy8gICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3BvcHBlci5qcy8xLjE0LjcvdW1kL3BvcHBlci5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtVU8yZVQwQ3BIcWRTSlE2aEp0eTVLVnBodFBoeldqOVdPMWNsSFRNR2EzSkRad3JuUXE0c0Y4NmRJSE5EejBXMVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XHJcbiAgLy8gICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2pzL2Jvb3RzdHJhcC5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtSmpTbVZneWQwcDNwWEIxclJpYlpVQVlvSUl5Nk9yUTZWcmpJRWFGZi9uSkd6SXhGRHNmNHgweElNK0IwN2pSTVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XHJcbiAgLy8gICAgICAgPC9IZWFkPlxyXG4gIFxyXG4gIC8vICAgICAgIDxOYXZiYXIgLz5cclxuICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiaG9tZS1wYWdlXCI+XHJcbiAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTNcIj5cclxuICAvLyAgICAgICAgICAgICAgIDxTaWRlbWVudSAvPlxyXG4gIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy05XCI+ICBcclxuICAvLyAgICAgICAgICAgICAgIDxDYXJvdXNlbCAvPlxyXG4gIC8vICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAvLyAgICAgICAgICAgICAgICAgPE1vdmllTGlzdCBNb3ZpZWRhdGEgPSB7bW92aWVzfS8+XHJcbiAgLy8gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgICAgPC9kaXY+XHJcbiAgLy8gICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICA8Rm9vdGVyIC8+XHJcbiAgLy8gICAgICAgPHN0eWxlIGpzeD57YFxyXG4gIC8vICAgICAgICAgLmhvbWUtcGFnZSB7XHJcbiAgLy8gICAgICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gIC8vICAgICAgICAgfVxyXG4gIC8vICAgICAgIGB9XHJcbiAgICBcclxuICAvLyAgICAgICA8L3N0eWxlPlxyXG4gIC8vICAgICA8L2Rpdj5cclxuICAvLyAgICk7XHJcbiAgLy8gfVxyXG4gIFxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lIl19 */\n/*@ sourceURL=E:\\\\Movie-Adder\\\\pages\\\\index.js */"));
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
//# sourceMappingURL=index.js.fb8c39f5d87c3142611b.hot-update.js.map