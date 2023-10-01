"use strict";
(() => {
var exports = {};
exports.id = 457;
exports.ids = [457];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 7160:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 2336:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url");

/***/ }),

/***/ 7887:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 120:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url");

/***/ }),

/***/ 8231:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 982:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href");

/***/ }),

/***/ 9618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 8423:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 1843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: [
        'testimonial',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 381)), "E:\\Ostad\\module-16\\Digital-agency\\digital-agency-app\\src\\app\\testimonial\\page.jsx"],
          
        }]
      },
        {
        
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 454)), "E:\\Ostad\\module-16\\Digital-agency\\digital-agency-app\\src\\app\\layout.jsx"],
'error': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6015)), "E:\\Ostad\\module-16\\Digital-agency\\digital-agency-app\\src\\app\\error.jsx"],
'loading': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3322)), "E:\\Ostad\\module-16\\Digital-agency\\digital-agency-app\\src\\app\\loading.jsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5493, 23)), "next/dist/client/components/not-found-error"],
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      }.children;
const pages = ["E:\\Ostad\\module-16\\Digital-agency\\digital-agency-app\\src\\app\\testimonial\\page.jsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/testimonial/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/testimonial/page",
        pathname: "/testimonial",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ page)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./src/components/Camp.jsx
var Camp = __webpack_require__(3431);
;// CONCATENATED MODULE: ./src/components/Testimonial.jsx

