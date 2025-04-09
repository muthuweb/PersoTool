import{_ as r,a as i,r as a,t as o,v as n,o as $}from"./index-DDaYqyO0.js";const f={data(){return{rules:{required:s=>e=>!!e||this.$t("form.messages.required",{_field_:s}),min:(s,e)=>t=>(t==null?void 0:t.length)>=e||this.$t("form.messages.min",{_field_:s,length:e}),max:(s,e)=>t=>(t==null?void 0:t.length)<=e||this.$t("form.messages.max",{_field_:s,length:e}),min_value:(s,e)=>t=>t>=e||this.$t("form.messages.min_value",{_field_:s,min:e}),max_value:(s,e)=>t=>t<=e||this.$t("form.messages.max_value",{_field_:s,max:e}),email:()=>s=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(s)||this.$t("form.messages.email"),length:(s,e)=>t=>(t==null?void 0:t.length)===e||this.$t("form.messages.length",{_field_:s,length:e}),double:s=>e=>/^[+-]?([0-9]*[.])?[0-9]+$/.test(e)||this.$t("form.messages.double",{_field_:s}),image:(s,e)=>t=>t&&t.size<e&&/\.(jpg|png|bmp)$/i.test(t.name)||this.$t("form.messages.image",{_field_:s,size:e}),website:()=>s=>/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(s)||this.$t("form.messages.website"),rate:()=>()=>this.$t("form.messages.rate"),iban:()=>()=>this.$t("form.messages.iban"),link:()=>()=>this.$t("form.messages.link"),maconomyNumber:()=>()=>this.$t("form.messages.maconomyNumber"),restrictedEmail:()=>s=>s!=="restricted@example.com"||this.$t("form.messages.restrictedEmail"),noServiceSelected:()=>()=>this.$t("form.messages.noServiceSelected")}}}};function g(s,e,t,c,m,h){return $(),i("div",null,[a(s.$slots,"default",o(n(m.rules)))])}const l=r(f,[["render",g]]);export{l as default};
