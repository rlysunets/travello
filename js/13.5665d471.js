"use strict";(self["webpackChunktravello"]=self["webpackChunktravello"]||[]).push([[13],{1500:function(t,e,n){n.d(e,{Z:function(){return v}});var s=n(3396),a=n(7139);const i={class:"ask"},r={class:"ask_question"},o={class:"ask_button"};function c(t,e,n,c,u,l){const d=(0,s.up)("my-button");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("div",r,(0,a.zw)(n.title),1),(0,s._)("div",o,[(0,s.Wm)(d,{title:"Contact us","is-icon":!0,onClick:e[0]||(e[0]=e=>t.$router.push("/contacts"))})])])}var u=n(3874),l={name:"Ask",components:{MyButton:u.Z},props:{title:{type:String,default:"",required:!0}}},d=n(89);const p=(0,d.Z)(l,[["render",c]]);var v=p},5174:function(t,e,n){n.d(e,{Z:function(){return _}});var s=n(3396),a=n(7139);const i={class:"section_wrapper"},r={class:"container"},o={class:"section_header"},c={class:"header_hint hint"},u={class:"header_title section_title"},l={class:"section_body"};function d(t,e,n,d,p,v){return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("div",r,[(0,s._)("div",o,[(0,s._)("div",c,(0,a.zw)(n.hint),1),(0,s._)("h2",u,(0,a.zw)(n.title),1)]),(0,s._)("div",l,[(0,s._)("p",null,(0,a.zw)(n.descr),1),(0,s.WI)(t.$slots,"default")])])])}var p={name:"SectionWrapper",props:{hint:{type:String,default:"",required:!0},title:{type:String,default:"",required:!0},descr:{type:String,default:""}}},v=n(89);const f=(0,v.Z)(p,[["render",d]]);var _=f},1260:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var s=n(3396);const a={class:"questions"},i={class:"accordion_wrap"};function r(t,e,n,r,o,c){const u=(0,s.up)("accordion"),l=(0,s.up)("ask"),d=(0,s.up)("section-wrapper");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s.Wm)(d,{title:"Frequently asked questions",hint:"Any more questions?"},{default:(0,s.w5)((()=>[(0,s._)("div",i,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.faqData,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{class:"accordion_item",key:e},[(0,s.Wm)(u,{question:t.question,answer:t.answer},null,8,["question","answer"])])))),128))]),(0,s.Wm)(l,{title:"Still have questions?"})])),_:1})])}var o=n(6265),c=n.n(o),u=n(5174),l=n(3659),d=n(3874),p=n(1500),v={name:"Questions",components:{SectionWrapper:u.Z,Accordion:l.Z,MyButton:d.Z,Ask:p.Z},data(){return{faqData:[]}},created(){c().get("data/faq.json").then((t=>{this.faqData=t.data}))}},f=n(89);const _=(0,f.Z)(v,[["render",r],["__scopeId","data-v-5f8ce367"]]);var w=_}}]);
//# sourceMappingURL=13.5665d471.js.map