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
/* harmony import */ var _components_sidemenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sidemenu */ "./components/sidemenu.js");
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/carousel */ "./components/carousel.js");
/* harmony import */ var _components_movielist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/movielist */ "./components/movielist.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_moviedb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/moviedb */ "./components/moviedb.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);

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
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_components_moviedb__WEBPACK_IMPORTED_MODULE_7__["getMovies"])());

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
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2559457967" + " " + "home-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2559457967" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2559457967" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2559457967" + " " + "col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_components_sidemenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2559457967" + " " + "col-lg-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_components_carousel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2559457967" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_components_movielist__WEBPACK_IMPORTED_MODULE_5__["default"], {
    movies: movies,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })))))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2559457967",
    __self: this
  }, ".home-page.jsx-2559457967{padding-top:60px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxNb3ZpZS1BZGRlclxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEZ0IsQUFHMEIsaUJBQ25CIiwiZmlsZSI6IkU6XFxNb3ZpZS1BZGRlclxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBTaWRlbWVudSBmcm9tICcuLi9jb21wb25lbnRzL3NpZGVtZW51J1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJvdXNlbCdcclxuaW1wb3J0IE1vdmllTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL21vdmllbGlzdCdcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcclxuaW1wb3J0IHtnZXRNb3ZpZXN9IGZyb20gJy4uL2NvbXBvbmVudHMvbW92aWVkYidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuLyogXHJcbklzc3VlcyAtPiBcclxuICAxLiBJIGFtIG5vdCBhYmxlIHRvIGRvIGFzeW5jIGZvciBob21lIGZ1bmN0aW9uLCBpLmUgdG8gcHJvdmlkZSBpbnRpYWwgcHJvcHMgdG8gdGhlIGZ1bmN0aW9uXHJcbiovXHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIC8vIGNvbnN0IHttb3ZpZXN9ID0gcHJvcHNcclxuICBjb25zdCBbbW92aWVzLCBzZXRtb3ZpZXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7ICBcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzTW92aWVzID0gYXdhaXQgZ2V0TW92aWVzKCk7XHJcbiAgICAgIHNldG1vdmllcyhyZXNNb3ZpZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gICAgLy8gZ2V0TW92aWVzKCkudGhlbigobW92aWVzKSA9PiB7XHJcbiAgICAvLyAgIHNldG1vdmllcyhtb3ZpZXMpXHJcbiAgICAvLyB9KVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiaG9tZS1wYWdlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICA8U2lkZW1lbnUgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOVwiPiAgXHJcbiAgICAgICAgICAgICAgPENhcm91c2VsIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxNb3ZpZUxpc3QgbW92aWVzID0ge21vdmllc30vPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDxGb290ZXIgLz5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmhvbWUtcGFnZSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgICAgIH1cclxuICAgIGB9XHJcblxyXG4gICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIEhvbWUuZ2V0SW50aWFsUHJvcHMgPSBhc3luYygpID0+IHtcclxuLy8gICBjb25zdCBtb3ZpZXMgPSBnZXRNb3ZpZXMoKVxyXG5cclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgbW92aWVzOiBtb3ZpZXNcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG4vLyAgIHN0YXRpYyBhc3luYyBnZXRJbnRpYWxQcm9wcygpe1xyXG4vLyAgICAgY29uc3QgbW92aWVzID0gYXdhaXQgZ2V0TW92aWVzKClcclxuXHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICBtb3ZpZXM6IG1vdmllc1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuXHJcbiAgLy8gY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAvLyAgIHN1cGVyKHByb3BzKTtcclxuICAvLyAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgLy8gICAgIG1vdmllczogW11cclxuICAvLyAgIH1cclxuICAvLyB9XHJcbiAgLy8gc3RhdGUgPSB7XHJcbiAgLy8gICBtb3ZpZXM6IFtdXHJcbiAgLy8gfVxyXG5cclxuICAvLyBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAvLyAgIGNvbnN0IG1vdmllcyA9IGF3YWl0IGdldE1vdmllcygpO1xyXG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7bW92aWVzfSlcclxuICAvLyB9XHJcbiAgLy8gY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgLy8gICBnZXRNb3ZpZXMoKS50aGVuKChtb3ZpZXMpID0+IHtcclxuICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7bW92aWVzfSlcclxuICAvLyAgIH0pXHJcbiAgLy8gICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgLy8gICAgIGFsZXJ0KGVycm9yKVxyXG4gIC8vICAgfSlcclxuICAvLyB9XHJcblxyXG4gIC8vIHJlbmRlcigpIHtcclxuICAvLyAgIGNvbnN0IHttb3ZpZXN9ID0gdGhpcy5wcm9wc1xyXG4gIC8vICAgcmV0dXJuIChcclxuICAvLyAgICAgPGRpdj5cclxuICAvLyAgICAgICA8SGVhZD5cclxuICAvLyAgICAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cclxuICAvLyAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LWdnT3lSMGlYQ2JNUXYzWGlwbWEzNE1EK2RILzFmUTc4NC9qNmNZL2lKVFFVT2hjV3I3eDlKdm9SeFQyTVp3MVRcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiIC8+XHJcbiAgLy8gICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0zLjMuMS5zbGltLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1xOGkvWCs5NjVEek8wclQ3YWJLNDFKU3RRSUFxVmdSVnpwYnpvNXNtWEtwNFlmUnZIKzhhYnRURTFQaTZqaXpvXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cclxuICAvLyAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcG9wcGVyLmpzLzEuMTQuNy91bWQvcG9wcGVyLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1VTzJlVDBDcEhxZFNKUTZoSnR5NUtWcGh0UGh6V2o5V08xY2xIVE1HYTNKRFp3cm5RcTRzRjg2ZElITkR6MFcxXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cclxuICAvLyAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvanMvYm9vdHN0cmFwLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1KalNtVmd5ZDBwM3BYQjFyUmliWlVBWW9JSXk2T3JRNlZyaklFYUZmL25KR3pJeEZEc2Y0eDB4SU0rQjA3alJNXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cclxuICAvLyAgICAgICA8L0hlYWQ+XHJcbiAgXHJcbiAgLy8gICAgICAgPE5hdmJhciAvPlxyXG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJob21lLXBhZ2VcIj5cclxuICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctM1wiPlxyXG4gIC8vICAgICAgICAgICAgICAgPFNpZGVtZW51IC8+XHJcbiAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTlcIj4gIFxyXG4gIC8vICAgICAgICAgICAgICAgPENhcm91c2VsIC8+XHJcbiAgLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gIC8vICAgICAgICAgICAgICAgICA8TW92aWVMaXN0IE1vdmllZGF0YSA9IHttb3ZpZXN9Lz5cclxuICAvLyAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgIDxGb290ZXIgLz5cclxuICAvLyAgICAgICA8c3R5bGUganN4PntgXHJcbiAgLy8gICAgICAgICAuaG9tZS1wYWdlIHtcclxuICAvLyAgICAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICAgICAgYH1cclxuICAgIFxyXG4gIC8vICAgICAgIDwvc3R5bGU+XHJcbiAgLy8gICAgIDwvZGl2PlxyXG4gIC8vICAgKTtcclxuICAvLyB9XHJcbiAgXHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiXX0= */\n/*@ sourceURL=E:\\\\Movie-Adder\\\\pages\\\\index.js */"));
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
//# sourceMappingURL=index.js.b27f09e47ee9d10fa731.hot-update.js.map