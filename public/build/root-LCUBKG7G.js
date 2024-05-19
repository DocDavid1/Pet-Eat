import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
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

// app/components/NavBar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/NavBar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/NavBar.tsx"
  );
  import.meta.hot.lastModified = "1716035389986.2312";
}
function Navbar() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "bg-blue-600 p-4 shadow-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto flex justify-between items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "text-white text-2xl font-bold", children: "Pet Clinic" }, void 0, false, {
      fileName: "app/components/NavBar.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "text-white hover:bg-blue-700 px-3 py-2 rounded-md transition duration-300", children: "Home" }, void 0, false, {
        fileName: "app/components/NavBar.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/about", className: "text-white hover:bg-blue-700 px-3 py-2 rounded-md transition duration-300", children: "About Us" }, void 0, false, {
        fileName: "app/components/NavBar.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/display", className: "text-white hover:bg-blue-700 px-3 py-2 rounded-md transition duration-300", children: "Display Clients" }, void 0, false, {
        fileName: "app/components/NavBar.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/add", className: "text-white hover:bg-blue-700 px-3 py-2 rounded-md transition duration-300", children: "Add Client" }, void 0, false, {
        fileName: "app/components/NavBar.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/delete", className: "text-white hover:bg-blue-700 px-3 py-2 rounded-md transition duration-300", children: "Delete Clients" }, void 0, false, {
        fileName: "app/components/NavBar.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/NavBar.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/NavBar.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/NavBar.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = Navbar;
var _c;
$RefreshReg$(_c, "Navbar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-TWIWUWTT.css";

// app/root.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: tailwind_default
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Navbar, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c2 = Layout;
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
}
_c22 = App;
var _c2;
var _c22;
$RefreshReg$(_c2, "Layout");
$RefreshReg$(_c22, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Layout,
  App as default,
  links
};
//# sourceMappingURL=/build/root-LCUBKG7G.js.map
