import {
  require_index_browser,
  require_node
} from "/build/_shared/chunk-QJLB2GND.js";
import {
  Form,
  useLoaderData
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

// app/routes/display/index.jsx
var import_node = __toESM(require_node(), 1);
var import_client = __toESM(require_index_browser(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/display/index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/display/index.jsx"
  );
  import.meta.hot.lastModified = "1715962480313.705";
}
var prisma = new import_client.PrismaClient();
function Clients() {
  _s();
  const clients = useLoaderData();
  const handleEdit = (client) => {
    const name = prompt("\u05E9\u05DD:", client.name);
    const email = prompt("\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC:", client.email);
    const phone = prompt("\u05D8\u05DC\u05E4\u05D5\u05DF:", client.phone);
    const pets = prompt("\u05D7\u05D9\u05D5\u05EA \u05DE\u05D7\u05DE\u05D3 (\u05DE\u05D5\u05E4\u05E8\u05D3\u05D5\u05EA \u05D1\u05E4\u05E1\u05D9\u05E7\u05D9\u05DD):", client.pets.join(", "));
    if (name && email && phone && pets !== null) {
      const form = document.createElement("form");
      form.method = "post";
      form.appendChild(createHiddenInput("clientId", client.id));
      form.appendChild(createHiddenInput("actionType", "edit"));
      form.appendChild(createHiddenInput("name", name));
      form.appendChild(createHiddenInput("email", email));
      form.appendChild(createHiddenInput("phone", phone));
      form.appendChild(createHiddenInput("pets", pets));
      document.body.appendChild(form);
      form.submit();
    }
  };
  const createHiddenInput = (name, value) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    return input;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-green-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-8 bg-white rounded-lg shadow-md w-full max-w-4xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-semibold mb-4", children: "\u05E8\u05E9\u05D9\u05DE\u05EA \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA" }, void 0, false, {
      fileName: "app/routes/display/index.jsx",
      lineNumber: 94,
      columnNumber: 9
    }, this),
    clients.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700", children: "\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA." }, void 0, false, {
      fileName: "app/routes/display/index.jsx",
      lineNumber: 95,
      columnNumber: 33
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "min-w-full leading-normal", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider", children: "\u05E9\u05DD" }, void 0, false, {
          fileName: "app/routes/display/index.jsx",
          lineNumber: 98,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider", children: "\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC" }, void 0, false, {
          fileName: "app/routes/display/index.jsx",
          lineNumber: 101,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider", children: "\u05D8\u05DC\u05E4\u05D5\u05DF" }, void 0, false, {
          fileName: "app/routes/display/index.jsx",
          lineNumber: 104,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider", children: "\u05D7\u05D9\u05D5\u05EA \u05DE\u05D7\u05DE\u05D3" }, void 0, false, {
          fileName: "app/routes/display/index.jsx",
          lineNumber: 107,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider", children: "\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA" }, void 0, false, {
          fileName: "app/routes/display/index.jsx",
          lineNumber: 110,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/display/index.jsx",
        lineNumber: 97,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/display/index.jsx",
        lineNumber: 96,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: clients.map((client) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-5 py-5 border-b border-gray-200 bg-white text-sm", children: client.name }, void 0, false, {
          fileName: "app/routes/display/index.jsx",
          lineNumber: 117,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-5 py-5 border-b border-gray-200 bg-white text-sm", children: client.email }, void 0, false, {
          fileName: "app/routes/display/index.jsx",
          lineNumber: 120,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-5 py-5 border-b border-gray-200 bg-white text-sm", children: client.phone }, void 0, false, {
          fileName: "app/routes/display/index.jsx",
          lineNumber: 123,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-5 py-5 border-b border-gray-200 bg-white text-sm", children: client.pets.join(", ") }, void 0, false, {
          fileName: "app/routes/display/index.jsx",
          lineNumber: 126,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-5 py-5 border-b border-gray-200 bg-white text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "inline-block", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "clientId", value: client.id }, void 0, false, {
              fileName: "app/routes/display/index.jsx",
              lineNumber: 131,
              columnNumber: 23
            }, this),
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "actionType", value: "delete" }, void 0, false, {
              fileName: "app/routes/display/index.jsx",
              lineNumber: 132,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "text-red-600 hover:text-red-900", children: "\u05DE\u05D7\u05D9\u05E7\u05D4" }, void 0, false, {
              fileName: "app/routes/display/index.jsx",
              lineNumber: 133,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/display/index.jsx",
            lineNumber: 130,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "text-blue-600 hover:text-blue-900 ml-4", onClick: () => handleEdit(client), children: "\u05E2\u05E8\u05D9\u05DB\u05D4" }, void 0, false, {
            fileName: "app/routes/display/index.jsx",
            lineNumber: 137,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/display/index.jsx",
          lineNumber: 129,
          columnNumber: 19
        }, this)
      ] }, client.id, true, {
        fileName: "app/routes/display/index.jsx",
        lineNumber: 116,
        columnNumber: 38
      }, this)) }, void 0, false, {
        fileName: "app/routes/display/index.jsx",
        lineNumber: 115,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/display/index.jsx",
      lineNumber: 95,
      columnNumber: 85
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/display/index.jsx",
    lineNumber: 93,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/display/index.jsx",
    lineNumber: 92,
    columnNumber: 10
  }, this);
}
_s(Clients, "2kLGk52kIvWAhx8hm7FnvmTorKs=", false, function() {
  return [useLoaderData];
});
_c = Clients;
var _c;
$RefreshReg$(_c, "Clients");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Clients as default
};
//# sourceMappingURL=/build/routes/display-LM3A2XIG.js.map
