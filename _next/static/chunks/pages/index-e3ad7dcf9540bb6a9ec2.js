(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4698:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return T}});var r=s(4679),a=s(9008),t=s(2958),i=s(4184),o=s.n(i),l=s(7294),c=s(7825),h=s(8281),d=s(5893),b=function(e){var n=e.children,s=e.className;return(0,d.jsx)(c.Z,{className:o()("csxnfvq",s),language:"typescript",style:h.Z,children:n})},m=(0,t.z)("div")({name:"CodeExampleWrapper",class:"c11j6auv"}),u=(0,t.z)("div")({name:"CodeButtonWrapper",class:"c8d2l7j"}),f=(0,t.z)("button")({name:"MultiCodeButton",class:"mk7fc6w",vars:{"mk7fc6w-0":[function(e){return e.active?"rgba(230,230,230, 1)":"rgba(230,230,230, 0.7)"}]}}),p=function(e){var n=e.children,s=Object.keys(n),r=(0,l.useState)(s[0]),a=r[0],t=r[1];return(0,d.jsxs)(m,{children:[(0,d.jsxs)(u,{children:[2===s.length&&s.map((function(e){return e!==a&&(0,d.jsx)(f,{onClick:function(){return t(e)},children:e},e)})),s.length>2&&s.map((function(e){return(0,d.jsx)(f,{active:a===e,onClick:function(){return t(e)},children:e},e)}))]}),s.map((function(e){return(0,d.jsx)(b,{className:o()("gxqllfb",a!==e&&"i1f7r3mv"),children:n[e]},e)}))]})};s(1371);var x=(0,t.z)("button")({name:"ThemeSwitchButton",class:"t1sf0z65"}),g=function(){return(0,d.jsx)(x,{onClick:function(){return document.body.classList.toggle("ijqncwj")}})};s(6953);var j=(0,r.z)("header")({name:"HeaderWrapper",class:"h1ywabb7"}),v=(0,r.z)("div")({name:"Header",class:"h5zb0wt"}),S=(0,r.z)("h1")({name:"TextLogo",class:"t187y57f"}),w=(0,r.z)("a")({name:"HeaderLink",class:"h1b9cx9b"}),y=(0,r.z)("main")({name:"Main",class:"mh5o2k"}),k=(0,r.z)("section")({name:"Section",class:"s1hg68lr",vars:{"s1hg68lr-0":[function(e){return e.reverse?"row-reverse":"row"}]}}),C=(0,r.z)("div")({name:"SectionContent",class:"se7gjt0"}),z=(0,r.z)("div")({name:"SectionExample",class:"s13st4mt"}),_=(0,r.z)("h2")({name:"Intro",class:"i16qg7zl"}),V=(0,r.z)("h2")({name:"Headline",class:"h18tujcu"}),q=(0,r.z)("p")({name:"Text",class:"t1nh5uu8"}),E=(0,r.z)("footer")({name:"Footer",class:"f1uswb16"}),G=(0,r.z)("div")({name:"FooterContent",class:"fgs1r5i"}),H=(0,r.z)("div")({name:"Badges",class:"b1ufieqg"}),T=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.default,{children:(0,d.jsx)("link",{rel:"shortcut icon",href:"/static/favicon.png"})}),(0,d.jsx)(j,{children:(0,d.jsxs)(v,{children:[(0,d.jsx)(S,{children:"CSS Variable"}),(0,d.jsx)(w,{href:"/documentation",children:"Documentation"}),(0,d.jsx)(w,{href:"https://github.com/jantimon/css-variable",children:"Github"}),(0,d.jsx)(g,{})]})}),(0,d.jsxs)(y,{children:[(0,d.jsx)(_,{children:"CSS Variables for your CSS-in-JS solution"}),(0,d.jsxs)(k,{children:[(0,d.jsxs)(C,{children:[(0,d.jsx)(q,{children:"Built with high focus on performance"}),(0,d.jsxs)(q,{children:["\u2728 ",(0,d.jsx)("b",{children:"better"})," minification of your css"]}),(0,d.jsxs)(q,{children:["\u2728 ",(0,d.jsx)("b",{children:"smaller"})," virtual DOM updates"]}),(0,d.jsxs)(q,{children:["\u2728 ",(0,d.jsx)("b",{children:"less"})," crititcal SSR CSS"]})]}),(0,d.jsxs)(z,{children:[(0,d.jsx)(p,{children:{base:"\nimport { CSSVariable } from 'css-variable';\n\nexport const tokens = {\n  primary: new CSSVariable(),\n  secondary: new CSSVariable(),\n}\n"}}),(0,d.jsx)(p,{children:{"styled-components":"\nimport { CSSVariable } from 'css-variable';\nimport { createGlobalStyle } from 'styled-components';\nimport { tokens } from './tokens' \n\nexport const GlobalStyles = createGlobalStyle`:root {\n  ${serializeThemeValues(tokens, {\n    primary: '#3a5779',\n    secondary: '#23374e',\n  })}\n}`;\n",emotion:"\nimport { CSSVariable } from 'css-variable';\nimport { Global, css } from '@emotion/react'\nimport { tokens } from './tokens' \n\nexport const GlobalStyles = () =>\n  <Global styles={css`:root {\n    ${serializeThemeValues(tokens, {\n      primary: '#3a5779',\n      secondary: '#23374e',\n    })}}`\n  } />\n",linaria:"\nimport { CSSVariable } from 'css-variable';\nimport { css } from 'linaria'\nimport { tokens } from './tokens' \n\nexport const globalStyles = css`:global() {\n  :root {\n    ${serializeThemeValues(tokens, {\n    primary: '#3a5779',\n    secondary: '#23374e',\n  })}\n}` \n"}}),(0,d.jsx)(p,{children:{base:"\nimport { tokens } from './tokens' \n\nexport const Headline = styled.h1`\n  color: ${tokens.primary};\n`;\n        "}})]})]}),(0,d.jsxs)(k,{reverse:!0,children:[(0,d.jsxs)(C,{children:[(0,d.jsx)(V,{children:"Create themable CSS Snippets"}),(0,d.jsx)(q,{children:"Define which parts of your reusable css are customizable without overwrites"})]}),(0,d.jsxs)(z,{children:[(0,d.jsx)(p,{children:{base:"\nexport const startColor = new CSSVariable({value: '#238f97'});\nexport const endColor = new CSSVariable({value: '#5442bb'});\n\nexport const gradientHover = css`\n  background: linear-gradient(to right, \n      ${gradientStartColor.val}, \n      ${gradientEndColor.val});\n      \n  background-size: 200% 200%;\n  animation: rainbow 2s ease-in-out infinite;\n  background-clip: text;\n\n  :focus, :hover {\n    color:rgba(0,0,0,0);\n  }\n  @keyframes rainbow { \n    0%{background-position:left}\n    50%{background-position:right}\n    100%{background-position:left}\n  }\n`;\n"}}),(0,d.jsx)(p,{children:{base:"\nimport { startColor, endColor, gradientHover } from './gradient';\n\nexport const Button = styled.button`\n  ${startColor.toStyle('#f5ab35');\n  ${endColor.toStyle('#8d1d1d')}\n  ${gradientHover}\n`;\n"}})]})]}),(0,d.jsxs)(k,{children:[(0,d.jsxs)(C,{children:[(0,d.jsx)(V,{children:"Unique and consistent variable names"}),(0,d.jsx)(q,{children:"The recommended babel plugin generates unique variable names during build time"}),(0,d.jsx)(V,{children:"Automatic DX"}),(0,d.jsx)(q,{children:"All babel generated variable names will have human readable names during development"})]}),(0,d.jsxs)(z,{children:[(0,d.jsx)(p,{children:{base:'\n{\n  "plugins": [\n      "css-variable/babel"\n  ]\n}\n'}}),(0,d.jsx)(p,{children:{original:"\nimport { CSSVariable } from 'css-variable';\n\nexport const theme = {\n  primary: new CSSVariable(),\n  secondary: new CSSVariable(),\n};\n","transpiled dev":'\nimport { CSSVariable } from \'css-variable\';\n\nexport const theme = {\n  primary: new /*@__PURE__*/CSSVariable("primary--1isauia0"),\n  secondary: new /*@__PURE__*/CSSVariable("secondary--1isauia1"),\n};\n',"transpiled prod":'\nimport { CSSVariable } from \'css-variable\';\n\nexport const theme = {\n  primary: new /*@__PURE__*/CSSVariable("1isauia0"),\n  secondary: new /*@__PURE__*/CSSVariable("1isauia1"),\n};\n'}})]})]})]}),(0,d.jsx)(E,{children:(0,d.jsxs)(G,{children:[(0,d.jsxs)(H,{children:[(0,d.jsx)("a",{href:"https://www.npmjs.com/package/css-variable",target:"_blank",children:(0,d.jsx)("img",{alt:"npm",src:"https://img.shields.io/npm/v/css-variable?style=for-the-badge"})}),(0,d.jsx)("a",{href:"https://bundlephobia.com/package/css-variable",target:"_blank",children:(0,d.jsx)("img",{alt:"BundleSize",src:"https://img.shields.io/bundlephobia/minzip/css-variable?style=for-the-badge"})}),(0,d.jsx)("a",{href:"https://github.com/jantimon/css-variable/",target:"_blank",children:(0,d.jsx)("img",{src:"https://img.shields.io/badge/github-OSS-brightgreen?style=for-the-badge&logo=GitHub",alt:"Github"})})]}),(0,d.jsxs)(H,{children:[(0,d.jsx)("a",{href:"https://github.com/jantimon/css-variable/actions/workflows/e2e-test.yml",target:"_blank",children:(0,d.jsx)("img",{alt:"GitHub Workflow Status",src:"https://img.shields.io/github/workflow/status/jantimon/css-variable/e2e%20test/main?style=for-the-badge"})}),(0,d.jsx)("a",{href:"https://github.com/jantimon/css-variable/blob/main/license",target:"_blank",children:(0,d.jsx)("img",{alt:"MIT License",src:"https://img.shields.io/npm/l/css-variable?style=for-the-badge"})})]})]})})]})};s(6706)},6057:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(4698)}])},1371:function(e){e.exports={csxnfvq:"csxnfvq",c11j6auv:"c11j6auv",gxqllfb:"gxqllfb",i1f7r3mv:"i1f7r3mv",c8d2l7j:"c8d2l7j",mk7fc6w:"mk7fc6w"}},6953:function(e){e.exports={ijqncwj:"ijqncwj",t1sf0z65:"t1sf0z65"}},6706:function(e){e.exports={h1ywabb7:"h1ywabb7",h5zb0wt:"h5zb0wt",t187y57f:"t187y57f",h1b9cx9b:"h1b9cx9b",mh5o2k:"mh5o2k",s1hg68lr:"s1hg68lr",se7gjt0:"se7gjt0",s13st4mt:"s13st4mt",i16qg7zl:"i16qg7zl",h18tujcu:"h18tujcu",t1nh5uu8:"t1nh5uu8",f1uswb16:"f1uswb16",fgs1r5i:"fgs1r5i",b1ufieqg:"b1ufieqg"}}},function(e){e.O(0,[774,120,888,179],(function(){return n=6057,e(e.s=n);var n}));var n=e.O();_N_E=n}]);