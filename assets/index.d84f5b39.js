import{j as e,F as t,c as i,i as a,r as s,b as d}from"./index.87f308e7.js";import{P as c}from"./Pagination.5f674714.js";import"./RightOutlined.f765093d.js";import"./index.f5e8f4b7.js";const l=()=>{const a={img:i("/images/news/banner.png")};return e(t,{children:e("div",{className:"w-full relative text-white select-none",children:e("img",{className:"w-full object-cover min-h-40",src:a.img,alt:""})})})},r=[{id:1,title:"善行医疗，做可穿戴医疗器械领跑者，服务全球心血管疾病患者",desc:"",pic:"http://static.adesk.com/wallpaper?imgid=586b621f69401b34865f2616&reso=1200x800",datetime:"2022-12-12 12:15:36",views:2e3},{id:2,title:"世卫组织研究发现，长时间工作严重影响心脏健康",desc:"",pic:"http://static.adesk.com/wallpaper?imgid=58808719e7bce7755f3607d0&reso=1200x800",datetime:"2022-12-08 18:36:31",views:1200},{id:3,title:"关爱民警健康  致敬人民卫士——善行医疗智能 心电衣关爱高陵民警心脏健康筛查现场",desc:"",pic:"http://static.adesk.com/wallpaper?imgid=58636da069401b347e0bc8dd&reso=1200x800",datetime:"2022-12-04 07:12:46",views:500},{id:4,title:"关爱民警健康  致敬人民卫士——善行医疗智能 心电衣关爱高陵民警心脏健康筛查现场",desc:"",pic:"http://static.adesk.com/wallpaper?imgid=58636da069401b347e0bc8dd&reso=1200x800",datetime:"2022-12-02 10:05:30",views:756},{id:5,title:"关爱民警健康  致敬人民卫士——善行医疗智能 心电衣关爱高陵民警心脏健康筛查现场",desc:"",pic:"http://static.adesk.com/wallpaper?imgid=58636da069401b347e0bc8dd&reso=1200x800",datetime:"2022-12-02 10:05:30",views:756},{id:6,title:"关爱民警健康  致敬人民卫士——善行医疗智能 心电衣关爱高陵民警心脏健康筛查现场",desc:"",pic:"http://static.adesk.com/wallpaper?imgid=58636da069401b347e0bc8dd&reso=1200x800",datetime:"2022-12-02 10:05:30",views:756}],o=()=>{const i=a(),[l,o]=s.exports.useState(1),[m,p]=s.exports.useState(6),[n,h]=s.exports.useState(20);return e(t,{children:e("div",{className:"py-5",children:d("div",{className:"container mx-auto px-3 md:px-5 lg:px-8 xl:px-0",children:[e("div",{className:"grid gap-5 grid-cols-1 md:grid-cols-3",children:r.map(((t,a)=>d("div",{className:"group cursor-pointer",onClick:()=>{return e=t.id,void i("/news/"+e);var e},children:[e("div",{className:"w-full h-198 md:h-250 overflow-hidden",children:e("img",{className:"w-full h-full object-cover group-hover:scale-125 transition duration-500",src:t.pic,alt:""})}),e("div",{className:"text-base otw-2 font-medium group-hover:text-orange-500 h-12 mt-5",children:t.title})]},a)))}),e("div",{className:"my-10 text-center",children:e(c,{defaultCurrent:l,pageSize:m,total:n,onChange:(e,t)=>{console.log(e,t),o(e),p(t)}})})]})})})},m=()=>d(t,{children:[e(l,{}),e(o,{})]});export{m as default};
