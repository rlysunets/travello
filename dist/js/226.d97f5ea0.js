(self["webpackChunktravello"]=self["webpackChunktravello"]||[]).push([[226],{1331:function(e,t,i){"use strict";i.d(t,{Z:function(){return j}});var s=i(3396),r=i(7139);const n={class:"reviews_wrap"},a={class:"reviews_content"},c={class:"review_hint hint"},o={class:"reviews_title section_title"},u={class:"reviews_descr"},p={class:"reviews_user"},g={class:"reviews_date"},d={key:0,class:"reviews_button"},l={class:"reviews_image"},m=["src","alt"];function v(e,t,v,f,w,_){const h=(0,s.up)("my-button");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("div",a,[(0,s._)("div",c,(0,r.zw)(v.hint),1),(0,s._)("h2",o,(0,r.zw)(v.title),1),(0,s._)("div",u,(0,r.zw)(v.descr),1),(0,s._)("div",p,(0,r.zw)(v.name),1),(0,s._)("div",g,[(0,s._)("time",null,(0,r.zw)(v.date),1)]),v.button?((0,s.wg)(),(0,s.iD)("div",d,[(0,s.Wm)(h,{title:"All reviews","is-icon":!0,onClick:t[0]||(t[0]=t=>e.$router.push("/reviews"))})])):(0,s.kq)("",!0)]),(0,s._)("div",l,[(0,s._)("img",{class:"img_border",src:i(9e3)("./"+v.image),alt:v.title},null,8,m)])])}var f=i(2895),w={name:"Review",components:{MyButton:f.Z},props:{image:{type:String,default:""},hint:{type:String,default:""},title:{type:String,default:""},descr:{type:String,default:""},name:{type:String,default:""},date:{type:String,default:""},button:{type:Boolean,default:!0}}},_=i(89);const h=(0,_.Z)(w,[["render",v]]);var j=h},5174:function(e,t,i){"use strict";i.d(t,{Z:function(){return v}});var s=i(3396),r=i(7139);const n={class:"section_wrapper"},a={class:"container"},c={class:"section_header"},o={class:"header_hint hint"},u={class:"header_title section_title"},p={class:"section_body"};function g(e,t,i,g,d,l){return(0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("div",a,[(0,s._)("div",c,[(0,s._)("div",o,(0,r.zw)(i.hint),1),(0,s._)("h2",u,(0,r.zw)(i.title),1)]),(0,s._)("div",p,[(0,s._)("p",null,(0,r.zw)(i.descr),1),(0,s.WI)(e.$slots,"default")])])])}var d={name:"SectionWrapper",props:{hint:{type:String,default:"",required:!0},title:{type:String,default:"",required:!0},descr:{type:String,default:""}}},l=i(89);const m=(0,l.Z)(d,[["render",g]]);var v=m},6226:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return m}});var s=i(3396),r=i(7139);const n={class:"reviews"};function a(e,t,i,a,c,o){const u=(0,s.up)("review"),p=(0,s.up)("section-wrapper");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s.Wm)(p,{title:"Customer Reviews",hint:"What they say"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(c.reviewsData,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t,class:"mb"},[(0,s.Wm)(u,{class:(0,r.C_)({reverse:t%2!==0}),image:e.image,descr:e.descr,name:e.name,date:e.date,button:!1},null,8,["class","image","descr","name","date"])])))),128))])),_:1})])}var c=i(6265),o=i.n(c),u=i(5174),p=i(1331),g={name:"Reviews",components:{SectionWrapper:u.Z,Review:p.Z},data(){return{reviewsData:[]}},created(){o().get("data/reviews.json").then((e=>{this.reviewsData=e.data}))}},d=i(89);const l=(0,d.Z)(g,[["render",a],["__scopeId","data-v-55a02bf6"]]);var m=l},9e3:function(e,t,i){var s={"./image1.jpg":140,"./image10.jpg":4020,"./image2.jpg":7595,"./image3.jpg":7424,"./image4.jpg":1035,"./image5.jpg":3181,"./image6.jpg":5143,"./image7.jpg":2827,"./image8.jpg":449,"./image9.jpg":171};function r(e){var t=n(e);return i(t)}function n(e){if(!i.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=n,e.exports=r,r.id=9e3},140:function(e,t,i){"use strict";e.exports=i.p+"img/image1.2288edd8.jpg"},4020:function(e,t,i){"use strict";e.exports=i.p+"img/image10.c897fd3b.jpg"},7595:function(e,t,i){"use strict";e.exports=i.p+"img/image2.de70cc99.jpg"},7424:function(e,t,i){"use strict";e.exports=i.p+"img/image3.9c4a41aa.jpg"},1035:function(e,t,i){"use strict";e.exports=i.p+"img/image4.36359485.jpg"},3181:function(e,t,i){"use strict";e.exports=i.p+"img/image5.cca7607e.jpg"},5143:function(e,t,i){"use strict";e.exports=i.p+"img/image6.9585317b.jpg"},2827:function(e,t,i){"use strict";e.exports=i.p+"img/image7.5ae7f0d3.jpg"},449:function(e,t,i){"use strict";e.exports=i.p+"img/image8.36df9894.jpg"},171:function(e,t,i){"use strict";e.exports=i.p+"img/image9.96ff4d02.jpg"}}]);
//# sourceMappingURL=226.d97f5ea0.js.map