(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9bd4e922"],{"466d":function(t,e,a){"use strict";var o=a("d784"),i=a("825a"),n=a("50c4"),s=a("1d80"),c=a("8aa5"),r=a("14c3");o("match",1,(function(t,e,a){return[function(e){var a=s(this),o=void 0==e?void 0:e[t];return void 0!==o?o.call(e,a):new RegExp(e)[t](String(a))},function(t){var o=a(e,t,this);if(o.done)return o.value;var s=i(t),d=String(this);if(!s.global)return r(s,d);var l=s.unicode;s.lastIndex=0;var u,p=[],m=0;while(null!==(u=r(s,d))){var v=String(u[0]);p[m]=v,""===v&&(s.lastIndex=c(d,n(s.lastIndex),l)),m++}return 0===m?null:p}]}))},"4d63":function(t,e,a){var o=a("83ab"),i=a("da84"),n=a("94ca"),s=a("7156"),c=a("9bf2").f,r=a("241c").f,d=a("44e7"),l=a("ad6d"),u=a("9f7f"),p=a("6eeb"),m=a("d039"),v=a("69f3").set,h=a("2626"),f=a("b622"),w=f("match"),g=i.RegExp,P=g.prototype,b=/a/g,_=/a/g,y=new g(b)!==b,x=u.UNSUPPORTED_Y,k=o&&n("RegExp",!y||x||m((function(){return _[w]=!1,g(b)!=b||g(_)==_||"/a/i"!=g(b,"i")})));if(k){var C=function(t,e){var a,o=this instanceof C,i=d(t),n=void 0===e;if(!o&&i&&t.constructor===C&&n)return t;y?i&&!n&&(t=t.source):t instanceof C&&(n&&(e=l.call(t)),t=t.source),x&&(a=!!e&&e.indexOf("y")>-1,a&&(e=e.replace(/y/g,"")));var c=s(y?new g(t,e):g(t,e),o?this:P,C);return x&&a&&v(c,{sticky:a}),c},$=function(t){t in C||c(C,t,{configurable:!0,get:function(){return g[t]},set:function(e){g[t]=e}})},D=r(g),N=0;while(D.length>N)$(D[N++]);P.constructor=C,C.prototype=P,p(i,"RegExp",C)}h("RegExp")},"6ff1":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"modal",on:{click:function(e){return e.target!==e.currentTarget?null:t.$emit("close")}}},[a("div",{staticClass:"modal-del"},[a("div",{staticClass:"modal-del-header"},[t._v(" 刪除商品 ")]),a("div",{staticClass:"modal-del-body"},[t._v(" 是否確認刪除 "),a("span",[t._v(t._s(t.item.title))]),t._v(" 商品(刪除後將無法復原) ")]),a("div",{staticClass:"modal-del-footer"},[a("button",{attrs:{type:"button"},on:{click:function(e){t.$emit("close"),t.delCart()}}},[t._v(" 確認刪除 ")])])])])])},i=[],n=(a("99af"),a("5530")),s=a("2f62"),c={props:["item","isDel","token","isCoupon"],methods:{delCart:function(){var t,e=this;this.$store.state.isLoading=!0,t=!0===this.isDel?"".concat("https://course-ec-api.hexschool.io/api/").concat("6b69171f-d486-488a-beaf-ee85eb21fa24","/admin/ec/product/").concat(this.item.id):!0===this.isCoupon?"".concat("https://course-ec-api.hexschool.io/api/").concat("6b69171f-d486-488a-beaf-ee85eb21fa24","/admin/ec/coupon/").concat(this.item.id):"".concat("https://course-ec-api.hexschool.io/api/").concat("6b69171f-d486-488a-beaf-ee85eb21fa24","/ec/shopping/").concat(this.item.id),this.axios.delete(t).then((function(){e.$emit("update"),e.$bus.$emit("cartUpdate")}))}},computed:Object(n["a"])({},Object(s["c"])(["isLoading"]))},r=c,d=a("2877"),l=Object(d["a"])(r,o,i,!1,null,null,null);e["a"]=l.exports},7156:function(t,e,a){var o=a("861d"),i=a("d2bb");t.exports=function(t,e,a){var n,s;return i&&"function"==typeof(n=e.constructor)&&n!==a&&o(s=n.prototype)&&s!==a.prototype&&i(t,s),t}},"774c":function(t,e,a){"use strict";a("4d63"),a("ac1f"),a("25f0"),a("466d");e["a"]={methods:{getCookie:function(t){var e=document.cookie.match(new RegExp("(^| )"+t+"=([^;]*)(;|$)"));return null!=e?unescape(e[2]):null},delCookie:function(t){var e=new Date;e.setTime(e.getTime()-1);var a=this.getCookie(t);null!=a&&(document.cookie=t+"="+a+";expires="+e.toGMTString())}}}},"7b7d":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"back-products"},[a("h2",{staticClass:"back-products-title"},[t._v("產品管理列表")]),a("div",{staticClass:"container"},[a("div",{staticClass:"back-products-add"},[a("button",{attrs:{type:"button"},on:{click:function(e){return t.showModal("new")}}},[t._v("新增產品")])]),a("table",[t._m(0),t._l(t.data,(function(e){return a("tr",{key:e.id},[a("td",{staticStyle:{"text-align":"left"}},[t._v(t._s(e.category))]),a("td",{staticStyle:{"line-height":"1.4"}},[t._v(t._s(e.title))]),a("td",[t._v(t._s(t._f("currency")(e.origin_price)))]),a("td",[t._v(t._s(t._f("currency")(e.price)))]),a("td",[t._v(t._s(e.options.capacity))]),a("td",[e.enabled?a("span",{staticStyle:{color:"#89dd28"}},[t._v("啟用")]):a("span",{staticStyle:{color:"#ff1b1b"}},[t._v("未啟用")])]),a("td",[a("div",{staticClass:"back-products-btn"},[a("button",{staticClass:"back-products-edit",attrs:{type:"button"},on:{click:function(a){return t.showModal("edit",e)}}},[t._v(" 編輯 ")]),a("button",{staticClass:"back-products-del",attrs:{type:"button"},on:{click:function(a){return t.showModal("del",e)}}},[t._v(" 刪除 ")])])])])}))],2),a("productModal",{ref:"modal",class:{active:t.showProductModal},attrs:{data:t.newData,token:t.token,"is-new":t.isNew},on:{close:function(e){t.showProductModal=!1},update:t.getProducts}}),a("delModel",{class:{active:t.showDelModal},attrs:{item:t.newData,token:t.token,"is-del":t.isDel},on:{close:function(e){t.showDelModal=!1},update:function(e){return t.getProducts()}}}),a("pagination",{attrs:{pages:t.pages},on:{update:t.getProducts}})],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",{attrs:{width:"15%"}},[t._v("分類")]),a("th",{attrs:{width:"25%"}},[t._v("產品")]),a("th",{attrs:{width:"10%"}},[t._v("原價")]),a("th",{attrs:{width:"10%"}},[t._v("售價")]),a("th",{attrs:{width:"10%"}},[t._v("容量")]),a("th",{attrs:{width:"15%"}},[t._v("是否上架")]),a("th",{attrs:{width:"15%"}},[t._v("編輯")])])}],n=(a("99af"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"modal",on:{click:function(e){return e.target!==e.currentTarget?null:t.$emit("close")}}},[a("div",{staticClass:"modal-add"},[a("h2",{staticClass:"modal-add-header"},[t._v(" "+t._s(!0===t.isNew?"新增商品":"修改商品")+" ")]),a("div",{staticClass:"modal-add-body"},[a("div",{staticClass:"modal-add-img"},[a("label",{attrs:{for:"creatImage"}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newProduct.imageUrl[0],expression:"newProduct.imageUrl[0]"}],attrs:{type:"text",id:"creatImage",placeholder:"請輸入圖片連結"},domProps:{value:t.newProduct.imageUrl[0]},on:{input:function(e){e.target.composing||t.$set(t.newProduct.imageUrl,0,e.target.value)}}}),a("img",{attrs:{src:t.newProduct.imageUrl[0]}})]),a("div",{staticClass:"modal-add-info"},[a("div",{staticClass:"modal-add-whole"},[a("div",{staticClass:"modal-add-item"},[a("label",{attrs:{for:"creatTitle"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newProduct.title,expression:"newProduct.title"}],attrs:{type:"text",id:"creatTitle",placeholder:"請輸入標題"},domProps:{value:t.newProduct.title},on:{input:function(e){e.target.composing||t.$set(t.newProduct,"title",e.target.value)}}})])]),a("div",{staticClass:"modal-add-split"},[a("div",{staticClass:"modal-add-item"},[a("label",{attrs:{for:"creatWinery"}},[t._v("酒莊")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newProduct.options.winery,expression:"newProduct.options.winery"}],attrs:{type:"text",id:"creatWinery",placeholder:"請輸入酒莊"},domProps:{value:t.newProduct.options.winery},on:{input:function(e){e.target.composing||t.$set(t.newProduct.options,"winery",e.target.value)}}})]),a("div",{staticClass:"modal-add-item"},[a("label",{attrs:{for:"creatPlace"}},[t._v("產地")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newProduct.options.place,expression:"newProduct.options.place"}],attrs:{type:"text",id:"creatPlace",placeholder:"請輸入產地"},domProps:{value:t.newProduct.options.place},on:{input:function(e){e.target.composing||t.$set(t.newProduct.options,"place",e.target.value)}}})])]),a("div",{staticClass:"modal-add-split"},[a("div",{staticClass:"modal-add-item"},[a("label",{attrs:{for:"creatYear"}},[t._v("年份")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newProduct.options.year,expression:"newProduct.options.year"}],attrs:{type:"text",id:"creatYear",placeholder:"請輸入年份"},domProps:{value:t.newProduct.options.year},on:{input:function(e){e.target.composing||t.$set(t.newProduct.options,"year",e.target.value)}}})]),a("div",{staticClass:"modal-add-item"},[a("label",{attrs:{for:"creatCapacity"}},[t._v("容量")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newProduct.options.capacity,expression:"newProduct.options.capacity"}],attrs:{type:"text",id:"creatCapacity",placeholder:"請輸入容量"},domProps:{value:t.newProduct.options.capacity},on:{input:function(e){e.target.composing||t.$set(t.newProduct.options,"capacity",e.target.value)}}})])]),a("div",{staticClass:"modal-add-split"},[a("div",{staticClass:"modal-add-item"},[a("label",{attrs:{for:"creatCategory"}},[t._v("分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newProduct.category,expression:"newProduct.category"}],attrs:{type:"text",id:"creatCategory",placeholder:"請輸入分類"},domProps:{value:t.newProduct.category},on:{input:function(e){e.target.composing||t.$set(t.newProduct,"category",e.target.value)}}})]),a("div",{staticClass:"modal-add-item"},[a("label",{attrs:{for:"creatUnit"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newProduct.unit,expression:"newProduct.unit"}],attrs:{type:"text",id:"creatUnit",placeholder:"請輸入單位"},domProps:{value:t.newProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.newProduct,"unit",e.target.value)}}})])]),a("div",{staticClass:"modal-add-split"},[a("div",{staticClass:"modal-add-item"},[a("label",{attrs:{for:"creatOrigin"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newProduct.origin_price,expression:"newProduct.origin_price"}],attrs:{type:"number",id:"creatOrigin",placeholder:"請輸入原價"},domProps:{value:t.newProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.newProduct,"origin_price",e.target.value)}}})]),a("div",{staticClass:"modal-add-item"},[a("label",{attrs:{for:"creatPrice"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newProduct.price,expression:"newProduct.price"}],attrs:{type:"number",id:"creatPrice",placeholder:"請輸入售價"},domProps:{value:t.newProduct.price},on:{input:function(e){e.target.composing||t.$set(t.newProduct,"price",e.target.value)}}})])]),a("div",{staticClass:"modal-add-whole"},[a("div",{staticClass:"modal-add-item"},[a("label",{attrs:{for:"creatDes"}},[t._v("品牌描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newProduct.description,expression:"newProduct.description"}],attrs:{id:"creatDes",rows:"3"},domProps:{value:t.newProduct.description},on:{input:function(e){e.target.composing||t.$set(t.newProduct,"description",e.target.value)}}})])]),a("div",{staticClass:"modal-add-whole"},[a("div",{staticClass:"modal-add-item"},[a("label",{attrs:{for:"creatContent"}},[t._v("產品敘述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newProduct.content,expression:"newProduct.content"}],attrs:{id:"creatContent",rows:"3"},domProps:{value:t.newProduct.content},on:{input:function(e){e.target.composing||t.$set(t.newProduct,"content",e.target.value)}}})])]),a("div",{staticClass:"modal-add-checkbox"},[a("div",{staticClass:"modal-add-item"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newProduct.enabled,expression:"newProduct.enabled"}],attrs:{type:"checkbox",id:"creatEnabled"},domProps:{checked:Array.isArray(t.newProduct.enabled)?t._i(t.newProduct.enabled,null)>-1:t.newProduct.enabled},on:{change:function(e){var a=t.newProduct.enabled,o=e.target,i=!!o.checked;if(Array.isArray(a)){var n=null,s=t._i(a,n);o.checked?s<0&&t.$set(t.newProduct,"enabled",a.concat([n])):s>-1&&t.$set(t.newProduct,"enabled",a.slice(0,s).concat(a.slice(s+1)))}else t.$set(t.newProduct,"enabled",i)}}}),a("label",{attrs:{for:"creatEnabled"}},[t._v("是否啟用")])]),a("div",{staticClass:"modal-add-item"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newProduct.options.popular,expression:"newProduct.options.popular"}],attrs:{type:"checkbox",id:"creatPopular"},domProps:{checked:Array.isArray(t.newProduct.options.popular)?t._i(t.newProduct.options.popular,null)>-1:t.newProduct.options.popular},on:{change:function(e){var a=t.newProduct.options.popular,o=e.target,i=!!o.checked;if(Array.isArray(a)){var n=null,s=t._i(a,n);o.checked?s<0&&t.$set(t.newProduct.options,"popular",a.concat([n])):s>-1&&t.$set(t.newProduct.options,"popular",a.slice(0,s).concat(a.slice(s+1)))}else t.$set(t.newProduct.options,"popular",i)}}}),a("label",{attrs:{for:"creatPopular"}},[t._v("熱門商品")])])])])]),a("div",{staticClass:"modal-add-footer"},[a("button",{attrs:{type:"button"},on:{click:t.updateProduct}},[t._v("確認送出")])])])])])}),s=[],c={props:["data","token","isNew"],data:function(){return{newProduct:{imageUrl:[""],options:{}}}},methods:{getData:function(t,e){var a=this,o=this.$loading.show(),i="".concat("https://course-ec-api.hexschool.io/api/").concat("6b69171f-d486-488a-beaf-ee85eb21fa24","/ec/product/").concat(t);switch(e){case"new":this.newProduct={imageUrl:[""],options:{}},o.hide();break;default:this.axios.get(i).then((function(t){a.newProduct=t.data.data,o.hide()}));break}},updateProduct:function(){var t,e,a=this,o=this.$loading.show();!1===this.isNew?(t="".concat("https://course-ec-api.hexschool.io/api/").concat("6b69171f-d486-488a-beaf-ee85eb21fa24","/admin/ec/product/").concat(this.newProduct.id),e="patch"):(t="".concat("https://course-ec-api.hexschool.io/api/").concat("6b69171f-d486-488a-beaf-ee85eb21fa24","/admin/ec/product"),e="post"),this.axios.defaults.headers.common.Authorization="Bearer ".concat(this.token),this.axios[e](t,this.newProduct).then((function(){a.$emit("update"),a.$emit("close"),o.hide()})).catch((function(){a.$emit("close"),o.hide()}))}}},r=c,d=a("2877"),l=Object(d["a"])(r,n,s,!1,null,null,null),u=l.exports,p=a("6ff1"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container pagination-wrap"},[a("ul",{staticClass:"pagination"},[a("li",[a("a",{class:{disabled:1===t.pages.current_page},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.emitPages(t.pages.current_page-1)}}},[a("i",{staticClass:"fas fa-angle-left"})])]),t._l(t.pages.total_pages,(function(e,o){return a("li",{key:o},[a("a",{class:{active:t.pages.current_page===o+1},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.emitPages(o+1)}}},[t._v(" "+t._s(o+1)+" ")])])})),a("li",[a("a",{class:{disabled:t.pages.current_page===t.pages.total_pages},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.emitPages(t.pages.current_page+1)}}},[a("i",{staticClass:"fas fa-angle-right"})])])],2)])},v=[],h={props:["pages"],methods:{emitPages:function(t){this.$emit("update",t)}}},f=h,w=Object(d["a"])(f,m,v,!1,null,null,null),g=w.exports,P=a("774c"),b={data:function(){return{data:[],token:"",newData:{product:{title:""}},pages:{},isNew:!1,showProductModal:!1,showDelModal:!1,isDel:!0}},mixins:[P["a"]],components:{productModal:u,delModel:p["a"],pagination:g},created:function(){this.token=this.getCookie("hexToken"),this.checkToken(),this.getProducts()},methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=this.$loading.show(),o="".concat("https://course-ec-api.hexschool.io/api/").concat("6b69171f-d486-488a-beaf-ee85eb21fa24","/admin/ec/products?page=").concat(e);this.axios.get(o).then((function(e){t.data=e.data.data,t.pages=e.data.meta.pagination,a.hide()})).catch((function(){a.hide()}))},showModal:function(t,e){switch(t){case"new":this.isNew=!0,this.newData={imageUrl:[""],options:{}},this.$refs.modal.getData(this.newData.id,t),this.showProductModal=!0;break;case"edit":this.newData=e,this.isNew=!1,this.$refs.modal.getData(this.newData.id,t),this.showProductModal=!0;break;default:this.newData=e,this.showDelModal=!0;break}},checkToken:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io/api/","auth/check"),a={api_token:this.token};this.axios.post(e,a).then((function(){})).catch((function(){t.$router.push("/login")}))}}},_=b,y=Object(d["a"])(_,o,i,!1,null,null,null);e["default"]=y.exports}}]);
//# sourceMappingURL=chunk-9bd4e922.d7a63190.js.map