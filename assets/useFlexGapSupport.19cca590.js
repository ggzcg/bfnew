import{Q as e,N as t,O as n,P as r,r as a,aj as o,ak as i,al as c,w as s,a9 as l,U as d,Z as u,C as f,p,q as m,t as v,aa as h,a3 as x,a7 as g,a0 as y,S as b,D as E,o as C,X as N,am as k,z as T,L as w}from"./index.d7583afe.js";import{u as S}from"./RightOutlined.d0dd6831.js";var O,P=0,A={};function j(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=P++,a=n;function o(){(a-=1)<=0?(t(),delete A[r]):A[r]=e(o)}return A[r]=e(o),r}function I(e){return!e||null===e.offsetParent||e.hidden}function L(e){return e instanceof Document?e.body:Array.from(e.childNodes).find((function(e){return(null==e?void 0:e.nodeType)===Node.ELEMENT_NODE}))}function R(e){var t=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return!(t&&t[1]&&t[2]&&t[3])||!(t[1]===t[2]&&t[2]===t[3])}j.cancel=function(t){void 0!==t&&(e.cancel(A[t]),delete A[t])},j.ids=A;var _=function(e){t(p,e);var f=n(p);function p(){var e;return r(this,p),(e=f.apply(this,arguments)).containerRef=a.exports.createRef(),e.animationStart=!1,e.destroyed=!1,e.onClick=function(t,n){var r,a,c=e.props,s=c.insertExtraNode;if(!c.disabled&&t&&!I(t)&&!t.className.includes("-leave")){e.extraNode=document.createElement("div");var l=o(e).extraNode,d=e.context.getPrefixCls;l.className="".concat(d(""),"-click-animating-node");var u=e.getAttributeName();if(t.setAttribute(u,"true"),n&&"#fff"!==n&&"#ffffff"!==n&&"rgb(255, 255, 255)"!==n&&"rgba(255, 255, 255, 1)"!==n&&R(n)&&!/rgba\((?:\d*, ){3}0\)/.test(n)&&"transparent"!==n){l.style.borderColor=n;var f=(null===(r=t.getRootNode)||void 0===r?void 0:r.call(t))||t.ownerDocument,p=null!==(a=L(f))&&void 0!==a?a:f;O=i("\n      [".concat(d(""),"-click-animating-without-extra-node='true']::after, .").concat(d(""),"-click-animating-node {\n        --antd-wave-shadow-color: ").concat(n,";\n      }"),"antd-wave",{csp:e.csp,attachTo:p})}s&&t.appendChild(l),["transition","animation"].forEach((function(n){t.addEventListener("".concat(n,"start"),e.onTransitionStart),t.addEventListener("".concat(n,"end"),e.onTransitionEnd)}))}},e.onTransitionStart=function(t){if(!e.destroyed){var n=e.containerRef.current;t&&t.target===n&&!e.animationStart&&e.resetEffect(n)}},e.onTransitionEnd=function(t){t&&"fadeEffect"===t.animationName&&e.resetEffect(t.target)},e.bindAnimationEvent=function(t){if(t&&t.getAttribute&&!t.getAttribute("disabled")&&!t.className.includes("disabled")){var n=function(n){if("INPUT"!==n.target.tagName&&!I(n.target)){e.resetEffect(t);var r=getComputedStyle(t).getPropertyValue("border-top-color")||getComputedStyle(t).getPropertyValue("border-color")||getComputedStyle(t).getPropertyValue("background-color");e.clickWaveTimeoutId=window.setTimeout((function(){return e.onClick(t,r)}),0),j.cancel(e.animationStartId),e.animationStart=!0,e.animationStartId=j((function(){e.animationStart=!1}),10)}};return t.addEventListener("click",n,!0),{cancel:function(){t.removeEventListener("click",n,!0)}}}},e.renderWave=function(t){var n=t.csp,r=e.props.children;if(e.csp=n,!a.exports.isValidElement(r))return r;var o=e.containerRef;return c(r)&&(o=s(r.ref,e.containerRef)),l(r,{ref:o})},e}return d(p,[{key:"componentDidMount",value:function(){this.destroyed=!1;var e=this.containerRef.current;e&&1===e.nodeType&&(this.instance=this.bindAnimationEvent(e))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroyed=!0}},{key:"getAttributeName",value:function(){var e=this.context.getPrefixCls,t=this.props.insertExtraNode;return"".concat(e(""),t?"-click-animating":"-click-animating-without-extra-node")}},{key:"resetEffect",value:function(e){var t=this;if(e&&e!==this.extraNode&&e instanceof Element){var n=this.props.insertExtraNode,r=this.getAttributeName();e.setAttribute(r,"false"),O&&(O.innerHTML=""),n&&this.extraNode&&e.contains(this.extraNode)&&e.removeChild(this.extraNode),["transition","animation"].forEach((function(n){e.removeEventListener("".concat(n,"start"),t.onTransitionStart),e.removeEventListener("".concat(n,"end"),t.onTransitionEnd)}))}}},{key:"render",value:function(){return a.exports.createElement(u,null,this.renderWave)}}]),p}(a.exports.Component);_.contextType=f;var D=_,W=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},z=a.exports.createContext(void 0),U=function(e){var t,n=a.exports.useContext(f),r=n.getPrefixCls,o=n.direction,i=e.prefixCls,c=e.size,s=e.className,l=W(e,["prefixCls","size","className"]),d=r("btn-group",i),u="";switch(c){case"large":u="lg";break;case"small":u="sm"}var h=p(d,(m(t={},"".concat(d,"-").concat(u),u),m(t,"".concat(d,"-rtl"),"rtl"===o),t),s);return a.exports.createElement(z.Provider,{value:c},a.exports.createElement("div",v({},l,{className:h})))},V=function(){return{width:0,opacity:0,transform:"scale(0)"}},B=function(e){return{width:e.scrollWidth,opacity:1,transform:"scale(1)"}},M=function(e){var t=e.prefixCls,n=!!e.loading;return e.existIcon?h.createElement("span",{className:"".concat(t,"-loading-icon")},h.createElement(x,null)):h.createElement(g,{visible:n,motionName:"".concat(t,"-loading-icon-motion"),removeOnLeave:!0,onAppearStart:V,onAppearActive:B,onEnterStart:V,onEnterActive:B,onLeaveStart:B,onLeaveActive:V},(function(e,n){var r=e.className,a=e.style;return h.createElement("span",{className:"".concat(t,"-loading-icon"),style:a,ref:n},h.createElement(x,{className:r}))}))},G=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},H=/^[\u4e00-\u9fa5]{2}$/,q=H.test.bind(H);function Q(e){return"text"===e||"link"===e}function X(e,t){var n=!1,r=[];return a.exports.Children.forEach(e,(function(e){var t=T(e),a="string"===t||"number"===t;if(n&&a){var o=r.length-1,i=r[o];r[o]="".concat(i).concat(e)}else r.push(e);n=a})),a.exports.Children.map(r,(function(e){return function(e,t){if(null!=e){var n=t?" ":"";return"string"!=typeof e&&"number"!=typeof e&&"string"==typeof e.type&&q(e.props.children)?l(e,{children:e.props.children.split("").join(n)}):"string"==typeof e?q(e)?a.exports.createElement("span",null,e.split("").join(n)):a.exports.createElement("span",null,e):k(e)?a.exports.createElement("span",null,e):e}}(e,t)}))}y("default","primary","ghost","dashed","link","text"),y("default","circle","round"),y("submit","button","reset");var Z=function(e,t){var n,r=e.loading,o=void 0!==r&&r,i=e.prefixCls,c=e.type,s=void 0===c?"default":c,l=e.danger,d=e.shape,u=void 0===d?"default":d,h=e.size,x=e.disabled,g=e.className,y=e.children,k=e.icon,T=e.ghost,w=void 0!==T&&T,O=e.block,P=void 0!==O&&O,A=e.htmlType,j=void 0===A?"button":A,I=G(e,["loading","prefixCls","type","danger","shape","size","disabled","className","children","icon","ghost","block","htmlType"]),L=a.exports.useContext(b),R=a.exports.useContext(E),_=null!=x?x:R,W=a.exports.useContext(z),U=a.exports.useState(!!o),V=C(U,2),B=V[0],H=V[1],Z=a.exports.useState(!1),$=C(Z,2),F=$[0],J=$[1],K=a.exports.useContext(f),Y=K.getPrefixCls,ee=K.autoInsertSpaceInButton,te=K.direction,ne=t||a.exports.createRef(),re=function(){return 1===a.exports.Children.count(y)&&!k&&!Q(s)},ae="boolean"==typeof o?o:(null==o?void 0:o.delay)||!0;a.exports.useEffect((function(){var e=null;return"number"==typeof ae?e=window.setTimeout((function(){e=null,H(ae)}),ae):H(ae),function(){e&&(window.clearTimeout(e),e=null)}}),[ae]),a.exports.useEffect((function(){if(ne&&ne.current&&!1!==ee){var e=ne.current.textContent;re()&&q(e)?F||J(!0):F&&J(!1)}}),[ne]);var oe=function(t){var n=e.onClick;B||_?t.preventDefault():null==n||n(t)},ie=Y("btn",i),ce=!1!==ee,se=S(ie,te),le=se.compactSize,de=se.compactItemClassnames,ue=le||W||h||L,fe=ue&&{large:"lg",small:"sm",middle:void 0}[ue]||"",pe=B?"loading":k,me=N(I,["navigate"]),ve=p(ie,(m(n={},"".concat(ie,"-").concat(u),"default"!==u&&u),m(n,"".concat(ie,"-").concat(s),s),m(n,"".concat(ie,"-").concat(fe),fe),m(n,"".concat(ie,"-icon-only"),!y&&0!==y&&!!pe),m(n,"".concat(ie,"-background-ghost"),w&&!Q(s)),m(n,"".concat(ie,"-loading"),B),m(n,"".concat(ie,"-two-chinese-chars"),F&&ce&&!B),m(n,"".concat(ie,"-block"),P),m(n,"".concat(ie,"-dangerous"),!!l),m(n,"".concat(ie,"-rtl"),"rtl"===te),m(n,"".concat(ie,"-disabled"),void 0!==me.href&&_),n),de,g),he=k&&!B?k:a.exports.createElement(M,{existIcon:!!k,prefixCls:ie,loading:!!B}),xe=y||0===y?X(y,re()&&ce):null;if(void 0!==me.href)return a.exports.createElement("a",v({},me,{className:ve,onClick:oe,ref:ne}),he,xe);var ge=a.exports.createElement("button",v({},I,{type:j,className:ve,onClick:oe,disabled:_,ref:ne}),he,xe);return Q(s)?ge:a.exports.createElement(D,{disabled:!!B},ge)},$=a.exports.forwardRef(Z);$.Group=U,$.__ANT_BUTTON=!0;var F,J=$,K=function(){if(!w()||!window.document.documentElement)return!1;if(void 0!==F)return F;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),F=1===e.scrollHeight,document.body.removeChild(e),F},Y=function(){var e=a.exports.useState(!1),t=C(e,2),n=t[0],r=t[1];return a.exports.useEffect((function(){r(K())}),[]),n};export{J as B,Y as u};
