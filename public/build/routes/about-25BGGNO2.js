import {
  Link
} from "/build/_shared/chunk-ENLJKBPJ.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  createHotContext
} from "/build/_shared/chunk-AZKA5MMU.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/about.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/about.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/about.tsx"
  );
  import.meta.hot.lastModified = "1716035275188.187";
}
var meta = () => {
  return [{
    title: "About Us - Pet Clinic"
  }, {
    name: "description",
    content: "Learn more about our Pet Clinic and our team."
  }];
};
function About() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-yellow-100 to-green-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold text-center mb-8 text-gray-800", children: "About Our Pet Clinic" }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-3xl bg-white rounded-lg shadow-lg p-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-gray-700 mb-4", children: "Welcome to our Pet Clinic! We are dedicated to providing the best care for your beloved pets." }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-gray-700 mb-4", children: "Our team of experienced veterinarians and staff are here to ensure that your pet receives the highest quality of care in a friendly and compassionate environment." }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-gray-700 mb-4", children: "Whether it's a routine check-up or a specialized treatment, we are equipped with the latest technology and knowledge to help your pet live a healthy and happy life." }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-gray-700 mb-4", children: "Thank you for trusting us with your pet's health. We look forward to serving you and your furry friends!" }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "inline-block mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300", children: "Back to Home" }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/about.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c = About;
var _c;
$RefreshReg$(_c, "About");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  About as default,
  meta
};
//# sourceMappingURL=/build/routes/about-25BGGNO2.js.map
