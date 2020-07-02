(function(e){function t(t){for(var a,o,i=t[0],c=t[1],u=t[2],p=0,f=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},s=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/Aevzag/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"001b":function(e,t,n){},"0477":function(e,t,n){"use strict";var a=n("9d27"),r=n.n(a);r.a},"07c1":function(e,t,n){},"0c05":function(e,t,n){"use strict";var a=n("07c1"),r=n.n(a);r.a},1355:function(e,t,n){},"15c5":function(e,t,n){},"33a7":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},["Home"!==e.$route.name?n("Header"):e._e(),n("router-view")],1)},s=[],o=(n("b0c0"),n("96cf"),n("1da1")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"root"}},[n("div",{staticClass:"section"},[n("div",{staticClass:"panel-horizontal"},[n("img",{attrs:{src:e.flag,draggable:"false",alt:"flag"}}),n("button",{on:{click:function(t){return e.navigate("Home")}}},[n("span",{staticClass:"icon"},[e._v("arrow_back")])]),n("h2",[e._v(e._s(e.$store.state.language))])]),n("div",{staticClass:"panel-horizontal scroll-hidden"},e._l(e.menus,(function(t,a){return n("button",{key:a,class:{highlight:e.$route.name===t.title},on:{click:function(n){return e.navigate(t.title)}}},[n("span",{staticClass:"icon"},[e._v(e._s(t.icon))]),n("p",[e._v(e._s(t.title))])])})),0)])])},c=[],u={name:"Header",data:function(){return{menus:[{title:"Phonology",icon:"audiotrack"},{title:"Converter",icon:"sync_alt"},{title:"Phrasebook",icon:"chat"}]}},computed:{flag:function(){return this.$store.getters.languageRoot+"flag.png"}},methods:{navigate:function(e){this.$route.name!==e&&this.$router.push({name:e,params:{lang:this.$route.params.lang}})}}},l=u,p=(n("5ca4"),n("2877")),f=Object(p["a"])(l,i,c,!1,null,"5a0aa79d",null),h=f.exports,m={name:"App",components:{Header:h},data:function(){return{language:void 0}},watch:{"$route.params.lang":{handler:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.$route.params.lang,n&&n!==e.$store.state.language&&e.$store.dispatch("loadLanguage",n);case 2:case"end":return t.stop()}}),t)})))()},immediate:!0},"$route.path":{handler:function(){this.$route.name&&(localStorage.url=this.$route.path)}}},created:function(){this.$store.dispatch("loadCatalogue"),this.$route.name&&"Home"!==this.$route.name||this.$router.push(localStorage.url&&localStorage.url!==this.$route.path?{path:localStorage.url}:{name:"Home"})}},d=m,g=(n("5c0b"),Object(p["a"])(d,r,s,!1,null,null,null)),v=g.exports,y=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.phonemes&&e.lects?n("div",{staticClass:"section"},[n("div",{staticClass:"panel scroll"},[n("QueryList",{attrs:{tags:e.lects},on:{query:function(t){e.lectQuery=t}}}),n("PhoneticTable",{attrs:{selected:e.selected,phonemes:e.vowels,featureQuery:e.featureQuery,lectQuery:e.lectQuery},on:{phoneme:function(t){return e.select(t)}}}),n("PhoneticTable",{attrs:{selected:e.selected,phonemes:e.consonants,featureQuery:e.featureQuery,lectQuery:e.lectQuery},on:{phoneme:function(t){return e.select(t)}}}),n("QueryInput",{on:{query:function(t){e.featureQuery=t}}})],1),n("PhonemeDetails",{attrs:{phoneme:e.phonemes[e.selected]}})],1):e._e()},_=[],x=(n("4de4"),n("caad"),n("ac1f"),n("2532"),n("5319"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel-horizontal-dense scroll"},[n("button",{staticClass:"small round",on:{click:e.reset}},[n("span",{staticClass:"icon-small"},[e._v("clear")])]),e._l(e.tags,(function(t,a){return n("QueryParam",{key:a,attrs:{text:t},model:{value:e.values[a],callback:function(t){e.$set(e.values,a,t)},expression:"values[i]"}})}))],2)}),w=[],C=(n("cb29"),n("13d5"),n("d3b7"),n("ddb0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"small round",class:{"highlight-confirm":1===e.value,"highlight-alert":-1===e.value},on:{click:e.update}},[n("p",[e._v(e._s(e.text))])])}),$=[],k={name:"QueryParam",props:["text","value"],model:{prop:"value",event:"update"},methods:{update:function(){this.$emit("update",(this.value+2)%3-1)}}},j=k,O=Object(p["a"])(j,C,$,!1,null,null,null),P=O.exports,T={name:"QueryList",components:{QueryParam:P},props:["tags"],data:function(){return{values:[]}},computed:{result:function(){var e=this;return this.tags.reduce((function(t,n,a){return e.values[a]&&(t[n]=e.values[a]>0),t}),{})}},watch:{result:{handler:function(){this.$emit("query",this.result)},immediate:!0},tags:{handler:function(){this.reset()},immediate:!0}},methods:{reset:function(){this.values=new Array(this.tags.length).fill(0)}}},E=T,Q=Object(p["a"])(E,x,w,!1,null,"eef7cc4a",null),R=Q.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"root"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],attrs:{placeholder:"search for phonetic features, '-' to exclude",type:"text"},domProps:{value:e.input},on:{input:function(t){t.target.composing||(e.input=t.target.value)}}})])},z=[],A=(n("1276"),{name:"QueryInput",data:function(){return{input:""}},computed:{result:function(){return this.input.toLowerCase().split(" ").filter((function(e){return e})).reduce((function(e,t){return"-"===t[0]?e[t.substr(1)]=!1:e[t]=!0,e}),{})}},watch:{result:{handler:function(){this.$emit("query",this.result)},immediate:!0}}}),M=A,S=(n("c336"),Object(p["a"])(M,q,z,!1,null,"9fad813a",null)),L=S.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{narrow:e.phonemes.length<=12},attrs:{id:"root"}},e._l(e.phonemes,(function(t,a){return n("PhoneticItem",{key:a,attrs:{selected:e.selected==t.i,faded:!e.fitting[a],ipa:t.ipa,str:e.graphemes[a]},nativeOn:{click:function(n){return e.$emit("phoneme",t.i)}}})})),1)},F=[],H=(n("d81d"),n("4fad"),n("b64b"),n("3835")),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{class:{"text-faded":e.faded,highlight:e.selected}},[n("b",[e._v(e._s(e.str))]),n("span",{staticClass:"text-ipa"},[e._v(e._s(e.ipa))])])},J=[],U={name:"PhoneticItem",props:["selected","faded","ipa","str"]},D=U,B=(n("a95c"),Object(p["a"])(D,I,J,!1,null,"51eb8bf9",null)),G=B.exports,K={name:"PhoneticTable",components:{PhoneticItem:G},props:["selected","lectQuery","featureQuery","phonemes"],methods:{pass:function(e,t){for(var n=0,a=Object.entries(t);n<a.length;n++){var r=Object(H["a"])(a[n],2),s=r[0],o=r[1];if(o!==e.includes(s))return!1}return!0}},computed:{fitting:function(){var e=this;return this.phonemes.map((function(t){return e.pass(Object.keys(t.uses),e.lectQuery)&&e.pass(t.features,e.featureQuery)}))},singleLect:function(){for(var e=[],t=0,n=Object.entries(this.lectQuery);t<n.length;t++){var a=Object(H["a"])(n[t],2),r=a[0],s=a[1];s&&e.push(r)}return 1===e.length?e[0]:void 0},graphemes:function(){var e=this;return this.phonemes.map((function(t){var n;return null===(n=t.uses[e.singleLect])||void 0===n?void 0:n.grapheme}))}}},V=K,W=(n("c216"),Object(p["a"])(V,N,F,!1,null,"91e24a12",null)),X=W.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel",attrs:{id:"root"}},[n("div",{staticClass:"card panel-dense"},[n("h2",[n("span",{staticClass:"text-faded"},[e._v("/ ")]),n("span",{staticClass:"text-ipa"},[e._v(e._s(e.phoneme.ipa))]),n("span",{staticClass:"text-faded"},[e._v(" /")])]),e.features?n("p",{staticClass:"text-caption text-faded text-spaced"},[e._v(e._s(e.features))]):e._e()]),n("audio",{ref:"player"}),e._l(e.lects,(function(t,a){return n("PhonemeUse",{key:a,attrs:{lect:t,use:e.phoneme.uses[t]},on:{play:function(n){return e.play(t,n)}}})}))],2)},Z=[],ee=(n("99af"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel-dense card"},[n("p",[n("b",[e._v(e._s(e.use.grapheme))]),e._v(" — "+e._s(e.lect)+" ")]),e.use.note?n("p",{staticClass:"text-caption text-faded"},[e._v(e._s(e.use.note))]):e._e(),e.use.samples&&e.use.samples.length>0?n("div",{staticClass:"panel-solid scroll"},e._l(e.use.samples,(function(t,a){return n("button",{key:a,staticClass:"small",on:{click:function(n){return e.$emit("play",t)}}},[n("span",{staticClass:"icon-small"},[e._v("play_arrow")]),n("span",{domProps:{innerHTML:e._s(e.highlight(t,e.use.grapheme))}})])})),0):e._e()])}),te=[],ne=(n("4d63"),n("25f0"),{name:"PhonemeUse",props:["lect","use"],methods:{highlight:function(e,t){return e.replace(new RegExp(t,"g"),'<span style="color: var(--color-highlight)">'.concat(t,"</span>"))}}}),ae=ne,re=(n("79c6"),Object(p["a"])(ae,ee,te,!1,null,"5f5ab50c",null)),se=re.exports,oe={name:"PhonemeDetails",components:{PhonemeUse:se},props:["phoneme"],computed:{lects:function(){var e=this;return this.$store.getters.lects.filter((function(t){return t in e.phoneme.uses}))},features:function(){var e;return null===(e=this.phoneme["features"])||void 0===e?void 0:e.reduce((function(e,t){return"".concat(e," ").concat(t)}))},root:function(){return this.$store.getters.languageRoot}},methods:{play:function(e,t){var n=this.$refs.player;n.src="".concat(this.root).concat(e,"/audio/").concat(t,".mp3"),n.play()}}},ie=oe,ce=Object(p["a"])(ie,Y,Z,!1,null,null,null),ue=ce.exports,le={name:"Phonology",components:{PhoneticTable:X,PhonemeDetails:ue,QueryList:R,QueryInput:L},data:function(){return{lectQuery:{},featureQuery:{}}},computed:{selected:function(){var e,t=null!==(e=this.$route.query.phoneme)&&void 0!==e?e:0;return t<this.phonemes.length?t:0},phonemes:function(){return this.$store.state.phonology},lects:function(){var e;return null===(e=this.$store.getters.languageInfo)||void 0===e?void 0:e.lects},vowels:function(){return this.categorize("vowel")},consonants:function(){return this.categorize("consonant")}},methods:{select:function(e){this.selected!==e&&this.$router.replace({query:{phoneme:e}})},categorize:function(e){return this.phonemes.filter((function(t){return t.features.includes(e)}))}}},pe=le,fe=(n("0477"),Object(p["a"])(pe,b,_,!1,null,"a1530ef6",null)),he=fe.exports,me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.converters?n("div",{staticClass:"section"},[n("div",{staticClass:"split"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel-horizontal"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.mappingFrom,expression:"mappingFrom"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.mappingFrom=t.target.multiple?n:n[0]}}},e._l(e.converters.filter((function(e){return!e.many21})),(function(t){return n("option",{key:t.i,domProps:{value:t.i}},[e._v(e._s(t.name))])})),0),n("button",{on:{click:function(t){e.empty=!e.empty}}},[e.empty?n("span",{staticClass:"icon"},[e._v("subject")]):n("span",{staticClass:"icon"},[e._v("clear")])]),n("button",{on:{click:function(t){return e.$refs.file.click()}}},[n("span",{staticClass:"icon"},[e._v("publish")])]),n("button",{directives:[{name:"show",rawName:"v-show",value:!e.converters[this.mappingTo].many21,expression:"!converters[this.mappingTo].many21"}],on:{click:e.swap}},[n("span",{staticClass:"icon"},[e._v("swap_horiz")])])]),n("ConverterText",{attrs:{source:e.source,mapping:e.mappingSource},on:{result:function(t){e.intermediate=t}}}),n("MappingTable",{directives:[{name:"show",rawName:"v-show",value:e.showMapping,expression:"showMapping"}],attrs:{mapping:e.mappingSource}})],1),n("div",{staticClass:"panel"},[n("div",{staticClass:"panel-horizontal"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.mappingTo,expression:"mappingTo"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.mappingTo=t.target.multiple?n:n[0]}}},e._l(e.converters,(function(t){return n("option",{key:t.i,domProps:{value:t.i}},[e._v(e._s(t.name))])})),0),n("button",{on:{click:function(t){e.showMapping=!e.showMapping}}},[e.showMapping?n("span",{staticClass:"icon"},[e._v("visibility_off")]):n("span",{staticClass:"icon"},[e._v("visibility")])]),n("button",{on:{click:e.copy}},[n("span",{staticClass:"icon"},[e._v("file_copy")])])]),n("ConverterText",{ref:"resultText",attrs:{readonly:!0,source:e.intermediate,mapping:e.mappingResult},on:{result:function(t){e.result=t}}}),n("MappingTable",{directives:[{name:"show",rawName:"v-show",value:e.showMapping,expression:"showMapping"}],attrs:{mapping:e.mappingResult}})],1)]),n("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"file",attrs:{type:"file"},on:{change:e.upload}}),n("a",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"link"})]):e._e()},de=[],ge=(n("9911"),n("5530")),ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},e._l(e.noones,(function(t,a){return n("p",{key:a},[n("span",{staticClass:"text-faded"},[e._v(e._s(t[0].replace(" ","_")))]),n("span",[e._v(e._s(t[1].replace(" ","_")))])])})),0)},ye=[],be={name:"MappingTable",props:["mapping"],computed:{noones:function(){return this.mapping.filter((function(e){return!e[0].includes("1")}))}}},_e=be,xe=(n("674e"),Object(p["a"])(_e,ve,ye,!1,null,"6b62eebd",null)),we=xe.exports,Ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],ref:"textarea",attrs:{readonly:e.readonly},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}})},$e=[],ke=(n("fb6a"),n("498a"),n("b85c")),je={name:"ConverterText",props:["source","mapping","readonly"],data:function(){return{text:"",result:""}},watch:{source:{handler:function(){this.text=this.readonly?this.convert(this.source,this.mapping):this.source},immediate:!0},text:{handler:function(){this.result=this.readonly?this.text:this.convert(this.text,this.mapping),this.$emit("result",this.result)},immediate:!0},mapping:{handler:function(e){this.text=this.readonly?this.convert(this.source,e):this.convert(this.result,e.map((function(e){return[e[1],e[0]]})))},deep:!0,immediate:!0}},methods:{uppercase:function(e){var t="",n=0;return" "==e.charAt(0)&&(t=" ",n=1),t+e.charAt(n).toUpperCase()+e.slice(n+1)},replace:function(e,t,n){return e.replace(new RegExp(t,"g"),n)},convert:function(e,t){e=" "+this.replace(e,"\n","\n ").trim();var n,a=Object(ke["a"])(t);try{for(a.s();!(n=a.n()).done;){var r=Object(H["a"])(n.value,2),s=r[0],o=r[1];e=this.replace(e,s,o),e=this.replace(e,this.uppercase(s),this.uppercase(o))}}catch(i){a.e(i)}finally{a.f()}return e=this.replace(e,"\n ","\n").trim(),e}}},Oe=je,Pe=(n("eb9f"),Object(p["a"])(Oe,Ce,$e,!1,null,"fc20d532",null)),Te=Pe.exports,Ee={name:"Converter",components:{MappingTable:we,ConverterText:Te},data:function(){return{mappingFrom:0,mappingTo:1,empty:!1,source:"",intermediate:"",result:"",showMapping:!1}},computed:{sample:function(){return this.$store.state.sample},converters:function(){return this.$store.state.converters},mappingSource:function(){return this.converters[this.mappingFrom].mapping},mappingResult:function(){return this.converters[this.mappingTo].mapping.map((function(e){return[e[1],e[0]]}))}},watch:{sample:function(e){this.empty||(this.source=e)},empty:function(e){this.source=e?"":this.sample,this.$router.replace({query:Object(ge["a"])({},this.$route.query,{empty:e})}).catch((function(){}))},mappingFrom:function(e){this.$router.replace({query:Object(ge["a"])({},this.$route.query,{from:e})}).catch((function(){}))},mappingTo:function(e){this.$router.replace({query:Object(ge["a"])({},this.$route.query,{to:e})}).catch((function(){}))},"$route.query":{handler:function(e){var t,n;this.empty=e.empty,this.mappingFrom=null!==(t=e.from)&&void 0!==t?t:0,this.mappingTo=null!==(n=e.to)&&void 0!==n?n:1},immediate:!0}},methods:{swap:function(){var e=this.result,t=this.mappingFrom;this.mappingFrom=this.mappingTo,this.mappingTo=t,this.source=e},upload:function(e){var t=this,n=new FileReader;n.onload=function(n){return t.download(e.target.files[0].name,t.convert(n.target.result))},n.readAsText(e.target.files[0])},download:function(e,t){var n=this.$refs.link;n.href="data:text/plain;charset=utf-8,"+encodeURIComponent(t),n.download=e,n.click()},copy:function(){this.$refs.resultText.$refs.textarea.select(),document.execCommand("copy")}}},Qe=Ee,Re=(n("fe10"),Object(p["a"])(Qe,me,de,!1,null,"71e28dc8",null)),qe=Re.exports,ze=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.phrasebook?n("div",{staticClass:"section"},[n("div",{staticClass:"panel",attrs:{id:"translations"}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.category,expression:"category"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.category=t.target.multiple?n:n[0]}}},e._l(e.categories,(function(t,a){return n("option",{key:a,domProps:{value:a}},[e._v(e._s(t))])})),0),n("div",{staticClass:"panel-solid scroll"},e._l(e.translations,(function(t,a){return n("button",{key:a,class:{highlight:a===e.phrase},on:{click:function(t){e.phrase=a}}},[e._v(e._s(t))])})),0)]),n("div",{staticClass:"panel"},e._l(e.lects,(function(t,a){return n("PhrasebookEntry",{key:a,staticClass:"card",attrs:{lect:t,source:e.sources[t]}})})),1)]):e._e()},Ae=[],Me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("h3",[e._v(e._s(e.lect))]),n("span",[e._v(e._s(e.source.text))]),n("span",{staticClass:"text-faded text-ipa"},[e._v("/"+e._s(e.source.ipa)+"/")])])},Se=[],Le={name:"PhrasebookEntry",props:["lect","source"]},Ne=Le,Fe=(n("972a"),Object(p["a"])(Ne,Me,Se,!1,null,"4478522f",null)),He=Fe.exports,Ie={name:"Phrasebook",components:{PhrasebookEntry:He},data:function(){var e,t;return{category:null!==(e=this.$route.query.category)&&void 0!==e?e:0,phrase:null!==(t=this.$route.query.phrase)&&void 0!==t?t:0}},computed:{lects:function(){var e=this;return this.$store.getters.lects.filter((function(t){return t in e.sources}))},phrasebook:function(){return this.$store.state.phrasebook},categories:function(){return Object.keys(this.phrasebook)},phrases:function(){return this.phrasebook[this.categories[this.category]]},translations:function(){return this.phrases.map((function(e){return e.translations.eng}))},sources:function(){return this.phrases[this.phrase].sources}},watch:{category:function(e){this.$router.push({query:{category:e,phrase:0}}).catch((function(){}))},phrase:function(e){this.$router.push({query:Object(ge["a"])({},this.$route.query,{phrase:e})}).catch((function(){}))},"$route.query":function(e){this.category=e.category,this.phrase=e.phrase}}},Je=Ie,Ue=(n("0c05"),Object(p["a"])(Je,ze,Ae,!1,null,"55177078",null)),De=Ue.exports,Be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.catalogue?n("div",[e._m(0),n("div",{staticClass:"section",attrs:{id:"languages"}},e._l(e.languages,(function(e,t){return n("LanguageCard",{key:t,attrs:{language:e}})})),1),e._m(1)]):e._e()},Ge=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section"},[n("h1",{attrs:{id:"header"}},[e._v("Ævzag")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section panel-horizontal",attrs:{id:"footer"}},[n("div",{staticClass:"panel-dense"},[n("h3",[e._v("Contact")]),n("a",{attrs:{href:"https://twitter.com/alkaitagi"}},[e._v("Twitter")]),n("a",{attrs:{href:"https://t.me/alkaitagi"}},[e._v("Telegram")])]),n("div",{staticClass:"panel-dense"},[n("h3",[e._v("Contribute")]),n("a",{attrs:{href:"https://github.com/alkaitagi/Aevzag"}},[e._v("GitHub")])])])}],Ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card panel-dense",on:{click:function(t){return e.$router.push({name:"Phonology",params:{lang:e.language}})}}},[n("img",{attrs:{src:e.flag,draggable:"false",alt:"flag"}}),n("h2",[e._v(e._s(e.language))]),n("div",{staticClass:"list"},e._l(e.lects,(function(t,a){return n("p",{key:a},[e._v(e._s(t))])})),0)])},Ve=[],We=(n("07ac"),{name:"LanguageCard",props:["language"],computed:{flag:function(){return this.$store.state.root+this.language+"/flag.png"},info:function(){return this.$store.state.catalogue[this.language]},lects:function(){return Object.values(this.info.lects).sort((function(e,t){return e.localeCompare(t)}))}}}),Xe=We,Ye=(n("fceb"),Object(p["a"])(Xe,Ke,Ve,!1,null,"2f6b8e7e",null)),Ze=Ye.exports,et={name:"Home",components:{LanguageCard:Ze},data:function(){return{publicPath:"/Aevzag/"}},computed:{catalogue:function(){return this.$store.state.catalogue},languages:function(){return Object.keys(this.catalogue).sort((function(e,t){return e.localeCompare(t)}))}}},tt=et,nt=(n("bd9c"),Object(p["a"])(tt,Be,Ge,!1,null,"056ee823",null)),at=nt.exports;a["a"].use(y["a"]);var rt=[{path:"/home",name:"Home",component:at},{path:"/phonology/:lang",name:"Phonology",component:he},{path:"/converter/:lang",name:"Converter",component:qe},{path:"/phrasebook/:lang",name:"Phrasebook",component:De},{path:"*",redirect:{name:"Home"}}],st=new y["a"]({base:"/Aevzag/",routes:rt}),ot=st,it=n("9483");Object(it["a"])("".concat("/Aevzag/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("4160"),n("159b");var ct=n("2f62");a["a"].use(ct["a"]);var ut=new ct["a"].Store({state:{root:"/Aevzag/languages/",catalogue:void 0,language:void 0,phonology:void 0,sample:void 0,converters:void 0,phrasebook:void 0},getters:{languageRoot:function(e){return e.root+e.language+"/"},languageInfo:function(e){return e.catalogue?e.catalogue[e.language]:void 0},lects:function(e,t){var n;return null===(n=t.languageInfo)||void 0===n?void 0:n.lects}},mutations:{setCatalogue:function(e,t){Object.values(t).forEach((function(e){return e.lects.sort((function(e,t){return e.localeCompare(t)}))})),e.catalogue=t},setLanguage:function(e,t){e.language=t},setPhonology:function(e,t){t.sort((function(e,t){return e.ipa.localeCompare(t.ipa)})),t.forEach((function(e,t){e.i=t})),e.phonology=t},setSample:function(e,t){e.sample=t},setConverters:function(e,t){t.forEach((function(e,t){e.i=t})),e.converters=t},setPhrasebook:function(e,t){e.phrasebook=t}},actions:{loadCatalogue:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,a=e.commit,t.t0=a,t.next=4,n("loadJson","../catalogue.json");case 4:t.t1=t.sent,(0,t.t0)("setCatalogue",t.t1);case 6:case"end":return t.stop()}}),t)})))()},loadLanguage:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.dispatch,r=e.commit,r("setLanguage",t),n.t0=r,n.next=5,a("loadJson","phonology.json");case 5:return n.t1=n.sent,(0,n.t0)("setPhonology",n.t1),n.t2=r,n.next=10,a("loadText","sample.txt");case 10:return n.t3=n.sent,(0,n.t2)("setSample",n.t3),n.t4=r,n.next=15,a("loadJson","converters.json");case 15:return n.t5=n.sent,(0,n.t4)("setConverters",n.t5),n.t6=r,n.next=20,a("loadJson","phrasebook.json");case 20:n.t7=n.sent,(0,n.t6)("setPhrasebook",n.t7);case 22:case"end":return n.stop()}}),n)})))()},loadJson:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.getters,n.next=3,fetch(a.languageRoot+t).then((function(e){return e.json()}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()},loadText:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.getters,n.next=3,fetch(a.languageRoot+t).then((function(e){return e.text()}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()}},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:ot,store:ut,render:function(e){return e(v)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"5ca4":function(e,t,n){"use strict";var a=n("fc60"),r=n.n(a);r.a},"5dd2":function(e,t,n){},"674e":function(e,t,n){"use strict";var a=n("e9f1"),r=n.n(a);r.a},"79c6":function(e,t,n){"use strict";var a=n("15c5"),r=n.n(a);r.a},"852c":function(e,t,n){},"8d53":function(e,t,n){},"972a":function(e,t,n){"use strict";var a=n("33a7"),r=n.n(a);r.a},"9c0c":function(e,t,n){},"9d27":function(e,t,n){},a22e:function(e,t,n){},a95c:function(e,t,n){"use strict";var a=n("b615"),r=n.n(a);r.a},b615:function(e,t,n){},bd9c:function(e,t,n){"use strict";var a=n("1355"),r=n.n(a);r.a},c216:function(e,t,n){"use strict";var a=n("001b"),r=n.n(a);r.a},c336:function(e,t,n){"use strict";var a=n("5dd2"),r=n.n(a);r.a},e9f1:function(e,t,n){},eb9f:function(e,t,n){"use strict";var a=n("8d53"),r=n.n(a);r.a},fc60:function(e,t,n){},fceb:function(e,t,n){"use strict";var a=n("852c"),r=n.n(a);r.a},fe10:function(e,t,n){"use strict";var a=n("a22e"),r=n.n(a);r.a}});
//# sourceMappingURL=app.2c0b74c8.js.map