import{r as e,_ as t,m as a,o as l,p as r,q as n,t as s,v as c,C as o,w as i,D as d,S as p,j as u,F as m,b as h,c as v,x as f}from"./index.c22bf283.js";import{S as b}from"./SvgIcon.b037ff8b.js";import{F as x,S as g}from"./index.739838fd.js";import{C as y}from"./Collapse.f4df8856.js";import"./RightOutlined.7ed2d743.js";var N=e.exports.createContext(null),C=N.Provider,w=e.exports.createContext(null),k=w.Provider,E=["prefixCls","className","style","checked","disabled","defaultChecked","type","onChange"],O=e.exports.forwardRef((function(o,i){var d,p=o.prefixCls,u=void 0===p?"rc-checkbox":p,m=o.className,h=o.style,v=o.checked,f=o.disabled,b=o.defaultChecked,x=void 0!==b&&b,g=o.type,y=void 0===g?"checkbox":g,N=o.onChange,C=t(o,E),w=e.exports.useRef(null),k=a(x,{value:v}),O=l(k,2),j=O[0],S=O[1];e.exports.useImperativeHandle(i,(function(){return{focus:function(){var e;null===(e=w.current)||void 0===e||e.focus()},blur:function(){var e;null===(e=w.current)||void 0===e||e.blur()},input:w.current}}));var P=r(u,m,(n(d={},"".concat(u,"-checked"),j),n(d,"".concat(u,"-disabled"),f),d));return e.exports.createElement("span",{className:P,style:h},e.exports.createElement("input",s({},C,{className:"".concat(u,"-input"),ref:w,onChange:function(e){f||("checked"in o||S(e.target.checked),null==N||N({target:c(c({},o),{},{type:y,checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},disabled:f,checked:!!j,type:y})),e.exports.createElement("span",{className:"".concat(u,"-inner")}))})),j=globalThis&&globalThis.__rest||function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(a[l[r]]=e[l[r]])}return a},S=function(t,a){var l,c=e.exports.useContext(N),p=e.exports.useContext(w),u=e.exports.useContext(o),m=u.getPrefixCls,h=u.direction,v=e.exports.useRef(),f=i(a,v),b=e.exports.useContext(x).isFormItemInput,g=t.prefixCls,y=t.className,C=t.children,k=t.style,E=t.disabled,S=j(t,["prefixCls","className","children","style","disabled"]),P=m("radio",g),_="button"===((null==c?void 0:c.optionType)||p)?"".concat(P,"-button"):P,T=s({},S),M=e.exports.useContext(d);T.disabled=E||M,c&&(T.name=c.name,T.onChange=function(e){var a,l;null===(a=t.onChange)||void 0===a||a.call(t,e),null===(l=null==c?void 0:c.onChange)||void 0===l||l.call(c,e)},T.checked=t.value===c.value,T.disabled=T.disabled||c.disabled);var R=r("".concat(_,"-wrapper"),(n(l={},"".concat(_,"-wrapper-checked"),T.checked),n(l,"".concat(_,"-wrapper-disabled"),T.disabled),n(l,"".concat(_,"-wrapper-rtl"),"rtl"===h),n(l,"".concat(_,"-wrapper-in-form-item"),b),l),y);return e.exports.createElement("label",{className:R,style:k,onMouseEnter:t.onMouseEnter,onMouseLeave:t.onMouseLeave},e.exports.createElement(O,s({},T,{type:"radio",prefixCls:_,ref:f})),void 0!==C?e.exports.createElement("span",null,C):null)},P=e.exports.forwardRef(S),_=e.exports.forwardRef((function(t,c){var i,d=e.exports.useContext(o),u=d.getPrefixCls,m=d.direction,h=e.exports.useContext(p),v=a(t.defaultValue,{value:t.value}),f=l(v,2),b=f[0],x=f[1],g=t.prefixCls,y=t.className,N=void 0===y?"":y,w=t.options,k=t.buttonStyle,E=void 0===k?"outline":k,O=t.disabled,j=t.children,S=t.size,_=t.style,T=t.id,M=t.onMouseEnter,R=t.onMouseLeave,I=t.onFocus,A=t.onBlur,q=u("radio",g),B="".concat(q,"-group"),F=j;w&&w.length>0&&(F=w.map((function(t){return"string"==typeof t||"number"==typeof t?e.exports.createElement(P,{key:t.toString(),prefixCls:q,disabled:O,value:t,checked:b===t},t):e.exports.createElement(P,{key:"radio-group-value-options-".concat(t.value),prefixCls:q,disabled:t.disabled||O,value:t.value,checked:b===t.value,style:t.style},t.label)})));var L=S||h,D=r(B,"".concat(B,"-").concat(E),(n(i={},"".concat(B,"-").concat(L),L),n(i,"".concat(B,"-rtl"),"rtl"===m),i),N);return e.exports.createElement("div",s({},function(e){return Object.keys(e).reduce((function(t,a){return!a.startsWith("data-")&&!a.startsWith("aria-")&&"role"!==a||a.startsWith("data-__")||(t[a]=e[a]),t}),{})}(t),{className:D,style:_,onMouseEnter:M,onMouseLeave:R,onFocus:I,onBlur:A,id:T,ref:c}),e.exports.createElement(C,{value:{onChange:function(e){var a=b,l=e.target.value;"value"in t||x(l);var r=t.onChange;r&&l!==a&&r(e)},value:b,disabled:t.disabled,name:t.name,optionType:t.optionType}},F))})),T=e.exports.memo(_),M=globalThis&&globalThis.__rest||function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(a[l[r]]=e[l[r]])}return a},R=function(t,a){var l=e.exports.useContext(o).getPrefixCls,r=t.prefixCls,n=M(t,["prefixCls"]),c=l("radio",r);return e.exports.createElement(k,{value:"button"},e.exports.createElement(P,s({prefixCls:c},n,{type:"radio",ref:a})))},I=e.exports.forwardRef(R),A=P;A.Button=I,A.Group=T,A.__ANT_RADIO=!0;var q=A;const B=e=>{const t=e.datas;return u(m,{children:h("div",{className:"w-full relative text-white select-none",children:[u("img",{className:"w-full object-cover min-h-40",src:t.img,alt:""}),u("div",{className:"container",children:u("div",{className:"absolute inline-block z-1 top-1/2 left-1/2 -mt-5 -ml-10 md:-mt-10 md:-ml-18",children:u("span",{className:"text-xl md:text-4xl font-bold mb-3",children:t.title})})})]})})},F={sideBarName:"筛选",clearText:"清除",title:"职位类别",contact:{label:"请投递至邮箱：",email:"hr@benefm.com",desc:"或扫码HR微信二维码",qrcode:v("/images/recruitment/qrcode.png")}},L=(e,t)=>{if("social"===e){t([{label:"全部",value:1},{label:"研发中心实习生",value:2},{label:"市场中心实习生",value:3},{label:"客服中心实习生",value:4}])}else{t([{label:"全部",value:1},{label:"研发",value:2},{label:"市场销售",value:3},{label:"职能",value:4},{label:"生产",value:5}])}},D=async(e,t)=>{t(1===e?[{id:1,title:"Java开发工程师",content:"<h1>【岗位职责】</h1><p>123</p> <br> <br> <h1>【任职资格】</h1><p>456</p> "},{id:2,title:"软件开发工程师",content:"<h1>【岗位职责】</h1><p>123</p> <br> <br> <h1>【任职资格】</h1><p>456</p> "},{id:3,title:"Android开发工程师",content:"<h1>【岗位职责】</h1><p>123</p> <br> <br> <h1>【任职资格】</h1><p>456</p> "}]:[])},H=async(e,t)=>{t(1===e?[{id:1,title:"算法工程师方向",content:"<h1>【岗位职责】</h1><p>123</p> <br> <br> <h1>【任职资格】</h1><p>456</p> "},{id:2,title:"JAVA开发实习生",content:"<h1>【岗位职责】</h1><p>123</p> <br> <br> <h1>【任职资格】</h1><p>456</p> "}]:[])},V=t=>{const[a,l]=e.exports.useState([]),[r,n]=e.exports.useState(),[s,c]=e.exports.useState(),[o,i]=e.exports.useState([]);e.exports.useEffect((()=>{t.params&&L(t.params,(e=>{l(e),n(e[0].value),c(e[0].label),d()}))}),[t]),e.exports.useEffect((()=>{r&&d()}),[r]);const d=()=>{switch(t.params){case"social":D(r,(e=>{i(e)}));break;case"campus":H(r,(e=>{i(e)}))}},p=e=>{const a="number"==typeof e?e:e.target.value;switch("number"==typeof e?L(t.params,(t=>{t.map((t=>{t.value===e&&c(t.label)}))})):c(e.target.label),n(a),t.params){case"social":D(a,(e=>{i(e)}));break;case"campus":H(a,(e=>{i(e)}))}};return u(m,{children:u("div",{className:"py-5 px-0 md:px-5 bg-gray-200",children:u("div",{className:"container mx-auto ",children:h("div",{className:"bg-white flex mx-3 md:mx-0",children:[h("div",{className:"w-1/4 p-2% border-r-1 select-none hidden md:block",children:[h("div",{className:"flex justify-between pb-3 border-b-1 text-sm",children:[u("h1",{children:F.sideBarName}),u("span",{className:"text-orange-500 cursor-pointer",onClick:()=>handleClear(),children:F.clearText})]}),u("div",{className:"text-lg lg:text-2xl font-bold my-5 lg:my-6",children:F.title}),u("div",{className:"flex flex-col space-y-3 text-sm",children:u(q.Group,{className:"flex flex-col space-y-2.5",value:r,onChange:p,children:a?a.map(((e,t)=>u(q,{label:e.label,value:e.value,children:e.label},t))):null})}),h("div",{className:"mt-10",children:[h("div",{children:[u("label",{children:F.contact.label}),u("span",{children:F.contact.email})]}),u("div",{children:F.contact.desc}),u("div",{className:"w-150 mt-3",children:u("img",{src:F.contact.qrcode,alt:""})})]})]}),h("div",{className:"px-5 lg:px-8 xl:px-14 w-full",children:[u("div",{className:"my-5 lg:my-8",children:h("div",{className:"p-2 pl-12 border-1 relative rounded-md w-full xl:w-1/4",children:[u(b,{name:"search",color:"gray",className:"w-6 h-6 absolute top-2 left-3"}),u("input",{type:"text",className:"w-auto xl:w-60",placeholder:"全部"})]})}),h("div",{className:"my-5 flex items-center md:hidden",children:[h("div",{className:"mr-3",children:[F.title,":"]}),u("div",{className:"flex-1",children:a.length>0?u(g,{className:"w-full",defaultValue:1,value:r,onChange:p,children:a.map(((e,t)=>u(Option,{value:e.value,children:e.label},t)))}):null})]}),u("div",{className:"text-lg lg:text-2xl text-orange-500",children:s}),u("div",{className:"pb-5 md:pb-10 select-none",children:o.length>0?u(y,{defaultActiveKey:o[0].id,ghost:!0,accordion:!0,children:o.map(((e,t)=>h(y.Panel,{header:e.title,className:"my-collapse-style",children:[u("div",{className:"my-job-details",dangerouslySetInnerHTML:{__html:e.content}}),h("div",{className:"mt-10 md:hidden",children:[h("div",{children:[u("label",{children:F.contact.label}),u("span",{children:F.contact.email})]}),u("div",{children:F.contact.desc}),u("div",{className:"w-150 mt-3",children:u("img",{src:F.contact.qrcode,alt:""})})]})]},e.id)))}):null})]})]})})})})},W=[{img:"/src/assets/images/recruitment/banner_01.png",title:"社会招聘",path:"social"},{img:"/src/assets/images/recruitment/banner_02.png",title:"校园招聘",path:"campus"}],z=()=>{const[t,a]=e.exports.useState(),l=f();return e.exports.useEffect((()=>{l.type&&W.map((e=>{e.path===l.type&&a(e)}))}),[l]),u(m,{children:t?[u(B,{datas:t},1),u(V,{params:t.path},2)]:null})};export{z as default};
