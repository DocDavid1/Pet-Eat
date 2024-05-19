import {
  Link,
  useFetcher
} from "/build/_shared/chunk-ENLJKBPJ.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  createHotContext
} from "/build/_shared/chunk-AZKA5MMU.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
var import_react2 = __toESM(require_react(), 1);

// app/images/pexels-photo-2306831.jpeg
var pexels_photo_2306831_default = "/build/_assets/pexels-photo-2306831-7NFIMWHL.jpeg";

// app/images/istockphoto-909106260-1024x1024.jpg
var istockphoto_909106260_1024x1024_default = "/build/_assets/istockphoto-909106260-1024x1024-TUNRRBEU.jpg";

// app/images/pexels-feyzayildirimphoto-12158229.jpg
var pexels_feyzayildirimphoto_12158229_default = "/build/_assets/pexels-feyzayildirimphoto-12158229-6W6VKDGG.jpg";

// app/images/pexels-pixabay-33287.jpg
var pexels_pixabay_33287_default = "/build/_assets/pexels-pixabay-33287-D4ZJPKRQ.jpg";

// app/images/pexels-osmanarabaciart-19640755.jpg
var pexels_osmanarabaciart_19640755_default = "/build/_assets/pexels-osmanarabaciart-19640755-CJOGXKSY.jpg";

// app/images/pexels-mindaugas-546542-1294062.jpg
var pexels_mindaugas_546542_1294062_default = "/build/_assets/pexels-mindaugas-546542-1294062-QDTIN3JF.jpg";

// app/images/pexels-feyzayildirimphoto-14492413.jpg
var pexels_feyzayildirimphoto_14492413_default = "/build/_assets/pexels-feyzayildirimphoto-14492413-VNNEI7MG.jpg";

// app/routes/_index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1716035160793.2017";
}
var petImages = [
  pexels_photo_2306831_default,
  istockphoto_909106260_1024x1024_default,
  pexels_feyzayildirimphoto_12158229_default,
  pexels_pixabay_33287_default,
  pexels_photo_2306831_default,
  pexels_osmanarabaciart_19640755_default,
  pexels_mindaugas_546542_1294062_default,
  pexels_feyzayildirimphoto_14492413_default,
  pexels_feyzayildirimphoto_12158229_default
  // Add more images here
];
var meta = () => {
  return [{
    title: "Pet Clinic"
  }, {
    name: "description",
    content: "Welcome to our friendly Pet Clinic!"
  }];
};
function Index() {
  _s();
  const [currentSlide, setCurrentSlide] = (0, import_react2.useState)(0);
  const fetcher = useFetcher();
  (0, import_react2.useEffect)(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % petImages.length);
    }, 1e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-200 to-green-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold text-center mb-8 text-gray-800", children: "Welcome to the Pet Clinic!" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full max-w-3xl overflow-hidden rounded-lg shadow-lg mb-8 h-96", children: petImages.map((image, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: image, alt: `Pet Slide ${index}`, className: "w-full h-full object-cover" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 64,
      columnNumber: 13
    }, this) }, index, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 63,
      columnNumber: 42
    }, this)) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 flex flex-col items-center space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/display", className: "bg-green-500 hover:bg-green-900 text-white font-bold py-4 px-8 rounded transition duration-300 text-lg", children: "Display Clients" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/add", className: "bg-blue-600 hover:bg-blue-900 text-white font-bold py-4 px-16 rounded transition duration-300 text-lg", children: "Add Client" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 72,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/about", className: "bg-red-600 hover:bg-red-900 text-white font-bold py-4 px-16 rounded transition duration-300 text-lg", children: "About" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 75,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold text-center mb-8 text-gray-600", children: "Dear employee : Thank you for your dedication!" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
}
_s(Index, "sMx/nlCunfW2DYXqzW4iBMUhllg=", false, function() {
  return [useFetcher];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-JYN5EI4A.js.map
