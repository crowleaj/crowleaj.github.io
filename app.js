(()=>{var e={485:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([e.id,'/*\n! tailwindcss v3.0.15 | MIT License | https://tailwindcss.com\n*/\n\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  /* 1 */\n  border-width: 0;\n  /* 2 */\n  border-style: solid;\n  /* 2 */\n  border-color: #e5e7eb;\n  /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -moz-tab-size: 4;\n  /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4;\n  /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0;\n  /* 1 */\n  line-height: inherit;\n  /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  border-top-width: 1px;\n  /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0;\n  /* 1 */\n  border-color: inherit;\n  /* 2 */\n  border-collapse: collapse;\n  /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: inherit;\n  /* 1 */\n  color: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  padding: 0;\n  /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button;\n  /* 1 */\n  background-color: transparent;\n  /* 2 */\n  background-image: none;\n  /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  /* 1 */\n  vertical-align: middle;\n  /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n.visible {\n  visibility: visible;\n}\n\n.\\!visible {\n  visibility: visible !important;\n}\n\n.fixed {\n  position: fixed;\n}\n\n.absolute {\n  position: absolute;\n}\n\n.relative {\n  position: relative;\n}\n\n.right-0 {\n  right: 0px;\n}\n\n.z-0 {\n  z-index: 0;\n}\n\n.z-20 {\n  z-index: 20;\n}\n\n.z-10 {\n  z-index: 10;\n}\n\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.mt-8 {\n  margin-top: 2rem;\n}\n\n.mb-4 {\n  margin-bottom: 1rem;\n}\n\n.mb-10 {\n  margin-bottom: 2.5rem;\n}\n\n.mt-28 {\n  margin-top: 7rem;\n}\n\n.ml-10 {\n  margin-left: 2.5rem;\n}\n\n.mr-10 {\n  margin-right: 2.5rem;\n}\n\n.ml-4 {\n  margin-left: 1rem;\n}\n\n.mt-16 {\n  margin-top: 4rem;\n}\n\n.block {\n  display: block;\n}\n\n.inline-block {\n  display: inline-block;\n}\n\n.flex {\n  display: flex;\n}\n\n.inline-flex {\n  display: inline-flex;\n}\n\n.h-16 {\n  height: 4rem;\n}\n\n.h-5 {\n  height: 1.25rem;\n}\n\n.h-44 {\n  height: 11rem;\n}\n\n.w-56 {\n  width: 14rem;\n}\n\n.w-5 {\n  width: 1.25rem;\n}\n\n.max-w-7xl {\n  max-width: 80rem;\n}\n\n.flex-1 {\n  flex: 1 1 0%;\n}\n\n.origin-top-right {\n  transform-origin: top right;\n}\n\n.scale-100 {\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.scale-95 {\n  --tw-scale-x: .95;\n  --tw-scale-y: .95;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.cursor-auto {\n  cursor: auto;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.justify-start {\n  justify-content: flex-start;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.justify-evenly {\n  justify-content: space-evenly;\n}\n\n.rounded-md {\n  border-radius: 0.375rem;\n}\n\n.rounded-full {\n  border-radius: 9999px;\n}\n\n.border {\n  border-width: 1px;\n}\n\n.border-transparent {\n  border-color: transparent;\n}\n\n.bg-gray-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n}\n\n.bg-gray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}\n\n.bg-indigo-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(79 70 229 / var(--tw-bg-opacity));\n}\n\n.p-2 {\n  padding: 0.5rem;\n}\n\n.p-6 {\n  padding: 1.5rem;\n}\n\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n\n.font-bold {\n  font-weight: 700;\n}\n\n.font-semibold {\n  font-weight: 600;\n}\n\n.font-extrabold {\n  font-weight: 800;\n}\n\n.font-medium {\n  font-weight: 500;\n}\n\n.italic {\n  font-style: italic;\n}\n\n.tracking-tight {\n  letter-spacing: -0.025em;\n}\n\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.text-blue-700 {\n  --tw-text-opacity: 1;\n  color: rgb(29 78 216 / var(--tw-text-opacity));\n}\n\n.text-blue-800 {\n  --tw-text-opacity: 1;\n  color: rgb(30 64 175 / var(--tw-text-opacity));\n}\n\n.text-gray-800 {\n  --tw-text-opacity: 1;\n  color: rgb(31 41 55 / var(--tw-text-opacity));\n}\n\n.opacity-100 {\n  opacity: 1;\n}\n\n.opacity-0 {\n  opacity: 0;\n}\n\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.ring-1 {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.ring-black {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(0 0 0 / var(--tw-ring-opacity));\n}\n\n.ring-opacity-5 {\n  --tw-ring-opacity: 0.05;\n}\n\n.transition {\n  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.duration-100 {\n  transition-duration: 100ms;\n}\n\n.duration-75 {\n  transition-duration: 75ms;\n}\n\n.duration-200 {\n  transition-duration: 200ms;\n}\n\n.ease-out {\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.ease-in {\n  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\n\n.ease-linear {\n  transition-timing-function: linear;\n}\n\n.hover\\:bg-gray-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(75 85 99 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-indigo-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(67 56 202 / var(--tw-bg-opacity));\n}\n\n@media (min-width: 640px) {\n  .sm\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n}\n\n@media (min-width: 1024px) {\n  .lg\\:mt-16 {\n    margin-top: 4rem;\n  }\n\n  .lg\\:mr-40 {\n    margin-right: 10rem;\n  }\n\n  .lg\\:mb-0 {\n    margin-bottom: 0px;\n  }\n\n  .lg\\:mt-36 {\n    margin-top: 9rem;\n  }\n\n  .lg\\:ml-10 {\n    margin-left: 2.5rem;\n  }\n\n  .lg\\:mr-0 {\n    margin-right: 0px;\n  }\n\n  .lg\\:flex {\n    display: flex;\n  }\n\n  .lg\\:h-24 {\n    height: 6rem;\n  }\n\n  .lg\\:h-72 {\n    height: 18rem;\n  }\n\n  .lg\\:w-48 {\n    width: 12rem;\n  }\n\n  .lg\\:flex-row {\n    flex-direction: row;\n  }\n\n  .lg\\:items-start {\n    align-items: flex-start;\n  }\n\n  .lg\\:items-center {\n    align-items: center;\n  }\n\n  .lg\\:justify-start {\n    justify-content: flex-start;\n  }\n\n  .lg\\:justify-between {\n    justify-content: space-between;\n  }\n\n  .lg\\:p-4 {\n    padding: 1rem;\n  }\n\n  .lg\\:p-12 {\n    padding: 3rem;\n  }\n\n  .lg\\:py-6 {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n  }\n\n  .lg\\:px-8 {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n\n  .lg\\:text-base {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .lg\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n\n  .lg\\:text-3xl {\n    font-size: 1.875rem;\n    line-height: 2.25rem;\n  }\n\n  .lg\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n\n  .lg\\:text-xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n}\n',""]);const s=a},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},81:e=>{"use strict";e.exports=function(e){return e[1]}},658:e=>{var n=9007199254740991,t=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=/^(?:0|[1-9]\d*)$/,s=parseInt,l=Object.prototype.toString,c=Math.ceil,d=Math.max;function p(e,n,t){var o=-1,r=e.length;n<0&&(n=-n>r?0:r+n),(t=t>r?r:t)<0&&(t+=r),r=n>t?0:t-n>>>0,n>>>=0;for(var i=Array(r);++o<r;)i[o]=e[o+n];return i}function u(e){var n=typeof e;return!!e&&("object"==n||"function"==n)}e.exports=function(e,g,h){g=(h?function(e,t,o){if(!u(o))return!1;var r=typeof t;return!!("number"==r?function(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}(e.length)&&!function(e){var n=u(e)?l.call(e):"";return"[object Function]"==n||"[object GeneratorFunction]"==n}(e)}(o)&&function(e,t){return!!(t=null==t?n:t)&&("number"==typeof e||a.test(e))&&e>-1&&e%1==0&&e<t}(t,o.length):"string"==r&&t in o)&&function(e,n){return e===n||e!=e&&n!=n}(o[t],e)}(e,g,h):void 0===g)?1:d(function(e){var n=function(e){return e?Infinity===(e=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(u(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=u(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var a=r.test(e);return a||i.test(e)?s(e.slice(2),a?2:8):o.test(e)?NaN:+e}(e))||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}(e),a=n%1;return n==n?a?n-a:n:0}(g),0);var m=e?e.length:0;if(!m||g<1)return[];for(var f=0,b=0,w=Array(c(m/g));f<m;)w[b++]=p(e,f,f+=g);return w}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e={};t.r(e),t.d(e,{resolve:()=>ce,set:()=>se});const n=new WeakMap,o=new Set;function r(){try{o.forEach((e=>{try{n.get(e)(),o.delete(e)}catch(n){throw o.delete(e),n}}))}catch(e){throw o.size&&r(),e}}function i(e){n.has(e)&&(o.size||requestAnimationFrame(r),o.add(e))}const a=new WeakMap,s=new WeakSet;function l(e,n){let t=a.get(e);t||(t=new Map,a.set(e,t));let o=t.get(n);return o||(o={target:e,key:n,value:void 0,lastValue:void 0,contexts:new Set,deps:new Set,state:0,depState:0,resolved:!1},t.set(n,o)),o}function c(e){e.contexts.forEach((n=>{s.has(n.target)&&(Object.assign(n,{depState:0,resolved:!1}),e.contexts.delete(n),c(n))}))}function d(e){e.resolved=!1,s.has(e.target)||i(e),c(e),e.contexts.forEach(d)}let p=null;const u=new Set;function g(e,n,t){const o=l(e,n);if(p&&!s.has(p.target)&&(p.deps.add(o),o.contexts.add(p)),!s.has(e)){if(c(o),o.resolved)return o.value;if(o.depState>o.state){let e=o.state;for(const n of o.deps){if(n.target[n.key],!n.resolved){e=!1;break}e+=n.state}if(e&&e===o.depState)return o.resolved=!0,o.value}}const r=p;try{if(u.has(o))throw Error(`Circular get invocation is forbidden: '${n}'`);o.deps.forEach((e=>{e.contexts.delete(o)})),o.deps.clear(),p=o,u.add(o);const i=t(e,o.value);p=r,i!==o.value&&(o.value=i,o.state+=1);let a=o.state;o.deps.forEach((e=>{a+=e.state})),o.depState=a,o.resolved=!s.has(e),u.delete(o)}catch(e){throw p=r,u.delete(o),o.resolved=!1,p&&!s.has(p)&&(p.deps.delete(o),o.contexts.delete(p)),e}return o.value}const h=new Set;function m(e,n,t={}){if(u.size)throw Error(`Invalidating property in chain of get calls is forbidden: '${n}'`);!function(e,n){e.depState=0,d(e),n.clearValue&&(e.value=void 0,e.lastValue=void 0),n.deleteEntry&&function(e){h.size||requestAnimationFrame((()=>{h.forEach((e=>{0===e.contexts.size&&(e.deps.forEach((n=>{n.contexts.delete(e)})),a.get(e.target).delete(e.key))})),h.clear()})),h.add(e)}(e),n.force&&(e.state+=1)}(l(e,n),t)}function f(e,t,r,a){const s=l(e,t);return function(e,t){return n.set(e,t),i(e),function(){o.delete(e),n.delete(e)}}(s,(()=>{const n=g(e,t,r);n!==s.lastValue&&(a(e,n,s.lastValue),s.lastValue=n)}))}function b(e){s.add(e)}const w=new Map;function y(e){let n=w.get(e);return void 0===n&&(n=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),w.set(e,n)),n}function v(e,n){const t=window.ShadyCSS;return t&&!t.nativeShadow?e(t):n}function x(e){return`<${String(e.tagName).toLowerCase()}>`}function k(e,n){e.nodeType===Node.ELEMENT_NODE&&(n(e),e.shadowRoot&&k(e.shadowRoot,n));const t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,null,!1);for(;t.nextNode();){const e=t.currentNode;n(e),e.shadowRoot&&k(e.shadowRoot,n)}}const S=Promise.resolve(),$=new WeakMap,E="walkInShadow"===k.name,N=new WeakMap,j=new WeakMap,C=new WeakMap;class z extends HTMLElement{constructor(){super();const e=N.get(this.constructor);for(let n=0;n<e.length;n+=1){const t=e[n];if(hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}}b(this)}connectedCallback(){s.delete(this);const e=C.get(this.constructor),n=[];for(let t=0;t<e.length;t+=1){const o=e[t](this);o&&n.push(o)}j.set(this,n)}disconnectedCallback(){b(this);const e=j.get(this);for(let n=0;n<e.length;n+=1)e[n]()}}function T(e,n){return{get:n?n=>{const t=e(n),o=n.shadowRoot||n.attachShadow({mode:"open",delegatesFocus:e.delegatesFocus||!1});return()=>(t(n,o),o)}:n=>{const t=e(n);return()=>(t(n,n),n)},observe(e,n){n()}}}const M={string:String,number:Number,boolean:Boolean,undefined:e=>e};function A(e,n){if(n){if(e===n.hybrids)return n;N.get(n).forEach((e=>{delete n.prototype[e]}))}else n=class extends z{};n.hybrids=e;const t=[],o=Object.keys(e);return C.set(n,t),N.set(n,o),o.forEach((o=>{if("tag"===o)return;let r=e[o];const i=typeof r;if("function"===i)r="render"===o?T(r,!0):"content"===o?T(r):{get:r};else if("object"!==i||null===r)r={value:r};else if(r.set){const e=y(o),n=r.get||((e,n)=>n);r.get=(t,o)=>(void 0===o&&(o=r.set(t,t.getAttribute(e)||o)),n(t,o))}if(hasOwnProperty.call(r,"value"))r=function(e,n){const t=typeof n.value,o=M[t];if(!o)throw TypeError(`Invalid default value for '${e}' property - it must be a string, number, boolean or undefined: ${t}`);const r=n.value,i=y(e),a=(e,n)=>(!n&&0!==n||"object"==typeof n&&void 0===n.toString()?e.removeAttribute(i):e.setAttribute(i,"boolean"===t?"":n),n);return{get:(e,n)=>{if(void 0===n){if(!e.hasAttribute(i))return r;n=o("boolean"===t||e.getAttribute(i))}return n},set:"undefined"!==t?(e,n)=>a(e,o(n)):(e,n)=>n,connect:"undefined"!==t?(t,o,s)=>(t.hasAttribute(i)||t[e]!==r||a(t,r),n.connect&&n.connect(t,o,s)):n.connect,observe:n.observe}}(o,r);else if(!r.get)throw TypeError(`Invalid descriptor for '${o}' property - it must contain 'value' or 'get' option`);Object.defineProperty(n.prototype,o,{get:function(){return g(this,o,r.get)},set:r.set&&function(e){!function(e,n,t,o){const r=l(e,n),i=t(e,o,r.value);i!==r.value&&(r.value=i,r.state+=1,r.depState=0,d(r))}(this,o,r.set,e)},enumerable:!0,configurable:!0}),r.observe&&t.unshift((e=>f(e,o,r.get,r.observe))),r.connect&&t.push((e=>r.connect(e,o,(function(n){m(e,o,{force:"object"==typeof n&&!0===n.force})}))))})),n}const O=new Map,I=Object.freeze(Object.assign((function(e){if(!e.tag)throw TypeError("Error while defining hybrids: 'tag' property with dashed tag name is required");const n=window.customElements.get(e.tag);if(n){if(n.hybrids)return function(e){O.size||S.then((()=>{k(document.body,(e=>{if(O.has(e.constructor)){const n=O.get(e.constructor),t=e.constructor.hybrids;e.disconnectedCallback(),Object.keys(t).forEach((o=>{const r=typeof t[o],i="object"!==r&&"function"!==r&&t[o]!==n[o];m(e,o,{clearValue:i})})),e.connectedCallback()}})),O.clear()})),O.set(e,e.hybrids)}(n),A(e,n),Object.freeze(e);throw TypeError(`Custom element with '${e.tag}' tag name already defined outside of the hybrids context`)}return customElements.define(e.tag,A(e)),Object.freeze(e)}),{compile:e=>A(e)})),R=new WeakMap,F={get:(e,n)=>R.get(e)||(n&&R.set(e,n),n),set:(e,n)=>(R.set(e,n),n)};function W(e){let n;for(;e&&(n=F.get(e))&&n.endNode;)e=n.endNode;return e}function L(e){if(e.nodeType!==Node.TEXT_NODE){let n=e.childNodes[0];for(;n;)e.removeChild(n),n=e.childNodes[0]}else{const n=F.get(e);if(n.startNode){const e=W(n.endNode);let t=n.startNode;const o=e.nextSibling;for(;t;){const e=t.nextSibling;t.parentNode.removeChild(t),t=e!==o&&e}}}}const _=new WeakMap;function P(e,n){const t=F.get(e),o=t.startNode,r=W(t.endNode);n.parentNode.insertBefore(e,n.nextSibling);let i=e,a=o;for(;a;){const e=a.nextSibling;i.parentNode.insertBefore(a,i.nextSibling),i=a,a=e!==r.nextSibling&&e}}function B(e,n,t,o){let r=typeof t;Array.isArray(t)?r="array":t instanceof Node&&(r="node");let i=F.get(n,{});switch(i.type!==r&&(L(n),"array"===r&&_.delete(n),i=F.set(n,{type:r}),""!==n.textContent&&(n.textContent="")),r){case"function":t(e,n);break;case"array":!function(e,n,t,o){let r=_.get(n);const i=t.map(((e,n)=>({id:hasOwnProperty.call(e,"id")?e.id:n,value:e,placeholder:null,available:!0})));if(_.set(n,i),r){const e=new Set;i.forEach((n=>e.add(n.id))),r=r.filter((n=>!!e.has(n.id)||(L(n.placeholder),n.placeholder.parentNode.removeChild(n.placeholder),!1)))}let a=n;const s=t.length-1,l=F.get(n);for(let n=0;n<i.length;n+=1){const t=i[n];let c;if(r)for(let e=0;e<r.length;e+=1)if(r[e].available&&r[e].id===t.id){c=r[e];break}c?(c.available=!1,t.placeholder=c.placeholder,t.placeholder.previousSibling!==a&&P(t.placeholder,a),c.value!==t.value&&o(e,t.placeholder,t.value,c.value)):(t.placeholder=document.createTextNode(""),a.parentNode.insertBefore(t.placeholder,a.nextSibling),o(e,t.placeholder,t.value)),a=W(F.get(t.placeholder).endNode||t.placeholder),0===n&&(l.startNode=t.placeholder),n===s&&(l.endNode=a)}r&&r.forEach((e=>{e.available&&(L(e.placeholder),e.placeholder.parentNode.removeChild(e.placeholder))}))}(e,n,t,B);break;case"node":!function(e,n,t,o){const r=F.get(n,{});o&&o.parentNode.removeChild(o),r.startNode=t,r.endNode=t,n.parentNode.insertBefore(t,n.nextSibling)}(0,n,t,o);break;default:n.textContent="number"===r||t?t:""}}const D=new WeakMap,V=new WeakMap;function q(e,n,t){const o=V.get(n)||new Set,r=function(e,n=new Set){return Array.isArray(e)?e.forEach((e=>n.add(e))):null!==e&&"object"==typeof e?Object.keys(e).forEach((t=>e[t]&&n.add(t))):n.add(e),n}(t);V.set(n,r),r.forEach((e=>{n.classList.add(e),o.delete(e)})),o.forEach((e=>{n.classList.remove(e)}))}const H=new WeakMap;function X(e,n,t){if(null===t||"object"!=typeof t)throw TypeError(`Style value must be an object in ${x(n)}:`,t);const o=H.get(n)||new Map,r=Object.keys(t).reduce(((e,r)=>{const i=y(r),a=t[r];return a||0===a?n.style.setProperty(i,a):n.style.removeProperty(i),e.set(i,a),o.delete(i),e}),new Map);o.forEach(((e,t)=>{n.style[t]=""})),H.set(n,r)}function U(e,n,t){if("on"===n.substr(0,2))return o=n.substr(2),(e,n,t,r)=>{if(r){const e=D.get(n);e&&n.removeEventListener(o,e.get(r),void 0!==r.options&&r.options)}if(t){if("function"!=typeof t)throw Error("Event listener must be a function: "+typeof t);let r=D.get(n);r||(r=new WeakMap,D.set(n,r));const i=t.bind(null,e);r.set(t,i),n.addEventListener(o,i,void 0!==t.options&&t.options)}};var o;switch(e){case"class":return q;case"style":return X;default:{let o=!1;return(r,i,a)=>{if(o=o||!t&&!(i instanceof SVGElement)&&n in i,o)i[n]=a;else if(!1===a||null==a)i.removeAttribute(e);else{const n=!0===a?"":String(a);i.setAttribute(e,n)}}}}}const J=Date.now(),Y=(e=0)=>`{{h-${J}-${e}}}`,Z=Y("(\\d+)"),G=new RegExp(`^${Z}$`),K=new RegExp(Z,"g"),Q=new WeakMap,ee="object"==typeof window.ShadyDOM&&window.ShadyDOM.inUse?function(e){let n;return{get currentNode(){return n},nextNode(){if(void 0===n)n=e.childNodes[0];else if(n.childNodes.length)n=n.childNodes[0];else if(n.nextSibling)n=n.nextSibling;else{let t=n.parentNode;for(n=t.nextSibling;!n&&t!==e;)t=t.parentNode,n=t.nextSibling}return!!n}}}:function(e){return document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,null,!1)},ne=new Map;function te(e,n){const t=Y(n),o=function(e,n=0){let t=(e=e.replace(/(^[\n\s\t ]+)|([\n\s\t ]+$)+/g,"")).indexOf("\n");if(t>-1){let o=0-n-2;for(t+=1;" "===e[t]&&t<e.length;t+=1)o+=1;return e.replace(/\n +/g,(e=>e.substr(0,Math.max(e.length-o,1))))}return e}(e).split("\n").filter((e=>e)).map((e=>{const n=e.indexOf(t);return n>-1?`| ${e}\n--${"-".repeat(n)}${"^".repeat(6)}`:`| ${e}`})).join("\n").replace(K,"${...}");return`${o}`}function oe({target:e,detail:n},t){let o;switch(e.type){case"radio":case"checkbox":o=e.checked&&e.value;break;case"file":o=e.files;break;default:o=n&&hasOwnProperty.call(n,"value")?n.value:e.value}t(o)}function re(e,n){return e.split(".").reverse().reduce(((e,t)=>e?{[t]:e}:{[t]:n}),null)}const ie=new Map,ae=new WeakMap;function se(e,n){if(!e)throw Error(`The first argument must be a property name or an object instance: ${e}`);if("object"==typeof e){if(void 0===n)throw Error("For model instance property the second argument must be defined");const t=$.get(e);if(!t)throw Error("Provided object must be a model instance of the store");return null===n?()=>{t.set(e,null)}:(o,r)=>{oe(r,(o=>{const r=ae.get(e);r||requestAnimationFrame((()=>{const n=ae.get(e);ae.delete(e),t.set(e,n).catch((()=>{}))})),ae.set(e,{...r,...re(n,o)})}))}}if(2===arguments.length)return t=>{t[e]=n};let t=ie.get(e);return t||(t=(n,t)=>{oe(t,(t=>{n[e]=t}))},ie.set(e,t)),t}const le=new WeakMap;function ce(e,n,t=200){return(o,r)=>{let i;n&&(i=setTimeout((()=>{i=void 0,requestAnimationFrame((()=>{n(o,r)}))}),t)),le.set(r,e),e.then((n=>{i&&clearTimeout(i),le.get(r)===e&&(B(o,r,n),le.set(r,null))}))}}const de=Y(),pe=Y("svg"),ue=/@import/,ge=new Map,he=new WeakMap,me={key(e){return this.id=e,this},style(...e){return he.set(this,(he.get(this)||[]).concat(e.filter((e=>e)))),this},css(e,...n){return he.set(this,(he.get(this)||[]).concat(e.reduce(((e,t,o)=>`${e}${t}${n[o]||""}`),""))),this}};function fe(e,n,t){const o=(r,i=r)=>{const a=he.get(o);let s,l=e.join(de);if(a){const e=a.join(de);s=!!i.adoptedStyleSheets&&!ue.test(e),s||(l+=e)}t&&(l+=pe);let c=ge.get(l);c||(c=function(e,n,t){const o=document.createElement("template"),r=[],i=function(e,n){let t=e.reduce(((n,t,o)=>0===o?t:e.slice(o).join("").match(/^\s*<\/\s*(table|tr|thead|tbody|tfoot|colgroup)>/)?`${n}\x3c!--${Y(o-1)}--\x3e${t}`:n+Y(o-1)+t),"");return n&&(t+=`<style>\n${n.join("\n/*------*/\n")}\n</style>`),t}(e,t);if(o.innerHTML=n?`<svg>${i}</svg>`:i,n){const e=o.content.firstChild;o.content.removeChild(e),Array.from(e.childNodes).forEach((e=>o.content.appendChild(e)))}!function(e){const n=document.createNodeIterator(e,NodeFilter.SHOW_COMMENT,null,!1);let t;for(;t=n.nextNode();)G.test(t.textContent)&&(t.parentNode.insertBefore(document.createTextNode(t.textContent),t),t.parentNode.removeChild(t))}(o.content);const a=ee(o.content),s=[];let l=0;for(;a.nextNode();){const t=a.currentNode;if(t.nodeType===Node.TEXT_NODE){const e=t.textContent;if(!e.match(G)){const n=e.match(K);if(n){let o=t;n.reduce(((e,n)=>{const[t,o]=e.pop().split(n);return t&&e.push(t),e.push(n),o&&e.push(o),e}),[e]).forEach(((e,n)=>{0===n?o.textContent=e:o=o.parentNode.insertBefore(document.createTextNode(e),o.nextSibling)}))}}const n=t.textContent.match(G);n&&(t.textContent="",r[n[1]]=[l,B])}else if(t.nodeType===Node.ELEMENT_NODE){if(E){const e=t.tagName.toLowerCase();!e.match(/.+-.+/)||window.customElements.get(e)||s.includes(e)||s.push(e)}Array.from(t.attributes).forEach((o=>{const i=o.value.trim(),a=o.name,s=i.match(G);if(s){const i=e[s[1]].replace(/\s*=\s*['"]*$/g,"").split(/\s+/).pop();r[s[1]]=[l,U(a,i,n)],t.removeAttribute(o.name)}else{const e=i.match(K);if(e){const t=`attr__${a}`;e.forEach(((o,s)=>{const[,c]=o.match(G);let d=!1;r[c]=[l,(r,l,c)=>{const p=F.get(l,{});p[t]=(p[t]||i).replace(o,null==c?"":c),1!==e.length&&s+1!==e.length||(d=d||!n&&!(l instanceof SVGElement)&&a in l,d?l[a]=p[t]:l.setAttribute(a,p[t]),p[t]=void 0)}]})),o.value=""}}}))}l+=1}return E&&s.length&&console.warn(`Not defined ${s.map((e=>`<${e}>`)).join(", ")} element${s.length>1?"s":""} found in the template:\n${te(i,-1)}`),function(e,n,t,a){const s=F.get(n,{type:"function"});if(o!==s.template){(s.template||n.nodeType!==Node.TEXT_NODE)&&L(n),s.prevArgs=null;const t=document.importNode(function(e,n){return n?v((t=>{let o=Q.get(e);o||(o=new Map,Q.set(e,o));let r=o.get(n);if(!r){r=document.createElement("template"),r.content.appendChild(e.content.cloneNode(!0)),o.set(n,r);const i=r.content.querySelectorAll("style");Array.from(i).forEach((e=>{const n=e.childNodes.length+1;for(let t=0;t<n;t+=1)e.parentNode.insertBefore(document.createTextNode(Y()),e)})),t.prepareTemplate(r,n.toLowerCase())}return r}),e):e}(o,e.tagName).content,!0),i=ee(t),a=r.slice(0);let l=0,c=a.shift();const d=[];for(s.template=o,s.markers=d;i.nextNode();){const e=i.currentNode;for(;c&&c[0]===l;)d.push([e,c[1]]),c=a.shift();l+=1}if(n.nodeType===Node.TEXT_NODE){s.startNode=t.childNodes[0],s.endNode=t.childNodes[t.childNodes.length-1];let e=n,o=t.childNodes[0];for(;o;)n.parentNode.insertBefore(o,e.nextSibling),e=o,o=t.childNodes[0]}else n.appendChild(t)}const l=n.adoptedStyleSheets;if(a){let e=!1;if((a=a.map((e=>{if(e instanceof CSSStyleSheet)return e;let n=ne.get(e);return n||(n=new CSSStyleSheet,n.replaceSync(e),ne.set(e,n)),n}))).length===l.length){e=!0;for(let n=0;n<a.length;n+=1)if(a[n]!==l[n]){e=!1;break}}e||(n.adoptedStyleSheets=a)}else l&&l.length&&(n.adoptedStyleSheets=[]);const c=s.prevArgs;s.prevArgs=t;for(let n=0;n<s.markers.length;n+=1){if(c&&c[n]===t[n])continue;const[o,r]=s.markers[n];try{r(e,o,t[n],c&&c[n])}catch(t){throw console.error(`Following error was thrown when updating a template expression in ${x(e)}\n${te(i,n)}`),t}}n.nodeType!==Node.TEXT_NODE&&v((n=>{e.shadowRoot&&(c?n.styleSubtree(e):n.styleElement(e))}))}}(e,t,!s&&a),ge.set(l,c)),c(r,i,n,s&&a)};return Object.assign(o,me)}function be(e,...n){return fe(e,n)}Object.assign(be,e),Object.assign((function(e,...n){return fe(e,n,!0)}),e);const we=be([`<style>${t(485).Z}</style>`]),ye=(I({tag:"category-section",id:"",categoryName:"",render:({id:e,categoryName:n})=>be`
    ${we}
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
  `}),I({tag:"dropdown-menu",active:!1,_autoCloser:{value:"",connect:e=>{const n=()=>e.active=!1;return window.addEventListener("click",n),()=>window.removeEventListener("click",n)}},render:({active:e})=>be`
      ${we}
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
    `}));I({tag:"dropdown-menu-item",selected:void 0,dropdownMenu:function(e){const n="function"==typeof e?e:n=>n===e;return{get:e=>function(e,n){let t=e.parentElement||e.parentNode.host;for(;t;){const e=t.constructor.hybrids;if(e&&n(e))return t;t=t.parentElement||t.parentNode&&t.parentNode.host}return t||null}(e,n),connect:(e,n,t)=>!!e[n]&&t}}(ye),render:({selected:e,dropdownMenu:n})=>be`
    ${we}
    <a
      onclick="${(t,o)=>{o.stopPropagation(),n.active&&(n.active=!1,e&&setTimeout((()=>e(t)),50))}}"
      class="block px-4 py-2 text-sm lg:text-base text-white hover:bg-gray-600"
      role="menuitem"
      ><slot
    /></a>
  `}),I({tag:"labeled-logo",logo:{get:(e,n={})=>n,set:(e,n)=>n},render:({logo:e})=>{const{src:n,label:t}=e;return be`
      ${we}
      <div class="flex flex-col items-center">
        <img class="h-16 lg:h-24" src="${n}" />
        <span class="text-white text-sm lg:text-lg">${t}</span>
      </div>
    `}});const ve={src:"img/logos/android.png",label:"Android"},xe={src:"img/logos/angular.png",label:"Angular"},ke={src:"img/logos/blender.png",label:"Blender"},Se={src:"img/logos/c-sharp.png",label:"C#"},$e={src:"img/logos/flutter.png",label:"Flutter"},Ee={src:"img/logos/hybrids.png",label:"Hybrids JS"},Ne={src:"img/logos/java.png",label:"Java"},je={src:"img/logos/knockout-js.png",label:"Knockout JS"},Ce={src:"img/logos/mongodb.png",label:"Mongo DB"},ze={src:"img/logos/nodejs.png",label:"Node JS"},Te={src:"img/logos/postgres.png",label:"PostgreSQL"},Me={src:"img/logos/react.png",label:"React"},Ae={src:"img/logos/tailwind-css.svg",label:"Tailwind CSS"},Oe={src:"img/logos/unity.png",label:"Unity"};var Ie=t(658),Re=t.n(Ie);function Fe(e){return e*parseFloat(getComputedStyle(document.documentElement).fontSize)}function We(){return(document.getElementsByTagName("home-page")[0]||document.getElementsByTagName("projects-page")[0]).shadowRoot}function Le(e){const n=We(),t=n.querySelector(`#${e.navId}`),o=t.getBoundingClientRect(),r=o.y<Fe(8.25)+50&&o.y+o.height>Fe(8.25)+50;n.querySelector("profile-header").shadowRoot.querySelector(`#navigation-tab-${t.id}`),e.active=r}I({tag:"ui-card",render:()=>be`
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
      ${we}
      <div
        class="bg-gray-700 text-white text-3xl p-6 lg:p-12 mb-10 lg-w-140 width-92-percent"
        style="box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);"
      >
        <slot></slot>
      </div>
    `}),I({tag:"experience-card",companyName:"",position:"",dateRange:"",summary:"",technologies:{get:(e,n=[])=>n,set:(e,n)=>n},render:({companyName:e,position:n,dateRange:t,summary:o,technologies:r})=>be`
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
      ${we}
      <ui-card>
        <span class="block font-bold">${e}</span>
        <span class="block text-2xl font-semibold">${n}</span>
        <span class="block text-xl italic mb-10">${t}</span>
        ${be`<p class="block text-base mb-10">${be([o])}</p>`}
        <slot></slot>
        <span class="block text-xl font-bold mb-10">Technologies</span>
        ${Re()(r,3).map((e=>be`<div class="flex flex-row justify-evenly mb-10">
              ${e.map((e=>be`<labeled-logo logo="${e}"></labeled-logo>`))}
            </div>`))}
      </ui-card>
    `}),I({tag:"navigation-tab",text:"",navId:"",active:!1,_onScroll:{value:"",connect:function(e){setTimeout((()=>Le(e)),50),window.addEventListener("scroll",(()=>Le(e)))}},render:({active:e,text:n,navId:t})=>{const o=["p-2","lg:p-4","text-base","lg:text-lg","cursor-pointer","text-blue-800"];return e&&o.push("navigation-tab-active"),be`
      <style>
        .navigation-tab-active {
          font-weight: 700;
        }
      </style>
      ${we}
      <div
        id="navigation-tab-intro"
        class=${o}
        onclick="${()=>function(e){const n=We().getElementById(e);window.scrollTo(0,n.offsetTop-Fe(8.25))}(t)}"
      >
        ${n}
      </div>
    `}}),I({tag:"profile-header",title:"",subtitle:"",_visible:!0,visible:{get:e=>e._visible,set:(e,n)=>e._visible=n,connect:function(e){document.addEventListener("scroll",(()=>{window.scrollY>5&&window.innerWidth<1024?e.visible=!1:e.visible=!0}))}},render:({visible:e,title:n,subtitle:t})=>be`
      <style>
        .navigation-tab-active {
          color: rgb(255, 0, 0) !important;
        }
        .profile-header-text {
          ${!e&&"height: 0px; visibility: hidden;"}
        }
      </style>
      ${we}
      <div class="bg-gray-200 z-20 fixed" style="width:100%;">
        <div
          class="max-w-7xl mx-auto py-2 lg:py-6 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between"
        >
          <div class="tracking-tight profile-header-text">
            <h2 class="font-extrabold text-xl lg:text-3xl block text-gray-800">
              ${n}
            </h2>
            ${t&&be` <h4
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
    `}),I({tag:"parallax-star",size:3,starCount:100,animationDuration:30,starColor:"#CFF",render:({size:e,starCount:n,animationDuration:t,starColor:o})=>{const r=`parallax-star-${e}-${n}-${t}`,i=function(e,n){return Array.from({length:e},(()=>`${2e3*Math.random()}px ${2e3*Math.random()}px ${n}`)).join(" , ")}(n,o);return be`
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
      ${we}
      <div class="${r} z-0"></div>
    `}}),I({tag:"shadow-button",onclick:{get:(e,n)=>n,set:(e,n)=>n},text:"",render:({onclick:e,text:n})=>be`
    ${we}
    <div class="inline-flex rounded-md shadow">
      <a
        href="#"
        class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        onclick="${e}"
      >
        ${n}
      </a>
    </div>
  `}),I({tag:"star-background",render:()=>be`
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
    ${we}
    <div class="body-content lg-body-content">
      <parallax-star size="1" animation-duration="60"></parallax-star>
      <parallax-star size="3" animation-duration="120"></parallax-star>
      <parallax-star size="4" animation-duration="90"></parallax-star>
      <slot></slot>
      <div class="flex flex-row justify-center">
        <div class="text-white text-sm mb-4">© 2021 Alex Crowley</div>
      </div>
    </div>
  `}),I({tag:"chevron-down",render:()=>be`
    ${we}
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
  `});const _e={summary:["As the 60th employee at Emplify, I joined a more established startup.  \n            Emplify provides Employee Engagement services including assessments for employees and coaching for managers.","Working with a larger Product team has been so rewarding in helping shape my mentality about how to approach building products.  \n            With a process of first Establishing a Minimum Viable Product together and pairing it with a suitable Engineering solution, I have learned \n            to better poke holes in designs, anticipate the technical challenges, and cut scope.  Doing this due dilligence before development, I'm able \n            to both reduce wasted or out of scope work, visualize of the problem we're solving, have a clear direction of development, and produce a \n            better outcome for our clients."]},Pe={summary:["I was the 9th employee hired at a startup that provided digital signage,\n          communication, and entertainment solutions for the Senior Living\n          industry. The product consisted of a web based content management system\n          and a centralized REST API that provided data to a set top box, mobile app,\n          and Alexa devices.","LifeShare blessed me with the opportunity to wear multiple hats early on\n        in my career with challenges such as managing an internship program,\n        operating as the primary triage with our client success team, and\n        participating in recruiting efforts.","Juggling a handful of tech stacks exposed me to many different technologies and business\n        requirements.  For example, our set top box client needed to be easily readable by those with impared vision\n        and have minimal data consumption due to bandwidth and network reliability issues.  Our Alexa service needed to \n        be easy to provision: you wouldn't expect a Senior to be shipped an Echo, go to the Alexa app on the phone, and link their account.\n        They should be able to use it right away so we established a process that accomplished just that!","LifeShare successfully exited in July of 2019 with an acquisition and I soon sought out another small company due to my desire to work at startups."]},Be={name:"Fairness",description:"In a personal context it means treating\n        everyone equally and with respect. In a business sense, it is\n        delivering a fair value to customers and following ethical\n        practices."},De={name:"Transparency",description:"Being honest and up front with open\n      communication. This is not always easy to achieve however the\n      opposite tends to erode trust and understanding."},Ve={name:"Courage",description:"The willingness to push the limits. Embracing\n    failure as a lesson. Without taking a risk there is no chance of\n    success."},qe={name:"Excellence",description:"If I'm going to put my name on something, I\n    give it 110% and strive to deliver the highest quality outcome\n    given a set of constraints."},He={name:"Beginner's Mind",description:'One of the most important lessons I\n      learned from reading a book of Buddhist teachings.\n      <a href="https://en.wikipedia.org/wiki/Shoshin"\n        >From Wikipedia</a\n      >, "it refers to having an attitude of openness, eagerness, and\n      lack of preconceptions when studying a subject, even when\n      studying at an advanced level, just as a beginner would".'};function Xe(e){return`<p class='mb-4'>${e.join('</p><p class="mb-4">')}</p>`}function Ue(e){return be`<b>${e.name}</b> - ${be([e.description])}`}I({tag:"home-page",render:()=>be`
    ${we}
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
              <li>${Ue(Be)}</li>
              <li>${Ue(De)}</li>
              <li>${Ue(Ve)}</li>
              <li>${Ue(qe)}</li>
              <li>${Ue(He)}</li>
            </ul>
          </ui-card>
        </category-section>
        <category-section id="experience" category-name="Experience">
          <experience-card
            company-name="Emplify"
            position="Software Engineer"
            date-range="March 2020 - Present"
            summary="${Xe(_e.summary)}"
            ,
            technologies="${[ze,Te,Me]}"
          >
          </experience-card>
          <experience-card
            company-name="LifeShare Technologies"
            position="Software Engineer"
            date-range="March 2017 - March 2020"
            summary="${Xe(Pe.summary)}"
            technologies=${[ve,xe,$e,Ne,je,Ce]}
          ></experience-card>
        </category-section>
      </div>
    </star-background>
  `});const Je={summary:["I have always considered Backend development as my specialty in software development.    \n      The website could have easily been created using WordPress however I decided to challenge myself by creating the site with good ol' fashioned HTML, CSS, and JavaScript.","Wanting to leverage reusable components and a minimalistic library, I settled on a library called <a href='https://hybrids.js.org'><i><b>Hybrids JS</b></i></a>.  \n      Combining this with a CSS framework called <a href='https://tailwindcss.com'><i><b>Tailwind CSS</b></i></a>, I was able to create this website with a uniform look and feel","I chose a dark space theme both because it is easy on the eyes and to signify that I am always exploring new frontiers to better myself.  I hope you enjoy the site 😁"]},Ye={summary:['Shortly after beginning my professional career, I had a desire to start my own company.  \n      During a long weekend trip, one of my friends introduced me to Virtual Reality (VR) technology and I saw an unsaturated market opportunity.  \n      We became business partners and quickly went to work to develop our first title:\n      <a href="https://store.steampowered.com/app/711300/Bit_Storm_VR_First_Loop/"><i><b>Bit Storm VR: First Loop</b></i></a>',"As with any first professional venture, we learned some critical lessons by burning our hands on the stove.  \n      We rushed to deliver the title when we should've invested more time before the initial release, we greatly underestimated the \n      value of using original (non store-bought) assets, and failed to launch a sufficient marketing campaign.  With all that said, we \n      correctly identified a market opportunity, jumped on it, and gave it our all with the knowledge we had at that time.  Sadly, the revenue \n      from the initial launch did not warrant the continuation of development."]},Ze={summary:["We became aware of the opportunity to solve an interesting problem: giving prospective customers an immersive glimpse of a finished real-estate development \n      while it was still under construction.","Typically, an interactive tour involves a professional photography crew capturing the entire property and using software \n      to stitch everything together.  Instead, we had to rely on creating high fidelity 3d models of every item in the environment.  This taught us yet another difficult \n      lesson: when working with a client, communication of the expected outcome and work to be provided is critical.  If we had known up front they wanted to use specific \n      designs for everything, we probably would have had them contract with another party to supply us with the assets.","Creating the floor plans was as simple as placing the blueprint in our editor, dragging objects to scale, and extruding the walls up.  \n      Next came the difficult task of sourcing our assets and placing them to bring the environment to live.  We also needed a gameplan for how to navigate around the properties.  \n      Using traditional locomotion would potentially discomfort the users and we wanted to spotlight certian viewpoints.  \n      We decided on an orb-based navigaiton system.  The user would point to the orb they wanted to teleport to and click a button to navigate to the location."]};function Ge(e){return`<p class='mb-4'>${e.join('</p><p class="mb-4">')}</p>`}I({tag:"projects-page",render:()=>be`
    ${we}
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
            summary="${Ge(Je.summary)}"
            ,
            technologies="${[Ee,Ae]}"
          >
          </experience-card>
        </category-section>
        <category-section id="uvr" category-name="uVR">
          <experience-card
            company-name="VR Tour Demo (Contract)"
            position="Co-Developer"
            date-range="July 2018 - September 2018"
            summary="${Ge(Ze.summary)}"
            ,
            technologies="${[Oe,Se,ke]}"
          >
          </experience-card>
          <experience-card
            company-name="Bit Storm VR: First Loop"
            position="Co-Developer"
            date-range="August 2017 - October 2017"
            summary="${Ge(Ye.summary)}"
            ,
            technologies="${[Oe,Se,ke]}"
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
  `})})()})();