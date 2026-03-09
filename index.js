/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js"
/*!******************!*\
  !*** ./index.js ***!
  \******************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var scov_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scov-web */ \"../pkg/scov_web.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([scov_web__WEBPACK_IMPORTED_MODULE_0__]);\nvar __webpack_async_dependencies_result__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nscov_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_async_dependencies_result__[0];\n\r\n\r\nconst startScreen = document.querySelector(\"#start-screen\");\r\nconst startButton = document.querySelector(\"#start-button\");\r\nconst pickFolderButton = document.querySelector(\"#pick-folder\");\r\nconst loadDemoButton = document.querySelector(\"#load-demo\");\r\nconst startDemoButton = document.querySelector(\"#start-demo\");\r\nconst folderInput = document.querySelector(\"#folder-input\");\r\nconst folderPath = document.querySelector(\"#folder-path\");\r\nconst nodeLayer = document.querySelector(\"#node-layer\");\r\nconst linkLayer = document.querySelector(\"#link-layer\");\r\nconst stage = document.querySelector(\"#stage\");\r\nconst statusEl = document.querySelector(\"#status\");\r\nconst nodeCountEl = document.querySelector(\"#node-count\");\r\nconst linkCountEl = document.querySelector(\"#link-count\");\r\n\r\nconst DEMO_FOLDER = \"demo-scov\";\r\nconst DEMO_FILES = [\r\n  \"main.js\",\r\n  \"app.js\",\r\n  \"data/widgets.js\",\r\n  \"models/widget.js\",\r\n  \"ui/widgets.js\",\r\n  \"render/widgetCard.js\",\r\n  \"utils/format.js\",\r\n];\r\n\r\nlet linkEntries = [];\r\n\r\nconst updateLinks = () => {\r\n  const stageRect = stage.getBoundingClientRect();\r\n  linkEntries.forEach(({ line, fromEl, toEl }) => {\r\n    const fromRect = fromEl.getBoundingClientRect();\r\n    const toRect = toEl.getBoundingClientRect();\r\n    \r\n    const fromCenterX = fromRect.left - stageRect.left + fromRect.width / 2;\r\n    const fromCenterY = fromRect.top - stageRect.top + fromRect.height / 2;\r\n    const toCenterX = toRect.left - stageRect.left + toRect.width / 2;\r\n    const toCenterY = toRect.top - stageRect.top + toRect.height / 2;\r\n    \r\n    const toLeft = toRect.left - stageRect.left;\r\n    const toTop = toRect.top - stageRect.top;\r\n    const toRight = toLeft + toRect.width;\r\n    const toBottom = toTop + toRect.height;\r\n    \r\n    const fromLeft = fromRect.left - stageRect.left;\r\n    const fromTop = fromRect.top - stageRect.top;\r\n    const fromRight = fromLeft + fromRect.width;\r\n    const fromBottom = fromTop + fromRect.height;\r\n    \r\n    const dx = toCenterX - fromCenterX;\r\n    const dy = toCenterY - fromCenterY;\r\n    \r\n    let x1 = fromCenterX;\r\n    let y1 = fromCenterY;\r\n    \r\n    if (Math.abs(dx) > Math.abs(dy)) {\r\n      if (dx > 0) {\r\n        x1 = fromRight;\r\n        y1 = fromCenterY;\r\n      } else {\r\n        x1 = fromLeft;\r\n        y1 = fromCenterY;\r\n      }\r\n    } else {\r\n      if (dy > 0) {\r\n        x1 = fromCenterX;\r\n        y1 = fromBottom;\r\n      } else {\r\n        x1 = fromCenterX;\r\n        y1 = fromTop;\r\n      }\r\n    }\r\n    \r\n    let x2 = toCenterX;\r\n    let y2 = toCenterY;\r\n    \r\n    if (Math.abs(dx) > Math.abs(dy)) {\r\n      if (dx > 0) {\r\n        x2 = toLeft;\r\n        y2 = toCenterY;\r\n      } else {\r\n        x2 = toRight;\r\n        y2 = toCenterY;\r\n      }\r\n    } else {\r\n      if (dy > 0) {\r\n        x2 = toCenterX;\r\n        y2 = toTop;\r\n      } else {\r\n        x2 = toCenterX;\r\n        y2 = toBottom;\r\n      }\r\n    }\r\n    \r\n    line.setAttribute(\"x1\", x1.toFixed(2));\r\n    line.setAttribute(\"y1\", y1.toFixed(2));\r\n    line.setAttribute(\"x2\", x2.toFixed(2));\r\n    line.setAttribute(\"y2\", y2.toFixed(2));\r\n  });\r\n};\r\n\r\nconst clearLinks = () => {\r\n  linkEntries = [];\r\n  [...linkLayer.querySelectorAll(\"line\")].forEach((line) => line.remove());\r\n};\r\n\r\nconst setStatus = (message) => {\r\n  statusEl.textContent = message;\r\n};\r\n\r\nconst createNodeElement = (node, index, cols) => {\r\n  const gapX = 280;\r\n  const gapY = 210;\r\n  const offsetX = 60;\r\n  const offsetY = 60;\r\n  const col = index % cols;\r\n  const row = Math.floor(index / cols);\r\n\r\n  const nodeEl = document.createElement(\"div\");\r\n  nodeEl.className = \"node\";\r\n  nodeEl.style.left = `${offsetX + col * gapX}px`;\r\n  nodeEl.style.top = `${offsetY + row * gapY}px`;\r\n  nodeEl.dataset.path = node.file_path;\r\n\r\n  const header = document.createElement(\"div\");\r\n  header.className = \"node-header\";\r\n  header.innerHTML = `\r\n    <h3>${node.file_name}</h3>\r\n    <span>${node.file_path}</span>\r\n  `;\r\n\r\n  const imports = document.createElement(\"div\");\r\n  imports.className = \"imports\";\r\n\r\n  node.imports.forEach((imp) => {\r\n    const impEl = document.createElement(\"div\");\r\n    impEl.className = \"import\";\r\n    impEl.textContent = imp.import.named[0]?.local ?? \"Unknown\";\r\n    if (imp.node && imp.node.file_path) {\r\n      impEl.dataset.target = imp.node.file_path;\r\n    }\r\n    imports.appendChild(impEl);\r\n  });\r\n\r\n  nodeEl.appendChild(header);\r\n  nodeEl.appendChild(imports);\r\n\r\n  return nodeEl;\r\n};\r\n\r\nconst enableDrag = (nodeEl) => {\r\n  let activePointer = null;\r\n  let startX = 0;\r\n  let startY = 0;\r\n  let originLeft = 0;\r\n  let originTop = 0;\r\n\r\n  const onPointerDown = (event) => {\r\n    if (event.button !== 0) {\r\n      return;\r\n    }\r\n\r\n    const header = event.target.closest(\".node-header\");\r\n    if (!header) {\r\n      return;\r\n    }\r\n\r\n    const rect = nodeEl.getBoundingClientRect();\r\n    const stageRect = stage.getBoundingClientRect();\r\n    activePointer = event.pointerId;\r\n    startX = event.clientX;\r\n    startY = event.clientY;\r\n    originLeft = rect.left - stageRect.left;\r\n    originTop = rect.top - stageRect.top;\r\n    nodeEl.setPointerCapture(activePointer);\r\n    nodeEl.classList.add(\"dragging\");\r\n  };\r\n\r\n  const onPointerMove = (event) => {\r\n    if (activePointer !== event.pointerId) {\r\n      return;\r\n    }\r\n    const dx = event.clientX - startX;\r\n    const dy = event.clientY - startY;\r\n    nodeEl.style.left = `${originLeft + dx}px`;\r\n    nodeEl.style.top = `${originTop + dy}px`;\r\n    updateLinks();\r\n  };\r\n\r\n  const onPointerUp = (event) => {\r\n    if (activePointer !== event.pointerId) {\r\n      return;\r\n    }\r\n    nodeEl.releasePointerCapture(activePointer);\r\n    activePointer = null;\r\n    nodeEl.classList.remove(\"dragging\");\r\n  };\r\n\r\n  nodeEl.addEventListener(\"pointerdown\", onPointerDown);\r\n  nodeEl.addEventListener(\"pointermove\", onPointerMove);\r\n  nodeEl.addEventListener(\"pointerup\", onPointerUp);\r\n  nodeEl.addEventListener(\"pointercancel\", onPointerUp);\r\n};\r\n\r\nconst renderGraph = (fileWeb) => {\r\n  nodeLayer.innerHTML = \"\";\r\n  clearLinks();\r\n\r\n  const nodes = fileWeb?.nodes ?? [];\r\n  const cols = Math.max(2, Math.ceil(Math.sqrt(nodes.length || 1)));\r\n  const nodeMap = new Map();\r\n\r\n  nodes.forEach((node, index) => {\r\n    const nodeEl = createNodeElement(node, index, cols);\r\n    nodeLayer.appendChild(nodeEl);\r\n    nodeMap.set(node.file_path, nodeEl);\r\n    enableDrag(nodeEl);\r\n  });\r\n\r\n  nodes.forEach((node) => {\r\n    const nodeEl = nodeMap.get(node.file_path);\r\n    if (!nodeEl) {\r\n      return;\r\n    }\r\n    nodeEl.querySelectorAll(\".import\").forEach((impEl) => {\r\n      const targetPath = impEl.dataset.target;\r\n      if (!targetPath) {\r\n        return;\r\n      }\r\n      const targetEl = nodeMap.get(targetPath);\r\n      if (!targetEl) {\r\n        return;\r\n      }\r\n      const targetAnchor = targetEl.querySelector(\".node-header\") ?? targetEl;\r\n      const line = document.createElementNS(\"http://www.w3.org/2000/svg\", \"line\");\r\n      line.setAttribute(\"marker-end\", \"url(#arrow)\");\r\n      linkLayer.appendChild(line);\r\n      linkEntries.push({ line, fromEl: impEl, toEl: targetAnchor });\r\n    });\r\n  });\r\n\r\n  nodeCountEl.textContent = nodes.length.toString();\r\n  linkCountEl.textContent = linkEntries.length.toString();\r\n  requestAnimationFrame(updateLinks);\r\n};\r\n\r\nconst selectFolder = async () => {\r\n  // Trigger the hidden file input\r\n  folderInput.click();\r\n};\r\n\r\nconst analyzeAndRender = (fileData, selectedFolder) => {\r\n  folderPath.textContent = selectedFolder;\r\n  setStatus(\"Analyzing imports...\");\r\n\r\n  const fileWeb = (0,scov_web__WEBPACK_IMPORTED_MODULE_0__.process_files)(fileData);\r\n  renderGraph(fileWeb);\r\n  startScreen.classList.add(\"hidden\");\r\n  setStatus(\"Graph ready. Drag nodes to explore relationships.\");\r\n};\r\n\r\nconst loadDemoFolder = async () => {\r\n  folderPath.textContent = DEMO_FOLDER;\r\n  setStatus(\"Loading demo files...\");\r\n\r\n  try {\r\n    const fileData = await Promise.all(\r\n      DEMO_FILES.map(async (relativePath) => {\r\n        const response = await fetch(`./demo-project/${relativePath}`);\r\n        if (!response.ok) {\r\n          throw new Error(`Failed to load demo file: ${relativePath}`);\r\n        }\r\n\r\n        const content = await response.text();\r\n        return {\r\n          path: `${DEMO_FOLDER}/${relativePath}`,\r\n          content,\r\n        };\r\n      })\r\n    );\r\n\r\n    analyzeAndRender(fileData, DEMO_FOLDER);\r\n  } catch (error) {\r\n    setStatus(\"Failed to load demo folder. Check the console for details.\");\r\n    console.error(error);\r\n  }\r\n};\r\n\r\nconst processFiles = async (files) => {\r\n  if (files.length === 0) {\r\n    return;\r\n  }\r\n\r\n  // Get the folder name from the first file's path\r\n  const firstFile = files[0];\r\n  const pathParts = firstFile.webkitRelativePath.split('/');\r\n  const folderName = pathParts[0];\r\n  folderPath.textContent = folderName;\r\n  setStatus(\"Processing files...\");\r\n\r\n  try {\r\n    // Read all files and prepare them for the WASM function\r\n    const filePromises = Array.from(files).map(async (file) => {\r\n      const content = await file.text();\r\n      return {\r\n        path: file.webkitRelativePath,\r\n        content: content\r\n      };\r\n    });\r\n\r\n    const fileData = await Promise.all(filePromises);\r\n    \r\n    analyzeAndRender(fileData, folderName);\r\n  } catch (error) {\r\n    setStatus(\"Failed to process files. Check the console for details.\");\r\n    console.error(error);\r\n  }\r\n};\r\n\r\n// Handle file input change\r\nfolderInput.addEventListener(\"change\", (event) => {\r\n  const files = event.target.files;\r\n  processFiles(files);\r\n  // Reset the input so the same folder can be selected again\r\n  event.target.value = \"\";\r\n});\r\n\r\nstartButton.addEventListener(\"click\", selectFolder);\r\npickFolderButton.addEventListener(\"click\", selectFolder);\r\nloadDemoButton.addEventListener(\"click\", loadDemoFolder);\r\nstartDemoButton.addEventListener(\"click\", loadDemoFolder);\r\nwindow.addEventListener(\"resize\", () => requestAnimationFrame(updateLinks));\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///./index.js?\n}");

