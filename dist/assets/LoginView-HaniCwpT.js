import{z,A as F,I as N,B as R,C as E,D as O,E as M,F as Y,G as j,H as G,J as H,K as J,L as K,M as Q,N as U,c as r,O as W,P as X,Q as Z,R as q,S as ee,T as te,U as ae,W as le,X as ne,Y as oe,Z as se,e as a,$ as ie,V as re,a0 as f,g as k,a1 as ce,_ as de,d as ue,o as ve,w as s,b as c,a2 as me,f as ye,y as fe,a3 as be,s as ke}from"./index-DDaYqyO0.js";const ge=z("v-alert-title"),Ve=["success","info","warning","error"],_e=F({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:N,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>Ve.includes(e)},...R(),...E(),...O(),...M(),...Y(),...j(),...G(),...H(),...J(),...K({variant:"flat"})},"VAlert"),Ce=Q()({name:"VAlert",props:_e(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,l){let{emit:d,slots:t}=l;const u=U(e,"modelValue"),o=r(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),V=r(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:_}=W(e),{colorClasses:C,colorStyles:x,variantClasses:P}=X(V),{densityClasses:B}=Z(e),{dimensionStyles:S}=q(e),{elevationClasses:T}=ee(e),{locationStyles:p}=te(e),{positionClasses:w}=ae(e),{roundedClasses:$}=le(e),{textColorClasses:h,textColorStyles:A}=ne(oe(e,"borderColor")),{t:D}=se(),v=r(()=>({"aria-label":D(e.closeLabel),onClick(i){u.value=!1,d("click:close",i)}}));return()=>{const i=!!(t.prepend||o.value),I=!!(t.title||e.title),L=!!(t.close||e.closable);return u.value&&a(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},_.value,C.value,B.value,T.value,w.value,$.value,P.value,e.class],style:[x.value,S.value,p.value,e.style],role:"alert"},{default:()=>{var m,y;return[ie(!1,"v-alert"),e.border&&a("div",{key:"border",class:["v-alert__border",h.value],style:A.value},null),i&&a("div",{key:"prepend",class:"v-alert__prepend"},[t.prepend?a(f,{key:"prepend-defaults",disabled:!o.value,defaults:{VIcon:{density:e.density,icon:o.value,size:e.prominent?44:28}}},t.prepend):a(re,{key:"prepend-icon",density:e.density,icon:o.value,size:e.prominent?44:28},null)]),a("div",{class:"v-alert__content"},[I&&a(ge,{key:"title"},{default:()=>{var n;return[((n=t.title)==null?void 0:n.call(t))??e.title]}}),((m=t.text)==null?void 0:m.call(t))??e.text,(y=t.default)==null?void 0:y.call(t)]),t.append&&a("div",{key:"append",class:"v-alert__append"},[t.append()]),L&&a("div",{key:"close",class:"v-alert__close"},[t.close?a(f,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var n;return[(n=t.close)==null?void 0:n.call(t,{props:v.value})]}}):a(k,ce({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},v.value),null)])]}})}}});function b(e){const l=e;l.__i18n=l.__i18n||[],l.__i18n.push({locale:"",resource:{en:{loginButton:{t:0,b:{t:2,i:[{t:3}],s:"Login"}}},de:{loginButton:{t:0,b:{t:2,i:[{t:3}],s:"Anmelden"}}}}})}const g={},xe={class:"text-center"};function Pe(e,l){return ve(),ue(ke,{elevation:"2",class:"mx-auto mt-5","max-width":"600"},{default:s(()=>[a(be,null,{default:s(()=>[a(Ce,{type:"info",icon:"mdi-information",border:"end",prominent:""},{default:s(()=>l[1]||(l[1]=[c("strong",{class:"text-h5"},"You've signed out of PersoTool.",-1)])),_:1}),l[2]||(l[2]=c("p",{class:"mt-2 text-center text-h5"},"It's a good idea to close all browser windows.",-1)),a(me,{class:"my-4"}),c("div",xe,[a(k,{color:"primary",size:"large",onClick:l[0]||(l[0]=d=>e.$auth.login())},{default:s(()=>[ye(fe(e.$t("loginButton")),1)]),_:1})])]),_:1})]),_:1})}typeof b=="function"&&b(g);const Se=de(g,[["render",Pe]]);export{Se as default};
