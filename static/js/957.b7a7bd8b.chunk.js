"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[957],{3957:(e,s,r)=>{r.r(s),r.d(s,{default:()=>o});var t=r(5043),a=r(6854),n=r(3003),l=r(579);const c=()=>{const e=(0,n.wA)(),s=(0,n.d4)((e=>e.chat.status));return(0,t.useEffect)((()=>(e((0,a._E)()),()=>{e((0,a.Ui)())})),[]),(0,l.jsxs)(l.Fragment,{children:["error"===s&&(0,l.jsx)("div",{children:"Some error occured.Please refresh the page"}),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h,{}),(0,l.jsx)(d,{})]})]})},h=e=>{let{}=e;const s=(0,t.useRef)(null),r=(0,n.d4)((e=>e.chat.messages)),[a,c]=(0,t.useState)(!0);return(0,t.useEffect)((()=>{var e;a&&(null===(e=s.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}))}),[r]),(0,l.jsxs)("div",{style:{height:"400px",overflowY:"auto"},onScroll:e=>{const s=e.currentTarget;Math.abs(s.scrollHeight-s.scrollTop-s.clientHeight)<300?!a&&c(!0):a&&c(!1)},children:[r.map(((e,s)=>(0,l.jsx)(i,{message:e},e.id))),(0,l.jsx)("div",{ref:s})]})},i=t.memo((e=>{let{message:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("img",{src:s.photo,style:{width:"30px"}}),(0,l.jsx)("b",{children:s.userName}),(0,l.jsx)("br",{}),s.message,(0,l.jsx)("hr",{})]})})),d=()=>{const[e,s]=(0,t.useState)(""),r=(0,n.wA)(),c=(0,n.d4)((e=>e.chat.status));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{children:(0,l.jsx)("textarea",{onChange:e=>s(e.currentTarget.value),value:e})}),(0,l.jsx)("div",{children:(0,l.jsx)("button",{disabled:"ready"!==c,onClick:()=>{e&&(r((0,a._z)(e)),s(""))},children:"Send"})})]})},o=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(c,{})})}}]);
//# sourceMappingURL=957.b7a7bd8b.chunk.js.map