async function getData() {
    const res = await fetch("https://agency.teamrabbil.com/api/TestimonialList");
    if (!res.ok) {
        throw new Error("Testimonial List Calling Fail");
    }
    return res.json();
}
const Testimonial = async ()=>{
    const data = await getData();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "py-20 bg-gray-50 radius-for-skewed overflow-hidden",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "max-w-6xl mx-auto px-4 pb-6 lg:pb-16",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-wrap justify-center lg:justify-center items-center text-center lg:text-center",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-full lg:w-4/5 mb-4 lg:mb-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-green-600 font-bold",
                                        children: "Dolor sit amet consectutar"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "text-4xl lg:text-5xl font-bold font-heading",
                                        children: "Testimonials"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative flex",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-wrap max-w-6xl px-2 mx-auto",
                            children: data.map((item, i)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mb-4 w-full lg:w-1/3 px-3",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "p-8 bg-white rounded shadow text-center",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "bg-no-repeat bg-left-top",
                                            style: {
                                                backgroundImage: 'url("atis-assets/elements/quote-grey.svg")'
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "mb-8 text-gray-500 leading-loose",
                                                    children: item["msg"]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "mb-2 mx-auto w-12 h-12 rounded-full object-cover",
                                                    src: item["image"],
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "mb-1 text-2xl font-bold font-heading",
                                                    children: item["name"]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-gray-500",
                                                    children: item["designation"]
                                                })
                                            ]
                                        })
                                    })
                                }, i);
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_Testimonial = (Testimonial); // async function getData() {
 //   try {
 //     const response = await fetch("https://agency.teamrabbil.com/api/Testimonial");
 //     if (!response.ok) {
 //       throw new Error("All project calling failed");
 //     }
 //     const data = await response.json();
 //     return data;
 //   } catch (error) {
 //     console.error(error);
 //     return [];
 //   }
 // }
 // const Testimonial = async() => {
 //   const data = await getData();
 //   console.log(data);
 //   return (
 //     <>
 //       <section className="  pt-20 pb-12">
 //         <div className="container mx-auto">
 //           <div className="max-w-lg mx-auto mb-12 text-center">
 //             <h2 className="my-2 text-3xl md:text-4xl font-bold font-heading">
 //               Our Customers Very Happy With Our Services
 //             </h2>
 //             <p className="text-blueGray-400 leading-loose">
 //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
 //               luctus eget justo et iaculis.
 //             </p>
 //           </div>
 //           <div className="flex flex-wrap">
 //             {data.map((item, i) => (
 //             <div  className="w-full md:w-1/2 py-5 md:px-5">
 //               <div
 //                 className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
 //                 data-wow-delay=".1s"
 //               >
 //                 <div key={i} className="flex items-center mb-4">
 //                   <img
 //                     className="h-16 w-16 rounded-full object-cover"
 //                     src={item["image"]}
 //                     alt="Monst"
 //                   />
 //                   <div className="pl-4">
 //                     <strong className="mt-6 mb-2 text-md">
 //                       Geraldine Tusoy
 //                     </strong>
 //                     <p className="text-gray-500 text-xs mt-3">
 //                       CEO, Co Founders
 //                     </p>
 //                   </div>
 //                 </div>
 //                 <p className="leading-loose text-blueGray-400 mb-5">
 //                   Donec consequat tortor risus, at auctor felis consequat a.
 //                   Donec quis dolor sem. Sed sollicitudin magna in hendrerit
 //                   pulvinar. Vestibulum non quam velit.
 //                 </p>
 //               </div>
 //             </div>
 //             ))}
 //             <div className="w-full md:w-1/2 py-5 md:px-5">
 //               <div
 //                 className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
 //                 data-wow-delay=".1s"
 //               >
 //                 <div className="flex items-center mb-4">
 //                   <img
 //                     className="h-16 w-16 rounded-full object-cover"
 //                     src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=900&t=st=1695802380~exp=1695802980~hmac=49dde71bdda7824e822a381cc2d3de915548e6eefbb10203a557f8202a828fdf"
 //                     alt="Monst"
 //                   />
 //                   <div className="pl-4">
 //                     <strong className="mt-6 mb-2 text-md">
 //                       Geraldine Tusoy
 //                     </strong>
 //                     <p className="text-gray-500 text-xs mt-3">
 //                       CEO, Co Founders
 //                     </p>
 //                   </div>
 //                 </div>
 //                 <p className="leading-loose text-blueGray-400 mb-5">
 //                   Donec consequat tortor risus, at auctor felis consequat a.
 //                   Donec quis dolor sem. Sed sollicitudin magna in hendrerit
 //                   pulvinar. Vestibulum non quam velit.
 //                 </p>
 //               </div>
 //             </div>
 //             <div className="w-full md:w-1/2 py-5 md:px-5">
 //               <div
 //                 className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
 //                 data-wow-delay=".1s"
 //               >
 //                 <div className="flex items-center mb-4">
 //                   <img
 //                     className="h-16 w-16 rounded-full object-cover"
 //                     src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=900&t=st=1695802380~exp=1695802980~hmac=49dde71bdda7824e822a381cc2d3de915548e6eefbb10203a557f8202a828fdf"
 //                     alt="Monst"
 //                   />
 //                   <div className="pl-4">
 //                     <strong className="mt-6 mb-2 text-md">
 //                       Geraldine Tusoy
 //                     </strong>
 //                     <p className="text-gray-500 text-xs mt-3">
 //                       CEO, Co Founders
 //                     </p>
 //                   </div>
 //                 </div>
 //                 <p className="leading-loose text-blueGray-400 mb-5">
 //                   Donec consequat tortor risus, at auctor felis consequat a.
 //                   Donec quis dolor sem. Sed sollicitudin magna in hendrerit
 //                   pulvinar. Vestibulum non quam velit.
 //                 </p>
 //               </div>
 //             </div>
 //             <div className="w-full md:w-1/2 py-5 md:px-5">
 //               <div
 //                 className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
 //                 data-wow-delay=".1s"
 //               >
 //                 <div className="flex items-center mb-4">
 //                   <img
 //                     className="h-16 w-16 rounded-full object-cover"
 //                     src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=900&t=st=1695802380~exp=1695802980~hmac=49dde71bdda7824e822a381cc2d3de915548e6eefbb10203a557f8202a828fdf"
 //                     alt="Monst"
 //                   />
 //                   <div className="pl-4">
 //                     <strong className="mt-6 mb-2 text-md">
 //                       Geraldine Tusoy
 //                     </strong>
 //                     <p className="text-gray-500 text-xs mt-3">
 //                       CEO, Co Founders
 //                     </p>
 //                   </div>
 //                 </div>
 //                 <p className="leading-loose text-blueGray-400 mb-5">
 //                   Donec consequat tortor risus, at auctor felis consequat a.
 //                   Donec quis dolor sem. Sed sollicitudin magna in hendrerit
 //                   pulvinar. Vestibulum non quam velit.
 //                 </p>
 //               </div>
 //             </div>
 //             <div className="w-full md:w-1/2 py-5 md:px-5">
 //               <div
 //                 className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
 //                 data-wow-delay=".1s"
 //               >
 //                 <div className="flex items-center mb-4">
 //                   <img
 //                     className="h-16 w-16 rounded-full object-cover"
 //                     src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=900&t=st=1695802380~exp=1695802980~hmac=49dde71bdda7824e822a381cc2d3de915548e6eefbb10203a557f8202a828fdf"
 //                     alt="Monst"
 //                   />
 //                   <div className="pl-4">
 //                     <strong className="mt-6 mb-2 text-md">
 //                       Geraldine Tusoy
 //                     </strong>
 //                     <p className="text-gray-500 text-xs mt-3">
 //                       CEO, Co Founders
 //                     </p>
 //                   </div>
 //                 </div>
 //                 <p className="leading-loose text-blueGray-400 mb-5">
 //                   Donec consequat tortor risus, at auctor felis consequat a.
 //                   Donec quis dolor sem. Sed sollicitudin magna in hendrerit
 //                   pulvinar. Vestibulum non quam velit.
 //                 </p>
 //               </div>
 //             </div>
 //             <div className="w-full md:w-1/2 py-5 md:px-5">
 //               <div
 //                 className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
 //                 data-wow-delay=".1s"
 //               >
 //                 <div className="flex items-center mb-4">
 //                   <img
 //                     className="h-16 w-16 rounded-full object-cover"
 //                     src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=900&t=st=1695802380~exp=1695802980~hmac=49dde71bdda7824e822a381cc2d3de915548e6eefbb10203a557f8202a828fdf"
 //                     alt="Monst"
 //                   />
 //                   <div className="pl-4">
 //                     <strong className="mt-6 mb-2 text-md">
 //                       Geraldine Tusoy
 //                     </strong>
 //                     <p className="text-gray-500 text-xs mt-3">
 //                       CEO, Co Founders
 //                     </p>
 //                   </div>
 //                 </div>
 //                 <p className="leading-loose text-blueGray-400 mb-5">
 //                   Donec consequat tortor risus, at auctor felis consequat a.
 //                   Donec quis dolor sem. Sed sollicitudin magna in hendrerit
 //                   pulvinar. Vestibulum non quam velit.
 //                 </p>
 //               </div>
 //             </div>
 //             <div className="w-full md:w-1/2 py-5 md:px-5">
 //               <div
 //                 className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
 //                 data-wow-delay=".1s"
 //               >
 //                 <div className="flex items-center mb-4">
 //                   <img
 //                     className="h-16 w-16 rounded-full object-cover"
 //                     src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=900&t=st=1695802380~exp=1695802980~hmac=49dde71bdda7824e822a381cc2d3de915548e6eefbb10203a557f8202a828fdf"
 //                     alt="Monst"
 //                   />
 //                   <div className="pl-4">
 //                     <strong className="mt-6 mb-2 text-md">
 //                       Geraldine Tusoy
 //                     </strong>
 //                     <p className="text-gray-500 text-xs mt-3">
 //                       CEO, Co Founders
 //                     </p>
 //                   </div>
 //                 </div>
 //                 <p className="leading-loose text-blueGray-400 mb-5">
 //                   Donec consequat tortor risus, at auctor felis consequat a.
 //                   Donec quis dolor sem. Sed sollicitudin magna in hendrerit
 //                   pulvinar. Vestibulum non quam velit.
 //                 </p>
 //               </div>
 //             </div>
 //             <div className="w-full md:w-1/2 py-5 md:px-5">
 //               <div
 //                 className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
 //                 data-wow-delay=".1s"
 //               >
 //                 <div className="flex items-center mb-4">
 //                   <img
 //                     className="h-16 w-16 rounded-full object-cover"
 //                     src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=900&t=st=1695802380~exp=1695802980~hmac=49dde71bdda7824e822a381cc2d3de915548e6eefbb10203a557f8202a828fdf"
 //                     alt="Monst"
 //                   />
 //                   <div className="pl-4">
 //                     <strong className="mt-6 mb-2 text-md">
 //                       Geraldine Tusoy
 //                     </strong>
 //                     <p className="text-gray-500 text-xs mt-3">
 //                       CEO, Co Founders
 //                     </p>
 //                   </div>
 //                 </div>
 //                 <p className="leading-loose text-blueGray-400 mb-5">
 //                   Donec consequat tortor risus, at auctor felis consequat a.
 //                   Donec quis dolor sem. Sed sollicitudin magna in hendrerit
 //                   pulvinar. Vestibulum non quam velit.
 //                 </p>
 //               </div>
 //             </div>
 //           </div>
 //         </div>
 //       </section>
 //     </>
 //   );
 // };
 // export default Testimonial;

// EXTERNAL MODULE: ./src/components/Subscribe.jsx
var Subscribe = __webpack_require__(7595);
;// CONCATENATED MODULE: ./src/app/testimonial/page.jsx




const Page = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Camp/* Camp */.Y, {
                title: "Testimonial "
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Testimonial, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Subscribe/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const page = (Page);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,158,306,431], () => (__webpack_exec__(1843)));
module.exports = __webpack_exports__;

})();