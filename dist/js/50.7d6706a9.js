"use strict";(self["webpackChunktravello"]=self["webpackChunktravello"]||[]).push([[50],{3299:function(t,e,s){s.d(e,{Z:function(){return c}});var i=s(3396);const r={class:"travel"};function a(t,e,s,a,n,o){const l=(0,i.up)("section-wrapper");return(0,i.wg)(),(0,i.iD)("section",r,[(0,i.Wm)(l,{title:"What we offer",hint:"Travel with us",descr:"Families with children of different ages, tourists of the older generation, youth companies, couples\r\n        in love and single travelers - for all categories we will offer quality and interesting rest."})])}var n=s(7133),o={name:"Trvel",components:{SectionWrapper:n.Z}},l=s(89);const u=(0,l.Z)(o,[["render",a]]);var c=u},7050:function(t,e,s){s.r(e),s.d(e,{default:function(){return L}});var i=s(3396),r=s(7139);const a={class:"tours"},n={class:"types"};function o(t,e,s,o,l,u){const c=(0,i.up)("intro"),p=(0,i.up)("tour-card"),d=(0,i.up)("section-wrapper"),v=(0,i.up)("travel"),y=(0,i.up)("gallery");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i.Wm)(c,{title:"Tours",bg:"hero_tours.jpg"}),(0,i.Wm)(d,{title:"Popular Tour Destinations",hint:"Perfect vacation"},{default:(0,i.w5)((()=>[(0,i._)("div",n,[(0,i._)("span",{class:(0,r.C_)(["hint",{active:""===l.type}]),onClick:e[0]||(e[0]=t=>u.setType(""))},"All",2),(0,i._)("span",{class:(0,r.C_)(["hint",{active:"Cultural"===l.type}]),onClick:e[1]||(e[1]=t=>u.setType("Cultural"))},"Cultural",2),(0,i._)("span",{class:(0,r.C_)(["hint",{active:"Histoty"===l.type}]),onClick:e[2]||(e[2]=t=>u.setType("Histoty"))},"Histoty",2),(0,i._)("span",{class:(0,r.C_)(["hint",{active:"Hike"===l.type}]),onClick:e[3]||(e[3]=t=>u.setType("Hike"))},"Hike",2)]),(0,i.Wm)(p,{type:l.type},null,8,["type"])])),_:1}),(0,i.Wm)(v),(0,i.Wm)(d,{hint:"About us",title:"Gallery"},{default:(0,i.w5)((()=>[(0,i.Wm)(y)])),_:1})])}var l=s(4763),u=s(7133);const c={class:"tours_list"},p={class:"item_pic"},d={class:"badge"},v=["src","alt"],y={class:"item_content"},_={class:"item_title"},m={class:"item_location"},h={class:"item_details"},f={class:"button"},w={class:"pricing"},g={class:"duration hint"},C={class:"price hint"};function T(t,e,a,n,o,l){const u=(0,i.up)("my-button"),T=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",c,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.toursList,((t,e)=>((0,i.wg)(),(0,i.iD)("div",{key:e,class:"tours_item"},[(0,i.Wm)(T,{to:{name:"oneTour",params:{slug:t.slug}}},{default:(0,i.w5)((()=>[(0,i._)("div",p,[(0,i._)("div",d,(0,r.zw)(t.type),1),(0,i._)("img",{src:s(8379)("./"+t.img),alt:t.city},null,8,v)]),(0,i._)("div",y,[(0,i._)("h2",_,(0,r.zw)(t.title),1),(0,i._)("div",m,(0,r.zw)(t.city)+", "+(0,r.zw)(t.country),1),(0,i._)("div",h,[(0,i._)("div",f,[(0,i.Wm)(u,{title:"Detail","is-icon":!0})]),(0,i._)("div",w,[(0,i._)("div",g,(0,r.zw)(t.duration),1),(0,i._)("div",C,(0,r.zw)(t.price),1)])])])])),_:2},1032,["to"])])))),128))])}var k=s(6265),W=s.n(k),D=s(8643),Z={name:"TourCard",components:{MyButton:D.Z},props:{type:{type:String,default:""}},data(){return{toursData:[]}},computed:{toursList(){return""!==this.type?this.toursData.filter((t=>t.type===this.type)):this.toursData}},created(){W().get("../data/tours.json").then((t=>{this.toursData=t.data}))}},b=s(89);const H=(0,b.Z)(Z,[["render",T]]);var z=H,S=s(3299),j=s(6116),A={name:"Tours",components:{Intro:l.Z,TourCard:z,SectionWrapper:u.Z,Travel:S.Z,Gallery:j.Z},data(){return{type:""}},methods:{setType(t){this.type=t}}};const G=(0,b.Z)(A,[["render",o]]);var L=G}}]);
//# sourceMappingURL=50.7d6706a9.js.map