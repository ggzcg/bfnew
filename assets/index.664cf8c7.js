import{r as e,j as i,F as s,c as t,b as a,i as l,u as d}from"./index.55e6d8da.js";/* empty css                    */import{l as o}from"./index.92b752dc.js";const c=()=>{const[a,l]=e.exports.useState(!1),d=(t("/img/product/banner.png"),"https://oss.benefm.com/video/fitness/Fubu/Fuhengji/Fuhengji_zizhong.mp4");return i(s,{children:i("div",{className:"w-full m-auto relative text-white select-none bg-black\r lg:h-384\r xl:h-480\r 2xl:h-580\r wow scaleBigs\r ",children:i(o.Player,{autoPlay:a,poster:t("/img/banner/banner04.png"),fluid:!1,width:"100%",height:"100%",src:d})})})};const n=()=>{let[t,l]=e.exports.useState(!1);e.exports.useEffect((()=>{setTimeout((()=>{l(!0)}),2e3)}),[]);return i(s,{children:a("div",{className:"cardtwo",children:[i("div",{className:"\r modetit m-auto\r lg:w-750 \r xl:w-920 \r 2xl:w-1120  wow fadeInDown",children:i("span",{className:"tit",children:"今日推荐"})}),i("div",{className:"modt_con\n             overflow-hidden\n             m-auto\n             lg:w-750 \n             xl:w-920 \n             2xl:w-1120   \n            ",children:[{id:1,title:"善行医疗，做可穿戴医疗器械领跑者，服务全球心血管疾病患者",time:"00:12",pic:"http://static.adesk.com/wallpaper?imgid=586b621f69401b34865f2616&reso=1200x800",video:"https://oss.benefm.com/video/benefm1.mp4"},{id:2,title:"长时间工作严重影响心脏健康",time:"00:56",pic:"http://static.adesk.com/wallpaper?imgid=58808719e7bce7755f3607d0&reso=1200x800",video:"https://oss.benefm.com/video/fitness/Fubu/Fuhengji/Fuhengji_zizhong.mp4"},{id:3,title:"关爱民警健康  致敬人民卫士——善行医疗智能 心电衣关爱高陵民警心脏健康筛查现场",time:"05:12",pic:"http://static.adesk.com/wallpaper?imgid=58636da069401b347e0bc8dd&reso=1200x800",video:"https://oss.benefm.com/video/fitness/Yaobei/shujiji/shujiji_zizhong.mp4"}].map((e=>a("div",{className:"conw wow fn1",onClick:()=>onClick(e.id),children:[i("div",{className:"media",children:i("img",{src:e.pic,alt:""})}),a("div",{className:"textcons",children:[a("p",{className:"mb-0 htop",children:[i("span",{className:"vtit",children:"视频标题"}),i("span",{className:"name",children:"主讲人：李主任"})]}),i("p",{className:"txt ellipsis02",children:e.title})]})]})))})]})})},m=()=>{const t=l();let[d,o]=e.exports.useState(!1);e.exports.useEffect((()=>{setTimeout((()=>{o(!0)}),2e3)}),[]);return i(s,{children:a("div",{className:"cardtwo overflow-hidden",children:[i("div",{className:"\r modetit m-auto\r lg:w-750 \r xl:w-920 \r 2xl:w-1120  wow fadeInDown",children:i("span",{className:"tit",children:"专家说"})}),i("div",{className:"modt_con\r overflow-hidden m-auto\r lg:w-750 \r xl:w-920 \r 2xl:w-1120 ",children:[{id:1,title:"善行医疗，做可穿戴医疗器械领跑者，服务全球心血管疾病患者",time:"00:12",pic:"http://static.adesk.com/wallpaper?imgid=586b621f69401b34865f2616&reso=1200x800",video:"https://oss.benefm.com/video/benefm1.mp4"},{id:2,title:"长时间工作严重影响心脏健康",time:"00:56",pic:"http://static.adesk.com/wallpaper?imgid=58808719e7bce7755f3607d0&reso=1200x800",video:"https://oss.benefm.com/video/fitness/Fubu/Fuhengji/Fuhengji_zizhong.mp4"},{id:3,title:"关爱民警健康  致敬人民卫士——善行医疗智能 心电衣关爱高陵民警心脏健康筛查现场",time:"05:12",pic:"http://static.adesk.com/wallpaper?imgid=58636da069401b347e0bc8dd&reso=1200x800",video:"https://oss.benefm.com/video/fitness/Yaobei/shujiji/shujiji_zizhong.mp4"}].map((e=>a("div",{className:"conw",onClick:()=>{return i=e.id,void t("/videos/"+i);var i},children:[i("div",{className:"media",children:i("img",{src:e.pic,alt:""})}),a("div",{className:"textcons",children:[a("p",{className:"mb-0 htop",children:[i("span",{className:"vtit",children:"视频标题"}),i("span",{className:"name",children:"主讲人：李主任"})]}),i("p",{className:"txt ellipsis02",children:e.title})]})]})))})]})})},r=()=>(d(),e.exports.useEffect((()=>{new WOW({boxClass:"wow",animateClass:"animated",offset:200,mobile:!0,live:!1}).init()}),[]),a(s,{children:[i(c,{}),i(n,{}),i(m,{})]}));export{r as default};
