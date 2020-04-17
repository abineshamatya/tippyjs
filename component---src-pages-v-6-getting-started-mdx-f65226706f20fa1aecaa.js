(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{BYEA:function(e,a,n){"use strict";n.r(a),n.d(a,"_frontmatter",(function(){return r})),n.d(a,"default",(function(){return l}));n("rzGZ"),n("q1tI");var t=n("7ljp"),s=n("7oih");n("qKvR");function p(){return(p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function c(e,a){if(null==e)return{};var n,t,s=function(e,a){if(null==e)return{};var n,t,s={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}const r={},m={_frontmatter:r},b=s.a;function l(e){let{components:a}=e,n=c(e,["components"]);return Object(t.b)(b,p({},m,n,{components:a,mdxType:"MDXLayout"}),Object(t.b)("p",null,"There are two ways to install the package."),Object(t.b)("h3",null,"1. Package Manager"),Object(t.b)("pre",{className:"grvsc-container moonlight-ii","data-language":"bash","data-index":"0"},Object(t.b)("code",p({parentName:"pre"},{className:"grvsc-code"}),Object(t.b)("span",p({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",p({parentName:"span"},{className:"mtk3"}),"# npm")),"\n",Object(t.b)("span",p({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",p({parentName:"span"},{className:"mtk1"}),"npm i tippy.js")),"\n",Object(t.b)("span",p({parentName:"code"},{className:"grvsc-line"})),"\n",Object(t.b)("span",p({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",p({parentName:"span"},{className:"mtk3"}),"# Yarn")),"\n",Object(t.b)("span",p({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",p({parentName:"span"},{className:"mtk1"}),"yarn add tippy.js")))),Object(t.b)("p",null,"In your application, import the ",Object(t.b)("inlineCode",{parentName:"p"},"tippy")," module, and the core CSS:"),Object(t.b)("pre",{className:"grvsc-container moonlight-ii","data-language":"js","data-index":"1"},Object(t.b)("code",p({parentName:"pre"},{className:"grvsc-code"}),Object(t.b)("span",p({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),"import"),Object(t.b)("span",p({parentName:"span"},{className:"mtk1"})," tippy "),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),"from"),Object(t.b)("span",p({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),"'"),Object(t.b)("span",p({parentName:"span"},{className:"mtk11"}),"tippy.js"),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),"';")),"\n",Object(t.b)("span",p({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),"import"),Object(t.b)("span",p({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),"'"),Object(t.b)("span",p({parentName:"span"},{className:"mtk11"}),"tippy.js/dist/tippy.css"),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),"';"),Object(t.b)("span",p({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",p({parentName:"span"},{className:"mtk3"}),"// optional for styling")))),Object(t.b)("p",null,"This assumes you're using a module bundler like webpack, Rollup, or Parcel. If\nyou're getting an error message about ",Object(t.b)("inlineCode",{parentName:"p"},"process")," inside the browser,\n",Object(t.b)("a",p({parentName:"p"},{href:"../faq/#im-getting-uncaught-referenceerror-process-is-not-defined"}),"see the FAQ for help.")),Object(t.b)("p",null,'The core CSS is not required, but provides a base styling for you to use. If\nyou\'d like to use Tippy "headless" without any of the default element rendering\nor CSS, use ',Object(t.b)("a",p({parentName:"p"},{href:"../headless-tippy/"}),"Headless Tippy"),"."),Object(t.b)("h3",null,"2. CDN"),Object(t.b)("pre",{className:"grvsc-container moonlight-ii","data-language":"html","data-index":"2"},Object(t.b)("code",p({parentName:"pre"},{className:"grvsc-code"}),Object(t.b)("span",p({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",p({parentName:"span"},{className:"mtk3"}),"\x3c!-- Development --\x3e")),"\n",Object(t.b)("span",p({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),"<"),Object(t.b)("span",p({parentName:"span"},{className:"mtk14"}),"script "),Object(t.b)("span",p({parentName:"span"},{className:"mtk8"}),"src"),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),'="'),Object(t.b)("span",p({parentName:"span"},{className:"mtk11"}),"https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js"),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),'"></'),Object(t.b)("span",p({parentName:"span"},{className:"mtk14"}),"script"),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),">")),"\n",Object(t.b)("span",p({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),"<"),Object(t.b)("span",p({parentName:"span"},{className:"mtk14"}),"script "),Object(t.b)("span",p({parentName:"span"},{className:"mtk8"}),"src"),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),'="'),Object(t.b)("span",p({parentName:"span"},{className:"mtk11"}),"https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js"),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),'"></'),Object(t.b)("span",p({parentName:"span"},{className:"mtk14"}),"script"),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),">")),"\n",Object(t.b)("span",p({parentName:"code"},{className:"grvsc-line"})),"\n",Object(t.b)("span",p({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",p({parentName:"span"},{className:"mtk3"}),"\x3c!-- Production --\x3e")),"\n",Object(t.b)("span",p({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),"<"),Object(t.b)("span",p({parentName:"span"},{className:"mtk14"}),"script "),Object(t.b)("span",p({parentName:"span"},{className:"mtk8"}),"src"),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),'="'),Object(t.b)("span",p({parentName:"span"},{className:"mtk11"}),"https://unpkg.com/@popperjs/core@2"),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),'"></'),Object(t.b)("span",p({parentName:"span"},{className:"mtk14"}),"script"),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),">")),"\n",Object(t.b)("span",p({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),"<"),Object(t.b)("span",p({parentName:"span"},{className:"mtk14"}),"script "),Object(t.b)("span",p({parentName:"span"},{className:"mtk8"}),"src"),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),'="'),Object(t.b)("span",p({parentName:"span"},{className:"mtk11"}),"https://unpkg.com/tippy.js@6"),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),'"></'),Object(t.b)("span",p({parentName:"span"},{className:"mtk14"}),"script"),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),">")))),Object(t.b)("p",null,"Place them at the very bottom of the ",Object(t.b)("inlineCode",{parentName:"p"},"<body>"),", ensuring they are placed before\nyour own scripts. The version numbers after ",Object(t.b)("inlineCode",{parentName:"p"},"@")," are important, make sure they\ndon't get removed."),Object(t.b)("blockquote",null,Object(t.b)("p",{parentName:"blockquote"},Object(t.b)("strong",{parentName:"p"},"Note")),Object(t.b)("p",{parentName:"blockquote"},"The CSS automatically gets injected into ",Object(t.b)("inlineCode",{parentName:"p"},"<head>")," with the CDN\n(",Object(t.b)("inlineCode",{parentName:"p"},"tippy-bundle"),"). With CSP enabled, you may need to separately link\n",Object(t.b)("inlineCode",{parentName:"p"},"dist/tippy.css")," and use ",Object(t.b)("inlineCode",{parentName:"p"},"dist/tippy.umd.min.js")," instead.")),Object(t.b)("h3",null,"React"),Object(t.b)("p",null,"Using React? Use the\n",Object(t.b)("a",p({parentName:"p"},{href:"https://github.com/atomiks/tippyjs-react"}),"official component package")," which\nintegrates well with React, allowing you to use Tippy declaratively."),Object(t.b)("h3",null,"Optional extra imports"),Object(t.b)("p",null,"For brevity, this documentation shows imports via a module bundler in Node. If\nyou're using the CDN, you'll be using ",Object(t.b)("inlineCode",{parentName:"p"},"<link>")," tags instead."),Object(t.b)("p",null,"This ",Object(t.b)("strong",{parentName:"p"},"optional")," extra import in the documentation:"),Object(t.b)("pre",{className:"grvsc-container moonlight-ii","data-language":"js","data-index":"3"},Object(t.b)("code",p({parentName:"pre"},{className:"grvsc-code"}),Object(t.b)("span",p({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),"import"),Object(t.b)("span",p({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),"'"),Object(t.b)("span",p({parentName:"span"},{className:"mtk11"}),"tippy.js/animations/scale.css"),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),"';")))),Object(t.b)("p",null,"Is equivalent to this using a CDN in the browser:"),Object(t.b)("pre",{className:"grvsc-container moonlight-ii","data-language":"html","data-index":"4"},Object(t.b)("code",p({parentName:"pre"},{className:"grvsc-code"}),Object(t.b)("span",p({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),"<"),Object(t.b)("span",p({parentName:"span"},{className:"mtk14"}),"link")),"\n",Object(t.b)("span",p({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",p({parentName:"span"},{className:"mtk14"}),"  "),Object(t.b)("span",p({parentName:"span"},{className:"mtk8"}),"rel"),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),'="'),Object(t.b)("span",p({parentName:"span"},{className:"mtk11"}),"stylesheet"),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),'"')),"\n",Object(t.b)("span",p({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",p({parentName:"span"},{className:"mtk14"}),"  "),Object(t.b)("span",p({parentName:"span"},{className:"mtk8"}),"href"),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),'="'),Object(t.b)("span",p({parentName:"span"},{className:"mtk11"}),"https://unpkg.com/tippy.js@6/animations/scale.css"),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),'"')),"\n",Object(t.b)("span",p({parentName:"code"},{className:"grvsc-line"}),Object(t.b)("span",p({parentName:"span"},{className:"mtk5"}),"/>")))),Object(t.b)("style",{className:"grvsc-styles"},"\n  .grvsc-container {\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 1rem;\n    padding-top: var(--grvsc-padding-top, var(--grvsc-padding-v, 1rem));\n    padding-bottom: 1rem;\n    padding-bottom: var(--grvsc-padding-bottom, var(--grvsc-padding-v, 1rem));\n    border-radius: 8px;\n    border-radius: var(--grvsc-border-radius, 8px);\n    font-feature-settings: normal;\n  }\n  \n  .grvsc-code {\n    display: inline-block;\n    min-width: 100%;\n  }\n  \n  .grvsc-line {\n    display: inline-block;\n    box-sizing: border-box;\n    width: 100%;\n    padding-left: 1.5rem;\n    padding-left: var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem));\n    padding-right: 1.5rem;\n    padding-right: var(--grvsc-padding-right, var(--grvsc-padding-h, 1.5rem));\n  }\n  \n  .grvsc-line-highlighted {\n    background-color: var(--grvsc-line-highlighted-background-color, transparent);\n    box-shadow: inset var(--grvsc-line-highlighted-border-width, 4px) 0 0 0 var(--grvsc-line-highlighted-border-color, transparent);\n  }\n  \n  .moonlight-ii {\n    background-color: #222436;\n    color: #c8d3f5;\n  }\n  .moonlight-ii .mtk3 { color: #7A88CF; }\n  .moonlight-ii .mtk1 { color: #C8D3F5; }\n  .moonlight-ii .mtk5 { color: #86E1FC; }\n  .moonlight-ii .mtk11 { color: #C3E88D; }\n  .moonlight-ii .mtk14 { color: #FF757F; }\n  .moonlight-ii .mtk8 { color: #C099FF; }\n"))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-v-6-getting-started-mdx-f65226706f20fa1aecaa.js.map