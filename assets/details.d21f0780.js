import{B as e}from"./banner.ace1a4cd.js";import{x as i,i as s,r as t,j as l,F as a,b as c}from"./index.7f43badf.js";import{S as m}from"./SvgIcon.85c63c53.js";/* empty css                    */import{l as o}from"./index.1c3fa1d2.js";import{B as r,E as d}from"./EyeIcon.5ebbc60e.js";import"./RightOutlined.ee57a532.js";import"./useFlexGapSupport.a8776704.js";const n=[{id:1,title:"善行医疗，做可穿戴医疗器械领跑者，服务全球心血管疾病患者",time:"00:12",pic:"http://static.adesk.com/wallpaper?imgid=586b621f69401b34865f2616&reso=1200x800",video:"https://oss.benefm.com/video/benefm1.mp4",views:"2000",createTime:"2022-10-15 09:15:56"},{id:2,title:"长时间工作严重影响心脏健康",time:"00:56",pic:"http://static.adesk.com/wallpaper?imgid=58808719e7bce7755f3607d0&reso=1200x800",video:"https://oss.benefm.com/video/fitness/Fubu/Fuhengji/Fuhengji_zizhong.mp4",views:"198",createTime:"2022-12-10 16:45:30"},{id:3,title:"关爱民警健康  致敬人民卫士——善行医疗智能 心电衣关爱高陵民警心脏健康筛查现场",time:"05:12",pic:"http://static.adesk.com/wallpaper?imgid=58636da069401b347e0bc8dd&reso=1200x800",video:"https://oss.benefm.com/video/fitness/Yaobei/shujiji/shujiji_zizhong.mp4",views:"236",createTime:"2022-06-22 11:36:05"}],h=[{id:1,title:"善行医疗，做可穿戴医疗器械领跑者，服务全球心血管疾病患者",time:"00:12",pic:"http://static.adesk.com/wallpaper?imgid=586b621f69401b34865f2616&reso=1200x800",video:"https://oss.benefm.com/video/benefm1.mp4"},{id:2,title:"长时间工作严重影响心脏健康",time:"00:56",pic:"http://static.adesk.com/wallpaper?imgid=58808719e7bce7755f3607d0&reso=1200x800",video:"https://oss.benefm.com/video/fitness/Fubu/Fuhengji/Fuhengji_zizhong.mp4"},{id:3,title:"关爱民警健康  致敬人民卫士——善行医疗智能 心电衣关爱高陵民警心脏健康筛查现场",time:"05:12",pic:"http://static.adesk.com/wallpaper?imgid=58636da069401b347e0bc8dd&reso=1200x800",video:"https://oss.benefm.com/video/fitness/Yaobei/shujiji/shujiji_zizhong.mp4"}],p=()=>{const e=i(),p=s(),[x,f]=t.exports.useState([]);t.exports.useEffect((()=>{e&&n.map(((i,s)=>{if(e.id==i.id)return f(i)}))}),[e]);return l(a,{children:l("div",{className:"py-5",children:l("div",{className:"container mx-auto ",children:x?c("div",{className:"mb-5",children:[c(r,{separator:">",className:"mb-5 mx-3 xl:mx-0",children:[l(r.Item,{className:"cursor-pointer",onClick:()=>p("/"),children:"首页"}),l(r.Item,{className:"cursor-pointer",onClick:()=>p("/videos"),children:"视频中心"}),l(r.Item,{className:"w-198 md:w-auto inline-block truncate",children:x.title})]}),c("div",{className:"flex flex-col xl:flex-row mb-5",children:[c("div",{className:"flex-1",children:[l("div",{className:"w-full h-198 md:h-450 lg:h-550 xl:h-630 2xl:h-720",children:l(o.Player,{autoPlay:!0,poster:"https://video-react.js.org/assets/poster.png",fluid:!1,width:"100%",height:"100%",src:x.video})}),c("div",{className:"mx-3 xl:mx-0",children:[l("div",{className:"text-base md:text-2xl font-bold my-5",children:x.title}),c("div",{className:"flex items-center text-gray-400 text-sm",children:[c("span",{className:"mr-5 flex items-center",children:[l(d,{className:"w-4 h-4 mr-1"}),l("span",{children:x.views})]}),c("span",{className:"text-xs",children:["发布于 ",x.createTime]})]})]})]}),c("div",{className:"xl:ml-9 mt-3 xl:mt-0",children:[c("div",{className:"text-lg flex items-center text-orange-500 mb-4 sr-only xl:not-sr-only",children:[l(m,{name:"hot",className:"w-6 h-6 mr-2"}),"最新视频"]}),l("div",{className:"mt-5 xl:mt-3 flex flex-col md:flex-row xl:flex-col justify-between mx-3 xl:mx-0 md:space-x-3 xl:space-x-0 space-y-5 md:space-y-0 xl:space-y-5",children:h.map(((e,i)=>c("div",{className:"md:w-1/3 xl:w-60 2xl:w-280 group",onClick:()=>{return i=e.id,void p("/videos/"+i);var i},children:[c("div",{className:"relative w-full h-180 md:h-50 lg:h-180 xl:h-40 2xl:h-150 overflow-hidden bg-cover cursor-pointer",children:[l("img",{className:"w-full h-full object-cover group-hover:scale-125 transition duration-500",src:e.pic,alt:""}),l("div",{className:"absolute bottom-2 left-2 text-white",children:e.time})]}),l("div",{className:"flex mt-4",children:l("div",{className:"otw-2 group-hover:text-orange-500 h-12 text-base",children:e.title})})]},i)))})]})]})]}):null})})})},x=()=>c(a,{children:[l(e,{}),l(p,{})]});export{x as default};
