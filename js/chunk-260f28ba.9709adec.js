(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-260f28ba"],{"13d5":function(t,a,e){"use strict";var c=e("23e7"),r=e("d58f").left,s=e("a640"),i=e("ae40"),n=s("reduce"),o=i("reduce",{1:0});c({target:"Array",proto:!0,forced:!n||!o},{reduce:function(t){return r(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"2d07":function(t,a,e){"use strict";e.r(a);var c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cart-complete"},[e("loading",{attrs:{loader:"dots",active:t.isLoading,"background-color":"rgb(173, 92, 0)"},on:{"update:active":function(a){t.isLoading=a}}}),t.data.products?e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"cart-complete-products"},[e("h3",[t._v("訂單商品")]),t._l(t.data.products,(function(a,c){return e("div",{key:c,staticClass:"cart-complete-item"},[e("span",[t._v(t._s(a.product.title))]),e("span",{staticClass:"quantity"},[t._v("x "+t._s(a.quantity))])])})),e("div",{staticClass:"cart-complete-products-price"},[e("span",[t._v("總計")]),t.totalMoney===t.data.amount?e("span",[t._v(" "+t._s(t._f("currency")(t.totalMoney))+" ")]):e("span",[t._v(" "+t._s(t._f("currency")(Math.floor(t.totalMoney-t.data.amount)))+" ")])])],2),e("div",{staticClass:"cart-complete-info"},[e("div",{staticClass:"cart-complete-item"},[e("h3",[t._v("姓名")]),e("p",[t._v(t._s(t.data.user.name))])]),e("div",{staticClass:"cart-complete-item"},[e("h3",[t._v("信箱")]),e("p",[t._v(t._s(t.data.user.email))])]),e("div",{staticClass:"cart-complete-item"},[e("h3",[t._v("地址")]),e("p",[t._v(t._s(t.data.user.address))])]),t._m(1)]),e("div",{staticClass:"cart-complete-btn"},[e("a",{staticClass:"btn",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.continueShopping(a)}}},[t._v(" 繼續購物 "),e("i",{staticClass:"fas fa-angle-right"})])])]):t._e()],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cart-complete-header"},[e("h2",[t._v("付款成功")]),e("span",[t._v("您好，以下是您的交易資訊")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cart-complete-item"},[e("h3",[t._v("付款狀態")]),e("p",{staticStyle:{color:"green"}},[t._v("已完成付款")])])}],s=(e("99af"),e("13d5"),e("5530")),i=e("2f62"),n={data:function(){return{data:{}}},created:function(){var t=this.$route.query.orderId;this.getOrder(t),this.getCartData()},methods:Object(s["a"])(Object(s["a"])({},Object(i["b"])(["getCartData"])),{},{getOrder:function(t){var a=this;this.$store.state.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api/").concat("6b69171f-d486-488a-beaf-ee85eb21fa24","/ec/orders/").concat(t);this.axios.get(e).then((function(t){a.data=t.data.data,a.$store.state.isLoading=!1})).catch((function(){a.$store.state.isLoading=!1}))},continueShopping:function(){this.$router.push("/products")}}),computed:Object(s["a"])(Object(s["a"])({},Object(i["c"])(["isLoading"])),{},{totalMoney:function(){var t=this.data.products,a=t.reduce((function(t,a){return t+a.product.price*a.quantity}),0);return a}})},o=n,u=e("2877"),d=Object(u["a"])(o,c,r,!1,null,null,null);a["default"]=d.exports},d58f:function(t,a,e){var c=e("1c0b"),r=e("7b0b"),s=e("44ad"),i=e("50c4"),n=function(t){return function(a,e,n,o){c(e);var u=r(a),d=s(u),l=i(u.length),p=t?l-1:0,f=t?-1:1;if(n<2)while(1){if(p in d){o=d[p],p+=f;break}if(p+=f,t?p<0:l<=p)throw TypeError("Reduce of empty array with no initial value")}for(;t?p>=0:l>p;p+=f)p in d&&(o=e(o,d[p],p,u));return o}};t.exports={left:n(!1),right:n(!0)}}}]);
//# sourceMappingURL=chunk-260f28ba.9709adec.js.map