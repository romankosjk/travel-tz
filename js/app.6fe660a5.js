(function(t){function e(e){for(var r,i,s=e[0],o=e[1],c=e[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(e);while(f.length)f.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],r=!0,s=1;s<a.length;s++){var o=a[s];0!==n[o]&&(r=!1)}r&&(l.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},l=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/travel-tz/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=o;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},1166:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=a("5c96"),l=a.n(n),i=a("5e55"),s=a.n(i),o=(a("0fae"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticStyle:{"min-height":"100%"}},[a("el-main",[a("div",{staticClass:"filter-container"},[a("div",{staticClass:"filter-container__sidebar"},[a("FiltersComponent",{attrs:{"max-price":t.max_price},on:{reset:function(e){return t.clearFilter()},apply:t.applyFilter}})],1),a("div",{staticClass:"filter-container__main",staticStyle:{"padding-left":"30px"}},[a("el-search-table-pagination",{attrs:{type:"local",data:t.hostelsData,"page-sizes":[3,10],columns:t.columns,"pagination-layout":"prev, pager, next"},scopedSlots:t._u([{key:"append",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.handleClick(e.row)}}},[t._v("Забронировать")])]}}])})],1)])])],1)}),c=[],u=(a("4de4"),a("7db0"),a("4160"),a("b0c0"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"filter-item mb-3 is-center"},[a("el-button",{staticClass:"mb-3",attrs:{type:"primary",round:""},on:{click:function(e){return t.resetFilter()}}},[t._v("Очистить фильтры")])],1),a("div",{staticClass:"filter-item mb-3"},[a("label",{staticClass:"filter-item__label"},[t._v("Страна")]),a("el-select",{attrs:{filterable:"",placeholder:"Select"},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}},t._l(t.options,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("div",{staticClass:"filter-item mb-3"},[a("label",{staticClass:"filter-item__label"},[t._v("Тип")]),a("el-select",{attrs:{multiple:"",placeholder:"Select"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},t._l(t.optionsType,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("div",{staticClass:"filter-item mb-3"},[a("label",{staticClass:"filter-item__label stars is-center"},[t._v("Звезды")]),a("el-checkbox-group",{attrs:{size:"medium"},model:{value:t.stars,callback:function(e){t.stars=e},expression:"stars"}},[a("el-checkbox",{attrs:{label:1}},[t._v("1 звезда")]),a("el-checkbox",{attrs:{label:2}},[t._v("2 звезды")]),a("el-checkbox",{attrs:{label:3}},[t._v("3 звезды")]),a("el-checkbox",{attrs:{label:4}},[t._v("4 звезды")]),a("el-checkbox",{attrs:{label:5}},[t._v("5 звезды")])],1)],1),a("div",{staticClass:"filter-item mb-3"},[a("label",{staticClass:"filter-item__label"},[t._v("Количесво отзывов от")]),a("el-input-number",{attrs:{min:0,max:1e3},model:{value:t.reviews_amount,callback:function(e){t.reviews_amount=e},expression:"reviews_amount"}})],1),a("div",{staticClass:"filter-item mb-3"},[a("label",{staticClass:"filter-item__label"},[t._v("Цена до")]),a("div",{staticClass:"filter-item__slider"},[a("span",[t._v("0")]),a("el-slider",{attrs:{max:t.maxPrice},model:{value:t.min_price,callback:function(e){t.min_price=e},expression:"min_price"}}),a("span",[t._v(t._s(t.maxPrice))])],1)]),a("div",{staticClass:"filter-item mb-3 is-center"},[a("el-button",{staticClass:"mb-3",attrs:{type:"primary",round:""},on:{click:function(e){return t.applyFilter()}}},[t._v("Применить фильтр")])],1)])}),p=[],f=(a("a9e3"),{name:"FiltersComponent",props:{maxPrice:{type:Number,default:0}},data:function(){return{options:[{value:"Греция",label:"Греция"},{value:"Украина",label:"Украина"},{value:"Германия",label:"Германия"}],optionsType:[{value:"Апартаменты",label:"Апартаменты"},{value:"Отель",label:"Отель"}],country:"",type:[],stars:[],reviews_amount:0,min_price:0}},methods:{resetFilter:function(){this.country="",this.type=[],this.stars=[],this.reviews_amount=0,this.min_price=0,this.$emit("reset")},applyFilter:function(){var t=this.country,e=this.type,a=this.stars,r=this.reviews_amount,n=this.min_price;this.$emit("apply",{country:t,type:e,stars:a,reviews_amount:r,min_price:n})}}}),m=f,b=(a("bee9"),a("2877")),h=Object(b["a"])(m,u,p,!1,null,null,null),v=h.exports,d=a("bc3a"),y=a.n(d);function _(){return y.a.get("/hostel.json")}var x={name:"App",components:{FiltersComponent:v},data:function(){return{hostelsData:[],hostelsDataFilter:[],columns:[{prop:"name",label:"Название",width:180},{prop:"description",label:"Описание",minWidth:180},{slotName:"append",label:"",width:160}],filters:[{prop:"country",type:"strong"},{prop:"type",type:"array"},{prop:"stars",type:"array"},{prop:"reviews_amount",type:"number"},{prop:"min_price",type:"number"}],max_price:0}},methods:{clearFilter:function(){this.applyFilter(null)},maxPrice:function(){var t=[];this.hostelsData.forEach((function(e){t.push(parseInt(e.min_price))})),this.max_price=Math.max.apply(Math,t)},applyFilter:function(t){var e=this;this.hostelsData=this.hostelsDataFilter,null!==t&&this.filters.forEach((function(a){"strong"===a.type&&(e.hostelsData=e.hostelsData.filter((function(e){return!t[a.prop].length||t[a.prop]===e[a.prop]}))),"number"===a.type&&(e.hostelsData=e.hostelsData.filter((function(e){return!(t[a.prop]>0)||t[a.prop]<=e[a.prop]}))),"array"===a.type&&(e.hostelsData=e.hostelsData.filter((function(e){return!t[a.prop].length||t[a.prop].find((function(t){return t===e[a.prop]}))})))}))},handleClick:function(t){var e=this;this.$alert("Забронировать для Вас отель: ".concat(t.name),"Оформить бронь",{confirmButtonText:"OK",callback:function(){e.$message({type:"success",message:"Отель: ".concat(t.name," забронирован")})}})}},created:function(){var t=this;_().then((function(e){t.hostelsData=e.data.hotels,t.hostelsDataFilter=e.data.hotels,t.maxPrice()}))}},g=x,k=(a("034f"),Object(b["a"])(g,o,c,!1,null,null,null)),C=k.exports;r["default"].use(l.a),r["default"].use(s.a),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(C)}}).$mount("#app")},"85ec":function(t,e,a){},bee9:function(t,e,a){"use strict";var r=a("1166"),n=a.n(r);n.a}});
//# sourceMappingURL=app.6fe660a5.js.map