(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-001ae302"],{"1ab6":function(t,a,e){"use strict";e("c975"),e("d81d"),e("a434");var i=e("1157"),n=e.n(i);a["a"]={data:function(){return{stareData:[]}},methods:{addStared:function(t){if(t.stared=!t.stared,t.stared)this.stareData.push({title:t.title});else{var a=n.a.map(this.stareData,(function(t){return t.title})).indexOf(t.title);this.stareData.splice(a,1)}localStorage.setItem("favoriteWine",JSON.stringify(this.stareData))}}}},"3ef9":function(t,a,e){"use strict";e("a9e3");a["a"]={methods:{checkNum:function(t){t.quantity=Number(t.quantity),(isNaN(t.quantity)||t.quantity<1)&&(t.quantity=1)}}}},5899:function(t,a){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,a,e){var i=e("1d80"),n=e("5899"),r="["+n+"]",s=RegExp("^"+r+r+"*"),o=RegExp(r+r+"*$"),c=function(t){return function(a){var e=String(i(a));return 1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(o,"")),e}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,a,e){var i=e("861d"),n=e("d2bb");t.exports=function(t,a,e){var r,s;return n&&"function"==typeof(r=a.constructor)&&r!==e&&i(s=r.prototype)&&s!==e.prototype&&n(t,s),t}},a434:function(t,a,e){"use strict";var i=e("23e7"),n=e("23cb"),r=e("a691"),s=e("50c4"),o=e("7b0b"),c=e("65f0"),u=e("8418"),f=e("1dde"),d=e("ae40"),p=f("splice"),l=d("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,v=Math.min,g=9007199254740991,m="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!p||!l},{splice:function(t,a){var e,i,f,d,p,l,y=o(this),b=s(y.length),C=n(t,b),_=arguments.length;if(0===_?e=i=0:1===_?(e=0,i=b-C):(e=_-2,i=v(h(r(a),0),b-C)),b+e-i>g)throw TypeError(m);for(f=c(y,i),d=0;d<i;d++)p=C+d,p in y&&u(f,d,y[p]);if(f.length=i,e<i){for(d=C;d<b-i;d++)p=d+i,l=d+e,p in y?y[l]=y[p]:delete y[l];for(d=b;d>b-i+e;d--)delete y[d-1]}else if(e>i)for(d=b-i;d>C;d--)p=d+i-1,l=d+e-1,p in y?y[l]=y[p]:delete y[l];for(d=0;d<e;d++)y[d+C]=arguments[d+2];return y.length=b-i+e,f}})},a9e3:function(t,a,e){"use strict";var i=e("83ab"),n=e("da84"),r=e("94ca"),s=e("6eeb"),o=e("5135"),c=e("c6b6"),u=e("7156"),f=e("c04e"),d=e("d039"),p=e("7c73"),l=e("241c").f,h=e("06cf").f,v=e("9bf2").f,g=e("58a8").trim,m="Number",y=n[m],b=y.prototype,C=c(p(b))==m,_=function(t){var a,e,i,n,r,s,o,c,u=f(t,!1);if("string"==typeof u&&u.length>2)if(u=g(u),a=u.charCodeAt(0),43===a||45===a){if(e=u.charCodeAt(2),88===e||120===e)return NaN}else if(48===a){switch(u.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+u}for(r=u.slice(2),s=r.length,o=0;o<s;o++)if(c=r.charCodeAt(o),c<48||c>n)return NaN;return parseInt(r,i)}return+u};if(r(m,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var x,N=function(t){var a=arguments.length<1?0:t,e=this;return e instanceof N&&(C?d((function(){b.valueOf.call(e)})):c(e)!=m)?u(new y(_(a)),e,N):_(a)},I=i?l(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;I.length>k;k++)o(y,x=I[k])&&!o(N,x)&&v(N,x,h(y,x));N.prototype=b,b.constructor=N,s(n,m,N)}},b27a:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"favorite"},[e("div",{staticClass:"container"},[e("div",{staticClass:"favorite-header"},[e("h2",[t._v("我的收藏")]),t.data.length>=1?e("span",[t._v(t._s(t.data.length)+"件商品")]):e("span",[t._v("沒有收藏的商品")])]),0!==t.data.length?e("div",{staticClass:"favorite-main"},t._l(t.data,(function(a){return e("div",{key:a.id,staticClass:"card-wrap",on:{click:function(e){return e.stopPropagation(),t.goDetail(a)}}},[e("div",{staticClass:"card-favorite",on:{click:function(e){return e.stopPropagation(),t.addStared(a)}}},[1==a.stared?e("i",{staticClass:"fas fa-bookmark"}):e("i",{staticClass:"far fa-bookmark"})]),e("div",{staticClass:"card-img"},[e("img",{attrs:{src:a.imageUrl}})]),e("div",{staticClass:"card-txt"},[e("h4",{staticClass:"item-winery"},[t._v(t._s(a.options.winery))]),e("h3",{staticClass:"item-title"},[t._v(t._s(a.title))])]),e("div",{staticClass:"card-info"},[e("span",{staticClass:"item-info"},[t._v(" "+t._s(a.options.year)+" | "+t._s(a.options.capacity)+" | "+t._s(a.category)+" ")])]),e("div",{staticClass:"card-box"},[e("div",{staticClass:"card-price"},[e("span",{staticClass:"sale-price"},[t._v("$ "+t._s(t._f("currency")(a.price)))]),e("span",{staticClass:"price"},[t._v("$ "+t._s(t._f("currency")(a.origin_price)))])]),e("div",{staticClass:"card-quantity"},[e("button",{attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),t.quantity(a,"reduce")}}},[e("i",{staticClass:"fas fa-minus"})]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.quantity,expression:"item.quantity"}],attrs:{type:"text"},domProps:{value:a.quantity},on:{keyup:function(e){return t.checkNum(a)},click:function(t){t.stopPropagation()},input:function(e){e.target.composing||t.$set(a,"quantity",e.target.value)}}}),e("button",{attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),t.quantity(a,"incre")}}},[e("i",{staticClass:"fas fa-plus"})])])]),e("div",{staticClass:"card-btn"},[e("a",{staticClass:"btn",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.addCart(a)}}},[t._v(" 加入購物車 ")])])])})),0):e("div",{staticClass:"favorite-main"},[e("h3",{staticClass:"favorite-main-empty"},[t._v("您的收藏列表目前是空的")])])])])},n=[],r=(e("99af"),e("4160"),e("159b"),e("c36d")),s=e("1ab6"),o=e("3ef9"),c={data:function(){return{data:[]}},mixins:[s["a"],r["a"],o["a"]],created:function(){this.getFavorite()},methods:{getFavorite:function(){var t=this,a=this.$loading.show(),e="".concat("https://course-ec-api.hexschool.io/api/").concat("6b69171f-d486-488a-beaf-ee85eb21fa24","/ec/products?paged=100");this.axios.get(e).then((function(e){var i=e.data.data,n=[];t.stareData=JSON.parse(localStorage.getItem("favoriteWine"))||[],i.forEach((function(a){t.stareData.forEach((function(e){a.title===e.title&&(n.push(a),t.$set(a,"stared",!0),t.$set(a,"quantity",1))}))})),t.data=n,a.hide()})).catch((function(){a.hide()}))},goDetail:function(t){this.$router.push({path:"/product",query:{wineId:t.id}})},quantity:function(t,a){switch(a){case"incre":t.quantity++;break;default:if(1===t.quantity)return;t.quantity-=1;break}}}},u=c,f=e("2877"),d=Object(f["a"])(u,i,n,!1,null,null,null);a["default"]=d.exports},c36d:function(t,a,e){"use strict";e("99af");a["a"]={methods:{addCart:function(t,a){var e=this;this.$store.state.isLoading=!0;var i="".concat("https://course-ec-api.hexschool.io/api/").concat("6b69171f-d486-488a-beaf-ee85eb21fa24","/ec/shopping");this.spannerStatus=t.id;var n={product:t.id,quantity:t.quantity};this.axios.post(i,n).then((function(){"buy"===a?e.$router.push("/cart"):e.$swal.fire({position:"top-end",icon:"success",title:"成功加入購物車",showConfirmButton:!1,timer:1e3}),e.spannerStatus="",e.$store.dispatch("getCartData"),e.$store.state.isLoading=!1})).catch((function(){"buy"===a?(i="".concat("https://course-ec-api.hexschool.io/api/").concat("6b69171f-d486-488a-beaf-ee85eb21fa24","/ec/shopping"),e.axios.patch(i,n).then((function(){e.$router.push("/cart")})).catch((function(){e.$router.push("/cart")}))):(e.$swal.fire({position:"top-end",icon:"error",title:"重複加入購物車",showConfirmButton:!1,timer:1e3}),e.$store.state.isLoading=!1),e.spannerStatus=""}))}}}},c975:function(t,a,e){"use strict";var i=e("23e7"),n=e("4d64").indexOf,r=e("a640"),s=e("ae40"),o=[].indexOf,c=!!o&&1/[1].indexOf(1,-0)<0,u=r("indexOf"),f=s("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:c||!u||!f},{indexOf:function(t){return c?o.apply(this,arguments)||0:n(this,t,arguments.length>1?arguments[1]:void 0)}})},d81d:function(t,a,e){"use strict";var i=e("23e7"),n=e("b727").map,r=e("1dde"),s=e("ae40"),o=r("map"),c=s("map");i({target:"Array",proto:!0,forced:!o||!c},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-001ae302.99d294ca.js.map