"use strict";(self["webpackChunktravello"]=self["webpackChunktravello"]||[]).push([[115],{376:function(t,e,n){n.d(e,{Z:function(){return v}});var s=n(3396),a=n(7139);const i={class:"ask"},r={class:"ask_question"},o={class:"ask_button"};function c(t,e,n,c,u,d){const l=(0,s.up)("my-button");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("div",r,(0,a.zw)(n.title),1),(0,s._)("div",o,[(0,s.Wm)(l,{title:"Contact us","is-icon":!0,onClick:e[0]||(e[0]=e=>t.$router.push("/contacts"))})])])}var u=n(8643),d={name:"Ask",components:{MyButton:u.Z},props:{title:{type:String,default:"",required:!0}}},l=n(89);const p=(0,l.Z)(d,[["render",c]]);var v=p},7133:function(t,e,n){n.d(e,{Z:function(){return w}});var s=n(3396),a=n(7139);const i={class:"section"},r={class:"container"},o={class:"section_wrapper"},c={class:"section_header"},u={class:"header_hint hint"},d={class:"header_title section_title"},l={class:"section_body"};function p(t,e,n,p,v,_){return(0,s.wg)(),(0,s.iD)("section",i,[(0,s._)("div",r,[(0,s._)("div",o,[(0,s._)("div",c,[(0,s._)("div",u,(0,a.zw)(n.hint),1),(0,s._)("h2",d,(0,a.zw)(n.title),1)]),(0,s._)("div",l,[(0,s._)("p",null,(0,a.zw)(n.descr),1),(0,s.WI)(t.$slots,"default",{},void 0,!0)])])])])}var v={name:"SectionWrapper",props:{hint:{type:String,default:"",required:!0},title:{type:String,default:"",required:!0},descr:{type:String,default:""}}},_=n(89);const f=(0,_.Z)(v,[["render",p],["__scopeId","data-v-0810263c"]]);var w=f},7733:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var s=n(3396);const a={class:"questions"},i={class:"accordion_wrap"};function r(t,e,n,r,o,c){const u=(0,s.up)("accordion"),d=(0,s.up)("ask"),l=(0,s.up)("section-wrapper");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s.Wm)(l,{title:"Frequently asked questions",hint:"Any more questions?"},{default:(0,s.w5)((()=>[(0,s._)("div",i,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.faqData,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{class:"accordion_item",key:e},[(0,s.Wm)(u,{question:t.question,answer:t.answer},null,8,["question","answer"])])))),128))]),(0,s.Wm)(d,{title:"Still have questions?"})])),_:1})])}var o=n(6265),c=n.n(o),u=n(7133),d=n(3043),l=n(8643),p=n(376),v={name:"Questions",components:{SectionWrapper:u.Z,Accordion:d.Z,MyButton:l.Z,Ask:p.Z},data(){return{faqData:[]}},created(){c().get("data/faq.json").then((t=>{this.faqData=t.data}))}},_=n(89);const f=(0,_.Z)(v,[["render",r],["__scopeId","data-v-59184fa7"]]);var w=f}}]);
//# sourceMappingURL=115.bde06576.js.map