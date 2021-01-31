(()=>{var e={485:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var o=t(645),r=t.n(o)()((function(e){return e[1]}));r.push([e.id,"/*! modern-normalize v1.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\n:root {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  color: #9ca3af;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * Make replaced elements `display: block` by default as that's\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their instrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n.bg-gray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(229, 231, 235, var(--tw-bg-opacity));\n}\n\n.bg-gray-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(55, 65, 81, var(--tw-bg-opacity));\n}\n\n.bg-indigo-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(79, 70, 229, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-gray-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(75, 85, 99, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-indigo-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(67, 56, 202, var(--tw-bg-opacity));\n}\n\n.border-transparent {\n  border-color: transparent;\n}\n\n.rounded-md {\n  border-radius: 0.375rem;\n}\n\n.rounded-full {\n  border-radius: 9999px;\n}\n\n.border {\n  border-width: 1px;\n}\n\n.cursor-auto {\n  cursor: auto;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.block {\n  display: block;\n}\n\n.inline-block {\n  display: inline-block;\n}\n\n.flex {\n  display: flex;\n}\n\n.inline-flex {\n  display: inline-flex;\n}\n\n.table {\n  display: table;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.justify-start {\n  justify-content: flex-start;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.justify-evenly {\n  justify-content: space-evenly;\n}\n\n.flex-1 {\n  flex: 1 1 0%;\n}\n\n.font-medium {\n  font-weight: 500;\n}\n\n.font-semibold {\n  font-weight: 600;\n}\n\n.font-bold {\n  font-weight: 700;\n}\n\n.font-extrabold {\n  font-weight: 800;\n}\n\n.h-5 {\n  height: 1.25rem;\n}\n\n.h-16 {\n  height: 4rem;\n}\n\n.h-44 {\n  height: 11rem;\n}\n\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.mb-4 {\n  margin-bottom: 1rem;\n}\n\n.ml-4 {\n  margin-left: 1rem;\n}\n\n.mt-8 {\n  margin-top: 2rem;\n}\n\n.mr-10 {\n  margin-right: 2.5rem;\n}\n\n.mb-10 {\n  margin-bottom: 2.5rem;\n}\n\n.ml-10 {\n  margin-left: 2.5rem;\n}\n\n.mt-16 {\n  margin-top: 4rem;\n}\n\n.mt-28 {\n  margin-top: 7rem;\n}\n\n.max-w-7xl {\n  max-width: 80rem;\n}\n\n.opacity-0 {\n  opacity: 0;\n}\n\n.opacity-100 {\n  opacity: 1;\n}\n\n.p-2 {\n  padding: 0.5rem;\n}\n\n.p-6 {\n  padding: 1.5rem;\n}\n\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n\n.fixed {\n  position: fixed;\n}\n\n.absolute {\n  position: absolute;\n}\n\n.relative {\n  position: relative;\n}\n\n.right-0 {\n  right: 0px;\n}\n\n* {\n  --tw-shadow: 0 0 #0000;\n}\n\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n* {\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n}\n\n.ring-1 {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.ring-black {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgba(0, 0, 0, var(--tw-ring-opacity));\n}\n\n.ring-opacity-5 {\n  --tw-ring-opacity: 0.05;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.text-gray-800 {\n  --tw-text-opacity: 1;\n  color: rgba(31, 41, 55, var(--tw-text-opacity));\n}\n\n.text-blue-700 {\n  --tw-text-opacity: 1;\n  color: rgba(29, 78, 216, var(--tw-text-opacity));\n}\n\n.text-blue-800 {\n  --tw-text-opacity: 1;\n  color: rgba(30, 64, 175, var(--tw-text-opacity));\n}\n\n.italic {\n  font-style: italic;\n}\n\n.tracking-tight {\n  letter-spacing: -0.025em;\n}\n\n.visible {\n  visibility: visible;\n}\n\n.w-5 {\n  width: 1.25rem;\n}\n\n.w-56 {\n  width: 14rem;\n}\n\n.z-0 {\n  z-index: 0;\n}\n\n.z-10 {\n  z-index: 10;\n}\n\n.z-20 {\n  z-index: 20;\n}\n\n.transform {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.origin-top-right {\n  transform-origin: top right;\n}\n\n.scale-95 {\n  --tw-scale-x: .95;\n  --tw-scale-y: .95;\n}\n\n.scale-100 {\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n}\n\n.transition {\n  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.ease-linear {\n  transition-timing-function: linear;\n}\n\n.ease-in {\n  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\n\n.ease-out {\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.duration-75 {\n  transition-duration: 75ms;\n}\n\n.duration-100 {\n  transition-duration: 100ms;\n}\n\n.duration-200 {\n  transition-duration: 200ms;\n}\n\n@-webkit-keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n\n@keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes pulse {\n  50% {\n    opacity: .5;\n  }\n}\n\n@keyframes pulse {\n  50% {\n    opacity: .5;\n  }\n}\n\n@-webkit-keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n    -webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);\n            animation-timing-function: cubic-bezier(0.8,0,1,1);\n  }\n\n  50% {\n    transform: none;\n    -webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);\n            animation-timing-function: cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n    -webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);\n            animation-timing-function: cubic-bezier(0.8,0,1,1);\n  }\n\n  50% {\n    transform: none;\n    -webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);\n            animation-timing-function: cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@media (min-width: 640px) {\n  .sm\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n}\n\n@media (min-width: 768px) {\n}\n\n@media (min-width: 1024px) {\n  .lg\\:flex {\n    display: flex;\n  }\n\n  .lg\\:flex-row {\n    flex-direction: row;\n  }\n\n  .lg\\:items-start {\n    align-items: flex-start;\n  }\n\n  .lg\\:items-center {\n    align-items: center;\n  }\n\n  .lg\\:justify-start {\n    justify-content: flex-start;\n  }\n\n  .lg\\:justify-between {\n    justify-content: space-between;\n  }\n\n  .lg\\:h-24 {\n    height: 6rem;\n  }\n\n  .lg\\:h-72 {\n    height: 18rem;\n  }\n\n  .lg\\:text-base {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .lg\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n\n  .lg\\:text-xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n\n  .lg\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n\n  .lg\\:text-3xl {\n    font-size: 1.875rem;\n    line-height: 2.25rem;\n  }\n\n  .lg\\:mr-0 {\n    margin-right: 0px;\n  }\n\n  .lg\\:mb-0 {\n    margin-bottom: 0px;\n  }\n\n  .lg\\:ml-10 {\n    margin-left: 2.5rem;\n  }\n\n  .lg\\:mt-16 {\n    margin-top: 4rem;\n  }\n\n  .lg\\:mt-36 {\n    margin-top: 9rem;\n  }\n\n  .lg\\:mr-40 {\n    margin-right: 10rem;\n  }\n\n  .lg\\:p-4 {\n    padding: 1rem;\n  }\n\n  .lg\\:p-12 {\n    padding: 3rem;\n  }\n\n  .lg\\:py-6 {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n  }\n\n  .lg\\:px-8 {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n\n  .lg\\:w-48 {\n    width: 12rem;\n  }\n}\n\n@media (min-width: 1280px) {\n}\n\n@media (min-width: 1536px) {\n}\n",""]);const i=r},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&r[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},658:e=>{var n=9007199254740991,t=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=/^(?:0|[1-9]\d*)$/,s=parseInt,l=Object.prototype.toString,c=Math.ceil,d=Math.max;function u(e,n,t){var o=-1,r=e.length;n<0&&(n=-n>r?0:r+n),(t=t>r?r:t)<0&&(t+=r),r=n>t?0:t-n>>>0,n>>>=0;for(var i=Array(r);++o<r;)i[o]=e[o+n];return i}function f(e){var n=typeof e;return!!e&&("object"==n||"function"==n)}e.exports=function(e,p,m){p=(m?function(e,t,o){if(!f(o))return!1;var r=typeof t;return!!("number"==r?function(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}(e.length)&&!function(e){var n=f(e)?l.call(e):"";return"[object Function]"==n||"[object GeneratorFunction]"==n}(e)}(o)&&function(e,t){return!!(t=null==t?n:t)&&("number"==typeof e||a.test(e))&&e>-1&&e%1==0&&e<t}(t,o.length):"string"==r&&t in o)&&function(e,n){return e===n||e!=e&&n!=n}(o[t],e)}(e,p,m):void 0===p)?1:d(function(e){var n=function(e){return e?Infinity===(e=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(f(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=f(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var a=r.test(e);return a||i.test(e)?s(e.slice(2),a?2:8):o.test(e)?NaN:+e}(e))||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}(e),a=n%1;return n==n?a?n-a:n:0}(p),0);var h=e?e.length:0;if(!h||p<1)return[];for(var g=0,b=0,y=Array(c(h/p));g<h;)y[b++]=u(e,g,g+=p);return y}}},n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e={};t.r(e),t.d(e,{resolve:()=>De,set:()=>_e});var n=new Map;function o(e){var t=n.get(e);return void 0===t&&(t=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),n.set(e,t)),t}function r(e,n){var t=window.ShadyCSS;return t&&!t.nativeShadow?e(t):n}function i(e){return"<".concat(String(e.tagName).toLowerCase(),">")}var a="ActiveXObject"in window,s=Promise.resolve(),l=new WeakMap;function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(e){return e},u=function(e){if("object"!==c(e))throw TypeError("Assigned value must be an object: ".concat(c(e)));return e&&Object.freeze(e)};function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){m(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("function"!=typeof e)throw TypeError("The first argument must be a function: ".concat(h(e)));var t=p({shadowRoot:!0},n),o={mode:"open"};return"object"===h(t.shadowRoot)&&Object.assign(o,t.shadowRoot),{get:function(n){var r=e(n),i=n;return t.shadowRoot&&(n.shadowRoot||n.attachShadow(o),i=n.shadowRoot),function(){return r(n,i),i}},observe:function(e,n){n()}}}var b=new WeakMap,y=new Set;function v(){try{y.forEach((function(e){try{b.get(e)(),y.delete(e)}catch(n){throw y.delete(e),n}}))}catch(e){throw y.size&&v(),e}}function w(e){y.size||requestAnimationFrame(v),y.add(e)}var x=new WeakMap;function S(e,n){var t=x.get(e);t||(t=new Map,x.set(e,t));var o=t.get(n);return o||(o={target:e,key:n,value:void 0,contexts:void 0,deps:void 0,state:0,checksum:0,observed:!1},t.set(n,o)),o}function k(e){var n=e.state;return e.deps&&e.deps.forEach((function(e){n+=e.state})),n}function E(e){e.observed&&w(e),e.contexts&&e.contexts.forEach(E)}function j(e,n){n&&n.forEach((function(n){e.deps.add(n),e.observed&&(n.contexts||(n.contexts=new Set),n.contexts.add(e)),j(e,n.deps)}))}var N=new Set;function O(e,n,t,o){var r=S(e,n);if(N.size&&N.has(r))throw Error("Circular get invocation is forbidden: '".concat(n,"'"));if(N.forEach((function(e){e.deps||(e.deps=new Set),e.deps.add(r),e.observed&&(r.contexts||(r.contexts=new Set),r.contexts.add(e))})),(o&&o(r.value)||!o)&&r.checksum&&r.checksum===k(r))return r.value;try{N.add(r),r.observed&&r.deps&&r.deps.size&&r.deps.forEach((function(e){e.contexts&&e.contexts.delete(r)})),r.deps=void 0;var i=t(e,r.value);r.deps&&r.deps.forEach((function(e){j(r,e.deps)})),i!==r.value&&(r.state+=1,r.value=i,E(r)),r.checksum=k(r),N.delete(r)}catch(e){throw r.checksum=0,N.delete(r),N.forEach((function(e){e.deps.delete(r),e.observed&&r.contexts.delete(e)})),e}return r.value}var $=new Set;function z(e,n,t,o){if(N.size)throw Error("Invalidating property in chain of get calls is forbidden: '".concat(n,"'"));!function(e,n,t){e.checksum=0,e.state+=1,E(e),t&&function(e){$.size||requestAnimationFrame((function(){$.forEach((function(e){(!e.contexts||e.contexts&&0===e.contexts.size)&&x.get(e.target).delete(e.key)})),$.clear()})),$.add(e)}(e),n&&(e.value=void 0)}(S(e,n),t,o)}function C(e,n,t,o){var r,i=S(e,n);i.observed=!0;var a=function(e,n){return b.set(e,n),w(e),function(){y.delete(e),b.delete(e)}}(i,(function(){var i=O(e,n,t);i!==r&&(o(e,i,r),r=i)}));return i.deps&&i.deps.forEach((function(e){e.contexts||(e.contexts=new Set),e.contexts.add(i)})),function(){a(),i.observed=!1,i.deps&&i.deps.size&&i.deps.forEach((function(e){e.contexts&&e.contexts.delete(i)}))}}function T(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function M(e,n){return!n||"object"!==F(n)&&"function"!=typeof n?A(e):n}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){var n="function"==typeof Map?new Map:void 0;return(I=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,o)}function o(){return R(e,arguments,D(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),P(o,e)})(e)}function R(e,n,t){return(R=_()?Reflect.construct:function(e,n,t){var o=[null];o.push.apply(o,n);var r=new(Function.bind.apply(e,o));return t&&P(r,t.prototype),r}).apply(null,arguments)}function _(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function P(e,n){return(P=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}try{L.env.NODE_ENV}catch(e){var L={env:{NODE_ENV:"production"}}}var W,B=function(e,n){return n},V=new WeakMap,U=new WeakMap;function H(e,n){e.hybrids=n;var t=[],r=Object.keys(n);V.set(e,t),U.set(e,r),r.forEach((function(r){var i,a=n[r],s=F(a);i="function"===s?"render"===r?g(a):{get:a}:"object"!==s||null===a||Array.isArray(a)?function(e,n){var t=c(e),r=d;switch(t){case"string":r=String;break;case"number":r=Number;break;case"boolean":r=Boolean;break;case"function":e=(r=e)();break;case"object":e&&Object.freeze(e),r=u}return{get:function(n){return arguments.length>1&&void 0!==arguments[1]?arguments[1]:e},set:function(e,n,t){return r(n,t)},connect:"object"!==t&&"undefined"!==t?function(t,i,a){if(t[i]===e){var s=o(i);if(t.hasAttribute(s)){var l=t.getAttribute(s);t[i]=""===l&&r===Boolean||l}}return n}:n}}(a):{get:a.get||B,set:a.set||!a.get&&B||void 0,connect:a.connect,observe:a.observe},Object.defineProperty(e.prototype,r,{get:function(){return O(this,r,i.get)},set:i.set&&function(e){!function(e,n,t,o){var r=S(e,n),i=t(e,o,r.value);i!==r.value&&(r.checksum=0,r.state+=1,r.value=i,E(r))}(this,r,i.set,e)},enumerable:!0,configurable:"production"!==L.env.NODE_ENV}),i.observe&&t.unshift((function(e){return C(e,r,i.get,i.observe)})),i.connect&&t.push((function(e){return i.connect(e,r,(function(){z(e,r)}))}))}))}if("production"!==L.env.NODE_ENV){var q=function e(n,t){t(n),Array.from(n.children).forEach((function(n){return e(n,t)})),n.shadowRoot&&Array.from(n.shadowRoot.children).forEach((function(n){return e(n,t)}))},J=new Map;W=function(e,n){J.size||s.then((function(){q(document.body,(function(e){if(J.has(e.constructor)){var n=J.get(e.constructor);e.disconnectedCallback(),Object.keys(e.constructor.hybrids).forEach((function(t){z(e,t,e.constructor.hybrids[t]!==n[t])})),e.connectedCallback()}})),J.clear()})),J.set(e,n)}}var X=new WeakMap;function Y(e,n){var t=F(n);if("object"!==t&&"function"!==t)throw TypeError("Second argument must be an object or a function: ".concat(t));if(null!==e){var o=window.customElements.get(e);if("function"===t)return o!==n?window.customElements.define(e,n):o;if(o){if(o.hybrids===n)return o;if("production"!==L.env.NODE_ENV&&o.hybrids){Object.keys(o.hybrids).forEach((function(e){delete o.prototype[e]}));var r=o.hybrids;return H(o,n),W(o,r),o}throw Error("Element '".concat(e,"' already defined"))}}var i=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&P(e,n)}(i,e);var n,t,o,r=(n=i,function(){var e,t=D(n);if(_()){var o=D(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return M(this,e)});function i(){var e;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i),e=r.call(this);for(var n=U.get(i),t=0;t<n.length;t+=1){var o=n[t];if(Object.prototype.hasOwnProperty.call(A(e),o)){var a=e[o];delete e[o],e[o]=a}}return e}return t=i,(o=[{key:"connectedCallback",value:function(){for(var e=V.get(i),n=[],t=0;t<e.length;t+=1){var o=e[t](this);o&&n.push(o)}X.set(this,n)}},{key:"disconnectedCallback",value:function(){for(var e=X.get(this),n=0;n<e.length;n+=1)e[n]()}}])&&T(t.prototype,o),i}(I(HTMLElement));return H(i,n),null!==e&&(Object.defineProperty(i,"name",{get:function(){return e}}),customElements.define(e,i)),i}function Z(e){return Object.keys(e).reduce((function(n,t){var r=o(t.replace(/((?!([A-Z]{2}|^))[A-Z])/g,"-$1"));return n[t]=Y(r,e[t]),n}),{})}function G(){return"object"===F(arguments.length<=0?void 0:arguments[0])&&null!==(arguments.length<=0?void 0:arguments[0])?Z(arguments.length<=0?void 0:arguments[0]):Y.apply(void 0,arguments)}var K=new WeakMap,Q=function(e,n){return K.get(e)||(n&&K.set(e,n),n)};function ee(e){for(var n;e&&(n=Q(e))&&n.endNode;)e=n.endNode;return e}function ne(e){if(e.nodeType!==Node.TEXT_NODE)for(var n=e.childNodes[0];n;)e.removeChild(n),n=e.childNodes[0];else{var t=Q(e);if(t.startNode)for(var o=ee(t.endNode),r=t.startNode,i=o.nextSibling;r;){var a=r.nextSibling;r.parentNode.removeChild(r),r=a!==i&&a}}}var te=new WeakMap;function oe(e,n){var t=Q(e),o=t.startNode,r=ee(t.endNode);n.parentNode.insertBefore(e,n.nextSibling);for(var i=e,a=o;a;){var s=a.nextSibling;i.parentNode.insertBefore(a,i.nextSibling),i=a,a=s!==r.nextSibling&&s}}function re(e){return(re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ie(e,n,t){var o=Array.isArray(t)?"array":re(t),r=Q(n,{});switch(r.type!==o&&(ne(n),"array"===o&&te.delete(n),r=function(e,n){return K.set(e,n),n}(n,{type:o}),""!==n.textContent&&(n.textContent="")),o){case"function":t(e,n);break;case"array":!function(e,n,t,o){var r=te.get(n),i=t.map((function(e,n){return{id:Object.prototype.hasOwnProperty.call(e,"id")?e.id:n,value:e,placeholder:null,available:!0}}));if(te.set(n,i),r){var a=new Set;i.forEach((function(e){return a.add(e.id)})),r=r.filter((function(e){return!!a.has(e.id)||(ne(e.placeholder),e.placeholder.parentNode.removeChild(e.placeholder),!1)}))}for(var s=n,l=t.length-1,c=Q(n),d=0;d<i.length;d+=1){var u=i[d],f=void 0;if(r)for(var p=0;p<r.length;p+=1)if(r[p].available&&r[p].id===u.id){f=r[p];break}f?(f.available=!1,u.placeholder=f.placeholder,u.placeholder.previousSibling!==s&&oe(u.placeholder,s),f.value!==u.value&&o(e,u.placeholder,u.value)):(u.placeholder=document.createTextNode(""),s.parentNode.insertBefore(u.placeholder,s.nextSibling),o(e,u.placeholder,u.value)),s=ee(Q(u.placeholder).endNode||u.placeholder),0===d&&(c.startNode=u.placeholder),d===l&&(c.endNode=s)}r&&r.forEach((function(e){e.available&&(ne(e.placeholder),e.placeholder.parentNode.removeChild(e.placeholder))}))}(e,n,t,ie);break;default:n.textContent="number"===o||t?t:""}}function ae(e){return(ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var se=new WeakMap;function le(e){return(le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var ce=new WeakMap;function de(e,n,t){var o=ce.get(n)||new Set,r=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Set;return Array.isArray(e)?e.forEach((function(e){return n.add(e)})):null!==e&&"object"===le(e)?Object.keys(e).forEach((function(t){return e[t]&&n.add(t)})):n.add(e),n}(t);ce.set(n,r),r.forEach((function(e){n.classList.add(e),o.delete(e)})),o.forEach((function(e){n.classList.remove(e)}))}function ue(e){return(ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var fe=new WeakMap;function pe(e,n,t){if(null===t||"object"!==ue(t))throw TypeError("Style value must be an object in ".concat(i(n),":"),t);var r=fe.get(n)||new Map,a=Object.keys(t).reduce((function(e,i){var a=o(i),s=t[i];return s||0===s?n.style.setProperty(a,s):n.style.removeProperty(a),e.set(a,s),r.delete(a),e}),new Map);r.forEach((function(e,t){n.style[t]=""})),fe.set(n,a)}function me(e,n,t){if("on"===n.substr(0,2))return o=n.substr(2),function(e,n,t,r){if(r){var i=se.get(n);i&&n.removeEventListener(o,i.get(r),void 0!==r.options&&r.options)}if(t){if("function"!=typeof t)throw Error("Event listener must be a function: ".concat(ae(t)));var a=se.get(n);a||(a=new WeakMap,se.set(n,a));var s=t.bind(null,e);a.set(t,s),n.addEventListener(o,s,void 0!==t.options&&t.options)}};var o;switch(e){case"class":return de;case"style":return pe;default:return function(o,r,i){if(t||r instanceof SVGElement||!(n in r))if(!1===i||null==i)r.removeAttribute(e);else{var a=!0===i?"":String(i);r.setAttribute(e,a)}else r[n]!==i&&(r[n]=i)}}}function he(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(t.push(a.value),!n||t.length!==n);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==s.return||s.return()}finally{if(r)throw i}}return t}}(e,n)||function(e,n){if(e){if("string"==typeof e)return ge(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ge(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ge(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}function be(e){return(be="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}try{ye.env.NODE_ENV}catch(e){var ye={env:{NODE_ENV:"production"}}}var ve=Date.now(),we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return"{{h-".concat(ve,"-").concat(e,"}}")},xe=we("(\\d+)"),Se=new RegExp("^".concat(xe,"$")),ke=new RegExp(xe,"g"),Ee="--".concat(ve,"--"),je=new RegExp(Ee,"g"),Ne=new WeakMap,Oe="object"===be(window.ShadyDOM)&&window.ShadyDOM.inUse?function(e){var n;return{get currentNode(){return n},nextNode:function(){if(void 0===n)n=e.childNodes[0];else if(n.childNodes.length)n=n.childNodes[0];else if(n.nextSibling)n=n.nextSibling;else{var t=n.parentNode;for(n=t.nextSibling;!n&&t!==e;)t=t.parentNode,n=t.nextSibling}return!!n}}}:function(e){return document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,null,!1)},$e=document.createElement("div"),ze=new Map;function Ce(e,n){var t=we(n),o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(e=e.replace(/(^[\n\s\t ]+)|([\n\s\t ]+$)+/g,"")).indexOf("\n");if(t>-1){var o=0-n-2;for(t+=1;" "===e[t]&&t<e.length;t+=1)o+=1;return e.replace(/\n +/g,(function(e){return e.substr(0,Math.max(e.length-o,1))}))}return e}(e).split("\n").filter((function(e){return e})).map((function(e){var n=e.indexOf(t);return n>-1?"| ".concat(e,"\n--").concat("-".repeat(n)).concat("^".repeat(6)):"| ".concat(e)})).join("\n").replace(ke,"${...}");return"".concat(o)}function Te(e,n,t){var o=document.createElement("template"),s=[],l=function(e,n){var t=e.reduce((function(n,t,o){return 0===o?t:e.slice(o).join("").match(/^\s*<\/\s*(table|tr|thead|tbody|tfoot|colgroup)>/)?"".concat(n,"\x3c!--").concat(we(o-1),"--\x3e").concat(t):n+we(o-1)+t}),"");return n&&(t+="<style>\n".concat(n.join("\n/*------*/\n"),"\n</style>")),a?t.replace(/style\s*=\s*(["][^"]+["]|['][^']+[']|[^\s"'<>/]+)/g,(function(e){return"".concat(Ee).concat(e)})):t}(e,t);if(n&&(l="<svg>".concat(l,"</svg>")),a?o.innerHTML=l:($e.innerHTML="<template>".concat(l,"</template>"),o.content.appendChild($e.children[0].content)),n){var c=o.content.firstChild;o.content.removeChild(c),Array.from(c.childNodes).forEach((function(e){return o.content.appendChild(e)}))}!function(e){for(var n,t=document.createNodeIterator(e,NodeFilter.SHOW_COMMENT,null,!1);n=t.nextNode();)Se.test(n.textContent)&&(n.parentNode.insertBefore(document.createTextNode(n.textContent),n),n.parentNode.removeChild(n))}(o.content);for(var d=Oe(o.content),u=0,f=function(){var t=d.currentNode;if(t.nodeType===Node.TEXT_NODE){var o=t.textContent;if(!o.match(Se)){var r=o.match(ke);if(r){var i=t;r.reduce((function(e,n){var t=he(e.pop().split(n),2),o=t[0],r=t[1];return o&&e.push(o),e.push(n),r&&e.push(r),e}),[o]).forEach((function(e,n){0===n?i.textContent=e:i=i.parentNode.insertBefore(document.createTextNode(e),i.nextSibling)}))}}var l=t.textContent.match(Se);l&&(a||(t.textContent=""),s[l[1]]=[u,ie])}else t.nodeType===Node.ELEMENT_NODE&&Array.from(t.attributes).forEach((function(o){var r=o.value.trim(),i=a?o.name.replace(Ee,""):o.name,l=r.match(Se);if(l){var c=e[l[1]].replace(/\s*=\s*['"]*$/g,"").split(/\s+/).pop();s[l[1]]=[u,me(i,c,n)],t.removeAttribute(o.name)}else{var d=r.match(ke);if(d){var f="attr__".concat(i);d.forEach((function(e,n){var t=he(e.match(Se),2)[1];s[t]=[u,function(t,o,a){var s=Q(o,{});s[f]=(s[f]||r).replace(e,null==a?"":a),1!==d.length&&n+1!==d.length||(o.setAttribute(i,s[f]),s[f]=void 0)}]})),o.value="",a&&i!==o.name&&(t.removeAttribute(o.name),t.setAttribute(i,""))}}}));u+=1};d.nextNode();)f();return function(e,n,t,c){var d=Q(n,{type:"function"});if(o!==d.template){(d.template||n.nodeType===Node.ELEMENT_NODE)&&ne(n),d.prevArgs=null;var u=document.importNode(function(e,n){return n?r((function(t){var o=Ne.get(e);o||(o=new Map,Ne.set(e,o));var r=o.get(n);if(!r){(r=document.createElement("template")).content.appendChild(e.content.cloneNode(!0)),o.set(n,r);var i=r.content.querySelectorAll("style");Array.from(i).forEach((function(e){for(var n=e.childNodes.length+1,t=0;t<n;t+=1)e.parentNode.insertBefore(document.createTextNode(we()),e)})),t.prepareTemplate(r,n.toLowerCase())}return r}),e):e}(o,e.tagName).content,!0),f=Oe(u),p=s.slice(0),m=0,h=p.shift(),g=[];for(d.template=o,d.markers=g;f.nextNode();){var b=f.currentNode;if(b.nodeType===Node.TEXT_NODE)Se.test(b.textContent)?b.textContent="":a&&(b.textContent=b.textContent.replace(je,""));else if("production"!==ye.env.NODE_ENV&&b.nodeType===Node.ELEMENT_NODE&&b.tagName.indexOf("-")>-1&&!customElements.get(b.tagName.toLowerCase()))throw Error("Missing ".concat(i(b)," element definition in ").concat(i(e)));for(;h&&h[0]===m;)g.push([b,h[1]]),h=p.shift();m+=1}if(n.nodeType===Node.TEXT_NODE){d.startNode=u.childNodes[0],d.endNode=u.childNodes[u.childNodes.length-1];for(var y=n,v=u.childNodes[0];v;)n.parentNode.insertBefore(v,y.nextSibling),y=v,v=u.childNodes[0]}else n.appendChild(u)}var w=n.adoptedStyleSheets;if(c){var x=!1;if((c=c.map((function(e){if(e instanceof CSSStyleSheet)return e;var n=ze.get(e);return n||((n=new CSSStyleSheet).replaceSync(e),ze.set(e,n)),n}))).length===w.length){x=!0;for(var S=0;S<c.length;S+=1)if(c[S]!==w[S]){x=!1;break}}x||(n.adoptedStyleSheets=c)}else w&&w.length&&(n.adoptedStyleSheets=[]);var k=d.prevArgs;d.prevArgs=t;for(var E=0;E<d.markers.length;E+=1){var j=he(d.markers[E],2),N=j[0],O=j[1];if(!k||k[E]!==t[E])try{O(e,N,t[E],k?k[E]:void 0)}catch(n){throw"production"!==ye.env.NODE_ENV&&console.error("Following error was thrown when updating a template expression in ".concat(i(e),"\n").concat(Ce(l,E))),n}}n.nodeType!==Node.TEXT_NODE&&r((function(n){e.shadowRoot&&(k?n.styleSubtree(e):n.styleElement(e))}))}}function Me(e){return(Me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ae(e,n){var t,o=e.target;switch(o.type){case"radio":case"checkbox":t=o.checked&&o.value;break;case"file":t=o.files;break;default:t=o.value}n(t)}function Ie(e,n){return e.split(".").reverse().reduce((function(e,t){return function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}({},t,e||n)}),null)}var Re=new Map;function _e(e,n){if(!e)throw Error("The first argument must be a property name or an object instance: ".concat(e));if("object"===Me(e)){if(void 0===n)throw Error("For model instance property the second argument must be defined");var t=l.get(e);if(!t)throw Error("Provided object must be a model instance of the store");return function(o,r){Ae(r,(function(o){t.set(e,null!==n?Ie(n,o):n)}))}}if(2===arguments.length)return function(t){t[e]=n};var o=Re.get(e);return o||(o=function(n,t){Ae(t,(function(t){n[e]=t}))},Re.set(e,o)),o}var Pe=new WeakMap;function De(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200;return function(o,r){var i;n&&(i=setTimeout((function(){i=void 0,requestAnimationFrame((function(){n(o,r)}))}),t)),Pe.set(r,e),e.then((function(n){i&&clearTimeout(i),Pe.get(r)===e&&(n(o,r),Pe.set(r,null))}))}}var Fe=we(),Le=we("svg"),We=/@import/,Be=new Map,Ve=new WeakMap,Ue={define:function(e){return G(e),this},key:function(e){return this.id=e,this},style:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return Ve.set(this,n.filter((function(e){return e}))),this}};function He(e,n,t){return Object.assign((function o(r){var i,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,s=Ve.get(o),l=e.join(Fe);if(s){var c=s.join(Fe);(i=!!a.adoptedStyleSheets&&!We.test(c))||(l+=c)}t&&(l+=Le);var d=Be.get(l);d||(d=Te(e,t,!i&&s),Be.set(l,d)),d(r,a,n,i&&s)}),Ue)}function qe(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];return He(e,t)}Object.assign(qe,e),Object.assign((function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];return He(e,t,!0)}),e);const Je=qe([`<style>${t(485).Z}</style>`]);G("shadow-button",{onclick:null,text:"",render:({onclick:e,text:n})=>qe`
    ${Je}
    <div class="inline-flex rounded-md shadow">
      <a
        href="#"
        class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        onclick="${e}"
      >
        ${n}
      </a>
    </div>
  `}),G("profile-header",{title:"",subtitle:"",_visible:!0,visible:{get:e=>e._visible,set:(e,n)=>e._visible=n,connect:function(e){document.addEventListener("scroll",(()=>{window.scrollY>5&&window.innerWidth<1024?e.visible=!1:e.visible=!0}))}},render:({visible:e,title:n,subtitle:t})=>qe`
      <style>
        .navigation-tab-active {
          color: rgb(255, 0, 0) !important;
        }
        .profile-header-text {
          ${!e&&"height: 0px; visibility: hidden;"}
        }
      </style>
      ${Je}
      <div class="bg-gray-200 z-20 fixed" style="width:100%;">
        <div
          class="max-w-7xl mx-auto py-2 lg:py-6 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between"
        >
          <div class="tracking-tight profile-header-text">
            <h2 class="font-extrabold text-xl lg:text-3xl block text-gray-800">
              ${n}
            </h2>
            ${t&&qe` <h4
              class="block text-blue-800 text-base lg:text-2xl font-semibold"
            >
              ${t}
            </h4>`}
          </div>
          <div class="flex justify-center">
            <slot></slot>
          </div>
        </div>
      </div>
    `}),G("parallax-star",{size:3,starCount:100,animationDuration:30,starColor:"#CFF",render:({size:e,starCount:n,animationDuration:t,starColor:o})=>{const r=`parallax-star-${e}-${n}-${t}`,i=function(e,n){return Array.from({length:e},(()=>`${2e3*Math.random()}px ${2e3*Math.random()}px ${n}`)).join(" , ")}(n,o);return qe`
      <style>
        @keyframes movingStars {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-2000px);
          }
        }
        .${r} {
          width: ${e}px;
          height: ${e}px;
          box-shadow: ${i};
          position: fixed;
          animation-name: movingStars;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          animation-duration: ${t}s;
        }
        .${r}::after {
          content: ' ';
          position: fixed;
          top: 2000px;
          width: ${e}px;
          height: ${e}px;
          box-shadow: ${i};
        }
      </style>
      ${Je}
      <div class="${r} z-0"></div>
    `}}),G("labeled-logo",{logo:{},render:({logo:e})=>{const{src:n,label:t}=e;return qe`
      ${Je}
      <div class="flex flex-col items-center">
        <img class="h-16 lg:h-24" src="${n}" />
        <span class="text-white text-sm lg:text-lg">${t}</span>
      </div>
    `}});const Xe={src:"img/logos/android.png",label:"Android"},Ye={src:"img/logos/angular.png",label:"Angular"},Ze={src:"img/logos/blender.png",label:"Blender"},Ge={src:"img/logos/c-sharp.png",label:"C#"},Ke={src:"img/logos/flutter.png",label:"Flutter"},Qe={src:"img/logos/hybrids.png",label:"Hybrids JS"},en={src:"img/logos/java.png",label:"Java"},nn={src:"img/logos/knockout-js.png",label:"Knockout JS"},tn={src:"img/logos/mongodb.png",label:"Mongo DB"},on={src:"img/logos/nodejs.png",label:"Node JS"},rn={src:"img/logos/postgres.png",label:"PostgreSQL"},an={src:"img/logos/react.png",label:"React"},sn={src:"img/logos/tailwind-css.svg",label:"Tailwind CSS"},ln={src:"img/logos/unity.png",label:"Unity"};var cn=t(658),dn=t.n(cn);G("ui-card",{render:()=>qe`
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
      ${Je}
      <div
        class="bg-gray-700 text-white text-3xl p-6 lg:p-12 mb-10 lg-w-140 width-92-percent"
        style="box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);"
      >
        <slot></slot>
      </div>
    `}),G("experience-card",{companyName:"",position:"",dateRange:"",summary:"",technologies:[],render:({companyName:e,position:n,dateRange:t,summary:o,technologies:r})=>qe`
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
      ${Je}
      <ui-card>
        <span class="block font-bold">${e}</span>
        <span class="block text-2xl font-semibold">${n}</span>
        <span class="block text-xl italic mb-10">${t}</span>
        ${qe`<p class="block text-base mb-10">${qe([o])}</p>`}
        <slot></slot>
        <span class="block text-xl font-bold mb-10">Technologies</span>
        ${dn()(r,3).map((e=>qe`<div class="flex flex-row justify-evenly mb-10">
              ${e.map((e=>qe`<labeled-logo logo="${e}"></labeled-logo>`))}
            </div>`))}
      </ui-card>
    `}),G("category-section",{id:"",categoryName:"",render:({id:e,categoryName:n})=>qe`
    ${Je}
    <div
      id="${e}"
      name="${e}"
      class="flex flex-col lg:flex-row items-center lg:items-start lg:justify-start mt-8 lg:mt-16"
    >
      <div class="text-4xl text-white lg:mr-40 mb-4 lg:mb-0 lg:w-48">
        ${n}
      </div>
      <div class="flex-col justify-start">
        <slot></slot>
      </div>
    </div>
  `});const un={summary:["As the 60th employee at Emplify, I joined a more established startup.  \n            Emplify provides Employee Engagement services including assessments for employees and coaching for managers.","Working with a larger Product team has been so rewarding in helping shape my mentality about how to approach building products.  \n            With a process of first Establishing a Minimum Viable Product together and pairing it with a suitable Engineering solution, I have learned \n            to better poke holes in designs, anticipate the technical challenges, and cut scope.  Doing this due dilligence before development, I'm able \n            to both reduce wasted or out of scope work, visualize of the problem we're solving, have a clear direction of development, and produce a \n            better outcome for our clients."]},fn={summary:["I was the 9th employee hired at a startup that provided digital signage,\n          communication, and entertainment solutions for the Senior Living\n          industry. The product consisted of a web based content management system\n          and a centralized REST API that provided data to a set top box, mobile app,\n          and Alexa devices.","LifeShare blessed me with the opportunity to wear multiple hats early on\n        in my career with challenges such as managing an internship program,\n        operating as the primary triage with our client success team, and\n        participating in recruiting efforts.","Juggling a handful of tech stacks exposed me to many different technologies and business\n        requirements.  For example, our set top box client needed to be easily readable by those with impared vision\n        and have minimal data consumption due to bandwidth and network reliability issues.  Our Alexa service needed to \n        be easy to provision: you wouldn't expect a Senior to be shipped an Echo, go to the Alexa app on the phone, and link their account.\n        They should be able to use it right away so we established a process that accomplished just that!","LifeShare successfully exited in July of 2019 with an acquisition and I soon sought out another small company due to my desire to work at startups."]},pn={name:"Fairness",description:"In a personal context it means treating\n        everyone equally and with respect. In a business sense, it is\n        delivering a fair value to customers and following ethical\n        practices."},mn={name:"Transparency",description:"Being honest and up front with open\n      communication. This is not always easy to achieve however the\n      opposite tends to erode trust and understanding."},hn={name:"Courage",description:"The willingness to push the limits. Embracing\n    failure as a lesson. Without taking a risk there is no chance of\n    success."},gn={name:"Excellence",description:"If I'm going to put my name on something, I\n    give it 110% and strive to deliver the highest quality outcome\n    given a set of constraints."},bn={name:"Beginner's Mind",description:'One of the most important lessons I\n      learned from reading a book of Buddhist teachings.\n      <a href="https://en.wikipedia.org/wiki/Shoshin"\n        >From Wikipedia</a\n      >, "it refers to having an attitude of openness, eagerness, and\n      lack of preconceptions when studying a subject, even when\n      studying at an advanced level, just as a beginner would".'};function yn(e){return`<p class='mb-4'>${e.join('</p><p class="mb-4">')}</p>`}function vn(e){return qe`<b>${e.name}</b> - ${qe([e.description])}`}G("home-page",{render:()=>qe`
    ${Je}
    <profile-header
      title="Alex Crowley"
      subtitle="Software Engineer and Entreprenuer"
    >
      <navigation-tab text="Intro" nav-id="intro"></navigation-tab>
      <navigation-tab text="Values" nav-id="values"></navigation-tab>
      <navigation-tab text="Experience" nav-id="experience"></navigation-tab>
      <dropdown-menu>
        <dropdown-menu-item
          selected=${()=>window.location.href="/projects.html"}
          >Projects</dropdown-menu-item
        >
        <dropdown-menu-item
          selected=${()=>window.open("/alex-crowley-resume.pdf","_blank")}
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
              <li>${vn(pn)}</li>
              <li>${vn(mn)}</li>
              <li>${vn(hn)}</li>
              <li>${vn(gn)}</li>
              <li>${vn(bn)}</li>
            </ul>
          </ui-card>
        </category-section>
        <category-section id="experience" category-name="Experience">
          <experience-card
            company-name="Emplify"
            position="Software Engineer"
            date-range="March 2020 - Present"
            summary="${yn(un.summary)}"
            ,
            technologies="${[on,rn,an]}"
          >
          </experience-card>
          <experience-card
            company-name="LifeShare Technologies"
            position="Software Engineer"
            date-range="March 2017 - March 2020"
            summary="${yn(fn.summary)}"
            technologies=${[Xe,Ye,Ke,en,nn,tn]}
          ></experience-card>
        </category-section>
      </div>
    </star-background>
  `});const wn={summary:["I have always considered Backend development as my specialty in software development.    \n      The website could have easily been created using WordPress however I decided to challenge myself by creating the site with good ol' fashioned HTML, CSS, and JavaScript.","Wanting to leverage reusable components and a minimalistic library, I settled on a library called <a href='https://hybrids.js.org'><i><b>Hybrids JS</b></i></a>.  \n      Combining this with a CSS framework called <a href='https://tailwindcss.com'><i><b>Tailwind CSS</b></i></a>, I was able to create this website with a uniform look and feel","I chose a dark space theme both because it is easy on the eyes and to signify that I am always exploring new frontiers to better myself.  I hope you enjoy the site 😁"]},xn={summary:['Shortly after beginning my professional career, I had a desire to start my own company.  \n      During a long weekend trip, one of my friends introduced me to Virtual Reality (VR) technology and I saw an unsaturated market opportunity.  \n      We became business partners and quickly went to work to develop our first title:\n      <a href="https://store.steampowered.com/app/711300/Bit_Storm_VR_First_Loop/"><i><b>Bit Storm VR: First Loop</b></i></a>',"As with any first professional venture, we learned some critical lessons by burning our hands on the stove.  \n      We rushed to deliver the title when we should've invested more time before the initial release, we greatly underestimated the \n      value of using original (non store-bought) assets, and failed to launch a sufficient marketing campaign.  With all that said, we \n      correctly identified a market opportunity, jumped on it, and gave it our all with the knowledge we had at that time.  Sadly, the revenue \n      from the initial launch did not warrant the continuation of development."]},Sn={summary:["We became aware of the opportunity to solve an interesting problem: giving prospective customers an immersive glimpse of a finished real-estate development \n      while it was still under construction.","Typically, an interactive tour involves a professional photography crew capturing the entire property and using software \n      to stitch everything together.  Instead, we had to rely on creating high fidelity 3d models of every item in the environment.  This taught us yet another difficult \n      lesson: when working with a client, communication of the expected outcome and work to be provided is critical.  If we had known up front they wanted to use specific \n      designs for everything, we probably would have had them contract with another party to supply us with the assets.","Creating the floor plans was as simple as placing the blueprint in our editor, dragging objects to scale, and extruding the walls up.  \n      Next came the difficult task of sourcing our assets and placing them to bring the environment to live.  We also needed a gameplan for how to navigate around the properties.  \n      Using traditional locomotion would potentially discomfort the users and we wanted to spotlight certian viewpoints.  \n      We decided on an orb-based navigaiton system.  The user would point to the orb they wanted to teleport to and click a button to navigate to the location."]};function kn(e){return`<p class='mb-4'>${e.join('</p><p class="mb-4">')}</p>`}function En(e){return e*parseFloat(getComputedStyle(document.documentElement).fontSize)}function jn(){return(document.getElementsByTagName("home-page")[0]||document.getElementsByTagName("projects-page")[0]).shadowRoot}function Nn(e){const n=jn(),t=n.querySelector(`#${e.navId}`),o=t.getBoundingClientRect(),r=o.y<En(8.25)+50&&o.y+o.height>En(8.25)+50;n.querySelector("profile-header").shadowRoot.querySelector(`#navigation-tab-${t.id}`),e.active=r}G("projects-page",{render:()=>qe`
    ${Je}
    <profile-header title="Projects">
      <navigation-tab text="Personal" nav-id="personal"></navigation-tab>
      <navigation-tab text="uVR" nav-id="uvr"></navigation-tab>
      <dropdown-menu>
        <dropdown-menu-item
          selected=${()=>window.location.href="/index.html"}
          >Home</dropdown-menu-item
        >
        <dropdown-menu-item
          selected=${()=>window.open("/alex-crowley-resume.pdf","_blank")}
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
            summary="${kn(wn.summary)}"
            ,
            technologies="${[Qe,sn]}"
          >
          </experience-card>
        </category-section>
        <category-section id="uvr" category-name="uVR">
          <experience-card
            company-name="VR Tour Demo (Contract)"
            position="Co-Developer"
            date-range="July 2018 - September 2018"
            summary="${kn(Sn.summary)}"
            ,
            technologies="${[ln,Ge,Ze]}"
          >
          </experience-card>
          <experience-card
            company-name="Bit Storm VR: First Loop"
            position="Co-Developer"
            date-range="August 2017 - October 2017"
            summary="${kn(xn.summary)}"
            ,
            technologies="${[ln,Ge,Ze]}"
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
  `}),G("star-background",{render:g((()=>qe`
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
      ${Je}
      <div class="body-content lg-body-content">
        <parallax-star size="1" animation-duration="60"></parallax-star>
        <parallax-star size="3" animation-duration="120"></parallax-star>
        <parallax-star size="4" animation-duration="90"></parallax-star>
        <slot></slot>
        <div class="flex flex-row justify-center">
          <div class="text-white text-sm mb-4">© 2021 Alex Crowley</div>
        </div>
      </div>
    `))}),G("navigation-tab",{text:"",navId:"",active:!1,_onScroll:{connect:function(e){setTimeout((()=>Nn(e)),50),window.addEventListener("scroll",(()=>Nn(e)))}},render:({active:e,text:n,navId:t})=>{const o=["p-2","lg:p-4","text-base","lg:text-lg","cursor-pointer","text-blue-800"];return e&&o.push("navigation-tab-active"),qe`
      <style>
        .navigation-tab-active {
          font-weight: 700;
        }
      </style>
      ${Je}
      <div
        id="navigation-tab-intro"
        class=${o}
        onclick="${()=>function(e){const n=jn().getElementById(e);window.scrollTo(0,n.offsetTop-En(8.25))}(t)}"
      >
        ${n}
      </div>
    `}}),G("chevron-down",{render:()=>qe`
    ${Je}
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
  `});const On={active:!1,_autoCloser:{connect:e=>{const n=()=>e.active=!1;return window.addEventListener("click",n),()=>window.removeEventListener("click",n)}},render:({active:e})=>qe`
      ${Je}
      <div class="relative inline-block text-left cursor-pointer">
        <div
          class="flex flex-row items-center text-blue-700 p-2 lg:p-4 text-base lg:text-lg"
          onclick="${(n,t)=>{t.stopPropagation(),n.active=!e}}"
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
          class="absolute origin-top-right right-0 w-56 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 duration-200 ease-linear ${e?"opacity-100 scale-100":"opacity-0 scale-95 cursor-auto"}"
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
    `};var $n,zn;G("dropdown-menu",On),G("dropdown-menu-item",{selected:void 0,dropdownMenu:($n=On,zn="function"==typeof $n?$n:function(e){return e===$n},{get:function(e){return function(e,n){for(var t=e.parentElement||e.parentNode.host;t;){var o=t.constructor.hybrids;if(o&&n(o))return t;t=t.parentElement||t.parentNode&&t.parentNode.host}return t||null}(e,zn)},connect:function(e,n,t){return!!e[n]&&t}}),render:({selected:e,dropdownMenu:n})=>qe`
    ${Je}
    <a
      onclick="${(t,o)=>{o.stopPropagation(),n.active&&(n.active=!1,e&&setTimeout((()=>e(t)),50))}}"
      class="block px-4 py-2 text-sm lg:text-base text-white hover:bg-gray-600"
      role="menuitem"
      ><slot
    /></a>
  `}),G("web-app",{render:({onclick:e,text:n})=>""})})()})();