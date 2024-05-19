import {
  require_index_browser,
  require_node
} from "/build/_shared/chunk-QJLB2GND.js";
import {
  Form,
  useActionData
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

// app/routes/add/index.jsx
var import_node = __toESM(require_node(), 1);
var import_client = __toESM(require_index_browser(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/add/index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/add/index.jsx"
  );
  import.meta.hot.lastModified = "1715961128547.611";
}
var prisma = new import_client.PrismaClient();
function AddClient() {
  _s();
  const actionData = useActionData();
  const errors = actionData?.errors || {};
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-green-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "p-8 bg-white rounded-lg shadow-md w-full max-w-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-semibold mb-4", children: "Add New Client" }, void 0, false, {
      fileName: "app/routes/add/index.jsx",
      lineNumber: 94,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "name", className: "block text-gray-700 font-bold mb-2", children: "Name:" }, void 0, false, {
        fileName: "app/routes/add/index.jsx",
        lineNumber: 96,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "name", name: "name", className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", required: true }, void 0, false, {
        fileName: "app/routes/add/index.jsx",
        lineNumber: 97,
        columnNumber: 11
      }, this),
      errors.name && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-xs italic", children: errors.name }, void 0, false, {
        fileName: "app/routes/add/index.jsx",
        lineNumber: 98,
        columnNumber: 27
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/add/index.jsx",
      lineNumber: 95,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-gray-700 font-bold mb-2", children: "Email:" }, void 0, false, {
        fileName: "app/routes/add/index.jsx",
        lineNumber: 101,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", id: "email", name: "email", className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", required: true }, void 0, false, {
        fileName: "app/routes/add/index.jsx",
        lineNumber: 102,
        columnNumber: 11
      }, this),
      errors.email && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-xs italic", children: errors.email }, void 0, false, {
        fileName: "app/routes/add/index.jsx",
        lineNumber: 103,
        columnNumber: 28
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/add/index.jsx",
      lineNumber: 100,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "phone", className: "block text-gray-700 font-bold mb-2", children: "Phone:" }, void 0, false, {
        fileName: "app/routes/add/index.jsx",
        lineNumber: 106,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "phone", name: "phone", className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", required: true }, void 0, false, {
        fileName: "app/routes/add/index.jsx",
        lineNumber: 107,
        columnNumber: 11
      }, this),
      errors.phone && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-xs italic", children: errors.phone }, void 0, false, {
        fileName: "app/routes/add/index.jsx",
        lineNumber: 108,
        columnNumber: 28
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/add/index.jsx",
      lineNumber: 105,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "pets", className: "block text-gray-700 font-bold mb-2", children: "Pets (comma-separated):" }, void 0, false, {
        fileName: "app/routes/add/index.jsx",
        lineNumber: 111,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "pets", name: "pets", className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", required: true }, void 0, false, {
        fileName: "app/routes/add/index.jsx",
        lineNumber: 112,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/add/index.jsx",
      lineNumber: 110,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline", type: "submit", children: "Add Client" }, void 0, false, {
      fileName: "app/routes/add/index.jsx",
      lineNumber: 115,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/add/index.jsx",
      lineNumber: 114,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/add/index.jsx",
    lineNumber: 93,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/add/index.jsx",
    lineNumber: 92,
    columnNumber: 10
  }, this);
}
_s(AddClient, "fHVw5pq0Zwd2gXh2gyrnVdHnLCc=", false, function() {
  return [useActionData];
});
_c = AddClient;
var _c;
$RefreshReg$(_c, "AddClient");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AddClient as default
};
//# sourceMappingURL=/build/routes/add-BKOGQK7Q.js.map
