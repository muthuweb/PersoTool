import{_ as S,u as M,c as v,o as p,a as D,b as r,d as w,w as i,e as V,V as E,f as N,n as u,g as x,h as m,r as o,i as B,j as b,k as O,l as z,m as j,p as I,q as F,s as U}from"./index-DDaYqyO0.js";const q={class:"body-1 font-weight-bold"},A={key:1,class:"w-100 body-1 primary--text-opacity-64"},L={__name:"TopBar",props:{backButton:{type:Boolean,default:!1},closeButton:{type:Boolean,default:!1},shrink:{type:Boolean,default:!1},shrinkDeep:{type:Boolean,default:!1},bgColor:{type:String,default:"transparent"},noGutter:{type:Boolean,default:!1},wideGutter:{type:Boolean,default:!1}},emits:["back","close"],setup(e,{emit:g}){const t=e,c=g,n=M(),k=v(()=>["topbar d-flex",t.bgColor,{"no-gutter":t.noGutter},{"wide-gutter":!t.noGutter&&t.wideGutter},{"justify-space-between flex-wrap":!t.shrinkDeep},{"align-center":t.shrinkDeep},{"has-close":t.closeButton}]),h=v(()=>{const a=[t.shrinkDeep?"flex-1":"w-100"];return t.shrinkDeep&&(t.backButton&&a.push("ml-6"),t.closeButton&&a.push("mr-6")),a});return(a,l)=>(p(),D("div",{class:u(["topbar__wrapper",{topbar__shrink:e.shrink,"topbar__shrink-deep":e.shrinkDeep}])},[r("div",{class:u(k.value)},[r("div",null,[e.backButton?(p(),w(x,{key:0,variant:"outlined",icon:"",size:e.shrink||e.shrinkDeep?"small":"default",class:u({"mb-4":!e.shrinkDeep}),onClick:l[0]||(l[0]=y=>c("back"))},{default:i(()=>[V(E,{size:"small"},{default:i(()=>l[2]||(l[2]=[N(" arrow_back ")])),_:1})]),_:1},8,["size","class"])):m("",!0)]),e.closeButton?(p(),w(x,{key:0,icon:"mdi-close",variant:"text",size:e.shrink||e.shrinkDeep?"small":"default",class:u(e.shrinkDeep?"order-last":"mb-4"),onClick:l[1]||(l[1]=y=>c("close"))},null,8,["size","class"])):m("",!0),r("div",{class:u(h.value)},[r("span",q,[o(a.$slots,"caption",{},void 0,!0)]),r("span",{class:u(["topbar__headline",B(n).caption&&(e.shrink||e.shrinkDeep)?"ml-1":"",e.shrink||e.shrinkDeep?"body-1 text-lowercase font-weight-bold":"d-block text-h4 mb-4"])},[o(a.$slots,"headline",{},void 0,!0)],2)],2),B(n).description&&!e.shrinkDeep?(p(),D("div",A,[o(a.$slots,"description",{},void 0,!0)])):m("",!0)],2)],2))}},P=S(L,[["__scopeId","data-v-6cfc95f5"]]),H={key:0,class:"dialog__header"},J={class:"dialog__body"},K={class:"dialog__footer"},Q={__name:"Dialog",props:{modelValue:{type:Boolean,default:!1},backButton:{type:Boolean,default:!1},hideTopbar:{type:Boolean,default:!1},size:{type:String,default:"md"},shrinkDeepForce:{type:Boolean,default:!1},fullOnMobile:{type:Boolean,default:!1}},emits:["update:modelValue","back","close"],setup(e,{emit:g}){const t=e,c=g,n=b(t.modelValue),k=b(!1),h=b(!1),a=b(null),{smAndUp:l}=O(),y=v(()=>{const s=["dialog secondary",`dialog-${t.size}`];return(!t.fullOnMobile||l.value)&&(s.push("rounded-ts-xl rounded-be-0"),l.value?s.push("right-side-dialog rounded-bs-xl rounded-te-0"):t.fullOnMobile||s.push("rounded-te-xl rounded-bs-0")),s.join(" ")}),$=v(()=>h.value||t.shrinkDeepForce);z(()=>t.modelValue,s=>{n.value=s}),z(n,s=>{c("update:modelValue",s)});const T=()=>{n.value=!1,c("close")},C=s=>{const{scrollTop:d}=s.target;k.value=d>0,h.value=d>100};return j(()=>{I(()=>{a.value&&a.value.addEventListener("scroll",C,{passive:!0})})}),(s,d)=>(p(),w(F,{modelValue:n.value,"onUpdate:modelValue":d[1]||(d[1]=f=>n.value=f),transition:`dialog-${B(l)?"right":"bottom"}-transition`,"content-class":y.value,fullscreen:e.fullOnMobile&&!B(l),persistent:"","no-click-animation":""},{activator:i(({on:f,attrs:G})=>[o(s.$slots,"activator",{on:f,attrs:G},void 0,!0)]),default:i(()=>[V(U,{flat:"",height:"100%",class:"d-flex flex-column overflow-hidden"},{default:i(()=>[e.hideTopbar?m("",!0):(p(),D("div",H,[V(P,{ref:"topBar","back-button":e.backButton,"close-button":"","no-wave":"",shrink:k.value,"shrink-deep":$.value,onBack:d[0]||(d[0]=f=>c("back")),onClose:T},{caption:i(()=>[o(s.$slots,"caption",{},void 0,!0)]),headline:i(f=>[o(s.$slots,"headline",{shrinkDeep:f.shrinkDeep},void 0,!0)]),description:i(()=>[o(s.$slots,"description",{},void 0,!0)]),_:3},8,["back-button","shrink","shrink-deep"])])),r("div",J,[r("div",{ref_key:"scrollEl",ref:a,class:u(["dialog__content",{"gradient-bg-neutral":$.value}]),onScrollPassive:C},[o(s.$slots,"default",{},void 0,!0)],34)]),r("div",K,[o(s.$slots,"footer",{},void 0,!0)])]),_:3})]),_:3},8,["modelValue","transition","content-class","fullscreen"]))}},W=S(Q,[["__scopeId","data-v-090c813d"]]);export{W as default};