/***/ },

/***/ "../pkg/scov_web.js"
/*!**************************!*\
  !*** ../pkg/scov_web.js ***!
  \**************************/
(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   process_files: () => (/* reexport safe */ _scov_web_bg_js__WEBPACK_IMPORTED_MODULE_1__.process_files)\n/* harmony export */ });\n/* harmony import */ var _scov_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scov_web_bg.wasm */ \"../pkg/scov_web_bg.wasm\");\n/* harmony import */ var _scov_web_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scov_web_bg.js */ \"../pkg/scov_web_bg.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_scov_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);\nvar __webpack_async_dependencies_result__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n_scov_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_async_dependencies_result__[0];\n/* @ts-self-types=\"./scov_web.d.ts\" */\n\n\n\n(0,_scov_web_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_set_wasm)(_scov_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__);\n_scov_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_start();\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///../pkg/scov_web.js?\n}");

/***/ },

/***/ "../pkg/scov_web_bg.js"
/*!*****************************!*\
  !*** ../pkg/scov_web_bg.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __wbg_Error_8c4e43fe74559d73: () => (/* binding */ __wbg_Error_8c4e43fe74559d73),\n/* harmony export */   __wbg_String_8f0eb39a4a4c2f66: () => (/* binding */ __wbg_String_8f0eb39a4a4c2f66),\n/* harmony export */   __wbg___wbindgen_boolean_get_bbbb1c18aa2f5e25: () => (/* binding */ __wbg___wbindgen_boolean_get_bbbb1c18aa2f5e25),\n/* harmony export */   __wbg___wbindgen_debug_string_0bc8482c6e3508ae: () => (/* binding */ __wbg___wbindgen_debug_string_0bc8482c6e3508ae),\n/* harmony export */   __wbg___wbindgen_in_47fa6863be6f2f25: () => (/* binding */ __wbg___wbindgen_in_47fa6863be6f2f25),\n/* harmony export */   __wbg___wbindgen_is_function_0095a73b8b156f76: () => (/* binding */ __wbg___wbindgen_is_function_0095a73b8b156f76),\n/* harmony export */   __wbg___wbindgen_is_object_5ae8e5880f2c1fbd: () => (/* binding */ __wbg___wbindgen_is_object_5ae8e5880f2c1fbd),\n/* harmony export */   __wbg___wbindgen_is_undefined_9e4d92534c42d778: () => (/* binding */ __wbg___wbindgen_is_undefined_9e4d92534c42d778),\n/* harmony export */   __wbg___wbindgen_jsval_loose_eq_9dd77d8cd6671811: () => (/* binding */ __wbg___wbindgen_jsval_loose_eq_9dd77d8cd6671811),\n/* harmony export */   __wbg___wbindgen_number_get_8ff4255516ccad3e: () => (/* binding */ __wbg___wbindgen_number_get_8ff4255516ccad3e),\n/* harmony export */   __wbg___wbindgen_string_get_72fb696202c56729: () => (/* binding */ __wbg___wbindgen_string_get_72fb696202c56729),\n/* harmony export */   __wbg___wbindgen_throw_be289d5034ed271b: () => (/* binding */ __wbg___wbindgen_throw_be289d5034ed271b),\n/* harmony export */   __wbg_call_389efe28435a9388: () => (/* binding */ __wbg_call_389efe28435a9388),\n/* harmony export */   __wbg_done_57b39ecd9addfe81: () => (/* binding */ __wbg_done_57b39ecd9addfe81),\n/* harmony export */   __wbg_get_9b94d73e6221f75c: () => (/* binding */ __wbg_get_9b94d73e6221f75c),\n/* harmony export */   __wbg_get_b3ed3ad4be2bc8ac: () => (/* binding */ __wbg_get_b3ed3ad4be2bc8ac),\n/* harmony export */   __wbg_get_with_ref_key_1dc361bd10053bfe: () => (/* binding */ __wbg_get_with_ref_key_1dc361bd10053bfe),\n/* harmony export */   __wbg_instanceof_ArrayBuffer_c367199e2fa2aa04: () => (/* binding */ __wbg_instanceof_ArrayBuffer_c367199e2fa2aa04),\n/* harmony export */   __wbg_instanceof_Uint8Array_9b9075935c74707c: () => (/* binding */ __wbg_instanceof_Uint8Array_9b9075935c74707c),\n/* harmony export */   __wbg_isArray_d314bb98fcf08331: () => (/* binding */ __wbg_isArray_d314bb98fcf08331),\n/* harmony export */   __wbg_iterator_6ff6560ca1568e55: () => (/* binding */ __wbg_iterator_6ff6560ca1568e55),\n/* harmony export */   __wbg_length_32ed9a279acd054c: () => (/* binding */ __wbg_length_32ed9a279acd054c),\n/* harmony export */   __wbg_length_35a7bace40f36eac: () => (/* binding */ __wbg_length_35a7bace40f36eac),\n/* harmony export */   __wbg_new_361308b2356cecd0: () => (/* binding */ __wbg_new_361308b2356cecd0),\n/* harmony export */   __wbg_new_3eb36ae241fe6f44: () => (/* binding */ __wbg_new_3eb36ae241fe6f44),\n/* harmony export */   __wbg_new_dd2b680c8bf6ae29: () => (/* binding */ __wbg_new_dd2b680c8bf6ae29),\n/* harmony export */   __wbg_next_3482f54c49e8af19: () => (/* binding */ __wbg_next_3482f54c49e8af19),\n/* harmony export */   __wbg_next_418f80d8f5303233: () => (/* binding */ __wbg_next_418f80d8f5303233),\n/* harmony export */   __wbg_prototypesetcall_bdcdcc5842e4d77d: () => (/* binding */ __wbg_prototypesetcall_bdcdcc5842e4d77d),\n/* harmony export */   __wbg_set_3f1d0b984ed272ed: () => (/* binding */ __wbg_set_3f1d0b984ed272ed),\n/* harmony export */   __wbg_set_f43e577aea94465b: () => (/* binding */ __wbg_set_f43e577aea94465b),\n/* harmony export */   __wbg_set_wasm: () => (/* binding */ __wbg_set_wasm),\n/* harmony export */   __wbg_value_0546255b415e96c1: () => (/* binding */ __wbg_value_0546255b415e96c1),\n/* harmony export */   __wbindgen_cast_0000000000000001: () => (/* binding */ __wbindgen_cast_0000000000000001),\n/* harmony export */   __wbindgen_init_externref_table: () => (/* binding */ __wbindgen_init_externref_table),\n/* harmony export */   process_files: () => (/* binding */ process_files)\n/* harmony export */ });\n/**\n * @param {any} files_json\n * @returns {any}\n */\nfunction process_files(files_json) {\n    const ret = wasm.process_files(files_json);\n    if (ret[2]) {\n        throw takeFromExternrefTable0(ret[1]);\n    }\n    return takeFromExternrefTable0(ret[0]);\n}\nfunction __wbg_Error_8c4e43fe74559d73(arg0, arg1) {\n    const ret = Error(getStringFromWasm0(arg0, arg1));\n    return ret;\n}\nfunction __wbg_String_8f0eb39a4a4c2f66(arg0, arg1) {\n    const ret = String(arg1);\n    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n    const len1 = WASM_VECTOR_LEN;\n    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);\n    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);\n}\nfunction __wbg___wbindgen_boolean_get_bbbb1c18aa2f5e25(arg0) {\n    const v = arg0;\n    const ret = typeof(v) === 'boolean' ? v : undefined;\n    return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;\n}\nfunction __wbg___wbindgen_debug_string_0bc8482c6e3508ae(arg0, arg1) {\n    const ret = debugString(arg1);\n    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n    const len1 = WASM_VECTOR_LEN;\n    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);\n    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);\n}\nfunction __wbg___wbindgen_in_47fa6863be6f2f25(arg0, arg1) {\n    const ret = arg0 in arg1;\n    return ret;\n}\nfunction __wbg___wbindgen_is_function_0095a73b8b156f76(arg0) {\n    const ret = typeof(arg0) === 'function';\n    return ret;\n}\nfunction __wbg___wbindgen_is_object_5ae8e5880f2c1fbd(arg0) {\n    const val = arg0;\n    const ret = typeof(val) === 'object' && val !== null;\n    return ret;\n}\nfunction __wbg___wbindgen_is_undefined_9e4d92534c42d778(arg0) {\n    const ret = arg0 === undefined;\n    return ret;\n}\nfunction __wbg___wbindgen_jsval_loose_eq_9dd77d8cd6671811(arg0, arg1) {\n    const ret = arg0 == arg1;\n    return ret;\n}\nfunction __wbg___wbindgen_number_get_8ff4255516ccad3e(arg0, arg1) {\n    const obj = arg1;\n    const ret = typeof(obj) === 'number' ? obj : undefined;\n    getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);\n    getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);\n}\nfunction __wbg___wbindgen_string_get_72fb696202c56729(arg0, arg1) {\n    const obj = arg1;\n    const ret = typeof(obj) === 'string' ? obj : undefined;\n    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n    var len1 = WASM_VECTOR_LEN;\n    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);\n    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);\n}\nfunction __wbg___wbindgen_throw_be289d5034ed271b(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n}\nfunction __wbg_call_389efe28435a9388() { return handleError(function (arg0, arg1) {\n    const ret = arg0.call(arg1);\n    return ret;\n}, arguments); }\nfunction __wbg_done_57b39ecd9addfe81(arg0) {\n    const ret = arg0.done;\n    return ret;\n}\nfunction __wbg_get_9b94d73e6221f75c(arg0, arg1) {\n    const ret = arg0[arg1 >>> 0];\n    return ret;\n}\nfunction __wbg_get_b3ed3ad4be2bc8ac() { return handleError(function (arg0, arg1) {\n    const ret = Reflect.get(arg0, arg1);\n    return ret;\n}, arguments); }\nfunction __wbg_get_with_ref_key_1dc361bd10053bfe(arg0, arg1) {\n    const ret = arg0[arg1];\n    return ret;\n}\nfunction __wbg_instanceof_ArrayBuffer_c367199e2fa2aa04(arg0) {\n    let result;\n    try {\n        result = arg0 instanceof ArrayBuffer;\n    } catch (_) {\n        result = false;\n    }\n    const ret = result;\n    return ret;\n}\nfunction __wbg_instanceof_Uint8Array_9b9075935c74707c(arg0) {\n    let result;\n    try {\n        result = arg0 instanceof Uint8Array;\n    } catch (_) {\n        result = false;\n    }\n    const ret = result;\n    return ret;\n}\nfunction __wbg_isArray_d314bb98fcf08331(arg0) {\n    const ret = Array.isArray(arg0);\n    return ret;\n}\nfunction __wbg_iterator_6ff6560ca1568e55() {\n    const ret = Symbol.iterator;\n    return ret;\n}\nfunction __wbg_length_32ed9a279acd054c(arg0) {\n    const ret = arg0.length;\n    return ret;\n}\nfunction __wbg_length_35a7bace40f36eac(arg0) {\n    const ret = arg0.length;\n    return ret;\n}\nfunction __wbg_new_361308b2356cecd0() {\n    const ret = new Object();\n    return ret;\n}\nfunction __wbg_new_3eb36ae241fe6f44() {\n    const ret = new Array();\n    return ret;\n}\nfunction __wbg_new_dd2b680c8bf6ae29(arg0) {\n    const ret = new Uint8Array(arg0);\n    return ret;\n}\nfunction __wbg_next_3482f54c49e8af19() { return handleError(function (arg0) {\n    const ret = arg0.next();\n    return ret;\n}, arguments); }\nfunction __wbg_next_418f80d8f5303233(arg0) {\n    const ret = arg0.next;\n    return ret;\n}\nfunction __wbg_prototypesetcall_bdcdcc5842e4d77d(arg0, arg1, arg2) {\n    Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);\n}\nfunction __wbg_set_3f1d0b984ed272ed(arg0, arg1, arg2) {\n    arg0[arg1] = arg2;\n}\nfunction __wbg_set_f43e577aea94465b(arg0, arg1, arg2) {\n    arg0[arg1 >>> 0] = arg2;\n}\nfunction __wbg_value_0546255b415e96c1(arg0) {\n    const ret = arg0.value;\n    return ret;\n}\nfunction __wbindgen_cast_0000000000000001(arg0, arg1) {\n    // Cast intrinsic for `Ref(String) -> Externref`.\n    const ret = getStringFromWasm0(arg0, arg1);\n    return ret;\n}\nfunction __wbindgen_init_externref_table() {\n    const table = wasm.__wbindgen_externrefs;\n    const offset = table.grow(4);\n    table.set(0, undefined);\n    table.set(offset + 0, undefined);\n    table.set(offset + 1, null);\n    table.set(offset + 2, true);\n    table.set(offset + 3, false);\n}\nfunction addToExternrefTable0(obj) {\n    const idx = wasm.__externref_table_alloc();\n    wasm.__wbindgen_externrefs.set(idx, obj);\n    return idx;\n}\n\nfunction debugString(val) {\n    // primitive types\n    const type = typeof val;\n    if (type == 'number' || type == 'boolean' || val == null) {\n        return  `${val}`;\n    }\n    if (type == 'string') {\n        return `\"${val}\"`;\n    }\n    if (type == 'symbol') {\n        const description = val.description;\n        if (description == null) {\n            return 'Symbol';\n        } else {\n            return `Symbol(${description})`;\n        }\n    }\n    if (type == 'function') {\n        const name = val.name;\n        if (typeof name == 'string' && name.length > 0) {\n            return `Function(${name})`;\n        } else {\n            return 'Function';\n        }\n    }\n    // objects\n    if (Array.isArray(val)) {\n        const length = val.length;\n        let debug = '[';\n        if (length > 0) {\n            debug += debugString(val[0]);\n        }\n        for(let i = 1; i < length; i++) {\n            debug += ', ' + debugString(val[i]);\n        }\n        debug += ']';\n        return debug;\n    }\n    // Test for built-in\n    const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));\n    let className;\n    if (builtInMatches && builtInMatches.length > 1) {\n        className = builtInMatches[1];\n    } else {\n        // Failed to match the standard '[object ClassName]'\n        return toString.call(val);\n    }\n    if (className == 'Object') {\n        // we're a user defined class or Object\n        // JSON.stringify avoids problems with cycles, and is generally much\n        // easier than looping through ownProperties of `val`.\n        try {\n            return 'Object(' + JSON.stringify(val) + ')';\n        } catch (_) {\n            return 'Object';\n        }\n    }\n    // errors\n    if (val instanceof Error) {\n        return `${val.name}: ${val.message}\\n${val.stack}`;\n    }\n    // TODO we could test for more things here, like `Set`s and `Map`s.\n    return className;\n}\n\nfunction getArrayU8FromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);\n}\n\nlet cachedDataViewMemory0 = null;\nfunction getDataViewMemory0() {\n    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {\n        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);\n    }\n    return cachedDataViewMemory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return decodeText(ptr, len);\n}\n\nlet cachedUint8ArrayMemory0 = null;\nfunction getUint8ArrayMemory0() {\n    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {\n        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8ArrayMemory0;\n}\n\nfunction handleError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        const idx = addToExternrefTable0(e);\n        wasm.__wbindgen_exn_store(idx);\n    }\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length, 1) >>> 0;\n        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len, 1) >>> 0;\n\n    const mem = getUint8ArrayMemory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;\n        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);\n        const ret = cachedTextEncoder.encodeInto(arg, view);\n\n        offset += ret.written;\n        ptr = realloc(ptr, len, offset, 1) >>> 0;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nfunction takeFromExternrefTable0(idx) {\n    const value = wasm.__wbindgen_externrefs.get(idx);\n    wasm.__externref_table_dealloc(idx);\n    return value;\n}\n\nlet cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });\ncachedTextDecoder.decode();\nconst MAX_SAFARI_DECODE_BYTES = 2146435072;\nlet numBytesDecoded = 0;\nfunction decodeText(ptr, len) {\n    numBytesDecoded += len;\n    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {\n        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n        cachedTextDecoder.decode();\n        numBytesDecoded = len;\n    }\n    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));\n}\n\nconst cachedTextEncoder = new TextEncoder();\n\nif (!('encodeInto' in cachedTextEncoder)) {\n    cachedTextEncoder.encodeInto = function (arg, view) {\n        const buf = cachedTextEncoder.encode(arg);\n        view.set(buf);\n        return {\n            read: arg.length,\n            written: buf.length\n        };\n    };\n}\n\nlet WASM_VECTOR_LEN = 0;\n\n\nlet wasm;\nfunction __wbg_set_wasm(val) {\n    wasm = val;\n}\n\n\n//# sourceURL=webpack:///../pkg/scov_web_bg.js?\n}");

/***/ },

