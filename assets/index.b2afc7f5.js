import{j as e,F as t,b as l,c as s,r as a,s as c,h as o,n,u as i}from"./index.00e4f5b9.js";const r=()=>{const a={img:s("/img/banner/banner02.png"),titH1:"品牌故事",p1:"深圳市善行医疗科技有限公司一直致力于可穿戴医疗器械的研发和推广，拥有由顶级国际医学专家、科学家、材料学家、服装专家等组成的研发团队。迄今研发了智能心电衣、脑电帽、肌电衣等多项世界领先产品，拥有六百余项专利等知识产权，并制定了智能心电衣等多项产品的行业（团体）标准，取得了多项NMPA、FDA、CE等认证。",p2:"善行智能心电衣等产品已广泛应用于医疗、陆海空警、公交、养老、保险、运动、科研、5G等领域，并已为国际、国内众多客户和合作伙伴提供了多种应用场景系统解决方案、OEM、ODM、联合科研等服务（包含移动APP、后台工作站、数据管理系统等）。",p3:"善行医疗在可穿戴医疗器械细分领域拥有了世界领先的竞争力，并在此基础上不断研发新的产品，用先进技术造福大众。"};return e(t,{children:l("div",{className:"\r w-full m-auto relative text-white select-none bg-black overflow-hidden\r lg:h-384\r xl:h-480\r 2xl:h-580\r ",children:[e("img",{className:"w-full h-full object-cover min-h-40  wow scaleBigs",src:a.img,alt:""}),e("div",{className:" \r m-auto absolute z-3 -translate-x-50% left-50% top-0\r lg:w-750\r xl:w-920 \r 2xl:w-1120",children:l("div",{className:" absolute left-0 bg-white/80\r lg:w-378 lg:top-16 lg:px-9 lg:py-5 lg:rounded-md\r xl:w-478 xl:top-20 xl:px-10 xl:py-5\r 2xl:w-550 2xl:top-24 2xl:px-14 2xl:py-6\r ",children:[e("h1",{className:"font-bold text-tx1 lg:text-2xl xl:text-2xl 2xl:text-3xl wow fadeInUp","data-wow-delay":"0.2s",children:a.titH1}),l("p",{className:" text-tx1 mb-0 lg:text-xs xl:text-sm 2xl:text-base wow fadeInUp","data-wow-delay":"0.4s",children:["    ",a.p1]}),l("p",{className:" text-tx1 mb-0 lg:text-xs xl:text-sm 2xl:text-base wow fadeInUp","data-wow-delay":"0.4s",children:["    ",a.p2]}),l("p",{className:" text-tx1 mb-0 lg:text-xs xl:text-sm 2xl:text-base wow fadeInUp","data-wow-delay":"0.4s",children:["    ",a.p3]})]})})]})})};const d=s("/img/home/mod02.png"),m=()=>{a.exports.useEffect((()=>{}),[]);const c={H1:"商城",shopList:[{name:"智能心电衣智能心电衣智能心电衣",price:"20000",img:d},{name:"智能心电衣智能心电衣智能心电衣",price:"20000",img:d},{name:"智能心电衣智能心电衣智能心电衣",price:"20000",img:d},{name:"智能心电衣智能心电衣智能心电衣",price:"20000",img:d}]};return e(t,{children:l("div",{className:"shop",children:[e("div",{className:"modetit wow fadeInDown",children:c.H1}),l("div",{className:" modecon",children:[c.shopList.map(((t,s)=>l("div",{"data-wow-delay":.1*s+"s",className:"item wow fn1",children:[e("div",{className:"imgc",children:e("img",{src:t.img,alt:""})}),l("div",{className:"textc",children:[e("p",{className:"p1 mb-0",children:t.name}),l("p",{className:"p2 mb-0",children:[e("span",{className:"l",children:"￥"}),e("span",{className:"r",children:t.price})]}),e("span",{className:"arrow",children:"——>"})]})]},s))),l("div",{className:"item flex items-center justify-start flex-col",children:[e("div",{className:"imgc p-6",children:e("img",{src:s("/img/home/qrcode.png"),alt:""})}),e("div",{className:"textc text-base",children:"请扫小程序码进入"})]})]})]})})};const f=c`${o}`,p=n.div`
    animation: 0.5s ${f};
    animation-fill-mode : forwards;
`,h=()=>{a.exports.useEffect((()=>{}),[]);let[s,c]=a.exports.useState([{name:"1、无法用APP扫描设备二维码?",bool:!1,child:[{link:"查看手机是否没有给APP授权使用相机功能，请重新授权"}]},{name:"1、无法用APP扫描设备二维码?",bool:!1,child:[{link:"查看手机是否没有给APP授权使用相机功能，请重新授权"}]}]);return e(t,{children:l("div",{className:"problems",children:[e("div",{className:"modetit",children:"常见问题"}),l("div",{className:" modecon",children:[e("div",{className:"htt",children:"常见问题Q&A"}),s.map(((t,a)=>l("div",{className:"item",children:[l("div",{className:"top",onClick:()=>{return e=a,void c((()=>(s.map(((t,l)=>{console.log(111,e),l==e&&(t.bool=!t.bool)})),[...s])));var e},children:[l("p",{className:" mb-0 listit",children:[t.name,t.bool]}),t.bool?e("span",{className:"rec",children:"-"}):e("span",{className:"add",children:"+"})]}),t.bool?t.child.map(((t,l)=>e(p,{className:"bt",children:e("p",{className:" mb-0",children:t.link})},l))):""]},a)))]})]})})},x=()=>{const s=i();a.exports.useEffect((()=>{let e;setTimeout((()=>{s.pathname.includes("ecg")&&null!=ecgRef.current.offsetParent&&(e=document.body.offsetWidth>=1024?ecgRef.current.offsetTop-80:(document.body.offsetWidth,ecgRef.current.offsetTop-48)),s.pathname.includes("heart")&&null!=heartRef.current.offsetParent&&(e=document.body.offsetWidth>=1024?heartRef.current.offsetTop-80:(document.body.offsetWidth,heartRef.current.offsetTop-48)),s.pathname.includes("BMHolter")&&null!=BMHolterRef.current.offsetParent&&(e=document.body.offsetWidth>=1024?BMHolterRef.current.offsetTop-80:(document.body.offsetWidth,BMHolterRef.current.offsetTop-48)),c(e)}),100)}),[s]);const c=e=>{document.body.scrollTop=document.documentElement.scrollTop=e};return a.exports.useEffect((()=>{new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!1}).init()}),[]),l(t,{children:[e(r,{}),e(m,{}),e(h,{})]})};export{x as default};
