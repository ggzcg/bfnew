import{j as e,F as t,c as i,r as a,b as s}from"./index.9b07e2ad.js";import{C as d}from"./Collapse.828f0b86.js";import{P as c}from"./Pagination.54fed3e1.js";import"./RightOutlined.72cbefc2.js";import"./index.d00bf592.js";const l=()=>{const a={img:i("/src/assets/images/qa/banner.png")};return e(t,{children:e("div",{className:"w-full relative text-white select-none",children:e("img",{className:"w-full object-cover min-h-40",src:a.img,alt:""})})})},r=[{id:1,title:"善行医疗，做可穿戴医疗器械领跑者，服务全球心血管疾病患者",desc:"",pic:"http://static.adesk.com/wallpaper?imgid=586b621f69401b34865f2616&reso=1200x800",datetime:"2022-12-12 12:15:36",views:2e3},{id:2,title:"世卫组织研究发现，长时间工作严重影响心脏健康",desc:"",pic:"http://static.adesk.com/wallpaper?imgid=58808719e7bce7755f3607d0&reso=1200x800",datetime:"2022-12-08 18:36:31",views:1200},{id:3,title:"关爱民警健康  致敬人民卫士——善行医疗智能 心电衣关爱高陵民警心脏健康筛查现场",desc:"",pic:"http://static.adesk.com/wallpaper?imgid=58636da069401b347e0bc8dd&reso=1200x800",datetime:"2022-12-04 07:12:46",views:500},{id:4,title:"关爱民警健康  致敬人民卫士——善行医疗智能 心电衣关爱高陵民警心脏健康筛查现场",desc:"",pic:"http://static.adesk.com/wallpaper?imgid=58636da069401b347e0bc8dd&reso=1200x800",datetime:"2022-12-02 10:05:30",views:756},{id:5,title:"关爱民警健康  致敬人民卫士——善行医疗智能 心电衣关爱高陵民警心脏健康筛查现场",desc:"",pic:"http://static.adesk.com/wallpaper?imgid=58636da069401b347e0bc8dd&reso=1200x800",datetime:"2022-12-02 10:05:30",views:756},{id:6,title:"关爱民警健康  致敬人民卫士——善行医疗智能 心电衣关爱高陵民警心脏健康筛查现场",desc:"",pic:"http://static.adesk.com/wallpaper?imgid=58636da069401b347e0bc8dd&reso=1200x800",datetime:"2022-12-02 10:05:30",views:756}],o=()=>{const[i,l]=a.exports.useState(1),[o,p]=a.exports.useState(6),[m,n]=a.exports.useState(20);return e(t,{children:e("div",{className:"py-5",children:s("div",{className:"container mx-auto py-5 px-3 md:px-5 lg:px-8 xl:px-0",children:[e("div",{className:"text-2xl font-bold mb-5",children:"常见问题Q&A"}),e("div",{className:"border-t-1 border-t-gray-100",children:e(d,{defaultActiveKey:[0],accordion:!0,ghost:!0,expandIconPosition:"right",children:r.map(((t,i)=>e(d.Panel,{className:"my-collapse-style",header:`${t.id}、${t.title}`,children:e("p",{children:t.title})},i)))})}),e("div",{className:"my-10 text-center",children:e(c,{defaultCurrent:i,pageSize:o,total:m,onChange:(e,t)=>{l(e),p(t)}})})]})})})},p=()=>s(t,{children:[e(l,{}),e(o,{})]});export{p as default};
