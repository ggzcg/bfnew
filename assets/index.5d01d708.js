import{j as e,F as a,b as l,c as t,r as s,u as n}from"./index.c22bf283.js";const i=()=>{const s={img:t("/img/conectUs/banner.png"),titH1:"品牌故事",p1:"深圳市善行医疗科技有限公司一直致力于可穿戴医疗器械的研发和推广，拥有由顶级国际医学专家、科学家、材料学家、服装专家等组成的研发团队。迄今研发了智能心电衣、脑电帽、肌电衣等多项世界领先产品，拥有六百余项专利等知识产权，并制定了智能心电衣等多项产品的行业（团体）标准，取得了多项NMPA、FDA、CE等认证。",p2:"善行智能心电衣等产品已广泛应用于医疗、陆海空警、公交、养老、保险、运动、科研、5G等领域，并已为国际、国内众多客户和合作伙伴提供了多种应用场景系统解决方案、OEM、ODM、联合科研等服务（包含移动APP、后台工作站、数据管理系统等）。",p3:"善行医疗在可穿戴医疗器械细分领域拥有了世界领先的竞争力，并在此基础上不断研发新的产品，用先进技术造福大众。"};return e(a,{children:l("div",{className:"w-full m-auto relative text-white select-none bg-black\r lg:h-384\r xl:h-480\r 2xl:h-580\r ",children:[e("img",{className:"w-full h-full object-cover min-h-40",src:s.img,alt:""}),e("div",{className:" \r m-auto absolute z-3 -translate-x-50% left-50% top-0\r lg:w-750\r xl:w-920 \r 2xl:w-1120",children:l("div",{className:" absolute left-0 bg-white/80\r lg:w-378 lg:top-16 lg:px-9 lg:py-5 lg:rounded-md\r xl:w-478 xl:top-20 xl:px-10 xl:py-5\r 2xl:w-550 2xl:top-24 2xl:px-14 2xl:py-6\r ",children:[e("h1",{className:"font-bold text-tx1 lg:text-2xl xl:text-2xl 2xl:text-3xl",children:s.titH1}),l("p",{className:" text-tx1 mb-0 lg:text-xs xl:text-sm 2xl:text-base",children:["    ",s.p1]}),l("p",{className:" text-tx1 mb-0 lg:text-xs xl:text-sm 2xl:text-base",children:["    ",s.p2]}),l("p",{className:" text-tx1 mb-0 lg:text-xs xl:text-sm 2xl:text-base",children:["    ",s.p3]})]})})]})})};const c=t("/img/conectUs/show005.png"),d=()=>{const[t,n]=s.exports.useState(0);let i=[{id:0,city:"深圳总部",addr:"广东省深圳市南山区高新南九道北科大厦11层",phone:"400-6969-772",connecter:"李女士"},{id:1,city:"黑龙江",addr:"广东省深圳市南山区高新南九道北科大厦11层",phone:"400-6969-772",connecter:"李女士"},{id:2,city:"北京",addr:"广东省深圳市南山区高新南九道北科大厦11层",phone:"400-6969-772",connecter:"李女士"},{id:3,city:"陕西",addr:"广东省深圳市南山区高新南九道北科大厦11层",phone:"400-6969-772",connecter:"李女士"},{id:4,city:"上海",addr:"广东省深圳市南山区高新南九道北科大厦11层",phone:"400-6969-772",connecter:"李女士"}];return e(a,{children:l("div",{className:"ConectUs",children:[e("div",{className:"\r modetit m-auto\r lg:w-750 \r xl:w-920 \r 2xl:w-1120  ",children:"联系我们"}),l("div",{className:"modecon\n             overflow-hidden\n             lg:w-750 \n             xl:w-920 \n             2xl:w-1120   \n            ",children:[l("div",{className:"map",children:[i.map((s=>l("div",{className:`dot position0${s.id+1} ${t==s.id?"selected":""}`,onClick:()=>n(s.id),children:[e("div",{className:"icon",children:t==s.id?l(a,{children:[e("span",{className:"breathStatus scaleInfinites"}),e("span",{className:"breathStatus scaleInfinites",style:{animationDelay:"2s"}}),e("span",{className:"breathStatus scaleInfinites",style:{animationDelay:"4s"}})]}):""}),e("div",{className:"name",children:s.city})]}))),e("img",{src:c,alt:""})]}),e("div",{className:"mapDetail",children:i.map((a=>l("div",{className:""+(t==a.id?"block":"hidden"),children:[e("div",{className:"top fadeInUp animated",style:{animationDelay:"0.2s"},children:a.city}),l("div",{className:"bottom",children:[l("p",{className:"h1",children:[e("span",{className:"point"}),e("span",{className:"tit fadeInUp animated",style:{animationDelay:"0.4s"},children:a.city})]}),l("p",{className:"h2 fadeInUp animated",style:{animationDelay:"0.6s"},children:["地址：",a.addr]}),l("p",{className:"h2 fadeInUp animated",style:{animationDelay:"0.8s"},children:["联系人：",a.connecter]}),l("p",{className:"h2 fadeInUp animated",style:{animationDelay:"1s"},children:["电话：",a.phone]})]})]})))})]})]})})},r=()=>(n(),l(a,{children:[e(i,{}),e(d,{})]}));export{r as default};
