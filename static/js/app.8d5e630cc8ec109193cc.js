webpackJsonp([1],{104:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{staticClass:"mt-5"},[r("v-flex",{attrs:{xs12:""}},[r("div",{staticClass:"primary lighten-4 elevation-2"},[r("v-toolbar",{staticClass:"primary darken-2",attrs:{flat:"",dense:"",dark:""}},[r("v-toolbar-title",[t._v("Contact me")]),t._v(" "),t._t("action")],2),t._v(" "),r("div",{staticClass:"pa-3"},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",sm4:""}},[r("div",{staticClass:"headline"},[r("v-icon",[t._v("face")]),t._v(" "),r("a",{attrs:{href:"https://mymathkings.com"}},[t._v("Portfolio")])],1),t._v(" "),r("div",{staticClass:"headline"},[r("v-icon",[t._v("phone")]),t._v(" +254 706 798820\n            ")],1),t._v(" "),r("div",{staticClass:"headline"},[r("v-icon",[t._v("email")]),t._v(" moffmu@gmail.com\n            ")],1),t._v(" "),r("div",{staticClass:"headline"},[r("v-icon",[t._v("build")]),t._v(" "),r("a",{attrs:{href:"https://mymathkings.com"}},[t._v("Github")])],1)]),t._v(" "),r("v-flex",{attrs:{xs12:"",sm8:""}},[r("form",{attrs:{"onkeypress.enter":"login"}},[r("v-flex",[r("v-text-field",{attrs:{name:"email",label:"Enter your Email",id:"email",type:"email"},model:{value:t.contact.email,callback:function(e){t.$set(t.contact,"email",e)},expression:"contact.email"}}),t._v(" "),r("v-text-field",{attrs:{name:"name",label:"Enter your name",id:"name",type:"text"},model:{value:t.contact.name,callback:function(e){t.$set(t.contact,"name",e)},expression:"contact.name"}}),t._v(" "),r("v-text-field",{attrs:{name:"message",label:"Enter your message",id:"message","multi-line":""},model:{value:t.contact.message,callback:function(e){t.$set(t.contact,"message",e)},expression:"contact.message"}})],1),t._v(" "),r("v-btn",{attrs:{block:"",color:"success"},on:{click:t.login}},[t._v("Send Email")])],1)])],1)],1)],1)])],1)},a=[],s={render:o,staticRenderFns:a};e.a=s},105:function(t,e,r){"use strict";r.d(e,"a",function(){return s});var o=r(15),a=r(106);o.a.use(a.a);var s=new a.a.Store({state:{loading:!1,products:[{id:1,src:"/static/img/1.jpeg",name:"Great Bed",price:25e3,color:"hardwood",description:"Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.",category:"bedroom"},{id:2,src:"/static/img/2.jpeg",name:"Awesome Bed",price:5e4,color:"hardwood",description:"Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.",category:"bedroom"},{id:3,src:"/static/img/3.jpeg",name:"Bed",price:15e3,color:"hardwood",description:"Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.",category:"bedroom"},{id:4,src:"/static/img/10.jpeg",name:"Coffee Table",price:12340,color:"hardwood",description:"Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.",category:"coffee"},{id:5,src:"/static/img/11.jpeg",name:"Coffee Table",price:46500,color:"hardwood",description:"Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.",category:"coffee"},{id:6,src:"/static/img/12.jpeg",name:"Coffee Table",price:12560,color:"hardwood",description:"Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.",category:"coffee"},{id:7,src:"/static/img/13.jpeg",name:"Coffee Table",price:11e3,color:"hardwood",description:"Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.",category:"coffee"},{id:8,src:"/static/img/14.jpeg",name:"3-seater",price:75e3,color:"hardwood",description:"Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.",category:"sittingroom"},{id:9,src:"/static/img/15.jpeg",name:"3-seater",price:1e4,color:"hardwood",description:"Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.",category:"sittingroom"},{id:10,src:"/static/img/16.jpeg",name:"3-seater",price:25300,color:"hardwood",description:"Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.",category:"sittingroom"},{id:11,src:"/static/img/17.jpeg",name:"3-seater",price:23e3,color:"hardwood",description:"Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.",category:"sittingroom"},{id:12,src:"/static/img/18.jpeg",name:"3-seater",price:23e3,color:"hardwood",description:"Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.",category:"sittingroom"},{id:13,src:"/static/img/19.jpeg",name:"3-seater",price:23e3,color:"hardwood",description:"Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.",category:"sittingroom"},{id:14,src:"/static/img/20.jpeg",name:"Coffe Table",price:145e3,color:"hardwood",description:"Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.",category:"coffee"},{id:15,src:"/static/img/41.jpeg",name:"Bathroom Set",price:145e3,color:"hardwood",description:"Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.",category:"bathroom"},{id:16,src:"/static/img/31.jpeg",name:"Office Suite",price:145e3,color:"hardwood",description:"Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.",category:"office"},{id:20,src:"/static/img/32.jpeg",name:"Office Suite",price:145e3,color:"hardwood",description:"Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.",category:"office"},{id:17,src:"/static/img/42.jpeg",name:"Bathroom Set",price:145e3,color:"hardwood",description:"Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.",category:"bathroom"},{id:18,src:"/static/img/43.jpeg",name:"Bathroom Set",price:145e3,color:"hardwood",description:"Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.",category:"bathroom"},{id:21,src:"/static/img/39.jpeg",name:"Kitchenette",price:145e3,color:"hardwood",description:"Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.",category:"kitchen"},{id:19,src:"/static/img/38.jpeg",name:"Kitchenette",price:145e3,color:"hardwood",description:"Hand Crafted Hardwood Furnitur. Made by the best for the best. Never shop for more.",category:"kitchen"}]},mutations:{setProducts:function(t,e){t.products=e},setLoading:function(t,e){t.loading=e}},actions:{setProducts:function(t,e){var r=t.commit;r("setLoading",!0),r("setProducts",e),r("setLoading",!1)}},getters:{getProducts:function(t){return t.products},getLoading:function(t){return t.loading},getFeaturedProducts:function(t){return t.products.slice(2,8)},getOneProduct:function(t){return function(e){return t.products.find(function(t){return t.id===parseInt(e)})}},getFilteredProducts:function(t){return function(e){return t.products.filter(function(t){return t.category===e})}},getSearchProducts:function(t){return function(e){return t.products.filter(function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>=0||t.category.toLowerCase().indexOf(e.toLowerCase())>=0||t.color.toLowerCase().indexOf(e.toLowerCase())>=0||t.description.toLowerCase().indexOf(e.toLowerCase())>=0})}}}})},108:function(t,e){},110:function(t,e,r){"use strict";function o(t){r(111)}var a=r(43),s=r(112),i=r(3),n=o,c=i(a.a,s.a,!1,n,"data-v-114f065e",null);e.a=c.exports},111:function(t,e){},112:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"white elevation-2 mt-2"},[r("v-toolbar",{staticClass:"green darken-2",attrs:{flat:"",dense:"",dark:""}},[r("v-toolbar-title",[t._v(t._s(t.title))]),t._v(" "),r("v-spacer"),t._v(" "),t._t("action")],2),t._v(" "),r("div",{staticClass:"pl-4 pr-4 pt-2 pb-2"},[t._t("default",[t._v("\n      No slot content defined.\n    ")])],2)],1)},a=[],s={render:o,staticRenderFns:a};e.a=s},24:function(t,e,r){"use strict";e.a={data:function(){return{dialog:!1,search:"",fixed:!1,drawer:null,items:[{icon:"keyboard_arrow_up","icon-alt":"keyboard_arrow_down",text:"Products",model:!0,children:[{text:"All",to:"/products",filter:""},{text:"Bedroom",to:"/products",filter:"bedroom"},{text:"Sitting Room",to:"/products",filter:"sittingroom"},{text:"Coffee ",to:"/products",filter:"coffee"},{text:"Office",to:"/products",filter:"office"},{text:"Bathroom",to:"/products",filter:"bathroom"},{text:"Kitchen",to:"/products",filter:"kitchen"}]},{icon:"chat_bubble",text:"Send feedback",to:"/contacts"}]}},props:{source:String},methods:{move:function(t){this.$router.push(t)},moveto:function(t,e){this.$router.push({name:"products",query:{category:e}})},filterby:function(){this.$router.push({name:"products",query:{search:this.search}})}},computed:{loading:function(){return this.$store.getters.getLoading},featuredProducts:function(){return this.$store.getters.getFeaturedProducts}}}},25:function(t,e,r){"use strict";e.a={data:function(){return{}},computed:{featuredProducts:function(){return this.$store.getters.getFeaturedProducts},loading:function(){return this.$store.getters.getLoading}},methods:{}}},26:function(t,e,r){"use strict";e.a={data:function(){return{size:"xs",filter:null}},computed:{products:function(){return this.$route.query.category?this.$store.getters.getFilteredProducts(this.$route.query.category):this.$route.query.search?this.$store.getters.getSearchProducts(this.$route.query.search):this.$store.getters.getProducts}}}},27:function(t,e,r){"use strict";e.a={props:["id"],data:function(){return{product:null}},created:function(){this.product=this.$store.getters.getOneProduct(this.id),console.log(this.product),console.log(this.id)}}},28:function(t,e,r){"use strict";var o=r(65),a=r.n(o),s=r(68),i=r.n(s);e.a={data:function(){return{contact:{email:"",name:"",message:""},error:""}},methods:{login:function(){var t=this;return i()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{console.log("a")}catch(e){t.error=e.response.data.error}case 1:case"end":return e.stop()}},e,t)}))()}}}},43:function(t,e,r){"use strict";e.a={props:["title"]}},44:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(15),a=r(48),s=r(52),i=r(105),n=r(107),c=r.n(n),d=r(108),l=(r.n(d),r(109)),u=r.n(l),v=r(110);o.a.use(u.a),o.a.use(c.a,{theme:{primary:"#FF9800",secondary:"#1E88E5",accent:"#90A4AE",error:"#f44336",warning:"#ffeb3b",info:"#2196f3",success:"#4caf50"}}),o.a.component("panel",v.a),o.a.config.productionTip=!1,new o.a({el:"#app",router:s.a,store:i.a,components:{App:a.a},template:"<App/>"})},48:function(t,e,r){"use strict";function o(t){r(49)}var a=r(24),s=r(51),i=r(3),n=o,c=i(a.a,s.a,!1,n,"data-v-0b59f6c7",null);e.a=c.exports},49:function(t,e){},51:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-container",{attrs:{fluid:""}},[r("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{indeterminate:!0,height:"1"}}),t._v(" "),r("v-progress-circular",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"wait",attrs:{indeterminate:"",size:100,width:2,color:"purple"}},[t._v("Loading...")]),t._v(" "),r("v-navigation-drawer",{attrs:{fixed:"",clipped:t.$vuetify.breakpoint.lgAndUp,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{attrs:{dense:""}},[r("v-text-field",{staticClass:"mb-2 mt-1 ma-1",attrs:{flat:"","solo-inverted":"","append-icon":"search",label:"Search"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.filterby(e):null}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),t._l(t.items,function(e){return[e.heading?r("v-layout",{key:e.heading,attrs:{row:"","align-center":""}},[r("v-flex",{attrs:{xs6:""}},[e.heading?r("v-subheader",[t._v("\n                "+t._s(e.heading)+"\n              ")]):t._e()],1),t._v(" "),r("v-flex",{staticClass:"text-xs-center",attrs:{xs6:""}},[r("a",{staticClass:"body-2 black--text",attrs:{href:"#!"}},[t._v("EDIT")])])],1):e.children?r("v-list-group",{key:e.text,attrs:{"prepend-icon":e.model?e.icon:e["icon-alt"],"append-icon":""},model:{value:e.model,callback:function(r){t.$set(e,"model",r)},expression:"item.model"}},[r("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[r("v-list-tile-content",[r("v-list-tile-title",[t._v("\n                  "+t._s(e.text)+"\n                ")])],1)],1),t._v(" "),t._l(e.children,function(e,o){return r("v-list-tile",{key:o,staticClass:"ml-3",on:{click:function(r){t.moveto(e.to,e.filter)}}},[e.icon?r("v-list-tile-action",[r("v-icon",[t._v(t._s(e.icon))])],1):t._e(),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",[t._v("\n                  "+t._s(e.text)+"\n                ")])],1)],1)})],2):r("v-list-tile",{key:e.text,on:{click:function(r){t.move(e.to)}}},[r("v-list-tile-action",[r("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",[t._v("\n                "+t._s(e.text)+"\n              ")])],1)],1)]})],2),t._v(" "),r("div",[r("v-carousel",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],attrs:{fullscreen:"","hide-delimiters":"",lazy:!0}},t._l(t.featuredProducts,function(e){return r("v-carousel-item",{key:e.id,staticClass:"responsive",attrs:{src:e.src}},[r("v-btn",{staticClass:"viewbutton",attrs:{block:"",round:"",outline:"",small:"",color:"green",dark:"",to:"/product/"+e.id}},[r("v-icon",{attrs:{left:""}},[t._v("remove_red_eye")]),t._v("View")],1),t._v(" "),r("v-btn",{staticClass:"viewbutton",attrs:{block:"",round:"",small:"",color:"red",dark:"",to:"/addtocart/"+e.id}},[r("v-icon",{attrs:{left:""}},[t._v("shopping_cart")]),t._v("Buy Now ")],1)],1)}))],1)],1),t._v(" "),r("v-toolbar",{attrs:{color:"primary darken-3",dark:"",app:"","clipped-left":t.$vuetify.breakpoint.smAndUp,fixed:""}},[r("v-toolbar-title",{staticClass:"ml-0 pl-3",staticStyle:{width:"300px"}},[r("v-toolbar-side-icon",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mdAndDown,expression:"$vuetify.breakpoint.mdAndDown"}],on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("span",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.move("/")}}},[t._v("ECATALOG")])],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("lock_open")])],1),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("shopping_cart")])],1),t._v(" "),r("v-btn",{attrs:{icon:"",large:""}},[r("v-avatar",{attrs:{size:"32px",tile:""}},[r("img",{attrs:{src:"https://vuetifyjs.com/static/doc-images/logo.svg",alt:"Vuetify"}})])],1)],1),t._v(" "),r("v-content",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[r("router-view")],1),t._v(" "),r("v-footer",{attrs:{fixed:t.fixed,app:""}},[r("v-spacer"),t._v(" "),r("span",[t._v("ECatalog © "+t._s((new Date).getFullYear()))]),t._v(" "),r("v-spacer")],1)],1)],1)},a=[],s={render:o,staticRenderFns:a};e.a=s},52:function(t,e,r){"use strict";var o=r(15),a=r(53),s=r(54),i=r(57),n=r(60),c=r(63);o.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"HelloWorld",component:s.a},{path:"/products",name:"products",component:i.a},{path:"/product/:id",name:"product",props:!0,component:n.a},{path:"/contacts",name:"contacts",component:c.a}],mode:"history",hashbang:!1})},54:function(t,e,r){"use strict";function o(t){r(55)}var a=r(25),s=r(56),i=r(3),n=o,c=i(a.a,s.a,!1,n,"data-v-7bb7f1af",null);e.a=c.exports},55:function(t,e){},56:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-slide-y-transition",{attrs:{mode:"out-in"}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("div",[r("v-carousel",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],attrs:{fullscreen:"","hide-delimiters":"",lazy:!0}},t._l(t.featuredProducts,function(e){return r("v-carousel-item",{key:e.id,staticClass:"responsive",attrs:{src:e.src}},[r("p",{staticClass:"text-xs-center"},[r("span",{staticClass:"red--text display-2 mb-2 text-xs-center"},[t._v(t._s(e.name))]),r("br"),t._v(" "),r("span",{staticClass:"red--text display-1 text-xs-center"},[t._v(t._s(t._f("currency")(e.price,"Ksh.",0,{spaceBetweenAmountAndSymbol:!0})))]),r("br"),t._v(" "),r("span",{staticClass:"red--text display-1 text-xs-center "},[r("v-btn",{staticClass:"itembutton",attrs:{block:"",round:"",dark:"",large:"",to:"/product/"+e.id,color:"red"}},[t._v("Buy Now")])],1)])])}))],1)]),t._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[r("panel",{staticClass:"mt-1",attrs:{title:"Sizzling hot"}},[r("v-carousel",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],attrs:{fullscreen:"","hide-delimiters":"",lazy:!0}},t._l(t.featuredProducts,function(e){return r("v-carousel-item",{key:e.id,staticClass:"responsive",attrs:{src:e.src}},[r("v-btn",{staticClass:"viewbutton",attrs:{block:"",round:"",outline:"",small:"",color:"green",dark:"",to:"/product/"+e.id}},[r("v-icon",{attrs:{left:""}},[t._v("remove_red_eye")]),t._v("View")],1),t._v(" "),r("v-btn",{staticClass:"viewbutton",attrs:{block:"",round:"",small:"",color:"red",dark:"",to:"/addtocart/"+e.id}},[r("v-icon",{attrs:{left:""}},[t._v("shopping_cart")]),t._v("Buy Now ")],1)],1)}))],1)],1),t._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[r("panel",{staticClass:"mt-1",attrs:{title:"Top Sellers"}},[r("v-carousel",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],attrs:{fullscreen:"","hide-delimiters":"",lazy:!0}},t._l(t.featuredProducts,function(e){return r("v-carousel-item",{key:e.id,staticClass:"responsive",attrs:{src:e.src}},[r("v-btn",{staticClass:"viewbutton",attrs:{block:"",round:"",outline:"",small:"",color:"green",dark:"",to:"/product/"+e.id}},[r("v-icon",{attrs:{left:""}},[t._v("remove_red_eye")]),t._v("View")],1),t._v(" "),r("v-btn",{staticClass:"viewbutton",attrs:{block:"",round:"",small:"",color:"red",dark:"",to:"/addtocart/"+e.id}},[r("v-icon",{attrs:{left:""}},[t._v("shopping_cart")]),t._v("Buy Now ")],1)],1)}))],1)],1),t._v(" "),r("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[r("panel",{staticClass:"mt-1",attrs:{title:"Must have"}},[r("v-carousel",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],attrs:{fullscreen:"","hide-delimiters":"",lazy:!0}},t._l(t.featuredProducts,function(e){return r("v-carousel-item",{key:e.id,staticClass:"responsive",attrs:{src:e.src}},[r("v-btn",{staticClass:"viewbutton",attrs:{block:"",round:"",outline:"",small:"",color:"green",dark:"",to:"/product/"+e.id}},[r("v-icon",{attrs:{left:""}},[t._v("remove_red_eye")]),t._v("View")],1),t._v(" "),r("v-btn",{staticClass:"viewbutton",attrs:{block:"",round:"",small:"",color:"red",dark:"",to:"/addtocart/"+e.id}},[r("v-icon",{attrs:{left:""}},[t._v("shopping_cart")]),t._v("Buy Now ")],1)],1)}))],1)],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("panel",{staticClass:"mt-1",attrs:{title:"ECatalog Featured"}},[r("v-carousel",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],attrs:{fullscreen:"","hide-delimiters":"",lazy:!0}},t._l(t.featuredProducts,function(e){return r("v-carousel-item",{key:e.id,staticClass:"responsive",attrs:{src:e.src}},[r("v-btn",{staticClass:"viewbutton",attrs:{block:"",round:"",outline:"",small:"",color:"green",dark:"",to:"/product/"+e.id}},[r("v-icon",{attrs:{left:""}},[t._v("remove_red_eye")]),t._v("View")],1),t._v(" "),r("v-btn",{staticClass:"viewbutton",attrs:{block:"",round:"",small:"",color:"red",dark:"",to:"/addtocart/"+e.id}},[r("v-icon",{attrs:{left:""}},[t._v("shopping_cart")]),t._v("Buy Now ")],1)],1)}))],1)],1)],1)],1)],1)},a=[],s={render:o,staticRenderFns:a};e.a=s},57:function(t,e,r){"use strict";function o(t){r(58)}var a=r(26),s=r(59),i=r(3),n=o,c=i(a.a,s.a,!1,n,null,null);e.a=c.exports},58:function(t,e){},59:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card",{attrs:{color:"grey"}},[r("v-container",t._b({attrs:{fluid:""}},"v-container",(o={},o["grid-list-"+t.size]=!0,o),!1),[r("v-layout",{attrs:{row:"",wrap:""}},[t._l(t.products,function(e){return r("v-flex",{key:e.id,staticClass:"pl-1",attrs:{md3:"",sm4:"",xs12:""}},[r("v-card",{staticClass:"cardproduct",attrs:{flat:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[r("v-card-media",{staticClass:"cardproduct pa-1 ma-1",attrs:{src:e.src,height:"250px"}})],1)],1),t._v(" "),r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("h3",{staticClass:"title mb-0"},[t._v(t._s(e.name))]),t._v(" "),r("br"),t._v(" "),r("div",{staticClass:"price"},[r("span",{staticClass:"title"},[t._v(t._s(t._f("currency")(e.price,"Ksh.",0,{spaceBetweenAmountAndSymbol:!0})))]),t._v(" "),r("br"),t._v(" "),r("span",{staticClass:"caption"},[t._v(t._s(e.color))])])])]),t._v(" "),r("v-card-actions",[r("v-btn",{staticClass:"viewbutton",attrs:{block:"",responsive:"",round:"",outline:"",small:"",color:"green",dark:"",to:"/product/"+e.id}},[r("v-icon",{attrs:{left:""}},[t._v("remove_red_eye")]),t._v("View")],1),t._v(" "),r("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.smAndUp,expression:"$vuetify.breakpoint.smAndUp"}],staticClass:"viewbutton",attrs:{round:"",responsive:"",small:"",color:"red",dark:"",to:"/addtocart/"+e.id}},[r("v-icon",{attrs:{left:""}},[t._v("shopping_cart")]),t._v("Buy Now ")],1)],1)],1)],1)}),t._v(" "),0===t.products.length?r("v-flex",[r("h1",[t._v("Ooops!")]),t._v(" "),r("h2",[t._v("No results Found for '"+t._s(this.$route.query.category||this.$route.query.search)+"' in our Store'!!")]),t._v(" "),r("h3",[t._v("Try Searching using another keyword or category")]),t._v(" "),r("h3",[r("v-btn",{attrs:{flat:"",to:"/products",color:"white"}},[t._v("Take me home")])],1)]):t._e()],2)],1)],1)],1)],1)],1);var o},a=[],s={render:o,staticRenderFns:a};e.a=s},60:function(t,e,r){"use strict";function o(t){r(61)}var a=r(27),s=r(62),i=r(3),n=o,c=i(a.a,s.a,!1,n,null,null);e.a=c.exports},61:function(t,e){},62:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",sm6:""}},[r("h1",[t._v(t._s(t._f("capitalize")(t.product.name))+"-"+t._s(t._f("capitalize")(t.product.color)))]),t._v(" "),r("img",{attrs:{src:t.product.src}})]),t._v(" "),r("v-flex",{attrs:{xs12:"",sm6:""}},[r("h1",[t._v("Description")]),t._v(" "),r("p",[t._v("\n        "+t._s(t._f("capitalize")(t.product.description))+"\n      ")])])],1),t._v(" "),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{staticClass:"mt-1"},[r("v-btn",{attrs:{round:"",block:"",large:"",color:"orange"}},[r("v-icon",[t._v("shopping_cart")]),t._v("Buy now")],1),t._v(" "),r("v-btn",{attrs:{round:"",block:"",small:"",color:"green",to:"/products"}},[t._v("Back")])],1)],1)],1)},a=[],s={render:o,staticRenderFns:a};e.a=s},63:function(t,e,r){"use strict";function o(t){r(64)}var a=r(28),s=r(104),i=r(3),n=o,c=i(a.a,s.a,!1,n,"data-v-79810e8c",null);e.a=c.exports},64:function(t,e){}},[44]);
//# sourceMappingURL=app.8d5e630cc8ec109193cc.js.map