(self["webpackChunktravello"]=self["webpackChunktravello"]||[]).push([[482],{4763:function(t,e,a){"use strict";a.d(e,{Z:function(){return p}});var i=a(3396),r=a(7139);const s={class:"container"},n={class:"intro_wrap"},o={class:"intro_title"};function l(t,e,l,c,g,u){return(0,i.wg)(),(0,i.iD)("section",{class:"intro",style:(0,r.j5)(`background-image: url(${a(4699)("./"+l.bg)})`)},[(0,i._)("div",s,[(0,i._)("div",n,[(0,i._)("h2",o,(0,r.zw)(l.title),1)])])],4)}var c={name:"intro",props:{title:{type:String,default:"",required:!0},bg:{type:String,default:"",required:!1}}},g=a(89);const u=(0,g.Z)(c,[["render",l]]);var p=u},5174:function(t,e,a){"use strict";a.d(e,{Z:function(){return _}});var i=a(3396),r=a(7139);const s={class:"section_wrapper"},n={class:"container"},o={class:"section_header"},l={class:"header_hint hint"},c={class:"header_title section_title"},g={class:"section_body"};function u(t,e,a,u,p,h){return(0,i.wg)(),(0,i.iD)("div",s,[(0,i._)("div",n,[(0,i._)("div",o,[(0,i._)("div",l,(0,r.zw)(a.hint),1),(0,i._)("h2",c,(0,r.zw)(a.title),1)]),(0,i._)("div",g,[(0,i._)("p",null,(0,r.zw)(a.descr),1),(0,i.WI)(t.$slots,"default")])])])}var p={name:"SectionWrapper",props:{hint:{type:String,default:"",required:!0},title:{type:String,default:"",required:!0},descr:{type:String,default:""}}},h=a(89);const d=(0,h.Z)(p,[["render",u]]);var _=d},1482:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return L}});var i=a(3396),r=a(7139);const s={class:"news"},n={class:"news_list"},o={class:"item_pic"},l=["src","alt"],c=["src","alt"],g={class:"item_content"},u={class:"title"},p=["innerHTML"];function h(t,e,h,d,_,f){const w=(0,i.up)("intro"),m=(0,i.up)("pagination"),v=(0,i.up)("router-link"),D=(0,i.up)("section-wrapper");return(0,i.wg)(),(0,i.iD)("div",s,[(0,i.Wm)(w,{title:"News",bg:"hero_news.jpg"}),(0,i.Wm)(D,{title:"The latest travel news",hint:"News"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{page:_.page,total:f.totalPages,onToPage:f.toPage},null,8,["page","total","onToPage"]),(0,i._)("div",n,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(_.newsList,((t,s)=>((0,i.wg)(),(0,i.iD)("div",{class:"news_item",key:s},[(0,i.Wm)(v,{to:{name:"oneNews",params:{title:t.title}}},null,8,["to"]),(0,i._)("div",o,[null!==t.urlToImage?((0,i.wg)(),(0,i.iD)("img",{key:0,src:t.urlToImage,alt:t.title,onError:e[0]||(e[0]=(...t)=>f.errorImg&&f.errorImg(...t))},null,40,l)):((0,i.wg)(),(0,i.iD)("img",{key:1,src:a(7206),alt:t.title},null,8,c))]),(0,i._)("div",g,[(0,i._)("h2",u,(0,r.zw)(t.title),1),(0,i._)("time",null,(0,r.zw)(t.publishedAt),1),(0,i._)("p",{class:"descr",innerHTML:t.description},null,8,p)])])))),128))])])),_:1})])}var d=a(6265),_=a.n(d),f=a(4763),w=a(5174),m=a(9242);const v={key:0,class:"pagination"},D=(0,i._)("li",null,[(0,i._)("span",null,"...")],-1),k=["onClick"],y=(0,i._)("li",null,[(0,i._)("span",null,"...")],-1);function b(t,e,a,s,n,o){return 0!==a.total?((0,i.wg)(),(0,i.iD)("ul",v,[(0,i._)("li",{class:(0,r.C_)({disabled:o.isDisabledFirst})},[(0,i._)("a",{href:"#",onClick:e[0]||(e[0]=(0,m.iM)((t=>o.goToPage(a.page-1)),["prevent"]))},"<<")],2),o.showFirst?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i._)("li",null,[(0,i._)("a",{href:"#",onClick:e[1]||(e[1]=(0,m.iM)((t=>o.goToPage(1)),["prevent"]))},"1")]),D],64)):(0,i.kq)("",!0),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.pageRange,(t=>((0,i.wg)(),(0,i.iD)("li",{key:t,class:(0,r.C_)({active:t===a.page})},[(0,i._)("a",{href:"#",onClick:(0,m.iM)((e=>o.goToPage(t)),["prevent"])},(0,r.zw)(t),9,k)],2)))),128)),o.showLast?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[y,(0,i._)("li",null,[(0,i._)("a",{href:"#",onClick:e[2]||(e[2]=(0,m.iM)((t=>o.goToPage(a.total)),["prevent"]))},(0,r.zw)(a.total),1)])],64)):(0,i.kq)("",!0),(0,i._)("li",{class:(0,r.C_)({disabled:o.isDisabledLast})},[(0,i._)("a",{href:"#",onClick:e[3]||(e[3]=(0,m.iM)((t=>o.goToPage(a.page+1)),["prevent"]))},">>")],2)])):(0,i.kq)("",!0)}var P={name:"Pagination",props:{page:{type:Number,default:1,required:!0},total:{type:Number,default:0,required:!0}},computed:{isDisabledFirst(){return 1===this.page},isDisabledLast(){return this.page===this.total},showFirst(){return this.page>4&&this.total>6},showLast(){return this.page<this.total-3&&this.total>6},pageRange(){let t=this.page-2,e=this.page+2;return this.page<5&&(t=1,e=5),this.page>this.total-4&&(t=this.total-4,e=this.total),t<1&&(t=1),e>this.total&&(e=this.total),Array(e-t+1).fill().map(((e,a)=>t+a))}},methods:{goToPage(t){this.$emit("toPage",t)}}},j=a(89);const T=(0,j.Z)(P,[["render",b]]);var z=T,q={name:"News",components:{Intro:f.Z,SectionWrapper:w.Z,Pagination:z},data(){return{API_key:"76498ae586a94328ac5ccba99185f515",q:"tourism",newsList:[],page:1,pageSize:12}},computed:{totalPages(){const t=Math.floor(this.newsList.totalResults/this.pageSize),e=Math.floor(100/this.pageSize);return this.newsList.totalResults<100?t:e},toDateFormater(){const t=new Date,e=t.getFullYear(),a=t.getMonth()+1,i=t.getDate();return e+"-"+(a<10?"0"+a:a)+"-"+(i<10?"0"+i:i)},fromDateFormater(){const t=new Date,e=t.getFullYear(),a=t.getMonth()+1,i=t.getDate()-1;return e+"-"+(a<10?"0"+a:a)+"-"+(i<10?"0"+i:i)}},created(){this.fetchData()},methods:{fetchData(){let t=`https://newsapi.org/v2/everything?q=${this.q}&apiKey=${this.API_key}`;t+=`&from=${this.fromDateFormater}`,t+=`&to=${this.toDateFormater}`,t+="&language=en",t+=`&pageSize=${this.pageSize}`,t+=`&page=${this.page}`,_().get(t).then((t=>{this.newsList=t.data.articles}))},toPage(t){this.page=t,this.fetchData()},errorImg(t){t.target.src=a(7206)}}};const C=(0,j.Z)(q,[["render",h]]);var L=C},4699:function(t,e,a){var i={"./hero_about.jpg":9456,"./hero_contacts.jpg":9144,"./hero_home.jpg":3289,"./hero_news.jpg":2495,"./hero_tours.jpg":5365,"./hero_why-choose-us.jpg":2945};function r(t){var e=s(t);return a(e)}function s(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=s,t.exports=r,r.id=4699},9456:function(t,e,a){"use strict";t.exports=a.p+"img/hero_about.7a255c70.jpg"},9144:function(t,e,a){"use strict";t.exports=a.p+"img/hero_contacts.3c9b9d0e.jpg"},3289:function(t,e,a){"use strict";t.exports=a.p+"img/hero_home.f5e40a74.jpg"},2495:function(t,e,a){"use strict";t.exports=a.p+"img/hero_news.fc5e3af1.jpg"},5365:function(t,e,a){"use strict";t.exports=a.p+"img/hero_tours.940dcd0c.jpg"},2945:function(t,e,a){"use strict";t.exports=a.p+"img/hero_why-choose-us.f8ea922a.jpg"},7206:function(t,e,a){"use strict";t.exports=a.p+"img/no-image-available.aa6a1acc.png"}}]);
//# sourceMappingURL=482.0cbc4a29.js.map