/***/ "../pkg/scov_web_bg.wasm"
/*!*******************************!*\
  !*** ../pkg/scov_web_bg.wasm ***!
  \*******************************/
(module, exports, __webpack_require__) {

eval("{/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./scov_web_bg.js */ \"../pkg/scov_web_bg.js\");\nmodule.exports = __webpack_require__.v(exports, module.id, \"f448d54d592ac856a0d7\", {\n\t\"./scov_web_bg.js\": {\n\t\t\"__wbg_get_with_ref_key_1dc361bd10053bfe\": WEBPACK_IMPORTED_MODULE_0.__wbg_get_with_ref_key_1dc361bd10053bfe,\n\t\t\"__wbg_set_3f1d0b984ed272ed\": WEBPACK_IMPORTED_MODULE_0.__wbg_set_3f1d0b984ed272ed,\n\t\t\"__wbg_String_8f0eb39a4a4c2f66\": WEBPACK_IMPORTED_MODULE_0.__wbg_String_8f0eb39a4a4c2f66,\n\t\t\"__wbg_new_3eb36ae241fe6f44\": WEBPACK_IMPORTED_MODULE_0.__wbg_new_3eb36ae241fe6f44,\n\t\t\"__wbg_new_361308b2356cecd0\": WEBPACK_IMPORTED_MODULE_0.__wbg_new_361308b2356cecd0,\n\t\t\"__wbg_new_dd2b680c8bf6ae29\": WEBPACK_IMPORTED_MODULE_0.__wbg_new_dd2b680c8bf6ae29,\n\t\t\"__wbg_length_32ed9a279acd054c\": WEBPACK_IMPORTED_MODULE_0.__wbg_length_32ed9a279acd054c,\n\t\t\"__wbg_prototypesetcall_bdcdcc5842e4d77d\": WEBPACK_IMPORTED_MODULE_0.__wbg_prototypesetcall_bdcdcc5842e4d77d,\n\t\t\"__wbg_done_57b39ecd9addfe81\": WEBPACK_IMPORTED_MODULE_0.__wbg_done_57b39ecd9addfe81,\n\t\t\"__wbg_value_0546255b415e96c1\": WEBPACK_IMPORTED_MODULE_0.__wbg_value_0546255b415e96c1,\n\t\t\"__wbg_instanceof_Uint8Array_9b9075935c74707c\": WEBPACK_IMPORTED_MODULE_0.__wbg_instanceof_Uint8Array_9b9075935c74707c,\n\t\t\"__wbg_instanceof_ArrayBuffer_c367199e2fa2aa04\": WEBPACK_IMPORTED_MODULE_0.__wbg_instanceof_ArrayBuffer_c367199e2fa2aa04,\n\t\t\"__wbg_get_9b94d73e6221f75c\": WEBPACK_IMPORTED_MODULE_0.__wbg_get_9b94d73e6221f75c,\n\t\t\"__wbg_set_f43e577aea94465b\": WEBPACK_IMPORTED_MODULE_0.__wbg_set_f43e577aea94465b,\n\t\t\"__wbg_length_35a7bace40f36eac\": WEBPACK_IMPORTED_MODULE_0.__wbg_length_35a7bace40f36eac,\n\t\t\"__wbg_isArray_d314bb98fcf08331\": WEBPACK_IMPORTED_MODULE_0.__wbg_isArray_d314bb98fcf08331,\n\t\t\"__wbg_iterator_6ff6560ca1568e55\": WEBPACK_IMPORTED_MODULE_0.__wbg_iterator_6ff6560ca1568e55,\n\t\t\"__wbg_call_389efe28435a9388\": WEBPACK_IMPORTED_MODULE_0.__wbg_call_389efe28435a9388,\n\t\t\"__wbg_next_418f80d8f5303233\": WEBPACK_IMPORTED_MODULE_0.__wbg_next_418f80d8f5303233,\n\t\t\"__wbg_next_3482f54c49e8af19\": WEBPACK_IMPORTED_MODULE_0.__wbg_next_3482f54c49e8af19,\n\t\t\"__wbg_get_b3ed3ad4be2bc8ac\": WEBPACK_IMPORTED_MODULE_0.__wbg_get_b3ed3ad4be2bc8ac,\n\t\t\"__wbg___wbindgen_number_get_8ff4255516ccad3e\": WEBPACK_IMPORTED_MODULE_0.__wbg___wbindgen_number_get_8ff4255516ccad3e,\n\t\t\"__wbg___wbindgen_in_47fa6863be6f2f25\": WEBPACK_IMPORTED_MODULE_0.__wbg___wbindgen_in_47fa6863be6f2f25,\n\t\t\"__wbg___wbindgen_throw_be289d5034ed271b\": WEBPACK_IMPORTED_MODULE_0.__wbg___wbindgen_throw_be289d5034ed271b,\n\t\t\"__wbg_Error_8c4e43fe74559d73\": WEBPACK_IMPORTED_MODULE_0.__wbg_Error_8c4e43fe74559d73,\n\t\t\"__wbg___wbindgen_is_object_5ae8e5880f2c1fbd\": WEBPACK_IMPORTED_MODULE_0.__wbg___wbindgen_is_object_5ae8e5880f2c1fbd,\n\t\t\"__wbg___wbindgen_string_get_72fb696202c56729\": WEBPACK_IMPORTED_MODULE_0.__wbg___wbindgen_string_get_72fb696202c56729,\n\t\t\"__wbg___wbindgen_boolean_get_bbbb1c18aa2f5e25\": WEBPACK_IMPORTED_MODULE_0.__wbg___wbindgen_boolean_get_bbbb1c18aa2f5e25,\n\t\t\"__wbg___wbindgen_is_function_0095a73b8b156f76\": WEBPACK_IMPORTED_MODULE_0.__wbg___wbindgen_is_function_0095a73b8b156f76,\n\t\t\"__wbg___wbindgen_is_undefined_9e4d92534c42d778\": WEBPACK_IMPORTED_MODULE_0.__wbg___wbindgen_is_undefined_9e4d92534c42d778,\n\t\t\"__wbg___wbindgen_jsval_loose_eq_9dd77d8cd6671811\": WEBPACK_IMPORTED_MODULE_0.__wbg___wbindgen_jsval_loose_eq_9dd77d8cd6671811,\n\t\t\"__wbg___wbindgen_debug_string_0bc8482c6e3508ae\": WEBPACK_IMPORTED_MODULE_0.__wbg___wbindgen_debug_string_0bc8482c6e3508ae,\n\t\t\"__wbindgen_init_externref_table\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_init_externref_table,\n\t\t\"__wbindgen_cast_0000000000000001\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_cast_0000000000000001\n\t}\n});\n\n//# sourceURL=webpack:///../pkg/scov_web_bg.wasm?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var hasSymbol = typeof Symbol === "function";
/******/ 		var webpackQueues = hasSymbol ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = hasSymbol ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = hasSymbol ? Symbol("webpack error") : "__webpack_error__";
/******/ 		
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 		
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 		
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			var handle = (deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 		
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}
/******/ 			var done = (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue))
/******/ 			body(handle, done);
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/wasm loading */
/******/ 	(() => {
/******/ 		__webpack_require__.v = (exports, wasmModuleId, wasmModuleHash, importsObj) => {
/******/ 		
/******/ 			var req = fetch(__webpack_require__.p + "" + wasmModuleHash + ".module.wasm");
/******/ 			var fallback = () => (req
/******/ 				.then((x) => (x.arrayBuffer()))
/******/ 				.then((bytes) => (WebAssembly.instantiate(bytes, importsObj)))
/******/ 				.then((res) => (Object.assign(exports, res.instance.exports))));
/******/ 			return req.then((res) => {
/******/ 				if (typeof WebAssembly.instantiateStreaming === "function") {
/******/ 		
/******/ 					return WebAssembly.instantiateStreaming(res, importsObj)
/******/ 						.then(
/******/ 							(res) => (Object.assign(exports, res.instance.exports)),
/******/ 							(e) => {
/******/ 								if(res.headers.get("Content-Type") !== "application/wasm") {
/******/ 									console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
/******/ 									return fallback();
/******/ 								}
/******/ 								throw e;
/******/ 							}
/******/ 						);
/******/ 				}
/******/ 				return fallback();
/******/ 			});
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;