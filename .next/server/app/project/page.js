"use strict";
(() => {
var exports = {};
exports.id = 880;
exports.ids = [880];
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

/***/ 9269:
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
        'project',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7884)), "E:\\Ostad\\module-16\\Digital-agency\\digital-agency-app\\src\\app\\project\\page.jsx"],
          
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
const pages = ["E:\\Ostad\\module-16\\Digital-agency\\digital-agency-app\\src\\app\\project\\page.jsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/project/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/project/page",
        pathname: "/project",
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

/***/ 7884:
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
;// CONCATENATED MODULE: ./src/components/Project.jsx

async function getData() {
    const res = await fetch("https://agency.teamrabbil.com/api/AllProject");
    if (!res.ok) {
        throw new Error("AllProject Calling Fail");
    }
    return res.json();
}
const AllProject = async ()=>{
    const data = await getData();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "skew skew-top mr-for-radius",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    className: "h-8 md:h-12 lg:h-20 w-full text-gray-50",
                    viewBox: "0 0 10 10",
                    preserveAspectRatio: "none",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                        fill: "currentColor",
                        points: "0 0 10 10 0 10"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "skew skew-top ml-for-radius",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    className: "h-8 md:h-12 lg:h-20 w-full text-gray-50",
                    viewBox: "0 0 10 10",
                    preserveAspectRatio: "none",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                        fill: "currentColor",
                        points: "0 10 10 0 10 10"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "py-20 bg-gray-50 radius-for-skewed",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container px-4 mx-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mb-16 flex flex-wrap justify-center md:justify-center items-center",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "text-center lg:text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-green-600 font-bold",
                                        children: "Dolor sit amet consectutar"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "text-4xl lg:text-5xl font-bold font-heading",
                                        children: "Our Projects"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-wrap -mx-4 mb-4",
                            children: data.map((item, i)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full md:w-1/2 lg:w-1/3 mb-8 px-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        target: "_blank",
                                        href: item["live"],
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "h-80 w-full mx-auto object-cover rounded",
                                            src: item["image"],
                                            alt: ""
                                        })
                                    })
                                }, i);
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "skew skew-bottom mr-for-radius",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    className: "h-8 md:h-12 lg:h-20 w-full text-gray-50",
                    viewBox: "0 0 10 10",
                    preserveAspectRatio: "none",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                        fill: "currentColor",
                        points: "0 0 10 0 0 10"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "skew skew-bottom ml-for-radius",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    className: "h-8 md:h-12 lg:h-20 w-full text-gray-50",
                    viewBox: "0 0 10 10",
                    preserveAspectRatio: "none",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                        fill: "currentColor",
                        points: "0 0 10 0 10 10"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Project = (AllProject);

// EXTERNAL MODULE: ./src/components/Subscribe.jsx
var Subscribe = __webpack_require__(7595);
;// CONCATENATED MODULE: ./src/app/project/page.jsx




const Page = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Camp/* Camp */.Y, {
                title: "Project"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Project, {}),
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
var __webpack_exports__ = __webpack_require__.X(0, [587,158,306,431], () => (__webpack_exec__(9269)));
module.exports = __webpack_exports__;

})();