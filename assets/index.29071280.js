import{B as e}from"./banner.8165ba4b.js";import{i,r as t,j as s,F as o,b as a}from"./index.55e6d8da.js";import{P as d}from"./Pagination.8eae2785.js";import"./RightOutlined.e0ce6921.js";import"./index.e26a64de.js";const m=[{id:1,title:"善行医疗，做可穿戴医疗器械领跑者，服务全球心血管疾病患者",time:"00:12",pic:"http://static.adesk.com/wallpaper?imgid=586b621f69401b34865f2616&reso=1200x800",video:"https://oss.benefm.com/video/benefm1.mp4"},{id:2,title:"长时间工作严重影响心脏健康",time:"00:56",pic:"http://static.adesk.com/wallpaper?imgid=58808719e7bce7755f3607d0&reso=1200x800",video:"https://oss.benefm.com/video/fitness/Fubu/Fuhengji/Fuhengji_zizhong.mp4"},{id:3,title:"关爱民警健康  致敬人民卫士——善行医疗智能 心电衣关爱高陵民警心脏健康筛查现场",time:"05:12",pic:"http://static.adesk.com/wallpaper?imgid=58636da069401b347e0bc8dd&reso=1200x800",video:"https://oss.benefm.com/video/fitness/Yaobei/shujiji/shujiji_zizhong.mp4"},{id:4,title:"善行医疗，做可穿戴医疗器械领跑者，服务全球心血管疾病患者",time:"00:12",pic:"http://static.adesk.com/wallpaper?imgid=586b621f69401b34865f2616&reso=1200x800",video:"https://oss.benefm.com/video/benefm1.mp4"},{id:5,title:"长时间工作严重影响心脏健康",time:"00:56",pic:"http://static.adesk.com/wallpaper?imgid=58808719e7bce7755f3607d0&reso=1200x800",video:"https://oss.benefm.com/video/fitness/Fubu/Fuhengji/Fuhengji_zizhong.mp4"},{id:6,title:"关爱民警健康  致敬人民卫士——善行医疗智能 心电衣关爱高陵民警心脏健康筛查现场",time:"05:12",pic:"http://static.adesk.com/wallpaper?imgid=58636da069401b347e0bc8dd&reso=1200x800",video:"https://oss.benefm.com/video/fitness/Yaobei/shujiji/shujiji_zizhong.mp4"}],r=()=>{const e=i(),[r,c]=t.exports.useState(1),[l,p]=t.exports.useState(6),[n,h]=t.exports.useState(20);return s(o,{children:s("div",{className:"py-5",children:a("div",{className:"container mx-auto px-3 md:px-5 lg:px-8 xl:px-0",children:[s("div",{className:"grid gap-5 grid-cols-1 md:grid-cols-3",children:m.map(((i,t)=>a("div",{className:"group cursor-pointer",onClick:()=>{return t=i.id,void e("/videos/"+t);var t},children:[a("div",{className:"relative w-full h-198 md:h-250 overflow-hidden bg-cover",children:[s("img",{className:"w-full h-full object-cover group-hover:scale-125 transition duration-500",src:i.pic,alt:""}),s("div",{className:"absolute bottom-2 left-2 text-white",children:i.time})]}),s("div",{className:"text-base otw-2 font-medium group-hover:text-orange-500 h-12 mt-5",children:i.title})]},t)))}),s("div",{className:"my-10 text-center",children:s(d,{defaultCurrent:r,pageSize:l,total:n,onChange:(e,i)=>{console.log(e,i),c(e),p(i)}})})]})})})},c=()=>a(o,{children:[s(e,{}),s(r,{})]});export{c as default};
