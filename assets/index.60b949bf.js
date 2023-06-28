import{j as e,F as l,b as a,c as i,r as s,u as t}from"./index.7f43badf.js";import{_ as m,S as n}from"./index.a8621d7f.js";const d=()=>{const s={img:i("/img/about/banner.png"),titH1:"关于善行医疗",p1:"深圳市善行医疗科技有限公司一直致力于可穿戴医疗器械的研发和推广，拥有由顶级国际医学专家、科学家、材料学家、服装专家等组成的研发团队。迄今研发了智能心电衣、脑电帽、肌电衣等多项世界领先产品，拥有六百余项专利等知识产权，并制定了智能心电衣等多项产品的行业（团体）标准，取得了多项NMPA、FDA、CE等认证。",p2:"善行智能心电衣等产品已广泛应用于医疗、陆海空警、公交、养老、保险、运动、科研、5G等领域，并已为国际、国内众多客户和合作伙伴提供了多种应用场景系统解决方案、OEM、ODM、联合科研等服务（包含移动APP、后台工作站、数据管理系统等）。",p3:"善行医疗在可穿戴医疗器械细分领域拥有了世界领先的竞争力，并在此基础上不断研发新的产品，用先进技术造福大众。"};return e(l,{children:a("div",{className:"w-full m-auto relative text-white select-none bg-black lg:h-384 xl:h-480 2xl:h-580 ",children:[e("img",{className:"w-full h-full object-cover min-h-40 wow scaleBigs",src:s.img,alt:""}),e("div",{className:"  m-auto absolute z-3 -translate-x-50% left-50% top-0 lg:w-750 xl:w-920  2xl:w-1120",children:a("div",{className:" absolute right-0 bg-white/80 lg:w-378 lg:top-16 lg:px-9 lg:py-5 lg:rounded-md xl:w-478 xl:top-20 xl:px-10 xl:py-5 2xl:w-550 2xl:top-24 2xl:px-14 2xl:py-6 wow fadeIn ",children:[e("h1",{className:"font-bold text-tx1 lg:text-2xl xl:text-2xl 2xl:text-3xl wow fadeInUp","data-wow-delay":"0.2s",children:s.titH1}),a("p",{className:" text-tx1 mb-0 lg:text-xs xl:text-sm 2xl:text-base wow fadeInUp","data-wow-delay":"0.4s",children:["    ",s.p1]}),a("p",{className:" text-tx1 mb-0 lg:text-xs xl:text-sm 2xl:text-base wow fadeInUp","data-wow-delay":"0.4s",children:["    ",s.p2]}),a("p",{className:" text-tx1 mb-0 lg:text-xs xl:text-sm 2xl:text-base wow fadeInUp","data-wow-delay":"0.4s",children:["    ",s.p3]})]})})]})})};const r=i("/img/about/tit01.png"),c=i("/img/about/tab01.png"),o=i("/img/home/bg02.png"),g=i("/img/home/bg03.png"),h=i("/img/home/bg04.png"),u={ti01:{backgroundImage:`url(${r})`}},x=()=>{const i=[{id:0,name:"善行·深圳",bg:c},{id:1,name:"善行·北京",bg:o},{id:2,name:"善行·上海",bg:g},{id:3,name:"善行·黑龙江",bg:h},{id:4,name:"善行·陕西",bg:c}];let[t,m]=s.exports.useState(0);return e(l,{children:a("div",{className:" \r overflow-hidden relative h-auto bg-bf-hd\r lg:h-512 \r xl:h-640 \r 2xl:h-800",children:[e("div",{className:" \r m-auto relative z-3\r lg:w-750 lg:h-12 mt-14\r xl:w-920 xl:h-14 xl:mt-15 \r 2xl:w-1096 2xl:h-18 2xl:mt-22",children:e("div",{className:" \r m-auto custombg w-full h-full",style:u.ti01})}),a("div",{className:"modcon",children:[e("div",{className:"modbanner wow fn1",children:i.map((l=>e("img",{src:c,className:(l.id==t?"block fadeInDown":"hidden")+" animated w-full h-full",alt:""})))}),e("div",{className:"modtab flex items-center justify-around",children:i.map(((l,a)=>e("div",{onClick:()=>(e=>{console.log(1111),m(e)})(l.id),className:"item "+(l.id==t?"slect":""),children:l.name},a)))})]})]})})};const f=i("/img/about/tit02.png"),p=i("/images/about/bg_01.jpg"),w=i("/img/about/patent.png"),b={ti01:{backgroundImage:`url(${f})`}},v=i=>{const t=i.banneref;console.log(t,555);let n=!1;function d(){document.documentElement.scrollTop>t.current.clientHeight&&!n&&(n=!0,c(!0))}s.exports.useEffect((()=>{setTimeout((()=>{let e=window.addEventListener("scroll",d,!0);return()=>{window.removeEventListener(e)}}),100)}),[]);const[r,c]=s.exports.useState(!1),o=[{label:"主力总数",value:685,unit:"项"},{label:"发明专利",value:544,unit:"项"},{label:"实用新型专利",value:111,unit:"项"},{label:"外观设计专利",value:28,unit:"项"},{label:"PCT",value:110,unit:"项"},{label:"软著",value:21,unit:"项"},{label:"商标",value:34,unit:"项"}];return e(l,{children:a("div",{className:" \r overflow-hidden relative h-auto bg-bf-hd\r lg:h-512 \r xl:h-640 \r 2xl:h-800",children:[e("div",{className:" \r m-auto relative z-3\r lg:w-750 lg:h-12 mt-14\r xl:w-920 xl:h-14 xl:mt-15 \r 2xl:w-1096 2xl:h-18 2xl:mt-22",children:e("div",{className:" \r m-auto custombg w-full h-full",style:b.ti01})}),a("div",{className:"patent flex items-center justify-start",children:[e("div",{className:"patentbanner",children:e("img",{src:p,className:" w-full h-full",alt:""})}),a("div",{className:"modrig flex-1 h-full bg-bc4",children:[e("h1",{className:" font-bold text-white\r lg:text-lg lg:mt-6 lg:ml-7\r xl:text-base \r 2xl:text-2xl ",children:"专利证书"}),a("div",{className:" float-left mt-5 lg:ml-10 flex items-center justify-start",children:[a("p",{className:" mb-0 font-bold  text-right",children:[a("span",{className:"tx-sm-w ",children:[o[0].label,"："]}),a("span",{className:"tx-xs-w  mt-2",children:[o[1].label,"："]}),a("span",{className:"tx-xs-w ",children:[o[2].label,"："]}),a("span",{className:"tx-xs-w ",children:[o[3].label,"："]})]}),e("p",{className:" mb-0 font-bold text-xs text-right",children:a(l,r?{children:[e(m,{start:0,end:o[0].value,duration:3,className:" tx-sm"}),e(m,{start:0,end:o[1].value,duration:3,className:" tx-xs mt-2"}),e(m,{start:0,end:o[2].value,duration:3,className:" tx-xs"}),e(m,{start:0,end:o[3].value,duration:3,className:" tx-xs"})]}:{children:[e("span",{className:"tx-sm ",children:o[0].value}),e("span",{className:" tx-xs mt-2",children:o[1].value}),e("span",{className:" tx-xs",children:o[2].value}),e("span",{className:" tx-xs",children:o[3].value})]})})]}),a("div",{className:" float-left mt-5 lg:ml-10 flex items-center justify-start",children:[a("p",{className:" mb-0 font-bold  text-right",children:[a("span",{className:"tx-sm-w",children:[o[4].label,"："]}),a("span",{className:" tx-sm-w",children:[o[5].label,"："]}),a("span",{className:" tx-sm-w",children:[o[6].label,"："]})]}),e("p",{className:" mb-0 font-bold text-xs text-right",children:a(l,r?{children:[e(m,{start:0,end:o[4].value,duration:3,className:" tx-sm-o"}),e(m,{start:0,end:o[5].value,duration:3,className:" tx-sm-o"}),e(m,{start:0,end:o[6].value,duration:3,className:" tx-sm-o"})]}:{children:[e("span",{className:" tx-sm-o ",children:o[4].value}),e("span",{className:" tx-sm-o ",children:o[5].value}),e("span",{className:" tx-sm-o ",children:o[6].value})]})})]}),e("div",{className:" float-left patebg",children:e("img",{src:w,alt:""})})]})]})]})})};const N=i("/img/about/awards.png"),y=i("/img/home/mod7ecg01.png"),I=i("/img/home/mod7ecg02.png"),T=i("/img/home/mod7ecg03.png"),E={ti01:{backgroundImage:`url(${i("/img/about/tit03.png")})`}},j=()=>{let i={width:"84px",height:"85px"};return document.body.offsetWidth>=1536&&(i={width:"84px",height:"100px"}),s.exports.useEffect((()=>{new n(".swiper3",{slidesPerView:6,speed:3e3,loop:!0,autoplay:{delay:0,disableOnInteraction:!1},scrollbar:{el:".swiper-scrollbar"},on:{progress:function(e){},slideChange:function(e){for(var l=0;l<this.slides.length;l++)this.slides.eq(l).removeClass("selectItem");this.slides.eq(0).removeClass("selectItem"),this.slides.eq(this.activeIndex+2).addClass("selectItem")}}})}),[]),e(l,{children:a("div",{className:" \r overflow-hidden relative h-auto bg-bf-hd\r lg:h-512 \r xl:h-640 \r 2xl:h-800",children:[e("div",{className:" \r m-auto relative z-3\r lg:w-750 lg:h-12 mt-14\r xl:w-920 xl:h-14 xl:mt-15 \r 2xl:w-1096 2xl:h-18 2xl:mt-22",children:e("div",{className:" \r m-auto custombg w-full h-full",style:E.ti01})}),e("div",{className:" swBanner m-auto lg:mt-8 xl:mt-10 2xl:mt-12",children:a("div",{className:"swiper-container swiper3 h-full",style:{overflow:"inherit"},children:[a("div",{className:"swiper-wrapper items-end",children:[e("div",{className:"swiper-slide",style:i,children:e("div",{className:"siperm",children:e("img",{src:N,className:" w-full h-full",alt:""})})}),e("div",{className:"swiper-slide",style:i,children:e("div",{className:"siperm",children:e("img",{src:y,className:" w-full h-full",alt:""})})}),e("div",{className:"swiper-slide",style:i,children:e("div",{className:"siperm",children:e("img",{src:N,className:" w-full h-full",alt:""})})}),e("div",{className:"swiper-slide",style:i,children:e("div",{className:"siperm",children:e("img",{src:I,className:" w-full h-full",alt:""})})}),e("div",{className:"swiper-slide",style:i,children:e("div",{className:"siperm",children:e("img",{src:N,className:" w-full h-full",alt:""})})}),e("div",{className:"swiper-slide",style:i,children:e("div",{className:"siperm",children:e("img",{src:T,className:" w-full h-full",alt:""})})}),e("div",{className:"swiper-slide",style:i,children:e("div",{className:"siperm",children:e("img",{src:N,className:" w-full h-full",alt:""})})}),e("div",{className:"swiper-slide",style:i,children:e("div",{className:"siperm",children:e("img",{src:N,className:" w-full h-full",alt:""})})})]}),e("div",{className:"swiper-scrollbar -bottom-10"})]})})]})})};const C=i("/img/home/modnew03.png"),P={tit:{backgroundImage:`url(${i("/img/about/tit05.png")})`}},W=[[{id:0,name:"",img:C},{id:1,name:"",img:C},{id:2,name:"",img:C},{id:3,name:"",img:C},{id:4,name:"",img:C},{id:5,name:"",img:C}],[{id:0,name:"",img:C},{id:1,name:"",img:C},{id:2,name:"",img:C},{id:3,name:"",img:C},{id:4,name:"",img:C},{id:5,name:"",img:C}],[{id:0,name:"",img:C},{id:1,name:"",img:C},{id:2,name:"",img:C},{id:3,name:"",img:C},{id:4,name:"",img:C},{id:5,name:"",img:C}],[{id:0,name:"",img:C},{id:1,name:"",img:C},{id:2,name:"",img:C},{id:3,name:"",img:C},{id:4,name:"",img:C},{id:5,name:"",img:C}],[{id:0,name:"",img:C},{id:1,name:"",img:C},{id:2,name:"",img:C},{id:3,name:"",img:C},{id:4,name:"",img:C},{id:5,name:"",img:C}],[{id:0,name:"",img:C},{id:1,name:"",img:C},{id:2,name:"",img:C},{id:3,name:"",img:C},{id:4,name:"",img:C},{id:5,name:"",img:C}],[{id:0,name:"",img:C},{id:1,name:"",img:C},{id:2,name:"",img:C},{id:3,name:"",img:C},{id:4,name:"",img:C},{id:5,name:"",img:C}],[{id:0,name:"",img:C},{id:1,name:"",img:C},{id:2,name:"",img:C},{id:3,name:"",img:C},{id:4,name:"",img:C},{id:5,name:"",img:C}],[{id:0,name:"",img:C},{id:1,name:"",img:C},{id:2,name:"",img:C},{id:3,name:"",img:C},{id:4,name:"",img:C},{id:5,name:"",img:C}],[{id:0,name:"",img:C},{id:1,name:"",img:C},{id:2,name:"",img:C},{id:3,name:"",img:C},{id:4,name:"",img:C},{id:5,name:"",img:C}]],k=()=>(s.exports.useEffect((()=>{new n(".swiper4",{slidesPerView:6,speed:3e3,loop:!0,autoplay:!0})}),[]),e(l,{children:a("div",{className:" \r overflow-hidden relative h-auto bg-bf-hd\r lg:h-512 \r xl:h-640 \r 2xl:h-800",children:[e("div",{className:" \r m-auto relative z-3\r lg:w-750 lg:h-12 mt-14\r xl:w-920 xl:h-14 xl:mt-15 \r 2xl:w-1096 2xl:h-18 2xl:mt-22",children:e("div",{className:" \r m-auto custombg w-full h-full",style:P.tit})}),e("div",{className:"partner lg:mt-8 xl:mt-10 2xl:mt-12 m-auto",children:a("div",{className:"swiper-container swiper4 h-full",children:[e("div",{className:"swiper-wrapper",children:W.map((l=>e("div",{className:"swiper-slide flex items-center flex-col",children:l.map((l=>e("div",{className:"partitem",children:e("img",{src:l.img,className:" w-full h-full",alt:""})})))})))}),e("div",{className:"swiper-scrollbar -bottom-10"})]})})]})})),z=()=>{const i=s.exports.useRef(),m=s.exports.useRef(),n=s.exports.useRef(),r=t();s.exports.useEffect((()=>{new WOW({boxClass:"wow",animateClass:"animated",offset:50,mobile:!0,live:!1}).init()}),[]),s.exports.useEffect((()=>{let e;setTimeout((()=>{r.pathname.includes("aboutus")&&null!=i.current.offsetParent&&(e=document.body.offsetWidth>=1024?i.current.offsetTop-80:(document.body.offsetWidth,i.current.offsetTop-48)),r.pathname.includes("honor")&&null!=m.current.offsetParent&&(e=document.body.offsetWidth>=1024?m.current.offsetTop-80:(document.body.offsetWidth,m.current.offsetTop-48)),r.pathname.includes("partners")&&null!=n.current.offsetParent&&(e=document.body.offsetWidth>=1024?n.current.offsetTop-80:(document.body.offsetWidth,n.current.offsetTop-48)),c(e)}),100)}),[r]);const c=e=>{document.body.scrollTop=document.documentElement.scrollTop=e},o=s.exports.useRef(null);return a(l,{children:[a("div",{ref:o,children:[e(d,{}),e(x,{})]}),e(v,{banneref:o}),e(j,{}),e(k,{})]})};export{z as default};
