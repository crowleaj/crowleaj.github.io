/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 485:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! modern-normalize v1.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\n:root {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  color: #9ca3af;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * Make replaced elements `display: block` by default as that's\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their instrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n.bg-gray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(229, 231, 235, var(--tw-bg-opacity));\n}\n\n.bg-gray-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(55, 65, 81, var(--tw-bg-opacity));\n}\n\n.bg-indigo-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(79, 70, 229, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-gray-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(75, 85, 99, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-indigo-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(67, 56, 202, var(--tw-bg-opacity));\n}\n\n.border-transparent {\n  border-color: transparent;\n}\n\n.rounded-md {\n  border-radius: 0.375rem;\n}\n\n.rounded-full {\n  border-radius: 9999px;\n}\n\n.border {\n  border-width: 1px;\n}\n\n.cursor-auto {\n  cursor: auto;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.block {\n  display: block;\n}\n\n.inline-block {\n  display: inline-block;\n}\n\n.flex {\n  display: flex;\n}\n\n.inline-flex {\n  display: inline-flex;\n}\n\n.table {\n  display: table;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.justify-start {\n  justify-content: flex-start;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.justify-evenly {\n  justify-content: space-evenly;\n}\n\n.flex-1 {\n  flex: 1 1 0%;\n}\n\n.font-medium {\n  font-weight: 500;\n}\n\n.font-semibold {\n  font-weight: 600;\n}\n\n.font-bold {\n  font-weight: 700;\n}\n\n.font-extrabold {\n  font-weight: 800;\n}\n\n.h-5 {\n  height: 1.25rem;\n}\n\n.h-16 {\n  height: 4rem;\n}\n\n.h-44 {\n  height: 11rem;\n}\n\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.mb-4 {\n  margin-bottom: 1rem;\n}\n\n.ml-4 {\n  margin-left: 1rem;\n}\n\n.mt-8 {\n  margin-top: 2rem;\n}\n\n.mr-10 {\n  margin-right: 2.5rem;\n}\n\n.mb-10 {\n  margin-bottom: 2.5rem;\n}\n\n.ml-10 {\n  margin-left: 2.5rem;\n}\n\n.mt-16 {\n  margin-top: 4rem;\n}\n\n.mt-28 {\n  margin-top: 7rem;\n}\n\n.max-w-7xl {\n  max-width: 80rem;\n}\n\n.opacity-0 {\n  opacity: 0;\n}\n\n.opacity-100 {\n  opacity: 1;\n}\n\n.p-2 {\n  padding: 0.5rem;\n}\n\n.p-6 {\n  padding: 1.5rem;\n}\n\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n\n.fixed {\n  position: fixed;\n}\n\n.absolute {\n  position: absolute;\n}\n\n.relative {\n  position: relative;\n}\n\n.right-0 {\n  right: 0px;\n}\n\n* {\n  --tw-shadow: 0 0 #0000;\n}\n\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n* {\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n}\n\n.ring-1 {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.ring-black {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgba(0, 0, 0, var(--tw-ring-opacity));\n}\n\n.ring-opacity-5 {\n  --tw-ring-opacity: 0.05;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.text-gray-800 {\n  --tw-text-opacity: 1;\n  color: rgba(31, 41, 55, var(--tw-text-opacity));\n}\n\n.text-blue-700 {\n  --tw-text-opacity: 1;\n  color: rgba(29, 78, 216, var(--tw-text-opacity));\n}\n\n.text-blue-800 {\n  --tw-text-opacity: 1;\n  color: rgba(30, 64, 175, var(--tw-text-opacity));\n}\n\n.italic {\n  font-style: italic;\n}\n\n.tracking-tight {\n  letter-spacing: -0.025em;\n}\n\n.visible {\n  visibility: visible;\n}\n\n.w-5 {\n  width: 1.25rem;\n}\n\n.w-56 {\n  width: 14rem;\n}\n\n.z-0 {\n  z-index: 0;\n}\n\n.z-10 {\n  z-index: 10;\n}\n\n.z-20 {\n  z-index: 20;\n}\n\n.transform {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.origin-top-right {\n  transform-origin: top right;\n}\n\n.scale-95 {\n  --tw-scale-x: .95;\n  --tw-scale-y: .95;\n}\n\n.scale-100 {\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n}\n\n.transition {\n  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.ease-linear {\n  transition-timing-function: linear;\n}\n\n.ease-in {\n  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\n\n.ease-out {\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.duration-75 {\n  transition-duration: 75ms;\n}\n\n.duration-100 {\n  transition-duration: 100ms;\n}\n\n.duration-200 {\n  transition-duration: 200ms;\n}\n\n@-webkit-keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n\n@keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes pulse {\n  50% {\n    opacity: .5;\n  }\n}\n\n@keyframes pulse {\n  50% {\n    opacity: .5;\n  }\n}\n\n@-webkit-keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n    -webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);\n            animation-timing-function: cubic-bezier(0.8,0,1,1);\n  }\n\n  50% {\n    transform: none;\n    -webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);\n            animation-timing-function: cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n    -webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);\n            animation-timing-function: cubic-bezier(0.8,0,1,1);\n  }\n\n  50% {\n    transform: none;\n    -webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);\n            animation-timing-function: cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@media (min-width: 640px) {\n  .sm\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n}\n\n@media (min-width: 768px) {\n}\n\n@media (min-width: 1024px) {\n  .lg\\:flex {\n    display: flex;\n  }\n\n  .lg\\:flex-row {\n    flex-direction: row;\n  }\n\n  .lg\\:items-start {\n    align-items: flex-start;\n  }\n\n  .lg\\:items-center {\n    align-items: center;\n  }\n\n  .lg\\:justify-start {\n    justify-content: flex-start;\n  }\n\n  .lg\\:justify-between {\n    justify-content: space-between;\n  }\n\n  .lg\\:h-24 {\n    height: 6rem;\n  }\n\n  .lg\\:h-72 {\n    height: 18rem;\n  }\n\n  .lg\\:text-base {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .lg\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n\n  .lg\\:text-xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n\n  .lg\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n\n  .lg\\:text-3xl {\n    font-size: 1.875rem;\n    line-height: 2.25rem;\n  }\n\n  .lg\\:mr-0 {\n    margin-right: 0px;\n  }\n\n  .lg\\:mb-0 {\n    margin-bottom: 0px;\n  }\n\n  .lg\\:ml-10 {\n    margin-left: 2.5rem;\n  }\n\n  .lg\\:mt-16 {\n    margin-top: 4rem;\n  }\n\n  .lg\\:mt-36 {\n    margin-top: 9rem;\n  }\n\n  .lg\\:mr-40 {\n    margin-right: 10rem;\n  }\n\n  .lg\\:p-4 {\n    padding: 1rem;\n  }\n\n  .lg\\:p-12 {\n    padding: 3rem;\n  }\n\n  .lg\\:py-6 {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n  }\n\n  .lg\\:px-8 {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n\n  .lg\\:w-48 {\n    width: 12rem;\n  }\n}\n\n@media (min-width: 1280px) {\n}\n\n@media (min-width: 1536px) {\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 658:
/***/ ((module) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size, guard) {
  if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
    size = 1;
  } else {
    size = nativeMax(toInteger(size), 0);
  }
  var length = array ? array.length : 0;
  if (!length || size < 1) {
    return [];
  }
  var index = 0,
      resIndex = 0,
      result = Array(nativeCeil(length / size));

  while (index < length) {
    result[resIndex++] = baseSlice(array, index, (index += size));
  }
  return result;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = chunk;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
(() => {
"use strict";

// UNUSED EXPORTS: App

// NAMESPACE OBJECT: ./node_modules/hybrids/esm/template/helpers.js
var helpers_namespaceObject = {};
__webpack_require__.r(helpers_namespaceObject);
__webpack_require__.d(helpers_namespaceObject, {
  "resolve": () => resolve,
  "set": () => set
});

;// CONCATENATED MODULE: ./node_modules/hybrids/esm/utils.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var camelToDashMap = new Map();
function camelToDash(str) {
  var result = camelToDashMap.get(str);

  if (result === undefined) {
    result = str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    camelToDashMap.set(str, result);
  }

  return result;
}
function pascalToDash(str) {
  return camelToDash(str.replace(/((?!([A-Z]{2}|^))[A-Z])/g, "-$1"));
}
function dispatch(host, eventType) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return host.dispatchEvent(new CustomEvent(eventType, _objectSpread({
    bubbles: false
  }, options)));
}
function shadyCSS(fn, fallback) {
  var shady = window.ShadyCSS;
  /* istanbul ignore next */

  if (shady && !shady.nativeShadow) {
    return fn(shady);
  }

  return fallback;
}
function stringifyElement(target) {
  return "<".concat(String(target.tagName).toLowerCase(), ">");
}
var IS_IE = ("ActiveXObject" in window);
var deferred = Promise.resolve();
var storePointer = new WeakMap();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJjYW1lbFRvRGFzaE1hcCIsIk1hcCIsImNhbWVsVG9EYXNoIiwic3RyIiwicmVzdWx0IiwiZ2V0IiwidW5kZWZpbmVkIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwic2V0IiwicGFzY2FsVG9EYXNoIiwiZGlzcGF0Y2giLCJob3N0IiwiZXZlbnRUeXBlIiwib3B0aW9ucyIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJzaGFkeUNTUyIsImZuIiwiZmFsbGJhY2siLCJzaGFkeSIsIndpbmRvdyIsIlNoYWR5Q1NTIiwibmF0aXZlU2hhZG93Iiwic3RyaW5naWZ5RWxlbWVudCIsInRhcmdldCIsIlN0cmluZyIsInRhZ05hbWUiLCJJU19JRSIsImRlZmVycmVkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzdG9yZVBvaW50ZXIiLCJXZWFrTWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxjQUFjLEdBQUcsSUFBSUMsR0FBSixFQUF2QjtBQUNBLE9BQU8sU0FBU0MsV0FBVCxDQUFxQkMsR0FBckIsRUFBMEI7QUFDL0IsTUFBSUMsTUFBTSxHQUFHSixjQUFjLENBQUNLLEdBQWYsQ0FBbUJGLEdBQW5CLENBQWI7O0FBQ0EsTUFBSUMsTUFBTSxLQUFLRSxTQUFmLEVBQTBCO0FBQ3hCRixJQUFBQSxNQUFNLEdBQUdELEdBQUcsQ0FBQ0ksT0FBSixDQUFZLGlCQUFaLEVBQStCLE9BQS9CLEVBQXdDQyxXQUF4QyxFQUFUO0FBQ0FSLElBQUFBLGNBQWMsQ0FBQ1MsR0FBZixDQUFtQk4sR0FBbkIsRUFBd0JDLE1BQXhCO0FBQ0Q7O0FBQ0QsU0FBT0EsTUFBUDtBQUNEO0FBRUQsT0FBTyxTQUFTTSxZQUFULENBQXNCUCxHQUF0QixFQUEyQjtBQUNoQyxTQUFPRCxXQUFXLENBQUNDLEdBQUcsQ0FBQ0ksT0FBSixDQUFZLDBCQUFaLEVBQXdDLEtBQXhDLENBQUQsQ0FBbEI7QUFDRDtBQUVELE9BQU8sU0FBU0ksUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0JDLFNBQXhCLEVBQWlEO0FBQUEsTUFBZEMsT0FBYyx1RUFBSixFQUFJO0FBQ3RELFNBQU9GLElBQUksQ0FBQ0csYUFBTCxDQUNMLElBQUlDLFdBQUosQ0FBZ0JILFNBQWhCO0FBQTZCSSxJQUFBQSxPQUFPLEVBQUU7QUFBdEMsS0FBZ0RILE9BQWhELEVBREssQ0FBUDtBQUdEO0FBRUQsT0FBTyxTQUFTSSxRQUFULENBQWtCQyxFQUFsQixFQUFzQkMsUUFBdEIsRUFBZ0M7QUFDckMsTUFBTUMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLFFBQXJCO0FBRUE7O0FBQ0EsTUFBSUYsS0FBSyxJQUFJLENBQUNBLEtBQUssQ0FBQ0csWUFBcEIsRUFBa0M7QUFDaEMsV0FBT0wsRUFBRSxDQUFDRSxLQUFELENBQVQ7QUFDRDs7QUFFRCxTQUFPRCxRQUFQO0FBQ0Q7QUFFRCxPQUFPLFNBQVNLLGdCQUFULENBQTBCQyxNQUExQixFQUFrQztBQUN2QyxvQkFBV0MsTUFBTSxDQUFDRCxNQUFNLENBQUNFLE9BQVIsQ0FBTixDQUF1QnBCLFdBQXZCLEVBQVg7QUFDRDtBQUVELE9BQU8sSUFBTXFCLEtBQUssSUFBRyxtQkFBbUJQLE1BQXRCLENBQVg7QUFDUCxPQUFPLElBQU1RLFFBQVEsR0FBR0MsT0FBTyxDQUFDQyxPQUFSLEVBQWpCO0FBRVAsT0FBTyxJQUFNQyxZQUFZLEdBQUcsSUFBSUMsT0FBSixFQUFyQiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNhbWVsVG9EYXNoTWFwID0gbmV3IE1hcCgpO1xuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsVG9EYXNoKHN0cikge1xuICBsZXQgcmVzdWx0ID0gY2FtZWxUb0Rhc2hNYXAuZ2V0KHN0cik7XG4gIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJlc3VsdCA9IHN0ci5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCBcIiQxLSQyXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgY2FtZWxUb0Rhc2hNYXAuc2V0KHN0ciwgcmVzdWx0KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFzY2FsVG9EYXNoKHN0cikge1xuICByZXR1cm4gY2FtZWxUb0Rhc2goc3RyLnJlcGxhY2UoLygoPyEoW0EtWl17Mn18XikpW0EtWl0pL2csIFwiLSQxXCIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BhdGNoKGhvc3QsIGV2ZW50VHlwZSwgb3B0aW9ucyA9IHt9KSB7XG4gIHJldHVybiBob3N0LmRpc3BhdGNoRXZlbnQoXG4gICAgbmV3IEN1c3RvbUV2ZW50KGV2ZW50VHlwZSwgeyBidWJibGVzOiBmYWxzZSwgLi4ub3B0aW9ucyB9KSxcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoYWR5Q1NTKGZuLCBmYWxsYmFjaykge1xuICBjb25zdCBzaGFkeSA9IHdpbmRvdy5TaGFkeUNTUztcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAoc2hhZHkgJiYgIXNoYWR5Lm5hdGl2ZVNoYWRvdykge1xuICAgIHJldHVybiBmbihzaGFkeSk7XG4gIH1cblxuICByZXR1cm4gZmFsbGJhY2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnlFbGVtZW50KHRhcmdldCkge1xuICByZXR1cm4gYDwke1N0cmluZyh0YXJnZXQudGFnTmFtZSkudG9Mb3dlckNhc2UoKX0+YDtcbn1cblxuZXhwb3J0IGNvbnN0IElTX0lFID0gXCJBY3RpdmVYT2JqZWN0XCIgaW4gd2luZG93O1xuZXhwb3J0IGNvbnN0IGRlZmVycmVkID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbmV4cG9ydCBjb25zdCBzdG9yZVBvaW50ZXIgPSBuZXcgV2Vha01hcCgpO1xuIl19
;// CONCATENATED MODULE: ./node_modules/hybrids/esm/property.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



var defaultTransform = function defaultTransform(v) {
  return v;
};

var objectTransform = function objectTransform(value) {
  if (_typeof(value) !== "object") {
    throw TypeError("Assigned value must be an object: ".concat(_typeof(value)));
  }

  return value && Object.freeze(value);
};

function property(value, connect) {
  var type = _typeof(value);

  var transform = defaultTransform;

  switch (type) {
    case "string":
      transform = String;
      break;

    case "number":
      transform = Number;
      break;

    case "boolean":
      transform = Boolean;
      break;

    case "function":
      transform = value;
      value = transform();
      break;

    case "object":
      if (value) Object.freeze(value);
      transform = objectTransform;
      break;

    default:
      break;
  }

  return {
    get: function get(host) {
      var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value;
      return val;
    },
    set: function set(host, val, oldValue) {
      return transform(val, oldValue);
    },
    connect: type !== "object" && type !== "undefined" ? function (host, key, invalidate) {
      if (host[key] === value) {
        var attrName = camelToDash(key);

        if (host.hasAttribute(attrName)) {
          var attrValue = host.getAttribute(attrName);
          host[key] = attrValue === "" && transform === Boolean ? true : attrValue;
        }
      }

      return connect && connect(host, key, invalidate);
    } : connect
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9wZXJ0eS5qcyJdLCJuYW1lcyI6WyJjYW1lbFRvRGFzaCIsImRlZmF1bHRUcmFuc2Zvcm0iLCJ2Iiwib2JqZWN0VHJhbnNmb3JtIiwidmFsdWUiLCJUeXBlRXJyb3IiLCJPYmplY3QiLCJmcmVlemUiLCJwcm9wZXJ0eSIsImNvbm5lY3QiLCJ0eXBlIiwidHJhbnNmb3JtIiwiU3RyaW5nIiwiTnVtYmVyIiwiQm9vbGVhbiIsImdldCIsImhvc3QiLCJ2YWwiLCJzZXQiLCJvbGRWYWx1ZSIsImtleSIsImludmFsaWRhdGUiLCJhdHRyTmFtZSIsImhhc0F0dHJpYnV0ZSIsImF0dHJWYWx1ZSIsImdldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxXQUFULFFBQTRCLFlBQTVCOztBQUVBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsQ0FBQztBQUFBLFNBQUlBLENBQUo7QUFBQSxDQUExQjs7QUFFQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUssRUFBSTtBQUMvQixNQUFJLFFBQU9BLEtBQVAsTUFBaUIsUUFBckIsRUFBK0I7QUFDN0IsVUFBTUMsU0FBUyxxREFBNkNELEtBQTdDLEdBQWY7QUFDRDs7QUFDRCxTQUFPQSxLQUFLLElBQUlFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSCxLQUFkLENBQWhCO0FBQ0QsQ0FMRDs7QUFPQSxlQUFlLFNBQVNJLFFBQVQsQ0FBa0JKLEtBQWxCLEVBQXlCSyxPQUF6QixFQUFrQztBQUMvQyxNQUFNQyxJQUFJLFdBQVVOLEtBQVYsQ0FBVjs7QUFDQSxNQUFJTyxTQUFTLEdBQUdWLGdCQUFoQjs7QUFFQSxVQUFRUyxJQUFSO0FBQ0UsU0FBSyxRQUFMO0FBQ0VDLE1BQUFBLFNBQVMsR0FBR0MsTUFBWjtBQUNBOztBQUNGLFNBQUssUUFBTDtBQUNFRCxNQUFBQSxTQUFTLEdBQUdFLE1BQVo7QUFDQTs7QUFDRixTQUFLLFNBQUw7QUFDRUYsTUFBQUEsU0FBUyxHQUFHRyxPQUFaO0FBQ0E7O0FBQ0YsU0FBSyxVQUFMO0FBQ0VILE1BQUFBLFNBQVMsR0FBR1AsS0FBWjtBQUNBQSxNQUFBQSxLQUFLLEdBQUdPLFNBQVMsRUFBakI7QUFDQTs7QUFDRixTQUFLLFFBQUw7QUFDRSxVQUFJUCxLQUFKLEVBQVdFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSCxLQUFkO0FBQ1hPLE1BQUFBLFNBQVMsR0FBR1IsZUFBWjtBQUNBOztBQUNGO0FBQ0U7QUFuQko7O0FBc0JBLFNBQU87QUFDTFksSUFBQUEsR0FBRyxFQUFFLGFBQUNDLElBQUQ7QUFBQSxVQUFPQyxHQUFQLHVFQUFhYixLQUFiO0FBQUEsYUFBdUJhLEdBQXZCO0FBQUEsS0FEQTtBQUVMQyxJQUFBQSxHQUFHLEVBQUUsYUFBQ0YsSUFBRCxFQUFPQyxHQUFQLEVBQVlFLFFBQVo7QUFBQSxhQUF5QlIsU0FBUyxDQUFDTSxHQUFELEVBQU1FLFFBQU4sQ0FBbEM7QUFBQSxLQUZBO0FBR0xWLElBQUFBLE9BQU8sRUFDTEMsSUFBSSxLQUFLLFFBQVQsSUFBcUJBLElBQUksS0FBSyxXQUE5QixHQUNJLFVBQUNNLElBQUQsRUFBT0ksR0FBUCxFQUFZQyxVQUFaLEVBQTJCO0FBQ3pCLFVBQUlMLElBQUksQ0FBQ0ksR0FBRCxDQUFKLEtBQWNoQixLQUFsQixFQUF5QjtBQUN2QixZQUFNa0IsUUFBUSxHQUFHdEIsV0FBVyxDQUFDb0IsR0FBRCxDQUE1Qjs7QUFFQSxZQUFJSixJQUFJLENBQUNPLFlBQUwsQ0FBa0JELFFBQWxCLENBQUosRUFBaUM7QUFDL0IsY0FBTUUsU0FBUyxHQUFHUixJQUFJLENBQUNTLFlBQUwsQ0FBa0JILFFBQWxCLENBQWxCO0FBQ0FOLFVBQUFBLElBQUksQ0FBQ0ksR0FBRCxDQUFKLEdBQ0VJLFNBQVMsS0FBSyxFQUFkLElBQW9CYixTQUFTLEtBQUtHLE9BQWxDLEdBQTRDLElBQTVDLEdBQW1EVSxTQURyRDtBQUVEO0FBQ0Y7O0FBRUQsYUFBT2YsT0FBTyxJQUFJQSxPQUFPLENBQUNPLElBQUQsRUFBT0ksR0FBUCxFQUFZQyxVQUFaLENBQXpCO0FBQ0QsS0FiTCxHQWNJWjtBQWxCRCxHQUFQO0FBb0JEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FtZWxUb0Rhc2ggfSBmcm9tIFwiLi91dGlscy5qc1wiO1xuXG5jb25zdCBkZWZhdWx0VHJhbnNmb3JtID0gdiA9PiB2O1xuXG5jb25zdCBvYmplY3RUcmFuc2Zvcm0gPSB2YWx1ZSA9PiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoYEFzc2lnbmVkIHZhbHVlIG11c3QgYmUgYW4gb2JqZWN0OiAke3R5cGVvZiB2YWx1ZX1gKTtcbiAgfVxuICByZXR1cm4gdmFsdWUgJiYgT2JqZWN0LmZyZWV6ZSh2YWx1ZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9wZXJ0eSh2YWx1ZSwgY29ubmVjdCkge1xuICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBsZXQgdHJhbnNmb3JtID0gZGVmYXVsdFRyYW5zZm9ybTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICB0cmFuc2Zvcm0gPSBTdHJpbmc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICB0cmFuc2Zvcm0gPSBOdW1iZXI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgdHJhbnNmb3JtID0gQm9vbGVhbjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJmdW5jdGlvblwiOlxuICAgICAgdHJhbnNmb3JtID0gdmFsdWU7XG4gICAgICB2YWx1ZSA9IHRyYW5zZm9ybSgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgaWYgKHZhbHVlKSBPYmplY3QuZnJlZXplKHZhbHVlKTtcbiAgICAgIHRyYW5zZm9ybSA9IG9iamVjdFRyYW5zZm9ybTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0OiAoaG9zdCwgdmFsID0gdmFsdWUpID0+IHZhbCxcbiAgICBzZXQ6IChob3N0LCB2YWwsIG9sZFZhbHVlKSA9PiB0cmFuc2Zvcm0odmFsLCBvbGRWYWx1ZSksXG4gICAgY29ubmVjdDpcbiAgICAgIHR5cGUgIT09IFwib2JqZWN0XCIgJiYgdHlwZSAhPT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICA/IChob3N0LCBrZXksIGludmFsaWRhdGUpID0+IHtcbiAgICAgICAgICAgIGlmIChob3N0W2tleV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGF0dHJOYW1lID0gY2FtZWxUb0Rhc2goa2V5KTtcblxuICAgICAgICAgICAgICBpZiAoaG9zdC5oYXNBdHRyaWJ1dGUoYXR0ck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0clZhbHVlID0gaG9zdC5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgICAgICAgICAgIGhvc3Rba2V5XSA9XG4gICAgICAgICAgICAgICAgICBhdHRyVmFsdWUgPT09IFwiXCIgJiYgdHJhbnNmb3JtID09PSBCb29sZWFuID8gdHJ1ZSA6IGF0dHJWYWx1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY29ubmVjdCAmJiBjb25uZWN0KGhvc3QsIGtleSwgaW52YWxpZGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICA6IGNvbm5lY3QsXG4gIH07XG59XG4iXX0=
;// CONCATENATED MODULE: ./node_modules/hybrids/esm/render.js
function render_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function render_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { render_ownKeys(Object(source), true).forEach(function (key) { render_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { render_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function render_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function render_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { render_typeof = function _typeof(obj) { return typeof obj; }; } else { render_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return render_typeof(obj); }

function render(fn) {
  var customOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof fn !== "function") {
    throw TypeError("The first argument must be a function: ".concat(render_typeof(fn)));
  }

  var options = render_objectSpread({
    shadowRoot: true
  }, customOptions);

  var shadowRootInit = {
    mode: "open"
  };

  if (render_typeof(options.shadowRoot) === "object") {
    Object.assign(shadowRootInit, options.shadowRoot);
  }

  return {
    get: function get(host) {
      var update = fn(host);
      var target = host;

      if (options.shadowRoot) {
        if (!host.shadowRoot) host.attachShadow(shadowRootInit);
        target = host.shadowRoot;
      }

      return function flush() {
        update(host, target);
        return target;
      };
    },
    observe: function observe(host, flush) {
      flush();
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW5kZXIuanMiXSwibmFtZXMiOlsicmVuZGVyIiwiZm4iLCJjdXN0b21PcHRpb25zIiwiVHlwZUVycm9yIiwib3B0aW9ucyIsInNoYWRvd1Jvb3QiLCJzaGFkb3dSb290SW5pdCIsIm1vZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXQiLCJob3N0IiwidXBkYXRlIiwidGFyZ2V0IiwiYXR0YWNoU2hhZG93IiwiZmx1c2giLCJvYnNlcnZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLGVBQWUsU0FBU0EsTUFBVCxDQUFnQkMsRUFBaEIsRUFBd0M7QUFBQSxNQUFwQkMsYUFBb0IsdUVBQUosRUFBSTs7QUFDckQsTUFBSSxPQUFPRCxFQUFQLEtBQWMsVUFBbEIsRUFBOEI7QUFDNUIsVUFBTUUsU0FBUywwREFBa0RGLEVBQWxELEdBQWY7QUFDRDs7QUFFRCxNQUFNRyxPQUFPO0FBQUtDLElBQUFBLFVBQVUsRUFBRTtBQUFqQixLQUEwQkgsYUFBMUIsQ0FBYjs7QUFDQSxNQUFNSSxjQUFjLEdBQUc7QUFBRUMsSUFBQUEsSUFBSSxFQUFFO0FBQVIsR0FBdkI7O0FBRUEsTUFBSSxRQUFPSCxPQUFPLENBQUNDLFVBQWYsTUFBOEIsUUFBbEMsRUFBNEM7QUFDMUNHLElBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSCxjQUFkLEVBQThCRixPQUFPLENBQUNDLFVBQXRDO0FBQ0Q7O0FBRUQsU0FBTztBQUNMSyxJQUFBQSxHQURLLGVBQ0RDLElBREMsRUFDSztBQUNSLFVBQU1DLE1BQU0sR0FBR1gsRUFBRSxDQUFDVSxJQUFELENBQWpCO0FBQ0EsVUFBSUUsTUFBTSxHQUFHRixJQUFiOztBQUVBLFVBQUlQLE9BQU8sQ0FBQ0MsVUFBWixFQUF3QjtBQUN0QixZQUFJLENBQUNNLElBQUksQ0FBQ04sVUFBVixFQUFzQk0sSUFBSSxDQUFDRyxZQUFMLENBQWtCUixjQUFsQjtBQUN0Qk8sUUFBQUEsTUFBTSxHQUFHRixJQUFJLENBQUNOLFVBQWQ7QUFDRDs7QUFFRCxhQUFPLFNBQVNVLEtBQVQsR0FBaUI7QUFDdEJILFFBQUFBLE1BQU0sQ0FBQ0QsSUFBRCxFQUFPRSxNQUFQLENBQU47QUFDQSxlQUFPQSxNQUFQO0FBQ0QsT0FIRDtBQUlELEtBZEk7QUFlTEcsSUFBQUEsT0FmSyxtQkFlR0wsSUFmSCxFQWVTSSxLQWZULEVBZWdCO0FBQ25CQSxNQUFBQSxLQUFLO0FBQ047QUFqQkksR0FBUDtBQW1CRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcihmbiwgY3VzdG9tT3B0aW9ucyA9IHt9KSB7XG4gIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHRocm93IFR5cGVFcnJvcihgVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvbjogJHt0eXBlb2YgZm59YCk7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0geyBzaGFkb3dSb290OiB0cnVlLCAuLi5jdXN0b21PcHRpb25zIH07XG4gIGNvbnN0IHNoYWRvd1Jvb3RJbml0ID0geyBtb2RlOiBcIm9wZW5cIiB9O1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5zaGFkb3dSb290ID09PSBcIm9iamVjdFwiKSB7XG4gICAgT2JqZWN0LmFzc2lnbihzaGFkb3dSb290SW5pdCwgb3B0aW9ucy5zaGFkb3dSb290KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0KGhvc3QpIHtcbiAgICAgIGNvbnN0IHVwZGF0ZSA9IGZuKGhvc3QpO1xuICAgICAgbGV0IHRhcmdldCA9IGhvc3Q7XG5cbiAgICAgIGlmIChvcHRpb25zLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgaWYgKCFob3N0LnNoYWRvd1Jvb3QpIGhvc3QuYXR0YWNoU2hhZG93KHNoYWRvd1Jvb3RJbml0KTtcbiAgICAgICAgdGFyZ2V0ID0gaG9zdC5zaGFkb3dSb290O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgICAgIHVwZGF0ZShob3N0LCB0YXJnZXQpO1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgfTtcbiAgICB9LFxuICAgIG9ic2VydmUoaG9zdCwgZmx1c2gpIHtcbiAgICAgIGZsdXNoKCk7XG4gICAgfSxcbiAgfTtcbn1cbiJdfQ==
;// CONCATENATED MODULE: ./node_modules/hybrids/esm/emitter.js
var callbacks = new WeakMap();
var queue = new Set();

function execute() {
  try {
    queue.forEach(function (target) {
      try {
        callbacks.get(target)();
        queue.delete(target);
      } catch (e) {
        queue.delete(target);
        throw e;
      }
    });
  } catch (e) {
    if (queue.size) execute();
    throw e;
  }
}

function emitter_dispatch(target) {
  if (!queue.size) {
    requestAnimationFrame(execute);
  }

  queue.add(target);
}
function subscribe(target, cb) {
  callbacks.set(target, cb);
  emitter_dispatch(target);
  return function unsubscribe() {
    queue.delete(target);
    callbacks.delete(target);
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbWl0dGVyLmpzIl0sIm5hbWVzIjpbImNhbGxiYWNrcyIsIldlYWtNYXAiLCJxdWV1ZSIsIlNldCIsImV4ZWN1dGUiLCJmb3JFYWNoIiwidGFyZ2V0IiwiZ2V0IiwiZGVsZXRlIiwiZSIsInNpemUiLCJkaXNwYXRjaCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFkZCIsInN1YnNjcmliZSIsImNiIiwic2V0IiwidW5zdWJzY3JpYmUiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLFNBQVMsR0FBRyxJQUFJQyxPQUFKLEVBQWxCO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLElBQUlDLEdBQUosRUFBZDs7QUFFQSxTQUFTQyxPQUFULEdBQW1CO0FBQ2pCLE1BQUk7QUFDRkYsSUFBQUEsS0FBSyxDQUFDRyxPQUFOLENBQWMsVUFBQUMsTUFBTSxFQUFJO0FBQ3RCLFVBQUk7QUFDRk4sUUFBQUEsU0FBUyxDQUFDTyxHQUFWLENBQWNELE1BQWQ7QUFDQUosUUFBQUEsS0FBSyxDQUFDTSxNQUFOLENBQWFGLE1BQWI7QUFDRCxPQUhELENBR0UsT0FBT0csQ0FBUCxFQUFVO0FBQ1ZQLFFBQUFBLEtBQUssQ0FBQ00sTUFBTixDQUFhRixNQUFiO0FBQ0EsY0FBTUcsQ0FBTjtBQUNEO0FBQ0YsS0FSRDtBQVNELEdBVkQsQ0FVRSxPQUFPQSxDQUFQLEVBQVU7QUFDVixRQUFJUCxLQUFLLENBQUNRLElBQVYsRUFBZ0JOLE9BQU87QUFDdkIsVUFBTUssQ0FBTjtBQUNEO0FBQ0Y7O0FBRUQsT0FBTyxTQUFTRSxRQUFULENBQWtCTCxNQUFsQixFQUEwQjtBQUMvQixNQUFJLENBQUNKLEtBQUssQ0FBQ1EsSUFBWCxFQUFpQjtBQUNmRSxJQUFBQSxxQkFBcUIsQ0FBQ1IsT0FBRCxDQUFyQjtBQUNEOztBQUNERixFQUFBQSxLQUFLLENBQUNXLEdBQU4sQ0FBVVAsTUFBVjtBQUNEO0FBRUQsT0FBTyxTQUFTUSxTQUFULENBQW1CUixNQUFuQixFQUEyQlMsRUFBM0IsRUFBK0I7QUFDcENmLEVBQUFBLFNBQVMsQ0FBQ2dCLEdBQVYsQ0FBY1YsTUFBZCxFQUFzQlMsRUFBdEI7QUFDQUosRUFBQUEsUUFBUSxDQUFDTCxNQUFELENBQVI7QUFFQSxTQUFPLFNBQVNXLFdBQVQsR0FBdUI7QUFDNUJmLElBQUFBLEtBQUssQ0FBQ00sTUFBTixDQUFhRixNQUFiO0FBQ0FOLElBQUFBLFNBQVMsQ0FBQ1EsTUFBVixDQUFpQkYsTUFBakI7QUFDRCxHQUhEO0FBSUQiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYWxsYmFja3MgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgcXVldWUgPSBuZXcgU2V0KCk7XG5cbmZ1bmN0aW9uIGV4ZWN1dGUoKSB7XG4gIHRyeSB7XG4gICAgcXVldWUuZm9yRWFjaCh0YXJnZXQgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY2FsbGJhY2tzLmdldCh0YXJnZXQpKCk7XG4gICAgICAgIHF1ZXVlLmRlbGV0ZSh0YXJnZXQpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBxdWV1ZS5kZWxldGUodGFyZ2V0KTtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChxdWV1ZS5zaXplKSBleGVjdXRlKCk7XG4gICAgdGhyb3cgZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2godGFyZ2V0KSB7XG4gIGlmICghcXVldWUuc2l6ZSkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShleGVjdXRlKTtcbiAgfVxuICBxdWV1ZS5hZGQodGFyZ2V0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmliZSh0YXJnZXQsIGNiKSB7XG4gIGNhbGxiYWNrcy5zZXQodGFyZ2V0LCBjYik7XG4gIGRpc3BhdGNoKHRhcmdldCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgIHF1ZXVlLmRlbGV0ZSh0YXJnZXQpO1xuICAgIGNhbGxiYWNrcy5kZWxldGUodGFyZ2V0KTtcbiAgfTtcbn1cbiJdfQ==
;// CONCATENATED MODULE: ./node_modules/hybrids/esm/cache.js

var entries = new WeakMap();
function getEntry(target, key) {
  var targetMap = entries.get(target);

  if (!targetMap) {
    targetMap = new Map();
    entries.set(target, targetMap);
  }

  var entry = targetMap.get(key);

  if (!entry) {
    entry = {
      target: target,
      key: key,
      value: undefined,
      contexts: undefined,
      deps: undefined,
      state: 0,
      checksum: 0,
      observed: false
    };
    targetMap.set(key, entry);
  }

  return entry;
}
function getEntries(target) {
  var result = [];
  var targetMap = entries.get(target);

  if (targetMap) {
    targetMap.forEach(function (entry) {
      result.push(entry);
    });
  }

  return result;
}

function calculateChecksum(entry) {
  var checksum = entry.state;

  if (entry.deps) {
    entry.deps.forEach(function (depEntry) {
      checksum += depEntry.state;
    });
  }

  return checksum;
}

function dispatchDeep(entry) {
  if (entry.observed) emitter_dispatch(entry);
  if (entry.contexts) entry.contexts.forEach(dispatchDeep);
}

function restoreDeepDeps(entry, deps) {
  if (deps) {
    deps.forEach(function (depEntry) {
      entry.deps.add(depEntry);

      if (entry.observed) {
        /* istanbul ignore if */
        if (!depEntry.contexts) depEntry.contexts = new Set();
        depEntry.contexts.add(entry);
      }

      restoreDeepDeps(entry, depEntry.deps);
    });
  }
}

var contextStack = new Set();
function cache_get(target, key, getter, validate) {
  var entry = getEntry(target, key);

  if (contextStack.size && contextStack.has(entry)) {
    throw Error("Circular get invocation is forbidden: '".concat(key, "'"));
  }

  contextStack.forEach(function (context) {
    if (!context.deps) context.deps = new Set();
    context.deps.add(entry);

    if (context.observed) {
      if (!entry.contexts) entry.contexts = new Set();
      entry.contexts.add(context);
    }
  });

  if ((validate && validate(entry.value) || !validate) && entry.checksum && entry.checksum === calculateChecksum(entry)) {
    return entry.value;
  }

  try {
    contextStack.add(entry);

    if (entry.observed && entry.deps && entry.deps.size) {
      entry.deps.forEach(function (depEntry) {
        /* istanbul ignore else */
        if (depEntry.contexts) depEntry.contexts.delete(entry);
      });
    }

    entry.deps = undefined;
    var nextValue = getter(target, entry.value);

    if (entry.deps) {
      entry.deps.forEach(function (depEntry) {
        restoreDeepDeps(entry, depEntry.deps);
      });
    }

    if (nextValue !== entry.value) {
      entry.state += 1;
      entry.value = nextValue;
      dispatchDeep(entry);
    }

    entry.checksum = calculateChecksum(entry);
    contextStack.delete(entry);
  } catch (e) {
    entry.checksum = 0;
    contextStack.delete(entry);
    contextStack.forEach(function (context) {
      context.deps.delete(entry);
      if (context.observed) entry.contexts.delete(context);
    });
    throw e;
  }

  return entry.value;
}
function cache_set(target, key, setter, value) {
  var entry = getEntry(target, key);
  var newValue = setter(target, value, entry.value);

  if (newValue !== entry.value) {
    entry.checksum = 0;
    entry.state += 1;
    entry.value = newValue;
    dispatchDeep(entry);
  }
}
var gcList = new Set();

function deleteEntry(entry) {
  if (!gcList.size) {
    requestAnimationFrame(function () {
      gcList.forEach(function (e) {
        if (!e.contexts || e.contexts && e.contexts.size === 0) {
          var targetMap = entries.get(e.target);
          targetMap.delete(e.key);
        }
      });
      gcList.clear();
    });
  }

  gcList.add(entry);
}

function invalidateEntry(entry, clearValue, deleteValue) {
  entry.checksum = 0;
  entry.state += 1;
  dispatchDeep(entry);
  if (deleteValue) deleteEntry(entry);

  if (clearValue) {
    entry.value = undefined;
  }
}

function invalidate(target, key, clearValue, deleteValue) {
  if (contextStack.size) {
    throw Error("Invalidating property in chain of get calls is forbidden: '".concat(key, "'"));
  }

  var entry = getEntry(target, key);
  invalidateEntry(entry, clearValue, deleteValue);
}
function invalidateAll(target, clearValue, deleteValue) {
  if (contextStack.size) {
    throw Error("Invalidating all properties in chain of get calls is forbidden");
  }

  var targetMap = entries.get(target);

  if (targetMap) {
    targetMap.forEach(function (entry) {
      invalidateEntry(entry, clearValue, deleteValue);
    });
  }
}
function observe(target, key, getter, fn) {
  var entry = getEntry(target, key);
  entry.observed = true;
  var lastValue;
  var unsubscribe = subscribe(entry, function () {
    var value = cache_get(target, key, getter);

    if (value !== lastValue) {
      fn(target, value, lastValue);
      lastValue = value;
    }
  });

  if (entry.deps) {
    entry.deps.forEach(function (depEntry) {
      /* istanbul ignore else */
      if (!depEntry.contexts) depEntry.contexts = new Set();
      depEntry.contexts.add(entry);
    });
  }

  return function unobserve() {
    unsubscribe();
    entry.observed = false;

    if (entry.deps && entry.deps.size) {
      entry.deps.forEach(function (depEntry) {
        /* istanbul ignore else */
        if (depEntry.contexts) depEntry.contexts.delete(entry);
      });
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jYWNoZS5qcyJdLCJuYW1lcyI6WyJlbWl0dGVyIiwiZW50cmllcyIsIldlYWtNYXAiLCJnZXRFbnRyeSIsInRhcmdldCIsImtleSIsInRhcmdldE1hcCIsImdldCIsIk1hcCIsInNldCIsImVudHJ5IiwidmFsdWUiLCJ1bmRlZmluZWQiLCJjb250ZXh0cyIsImRlcHMiLCJzdGF0ZSIsImNoZWNrc3VtIiwib2JzZXJ2ZWQiLCJnZXRFbnRyaWVzIiwicmVzdWx0IiwiZm9yRWFjaCIsInB1c2giLCJjYWxjdWxhdGVDaGVja3N1bSIsImRlcEVudHJ5IiwiZGlzcGF0Y2hEZWVwIiwiZGlzcGF0Y2giLCJyZXN0b3JlRGVlcERlcHMiLCJhZGQiLCJTZXQiLCJjb250ZXh0U3RhY2siLCJnZXR0ZXIiLCJ2YWxpZGF0ZSIsInNpemUiLCJoYXMiLCJFcnJvciIsImNvbnRleHQiLCJkZWxldGUiLCJuZXh0VmFsdWUiLCJlIiwic2V0dGVyIiwibmV3VmFsdWUiLCJnY0xpc3QiLCJkZWxldGVFbnRyeSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNsZWFyIiwiaW52YWxpZGF0ZUVudHJ5IiwiY2xlYXJWYWx1ZSIsImRlbGV0ZVZhbHVlIiwiaW52YWxpZGF0ZSIsImludmFsaWRhdGVBbGwiLCJvYnNlcnZlIiwiZm4iLCJsYXN0VmFsdWUiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsInVub2JzZXJ2ZSJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLQSxPQUFaLE1BQXlCLGNBQXpCO0FBRUEsSUFBTUMsT0FBTyxHQUFHLElBQUlDLE9BQUosRUFBaEI7QUFDQSxPQUFPLFNBQVNDLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCQyxHQUExQixFQUErQjtBQUNwQyxNQUFJQyxTQUFTLEdBQUdMLE9BQU8sQ0FBQ00sR0FBUixDQUFZSCxNQUFaLENBQWhCOztBQUNBLE1BQUksQ0FBQ0UsU0FBTCxFQUFnQjtBQUNkQSxJQUFBQSxTQUFTLEdBQUcsSUFBSUUsR0FBSixF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QXRCO0FBQ0QsS0FKRDtBQUtEOztBQUVELFNBQU8sU0FBUzZDLFNBQVQsR0FBcUI7QUFDMUJGLElBQUFBLFdBQVc7QUFDWDNDLElBQUFBLEtBQUssQ0FBQ08sUUFBTixHQUFpQixLQUFqQjs7QUFDQSxRQUFJUCxLQUFLLENBQUNJLElBQU4sSUFBY0osS0FBSyxDQUFDSSxJQUFOLENBQVdrQixJQUE3QixFQUFtQztBQUNqQ3RCLE1BQUFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXTSxPQUFYLENBQW1CLFVBQUFHLFFBQVEsRUFBSTtBQUM3QjtBQUNBLFlBQUlBLFFBQVEsQ0FBQ1YsUUFBYixFQUF1QlUsUUFBUSxDQUFDVixRQUFULENBQWtCdUIsTUFBbEIsQ0FBeUIxQixLQUF6QjtBQUN4QixPQUhEO0FBSUQ7QUFDRixHQVREO0FBVUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBlbWl0dGVyIGZyb20gXCIuL2VtaXR0ZXIuanNcIjtcblxuY29uc3QgZW50cmllcyA9IG5ldyBXZWFrTWFwKCk7XG5leHBvcnQgZnVuY3Rpb24gZ2V0RW50cnkodGFyZ2V0LCBrZXkpIHtcbiAgbGV0IHRhcmdldE1hcCA9IGVudHJpZXMuZ2V0KHRhcmdldCk7XG4gIGlmICghdGFyZ2V0TWFwKSB7XG4gICAgdGFyZ2V0TWFwID0gbmV3IE1hcCgpO1xuICAgIGVudHJpZXMuc2V0KHRhcmdldCwgdGFyZ2V0TWFwKTtcbiAgfVxuXG4gIGxldCBlbnRyeSA9IHRhcmdldE1hcC5nZXQoa2V5KTtcblxuICBpZiAoIWVudHJ5KSB7XG4gICAgZW50cnkgPSB7XG4gICAgICB0YXJnZXQsXG4gICAgICBrZXksXG4gICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgY29udGV4dHM6IHVuZGVmaW5lZCxcbiAgICAgIGRlcHM6IHVuZGVmaW5lZCxcbiAgICAgIHN0YXRlOiAwLFxuICAgICAgY2hlY2tzdW06IDAsXG4gICAgICBvYnNlcnZlZDogZmFsc2UsXG4gICAgfTtcbiAgICB0YXJnZXRNYXAuc2V0KGtleSwgZW50cnkpO1xuICB9XG5cbiAgcmV0dXJuIGVudHJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW50cmllcyh0YXJnZXQpIHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGNvbnN0IHRhcmdldE1hcCA9IGVudHJpZXMuZ2V0KHRhcmdldCk7XG4gIGlmICh0YXJnZXRNYXApIHtcbiAgICB0YXJnZXRNYXAuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICByZXN1bHQucHVzaChlbnRyeSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlQ2hlY2tzdW0oZW50cnkpIHtcbiAgbGV0IGNoZWNrc3VtID0gZW50cnkuc3RhdGU7XG4gIGlmIChlbnRyeS5kZXBzKSB7XG4gICAgZW50cnkuZGVwcy5mb3JFYWNoKGRlcEVudHJ5ID0+IHtcbiAgICAgIGNoZWNrc3VtICs9IGRlcEVudHJ5LnN0YXRlO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNoZWNrc3VtO1xufVxuXG5mdW5jdGlvbiBkaXNwYXRjaERlZXAoZW50cnkpIHtcbiAgaWYgKGVudHJ5Lm9ic2VydmVkKSBlbWl0dGVyLmRpc3BhdGNoKGVudHJ5KTtcbiAgaWYgKGVudHJ5LmNvbnRleHRzKSBlbnRyeS5jb250ZXh0cy5mb3JFYWNoKGRpc3BhdGNoRGVlcCk7XG59XG5cbmZ1bmN0aW9uIHJlc3RvcmVEZWVwRGVwcyhlbnRyeSwgZGVwcykge1xuICBpZiAoZGVwcykge1xuICAgIGRlcHMuZm9yRWFjaChkZXBFbnRyeSA9PiB7XG4gICAgICBlbnRyeS5kZXBzLmFkZChkZXBFbnRyeSk7XG5cbiAgICAgIGlmIChlbnRyeS5vYnNlcnZlZCkge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKCFkZXBFbnRyeS5jb250ZXh0cykgZGVwRW50cnkuY29udGV4dHMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGRlcEVudHJ5LmNvbnRleHRzLmFkZChlbnRyeSk7XG4gICAgICB9XG5cbiAgICAgIHJlc3RvcmVEZWVwRGVwcyhlbnRyeSwgZGVwRW50cnkuZGVwcyk7XG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgY29udGV4dFN0YWNrID0gbmV3IFNldCgpO1xuZXhwb3J0IGZ1bmN0aW9uIGdldCh0YXJnZXQsIGtleSwgZ2V0dGVyLCB2YWxpZGF0ZSkge1xuICBjb25zdCBlbnRyeSA9IGdldEVudHJ5KHRhcmdldCwga2V5KTtcblxuICBpZiAoY29udGV4dFN0YWNrLnNpemUgJiYgY29udGV4dFN0YWNrLmhhcyhlbnRyeSkpIHtcbiAgICB0aHJvdyBFcnJvcihgQ2lyY3VsYXIgZ2V0IGludm9jYXRpb24gaXMgZm9yYmlkZGVuOiAnJHtrZXl9J2ApO1xuICB9XG5cbiAgY29udGV4dFN0YWNrLmZvckVhY2goY29udGV4dCA9PiB7XG4gICAgaWYgKCFjb250ZXh0LmRlcHMpIGNvbnRleHQuZGVwcyA9IG5ldyBTZXQoKTtcbiAgICBjb250ZXh0LmRlcHMuYWRkKGVudHJ5KTtcblxuICAgIGlmIChjb250ZXh0Lm9ic2VydmVkKSB7XG4gICAgICBpZiAoIWVudHJ5LmNvbnRleHRzKSBlbnRyeS5jb250ZXh0cyA9IG5ldyBTZXQoKTtcbiAgICAgIGVudHJ5LmNvbnRleHRzLmFkZChjb250ZXh0KTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChcbiAgICAoKHZhbGlkYXRlICYmIHZhbGlkYXRlKGVudHJ5LnZhbHVlKSkgfHwgIXZhbGlkYXRlKSAmJlxuICAgIGVudHJ5LmNoZWNrc3VtICYmXG4gICAgZW50cnkuY2hlY2tzdW0gPT09IGNhbGN1bGF0ZUNoZWNrc3VtKGVudHJ5KVxuICApIHtcbiAgICByZXR1cm4gZW50cnkudmFsdWU7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnRleHRTdGFjay5hZGQoZW50cnkpO1xuXG4gICAgaWYgKGVudHJ5Lm9ic2VydmVkICYmIGVudHJ5LmRlcHMgJiYgZW50cnkuZGVwcy5zaXplKSB7XG4gICAgICBlbnRyeS5kZXBzLmZvckVhY2goZGVwRW50cnkgPT4ge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICBpZiAoZGVwRW50cnkuY29udGV4dHMpIGRlcEVudHJ5LmNvbnRleHRzLmRlbGV0ZShlbnRyeSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBlbnRyeS5kZXBzID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IG5leHRWYWx1ZSA9IGdldHRlcih0YXJnZXQsIGVudHJ5LnZhbHVlKTtcblxuICAgIGlmIChlbnRyeS5kZXBzKSB7XG4gICAgICBlbnRyeS5kZXBzLmZvckVhY2goZGVwRW50cnkgPT4ge1xuICAgICAgICByZXN0b3JlRGVlcERlcHMoZW50cnksIGRlcEVudHJ5LmRlcHMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG5leHRWYWx1ZSAhPT0gZW50cnkudmFsdWUpIHtcbiAgICAgIGVudHJ5LnN0YXRlICs9IDE7XG4gICAgICBlbnRyeS52YWx1ZSA9IG5leHRWYWx1ZTtcblxuICAgICAgZGlzcGF0Y2hEZWVwKGVudHJ5KTtcbiAgICB9XG5cbiAgICBlbnRyeS5jaGVja3N1bSA9IGNhbGN1bGF0ZUNoZWNrc3VtKGVudHJ5KTtcbiAgICBjb250ZXh0U3RhY2suZGVsZXRlKGVudHJ5KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGVudHJ5LmNoZWNrc3VtID0gMDtcblxuICAgIGNvbnRleHRTdGFjay5kZWxldGUoZW50cnkpO1xuICAgIGNvbnRleHRTdGFjay5mb3JFYWNoKGNvbnRleHQgPT4ge1xuICAgICAgY29udGV4dC5kZXBzLmRlbGV0ZShlbnRyeSk7XG4gICAgICBpZiAoY29udGV4dC5vYnNlcnZlZCkgZW50cnkuY29udGV4dHMuZGVsZXRlKGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhyb3cgZTtcbiAgfVxuXG4gIHJldHVybiBlbnRyeS52YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldCh0YXJnZXQsIGtleSwgc2V0dGVyLCB2YWx1ZSkge1xuICBjb25zdCBlbnRyeSA9IGdldEVudHJ5KHRhcmdldCwga2V5KTtcbiAgY29uc3QgbmV3VmFsdWUgPSBzZXR0ZXIodGFyZ2V0LCB2YWx1ZSwgZW50cnkudmFsdWUpO1xuXG4gIGlmIChuZXdWYWx1ZSAhPT0gZW50cnkudmFsdWUpIHtcbiAgICBlbnRyeS5jaGVja3N1bSA9IDA7XG4gICAgZW50cnkuc3RhdGUgKz0gMTtcbiAgICBlbnRyeS52YWx1ZSA9IG5ld1ZhbHVlO1xuXG4gICAgZGlzcGF0Y2hEZWVwKGVudHJ5KTtcbiAgfVxufVxuXG5jb25zdCBnY0xpc3QgPSBuZXcgU2V0KCk7XG5mdW5jdGlvbiBkZWxldGVFbnRyeShlbnRyeSkge1xuICBpZiAoIWdjTGlzdC5zaXplKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGdjTGlzdC5mb3JFYWNoKGUgPT4ge1xuICAgICAgICBpZiAoIWUuY29udGV4dHMgfHwgKGUuY29udGV4dHMgJiYgZS5jb250ZXh0cy5zaXplID09PSAwKSkge1xuICAgICAgICAgIGNvbnN0IHRhcmdldE1hcCA9IGVudHJpZXMuZ2V0KGUudGFyZ2V0KTtcbiAgICAgICAgICB0YXJnZXRNYXAuZGVsZXRlKGUua2V5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBnY0xpc3QuY2xlYXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdjTGlzdC5hZGQoZW50cnkpO1xufVxuXG5mdW5jdGlvbiBpbnZhbGlkYXRlRW50cnkoZW50cnksIGNsZWFyVmFsdWUsIGRlbGV0ZVZhbHVlKSB7XG4gIGVudHJ5LmNoZWNrc3VtID0gMDtcbiAgZW50cnkuc3RhdGUgKz0gMTtcblxuICBkaXNwYXRjaERlZXAoZW50cnkpO1xuICBpZiAoZGVsZXRlVmFsdWUpIGRlbGV0ZUVudHJ5KGVudHJ5KTtcblxuICBpZiAoY2xlYXJWYWx1ZSkge1xuICAgIGVudHJ5LnZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkYXRlKHRhcmdldCwga2V5LCBjbGVhclZhbHVlLCBkZWxldGVWYWx1ZSkge1xuICBpZiAoY29udGV4dFN0YWNrLnNpemUpIHtcbiAgICB0aHJvdyBFcnJvcihcbiAgICAgIGBJbnZhbGlkYXRpbmcgcHJvcGVydHkgaW4gY2hhaW4gb2YgZ2V0IGNhbGxzIGlzIGZvcmJpZGRlbjogJyR7a2V5fSdgLFxuICAgICk7XG4gIH1cblxuICBjb25zdCBlbnRyeSA9IGdldEVudHJ5KHRhcmdldCwga2V5KTtcbiAgaW52YWxpZGF0ZUVudHJ5KGVudHJ5LCBjbGVhclZhbHVlLCBkZWxldGVWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkYXRlQWxsKHRhcmdldCwgY2xlYXJWYWx1ZSwgZGVsZXRlVmFsdWUpIHtcbiAgaWYgKGNvbnRleHRTdGFjay5zaXplKSB7XG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICBcIkludmFsaWRhdGluZyBhbGwgcHJvcGVydGllcyBpbiBjaGFpbiBvZiBnZXQgY2FsbHMgaXMgZm9yYmlkZGVuXCIsXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IHRhcmdldE1hcCA9IGVudHJpZXMuZ2V0KHRhcmdldCk7XG4gIGlmICh0YXJnZXRNYXApIHtcbiAgICB0YXJnZXRNYXAuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICBpbnZhbGlkYXRlRW50cnkoZW50cnksIGNsZWFyVmFsdWUsIGRlbGV0ZVZhbHVlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZSh0YXJnZXQsIGtleSwgZ2V0dGVyLCBmbikge1xuICBjb25zdCBlbnRyeSA9IGdldEVudHJ5KHRhcmdldCwga2V5KTtcbiAgZW50cnkub2JzZXJ2ZWQgPSB0cnVlO1xuXG4gIGxldCBsYXN0VmFsdWU7XG4gIGNvbnN0IHVuc3Vic2NyaWJlID0gZW1pdHRlci5zdWJzY3JpYmUoZW50cnksICgpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGdldCh0YXJnZXQsIGtleSwgZ2V0dGVyKTtcbiAgICBpZiAodmFsdWUgIT09IGxhc3RWYWx1ZSkge1xuICAgICAgZm4odGFyZ2V0LCB2YWx1ZSwgbGFzdFZhbHVlKTtcbiAgICAgIGxhc3RWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGVudHJ5LmRlcHMpIHtcbiAgICBlbnRyeS5kZXBzLmZvckVhY2goZGVwRW50cnkgPT4ge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmICghZGVwRW50cnkuY29udGV4dHMpIGRlcEVudHJ5LmNvbnRleHRzID0gbmV3IFNldCgpO1xuICAgICAgZGVwRW50cnkuY29udGV4dHMuYWRkKGVudHJ5KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgdW5zdWJzY3JpYmUoKTtcbiAgICBlbnRyeS5vYnNlcnZlZCA9IGZhbHNlO1xuICAgIGlmIChlbnRyeS5kZXBzICYmIGVudHJ5LmRlcHMuc2l6ZSkge1xuICAgICAgZW50cnkuZGVwcy5mb3JFYWNoKGRlcEVudHJ5ID0+IHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgaWYgKGRlcEVudHJ5LmNvbnRleHRzKSBkZXBFbnRyeS5jb250ZXh0cy5kZWxldGUoZW50cnkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuIl19
;// CONCATENATED MODULE: ./node_modules/hybrids/esm/define.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (define_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function define_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { define_typeof = function _typeof(obj) { return typeof obj; }; } else { define_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return define_typeof(obj); }





/* istanbul ignore next */

try {
  process.env.NODE_ENV;
} catch (e) {
  var process = {
    env: {
      NODE_ENV: 'production'
    }
  };
} // eslint-disable-line


var defaultMethod = function defaultMethod(host, value) {
  return value;
};

var callbacksMap = new WeakMap();
var propsMap = new WeakMap();

function compile(Hybrid, descriptors) {
  Hybrid.hybrids = descriptors;
  var callbacks = [];
  var props = Object.keys(descriptors);
  callbacksMap.set(Hybrid, callbacks);
  propsMap.set(Hybrid, props);
  props.forEach(function (key) {
    var desc = descriptors[key];

    var type = define_typeof(desc);

    var config;

    if (type === "function") {
      config = key === "render" ? render(desc) : {
        get: desc
      };
    } else if (type !== "object" || desc === null || Array.isArray(desc)) {
      config = property(desc);
    } else {
      config = {
        get: desc.get || defaultMethod,
        set: desc.set || !desc.get && defaultMethod || undefined,
        connect: desc.connect,
        observe: desc.observe
      };
    }

    Object.defineProperty(Hybrid.prototype, key, {
      get: function get() {
        return cache_get(this, key, config.get);
      },
      set: config.set && function set(newValue) {
        cache_set(this, key, config.set, newValue);
      },
      enumerable: true,
      configurable: process.env.NODE_ENV !== "production"
    });

    if (config.observe) {
      callbacks.unshift(function (host) {
        return observe(host, key, config.get, config.observe);
      });
    }

    if (config.connect) {
      callbacks.push(function (host) {
        return config.connect(host, key, function () {
          invalidate(host, key);
        });
      });
    }
  });
}

var update;
/* istanbul ignore else */

if (process.env.NODE_ENV !== "production") {
  var walkInShadow = function walkInShadow(node, fn) {
    fn(node);
    Array.from(node.children).forEach(function (el) {
      return walkInShadow(el, fn);
    });

    if (node.shadowRoot) {
      Array.from(node.shadowRoot.children).forEach(function (el) {
        return walkInShadow(el, fn);
      });
    }
  };

  var updateQueue = new Map();

  update = function update(Hybrid, lastHybrids) {
    if (!updateQueue.size) {
      deferred.then(function () {
        walkInShadow(document.body, function (node) {
          if (updateQueue.has(node.constructor)) {
            var hybrids = updateQueue.get(node.constructor);
            node.disconnectedCallback();
            Object.keys(node.constructor.hybrids).forEach(function (key) {
              invalidate(node, key, node.constructor.hybrids[key] !== hybrids[key]);
            });
            node.connectedCallback();
          }
        });
        updateQueue.clear();
      });
    }

    updateQueue.set(Hybrid, lastHybrids);
  };
}

var disconnects = new WeakMap();

function defineElement(tagName, hybridsOrConstructor) {
  var type = define_typeof(hybridsOrConstructor);

  if (type !== "object" && type !== "function") {
    throw TypeError("Second argument must be an object or a function: ".concat(type));
  }

  if (tagName !== null) {
    var CustomElement = window.customElements.get(tagName);

    if (type === "function") {
      if (CustomElement !== hybridsOrConstructor) {
        return window.customElements.define(tagName, hybridsOrConstructor);
      }

      return CustomElement;
    }

    if (CustomElement) {
      if (CustomElement.hybrids === hybridsOrConstructor) {
        return CustomElement;
      }

      if (process.env.NODE_ENV !== "production" && CustomElement.hybrids) {
        Object.keys(CustomElement.hybrids).forEach(function (key) {
          delete CustomElement.prototype[key];
        });
        var lastHybrids = CustomElement.hybrids;
        compile(CustomElement, hybridsOrConstructor);
        update(CustomElement, lastHybrids);
        return CustomElement;
      }

      throw Error("Element '".concat(tagName, "' already defined"));
    }
  }

  var Hybrid = /*#__PURE__*/function (_HTMLElement) {
    _inherits(Hybrid, _HTMLElement);

    var _super = _createSuper(Hybrid);

    function Hybrid() {
      var _this;

      _classCallCheck(this, Hybrid);

      _this = _super.call(this);
      var props = propsMap.get(Hybrid);

      for (var index = 0; index < props.length; index += 1) {
        var key = props[index];

        if (Object.prototype.hasOwnProperty.call(_assertThisInitialized(_this), key)) {
          var value = _this[key];
          delete _this[key];
          _this[key] = value;
        }
      }

      return _this;
    }

    _createClass(Hybrid, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var callbacks = callbacksMap.get(Hybrid);
        var list = [];

        for (var index = 0; index < callbacks.length; index += 1) {
          var cb = callbacks[index](this);
          if (cb) list.push(cb);
        }

        disconnects.set(this, list);
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        var list = disconnects.get(this);

        for (var index = 0; index < list.length; index += 1) {
          list[index]();
        }
      }
    }]);

    return Hybrid;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

  compile(Hybrid, hybridsOrConstructor);

  if (tagName !== null) {
    Object.defineProperty(Hybrid, "name", {
      get: function get() {
        return tagName;
      }
    });
    customElements.define(tagName, Hybrid);
  }

  return Hybrid;
}

function defineMap(elements) {
  return Object.keys(elements).reduce(function (acc, key) {
    var tagName = pascalToDash(key);
    acc[key] = defineElement(tagName, elements[key]);
    return acc;
  }, {});
}

function define_define() {
  if (define_typeof(arguments.length <= 0 ? undefined : arguments[0]) === "object" && (arguments.length <= 0 ? undefined : arguments[0]) !== null) {
    return defineMap(arguments.length <= 0 ? undefined : arguments[0]);
  }

  return defineElement.apply(void 0, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZpbmUuanMiXSwibmFtZXMiOlsicHJvcGVydHkiLCJyZW5kZXIiLCJjYWNoZSIsInBhc2NhbFRvRGFzaCIsImRlZmVycmVkIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiZSIsImRlZmF1bHRNZXRob2QiLCJob3N0IiwidmFsdWUiLCJjYWxsYmFja3NNYXAiLCJXZWFrTWFwIiwicHJvcHNNYXAiLCJjb21waWxlIiwiSHlicmlkIiwiZGVzY3JpcHRvcnMiLCJoeWJyaWRzIiwiY2FsbGJhY2tzIiwicHJvcHMiLCJPYmplY3QiLCJrZXlzIiwic2V0IiwiZm9yRWFjaCIsImtleSIsImRlc2MiLCJ0eXBlIiwiY29uZmlnIiwiZ2V0IiwiQXJyYXkiLCJpc0FycmF5IiwidW5kZWZpbmVkIiwiY29ubmVjdCIsIm9ic2VydmUiLCJkZWZpbmVQcm9wZXJ0eSIsInByb3RvdHlwZSIsIm5ld1ZhbHVlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsInVuc2hpZnQiLCJwdXNoIiwiaW52YWxpZGF0ZSIsInVwZGF0ZSIsIndhbGtJblNoYWRvdyIsIm5vZGUiLCJmbiIsImZyb20iLCJjaGlsZHJlbiIsImVsIiwic2hhZG93Um9vdCIsInVwZGF0ZVF1ZXVlIiwiTWFwIiwibGFzdEh5YnJpZHMiLCJzaXplIiwidGhlbiIsImRvY3VtZW50IiwiYm9keSIsImhhcyIsImNvbnN0cnVjdG9yIiwiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCJjb25uZWN0ZWRDYWxsYmFjayIsImNsZWFyIiwiZGlzY29ubmVjdHMiLCJkZWZpbmVFbGVtZW50IiwidGFnTmFtZSIsImh5YnJpZHNPckNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiQ3VzdG9tRWxlbWVudCIsIndpbmRvdyIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiRXJyb3IiLCJpbmRleCIsImxlbmd0aCIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImxpc3QiLCJjYiIsIkhUTUxFbGVtZW50IiwiZGVmaW5l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Q0MsSUFBUCxDQUFZMkQsUUFBWixFQUFzQkMsTUFBdEIsQ0FBNkIsVUFBQ0MsR0FBRCxFQUFNMUQsR0FBTixFQUFjO0FBQ2hELFFBQU13QyxPQUFPLEdBQUc5RCxZQUFZLENBQUNzQixHQUFELENBQTVCO0FBQ0EwRCxJQUFBQSxHQUFHLENBQUMxRCxHQUFELENBQUgsR0FBV3VDLGFBQWEsQ0FBQ0MsT0FBRCxFQUFVZ0IsUUFBUSxDQUFDeEQsR0FBRCxDQUFsQixDQUF4QjtBQUVBLFdBQU8wRCxHQUFQO0FBQ0QsR0FMTSxFQUtKLEVBTEksQ0FBUDtBQU1EOztBQUVELGVBQWUsU0FBU1osTUFBVCxHQUF5QjtBQUN0QyxNQUFJLDhEQUFtQixRQUFuQixJQUErQix1REFBWSxJQUEvQyxFQUFxRDtBQUNuRCxXQUFPUyxTQUFTLGtEQUFoQjtBQUNEOztBQUVELFNBQU9oQixhQUFhLE1BQWIsbUJBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9wZXJ0eSBmcm9tIFwiLi9wcm9wZXJ0eS5qc1wiO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9yZW5kZXIuanNcIjtcblxuaW1wb3J0ICogYXMgY2FjaGUgZnJvbSBcIi4vY2FjaGUuanNcIjtcbmltcG9ydCB7IHBhc2NhbFRvRGFzaCwgZGVmZXJyZWQgfSBmcm9tIFwiLi91dGlscy5qc1wiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xudHJ5IHsgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfSBjYXRjaChlKSB7IHZhciBwcm9jZXNzID0geyBlbnY6IHsgTk9ERV9FTlY6ICdwcm9kdWN0aW9uJyB9IH07IH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5jb25zdCBkZWZhdWx0TWV0aG9kID0gKGhvc3QsIHZhbHVlKSA9PiB2YWx1ZTtcblxuY29uc3QgY2FsbGJhY2tzTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHByb3BzTWFwID0gbmV3IFdlYWtNYXAoKTtcblxuZnVuY3Rpb24gY29tcGlsZShIeWJyaWQsIGRlc2NyaXB0b3JzKSB7XG4gIEh5YnJpZC5oeWJyaWRzID0gZGVzY3JpcHRvcnM7XG5cbiAgY29uc3QgY2FsbGJhY2tzID0gW107XG4gIGNvbnN0IHByb3BzID0gT2JqZWN0LmtleXMoZGVzY3JpcHRvcnMpO1xuXG4gIGNhbGxiYWNrc01hcC5zZXQoSHlicmlkLCBjYWxsYmFja3MpO1xuICBwcm9wc01hcC5zZXQoSHlicmlkLCBwcm9wcyk7XG5cbiAgcHJvcHMuZm9yRWFjaChrZXkgPT4ge1xuICAgIGNvbnN0IGRlc2MgPSBkZXNjcmlwdG9yc1trZXldO1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgZGVzYztcblxuICAgIGxldCBjb25maWc7XG5cbiAgICBpZiAodHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBjb25maWcgPSBrZXkgPT09IFwicmVuZGVyXCIgPyByZW5kZXIoZGVzYykgOiB7IGdldDogZGVzYyB9O1xuICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gXCJvYmplY3RcIiB8fCBkZXNjID09PSBudWxsIHx8IEFycmF5LmlzQXJyYXkoZGVzYykpIHtcbiAgICAgIGNvbmZpZyA9IHByb3BlcnR5KGRlc2MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcgPSB7XG4gICAgICAgIGdldDogZGVzYy5nZXQgfHwgZGVmYXVsdE1ldGhvZCxcbiAgICAgICAgc2V0OiBkZXNjLnNldCB8fCAoIWRlc2MuZ2V0ICYmIGRlZmF1bHRNZXRob2QpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgY29ubmVjdDogZGVzYy5jb25uZWN0LFxuICAgICAgICBvYnNlcnZlOiBkZXNjLm9ic2VydmUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShIeWJyaWQucHJvdG90eXBlLCBrZXksIHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gY2FjaGUuZ2V0KHRoaXMsIGtleSwgY29uZmlnLmdldCk7XG4gICAgICB9LFxuICAgICAgc2V0OlxuICAgICAgICBjb25maWcuc2V0ICYmXG4gICAgICAgIGZ1bmN0aW9uIHNldChuZXdWYWx1ZSkge1xuICAgICAgICAgIGNhY2hlLnNldCh0aGlzLCBrZXksIGNvbmZpZy5zZXQsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIixcbiAgICB9KTtcblxuICAgIGlmIChjb25maWcub2JzZXJ2ZSkge1xuICAgICAgY2FsbGJhY2tzLnVuc2hpZnQoaG9zdCA9PlxuICAgICAgICBjYWNoZS5vYnNlcnZlKGhvc3QsIGtleSwgY29uZmlnLmdldCwgY29uZmlnLm9ic2VydmUpLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNvbm5lY3QpIHtcbiAgICAgIGNhbGxiYWNrcy5wdXNoKGhvc3QgPT5cbiAgICAgICAgY29uZmlnLmNvbm5lY3QoaG9zdCwga2V5LCAoKSA9PiB7XG4gICAgICAgICAgY2FjaGUuaW52YWxpZGF0ZShob3N0LCBrZXkpO1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfVxuICB9KTtcbn1cblxubGV0IHVwZGF0ZTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIGNvbnN0IHdhbGtJblNoYWRvdyA9IChub2RlLCBmbikgPT4ge1xuICAgIGZuKG5vZGUpO1xuXG4gICAgQXJyYXkuZnJvbShub2RlLmNoaWxkcmVuKS5mb3JFYWNoKGVsID0+IHdhbGtJblNoYWRvdyhlbCwgZm4pKTtcblxuICAgIGlmIChub2RlLnNoYWRvd1Jvb3QpIHtcbiAgICAgIEFycmF5LmZyb20obm9kZS5zaGFkb3dSb290LmNoaWxkcmVuKS5mb3JFYWNoKGVsID0+IHdhbGtJblNoYWRvdyhlbCwgZm4pKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlUXVldWUgPSBuZXcgTWFwKCk7XG4gIHVwZGF0ZSA9IChIeWJyaWQsIGxhc3RIeWJyaWRzKSA9PiB7XG4gICAgaWYgKCF1cGRhdGVRdWV1ZS5zaXplKSB7XG4gICAgICBkZWZlcnJlZC50aGVuKCgpID0+IHtcbiAgICAgICAgd2Fsa0luU2hhZG93KGRvY3VtZW50LmJvZHksIG5vZGUgPT4ge1xuICAgICAgICAgIGlmICh1cGRhdGVRdWV1ZS5oYXMobm9kZS5jb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGNvbnN0IGh5YnJpZHMgPSB1cGRhdGVRdWV1ZS5nZXQobm9kZS5jb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICBub2RlLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG5vZGUuY29uc3RydWN0b3IuaHlicmlkcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICBjYWNoZS5pbnZhbGlkYXRlKFxuICAgICAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIG5vZGUuY29uc3RydWN0b3IuaHlicmlkc1trZXldICE9PSBoeWJyaWRzW2tleV0sXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbm9kZS5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHVwZGF0ZVF1ZXVlLmNsZWFyKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdXBkYXRlUXVldWUuc2V0KEh5YnJpZCwgbGFzdEh5YnJpZHMpO1xuICB9O1xufVxuXG5jb25zdCBkaXNjb25uZWN0cyA9IG5ldyBXZWFrTWFwKCk7XG5cbmZ1bmN0aW9uIGRlZmluZUVsZW1lbnQodGFnTmFtZSwgaHlicmlkc09yQ29uc3RydWN0b3IpIHtcbiAgY29uc3QgdHlwZSA9IHR5cGVvZiBoeWJyaWRzT3JDb25zdHJ1Y3RvcjtcbiAgaWYgKHR5cGUgIT09IFwib2JqZWN0XCIgJiYgdHlwZSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKGBTZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbjogJHt0eXBlfWApO1xuICB9XG5cbiAgaWYgKHRhZ05hbWUgIT09IG51bGwpIHtcbiAgICBjb25zdCBDdXN0b21FbGVtZW50ID0gd2luZG93LmN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKTtcblxuICAgIGlmICh0eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGlmIChDdXN0b21FbGVtZW50ICE9PSBoeWJyaWRzT3JDb25zdHJ1Y3Rvcikge1xuICAgICAgICByZXR1cm4gd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBoeWJyaWRzT3JDb25zdHJ1Y3Rvcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gQ3VzdG9tRWxlbWVudDtcbiAgICB9XG5cbiAgICBpZiAoQ3VzdG9tRWxlbWVudCkge1xuICAgICAgaWYgKEN1c3RvbUVsZW1lbnQuaHlicmlkcyA9PT0gaHlicmlkc09yQ29uc3RydWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIEN1c3RvbUVsZW1lbnQ7XG4gICAgICB9XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIEN1c3RvbUVsZW1lbnQuaHlicmlkcykge1xuICAgICAgICBPYmplY3Qua2V5cyhDdXN0b21FbGVtZW50Lmh5YnJpZHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICBkZWxldGUgQ3VzdG9tRWxlbWVudC5wcm90b3R5cGVba2V5XTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgbGFzdEh5YnJpZHMgPSBDdXN0b21FbGVtZW50Lmh5YnJpZHM7XG5cbiAgICAgICAgY29tcGlsZShDdXN0b21FbGVtZW50LCBoeWJyaWRzT3JDb25zdHJ1Y3Rvcik7XG4gICAgICAgIHVwZGF0ZShDdXN0b21FbGVtZW50LCBsYXN0SHlicmlkcyk7XG5cbiAgICAgICAgcmV0dXJuIEN1c3RvbUVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIHRocm93IEVycm9yKGBFbGVtZW50ICcke3RhZ05hbWV9JyBhbHJlYWR5IGRlZmluZWRgKTtcbiAgICB9XG4gIH1cblxuICBjbGFzcyBIeWJyaWQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuXG4gICAgICBjb25zdCBwcm9wcyA9IHByb3BzTWFwLmdldChIeWJyaWQpO1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJvcHMubGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IHByb3BzW2luZGV4XTtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLCBrZXkpKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzW2tleV07XG4gICAgICAgICAgZGVsZXRlIHRoaXNba2V5XTtcbiAgICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgY29uc3QgY2FsbGJhY2tzID0gY2FsbGJhY2tzTWFwLmdldChIeWJyaWQpO1xuICAgICAgY29uc3QgbGlzdCA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2FsbGJhY2tzLmxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgICBjb25zdCBjYiA9IGNhbGxiYWNrc1tpbmRleF0odGhpcyk7XG4gICAgICAgIGlmIChjYikgbGlzdC5wdXNoKGNiKTtcbiAgICAgIH1cblxuICAgICAgZGlzY29ubmVjdHMuc2V0KHRoaXMsIGxpc3QpO1xuICAgIH1cblxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgY29uc3QgbGlzdCA9IGRpc2Nvbm5lY3RzLmdldCh0aGlzKTtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaXN0Lmxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgICBsaXN0W2luZGV4XSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBpbGUoSHlicmlkLCBoeWJyaWRzT3JDb25zdHJ1Y3Rvcik7XG5cbiAgaWYgKHRhZ05hbWUgIT09IG51bGwpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSHlicmlkLCBcIm5hbWVcIiwge1xuICAgICAgZ2V0OiAoKSA9PiB0YWdOYW1lLFxuICAgIH0pO1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBIeWJyaWQpO1xuICB9XG5cbiAgcmV0dXJuIEh5YnJpZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lTWFwKGVsZW1lbnRzKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhlbGVtZW50cykucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGNvbnN0IHRhZ05hbWUgPSBwYXNjYWxUb0Rhc2goa2V5KTtcbiAgICBhY2Nba2V5XSA9IGRlZmluZUVsZW1lbnQodGFnTmFtZSwgZWxlbWVudHNba2V5XSk7XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZmluZSguLi5hcmdzKSB7XG4gIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gXCJvYmplY3RcIiAmJiBhcmdzWzBdICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGRlZmluZU1hcChhcmdzWzBdKTtcbiAgfVxuXG4gIHJldHVybiBkZWZpbmVFbGVtZW50KC4uLmFyZ3MpO1xufVxuIl19
;// CONCATENATED MODULE: ./node_modules/hybrids/esm/template/utils.js
var map = new WeakMap();
var dataMap = {
  get: function get(key, defaultValue) {
    var value = map.get(key);
    if (value) return value;

    if (defaultValue) {
      map.set(key, defaultValue);
    }

    return defaultValue;
  },
  set: function set(key, value) {
    map.set(key, value);
    return value;
  }
};
function getTemplateEnd(node) {
  var data; // eslint-disable-next-line no-cond-assign

  while (node && (data = dataMap.get(node)) && data.endNode) {
    node = data.endNode;
  }

  return node;
}
function removeTemplate(target) {
  if (target.nodeType !== Node.TEXT_NODE) {
    var child = target.childNodes[0];

    while (child) {
      target.removeChild(child);
      child = target.childNodes[0];
    }
  } else {
    var data = dataMap.get(target);

    if (data.startNode) {
      var endNode = getTemplateEnd(data.endNode);
      var node = data.startNode;
      var lastNextSibling = endNode.nextSibling;

      while (node) {
        var nextSibling = node.nextSibling;
        node.parentNode.removeChild(node);
        node = nextSibling !== lastNextSibling && nextSibling;
      }
    }
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZS91dGlscy5qcyJdLCJuYW1lcyI6WyJtYXAiLCJXZWFrTWFwIiwiZGF0YU1hcCIsImdldCIsImtleSIsImRlZmF1bHRWYWx1ZSIsInZhbHVlIiwic2V0IiwiZ2V0VGVtcGxhdGVFbmQiLCJub2RlIiwiZGF0YSIsImVuZE5vZGUiLCJyZW1vdmVUZW1wbGF0ZSIsInRhcmdldCIsIm5vZGVUeXBlIiwiTm9kZSIsIlRFWFRfTk9ERSIsImNoaWxkIiwiY2hpbGROb2RlcyIsInJlbW92ZUNoaWxkIiwic3RhcnROb2RlIiwibGFzdE5leHRTaWJsaW5nIiwibmV4dFNpYmxpbmciLCJwYXJlbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxHQUFHLEdBQUcsSUFBSUMsT0FBSixFQUFaO0FBQ0EsT0FBTyxJQUFNQyxPQUFPLEdBQUc7QUFDckJDLEVBQUFBLEdBRHFCLGVBQ2pCQyxHQURpQixFQUNaQyxZQURZLEVBQ0U7QUFDckIsUUFBTUMsS0FBSyxHQUFHTixHQUFHLENBQUNHLEdBQUosQ0FBUUMsR0FBUixDQUFkO0FBQ0EsUUFBSUUsS0FBSixFQUFXLE9BQU9BLEtBQVA7O0FBRVgsUUFBSUQsWUFBSixFQUFrQjtBQUNoQkwsTUFBQUEsR0FBRyxDQUFDTyxHQUFKLENBQVFILEdBQVIsRUFBYUMsWUFBYjtBQUNEOztBQUVELFdBQU9BLFlBQVA7QUFDRCxHQVZvQjtBQVdyQkUsRUFBQUEsR0FYcUIsZUFXakJILEdBWGlCLEVBV1pFLEtBWFksRUFXTDtBQUNkTixJQUFBQSxHQUFHLENBQUNPLEdBQUosQ0FBUUgsR0FBUixFQUFhRSxLQUFiO0FBQ0EsV0FBT0EsS0FBUDtBQUNEO0FBZG9CLENBQWhCO0FBaUJQLE9BQU8sU0FBU0UsY0FBVCxDQUF3QkMsSUFBeEIsRUFBOEI7QUFDbkMsTUFBSUMsSUFBSixDQURtQyxDQUVuQzs7QUFDQSxTQUFPRCxJQUFJLEtBQUtDLElBQUksR0FBR1IsT0FBTyxDQUFDQyxHQUFSLENBQVlNLElBQVosQ0FBWixDQUFKLElBQXNDQyxJQUFJLENBQUNDLE9BQWxELEVBQTJEO0FBQ3pERixJQUFBQSxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsT0FBWjtBQUNEOztBQUVELFNBQU9GLElBQVA7QUFDRDtBQUVELE9BQU8sU0FBU0csY0FBVCxDQUF3QkMsTUFBeEIsRUFBZ0M7QUFDckMsTUFBSUEsTUFBTSxDQUFDQyxRQUFQLEtBQW9CQyxJQUFJLENBQUNDLFNBQTdCLEVBQXdDO0FBQ3RDLFFBQUlDLEtBQUssR0FBR0osTUFBTSxDQUFDSyxVQUFQLENBQWtCLENBQWxCLENBQVo7O0FBQ0EsV0FBT0QsS0FBUCxFQUFjO0FBQ1pKLE1BQUFBLE1BQU0sQ0FBQ00sV0FBUCxDQUFtQkYsS0FBbkI7QUFDQUEsTUFBQUEsS0FBSyxHQUFHSixNQUFNLENBQUNLLFVBQVAsQ0FBa0IsQ0FBbEIsQ0FBUjtBQUNEO0FBQ0YsR0FORCxNQU1PO0FBQ0wsUUFBTVIsSUFBSSxHQUFHUixPQUFPLENBQUNDLEdBQVIsQ0FBWVUsTUFBWixDQUFiOztBQUVBLFFBQUlILElBQUksQ0FBQ1UsU0FBVCxFQUFvQjtBQUNsQixVQUFNVCxPQUFPLEdBQUdILGNBQWMsQ0FBQ0UsSUFBSSxDQUFDQyxPQUFOLENBQTlCO0FBRUEsVUFBSUYsSUFBSSxHQUFHQyxJQUFJLENBQUNVLFNBQWhCO0FBQ0EsVUFBTUMsZUFBZSxHQUFHVixPQUFPLENBQUNXLFdBQWhDOztBQUVBLGFBQU9iLElBQVAsRUFBYTtBQUNYLFlBQU1hLFdBQVcsR0FBR2IsSUFBSSxDQUFDYSxXQUF6QjtBQUNBYixRQUFBQSxJQUFJLENBQUNjLFVBQUwsQ0FBZ0JKLFdBQWhCLENBQTRCVixJQUE1QjtBQUNBQSxRQUFBQSxJQUFJLEdBQUdhLFdBQVcsS0FBS0QsZUFBaEIsSUFBbUNDLFdBQTFDO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtYXAgPSBuZXcgV2Vha01hcCgpO1xuZXhwb3J0IGNvbnN0IGRhdGFNYXAgPSB7XG4gIGdldChrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlID0gbWFwLmdldChrZXkpO1xuICAgIGlmICh2YWx1ZSkgcmV0dXJuIHZhbHVlO1xuXG4gICAgaWYgKGRlZmF1bHRWYWx1ZSkge1xuICAgICAgbWFwLnNldChrZXksIGRlZmF1bHRWYWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgfSxcbiAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICBtYXAuc2V0KGtleSwgdmFsdWUpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZW1wbGF0ZUVuZChub2RlKSB7XG4gIGxldCBkYXRhO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uZC1hc3NpZ25cbiAgd2hpbGUgKG5vZGUgJiYgKGRhdGEgPSBkYXRhTWFwLmdldChub2RlKSkgJiYgZGF0YS5lbmROb2RlKSB7XG4gICAgbm9kZSA9IGRhdGEuZW5kTm9kZTtcbiAgfVxuXG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGVtcGxhdGUodGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQubm9kZVR5cGUgIT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgbGV0IGNoaWxkID0gdGFyZ2V0LmNoaWxkTm9kZXNbMF07XG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICB0YXJnZXQucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgY2hpbGQgPSB0YXJnZXQuY2hpbGROb2Rlc1swXTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZGF0YSA9IGRhdGFNYXAuZ2V0KHRhcmdldCk7XG5cbiAgICBpZiAoZGF0YS5zdGFydE5vZGUpIHtcbiAgICAgIGNvbnN0IGVuZE5vZGUgPSBnZXRUZW1wbGF0ZUVuZChkYXRhLmVuZE5vZGUpO1xuXG4gICAgICBsZXQgbm9kZSA9IGRhdGEuc3RhcnROb2RlO1xuICAgICAgY29uc3QgbGFzdE5leHRTaWJsaW5nID0gZW5kTm9kZS5uZXh0U2libGluZztcblxuICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgY29uc3QgbmV4dFNpYmxpbmcgPSBub2RlLm5leHRTaWJsaW5nO1xuICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgIG5vZGUgPSBuZXh0U2libGluZyAhPT0gbGFzdE5leHRTaWJsaW5nICYmIG5leHRTaWJsaW5nO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19
;// CONCATENATED MODULE: ./node_modules/hybrids/esm/template/resolvers/array.js

var arrayMap = new WeakMap();

function movePlaceholder(target, previousSibling) {
  var data = dataMap.get(target);
  var startNode = data.startNode;
  var endNode = getTemplateEnd(data.endNode);
  previousSibling.parentNode.insertBefore(target, previousSibling.nextSibling);
  var prevNode = target;
  var node = startNode;

  while (node) {
    var nextNode = node.nextSibling;
    prevNode.parentNode.insertBefore(node, prevNode.nextSibling);
    prevNode = node;
    node = nextNode !== endNode.nextSibling && nextNode;
  }
}

function resolveArray(host, target, value, resolveValue) {
  var lastEntries = arrayMap.get(target);
  var entries = value.map(function (item, index) {
    return {
      id: Object.prototype.hasOwnProperty.call(item, "id") ? item.id : index,
      value: item,
      placeholder: null,
      available: true
    };
  });
  arrayMap.set(target, entries);

  if (lastEntries) {
    var ids = new Set();
    entries.forEach(function (entry) {
      return ids.add(entry.id);
    });
    lastEntries = lastEntries.filter(function (entry) {
      if (!ids.has(entry.id)) {
        removeTemplate(entry.placeholder);
        entry.placeholder.parentNode.removeChild(entry.placeholder);
        return false;
      }

      return true;
    });
  }

  var previousSibling = target;
  var lastIndex = value.length - 1;
  var data = dataMap.get(target);

  for (var index = 0; index < entries.length; index += 1) {
    var entry = entries[index];
    var matchedEntry = void 0;

    if (lastEntries) {
      for (var i = 0; i < lastEntries.length; i += 1) {
        if (lastEntries[i].available && lastEntries[i].id === entry.id) {
          matchedEntry = lastEntries[i];
          break;
        }
      }
    }

    if (matchedEntry) {
      matchedEntry.available = false;
      entry.placeholder = matchedEntry.placeholder;

      if (entry.placeholder.previousSibling !== previousSibling) {
        movePlaceholder(entry.placeholder, previousSibling);
      }

      if (matchedEntry.value !== entry.value) {
        resolveValue(host, entry.placeholder, entry.value);
      }
    } else {
      entry.placeholder = document.createTextNode("");
      previousSibling.parentNode.insertBefore(entry.placeholder, previousSibling.nextSibling);
      resolveValue(host, entry.placeholder, entry.value);
    }

    previousSibling = getTemplateEnd(dataMap.get(entry.placeholder).endNode || entry.placeholder);
    if (index === 0) data.startNode = entry.placeholder;
    if (index === lastIndex) data.endNode = previousSibling;
  }

  if (lastEntries) {
    lastEntries.forEach(function (entry) {
      if (entry.available) {
        removeTemplate(entry.placeholder);
        entry.placeholder.parentNode.removeChild(entry.placeholder);
      }
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvYXJyYXkuanMiXSwibmFtZXMiOlsiZGF0YU1hcCIsInJlbW92ZVRlbXBsYXRlIiwiZ2V0VGVtcGxhdGVFbmQiLCJhcnJheU1hcCIsIldlYWtNYXAiLCJtb3ZlUGxhY2Vob2xkZXIiLCJ0YXJnZXQiLCJwcmV2aW91c1NpYmxpbmciLCJkYXRhIiwiZ2V0Iiwic3RhcnROb2RlIiwiZW5kTm9kZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsInByZXZOb2RlIiwibm9kZSIsIm5leHROb2RlIiwicmVzb2x2ZUFycmF5IiwiaG9zdCIsInZhbHVlIiwicmVzb2x2ZVZhbHVlIiwibGFzdEVudHJpZXMiLCJlbnRyaWVzIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaWQiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJwbGFjZWhvbGRlciIsImF2YWlsYWJsZSIsInNldCIsImlkcyIsIlNldCIsImZvckVhY2giLCJlbnRyeSIsImFkZCIsImZpbHRlciIsImhhcyIsInJlbW92ZUNoaWxkIiwibGFzdEluZGV4IiwibGVuZ3RoIiwibWF0Y2hlZEVudHJ5IiwiaSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLE9BQVQsRUFBa0JDLGNBQWxCLEVBQWtDQyxjQUFsQyxRQUF3RCxhQUF4RDtBQUVBLE9BQU8sSUFBTUMsUUFBUSxHQUFHLElBQUlDLE9BQUosRUFBakI7O0FBRVAsU0FBU0MsZUFBVCxDQUF5QkMsTUFBekIsRUFBaUNDLGVBQWpDLEVBQWtEO0FBQ2hELE1BQU1DLElBQUksR0FBR1IsT0FBTyxDQUFDUyxHQUFSLENBQVlILE1BQVosQ0FBYjtBQUNBLE1BQU1JLFNBQVMsR0FBR0YsSUFBSSxDQUFDRSxTQUF2QjtBQUNBLE1BQU1DLE9BQU8sR0FBR1QsY0FBYyxDQUFDTSxJQUFJLENBQUNHLE9BQU4s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QUNOLFdBQWxCLEVBQStCckIsT0FBL0IsSUFBMEMyQixLQUFLLENBQUNOLFdBRGxCLENBQWhDO0FBSUEsUUFBSU4sS0FBSyxLQUFLLENBQWQsRUFBaUJsQixJQUFJLENBQUNFLFNBQUwsR0FBaUI0QixLQUFLLENBQUNOLFdBQXZCO0FBQ2pCLFFBQUlOLEtBQUssS0FBS2lCLFNBQWQsRUFBeUJuQyxJQUFJLENBQUNHLE9BQUwsR0FBZUosZUFBZjtBQUMxQjs7QUFFRCxNQUFJZSxXQUFKLEVBQWlCO0FBQ2ZBLElBQUFBLFdBQVcsQ0FBQ2UsT0FBWixDQUFvQixVQUFBQyxLQUFLLEVBQUk7QUFDM0IsVUFBSUEsS0FBSyxDQUFDTCxTQUFWLEVBQXFCO0FBQ25CaEMsUUFBQUEsY0FBYyxDQUFDcUMsS0FBSyxDQUFDTixXQUFQLENBQWQ7QUFDQU0sUUFBQUEsS0FBSyxDQUFDTixXQUFOLENBQWtCcEIsVUFBbEIsQ0FBNkI4QixXQUE3QixDQUF5Q0osS0FBSyxDQUFDTixXQUEvQztBQUNEO0FBQ0YsS0FMRDtBQU1EO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYXRhTWFwLCByZW1vdmVUZW1wbGF0ZSwgZ2V0VGVtcGxhdGVFbmQgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcblxuZXhwb3J0IGNvbnN0IGFycmF5TWFwID0gbmV3IFdlYWtNYXAoKTtcblxuZnVuY3Rpb24gbW92ZVBsYWNlaG9sZGVyKHRhcmdldCwgcHJldmlvdXNTaWJsaW5nKSB7XG4gIGNvbnN0IGRhdGEgPSBkYXRhTWFwLmdldCh0YXJnZXQpO1xuICBjb25zdCBzdGFydE5vZGUgPSBkYXRhLnN0YXJ0Tm9kZTtcbiAgY29uc3QgZW5kTm9kZSA9IGdldFRlbXBsYXRlRW5kKGRhdGEuZW5kTm9kZSk7XG5cbiAgcHJldmlvdXNTaWJsaW5nLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhcmdldCwgcHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nKTtcblxuICBsZXQgcHJldk5vZGUgPSB0YXJnZXQ7XG4gIGxldCBub2RlID0gc3RhcnROb2RlO1xuICB3aGlsZSAobm9kZSkge1xuICAgIGNvbnN0IG5leHROb2RlID0gbm9kZS5uZXh0U2libGluZztcbiAgICBwcmV2Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCBwcmV2Tm9kZS5uZXh0U2libGluZyk7XG4gICAgcHJldk5vZGUgPSBub2RlO1xuICAgIG5vZGUgPSBuZXh0Tm9kZSAhPT0gZW5kTm9kZS5uZXh0U2libGluZyAmJiBuZXh0Tm9kZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlQXJyYXkoaG9zdCwgdGFyZ2V0LCB2YWx1ZSwgcmVzb2x2ZVZhbHVlKSB7XG4gIGxldCBsYXN0RW50cmllcyA9IGFycmF5TWFwLmdldCh0YXJnZXQpO1xuICBjb25zdCBlbnRyaWVzID0gdmFsdWUubWFwKChpdGVtLCBpbmRleCkgPT4gKHtcbiAgICBpZDogT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGl0ZW0sIFwiaWRcIikgPyBpdGVtLmlkIDogaW5kZXgsXG4gICAgdmFsdWU6IGl0ZW0sXG4gICAgcGxhY2Vob2xkZXI6IG51bGwsXG4gICAgYXZhaWxhYmxlOiB0cnVlLFxuICB9KSk7XG5cbiAgYXJyYXlNYXAuc2V0KHRhcmdldCwgZW50cmllcyk7XG5cbiAgaWYgKGxhc3RFbnRyaWVzKSB7XG4gICAgY29uc3QgaWRzID0gbmV3IFNldCgpO1xuICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiBpZHMuYWRkKGVudHJ5LmlkKSk7XG5cbiAgICBsYXN0RW50cmllcyA9IGxhc3RFbnRyaWVzLmZpbHRlcihlbnRyeSA9PiB7XG4gICAgICBpZiAoIWlkcy5oYXMoZW50cnkuaWQpKSB7XG4gICAgICAgIHJlbW92ZVRlbXBsYXRlKGVudHJ5LnBsYWNlaG9sZGVyKTtcbiAgICAgICAgZW50cnkucGxhY2Vob2xkZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbnRyeS5wbGFjZWhvbGRlcik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBsZXQgcHJldmlvdXNTaWJsaW5nID0gdGFyZ2V0O1xuICBjb25zdCBsYXN0SW5kZXggPSB2YWx1ZS5sZW5ndGggLSAxO1xuICBjb25zdCBkYXRhID0gZGF0YU1hcC5nZXQodGFyZ2V0KTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZW50cmllcy5sZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICBjb25zdCBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIGxldCBtYXRjaGVkRW50cnk7XG4gICAgaWYgKGxhc3RFbnRyaWVzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhc3RFbnRyaWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChsYXN0RW50cmllc1tpXS5hdmFpbGFibGUgJiYgbGFzdEVudHJpZXNbaV0uaWQgPT09IGVudHJ5LmlkKSB7XG4gICAgICAgICAgbWF0Y2hlZEVudHJ5ID0gbGFzdEVudHJpZXNbaV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWF0Y2hlZEVudHJ5KSB7XG4gICAgICBtYXRjaGVkRW50cnkuYXZhaWxhYmxlID0gZmFsc2U7XG4gICAgICBlbnRyeS5wbGFjZWhvbGRlciA9IG1hdGNoZWRFbnRyeS5wbGFjZWhvbGRlcjtcblxuICAgICAgaWYgKGVudHJ5LnBsYWNlaG9sZGVyLnByZXZpb3VzU2libGluZyAhPT0gcHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgIG1vdmVQbGFjZWhvbGRlcihlbnRyeS5wbGFjZWhvbGRlciwgcHJldmlvdXNTaWJsaW5nKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXRjaGVkRW50cnkudmFsdWUgIT09IGVudHJ5LnZhbHVlKSB7XG4gICAgICAgIHJlc29sdmVWYWx1ZShob3N0LCBlbnRyeS5wbGFjZWhvbGRlciwgZW50cnkudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlbnRyeS5wbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpO1xuICAgICAgcHJldmlvdXNTaWJsaW5nLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKFxuICAgICAgICBlbnRyeS5wbGFjZWhvbGRlcixcbiAgICAgICAgcHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nLFxuICAgICAgKTtcbiAgICAgIHJlc29sdmVWYWx1ZShob3N0LCBlbnRyeS5wbGFjZWhvbGRlciwgZW50cnkudmFsdWUpO1xuICAgIH1cblxuICAgIHByZXZpb3VzU2libGluZyA9IGdldFRlbXBsYXRlRW5kKFxuICAgICAgZGF0YU1hcC5nZXQoZW50cnkucGxhY2Vob2xkZXIpLmVuZE5vZGUgfHwgZW50cnkucGxhY2Vob2xkZXIsXG4gICAgKTtcblxuICAgIGlmIChpbmRleCA9PT0gMCkgZGF0YS5zdGFydE5vZGUgPSBlbnRyeS5wbGFjZWhvbGRlcjtcbiAgICBpZiAoaW5kZXggPT09IGxhc3RJbmRleCkgZGF0YS5lbmROb2RlID0gcHJldmlvdXNTaWJsaW5nO1xuICB9XG5cbiAgaWYgKGxhc3RFbnRyaWVzKSB7XG4gICAgbGFzdEVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICBpZiAoZW50cnkuYXZhaWxhYmxlKSB7XG4gICAgICAgIHJlbW92ZVRlbXBsYXRlKGVudHJ5LnBsYWNlaG9sZGVyKTtcbiAgICAgICAgZW50cnkucGxhY2Vob2xkZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbnRyeS5wbGFjZWhvbGRlcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
;// CONCATENATED MODULE: ./node_modules/hybrids/esm/template/resolvers/value.js
function value_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { value_typeof = function _typeof(obj) { return typeof obj; }; } else { value_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return value_typeof(obj); }



function resolveValue(host, target, value) {
  var type = Array.isArray(value) ? "array" : value_typeof(value);
  var data = dataMap.get(target, {});

  if (data.type !== type) {
    removeTemplate(target);
    if (type === "array") arrayMap.delete(target);
    data = dataMap.set(target, {
      type: type
    });

    if (target.textContent !== "") {
      target.textContent = "";
    }
  }

  switch (type) {
    case "function":
      value(host, target);
      break;

    case "array":
      resolveArray(host, target, value, resolveValue);
      break;

    default:
      target.textContent = type === "number" || value ? value : "";
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvdmFsdWUuanMiXSwibmFtZXMiOlsiZGF0YU1hcCIsInJlbW92ZVRlbXBsYXRlIiwicmVzb2x2ZUFycmF5IiwiYXJyYXlNYXAiLCJyZXNvbHZlVmFsdWUiLCJob3N0IiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwiQXJyYXkiLCJpc0FycmF5IiwiZGF0YSIsImdldCIsImRlbGV0ZSIsInNldCIsInRleHRDb250ZW50Il0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLE9BQVQsRUFBa0JDLGNBQWxCLFFBQXdDLGFBQXhDO0FBQ0EsT0FBT0MsWUFBUCxJQUF1QkMsUUFBdkIsUUFBdUMsWUFBdkM7QUFFQSxlQUFlLFNBQVNDLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCQyxNQUE1QixFQUFvQ0MsS0FBcEMsRUFBMkM7QUFDeEQsTUFBTUMsSUFBSSxHQUFHQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0gsS0FBZCxJQUF1QixPQUF2QixXQUF3Q0EsS0FBeEMsQ0FBYjtBQUNBLE1BQUlJLElBQUksR0FBR1gsT0FBTyxDQUFDWSxHQUFSLENBQVlOLE1BQVosRUFBb0IsRUFBcEIsQ0FBWDs7QUFFQSxNQUFJSyxJQUFJLENBQUNILElBQUwsS0FBY0EsSUFBbEIsRUFBd0I7QUFDdEJQLElBQUFBLGNBQWMsQ0FBQ0ssTUFBRCxDQUFkO0FBQ0EsUUFBSUUsSUFBSSxLQUFLLE9BQWIsRUFBc0JMLFFBQVEsQ0FBQ1UsTUFBVCxDQUFnQlAsTUFBaEI7QUFFdEJLLElBQUFBLElBQUksR0FBR1gsT0FBTyxDQUFDYyxHQUFSLENBQVlSLE1BQVosRUFBb0I7QUFBRUUsTUFBQUEsSUFBSSxFQUFKQTtBQUFGLEtBQXBCLENBQVA7O0FBRUEsUUFBSUYsTUFBTSxDQUFDUyxXQUFQLEtBQXVCLEVBQTNCLEVBQStCO0FBQzdCVCxNQUFBQSxNQUFNLENBQUNTLFdBQVAsR0FBcUIsRUFBckI7QUFDRDtBQUNGOztBQUVELFVBQVFQLElBQVI7QUFDRSxTQUFLLFVBQUw7QUFDRUQsTUFBQUEsS0FBSyxDQUFDRixJQUFELEVBQU9DLE1BQVAsQ0FBTDtBQUNBOztBQUNGLFNBQUssT0FBTDtBQUNFSixNQUFBQSxZQUFZLENBQUNHLElBQUQsRUFBT0MsTUFBUCxFQUFlQyxLQUFmLEVBQXNCSCxZQUF0QixDQUFaO0FBQ0E7O0FBQ0Y7QUFDRUUsTUFBQUEsTUFBTSxDQUFDUyxXQUFQLEdBQXFCUCxJQUFJLEtBQUssUUFBVCxJQUFxQkQsS0FBckIsR0FBNkJBLEtBQTdCLEdBQXFDLEVBQTFEO0FBUko7QUFVRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRhdGFNYXAsIHJlbW92ZVRlbXBsYXRlIH0gZnJvbSBcIi4uL3V0aWxzLmpzXCI7XG5pbXBvcnQgcmVzb2x2ZUFycmF5LCB7IGFycmF5TWFwIH0gZnJvbSBcIi4vYXJyYXkuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVZhbHVlKGhvc3QsIHRhcmdldCwgdmFsdWUpIHtcbiAgY29uc3QgdHlwZSA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gXCJhcnJheVwiIDogdHlwZW9mIHZhbHVlO1xuICBsZXQgZGF0YSA9IGRhdGFNYXAuZ2V0KHRhcmdldCwge30pO1xuXG4gIGlmIChkYXRhLnR5cGUgIT09IHR5cGUpIHtcbiAgICByZW1vdmVUZW1wbGF0ZSh0YXJnZXQpO1xuICAgIGlmICh0eXBlID09PSBcImFycmF5XCIpIGFycmF5TWFwLmRlbGV0ZSh0YXJnZXQpO1xuXG4gICAgZGF0YSA9IGRhdGFNYXAuc2V0KHRhcmdldCwgeyB0eXBlIH0pO1xuXG4gICAgaWYgKHRhcmdldC50ZXh0Q29udGVudCAhPT0gXCJcIikge1xuICAgICAgdGFyZ2V0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFwiZnVuY3Rpb25cIjpcbiAgICAgIHZhbHVlKGhvc3QsIHRhcmdldCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYXJyYXlcIjpcbiAgICAgIHJlc29sdmVBcnJheShob3N0LCB0YXJnZXQsIHZhbHVlLCByZXNvbHZlVmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRhcmdldC50ZXh0Q29udGVudCA9IHR5cGUgPT09IFwibnVtYmVyXCIgfHwgdmFsdWUgPyB2YWx1ZSA6IFwiXCI7XG4gIH1cbn1cbiJdfQ==
;// CONCATENATED MODULE: ./node_modules/hybrids/esm/template/resolvers/event.js
function event_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { event_typeof = function _typeof(obj) { return typeof obj; }; } else { event_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return event_typeof(obj); }

var targets = new WeakMap();
function resolveEventListener(eventType) {
  return function (host, target, value, lastValue) {
    if (lastValue) {
      var eventMap = targets.get(target);

      if (eventMap) {
        target.removeEventListener(eventType, eventMap.get(lastValue), lastValue.options !== undefined ? lastValue.options : false);
      }
    }

    if (value) {
      if (typeof value !== "function") {
        throw Error("Event listener must be a function: ".concat(event_typeof(value)));
      }

      var _eventMap = targets.get(target);

      if (!_eventMap) {
        _eventMap = new WeakMap();
        targets.set(target, _eventMap);
      }

      var callback = value.bind(null, host);

      _eventMap.set(value, callback);

      target.addEventListener(eventType, callback, value.options !== undefined ? value.options : false);
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvZXZlbnQuanMiXSwibmFtZXMiOlsidGFyZ2V0cyIsIldlYWtNYXAiLCJyZXNvbHZlRXZlbnRMaXN0ZW5lciIsImV2ZW50VHlwZSIsImhvc3QiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxhc3RWYWx1ZSIsImV2ZW50TWFwIiwiZ2V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9wdGlvbnMiLCJ1bmRlZmluZWQiLCJFcnJvciIsInNldCIsImNhbGxiYWNrIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsT0FBTyxHQUFHLElBQUlDLE9BQUosRUFBaEI7QUFFQSxlQUFlLFNBQVNDLG9CQUFULENBQThCQyxTQUE5QixFQUF5QztBQUN0RCxTQUFPLFVBQUNDLElBQUQsRUFBT0MsTUFBUCxFQUFlQyxLQUFmLEVBQXNCQyxTQUF0QixFQUFvQztBQUN6QyxRQUFJQSxTQUFKLEVBQWU7QUFDYixVQUFNQyxRQUFRLEdBQUdSLE9BQU8sQ0FBQ1MsR0FBUixDQUFZSixNQUFaLENBQWpCOztBQUNBLFVBQUlHLFFBQUosRUFBYztBQUNaSCxRQUFBQSxNQUFNLENBQUNLLG1CQUFQLENBQ0VQLFNBREYsRUFFRUssUUFBUSxDQUFDQyxHQUFULENBQWFGLFNBQWIsQ0FGRixFQUdFQSxTQUFTLENBQUNJLE9BQVYsS0FBc0JDLFNBQXRCLEdBQWtDTCxTQUFTLENBQUNJLE9BQTVDLEdBQXNELEtBSHhEO0FBS0Q7QUFDRjs7QUFFRCxRQUFJTCxLQUFKLEVBQVc7QUFDVCxVQUFJLE9BQU9BLEtBQVAsS0FBaUIsVUFBckIsRUFBaUM7QUFDL0IsY0FBTU8sS0FBSyxzREFBOENQLEtBQTlDLEdBQVg7QUFDRDs7QUFFRCxVQUFJRSxTQUFRLEdBQUdSLE9BQU8sQ0FBQ1MsR0FBUixDQUFZSixNQUFaLENBQWY7O0FBQ0EsVUFBSSxDQUFDRyxTQUFMLEVBQWU7QUFDYkEsUUFBQUEsU0FBUSxHQUFHLElBQUlQLE9BQUosRUFBWDtBQUNBRCxRQUFBQSxPQUFPLENBQUNjLEdBQVIsQ0FBWVQsTUFBWixFQUFvQkcsU0FBcEI7QUFDRDs7QUFFRCxVQUFNTyxRQUFRLEdBQUdULEtBQUssQ0FBQ1UsSUFBTixDQUFXLElBQVgsRUFBaUJaLElBQWpCLENBQWpCOztBQUNBSSxNQUFBQSxTQUFRLENBQUNNLEdBQVQsQ0FBYVIsS0FBYixFQUFvQlMsUUFBcEI7O0FBRUFWLE1BQUFBLE1BQU0sQ0FBQ1ksZ0JBQVAsQ0FDRWQsU0FERixFQUVFWSxRQUZGLEVBR0VULEtBQUssQ0FBQ0ssT0FBTixLQUFrQkMsU0FBbEIsR0FBOEJOLEtBQUssQ0FBQ0ssT0FBcEMsR0FBOEMsS0FIaEQ7QUFLRDtBQUNGLEdBaENEO0FBaUNEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGFyZ2V0cyA9IG5ldyBXZWFrTWFwKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSkge1xuICByZXR1cm4gKGhvc3QsIHRhcmdldCwgdmFsdWUsIGxhc3RWYWx1ZSkgPT4ge1xuICAgIGlmIChsYXN0VmFsdWUpIHtcbiAgICAgIGNvbnN0IGV2ZW50TWFwID0gdGFyZ2V0cy5nZXQodGFyZ2V0KTtcbiAgICAgIGlmIChldmVudE1hcCkge1xuICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBldmVudFR5cGUsXG4gICAgICAgICAgZXZlbnRNYXAuZ2V0KGxhc3RWYWx1ZSksXG4gICAgICAgICAgbGFzdFZhbHVlLm9wdGlvbnMgIT09IHVuZGVmaW5lZCA/IGxhc3RWYWx1ZS5vcHRpb25zIDogZmFsc2UsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoYEV2ZW50IGxpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbjogJHt0eXBlb2YgdmFsdWV9YCk7XG4gICAgICB9XG5cbiAgICAgIGxldCBldmVudE1hcCA9IHRhcmdldHMuZ2V0KHRhcmdldCk7XG4gICAgICBpZiAoIWV2ZW50TWFwKSB7XG4gICAgICAgIGV2ZW50TWFwID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgdGFyZ2V0cy5zZXQodGFyZ2V0LCBldmVudE1hcCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gdmFsdWUuYmluZChudWxsLCBob3N0KTtcbiAgICAgIGV2ZW50TWFwLnNldCh2YWx1ZSwgY2FsbGJhY2spO1xuXG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgZXZlbnRUeXBlLFxuICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgdmFsdWUub3B0aW9ucyAhPT0gdW5kZWZpbmVkID8gdmFsdWUub3B0aW9ucyA6IGZhbHNlLFxuICAgICAgKTtcbiAgICB9XG4gIH07XG59XG4iXX0=
;// CONCATENATED MODULE: ./node_modules/hybrids/esm/template/resolvers/class.js
function class_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { class_typeof = function _typeof(obj) { return typeof obj; }; } else { class_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return class_typeof(obj); }

function normalizeValue(value) {
  var set = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set();

  if (Array.isArray(value)) {
    value.forEach(function (className) {
      return set.add(className);
    });
  } else if (value !== null && class_typeof(value) === "object") {
    Object.keys(value).forEach(function (key) {
      return value[key] && set.add(key);
    });
  } else {
    set.add(value);
  }

  return set;
}

var classMap = new WeakMap();
function resolveClassList(host, target, value) {
  var previousList = classMap.get(target) || new Set();
  var list = normalizeValue(value);
  classMap.set(target, list);
  list.forEach(function (className) {
    target.classList.add(className);
    previousList.delete(className);
  });
  previousList.forEach(function (className) {
    target.classList.remove(className);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvY2xhc3MuanMiXSwibmFtZXMiOlsibm9ybWFsaXplVmFsdWUiLCJ2YWx1ZSIsInNldCIsIlNldCIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJjbGFzc05hbWUiLCJhZGQiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiY2xhc3NNYXAiLCJXZWFrTWFwIiwicmVzb2x2ZUNsYXNzTGlzdCIsImhvc3QiLCJ0YXJnZXQiLCJwcmV2aW91c0xpc3QiLCJnZXQiLCJsaXN0IiwiY2xhc3NMaXN0IiwiZGVsZXRlIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQWdEO0FBQUEsTUFBakJDLEdBQWlCLHVFQUFYLElBQUlDLEdBQUosRUFBVzs7QUFDOUMsTUFBSUMsS0FBSyxDQUFDQyxPQUFOLENBQWNKLEtBQWQsQ0FBSixFQUEwQjtBQUN4QkEsSUFBQUEsS0FBSyxDQUFDSyxPQUFOLENBQWMsVUFBQUMsU0FBUztBQUFBLGFBQUlMLEdBQUcsQ0FBQ00sR0FBSixDQUFRRCxTQUFSLENBQUo7QUFBQSxLQUF2QjtBQUNELEdBRkQsTUFFTyxJQUFJTixLQUFLLEtBQUssSUFBVixJQUFrQixRQUFPQSxLQUFQLE1BQWlCLFFBQXZDLEVBQWlEO0FBQ3REUSxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWVQsS0FBWixFQUFtQkssT0FBbkIsQ0FBMkIsVUFBQUssR0FBRztBQUFBLGFBQUlWLEtBQUssQ0FBQ1UsR0FBRCxDQUFMLElBQWNULEdBQUcsQ0FBQ00sR0FBSixDQUFRRyxHQUFSLENBQWxCO0FBQUEsS0FBOUI7QUFDRCxHQUZNLE1BRUE7QUFDTFQsSUFBQUEsR0FBRyxDQUFDTSxHQUFKLENBQVFQLEtBQVI7QUFDRDs7QUFFRCxTQUFPQyxHQUFQO0FBQ0Q7O0FBRUQsSUFBTVUsUUFBUSxHQUFHLElBQUlDLE9BQUosRUFBakI7QUFFQSxlQUFlLFNBQVNDLGdCQUFULENBQTBCQyxJQUExQixFQUFnQ0MsTUFBaEMsRUFBd0NmLEtBQXhDLEVBQStDO0FBQzVELE1BQU1nQixZQUFZLEdBQUdMLFFBQVEsQ0FBQ00sR0FBVCxDQUFhRixNQUFiLEtBQXdCLElBQUliLEdBQUosRUFBN0M7QUFDQSxNQUFNZ0IsSUFBSSxHQUFHbkIsY0FBYyxDQUFDQyxLQUFELENBQTNCO0FBRUFXLEVBQUFBLFFBQVEsQ0FBQ1YsR0FBVCxDQUFhYyxNQUFiLEVBQXFCRyxJQUFyQjtBQUVBQSxFQUFBQSxJQUFJLENBQUNiLE9BQUwsQ0FBYSxVQUFBQyxTQUFTLEVBQUk7QUFDeEJTLElBQUFBLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQlosR0FBakIsQ0FBcUJELFNBQXJCO0FBQ0FVLElBQUFBLFlBQVksQ0FBQ0ksTUFBYixDQUFvQmQsU0FBcEI7QUFDRCxHQUhEO0FBS0FVLEVBQUFBLFlBQVksQ0FBQ1gsT0FBYixDQUFxQixVQUFBQyxTQUFTLEVBQUk7QUFDaENTLElBQUFBLE1BQU0sQ0FBQ0ksU0FBUCxDQUFpQkUsTUFBakIsQ0FBd0JmLFNBQXhCO0FBQ0QsR0FGRDtBQUdEIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUsIHNldCA9IG5ldyBTZXQoKSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKGNsYXNzTmFtZSA9PiBzZXQuYWRkKGNsYXNzTmFtZSkpO1xuICB9IGVsc2UgaWYgKHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikge1xuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKGtleSA9PiB2YWx1ZVtrZXldICYmIHNldC5hZGQoa2V5KSk7XG4gIH0gZWxzZSB7XG4gICAgc2V0LmFkZCh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gc2V0O1xufVxuXG5jb25zdCBjbGFzc01hcCA9IG5ldyBXZWFrTWFwKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVDbGFzc0xpc3QoaG9zdCwgdGFyZ2V0LCB2YWx1ZSkge1xuICBjb25zdCBwcmV2aW91c0xpc3QgPSBjbGFzc01hcC5nZXQodGFyZ2V0KSB8fCBuZXcgU2V0KCk7XG4gIGNvbnN0IGxpc3QgPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG5cbiAgY2xhc3NNYXAuc2V0KHRhcmdldCwgbGlzdCk7XG5cbiAgbGlzdC5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBwcmV2aW91c0xpc3QuZGVsZXRlKGNsYXNzTmFtZSk7XG4gIH0pO1xuXG4gIHByZXZpb3VzTGlzdC5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfSk7XG59XG4iXX0=
;// CONCATENATED MODULE: ./node_modules/hybrids/esm/template/resolvers/style.js
function style_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { style_typeof = function _typeof(obj) { return typeof obj; }; } else { style_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return style_typeof(obj); }


var styleMap = new WeakMap();
function resolveStyle(host, target, value) {
  if (value === null || style_typeof(value) !== "object") {
    throw TypeError("Style value must be an object in ".concat(stringifyElement(target), ":"), value);
  }

  var previousMap = styleMap.get(target) || new Map();
  var nextMap = Object.keys(value).reduce(function (map, key) {
    var dashKey = camelToDash(key);
    var styleValue = value[key];

    if (!styleValue && styleValue !== 0) {
      target.style.removeProperty(dashKey);
    } else {
      target.style.setProperty(dashKey, styleValue);
    }

    map.set(dashKey, styleValue);
    previousMap.delete(dashKey);
    return map;
  }, new Map());
  previousMap.forEach(function (styleValue, key) {
    target.style[key] = "";
  });
  styleMap.set(target, nextMap);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvc3R5bGUuanMiXSwibmFtZXMiOlsiY2FtZWxUb0Rhc2giLCJzdHJpbmdpZnlFbGVtZW50Iiwic3R5bGVNYXAiLCJXZWFrTWFwIiwicmVzb2x2ZVN0eWxlIiwiaG9zdCIsInRhcmdldCIsInZhbHVlIiwiVHlwZUVycm9yIiwicHJldmlvdXNNYXAiLCJnZXQiLCJNYXAiLCJuZXh0TWFwIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsIm1hcCIsImtleSIsImRhc2hLZXkiLCJzdHlsZVZhbHVlIiwic3R5bGUiLCJyZW1vdmVQcm9wZXJ0eSIsInNldFByb3BlcnR5Iiwic2V0IiwiZGVsZXRlIiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxXQUFULEVBQXNCQyxnQkFBdEIsUUFBOEMsZ0JBQTlDO0FBRUEsSUFBTUMsUUFBUSxHQUFHLElBQUlDLE9BQUosRUFBakI7QUFFQSxlQUFlLFNBQVNDLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCQyxNQUE1QixFQUFvQ0MsS0FBcEMsRUFBMkM7QUFDeEQsTUFBSUEsS0FBSyxLQUFLLElBQVYsSUFBa0IsUUFBT0EsS0FBUCxNQUFpQixRQUF2QyxFQUFpRDtBQUMvQyxVQUFNQyxTQUFTLDRDQUN1QlAsZ0JBQWdCLENBQUNLLE1BQUQsQ0FEdkMsUUFFYkMsS0FGYSxDQUFmO0FBSUQ7O0FBRUQsTUFBTUUsV0FBVyxHQUFHUCxRQUFRLENBQUNRLEdBQVQsQ0FBYUosTUFBYixLQUF3QixJQUFJSyxHQUFKLEVBQTVDO0FBRUEsTUFBTUMsT0FBTyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWVAsS0FBWixFQUFtQlEsTUFBbkIsQ0FBMEIsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDdEQsUUFBTUMsT0FBTyxHQUFHbEIsV0FBVyxDQUFDaUIsR0FBRCxDQUEzQjtBQUNBLFFBQU1FLFVBQVUsR0FBR1osS0FBSyxDQUFDVSxHQUFELENBQXhCOztBQUVBLFFBQUksQ0FBQ0UsVUFBRCxJQUFlQSxVQUFVLEtBQUssQ0FBbEMsRUFBcUM7QUFDbkNiLE1BQUFBLE1BQU0sQ0FBQ2MsS0FBUCxDQUFhQyxjQUFiLENBQTRCSCxPQUE1QjtBQUNELEtBRkQsTUFFTztBQUNMWixNQUFBQSxNQUFNLENBQUNjLEtBQVAsQ0FBYUUsV0FBYixDQUF5QkosT0FBekIsRUFBa0NDLFVBQWxDO0FBQ0Q7O0FBRURILElBQUFBLEdBQUcsQ0FBQ08sR0FBSixDQUFRTCxPQUFSLEVBQWlCQyxVQUFqQjtBQUNBVixJQUFBQSxXQUFXLENBQUNlLE1BQVosQ0FBbUJOLE9BQW5CO0FBRUEsV0FBT0YsR0FBUDtBQUNELEdBZGUsRUFjYixJQUFJTCxHQUFKLEVBZGEsQ0FBaEI7QUFnQkFGLEVBQUFBLFdBQVcsQ0FBQ2dCLE9BQVosQ0FBb0IsVUFBQ04sVUFBRCxFQUFhRixHQUFiLEVBQXFCO0FBQ3ZDWCxJQUFBQSxNQUFNLENBQUNjLEtBQVAsQ0FBYUgsR0FBYixJQUFvQixFQUFwQjtBQUNELEdBRkQ7QUFJQWYsRUFBQUEsUUFBUSxDQUFDcUIsR0FBVCxDQUFhakIsTUFBYixFQUFxQk0sT0FBckI7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhbWVsVG9EYXNoLCBzdHJpbmdpZnlFbGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzLmpzXCI7XG5cbmNvbnN0IHN0eWxlTWFwID0gbmV3IFdlYWtNYXAoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVN0eWxlKGhvc3QsIHRhcmdldCwgdmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIikge1xuICAgIHRocm93IFR5cGVFcnJvcihcbiAgICAgIGBTdHlsZSB2YWx1ZSBtdXN0IGJlIGFuIG9iamVjdCBpbiAke3N0cmluZ2lmeUVsZW1lbnQodGFyZ2V0KX06YCxcbiAgICAgIHZhbHVlLFxuICAgICk7XG4gIH1cblxuICBjb25zdCBwcmV2aW91c01hcCA9IHN0eWxlTWFwLmdldCh0YXJnZXQpIHx8IG5ldyBNYXAoKTtcblxuICBjb25zdCBuZXh0TWFwID0gT2JqZWN0LmtleXModmFsdWUpLnJlZHVjZSgobWFwLCBrZXkpID0+IHtcbiAgICBjb25zdCBkYXNoS2V5ID0gY2FtZWxUb0Rhc2goa2V5KTtcbiAgICBjb25zdCBzdHlsZVZhbHVlID0gdmFsdWVba2V5XTtcblxuICAgIGlmICghc3R5bGVWYWx1ZSAmJiBzdHlsZVZhbHVlICE9PSAwKSB7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoZGFzaEtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eShkYXNoS2V5LCBzdHlsZVZhbHVlKTtcbiAgICB9XG5cbiAgICBtYXAuc2V0KGRhc2hLZXksIHN0eWxlVmFsdWUpO1xuICAgIHByZXZpb3VzTWFwLmRlbGV0ZShkYXNoS2V5KTtcblxuICAgIHJldHVybiBtYXA7XG4gIH0sIG5ldyBNYXAoKSk7XG5cbiAgcHJldmlvdXNNYXAuZm9yRWFjaCgoc3R5bGVWYWx1ZSwga2V5KSA9PiB7XG4gICAgdGFyZ2V0LnN0eWxlW2tleV0gPSBcIlwiO1xuICB9KTtcblxuICBzdHlsZU1hcC5zZXQodGFyZ2V0LCBuZXh0TWFwKTtcbn1cbiJdfQ==
;// CONCATENATED MODULE: ./node_modules/hybrids/esm/template/resolvers/property.js



function resolveProperty(attrName, propertyName, isSVG) {
  if (propertyName.substr(0, 2) === "on") {
    var eventType = propertyName.substr(2);
    return resolveEventListener(eventType);
  }

  switch (attrName) {
    case "class":
      return resolveClassList;

    case "style":
      return resolveStyle;

    default:
      return function (host, target, value) {
        if (!isSVG && !(target instanceof SVGElement) && propertyName in target) {
          if (target[propertyName] !== value) {
            target[propertyName] = value;
          }
        } else if (value === false || value === undefined || value === null) {
          target.removeAttribute(attrName);
        } else {
          var attrValue = value === true ? "" : String(value);
          target.setAttribute(attrName, attrValue);
        }
      };
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZW1wbGF0ZS9yZXNvbHZlcnMvcHJvcGVydHkuanMiXSwibmFtZXMiOlsicmVzb2x2ZUV2ZW50TGlzdGVuZXIiLCJyZXNvbHZlQ2xhc3NMaXN0IiwicmVzb2x2ZVN0eWxlTGlzdCIsInJlc29sdmVQcm9wZXJ0eSIsImF0dHJOYW1lIiwicHJvcGVydHlOYW1lIiwiaXNTVkciLCJzdWJzdHIiLCJldmVudFR5cGUiLCJob3N0IiwidGFyZ2V0IiwidmFsdWUiLCJTVkdFbGVtZW50IiwidW5kZWZpbmVkIiwicmVtb3ZlQXR0cmlidXRlIiwiYXR0clZhbHVlIiwiU3RyaW5nIiwic2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxvQkFBUCxNQUFpQyxZQUFqQztBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLFlBQTdCO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsWUFBN0I7QUFFQSxlQUFlLFNBQVNDLGVBQVQsQ0FBeUJDLFFBQXpCLEVBQW1DQyxZQUFuQyxFQUFpREMsS0FBakQsRUFBd0Q7QUFDckUsTUFBSUQsWUFBWSxDQUFDRSxNQUFiLENBQW9CLENBQXBCLEVBQXVCLENBQXZCLE1BQThCLElBQWxDLEVBQXdDO0FBQ3RDLFFBQU1DLFNBQVMsR0FBR0gsWUFBWSxDQUFDRSxNQUFiLENBQW9CLENBQXBCLENBQWxCO0FBQ0EsV0FBT1Asb0JBQW9CLENBQUNRLFNBQUQsQ0FBM0I7QUFDRDs7QUFFRCxVQUFRSixRQUFSO0FBQ0UsU0FBSyxPQUFMO0FBQ0UsYUFBT0gsZ0JBQVA7O0FBQ0YsU0FBSyxPQUFMO0FBQ0UsYUFBT0MsZ0JBQVA7O0FBQ0Y7QUFDRSxhQUFPLFVBQUNPLElBQUQsRUFBT0MsTUFBUCxFQUFlQyxLQUFmLEVBQXlCO0FBQzlCLFlBQ0UsQ0FBQ0wsS0FBRCxJQUNBLEVBQUVJLE1BQU0sWUFBWUUsVUFBcEIsQ0FEQSxJQUVBUCxZQUFZLElBQUlLLE1BSGxCLEVBSUU7QUFDQSxjQUFJQSxNQUFNLENBQUNMLFlBQUQsQ0FBTixLQUF5Qk0sS0FBN0IsRUFBb0M7QUFDbENELFlBQUFBLE1BQU0sQ0FBQ0wsWUFBRCxDQUFOLEdBQXVCTSxLQUF2QjtBQUNEO0FBQ0YsU0FSRCxNQVFPLElBQUlBLEtBQUssS0FBSyxLQUFWLElBQW1CQSxLQUFLLEtBQUtFLFNBQTdCLElBQTBDRixLQUFLLEtBQUssSUFBeEQsRUFBOEQ7QUFDbkVELFVBQUFBLE1BQU0sQ0FBQ0ksZUFBUCxDQUF1QlYsUUFBdkI7QUFDRCxTQUZNLE1BRUE7QUFDTCxjQUFNVyxTQUFTLEdBQUdKLEtBQUssS0FBSyxJQUFWLEdBQWlCLEVBQWpCLEdBQXNCSyxNQUFNLENBQUNMLEtBQUQsQ0FBOUM7QUFDQUQsVUFBQUEsTUFBTSxDQUFDTyxZQUFQLENBQW9CYixRQUFwQixFQUE4QlcsU0FBOUI7QUFDRDtBQUNGLE9BZkQ7QUFOSjtBQXVCRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXNvbHZlRXZlbnRMaXN0ZW5lciBmcm9tIFwiLi9ldmVudC5qc1wiO1xuaW1wb3J0IHJlc29sdmVDbGFzc0xpc3QgZnJvbSBcIi4vY2xhc3MuanNcIjtcbmltcG9ydCByZXNvbHZlU3R5bGVMaXN0IGZyb20gXCIuL3N0eWxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVQcm9wZXJ0eShhdHRyTmFtZSwgcHJvcGVydHlOYW1lLCBpc1NWRykge1xuICBpZiAocHJvcGVydHlOYW1lLnN1YnN0cigwLCAyKSA9PT0gXCJvblwiKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gcHJvcGVydHlOYW1lLnN1YnN0cigyKTtcbiAgICByZXR1cm4gcmVzb2x2ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAoYXR0ck5hbWUpIHtcbiAgICBjYXNlIFwiY2xhc3NcIjpcbiAgICAgIHJldHVybiByZXNvbHZlQ2xhc3NMaXN0O1xuICAgIGNhc2UgXCJzdHlsZVwiOlxuICAgICAgcmV0dXJuIHJlc29sdmVTdHlsZUxpc3Q7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAoaG9zdCwgdGFyZ2V0LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIWlzU1ZHICYmXG4gICAgICAgICAgISh0YXJnZXQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSAmJlxuICAgICAgICAgIHByb3BlcnR5TmFtZSBpbiB0YXJnZXRcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKHRhcmdldFtwcm9wZXJ0eU5hbWVdICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5TmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IGZhbHNlIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSB2YWx1ZSA9PT0gdHJ1ZSA/IFwiXCIgOiBTdHJpbmcodmFsdWUpO1xuICAgICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gIH1cbn1cbiJdfQ==
;// CONCATENATED MODULE: ./node_modules/hybrids/esm/template/core.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function core_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { core_typeof = function _typeof(obj) { return typeof obj; }; } else { core_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return core_typeof(obj); }





/* istanbul ignore next */

try {
  core_process.env.NODE_ENV;
} catch (e) {
  var core_process = {
    env: {
      NODE_ENV: 'production'
    }
  };
} // eslint-disable-line


var TIMESTAMP = Date.now();
var getPlaceholder = function getPlaceholder() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return "{{h-".concat(TIMESTAMP, "-").concat(id, "}}");
};
var PLACEHOLDER_REGEXP_TEXT = getPlaceholder("(\\d+)");
var PLACEHOLDER_REGEXP_EQUAL = new RegExp("^".concat(PLACEHOLDER_REGEXP_TEXT, "$"));
var PLACEHOLDER_REGEXP_ALL = new RegExp(PLACEHOLDER_REGEXP_TEXT, "g");
var ATTR_PREFIX = "--".concat(TIMESTAMP, "--");
var ATTR_REGEXP = new RegExp(ATTR_PREFIX, "g");
var preparedTemplates = new WeakMap();
/* istanbul ignore next */

function applyShadyCSS(template, tagName) {
  if (!tagName) return template;
  return shadyCSS(function (shady) {
    var map = preparedTemplates.get(template);

    if (!map) {
      map = new Map();
      preparedTemplates.set(template, map);
    }

    var clone = map.get(tagName);

    if (!clone) {
      clone = document.createElement("template");
      clone.content.appendChild(template.content.cloneNode(true));
      map.set(tagName, clone);
      var styles = clone.content.querySelectorAll("style");
      Array.from(styles).forEach(function (style) {
        var count = style.childNodes.length + 1;

        for (var i = 0; i < count; i += 1) {
          style.parentNode.insertBefore(document.createTextNode(getPlaceholder()), style);
        }
      });
      shady.prepareTemplate(clone, tagName.toLowerCase());
    }

    return clone;
  }, template);
}

function createSignature(parts, styles) {
  var signature = parts.reduce(function (acc, part, index) {
    if (index === 0) {
      return part;
    }

    if (parts.slice(index).join("").match(/^\s*<\/\s*(table|tr|thead|tbody|tfoot|colgroup)>/)) {
      return "".concat(acc, "<!--").concat(getPlaceholder(index - 1), "-->").concat(part);
    }

    return acc + getPlaceholder(index - 1) + part;
  }, "");

  if (styles) {
    signature += "<style>\n".concat(styles.join("\n/*------*/\n"), "\n</style>");
  }
  /* istanbul ignore if */


  if (IS_IE) {
    return signature.replace(/style\s*=\s*(["][^"]+["]|['][^']+[']|[^\s"'<>/]+)/g, function (match) {
      return "".concat(ATTR_PREFIX).concat(match);
    });
  }

  return signature;
}

function getPropertyName(string) {
  return string.replace(/\s*=\s*['"]*$/g, "").split(/\s+/).pop();
}

function replaceComments(fragment) {
  var iterator = document.createNodeIterator(fragment, NodeFilter.SHOW_COMMENT, null, false);
  var node; // eslint-disable-next-line no-cond-assign

  while (node = iterator.nextNode()) {
    if (PLACEHOLDER_REGEXP_EQUAL.test(node.textContent)) {
      node.parentNode.insertBefore(document.createTextNode(node.textContent), node);
      node.parentNode.removeChild(node);
    }
  }
}

function createInternalWalker(context) {
  var node;
  return {
    get currentNode() {
      return node;
    },

    nextNode: function nextNode() {
      if (node === undefined) {
        node = context.childNodes[0];
      } else if (node.childNodes.length) {
        node = node.childNodes[0];
      } else if (node.nextSibling) {
        node = node.nextSibling;
      } else {
        var parentNode = node.parentNode;
        node = parentNode.nextSibling;

        while (!node && parentNode !== context) {
          parentNode = parentNode.parentNode;
          node = parentNode.nextSibling;
        }
      }

      return !!node;
    }
  };
}

function createExternalWalker(context) {
  return document.createTreeWalker(context, // eslint-disable-next-line no-bitwise
  NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, false);
}
/* istanbul ignore next */


var createWalker = core_typeof(window.ShadyDOM) === "object" && window.ShadyDOM.inUse ? createInternalWalker : createExternalWalker;
var container = document.createElement("div");
var styleSheetsMap = new Map();

function normalizeWhitespace(input) {
  var startIndent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  input = input.replace(/(^[\n\s\t ]+)|([\n\s\t ]+$)+/g, "");
  var i = input.indexOf("\n");

  if (i > -1) {
    var indent = 0 - startIndent - 2;

    for (i += 1; input[i] === " " && i < input.length; i += 1) {
      indent += 1;
    }

    return input.replace(/\n +/g, function (t) {
      return t.substr(0, Math.max(t.length - indent, 1));
    });
  }

  return input;
}

function beautifyTemplateLog(input, index) {
  var placeholder = getPlaceholder(index);
  var output = normalizeWhitespace(input).split("\n").filter(function (i) {
    return i;
  }).map(function (line) {
    var startIndex = line.indexOf(placeholder);

    if (startIndex > -1) {
      return "| ".concat(line, "\n--").concat("-".repeat(startIndex)).concat("^".repeat(6));
    }

    return "| ".concat(line);
  }).join("\n") // eslint-disable-next-line no-template-curly-in-string
  .replace(PLACEHOLDER_REGEXP_ALL, "${...}");
  return "".concat(output);
}

function compileTemplate(rawParts, isSVG, styles) {
  var template = document.createElement("template");
  var parts = [];
  var signature = createSignature(rawParts, styles);
  if (isSVG) signature = "<svg>".concat(signature, "</svg>");
  /* istanbul ignore if */

  if (IS_IE) {
    template.innerHTML = signature;
  } else {
    container.innerHTML = "<template>".concat(signature, "</template>");
    template.content.appendChild(container.children[0].content);
  }

  if (isSVG) {
    var svgRoot = template.content.firstChild;
    template.content.removeChild(svgRoot);
    Array.from(svgRoot.childNodes).forEach(function (node) {
      return template.content.appendChild(node);
    });
  }

  replaceComments(template.content);
  var compileWalker = createWalker(template.content);
  var compileIndex = 0;

  var _loop = function _loop() {
    var node = compileWalker.currentNode;

    if (node.nodeType === Node.TEXT_NODE) {
      var text = node.textContent;

      if (!text.match(PLACEHOLDER_REGEXP_EQUAL)) {
        var results = text.match(PLACEHOLDER_REGEXP_ALL);

        if (results) {
          var currentNode = node;
          results.reduce(function (acc, placeholder) {
            var _acc$pop$split = acc.pop().split(placeholder),
                _acc$pop$split2 = _slicedToArray(_acc$pop$split, 2),
                before = _acc$pop$split2[0],
                next = _acc$pop$split2[1];

            if (before) acc.push(before);
            acc.push(placeholder);
            if (next) acc.push(next);
            return acc;
          }, [text]).forEach(function (part, index) {
            if (index === 0) {
              currentNode.textContent = part;
            } else {
              currentNode = currentNode.parentNode.insertBefore(document.createTextNode(part), currentNode.nextSibling);
            }
          });
        }
      }

      var equal = node.textContent.match(PLACEHOLDER_REGEXP_EQUAL);

      if (equal) {
        /* istanbul ignore else */
        if (!IS_IE) node.textContent = "";
        parts[equal[1]] = [compileIndex, resolveValue];
      }
    } else {
      /* istanbul ignore else */
      // eslint-disable-next-line no-lonely-if
      if (node.nodeType === Node.ELEMENT_NODE) {
        Array.from(node.attributes).forEach(function (attr) {
          var value = attr.value.trim();
          /* istanbul ignore next */

          var name = IS_IE ? attr.name.replace(ATTR_PREFIX, "") : attr.name;
          var equal = value.match(PLACEHOLDER_REGEXP_EQUAL);

          if (equal) {
            var propertyName = getPropertyName(rawParts[equal[1]]);
            parts[equal[1]] = [compileIndex, resolveProperty(name, propertyName, isSVG)];
            node.removeAttribute(attr.name);
          } else {
            var _results = value.match(PLACEHOLDER_REGEXP_ALL);

            if (_results) {
              var partialName = "attr__".concat(name);

              _results.forEach(function (placeholder, index) {
                var _placeholder$match = placeholder.match(PLACEHOLDER_REGEXP_EQUAL),
                    _placeholder$match2 = _slicedToArray(_placeholder$match, 2),
                    id = _placeholder$match2[1];

                parts[id] = [compileIndex, function (host, target, attrValue) {
                  var data = dataMap.get(target, {});
                  data[partialName] = (data[partialName] || value).replace(placeholder, attrValue == null ? "" : attrValue);

                  if (_results.length === 1 || index + 1 === _results.length) {
                    target.setAttribute(name, data[partialName]);
                    data[partialName] = undefined;
                  }
                }];
              });

              attr.value = "";
              /* istanbul ignore next */

              if (IS_IE && name !== attr.name) {
                node.removeAttribute(attr.name);
                node.setAttribute(name, "");
              }
            }
          }
        });
      }
    }

    compileIndex += 1;
  };

  while (compileWalker.nextNode()) {
    _loop();
  }

  return function updateTemplateInstance(host, target, args, styleSheets) {
    var data = dataMap.get(target, {
      type: "function"
    });

    if (template !== data.template) {
      if (data.template || target.nodeType === Node.ELEMENT_NODE) {
        removeTemplate(target);
      }

      data.prevArgs = null;
      var fragment = document.importNode(applyShadyCSS(template, host.tagName).content, true);
      var renderWalker = createWalker(fragment);
      var clonedParts = parts.slice(0);
      var renderIndex = 0;
      var currentPart = clonedParts.shift();
      var markers = [];
      data.template = template;
      data.markers = markers;

      while (renderWalker.nextNode()) {
        var node = renderWalker.currentNode;

        if (node.nodeType === Node.TEXT_NODE) {
          /* istanbul ignore next */
          if (PLACEHOLDER_REGEXP_EQUAL.test(node.textContent)) {
            node.textContent = "";
          } else if (IS_IE) {
            node.textContent = node.textContent.replace(ATTR_REGEXP, "");
          }
        } else if (core_process.env.NODE_ENV !== "production" && node.nodeType === Node.ELEMENT_NODE) {
          if (node.tagName.indexOf("-") > -1 && !customElements.get(node.tagName.toLowerCase())) {
            throw Error("Missing ".concat(stringifyElement(node), " element definition in ").concat(stringifyElement(host)));
          }
        }

        while (currentPart && currentPart[0] === renderIndex) {
          markers.push([node, currentPart[1]]);
          currentPart = clonedParts.shift();
        }

        renderIndex += 1;
      }

      if (target.nodeType === Node.TEXT_NODE) {
        data.startNode = fragment.childNodes[0];
        data.endNode = fragment.childNodes[fragment.childNodes.length - 1];
        var previousChild = target;
        var child = fragment.childNodes[0];

        while (child) {
          target.parentNode.insertBefore(child, previousChild.nextSibling);
          previousChild = child;
          child = fragment.childNodes[0];
        }
      } else {
        target.appendChild(fragment);
      }
    }

    var adoptedStyleSheets = target.adoptedStyleSheets;

    if (styleSheets) {
      var isEqual = false;
      styleSheets = styleSheets.map(function (style) {
        if (style instanceof CSSStyleSheet) return style;
        var styleSheet = styleSheetsMap.get(style);

        if (!styleSheet) {
          styleSheet = new CSSStyleSheet();
          styleSheet.replaceSync(style);
          styleSheetsMap.set(style, styleSheet);
        }

        return styleSheet;
      });

      if (styleSheets.length === adoptedStyleSheets.length) {
        isEqual = true;

        for (var i = 0; i < styleSheets.length; i += 1) {
          if (styleSheets[i] !== adoptedStyleSheets[i]) {
            isEqual = false;
            break;
          }
        }
      }

      if (!isEqual) target.adoptedStyleSheets = styleSheets;
    } else if (adoptedStyleSheets && adoptedStyleSheets.length) {
      target.adoptedStyleSheets = [];
    }

    var prevArgs = data.prevArgs;
    data.prevArgs = args;

    for (var index = 0; index < data.markers.length; index += 1) {
      var _data$markers$index = _slicedToArray(data.markers[index], 2),
          _node = _data$markers$index[0],
          marker = _data$markers$index[1];

      if (!prevArgs || prevArgs[index] !== args[index]) {
        try {
          marker(host, _node, args[index], prevArgs ? prevArgs[index] : undefined);
        } catch (error) {
          if (core_process.env.NODE_ENV !== "production") {
            // eslint-disable-next-line no-console
            console.error("Following error was thrown when updating a template expression in ".concat(stringifyElement(host), "\n").concat(beautifyTemplateLog(signature, index)));
          }

          throw error;
        }
      }
    }

    if (target.nodeType !== Node.TEXT_NODE) {
      shadyCSS(function (shady) {
        if (host.shadowRoot) {
          if (prevArgs) {
            shady.styleSubtree(host);
          } else {
            shady.styleElement(host);
          }
        }
      });
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZS9jb3JlLmpzIl0sIm5hbWVzIjpbInN0cmluZ2lmeUVsZW1lbnQiLCJzaGFkeUNTUyIsIklTX0lFIiwiZGF0YU1hcCIsInJlbW92ZVRlbXBsYXRlIiwicmVzb2x2ZVZhbHVlIiwicmVzb2x2ZVByb3BlcnR5IiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiZSIsIlRJTUVTVEFNUCIsIkRhdGUiLCJub3ciLCJnZXRQbGFjZWhvbGRlciIsImlkIiwiUExBQ0VIT0xERVJfUkVHRVhQX1RFWFQiLCJQTEFDRUhPTERFUl9SRUdFWFBfRVFVQUwiLCJSZWdFeHAiLCJQTEFDRUhPTERFUl9SRUdFWFBfQUxMIiwiQVRUUl9QUkVGSVgiLCJBVFRSX1JFR0VYUCIsInByZXBhcmVkVGVtcGxhdGVzIiwiV2Vha01hcCIsImFwcGx5U2hhZHlDU1MiLCJ0ZW1wbGF0ZSIsInRhZ05hbWUiLCJzaGFkeSIsIm1hcCIsImdldCIsIk1hcCIsInNldCIsImNsb25lIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29udGVudCIsImFwcGVuZENoaWxkIiwiY2xvbmVOb2RlIiwic3R5bGVzIiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwiZnJvbSIsImZvckVhY2giLCJzdHlsZSIsImNvdW50IiwiY2hpbGROb2RlcyIsImxlbmd0aCIsImkiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiY3JlYXRlVGV4dE5vZGUiLCJwcmVwYXJlVGVtcGxhdGUiLCJ0b0xvd2VyQ2FzZSIsImNyZWF0ZVNpZ25hdHVyZSIsInBhcnRzIiwic2lnbmF0dXJlIiwicmVkdWNlIiwiYWNjIiwicGFydCIsImluZGV4Iiwic2xpY2UiLCJqb2luIiwibWF0Y2giLCJyZXBsYWNlIiwiZ2V0UHJvcGVydHlOYW1lIiwic3RyaW5nIiwic3BsaXQiLCJwb3AiLCJyZXBsYWNlQ29tbWVudHMiLCJmcmFnbWVudCIsIml0ZXJhdG9yIiwiY3JlYXRlTm9kZUl0ZXJhdG9yIiwiTm9kZUZpbHRlciIsIlNIT1dfQ09NTUVOVCIsIm5vZGUiLCJuZXh0Tm9kZSIsInRlc3QiLCJ0ZXh0Q29udGVudCIsInJlbW92ZUNoaWxkIiwiY3JlYXRlSW50ZXJuYWxXYWxrZXIiLCJjb250ZXh0IiwiY3VycmVudE5vZGUiLCJ1bmRlZmluZWQiLCJuZXh0U2libGluZyIsImNyZWF0ZUV4dGVybmFsV2Fsa2VyIiwiY3JlYXRlVHJlZVdhbGtlciIsIlNIT1dfRUxFTUVOVCIsIlNIT1dfVEVYVCIsImNyZWF0ZVdhbGtlciIsIndpbmRvdyIsIlNoYWR5RE9NIiwiaW5Vc2UiLCJjb250YWluZXIiLCJzdHlsZVNoZWV0c01hcCIsIm5vcm1hbGl6ZVdoaXRlc3BhY2UiLCJpbnB1dCIsInN0YXJ0SW5kZW50IiwiaW5kZXhPZiIsImluZGVudCIsInQiLCJzdWJzdHIiLCJNYXRoIiwibWF4IiwiYmVhdXRpZnlUZW1wbGF0ZUxvZyIsInBsYWNlaG9sZGVyIiwib3V0cHV0IiwiZmlsdGVyIiwibGluZSIsInN0YXJ0SW5kZXgiLCJyZXBlYXQiLCJjb21waWxlVGVtcGxhdGUiLCJyYXdQYXJ0cyIsImlzU1ZHIiwiaW5uZXJIVE1MIiwiY2hpbGRyZW4iLCJzdmdSb290IiwiZmlyc3RDaGlsZCIsImNvbXBpbGVXYWxrZXIiLCJjb21waWxlSW5kZXgiLCJub2RlVHlwZSIsIk5vZGUiLCJURVhUX05PREUiLCJ0ZXh0IiwicmVzdWx0cyIsImJlZm9yZSIsIm5leHQiLCJwdXNoIiwiZXF1YWwiLCJFTEVNRU5UX05PREUiLCJhdHRyaWJ1dGVzIiwiYXR0ciIsInZhbHVlIiwidHJpbSIsIm5hbWUiLCJwcm9wZXJ0eU5hbWUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJwYXJ0aWFsTmFtZSIsImhvc3QiLCJ0YXJnZXQiLCJhdHRyVmFsdWUiLCJkYXRhIiwic2V0QXR0cmlidXRlIiwidXBkYXRlVGVtcGxhdGVJbnN0YW5jZSIsImFyZ3MiLCJzdHlsZVNoZWV0cyIsInR5cGUiLCJwcmV2QXJncyIsImltcG9ydE5vZGUiLCJyZW5kZXJXYWxrZXIiLCJjbG9uZWRQYXJ0cyIsInJlbmRlckluZGV4IiwiY3VycmVudFBhcnQiLCJzaGlmdCIsIm1hcmtlcnMiLCJjdXN0b21FbGVtZW50cyIsIkVycm9yIiwic3RhcnROb2RlIiwiZW5kTm9kZSIsInByZXZpb3VzQ2hpbGQiLCJjaGlsZCIsImFkb3B0ZWRTdHlsZVNoZWV0cyIsImlzRXF1YWwiLCJDU1NTdHlsZVNoZWV0Iiwic3R5bGVTaGVldCIsInJlcGxhY2VTeW5jIiwibWFya2VyIiwiZXJyb3IiLCJjb25zb2xlIiwic2hhZG93Um9vdCIsInN0eWxlU3VidHJlZSIsInN0eWxlRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxnQkFBVCxFQUEyQkMsUUFBM0IsRUFBcUNDLEtBQXJDLFFBQWtELGFBQWxEO0FBQ0EsU0FBU0MsT0FBVCxFQUFrQkMsY0FBbEIsUUFBd0MsWUFBeEM7QUFFQSxPQUFPQyxZQUFQLE1BQXlCLHNCQUF6QjtBQUNBLE9BQU9DLGVBQVAsTUFBNEIseUJBQTVCO0FBRUE7O0FBQ0EsSUFBSTtBQUFFQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWjtBQUFzQixDQUE1QixDQUE2QixPQUFNQyxDQUFOLEVBQVM7QUFBRSxNQUFJSCxPQUFPLEdBQUc7QUFBRUMsSUFBQUEsR0FBRyxFQUFFO0FBQUVDLE1BQUFBLFFBQVEsRUFBRTtBQUFaO0FBQVAsR0FBZDtBQUFvRCxDLENBQUM7OztBQUU3RixJQUFNRSxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxFQUFsQjtBQUVBLE9BQU8sSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLE1BQUNDLEVBQUQsdUVBQU0sQ0FBTjtBQUFBLHVCQUFtQkosU0FBbkIsY0FBZ0NJLEVBQWhDO0FBQUEsQ0FBdkI7QUFFUCxJQUFNQyx1QkFBdUIsR0FBR0YsY0FBYyxDQUFDLFFBQUQsQ0FBOUM7QUFDQSxJQUFNRyx3QkFBd0IsR0FBRyxJQUFJQyxNQUFKLFlBQWVGLHVCQUFmLE9BQWpDO0FBQ0Es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LFVBQ3BEZSxLQURvRDtBQUFBLFVBQzlDMkYsTUFEOEM7O0FBRTNELFVBQUksQ0FBQ25CLFFBQUQsSUFBYUEsUUFBUSxDQUFDdkYsS0FBRCxDQUFSLEtBQW9Cb0YsSUFBSSxDQUFDcEYsS0FBRCxDQUF6QyxFQUFrRDtBQUNoRCxZQUFJO0FBQ0YwRyxVQUFBQSxNQUFNLENBQ0o1QixJQURJLEVBRUovRCxLQUZJLEVBR0pxRSxJQUFJLENBQUNwRixLQUFELENBSEEsRUFJSnVGLFFBQVEsR0FBR0EsUUFBUSxDQUFDdkYsS0FBRCxDQUFYLEdBQXFCdUIsU0FKekIsQ0FBTjtBQU1ELFNBUEQsQ0FPRSxPQUFPb0YsS0FBUCxFQUFjO0FBQ2QsY0FBSS9KLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTdCLEVBQTJDO0FBQ3pDO0FBQ0E4SixZQUFBQSxPQUFPLENBQUNELEtBQVIsNkVBQ3VFdEssZ0JBQWdCLENBQ25GeUksSUFEbUYsQ0FEdkYsZUFHUWxDLG1CQUFtQixDQUFDaEQsU0FBRCxFQUFZSSxLQUFaLENBSDNCO0FBS0Q7O0FBQ0QsZ0JBQU0yRyxLQUFOO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFFBQUk1QixNQUFNLENBQUNuQixRQUFQLEtBQW9CQyxJQUFJLENBQUNDLFNBQTdCLEVBQXdDO0FBQ3RDeEgsTUFBQUEsUUFBUSxDQUFDLFVBQUEwQixLQUFLLEVBQUk7QUFDaEIsWUFBSThHLElBQUksQ0FBQytCLFVBQVQsRUFBcUI7QUFDbkIsY0FBSXRCLFFBQUosRUFBYztBQUNadkgsWUFBQUEsS0FBSyxDQUFDOEksWUFBTixDQUFtQmhDLElBQW5CO0FBQ0QsV0FGRCxNQUVPO0FBQ0w5RyxZQUFBQSxLQUFLLENBQUMrSSxZQUFOLENBQW1CakMsSUFBbkI7QUFDRDtBQUNGO0FBQ0YsT0FSTyxDQUFSO0FBU0Q7QUFDRixHQWxKRDtBQW1KRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0cmluZ2lmeUVsZW1lbnQsIHNoYWR5Q1NTLCBJU19JRSB9IGZyb20gXCIuLi91dGlscy5qc1wiO1xuaW1wb3J0IHsgZGF0YU1hcCwgcmVtb3ZlVGVtcGxhdGUgfSBmcm9tIFwiLi91dGlscy5qc1wiO1xuXG5pbXBvcnQgcmVzb2x2ZVZhbHVlIGZyb20gXCIuL3Jlc29sdmVycy92YWx1ZS5qc1wiO1xuaW1wb3J0IHJlc29sdmVQcm9wZXJ0eSBmcm9tIFwiLi9yZXNvbHZlcnMvcHJvcGVydHkuanNcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbnRyeSB7IHByb2Nlc3MuZW52Lk5PREVfRU5WIH0gY2F0Y2goZSkgeyB2YXIgcHJvY2VzcyA9IHsgZW52OiB7IE5PREVfRU5WOiAncHJvZHVjdGlvbicgfSB9OyB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuY29uc3QgVElNRVNUQU1QID0gRGF0ZS5ub3coKTtcblxuZXhwb3J0IGNvbnN0IGdldFBsYWNlaG9sZGVyID0gKGlkID0gMCkgPT4gYHt7aC0ke1RJTUVTVEFNUH0tJHtpZH19fWA7XG5cbmNvbnN0IFBMQUNFSE9MREVSX1JFR0VYUF9URVhUID0gZ2V0UGxhY2Vob2xkZXIoXCIoXFxcXGQrKVwiKTtcbmNvbnN0IFBMQUNFSE9MREVSX1JFR0VYUF9FUVVBTCA9IG5ldyBSZWdFeHAoYF4ke1BMQUNFSE9MREVSX1JFR0VYUF9URVhUfSRgKTtcbmNvbnN0IFBMQUNFSE9MREVSX1JFR0VYUF9BTEwgPSBuZXcgUmVnRXhwKFBMQUNFSE9MREVSX1JFR0VYUF9URVhULCBcImdcIik7XG5cbmNvbnN0IEFUVFJfUFJFRklYID0gYC0tJHtUSU1FU1RBTVB9LS1gO1xuY29uc3QgQVRUUl9SRUdFWFAgPSBuZXcgUmVnRXhwKEFUVFJfUFJFRklYLCBcImdcIik7XG5cbmNvbnN0IHByZXBhcmVkVGVtcGxhdGVzID0gbmV3IFdlYWtNYXAoKTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIGFwcGx5U2hhZHlDU1ModGVtcGxhdGUsIHRhZ05hbWUpIHtcbiAgaWYgKCF0YWdOYW1lKSByZXR1cm4gdGVtcGxhdGU7XG5cbiAgcmV0dXJuIHNoYWR5Q1NTKHNoYWR5ID0+IHtcbiAgICBsZXQgbWFwID0gcHJlcGFyZWRUZW1wbGF0ZXMuZ2V0KHRlbXBsYXRlKTtcbiAgICBpZiAoIW1hcCkge1xuICAgICAgbWFwID0gbmV3IE1hcCgpO1xuICAgICAgcHJlcGFyZWRUZW1wbGF0ZXMuc2V0KHRlbXBsYXRlLCBtYXApO1xuICAgIH1cblxuICAgIGxldCBjbG9uZSA9IG1hcC5nZXQodGFnTmFtZSk7XG5cbiAgICBpZiAoIWNsb25lKSB7XG4gICAgICBjbG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbiAgICAgIGNsb25lLmNvbnRlbnQuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuXG4gICAgICBtYXAuc2V0KHRhZ05hbWUsIGNsb25lKTtcblxuICAgICAgY29uc3Qgc3R5bGVzID0gY2xvbmUuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3R5bGVcIik7XG5cbiAgICAgIEFycmF5LmZyb20oc3R5bGVzKS5mb3JFYWNoKHN0eWxlID0+IHtcbiAgICAgICAgY29uc3QgY291bnQgPSBzdHlsZS5jaGlsZE5vZGVzLmxlbmd0aCArIDE7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkgKz0gMSkge1xuICAgICAgICAgIHN0eWxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZ2V0UGxhY2Vob2xkZXIoKSksXG4gICAgICAgICAgICBzdHlsZSxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgc2hhZHkucHJlcGFyZVRlbXBsYXRlKGNsb25lLCB0YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cbiAgICByZXR1cm4gY2xvbmU7XG4gIH0sIHRlbXBsYXRlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lnbmF0dXJlKHBhcnRzLCBzdHlsZXMpIHtcbiAgbGV0IHNpZ25hdHVyZSA9IHBhcnRzLnJlZHVjZSgoYWNjLCBwYXJ0LCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHBhcnQ7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgcGFydHNcbiAgICAgICAgLnNsaWNlKGluZGV4KVxuICAgICAgICAuam9pbihcIlwiKVxuICAgICAgICAubWF0Y2goL15cXHMqPFxcL1xccyoodGFibGV8dHJ8dGhlYWR8dGJvZHl8dGZvb3R8Y29sZ3JvdXApPi8pXG4gICAgKSB7XG4gICAgICByZXR1cm4gYCR7YWNjfTwhLS0ke2dldFBsYWNlaG9sZGVyKGluZGV4IC0gMSl9LS0+JHtwYXJ0fWA7XG4gICAgfVxuICAgIHJldHVybiBhY2MgKyBnZXRQbGFjZWhvbGRlcihpbmRleCAtIDEpICsgcGFydDtcbiAgfSwgXCJcIik7XG5cbiAgaWYgKHN0eWxlcykge1xuICAgIHNpZ25hdHVyZSArPSBgPHN0eWxlPlxcbiR7c3R5bGVzLmpvaW4oXCJcXG4vKi0tLS0tLSovXFxuXCIpfVxcbjwvc3R5bGU+YDtcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoSVNfSUUpIHtcbiAgICByZXR1cm4gc2lnbmF0dXJlLnJlcGxhY2UoXG4gICAgICAvc3R5bGVcXHMqPVxccyooW1wiXVteXCJdK1tcIl18WyddW14nXStbJ118W15cXHNcIic8Pi9dKykvZyxcbiAgICAgIG1hdGNoID0+IGAke0FUVFJfUFJFRklYfSR7bWF0Y2h9YCxcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydHlOYW1lKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nXG4gICAgLnJlcGxhY2UoL1xccyo9XFxzKlsnXCJdKiQvZywgXCJcIilcbiAgICAuc3BsaXQoL1xccysvKVxuICAgIC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNvbW1lbnRzKGZyYWdtZW50KSB7XG4gIGNvbnN0IGl0ZXJhdG9yID0gZG9jdW1lbnQuY3JlYXRlTm9kZUl0ZXJhdG9yKFxuICAgIGZyYWdtZW50LFxuICAgIE5vZGVGaWx0ZXIuU0hPV19DT01NRU5ULFxuICAgIG51bGwsXG4gICAgZmFsc2UsXG4gICk7XG4gIGxldCBub2RlO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uZC1hc3NpZ25cbiAgd2hpbGUgKChub2RlID0gaXRlcmF0b3IubmV4dE5vZGUoKSkpIHtcbiAgICBpZiAoUExBQ0VIT0xERVJfUkVHRVhQX0VRVUFMLnRlc3Qobm9kZS50ZXh0Q29udGVudCkpIHtcbiAgICAgIG5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXG4gICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5vZGUudGV4dENvbnRlbnQpLFxuICAgICAgICBub2RlLFxuICAgICAgKTtcbiAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUludGVybmFsV2Fsa2VyKGNvbnRleHQpIHtcbiAgbGV0IG5vZGU7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgY3VycmVudE5vZGUoKSB7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9LFxuICAgIG5leHROb2RlKCkge1xuICAgICAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBub2RlID0gY29udGV4dC5jaGlsZE5vZGVzWzBdO1xuICAgICAgfSBlbHNlIGlmIChub2RlLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIG5vZGUgPSBub2RlLmNoaWxkTm9kZXNbMF07XG4gICAgICB9IGVsc2UgaWYgKG5vZGUubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgbm9kZSA9IG5vZGUubmV4dFNpYmxpbmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgbm9kZSA9IHBhcmVudE5vZGUubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgd2hpbGUgKCFub2RlICYmIHBhcmVudE5vZGUgIT09IGNvbnRleHQpIHtcbiAgICAgICAgICBwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgIG5vZGUgPSBwYXJlbnROb2RlLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAhIW5vZGU7XG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXh0ZXJuYWxXYWxrZXIoY29udGV4dCkge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihcbiAgICBjb250ZXh0LFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQgfCBOb2RlRmlsdGVyLlNIT1dfVEVYVCxcbiAgICBudWxsLFxuICAgIGZhbHNlLFxuICApO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgY3JlYXRlV2Fsa2VyID1cbiAgdHlwZW9mIHdpbmRvdy5TaGFkeURPTSA9PT0gXCJvYmplY3RcIiAmJiB3aW5kb3cuU2hhZHlET00uaW5Vc2VcbiAgICA/IGNyZWF0ZUludGVybmFsV2Fsa2VyXG4gICAgOiBjcmVhdGVFeHRlcm5hbFdhbGtlcjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHN0eWxlU2hlZXRzTWFwID0gbmV3IE1hcCgpO1xuXG5mdW5jdGlvbiBub3JtYWxpemVXaGl0ZXNwYWNlKGlucHV0LCBzdGFydEluZGVudCA9IDApIHtcbiAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC8oXltcXG5cXHNcXHQgXSspfChbXFxuXFxzXFx0IF0rJCkrL2csIFwiXCIpO1xuXG4gIGxldCBpID0gaW5wdXQuaW5kZXhPZihcIlxcblwiKTtcbiAgaWYgKGkgPiAtMSkge1xuICAgIGxldCBpbmRlbnQgPSAwIC0gc3RhcnRJbmRlbnQgLSAyO1xuICAgIGZvciAoaSArPSAxOyBpbnB1dFtpXSA9PT0gXCIgXCIgJiYgaSA8IGlucHV0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpbmRlbnQgKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL1xcbiArL2csIHQgPT5cbiAgICAgIHQuc3Vic3RyKDAsIE1hdGgubWF4KHQubGVuZ3RoIC0gaW5kZW50LCAxKSksXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBpbnB1dDtcbn1cblxuZnVuY3Rpb24gYmVhdXRpZnlUZW1wbGF0ZUxvZyhpbnB1dCwgaW5kZXgpIHtcbiAgY29uc3QgcGxhY2Vob2xkZXIgPSBnZXRQbGFjZWhvbGRlcihpbmRleCk7XG5cbiAgY29uc3Qgb3V0cHV0ID0gbm9ybWFsaXplV2hpdGVzcGFjZShpbnB1dClcbiAgICAuc3BsaXQoXCJcXG5cIilcbiAgICAuZmlsdGVyKGkgPT4gaSlcbiAgICAubWFwKGxpbmUgPT4ge1xuICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IGxpbmUuaW5kZXhPZihwbGFjZWhvbGRlcik7XG5cbiAgICAgIGlmIChzdGFydEluZGV4ID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIGB8ICR7bGluZX1cXG4tLSR7XCItXCIucmVwZWF0KHN0YXJ0SW5kZXgpfSR7XCJeXCIucmVwZWF0KDYpfWA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBgfCAke2xpbmV9YDtcbiAgICB9KVxuICAgIC5qb2luKFwiXFxuXCIpXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRlbXBsYXRlLWN1cmx5LWluLXN0cmluZ1xuICAgIC5yZXBsYWNlKFBMQUNFSE9MREVSX1JFR0VYUF9BTEwsIFwiJHsuLi59XCIpO1xuXG4gIHJldHVybiBgJHtvdXRwdXR9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVUZW1wbGF0ZShyYXdQYXJ0cywgaXNTVkcsIHN0eWxlcykge1xuICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbiAgY29uc3QgcGFydHMgPSBbXTtcblxuICBsZXQgc2lnbmF0dXJlID0gY3JlYXRlU2lnbmF0dXJlKHJhd1BhcnRzLCBzdHlsZXMpO1xuICBpZiAoaXNTVkcpIHNpZ25hdHVyZSA9IGA8c3ZnPiR7c2lnbmF0dXJlfTwvc3ZnPmA7XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChJU19JRSkge1xuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IHNpZ25hdHVyZTtcbiAgfSBlbHNlIHtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYDx0ZW1wbGF0ZT4ke3NpZ25hdHVyZX08L3RlbXBsYXRlPmA7XG4gICAgdGVtcGxhdGUuY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIuY2hpbGRyZW5bMF0uY29udGVudCk7XG4gIH1cblxuICBpZiAoaXNTVkcpIHtcbiAgICBjb25zdCBzdmdSb290ID0gdGVtcGxhdGUuY29udGVudC5maXJzdENoaWxkO1xuICAgIHRlbXBsYXRlLmNvbnRlbnQucmVtb3ZlQ2hpbGQoc3ZnUm9vdCk7XG4gICAgQXJyYXkuZnJvbShzdmdSb290LmNoaWxkTm9kZXMpLmZvckVhY2gobm9kZSA9PlxuICAgICAgdGVtcGxhdGUuY29udGVudC5hcHBlbmRDaGlsZChub2RlKSxcbiAgICApO1xuICB9XG5cbiAgcmVwbGFjZUNvbW1lbnRzKHRlbXBsYXRlLmNvbnRlbnQpO1xuXG4gIGNvbnN0IGNvbXBpbGVXYWxrZXIgPSBjcmVhdGVXYWxrZXIodGVtcGxhdGUuY29udGVudCk7XG4gIGxldCBjb21waWxlSW5kZXggPSAwO1xuXG4gIHdoaWxlIChjb21waWxlV2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICBjb25zdCBub2RlID0gY29tcGlsZVdhbGtlci5jdXJyZW50Tm9kZTtcblxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgY29uc3QgdGV4dCA9IG5vZGUudGV4dENvbnRlbnQ7XG5cbiAgICAgIGlmICghdGV4dC5tYXRjaChQTEFDRUhPTERFUl9SRUdFWFBfRVFVQUwpKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSB0ZXh0Lm1hdGNoKFBMQUNFSE9MREVSX1JFR0VYUF9BTEwpO1xuICAgICAgICBpZiAocmVzdWx0cykge1xuICAgICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IG5vZGU7XG4gICAgICAgICAgcmVzdWx0c1xuICAgICAgICAgICAgLnJlZHVjZShcbiAgICAgICAgICAgICAgKGFjYywgcGxhY2Vob2xkZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbYmVmb3JlLCBuZXh0XSA9IGFjYy5wb3AoKS5zcGxpdChwbGFjZWhvbGRlcik7XG4gICAgICAgICAgICAgICAgaWYgKGJlZm9yZSkgYWNjLnB1c2goYmVmb3JlKTtcbiAgICAgICAgICAgICAgICBhY2MucHVzaChwbGFjZWhvbGRlcik7XG4gICAgICAgICAgICAgICAgaWYgKG5leHQpIGFjYy5wdXNoKG5leHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFt0ZXh0XSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5mb3JFYWNoKChwYXJ0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZS50ZXh0Q29udGVudCA9IHBhcnQ7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHBhcnQpLFxuICAgICAgICAgICAgICAgICAgY3VycmVudE5vZGUubmV4dFNpYmxpbmcsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZXF1YWwgPSBub2RlLnRleHRDb250ZW50Lm1hdGNoKFBMQUNFSE9MREVSX1JFR0VYUF9FUVVBTCk7XG4gICAgICBpZiAoZXF1YWwpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgaWYgKCFJU19JRSkgbm9kZS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIHBhcnRzW2VxdWFsWzFdXSA9IFtjb21waWxlSW5kZXgsIHJlc29sdmVWYWx1ZV07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lbHktaWZcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICBBcnJheS5mcm9tKG5vZGUuYXR0cmlidXRlcykuZm9yRWFjaChhdHRyID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHIudmFsdWUudHJpbSgpO1xuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgY29uc3QgbmFtZSA9IElTX0lFID8gYXR0ci5uYW1lLnJlcGxhY2UoQVRUUl9QUkVGSVgsIFwiXCIpIDogYXR0ci5uYW1lO1xuICAgICAgICAgIGNvbnN0IGVxdWFsID0gdmFsdWUubWF0Y2goUExBQ0VIT0xERVJfUkVHRVhQX0VRVUFMKTtcbiAgICAgICAgICBpZiAoZXF1YWwpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IGdldFByb3BlcnR5TmFtZShyYXdQYXJ0c1tlcXVhbFsxXV0pO1xuICAgICAgICAgICAgcGFydHNbZXF1YWxbMV1dID0gW1xuICAgICAgICAgICAgICBjb21waWxlSW5kZXgsXG4gICAgICAgICAgICAgIHJlc29sdmVQcm9wZXJ0eShuYW1lLCBwcm9wZXJ0eU5hbWUsIGlzU1ZHKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyLm5hbWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHRzID0gdmFsdWUubWF0Y2goUExBQ0VIT0xERVJfUkVHRVhQX0FMTCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0cykge1xuICAgICAgICAgICAgICBjb25zdCBwYXJ0aWFsTmFtZSA9IGBhdHRyX18ke25hbWV9YDtcblxuICAgICAgICAgICAgICByZXN1bHRzLmZvckVhY2goKHBsYWNlaG9sZGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFssIGlkXSA9IHBsYWNlaG9sZGVyLm1hdGNoKFBMQUNFSE9MREVSX1JFR0VYUF9FUVVBTCk7XG4gICAgICAgICAgICAgICAgcGFydHNbaWRdID0gW1xuICAgICAgICAgICAgICAgICAgY29tcGlsZUluZGV4LFxuICAgICAgICAgICAgICAgICAgKGhvc3QsIHRhcmdldCwgYXR0clZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBkYXRhTWFwLmdldCh0YXJnZXQsIHt9KTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtwYXJ0aWFsTmFtZV0gPSAoZGF0YVtwYXJ0aWFsTmFtZV0gfHwgdmFsdWUpLnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0clZhbHVlID09IG51bGwgPyBcIlwiIDogYXR0clZhbHVlLFxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA9PT0gMSB8fCBpbmRleCArIDEgPT09IHJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShuYW1lLCBkYXRhW3BhcnRpYWxOYW1lXSk7XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YVtwYXJ0aWFsTmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgYXR0ci52YWx1ZSA9IFwiXCI7XG5cbiAgICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICAgICAgaWYgKElTX0lFICYmIG5hbWUgIT09IGF0dHIubmFtZSkge1xuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHIubmFtZSk7XG4gICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgXCJcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBpbGVJbmRleCArPSAxO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVRlbXBsYXRlSW5zdGFuY2UoaG9zdCwgdGFyZ2V0LCBhcmdzLCBzdHlsZVNoZWV0cykge1xuICAgIGNvbnN0IGRhdGEgPSBkYXRhTWFwLmdldCh0YXJnZXQsIHsgdHlwZTogXCJmdW5jdGlvblwiIH0pO1xuXG4gICAgaWYgKHRlbXBsYXRlICE9PSBkYXRhLnRlbXBsYXRlKSB7XG4gICAgICBpZiAoZGF0YS50ZW1wbGF0ZSB8fCB0YXJnZXQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIHJlbW92ZVRlbXBsYXRlKHRhcmdldCk7XG4gICAgICB9XG5cbiAgICAgIGRhdGEucHJldkFyZ3MgPSBudWxsO1xuXG4gICAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUoXG4gICAgICAgIGFwcGx5U2hhZHlDU1ModGVtcGxhdGUsIGhvc3QudGFnTmFtZSkuY29udGVudCxcbiAgICAgICAgdHJ1ZSxcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHJlbmRlcldhbGtlciA9IGNyZWF0ZVdhbGtlcihmcmFnbWVudCk7XG4gICAgICBjb25zdCBjbG9uZWRQYXJ0cyA9IHBhcnRzLnNsaWNlKDApO1xuXG4gICAgICBsZXQgcmVuZGVySW5kZXggPSAwO1xuICAgICAgbGV0IGN1cnJlbnRQYXJ0ID0gY2xvbmVkUGFydHMuc2hpZnQoKTtcblxuICAgICAgY29uc3QgbWFya2VycyA9IFtdO1xuXG4gICAgICBkYXRhLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICBkYXRhLm1hcmtlcnMgPSBtYXJrZXJzO1xuXG4gICAgICB3aGlsZSAocmVuZGVyV2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHJlbmRlcldhbGtlci5jdXJyZW50Tm9kZTtcblxuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgIGlmIChQTEFDRUhPTERFUl9SRUdFWFBfRVFVQUwudGVzdChub2RlLnRleHRDb250ZW50KSkge1xuICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgfSBlbHNlIGlmIChJU19JRSkge1xuICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IG5vZGUudGV4dENvbnRlbnQucmVwbGFjZShBVFRSX1JFR0VYUCwgXCJcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgIG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFXG4gICAgICAgICkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIG5vZGUudGFnTmFtZS5pbmRleE9mKFwiLVwiKSA+IC0xICYmXG4gICAgICAgICAgICAhY3VzdG9tRWxlbWVudHMuZ2V0KG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgICAgIGBNaXNzaW5nICR7c3RyaW5naWZ5RWxlbWVudChcbiAgICAgICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgICApfSBlbGVtZW50IGRlZmluaXRpb24gaW4gJHtzdHJpbmdpZnlFbGVtZW50KGhvc3QpfWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChjdXJyZW50UGFydCAmJiBjdXJyZW50UGFydFswXSA9PT0gcmVuZGVySW5kZXgpIHtcbiAgICAgICAgICBtYXJrZXJzLnB1c2goW25vZGUsIGN1cnJlbnRQYXJ0WzFdXSk7XG4gICAgICAgICAgY3VycmVudFBhcnQgPSBjbG9uZWRQYXJ0cy5zaGlmdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVySW5kZXggKz0gMTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldC5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgZGF0YS5zdGFydE5vZGUgPSBmcmFnbWVudC5jaGlsZE5vZGVzWzBdO1xuICAgICAgICBkYXRhLmVuZE5vZGUgPSBmcmFnbWVudC5jaGlsZE5vZGVzW2ZyYWdtZW50LmNoaWxkTm9kZXMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgbGV0IHByZXZpb3VzQ2hpbGQgPSB0YXJnZXQ7XG5cbiAgICAgICAgbGV0IGNoaWxkID0gZnJhZ21lbnQuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgICAgdGFyZ2V0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNoaWxkLCBwcmV2aW91c0NoaWxkLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICBwcmV2aW91c0NoaWxkID0gY2hpbGQ7XG4gICAgICAgICAgY2hpbGQgPSBmcmFnbWVudC5jaGlsZE5vZGVzWzBdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFkb3B0ZWRTdHlsZVNoZWV0cyA9IHRhcmdldC5hZG9wdGVkU3R5bGVTaGVldHM7XG4gICAgaWYgKHN0eWxlU2hlZXRzKSB7XG4gICAgICBsZXQgaXNFcXVhbCA9IGZhbHNlO1xuXG4gICAgICBzdHlsZVNoZWV0cyA9IHN0eWxlU2hlZXRzLm1hcChzdHlsZSA9PiB7XG4gICAgICAgIGlmIChzdHlsZSBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQpIHJldHVybiBzdHlsZTtcblxuICAgICAgICBsZXQgc3R5bGVTaGVldCA9IHN0eWxlU2hlZXRzTWFwLmdldChzdHlsZSk7XG4gICAgICAgIGlmICghc3R5bGVTaGVldCkge1xuICAgICAgICAgIHN0eWxlU2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgICAgICAgIHN0eWxlU2hlZXQucmVwbGFjZVN5bmMoc3R5bGUpO1xuICAgICAgICAgIHN0eWxlU2hlZXRzTWFwLnNldChzdHlsZSwgc3R5bGVTaGVldCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlU2hlZXQ7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHN0eWxlU2hlZXRzLmxlbmd0aCA9PT0gYWRvcHRlZFN0eWxlU2hlZXRzLmxlbmd0aCkge1xuICAgICAgICBpc0VxdWFsID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHlsZVNoZWV0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGlmIChzdHlsZVNoZWV0c1tpXSAhPT0gYWRvcHRlZFN0eWxlU2hlZXRzW2ldKSB7XG4gICAgICAgICAgICBpc0VxdWFsID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpc0VxdWFsKSB0YXJnZXQuYWRvcHRlZFN0eWxlU2hlZXRzID0gc3R5bGVTaGVldHM7XG4gICAgfSBlbHNlIGlmIChhZG9wdGVkU3R5bGVTaGVldHMgJiYgYWRvcHRlZFN0eWxlU2hlZXRzLmxlbmd0aCkge1xuICAgICAgdGFyZ2V0LmFkb3B0ZWRTdHlsZVNoZWV0cyA9IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHByZXZBcmdzID0gZGF0YS5wcmV2QXJncztcbiAgICBkYXRhLnByZXZBcmdzID0gYXJncztcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLm1hcmtlcnMubGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgICBjb25zdCBbbm9kZSwgbWFya2VyXSA9IGRhdGEubWFya2Vyc1tpbmRleF07XG4gICAgICBpZiAoIXByZXZBcmdzIHx8IHByZXZBcmdzW2luZGV4XSAhPT0gYXJnc1tpbmRleF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBtYXJrZXIoXG4gICAgICAgICAgICBob3N0LFxuICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgIGFyZ3NbaW5kZXhdLFxuICAgICAgICAgICAgcHJldkFyZ3MgPyBwcmV2QXJnc1tpbmRleF0gOiB1bmRlZmluZWQsXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgYEZvbGxvd2luZyBlcnJvciB3YXMgdGhyb3duIHdoZW4gdXBkYXRpbmcgYSB0ZW1wbGF0ZSBleHByZXNzaW9uIGluICR7c3RyaW5naWZ5RWxlbWVudChcbiAgICAgICAgICAgICAgICBob3N0LFxuICAgICAgICAgICAgICApfVxcbiR7YmVhdXRpZnlUZW1wbGF0ZUxvZyhzaWduYXR1cmUsIGluZGV4KX1gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0Lm5vZGVUeXBlICE9PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgc2hhZHlDU1Moc2hhZHkgPT4ge1xuICAgICAgICBpZiAoaG9zdC5zaGFkb3dSb290KSB7XG4gICAgICAgICAgaWYgKHByZXZBcmdzKSB7XG4gICAgICAgICAgICBzaGFkeS5zdHlsZVN1YnRyZWUoaG9zdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoYWR5LnN0eWxlRWxlbWVudChob3N0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==
;// CONCATENATED MODULE: ./node_modules/hybrids/esm/template/helpers.js
function helpers_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { helpers_typeof = function _typeof(obj) { return typeof obj; }; } else { helpers_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return helpers_typeof(obj); }

function helpers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function helpers_resolveValue(_ref, setter) {
  var target = _ref.target;
  var value;

  switch (target.type) {
    case "radio":
    case "checkbox":
      value = target.checked && target.value;
      break;

    case "file":
      value = target.files;
      break;

    default:
      value = target.value;
  }

  setter(value);
}

function getPartialObject(name, value) {
  return name.split(".").reverse().reduce(function (acc, key) {
    if (!acc) return helpers_defineProperty({}, key, value);
    return helpers_defineProperty({}, key, acc);
  }, null);
}

var stringCache = new Map();
function set(property, valueOrPath) {
  if (!property) {
    throw Error("The first argument must be a property name or an object instance: ".concat(property));
  }

  if (helpers_typeof(property) === "object") {
    if (valueOrPath === undefined) {
      throw Error("For model instance property the second argument must be defined");
    }

    var store = storePointer.get(property);

    if (!store) {
      throw Error("Provided object must be a model instance of the store");
    }

    return function (host, event) {
      helpers_resolveValue(event, function (value) {
        store.set(property, valueOrPath !== null ? getPartialObject(valueOrPath, value) : valueOrPath);
      });
    };
  }

  if (arguments.length === 2) {
    return function (host) {
      host[property] = valueOrPath;
    };
  }

  var fn = stringCache.get(property);

  if (!fn) {
    fn = function fn(host, event) {
      helpers_resolveValue(event, function (value) {
        host[property] = value;
      });
    };

    stringCache.set(property, fn);
  }

  return fn;
}
var promiseMap = new WeakMap();
function resolve(promise, placeholder) {
  var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  return function (host, target) {
    var timeout;

    if (placeholder) {
      timeout = setTimeout(function () {
        timeout = undefined;
        requestAnimationFrame(function () {
          placeholder(host, target);
        });
      }, delay);
    }

    promiseMap.set(target, promise);
    promise.then(function (template) {
      if (timeout) clearTimeout(timeout);

      if (promiseMap.get(target) === promise) {
        template(host, target);
        promiseMap.set(target, null);
      }
    });
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZS9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbInN0b3JlUG9pbnRlciIsInJlc29sdmVWYWx1ZSIsInNldHRlciIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsImNoZWNrZWQiLCJmaWxlcyIsImdldFBhcnRpYWxPYmplY3QiLCJuYW1lIiwic3BsaXQiLCJyZXZlcnNlIiwicmVkdWNlIiwiYWNjIiwia2V5Iiwic3RyaW5nQ2FjaGUiLCJNYXAiLCJzZXQiLCJwcm9wZXJ0eSIsInZhbHVlT3JQYXRoIiwiRXJyb3IiLCJ1bmRlZmluZWQiLCJzdG9yZSIsImdldCIsImhvc3QiLCJldmVudCIsImFyZ3VtZW50cyIsImxlbmd0aCIsImZuIiwicHJvbWlzZU1hcCIsIldlYWtNYXAiLCJyZXNvbHZlIiwicHJvbWlzZSIsInBsYWNlaG9sZGVyIiwiZGVsYXkiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInRoZW4iLCJ0ZW1wbGF0ZSIsImNsZWFyVGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLFNBQVNBLFlBQVQsUUFBNkIsYUFBN0I7O0FBRUEsU0FBU0MsWUFBVCxPQUFrQ0MsTUFBbEMsRUFBMEM7QUFBQSxNQUFsQkMsTUFBa0IsUUFBbEJBLE1BQWtCO0FBQ3hDLE1BQUlDLEtBQUo7O0FBRUEsVUFBUUQsTUFBTSxDQUFDRSxJQUFmO0FBQ0UsU0FBSyxPQUFMO0FBQ0EsU0FBSyxVQUFMO0FBQ0VELE1BQUFBLEtBQUssR0FBR0QsTUFBTSxDQUFDRyxPQUFQLElBQWtCSCxNQUFNLENBQUNDLEtBQWpDO0FBQ0E7O0FBQ0YsU0FBSyxNQUFMO0FBQ0VBLE1BQUFBLEtBQUssR0FBR0QsTUFBTSxDQUFDSSxLQUFmO0FBQ0E7O0FBQ0Y7QUFDRUgsTUFBQUEsS0FBSyxHQUFHRCxNQUFNLENBQUNDLEtBQWY7QUFUSjs7QUFZQUYsRUFBQUEsTUFBTSxDQUFDRSxLQUFELENBQU47QUFDRDs7QUFFRCxTQUFTSSxn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QSxJQUFBQSxPQUFPLENBQUNNLElBQVIsQ0FBYSxVQUFBQyxRQUFRLEVBQUk7QUFDdkIsVUFBSUosT0FBSixFQUFhSyxZQUFZLENBQUNMLE9BQUQsQ0FBWjs7QUFFYixVQUFJTixVQUFVLENBQUNOLEdBQVgsQ0FBZXBCLE1BQWYsTUFBMkI2QixPQUEvQixFQUF3QztBQUN0Q08sUUFBQUEsUUFBUSxDQUFDZixJQUFELEVBQU9yQixNQUFQLENBQVI7QUFDQTBCLFFBQUFBLFVBQVUsQ0FBQ1osR0FBWCxDQUFlZCxNQUFmLEVBQXVCLElBQXZCO0FBQ0Q7QUFDRixLQVBEO0FBUUQsR0F2QkQ7QUF3QkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdG9yZVBvaW50ZXIgfSBmcm9tIFwiLi4vdXRpbHMuanNcIjtcblxuZnVuY3Rpb24gcmVzb2x2ZVZhbHVlKHsgdGFyZ2V0IH0sIHNldHRlcikge1xuICBsZXQgdmFsdWU7XG5cbiAgc3dpdGNoICh0YXJnZXQudHlwZSkge1xuICAgIGNhc2UgXCJyYWRpb1wiOlxuICAgIGNhc2UgXCJjaGVja2JveFwiOlxuICAgICAgdmFsdWUgPSB0YXJnZXQuY2hlY2tlZCAmJiB0YXJnZXQudmFsdWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZmlsZVwiOlxuICAgICAgdmFsdWUgPSB0YXJnZXQuZmlsZXM7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gIH1cblxuICBzZXR0ZXIodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBnZXRQYXJ0aWFsT2JqZWN0KG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBuYW1lXG4gICAgLnNwbGl0KFwiLlwiKVxuICAgIC5yZXZlcnNlKClcbiAgICAucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgaWYgKCFhY2MpIHJldHVybiB7IFtrZXldOiB2YWx1ZSB9O1xuICAgICAgcmV0dXJuIHsgW2tleV06IGFjYyB9O1xuICAgIH0sIG51bGwpO1xufVxuXG5jb25zdCBzdHJpbmdDYWNoZSA9IG5ldyBNYXAoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldChwcm9wZXJ0eSwgdmFsdWVPclBhdGgpIHtcbiAgaWYgKCFwcm9wZXJ0eSkge1xuICAgIHRocm93IEVycm9yKFxuICAgICAgYFRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgcHJvcGVydHkgbmFtZSBvciBhbiBvYmplY3QgaW5zdGFuY2U6ICR7cHJvcGVydHl9YCxcbiAgICApO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwcm9wZXJ0eSA9PT0gXCJvYmplY3RcIikge1xuICAgIGlmICh2YWx1ZU9yUGF0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgXCJGb3IgbW9kZWwgaW5zdGFuY2UgcHJvcGVydHkgdGhlIHNlY29uZCBhcmd1bWVudCBtdXN0IGJlIGRlZmluZWRcIixcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RvcmUgPSBzdG9yZVBvaW50ZXIuZ2V0KHByb3BlcnR5KTtcblxuICAgIGlmICghc3RvcmUpIHtcbiAgICAgIHRocm93IEVycm9yKFwiUHJvdmlkZWQgb2JqZWN0IG11c3QgYmUgYSBtb2RlbCBpbnN0YW5jZSBvZiB0aGUgc3RvcmVcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChob3N0LCBldmVudCkgPT4ge1xuICAgICAgcmVzb2x2ZVZhbHVlKGV2ZW50LCB2YWx1ZSA9PiB7XG4gICAgICAgIHN0b3JlLnNldChcbiAgICAgICAgICBwcm9wZXJ0eSxcbiAgICAgICAgICB2YWx1ZU9yUGF0aCAhPT0gbnVsbFxuICAgICAgICAgICAgPyBnZXRQYXJ0aWFsT2JqZWN0KHZhbHVlT3JQYXRoLCB2YWx1ZSlcbiAgICAgICAgICAgIDogdmFsdWVPclBhdGgsXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICByZXR1cm4gaG9zdCA9PiB7XG4gICAgICBob3N0W3Byb3BlcnR5XSA9IHZhbHVlT3JQYXRoO1xuICAgIH07XG4gIH1cblxuICBsZXQgZm4gPSBzdHJpbmdDYWNoZS5nZXQocHJvcGVydHkpO1xuXG4gIGlmICghZm4pIHtcbiAgICBmbiA9IChob3N0LCBldmVudCkgPT4ge1xuICAgICAgcmVzb2x2ZVZhbHVlKGV2ZW50LCB2YWx1ZSA9PiB7XG4gICAgICAgIGhvc3RbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgc3RyaW5nQ2FjaGUuc2V0KHByb3BlcnR5LCBmbik7XG4gIH1cblxuICByZXR1cm4gZm47XG59XG5cbmNvbnN0IHByb21pc2VNYXAgPSBuZXcgV2Vha01hcCgpO1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmUocHJvbWlzZSwgcGxhY2Vob2xkZXIsIGRlbGF5ID0gMjAwKSB7XG4gIHJldHVybiAoaG9zdCwgdGFyZ2V0KSA9PiB7XG4gICAgbGV0IHRpbWVvdXQ7XG5cbiAgICBpZiAocGxhY2Vob2xkZXIpIHtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGltZW91dCA9IHVuZGVmaW5lZDtcblxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHBsYWNlaG9sZGVyKGhvc3QsIHRhcmdldCk7XG4gICAgICAgIH0pO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH1cblxuICAgIHByb21pc2VNYXAuc2V0KHRhcmdldCwgcHJvbWlzZSk7XG5cbiAgICBwcm9taXNlLnRoZW4odGVtcGxhdGUgPT4ge1xuICAgICAgaWYgKHRpbWVvdXQpIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblxuICAgICAgaWYgKHByb21pc2VNYXAuZ2V0KHRhcmdldCkgPT09IHByb21pc2UpIHtcbiAgICAgICAgdGVtcGxhdGUoaG9zdCwgdGFyZ2V0KTtcbiAgICAgICAgcHJvbWlzZU1hcC5zZXQodGFyZ2V0LCBudWxsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cbiJdfQ==
;// CONCATENATED MODULE: ./node_modules/hybrids/esm/template/index.js



var PLACEHOLDER = getPlaceholder();
var SVG_PLACEHOLDER = getPlaceholder("svg");
var STYLE_IMPORT_REGEXP = /@import/;
var templatesMap = new Map();
var stylesMap = new WeakMap();
var methods = {
  define: function define(elements) {
    define_define(elements);
    return this;
  },
  key: function key(id) {
    this.id = id;
    return this;
  },
  style: function style() {
    for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
      styles[_key] = arguments[_key];
    }

    stylesMap.set(this, styles.filter(function (style) {
      return style;
    }));
    return this;
  }
};

function create(parts, args, isSVG) {
  var createTemplate = function createTemplate(host) {
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : host;
    var styles = stylesMap.get(createTemplate);
    var hasAdoptedStyleSheets;
    var id = parts.join(PLACEHOLDER);

    if (styles) {
      var joinedStyles = styles.join(PLACEHOLDER);
      hasAdoptedStyleSheets = !!target.adoptedStyleSheets && !STYLE_IMPORT_REGEXP.test(joinedStyles);
      if (!hasAdoptedStyleSheets) id += joinedStyles;
    }

    if (isSVG) id += SVG_PLACEHOLDER;
    var render = templatesMap.get(id);

    if (!render) {
      render = compileTemplate(parts, isSVG, !hasAdoptedStyleSheets && styles);
      templatesMap.set(id, render);
    }

    render(host, target, args, hasAdoptedStyleSheets && styles);
  };

  return Object.assign(createTemplate, methods);
}

function template_html(parts) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return create(parts, args);
}
function svg(parts) {
  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return create(parts, args, true);
}
Object.assign(template_html, helpers_namespaceObject);
Object.assign(svg, helpers_namespaceObject);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZW1wbGF0ZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZpbmVFbGVtZW50cyIsImNvbXBpbGVUZW1wbGF0ZSIsImdldFBsYWNlaG9sZGVyIiwiaGVscGVycyIsIlBMQUNFSE9MREVSIiwiU1ZHX1BMQUNFSE9MREVSIiwiU1RZTEVfSU1QT1JUX1JFR0VYUCIsInRlbXBsYXRlc01hcCIsIk1hcCIsInN0eWxlc01hcCIsIldlYWtNYXAiLCJtZXRob2RzIiwiZGVmaW5lIiwiZWxlbWVudHMiLCJrZXkiLCJpZCIsInN0eWxlIiwic3R5bGVzIiwic2V0IiwiZmlsdGVyIiwiY3JlYXRlIiwicGFydHMiLCJhcmdzIiwiaXNTVkciLCJjcmVhdGVUZW1wbGF0ZSIsImhvc3QiLCJ0YXJnZXQiLCJnZXQiLCJoYXNBZG9wdGVkU3R5bGVTaGVldHMiLCJqb2luIiwiam9pbmVkU3R5bGVzIiwiYWRvcHRlZFN0eWxlU2hlZXRzIiwidGVzdCIsInJlbmRlciIsIk9iamVjdCIsImFzc2lnbiIsImh0bWwiLCJzdmciXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLGNBQVAsTUFBMkIsY0FBM0I7QUFFQSxTQUFTQyxlQUFULEVBQTBCQyxjQUExQixRQUFnRCxXQUFoRDtBQUNBLE9BQU8sS0FBS0MsT0FBWixNQUF5QixjQUF6QjtBQUVBLElBQU1DLFdBQVcsR0FBR0YsY0FBYyxFQUFsQztBQUNBLElBQU1HLGVBQWUsR0FBR0gsY0FBYyxDQUFDLEtBQUQsQ0FBdEM7QUFDQSxJQUFNSSxtQkFBbUIsR0FBRyxTQUE1QjtBQUVBLElBQU1DLFlBQVksR0FBRyxJQUFJQyxHQUFKLEVBQXJCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLElBQUlDLE9BQUosRUFBbEI7QUFFQSxJQUFNQyxPQUFPLEdBQUc7QUFDZEMsRUFBQUEsTUFEYyxrQkFDUEMsUUFETyxFQUNHO0FBQ2ZiLElBQUFBLGNBQWMsQ0FBQ2EsUUFBRCxDQUFkO0FBQ0EsV0FBTyxJQUFQO0FBQ0QsR0FKYTtBQUtkQyxFQUFBQSxHQUxjLGVBS1ZDLEVBTFUsRUFLTjtBQUNOLFNBQUtBLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFdBQU8sSUFBUDtBQUNELEdBUmE7QUFTZEMsRUFBQUEsS0FUYyxtQkFTRztBQUFBLHNDQUFSQyxNQUFRO0FBQVJBLE1BQUFBLE1BQVE7QUFBQTs7QUFDZlIsSUFBQUEsU0FBUyxDQUFDUyxHQUFWLENBQ0UsSUFERixFQUVFRCxNQUFNLENBQUNFLE1BQVAsQ0FBYyxVQUFBSCxLQUFLO0FBQUEsYUFBSUEsS0FBSjtBQUFBLEtBQW5CLENBRkY7QUFJQSxXQUFPLElBQVA7QUFDRDtBQWZhLENBQWhCOztBQWtCQSxTQUFTSSxNQUFULENBQWdCQyxLQUFoQixFQUF1QkMsSUFBdkIsRUFBNkJDLEtBQTdCLEVBQW9DO0FBQ2xDLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsSUFBRCxFQUF5QjtBQUFBLFFBQWxCQyxNQUFrQix1RUFBVEQsSUFBUztBQUM5QyxRQUFNUixNQUFNLEdBQUdSLFNBQVMsQ0FBQ2tCLEdBQVYsQ0FBY0gsY0FBZCxDQUFmO0FBQ0EsUUFBSUkscUJBQUo7QUFDQSxRQUFJYixFQUFFLEdBQUdNLEtBQUssQ0FBQ1EsSUFBTixDQUFXekIsV0FBWCxDQUFUOztBQUVBLFFBQUlhLE1BQUosRUFBWTtBQUNWLFVBQU1hLFlBQVksR0FBR2IsTUFBTSxDQUFDWSxJQUFQLENBQVl6QixXQUFaLENBQXJCO0FBQ0F3QixNQUFBQSxxQkFBcUIsR0FDbkIsQ0FBQyxDQUFDRixNQUFNLENBQUNLLGtCQUFULElBQStCLENBQUN6QixtQkFBbUIsQ0FBQzBCLElBQXBCLENBQXlCRixZQUF6QixDQURsQztBQUVBLFVBQUksQ0FBQ0YscUJBQUwsRUFBNEJiLEVBQUUsSUFBSWUsWUFBTjtBQUM3Qjs7QUFFRCxRQUFJUCxLQUFKLEVBQVdSLEVBQUUsSUFBSVYsZUFBTjtBQUVYLFFBQUk0QixNQUFNLEdBQUcxQixZQUFZLENBQUNvQixHQUFiLENBQWlCWixFQUFqQixDQUFiOztBQUNBLFFBQUksQ0FBQ2tCLE1BQUwsRUFBYTtBQUNYQSxNQUFBQSxNQUFNLEdBQUdoQyxlQUFlLENBQUNvQixLQUFELEVBQVFFLEtBQVIsRUFBZSxDQUFDSyxxQkFBRCxJQUEwQlgsTUFBekMsQ0FBeEI7QUFDQVYsTUFBQUEsWUFBWSxDQUFDVyxHQUFiLENBQWlCSCxFQUFqQixFQUFxQmtCLE1BQXJCO0FBQ0Q7O0FBRURBLElBQUFBLE1BQU0sQ0FBQ1IsSUFBRCxFQUFPQyxNQUFQLEVBQWVKLElBQWYsRUFBcUJNLHFCQUFxQixJQUFJWCxNQUE5QyxDQUFOO0FBQ0QsR0FyQkQ7O0FBdUJBLFNBQU9pQixNQUFNLENBQUNDLE1BQVAsQ0FBY1gsY0FBZCxFQUE4QmIsT0FBOUIsQ0FBUDtBQUNEOztBQUVELE9BQU8sU0FBU3lCLElBQVQsQ0FBY2YsS0FBZCxFQUE4QjtBQUFBLHFDQUFOQyxJQUFNO0FBQU5BLElBQUFBLElBQU07QUFBQTs7QUFDbkMsU0FBT0YsTUFBTSxDQUFDQyxLQUFELEVBQVFDLElBQVIsQ0FBYjtBQUNEO0FBRUQsT0FBTyxTQUFTZSxHQUFULENBQWFoQixLQUFiLEVBQTZCO0FBQUEscUNBQU5DLElBQU07QUFBTkEsSUFBQUEsSUFBTTtBQUFBOztBQUNsQyxTQUFPRixNQUFNLENBQUNDLEtBQUQsRUFBUUMsSUFBUixFQUFjLElBQWQsQ0FBYjtBQUNEO0FBRURZLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxJQUFkLEVBQW9CakMsT0FBcEI7QUFDQStCLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjRSxHQUFkLEVBQW1CbEMsT0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGVmaW5lRWxlbWVudHMgZnJvbSBcIi4uL2RlZmluZS5qc1wiO1xuXG5pbXBvcnQgeyBjb21waWxlVGVtcGxhdGUsIGdldFBsYWNlaG9sZGVyIH0gZnJvbSBcIi4vY29yZS5qc1wiO1xuaW1wb3J0ICogYXMgaGVscGVycyBmcm9tIFwiLi9oZWxwZXJzLmpzXCI7XG5cbmNvbnN0IFBMQUNFSE9MREVSID0gZ2V0UGxhY2Vob2xkZXIoKTtcbmNvbnN0IFNWR19QTEFDRUhPTERFUiA9IGdldFBsYWNlaG9sZGVyKFwic3ZnXCIpO1xuY29uc3QgU1RZTEVfSU1QT1JUX1JFR0VYUCA9IC9AaW1wb3J0LztcblxuY29uc3QgdGVtcGxhdGVzTWFwID0gbmV3IE1hcCgpO1xuY29uc3Qgc3R5bGVzTWFwID0gbmV3IFdlYWtNYXAoKTtcblxuY29uc3QgbWV0aG9kcyA9IHtcbiAgZGVmaW5lKGVsZW1lbnRzKSB7XG4gICAgZGVmaW5lRWxlbWVudHMoZWxlbWVudHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBrZXkoaWQpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIHN0eWxlKC4uLnN0eWxlcykge1xuICAgIHN0eWxlc01hcC5zZXQoXG4gICAgICB0aGlzLFxuICAgICAgc3R5bGVzLmZpbHRlcihzdHlsZSA9PiBzdHlsZSksXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZShwYXJ0cywgYXJncywgaXNTVkcpIHtcbiAgY29uc3QgY3JlYXRlVGVtcGxhdGUgPSAoaG9zdCwgdGFyZ2V0ID0gaG9zdCkgPT4ge1xuICAgIGNvbnN0IHN0eWxlcyA9IHN0eWxlc01hcC5nZXQoY3JlYXRlVGVtcGxhdGUpO1xuICAgIGxldCBoYXNBZG9wdGVkU3R5bGVTaGVldHM7XG4gICAgbGV0IGlkID0gcGFydHMuam9pbihQTEFDRUhPTERFUik7XG5cbiAgICBpZiAoc3R5bGVzKSB7XG4gICAgICBjb25zdCBqb2luZWRTdHlsZXMgPSBzdHlsZXMuam9pbihQTEFDRUhPTERFUik7XG4gICAgICBoYXNBZG9wdGVkU3R5bGVTaGVldHMgPVxuICAgICAgICAhIXRhcmdldC5hZG9wdGVkU3R5bGVTaGVldHMgJiYgIVNUWUxFX0lNUE9SVF9SRUdFWFAudGVzdChqb2luZWRTdHlsZXMpO1xuICAgICAgaWYgKCFoYXNBZG9wdGVkU3R5bGVTaGVldHMpIGlkICs9IGpvaW5lZFN0eWxlcztcbiAgICB9XG5cbiAgICBpZiAoaXNTVkcpIGlkICs9IFNWR19QTEFDRUhPTERFUjtcblxuICAgIGxldCByZW5kZXIgPSB0ZW1wbGF0ZXNNYXAuZ2V0KGlkKTtcbiAgICBpZiAoIXJlbmRlcikge1xuICAgICAgcmVuZGVyID0gY29tcGlsZVRlbXBsYXRlKHBhcnRzLCBpc1NWRywgIWhhc0Fkb3B0ZWRTdHlsZVNoZWV0cyAmJiBzdHlsZXMpO1xuICAgICAgdGVtcGxhdGVzTWFwLnNldChpZCwgcmVuZGVyKTtcbiAgICB9XG5cbiAgICByZW5kZXIoaG9zdCwgdGFyZ2V0LCBhcmdzLCBoYXNBZG9wdGVkU3R5bGVTaGVldHMgJiYgc3R5bGVzKTtcbiAgfTtcblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihjcmVhdGVUZW1wbGF0ZSwgbWV0aG9kcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBodG1sKHBhcnRzLCAuLi5hcmdzKSB7XG4gIHJldHVybiBjcmVhdGUocGFydHMsIGFyZ3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3ZnKHBhcnRzLCAuLi5hcmdzKSB7XG4gIHJldHVybiBjcmVhdGUocGFydHMsIGFyZ3MsIHRydWUpO1xufVxuXG5PYmplY3QuYXNzaWduKGh0bWwsIGhlbHBlcnMpO1xuT2JqZWN0LmFzc2lnbihzdmcsIGhlbHBlcnMpO1xuIl19
// EXTERNAL MODULE: ./dist/tailwind.css
var tailwind = __webpack_require__(485);
;// CONCATENATED MODULE: ./src/styles.js



/* harmony default export */ const styles = (template_html([`<style>${tailwind/* default */.Z}</style>`]));

;// CONCATENATED MODULE: ./src/components/shadow-button.js



const ShadowButton = {
  onclick: null,
  text: '',
  render: ({ onclick, text }) => template_html`
    ${styles}
    <div class="inline-flex rounded-md shadow">
      <a
        href="#"
        class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        onclick="${onclick}"
      >
        ${text}
      </a>
    </div>
  `,
}
define_define('shadow-button', ShadowButton)

;// CONCATENATED MODULE: ./src/components/profile-header.js



function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
}

function _onScroll(host) {
  document.addEventListener('scroll', () => {
    if (window.scrollY > 5 && window.innerWidth < 1024) {
      host.visible = false
      return
    }
    host.visible = true
  })
}

const ProfileHeader = {
  title: '',
  subtitle: '',
  _visible: true,
  visible: {
    get: (host) => host._visible,
    set: (host, value) => (host._visible = value),
    connect: _onScroll,
  },
  render: ({ visible, title, subtitle }) => {
    return template_html`
      <style>
        .navigation-tab-active {
          color: rgb(255, 0, 0) !important;
        }
        .profile-header-text {
          ${!visible && 'height: 0px; visibility: hidden;'}
        }
      </style>
      ${styles}
      <div class="bg-gray-200 z-20 fixed" style="width:100%;">
        <div
          class="max-w-7xl mx-auto py-2 lg:py-6 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between"
        >
          <div class="tracking-tight profile-header-text">
            <h2 class="font-extrabold text-xl lg:text-3xl block text-gray-800">
              ${title}
            </h2>
            ${subtitle &&
            template_html` <h4
              class="block text-blue-800 text-base lg:text-2xl font-semibold"
            >
              ${subtitle}
            </h4>`}
          </div>
          <div class="flex justify-center">
            <slot></slot>
          </div>
        </div>
      </div>
    `
  },
}
define_define('profile-header', ProfileHeader)

;// CONCATENATED MODULE: ./src/components/parallax-star.js



function boxShadows(size, color) {
  return Array.from(
    { length: size },
    () => `${Math.random() * 2000}px ${Math.random() * 2000}px ${color}`
  ).join(' , ')
}

const ParallaxStar = {
  size: 3,
  starCount: 100,
  animationDuration: 30,
  starColor: '#CFF',
  render: ({ size, starCount, animationDuration, starColor }) => {
    const parallaxStarCN = `parallax-star-${size}-${starCount}-${animationDuration}`
    const bs = boxShadows(starCount, starColor)
    return template_html`
      <style>
        @keyframes movingStars {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-2000px);
          }
        }
        .${parallaxStarCN} {
          width: ${size}px;
          height: ${size}px;
          box-shadow: ${bs};
          position: fixed;
          animation-name: movingStars;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          animation-duration: ${animationDuration}s;
        }
        .${parallaxStarCN}::after {
          content: ' ';
          position: fixed;
          top: 2000px;
          width: ${size}px;
          height: ${size}px;
          box-shadow: ${bs};
        }
      </style>
      ${styles}
      <div class="${parallaxStarCN} z-0"></div>
    `
  },
}
define_define('parallax-star', ParallaxStar)

;// CONCATENATED MODULE: ./src/components/labeled-logo.js



const LabeledLogo = {
  logo: {},
  render: ({ logo }) => {
    const { src, label } = logo
    return template_html`
      ${styles}
      <div class="flex flex-col items-center">
        <img class="h-16 lg:h-24" src="${src}" />
        <span class="text-white text-sm lg:text-lg">${label}</span>
      </div>
    `
  },
}
define_define('labeled-logo', LabeledLogo)

;// CONCATENATED MODULE: ./src/constants/logos.js
const LOGOS = {
  ANDROID: {
    src: 'img/logos/android.png',
    label: 'Android',
  },
  ANGULAR: {
    src: 'img/logos/angular.png',
    label: 'Angular',
  },
  BLENDER: {
    src: 'img/logos/blender.png',
    label: 'Blender',
  },
  C_SHARP: {
    src: 'img/logos/c-sharp.png',
    label: 'C#',
  },
  FLUTTER: {
    src: 'img/logos/flutter.png',
    label: 'Flutter',
  },
  HYBRIDS_JS: {
    src: 'img/logos/hybrids.png',
    label: 'Hybrids JS',
  },
  JAVA: {
    src: 'img/logos/java.png',
    label: 'Java',
  },
  KNOCKOUT_JS: {
    src: 'img/logos/knockout-js.png',
    label: 'Knockout JS',
  },
  MONGO_DB: {
    src: 'img/logos/mongodb.png',
    label: 'Mongo DB',
  },
  NODE_JS: {
    src: 'img/logos/nodejs.png',
    label: 'Node JS',
  },
  POSTGRE_SQL: {
    src: 'img/logos/postgres.png',
    label: 'PostgreSQL',
  },
  REACT: {
    src: 'img/logos/react.png',
    label: 'React',
  },
  TAILWIND_CSS: {
    src: 'img/logos/tailwind-css.svg',
    label: 'Tailwind CSS',
  },
  UNITY: {
    src: 'img/logos/unity.png',
    label: 'Unity',
  },
}

/* harmony default export */ const logos = (LOGOS);

// EXTERNAL MODULE: ./node_modules/lodash.chunk/index.js
var lodash_chunk = __webpack_require__(658);
var lodash_chunk_default = /*#__PURE__*/__webpack_require__.n(lodash_chunk);
;// CONCATENATED MODULE: ./src/components/ui-card.js







const UICard = {
  render: () => {
    return template_html`
      <style>
        @media (min-width: 1024px) {
          .lg-w-140 {
            width: 36rem !important;
          }
        }
        .width-92-percent {
          width: 92%;
          margin: auto;
        }
      </style>
      ${styles}
      <div
        class="bg-gray-700 text-white text-3xl p-6 lg:p-12 mb-10 lg-w-140 width-92-percent"
        style="box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);"
      >
        <slot></slot>
      </div>
    `
  },
}
define_define('ui-card', UICard)

;// CONCATENATED MODULE: ./src/components/experience-card.js








const ExperienceCard = {
  companyName: '',
  position: '',
  dateRange: '',
  summary: '',
  technologies: [],
  render: ({ companyName, position, dateRange, summary, technologies }) => {
    return template_html`
      <style>
        @media (min-width: 1024px) {
          .lg-w-140 {
            width: 36rem !important;
          }
        }
        .width-92-percent {
          width: 92%;
          margin: auto;
        }
      </style>
      ${styles}
      <ui-card>
        <span class="block font-bold">${companyName}</span>
        <span class="block text-2xl font-semibold">${position}</span>
        <span class="block text-xl italic mb-10">${dateRange}</span>
        ${template_html`<p class="block text-base mb-10">${template_html([summary])}</p>`}
        <slot></slot>
        <span class="block text-xl font-bold mb-10">Technologies</span>
        ${lodash_chunk_default()(technologies, 3).map(
          (chunk) =>
            template_html`<div class="flex flex-row justify-evenly mb-10">
              ${chunk.map(
                (logo) => template_html`<labeled-logo logo="${logo}"></labeled-logo>`
              )}
            </div>`
        )}
      </ui-card>
    `
  },
}
define_define('experience-card', ExperienceCard)

;// CONCATENATED MODULE: ./src/components/category-section.js



const CategorySection = {
  id: '',
  categoryName: '',
  render: ({ id, categoryName }) => template_html`
    ${styles}
    <div
      id="${id}"
      name="${id}"
      class="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start mt-8 lg:mt-16"
    >
      <div class="text-4xl text-white lg:mr-40 mb-4 lg:mb-0 lg:w-48">
        ${categoryName}
      </div>
      <div class="flex-col justify-start">
        <slot></slot>
      </div>
    </div>
  `,
}
define_define('category-section', CategorySection)

;// CONCATENATED MODULE: ./src/constants/experiences.js
const EXPERIENCES = {
  EMPLIFY: {
    summary: [
      `As the 60th employee at Emplify, I joined a more established startup.  
            Emplify provides Employee Engagement services including assessments for employees and coaching for managers.`,
      `Working with a larger Product team has been so rewarding in helping shape my mentality about how to approach building products.  
            With a process of first Establishing a Minimum Viable Product together and pairing it with a suitable Engineering solution, I have learned 
            to better poke holes in designs, anticipate the technical challenges, and cut scope.  Doing this due dilligence before development, I'm able 
            to both reduce wasted or out of scope work, visualize of the problem we're solving, have a clear direction of development, and produce a 
            better outcome for our clients.`,
    ],
  },
  LIFESHARE: {
    summary: [
      `I was the 9th employee hired at a startup that provided digital signage,
          communication, and entertainment solutions for the Senior Living
          industry. The product consisted of a web based content management system
          and a centralized REST API that provided data to a set top box, mobile app,
          and Alexa devices.`,
      `LifeShare blessed me with the opportunity to wear multiple hats early on
        in my career with challenges such as managing an internship program,
        operating as the primary triage with our client success team, and
        participating in recruiting efforts.`,
      `Juggling a handful of tech stacks exposed me to many different technologies and business
        requirements.  For example, our set top box client needed to be easily readable by those with impared vision
        and have minimal data consumption due to bandwidth and network reliability issues.  Our Alexa service needed to 
        be easy to provision: you wouldn't expect a Senior to be shipped an Echo, go to the Alexa app on the phone, and link their account.
        They should be able to use it right away so we established a process that accomplished just that!`,
      `LifeShare successfully exited in July of 2019 with an acquisition and I soon sought out another small company due to my desire to work at startups.`,
    ],
  },
}

/* harmony default export */ const experiences = (EXPERIENCES);

;// CONCATENATED MODULE: ./src/constants/values.js
const VALUES = {
  FAIRNESS: {
    name: 'Fairness',
    description: `In a personal context it means treating
        everyone equally and with respect. In a business sense, it is
        delivering a fair value to customers and following ethical
        practices.`,
  },
  TRANSPARENCY: {
    name: 'Transparency',
    description: `Being honest and up front with open
      communication. This is not always easy to achieve however the
      opposite tends to erode trust and understanding.`,
  },
  COURAGE: {
    name: 'Courage',
    description: `The willingness to push the limits. Embracing
    failure as a lesson. Without taking a risk there is no chance of
    success.`,
  },
  EXCELLENCE: {
    name: 'Excellence',
    description: `If I'm going to put my name on something, I
    give it 110% and strive to deliver the highest quality outcome
    given a set of constraints.`,
  },
  BEGINNERS_MIND: {
    name: "Beginner's Mind",
    description: `One of the most important lessons I
      learned from reading a book of Buddhist teachings.
      <a href="https://en.wikipedia.org/wiki/Shoshin"
        >From Wikipedia</a
      >, "it refers to having an attitude of openness, eagerness, and
      lack of preconceptions when studying a subject, even when
      studying at an advanced level, just as a beginner would".`,
  },
}

/* harmony default export */ const values = (VALUES);

;// CONCATENATED MODULE: ./src/pages/home-page.js






function experiencesToHtml(experiences) {
  return `<p class='mb-4'>${experiences.join('</p><p class="mb-4">')}</p>`
}

function renderValue(value) {
  return template_html`<b>${value.name}</b> - ${template_html([value.description])}`
}

const HomePage = {
  render: () => template_html`
    ${styles}
    <profile-header
      title="Alex Crowley"
      subtitle="Software Engineer and Entreprenuer"
    >
      <navigation-tab text="Intro" nav-id="intro"></navigation-tab>
      <navigation-tab text="Values" nav-id="values"></navigation-tab>
      <navigation-tab text="Experience" nav-id="experience"></navigation-tab>
      <dropdown-menu>
        <dropdown-menu-item
          selected=${() => (window.location.href = '/projects.html')}
          >Projects</dropdown-menu-item
        >
        <dropdown-menu-item
          selected=${() => window.open('/alex-crowley-resume.pdf', '_blank')}
          >Download Resume</dropdown-menu-item
        >
      </dropdown-menu>
    </profile-header>
    <star-background>
      <div class="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        <div
          id="intro"
          class="flex flex-col lg:flex-row items-center justify-start mt-28 lg:mt-36"
        >
          <img src="img/profile.png" class="rounded-full h-44 lg:h-72" />
          <h3 class="text-xl text-white ml-10 mr-10 lg:ml-10 lg:mr-0">
            <span class="block text-2xl lg:text-3xl">Howdy!</span>
            <span class="block text-base lg:text-xl"
              >I'm Alex, a Software Engineer based out of Indianapolis.</span
            ><span class="text-base lg:text-xl"
              >I bring cool ideas to life using cutting edge software.</span
            >
          </h3>
        </div>
        <category-section id="values" category-name="Values">
          <ui-card>
            <p class="block text-base mb-4">
              Over the course of my life, I've established a set of guiding
              principles. This list isn't all encompasing but is a good
              representation of how I approach everything in life.
            </p>
            <ul style="list-style-type:disc" class="text-base ml-4">
              <li>${renderValue(values.FAIRNESS)}</li>
              <li>${renderValue(values.TRANSPARENCY)}</li>
              <li>${renderValue(values.COURAGE)}</li>
              <li>${renderValue(values.EXCELLENCE)}</li>
              <li>${renderValue(values.BEGINNERS_MIND)}</li>
            </ul>
          </ui-card>
        </category-section>
        <category-section id="experience" category-name="Experience">
          <experience-card
            company-name="Emplify"
            position="Software Engineer"
            date-range="March 2020 - Present"
            summary="${experiencesToHtml(experiences.EMPLIFY.summary)}"
            ,
            technologies="${[logos.NODE_JS, logos.POSTGRE_SQL, logos.REACT]}"
          >
          </experience-card>
          <experience-card
            company-name="LifeShare Technologies"
            position="Software Engineer"
            date-range="March 2017 - March 2020"
            summary="${experiencesToHtml(experiences.LIFESHARE.summary)}"
            technologies=${[
              logos.ANDROID,
              logos.ANGULAR,
              logos.FLUTTER,
              logos.JAVA,
              logos.KNOCKOUT_JS,
              logos.MONGO_DB,
            ]}
          ></experience-card>
        </category-section>
      </div>
    </star-background>
  `,
}

define_define('home-page', HomePage)

;// CONCATENATED MODULE: ./src/constants/projects.js
const PROJECTS = {
  PERSONAL_WEBSITE: {
    summary: [
      `I have always considered Backend development as my specialty in software development.    
      The website could have easily been created using WordPress however I decided to challenge myself by creating the site with good ol' fashioned HTML, CSS, and JavaScript.`,
      `Wanting to leverage reusable components and a minimalistic library, I settled on a library called <a href='https://hybrids.js.org'><i><b>Hybrids JS</b></i></a>.  
      Combining this with a CSS framework called <a href='https://tailwindcss.com'><i><b>Tailwind CSS</b></i></a>, I was able to create this website with a uniform look and feel`,
      `I chose a dark space theme both because it is easy on the eyes and to signify that I am always exploring new frontiers to better myself.  I hope you enjoy the site 😁`,
    ],
  },
  BIT_STORM: {
    summary: [
      `Shortly after beginning my professional career, I had a desire to start my own company.  
      During a long weekend trip, one of my friends introduced me to Virtual Reality (VR) technology and I saw an unsaturated market opportunity.  
      We became business partners and quickly went to work to develop our first title:
      <a href="https://store.steampowered.com/app/711300/Bit_Storm_VR_First_Loop/"><i><b>Bit Storm VR: First Loop</b></i></a>`,
      `As with any first professional venture, we learned some critical lessons by burning our hands on the stove.  
      We rushed to deliver the title when we should've invested more time before the initial release, we greatly underestimated the 
      value of using original (non store-bought) assets, and failed to launch a sufficient marketing campaign.  With all that said, we 
      correctly identified a market opportunity, jumped on it, and gave it our all with the knowledge we had at that time.  Sadly, the revenue 
      from the initial launch did not warrant the continuation of development.`,
    ],
  },
  VR_TOUR: {
    summary: [
      `We became aware of the opportunity to solve an interesting problem: giving prospective customers an immersive glimpse of a finished real-estate development 
      while it was still under construction.`,
      `Typically, an interactive tour involves a professional photography crew capturing the entire property and using software 
      to stitch everything together.  Instead, we had to rely on creating high fidelity 3d models of every item in the environment.  This taught us yet another difficult 
      lesson: when working with a client, communication of the expected outcome and work to be provided is critical.  If we had known up front they wanted to use specific 
      designs for everything, we probably would have had them contract with another party to supply us with the assets.`,
      `Creating the floor plans was as simple as placing the blueprint in our editor, dragging objects to scale, and extruding the walls up.  
      Next came the difficult task of sourcing our assets and placing them to bring the environment to live.  We also needed a gameplan for how to navigate around the properties.  
      Using traditional locomotion would potentially discomfort the users and we wanted to spotlight certian viewpoints.  
      We decided on an orb-based navigaiton system.  The user would point to the orb they wanted to teleport to and click a button to navigate to the location.`,
    ],
  },
}

/* harmony default export */ const projects = (PROJECTS);

;// CONCATENATED MODULE: ./src/pages/projects-page.js





function projects_page_experiencesToHtml(experiences) {
  return `<p class='mb-4'>${experiences.join('</p><p class="mb-4">')}</p>`
}

function projects_page_renderValue(value) {
  return html`<b>${value.name}</b> - ${html([value.description])}`
}

const ProjectsPage = {
  render: () => template_html`
    ${styles}
    <profile-header title="Projects">
      <navigation-tab text="Personal" nav-id="personal"></navigation-tab>
      <navigation-tab text="uVR" nav-id="uvr"></navigation-tab>
      <dropdown-menu>
        <dropdown-menu-item
          selected=${() => (window.location.href = '/index.html')}
          >Home</dropdown-menu-item
        >
        <dropdown-menu-item
          selected=${() => window.open('/alex-crowley-resume.pdf', '_blank')}
          >Download Resume</dropdown-menu-item
        >
      </dropdown-menu>
    </profile-header>
    <star-background>
      <div
        class="max-w-7xl mx-auto relative z-10 flex flex-col items-center mt-16"
      >
        <category-section id="personal" category-name="Personal">
          <experience-card
            company-name="Personal Website"
            position="Designer & Developer"
            date-range="January 2021"
            summary="${projects_page_experiencesToHtml(projects.PERSONAL_WEBSITE.summary)}"
            ,
            technologies="${[logos.HYBRIDS_JS, logos.TAILWIND_CSS]}"
          >
          </experience-card>
        </category-section>
        <category-section id="uvr" category-name="uVR">
          <experience-card
            company-name="VR Tour Demo (Contract)"
            position="Co-Developer"
            date-range="July 2018 - September 2018"
            summary="${projects_page_experiencesToHtml(projects.VR_TOUR.summary)}"
            ,
            technologies="${[logos.UNITY, logos.C_SHARP, logos.BLENDER]}"
          >
          </experience-card>
          <experience-card
            company-name="Bit Storm VR: First Loop"
            position="Co-Developer"
            date-range="August 2017 - October 2017"
            summary="${projects_page_experiencesToHtml(projects.BIT_STORM.summary)}"
            ,
            technologies="${[logos.UNITY, logos.C_SHARP, logos.BLENDER]}"
          >
            <p class="block text-base mb-4"></p>
            <div class="flex flex-row mb-4">
              <iframe
                src="https://www.youtube.com/embed/i6Z-Fa1ywYM"
                width="200"
                height="300"
                class="flex-1"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </experience-card>
        </category-section>
      </div>
    </star-background>
  `,
}

define_define('projects-page', ProjectsPage)

;// CONCATENATED MODULE: ./src/components/star-background.js



const StarBackground = {
  render: render(
    () => template_html`
      <style>
        .body-content {
          background: radial-gradient(
            ellipse at bottom,
            #2e3b49 0%,
            #090a0f 100%
          );
          min-height: calc(100% - 4.2rem);
          max-height: calc(100% - 4.2rem);
          overflow: scroll;
        }
        @media (min-width: 1024px) {
          .lg-body-content {
            min-height: calc(100% - 8.25rem) !important;
            max-height: calc(100% - 8.25rem) !important;
          }
        }
      </style>
      ${styles}
      <div class="body-content lg-body-content">
        <parallax-star size="1" animation-duration="60"></parallax-star>
        <parallax-star size="3" animation-duration="120"></parallax-star>
        <parallax-star size="4" animation-duration="90"></parallax-star>
        <slot></slot>
        <div class="flex flex-row justify-center">
          <div class="text-white text-sm mb-4">© 2021 Alex Crowley</div>
        </div>
      </div>
    `
  ),
}

define_define('star-background', StarBackground)

;// CONCATENATED MODULE: ./src/components/navigation-tab.js



function navigation_tab_convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
}

function getShadowRoot() {
  return (
    document.getElementsByTagName('home-page')[0] ||
    document.getElementsByTagName('projects-page')[0]
  ).shadowRoot
}

function navigateToElement(elementName) {
  const appShadowRoot = getShadowRoot()
  const el = appShadowRoot.getElementById(elementName)
  window.scrollTo(0, el.offsetTop - navigation_tab_convertRemToPixels(8.25))
}

function _checkActiveElement(host) {
  const appShadowRoot = getShadowRoot()
  const e = appShadowRoot.querySelector(`#${host.navId}`)

  const rect = e.getBoundingClientRect()
  const active =
    rect.y < navigation_tab_convertRemToPixels(8.25) + 50 &&
    rect.y + rect.height > navigation_tab_convertRemToPixels(8.25) + 50
  const headerElement = appShadowRoot
    .querySelector('profile-header')
    .shadowRoot.querySelector(`#navigation-tab-${e.id}`)
  host.active = active
}

function navigation_tab_onScroll(host) {
  setTimeout(() => _checkActiveElement(host), 50)
  window.addEventListener('scroll', () => _checkActiveElement(host))
}

const NavigationTab = {
  text: '',
  navId: '',
  active: false,
  _onScroll: { connect: navigation_tab_onScroll },
  render: ({ active, text, navId }) => {
    const classes = [
      'p-2',
      'lg:p-4',
      'text-base',
      'lg:text-lg',
      'cursor-pointer',
      'text-blue-800',
    ]
    if (active) {
      classes.push('navigation-tab-active')
    }
    return template_html`
      <style>
        .navigation-tab-active {
          font-weight: 700;
        }
      </style>
      ${styles}
      <div
        id="navigation-tab-intro"
        class=${classes}
        onclick="${() => navigateToElement(navId)}"
      >
        ${text}
      </div>
    `
  },
}
define_define('navigation-tab', NavigationTab)

;// CONCATENATED MODULE: ./src/icons/chevron-down.js



const ChevronDown = {
  render: () => template_html`
    ${styles}
    <svg
      class="h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  `,
}
define_define('chevron-down', ChevronDown)

;// CONCATENATED MODULE: ./src/components/dropdown-menu.js





const DropdownMenu = {
  active: false,
  _autoCloser: {
    connect: (host) => {
      const cb = () => (host.active = false)
      window.addEventListener('click', cb)
      return () => window.removeEventListener('click', cb)
    },
  },
  render: ({ active }) => {
    const activeClasses = active
      ? 'opacity-100 scale-100'
      : 'opacity-0 scale-95 cursor-auto'
    return template_html`
      ${styles}
      <div class="relative inline-block text-left cursor-pointer">
        <div
          class="flex flex-row items-center text-blue-700 p-2 lg:p-4 text-base lg:text-lg"
          onclick="${(host, event) => {
            event.stopPropagation()
            host.active = !active
          }}"
        >
          More
          <!-- Heroicon name: chevron-down -->
          <chevron-down />
        </div>

        <!--
      Dropdown panel, show/hide based on dropdown state.

      Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
      -->
        <div
          class="absolute origin-top-right right-0 w-56 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 duration-200 ease-linear ${activeClasses}"
        >
          <div
            class="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <slot></slot>
          </div>
        </div>
      </div>
    `
  },
}
define_define('dropdown-menu', DropdownMenu)

;// CONCATENATED MODULE: ./node_modules/hybrids/esm/parent.js
function walk(node, fn) {
  var parentElement = node.parentElement || node.parentNode.host;

  while (parentElement) {
    var hybrids = parentElement.constructor.hybrids;

    if (hybrids && fn(hybrids)) {
      return parentElement;
    }

    parentElement = parentElement.parentElement || parentElement.parentNode && parentElement.parentNode.host;
  }

  return parentElement || null;
}

function parent_parent(hybridsOrFn) {
  var fn = typeof hybridsOrFn === "function" ? hybridsOrFn : function (hybrids) {
    return hybrids === hybridsOrFn;
  };
  return {
    get: function get(host) {
      return walk(host, fn);
    },
    connect: function connect(host, key, invalidate) {
      var target = host[key];

      if (target) {
        return invalidate;
      }

      return false;
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJlbnQuanMiXSwibmFtZXMiOlsid2FsayIsIm5vZGUiLCJmbiIsInBhcmVudEVsZW1lbnQiLCJwYXJlbnROb2RlIiwiaG9zdCIsImh5YnJpZHMiLCJjb25zdHJ1Y3RvciIsInBhcmVudCIsImh5YnJpZHNPckZuIiwiZ2V0IiwiY29ubmVjdCIsImtleSIsImludmFsaWRhdGUiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLElBQVQsQ0FBY0MsSUFBZCxFQUFvQkMsRUFBcEIsRUFBd0I7QUFDdEIsTUFBSUMsYUFBYSxHQUFHRixJQUFJLENBQUNFLGFBQUwsSUFBc0JGLElBQUksQ0FBQ0csVUFBTCxDQUFnQkMsSUFBMUQ7O0FBRUEsU0FBT0YsYUFBUCxFQUFzQjtBQUNwQixRQUFNRyxPQUFPLEdBQUdILGFBQWEsQ0FBQ0ksV0FBZCxDQUEwQkQsT0FBMUM7O0FBRUEsUUFBSUEsT0FBTyxJQUFJSixFQUFFLENBQUNJLE9BQUQsQ0FBakIsRUFBNEI7QUFDMUIsYUFBT0gsYUFBUDtBQUNEOztBQUVEQSxJQUFBQSxhQUFhLEdBQ1hBLGFBQWEsQ0FBQ0EsYUFBZCxJQUNDQSxhQUFhLENBQUNDLFVBQWQsSUFBNEJELGFBQWEsQ0FBQ0MsVUFBZCxDQUF5QkMsSUFGeEQ7QUFHRDs7QUFFRCxTQUFPRixhQUFhLElBQUksSUFBeEI7QUFDRDs7QUFFRCxlQUFlLFNBQVNLLE1BQVQsQ0FBZ0JDLFdBQWhCLEVBQTZCO0FBQzFDLE1BQU1QLEVBQUUsR0FDTixPQUFPTyxXQUFQLEtBQXVCLFVBQXZCLEdBQ0lBLFdBREosR0FFSSxVQUFBSCxPQUFPO0FBQUEsV0FBSUEsT0FBTyxLQUFLRyxXQUFoQjtBQUFBLEdBSGI7QUFJQSxTQUFPO0FBQ0xDLElBQUFBLEdBQUcsRUFBRSxhQUFBTCxJQUFJO0FBQUEsYUFBSUwsSUFBSSxDQUFDSyxJQUFELEVBQU9ILEVBQVAsQ0FBUjtBQUFBLEtBREo7QUFFTFMsSUFBQUEsT0FGSyxtQkFFR04sSUFGSCxFQUVTTyxHQUZULEVBRWNDLFVBRmQsRUFFMEI7QUFDN0IsVUFBTUMsTUFBTSxHQUFHVCxJQUFJLENBQUNPLEdBQUQsQ0FBbkI7O0FBQ0EsVUFBSUUsTUFBSixFQUFZO0FBQ1YsZUFBT0QsVUFBUDtBQUNEOztBQUNELGFBQU8sS0FBUDtBQUNEO0FBUkksR0FBUDtBQVVEIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2Fsayhub2RlLCBmbikge1xuICBsZXQgcGFyZW50RWxlbWVudCA9IG5vZGUucGFyZW50RWxlbWVudCB8fCBub2RlLnBhcmVudE5vZGUuaG9zdDtcblxuICB3aGlsZSAocGFyZW50RWxlbWVudCkge1xuICAgIGNvbnN0IGh5YnJpZHMgPSBwYXJlbnRFbGVtZW50LmNvbnN0cnVjdG9yLmh5YnJpZHM7XG5cbiAgICBpZiAoaHlicmlkcyAmJiBmbihoeWJyaWRzKSkge1xuICAgICAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcGFyZW50RWxlbWVudCA9XG4gICAgICBwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgfHxcbiAgICAgIChwYXJlbnRFbGVtZW50LnBhcmVudE5vZGUgJiYgcGFyZW50RWxlbWVudC5wYXJlbnROb2RlLmhvc3QpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQgfHwgbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyZW50KGh5YnJpZHNPckZuKSB7XG4gIGNvbnN0IGZuID1cbiAgICB0eXBlb2YgaHlicmlkc09yRm4gPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyBoeWJyaWRzT3JGblxuICAgICAgOiBoeWJyaWRzID0+IGh5YnJpZHMgPT09IGh5YnJpZHNPckZuO1xuICByZXR1cm4ge1xuICAgIGdldDogaG9zdCA9PiB3YWxrKGhvc3QsIGZuKSxcbiAgICBjb25uZWN0KGhvc3QsIGtleSwgaW52YWxpZGF0ZSkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gaG9zdFtrZXldO1xuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICByZXR1cm4gaW52YWxpZGF0ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICB9O1xufVxuIl19
;// CONCATENATED MODULE: ./src/components/dropdown-menu-item.js




const DropdownMenuItem = {
  selected: undefined,
  dropdownMenu: parent_parent(DropdownMenu),
  render: ({ selected, dropdownMenu }) => template_html`
    ${styles}
    <a
      onclick="${(host, event) => {
        event.stopPropagation()
        if (dropdownMenu.active) {
          dropdownMenu.active = false
          // The timeout allows for a re-render to close the menu before acting
          selected && setTimeout(() => selected(host), 50)
        }
      }}"
      class="block px-4 py-2 text-sm lg:text-base text-white hover:bg-gray-600"
      role="menuitem"
      ><slot
    /></a>
  `,
}
define_define('dropdown-menu-item', DropdownMenuItem)

;// CONCATENATED MODULE: ./src/index.js
















const App = {
  render: ({ onclick, text }) => {
    return ''
  },
}

define_define('web-app', App)

// https://codepen.io/saransh/pen/BKJun
// https://www.pinclipart.com/pins/node-js/
// https://www.clipartmax.com/middle/m2i8G6b1i8H7m2d3_js-discord-bot-logo-node-js-and-react-js/

})();

/******/ })()
;