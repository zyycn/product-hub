import{bO as e,aV as a,e as l,bP as t,aZ as n,aW as o,w as u,S as i,x as r,p as s,f as d,X as c,V as v,W as b,U as m,T as f,bQ as p,ar as h,bC as g,bE as k,ao as x,bm as y,aq as C,bF as L,aA as V,bH as I,J as _,I as B,M as S,Y as w,bD as E,$ as z,N as j,bR as F,R as O,by as N,a2 as U,bf as D,_ as A,ab as $,ac as G,ad as R,af as P,ag as M,al as J,ae as K,a0 as T,bJ as W,bS as Z,am as q,ah as H,aj as Q,ak as X,aE as Y,bb as ee,a1 as ae,aD as le,b3 as te,a$ as ne,aB as oe,bT as ue,Z as ie,aK as re,aL as se}from"./__uno-K2APE6KP.js";function de(a){var l=-1,t=null==a?0:a.length;for(this.__data__=new e;++l<t;)this.add(a[l])}function ce(e,a){for(var l=-1,t=null==e?0:e.length;++l<t;)if(a(e[l],l,e))return!0;return!1}de.prototype.add=de.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},de.prototype.has=function(e){return this.__data__.has(e)};function ve(e,a,l,t,n,o){var u=1&l,i=e.length,r=a.length;if(i!=r&&!(u&&r>i))return!1;var s=o.get(e),d=o.get(a);if(s&&d)return s==a&&d==e;var c=-1,v=!0,b=2&l?new de:void 0;for(o.set(e,a),o.set(a,e);++c<i;){var m=e[c],f=a[c];if(t)var p=u?t(f,m,c,a,e,o):t(m,f,c,e,a,o);if(void 0!==p){if(p)continue;v=!1;break}if(b){if(!ce(a,(function(e,a){if(u=a,!b.has(u)&&(m===e||n(m,e,l,t,o)))return b.push(a);var u}))){v=!1;break}}else if(m!==f&&!n(m,f,l,t,o)){v=!1;break}}return o.delete(e),o.delete(a),v}function be(e){var a=-1,l=Array(e.size);return e.forEach((function(e,t){l[++a]=[t,e]})),l}function me(e){var a=-1,l=Array(e.size);return e.forEach((function(e){l[++a]=e})),l}var fe=a?a.prototype:void 0,pe=fe?fe.valueOf:void 0;var he=Object.prototype.hasOwnProperty;var ge="[object Arguments]",ke="[object Array]",xe="[object Object]",ye=Object.prototype.hasOwnProperty;function Ce(e,a,d,c,v,b){var m=s(e),f=s(a),p=m?ke:o(e),h=f?ke:o(a),g=(p=p==ge?xe:p)==xe,k=(h=h==ge?xe:h)==xe,x=p==h;if(x&&u(e)){if(!u(a))return!1;m=!0,g=!1}if(x&&!g)return b||(b=new i),m||r(e)?ve(e,a,d,c,v,b):function(e,a,n,o,u,i,r){switch(n){case"[object DataView]":if(e.byteLength!=a.byteLength||e.byteOffset!=a.byteOffset)return!1;e=e.buffer,a=a.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=a.byteLength||!i(new t(e),new t(a)));case"[object Boolean]":case"[object Date]":case"[object Number]":return l(+e,+a);case"[object Error]":return e.name==a.name&&e.message==a.message;case"[object RegExp]":case"[object String]":return e==a+"";case"[object Map]":var s=be;case"[object Set]":var d=1&o;if(s||(s=me),e.size!=a.size&&!d)return!1;var c=r.get(e);if(c)return c==a;o|=2,r.set(e,a);var v=ve(s(e),s(a),o,u,i,r);return r.delete(e),v;case"[object Symbol]":if(pe)return pe.call(e)==pe.call(a)}return!1}(e,a,p,d,c,v,b);if(!(1&d)){var y=g&&ye.call(e,"__wrapped__"),C=k&&ye.call(a,"__wrapped__");if(y||C){var L=y?e.value():e,V=C?a.value():a;return b||(b=new i),v(L,V,d,c,b)}}return!!x&&(b||(b=new i),function(e,a,l,t,o,u){var i=1&l,r=n(e),s=r.length;if(s!=n(a).length&&!i)return!1;for(var d=s;d--;){var c=r[d];if(!(i?c in a:he.call(a,c)))return!1}var v=u.get(e),b=u.get(a);if(v&&b)return v==a&&b==e;var m=!0;u.set(e,a),u.set(a,e);for(var f=i;++d<s;){var p=e[c=r[d]],h=a[c];if(t)var g=i?t(h,p,c,a,e,u):t(p,h,c,e,a,u);if(!(void 0===g?p===h||o(p,h,l,t,u):g)){m=!1;break}f||(f="constructor"==c)}if(m&&!f){var k=e.constructor,x=a.constructor;k==x||!("constructor"in e)||!("constructor"in a)||"function"==typeof k&&k instanceof k&&"function"==typeof x&&x instanceof x||(m=!1)}return u.delete(e),u.delete(a),m}(e,a,d,c,v,b))}function Le(e,a,l,t,n){return e===a||(null==e||null==a||!d(e)&&!d(a)?e!=e&&a!=a:Ce(e,a,l,t,Le,n))}function Ve(e,a){return Le(e,a)}const Ie="update:modelValue",_e=({from:e,replacement:a,scope:l,version:t,ref:n,type:o="API"},u)=>{c((()=>v(u)),(e=>{}),{immediate:!0})},Be=e=>{const a=m();return b((()=>{var l,t;return null==(t=null==(l=null==a?void 0:a.proxy)?void 0:l.$props)?void 0:t[e]}))},Se=(e,a={})=>{const l=f(void 0),t=a.prop?l:Be("size"),n=a.global?l:p(),o=a.form?{size:void 0}:h(g,void 0),u=a.formItem?{size:void 0}:h(k,void 0);return b((()=>t.value||v(e)||(null==u?void 0:u.size)||(null==o?void 0:o.size)||n.value||""))},we=e=>{const a=Be("disabled"),l=h(g,void 0);return b((()=>a.value||v(e)||(null==l?void 0:l.disabled)||!1))},Ee=()=>({form:h(g,void 0),formItem:h(k,void 0)}),ze=(e,{formItemContext:a,disableIdGeneration:l,disableIdManagement:t})=>{l||(l=f(!1)),t||(t=f(!1));const n=f();let o;const u=b((()=>{var l;return!!(!e.label&&!e.ariaLabel&&a&&a.inputIds&&(null==(l=a.inputIds)?void 0:l.length)<=1)}));return x((()=>{o=c([y(e,"id"),l],(([e,l])=>{const o=null!=e?e:l?void 0:L().value;o!==n.value&&((null==a?void 0:a.removeInputId)&&(n.value&&a.removeInputId(n.value),(null==t?void 0:t.value)||l||!o||a.addInputId(o)),n.value=o)}),{immediate:!0})})),C((()=>{o&&o(),(null==a?void 0:a.removeInputId)&&n.value&&a.removeInputId(n.value)})),{isLabeledByFormItem:u,inputId:n}},je={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},border:Boolean,size:V,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0},...I(["ariaControls"])},Fe={[Ie]:e=>_(e)||B(e)||S(e),change:e=>_(e)||B(e)||S(e)},Oe=Symbol("checkboxGroupContextKey"),Ne=(e,{model:a,isLimitExceeded:l,hasOwnLabel:t,isDisabled:n,isLabeledByFormItem:o})=>{const u=h(Oe,void 0),{formItem:i}=Ee(),{emit:r}=m();function s(a){var l,t,n,o;return[!0,e.trueValue,e.trueLabel].includes(a)?null==(t=null!=(l=e.trueValue)?l:e.trueLabel)||t:null!=(o=null!=(n=e.falseValue)?n:e.falseLabel)&&o}const d=b((()=>(null==u?void 0:u.validateEvent)||e.validateEvent));return c((()=>e.modelValue),(()=>{d.value&&(null==i||i.validate("change").catch((e=>E())))})),{handleChange:function(e){if(l.value)return;const a=e.target;r("change",s(a.checked),e)},onClickRoot:async function(u){if(!l.value&&!t.value&&!n.value&&o.value){u.composedPath().some((e=>"LABEL"===e.tagName))||(a.value=s([!1,e.falseValue,e.falseLabel].includes(a.value)),await z(),function(e,a){r("change",s(e),a)}(a.value,u))}}}},Ue=(e,a)=>{const{formItem:l}=Ee(),{model:t,isGroup:n,isLimitExceeded:o}=(e=>{const a=f(!1),{emit:l}=m(),t=h(Oe,void 0),n=b((()=>!1===w(t))),o=f(!1),u=b({get(){var l,o;return n.value?null==(l=null==t?void 0:t.modelValue)?void 0:l.value:null!=(o=e.modelValue)?o:a.value},set(e){var i,r;n.value&&j(e)?(o.value=void 0!==(null==(i=null==t?void 0:t.max)?void 0:i.value)&&e.length>(null==t?void 0:t.max.value)&&e.length>u.value.length,!1===o.value&&(null==(r=null==t?void 0:t.changeEvent)||r.call(t,e))):(l(Ie,e),a.value=e)}});return{model:u,isGroup:n,isLimitExceeded:o}})(e),{isFocused:u,isChecked:i,checkboxButtonSize:r,checkboxSize:s,hasOwnLabel:d,actualValue:c}=((e,a,{model:l})=>{const t=h(Oe,void 0),n=f(!1),o=b((()=>F(e.value)?e.label:e.value)),u=b((()=>{const a=l.value;return S(a)?a:j(a)?O(o.value)?a.map(N).some((e=>Ve(e,o.value))):a.map(N).includes(o.value):null!=a?a===e.trueValue||a===e.trueLabel:!!a}));return{checkboxButtonSize:Se(b((()=>{var e;return null==(e=null==t?void 0:t.size)?void 0:e.value})),{prop:!0}),isChecked:u,isFocused:n,checkboxSize:Se(b((()=>{var e;return null==(e=null==t?void 0:t.size)?void 0:e.value}))),hasOwnLabel:b((()=>!!a.default||!F(o.value))),actualValue:o}})(e,a,{model:t}),{isDisabled:v}=(({model:e,isChecked:a})=>{const l=h(Oe,void 0),t=b((()=>{var t,n;const o=null==(t=null==l?void 0:l.max)?void 0:t.value,u=null==(n=null==l?void 0:l.min)?void 0:n.value;return!w(o)&&e.value.length>=o&&!a.value||!w(u)&&e.value.length<=u&&a.value}));return{isDisabled:we(b((()=>(null==l?void 0:l.disabled.value)||t.value))),isLimitDisabled:t}})({model:t,isChecked:i}),{inputId:p,isLabeledByFormItem:g}=ze(e,{formItemContext:l,disableIdGeneration:d,disableIdManagement:n}),{handleChange:k,onClickRoot:x}=Ne(e,{model:t,isLimitExceeded:o,hasOwnLabel:d,isDisabled:v,isLabeledByFormItem:g});var y,C;return e.checked&&(j(t.value)&&!t.value.includes(c.value)?t.value.push(c.value):t.value=null==(C=null!=(y=e.trueValue)?y:e.trueLabel)||C),_e({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},b((()=>n.value&&F(e.value)))),_e({from:"true-label",replacement:"true-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},b((()=>!!e.trueLabel))),_e({from:"false-label",replacement:"false-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},b((()=>!!e.falseLabel))),{inputId:p,isLabeledByFormItem:g,isChecked:i,isDisabled:v,isFocused:u,checkboxButtonSize:r,checkboxSize:s,hasOwnLabel:d,model:t,actualValue:c,handleChange:k,onClickRoot:x}},De=U({name:"ElCheckbox"});var Ae=ae(U({...De,props:je,emits:Fe,setup(e){const a=e,l=D(),{inputId:t,isLabeledByFormItem:n,isChecked:o,isDisabled:u,isFocused:i,checkboxSize:r,hasOwnLabel:s,model:d,actualValue:c,handleChange:m,onClickRoot:f}=Ue(a,l),p=A("checkbox"),h=b((()=>[p.b(),p.m(r.value),p.is("disabled",u.value),p.is("bordered",a.border),p.is("checked",o.value)])),g=b((()=>[p.e("input"),p.is("disabled",u.value),p.is("checked",o.value),p.is("indeterminate",a.indeterminate),p.is("focus",i.value)]));return(e,a)=>($(),G(ee(!v(s)&&v(n)?"span":"label"),{class:M(v(h)),"aria-controls":e.indeterminate?e.ariaControls:null,onClick:v(f)},{default:R((()=>{var a,l,n,o;return[P("span",{class:M(v(g))},[e.trueValue||e.falseValue||e.trueLabel||e.falseLabel?J(($(),K("input",{key:0,id:v(t),"onUpdate:modelValue":e=>T(d)?d.value=e:null,class:M(v(p).e("original")),type:"checkbox",indeterminate:e.indeterminate,name:e.name,tabindex:e.tabindex,disabled:v(u),"true-value":null==(l=null!=(a=e.trueValue)?a:e.trueLabel)||l,"false-value":null!=(o=null!=(n=e.falseValue)?n:e.falseLabel)&&o,onChange:v(m),onFocus:e=>i.value=!0,onBlur:e=>i.value=!1,onClick:W((()=>{}),["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[Z,v(d)]]):J(($(),K("input",{key:1,id:v(t),"onUpdate:modelValue":e=>T(d)?d.value=e:null,class:M(v(p).e("original")),type:"checkbox",indeterminate:e.indeterminate,disabled:v(u),value:v(c),name:e.name,tabindex:e.tabindex,onChange:v(m),onFocus:e=>i.value=!0,onBlur:e=>i.value=!1,onClick:W((()=>{}),["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","disabled","value","name","tabindex","onChange","onFocus","onBlur","onClick"])),[[Z,v(d)]]),P("span",{class:M(v(p).e("inner"))},null,2)],2),v(s)?($(),K("span",{key:0,class:M(v(p).e("label"))},[q(e.$slots,"default"),e.$slots.default?Y("v-if",!0):($(),K(H,{key:0},[Q(X(e.label),1)],64))],2)):Y("v-if",!0)]})),_:3},8,["class","aria-controls","onClick"]))}}),[["__file","checkbox.vue"]]);const $e=U({name:"ElCheckboxButton"});var Ge=ae(U({...$e,props:je,emits:Fe,setup(e){const a=e,l=D(),{isFocused:t,isChecked:n,isDisabled:o,checkboxButtonSize:u,model:i,actualValue:r,handleChange:s}=Ue(a,l),d=h(Oe,void 0),c=A("checkbox"),m=b((()=>{var e,a,l,t;const n=null!=(a=null==(e=null==d?void 0:d.fill)?void 0:e.value)?a:"";return{backgroundColor:n,borderColor:n,color:null!=(t=null==(l=null==d?void 0:d.textColor)?void 0:l.value)?t:"",boxShadow:n?`-1px 0 0 0 ${n}`:void 0}})),f=b((()=>[c.b("button"),c.bm("button",u.value),c.is("disabled",o.value),c.is("checked",n.value),c.is("focus",t.value)]));return(e,a)=>{var l,u,d,b;return $(),K("label",{class:M(v(f))},[e.trueValue||e.falseValue||e.trueLabel||e.falseLabel?J(($(),K("input",{key:0,"onUpdate:modelValue":e=>T(i)?i.value=e:null,class:M(v(c).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:v(o),"true-value":null==(u=null!=(l=e.trueValue)?l:e.trueLabel)||u,"false-value":null!=(b=null!=(d=e.falseValue)?d:e.falseLabel)&&b,onChange:v(s),onFocus:e=>t.value=!0,onBlur:e=>t.value=!1,onClick:W((()=>{}),["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[Z,v(i)]]):J(($(),K("input",{key:1,"onUpdate:modelValue":e=>T(i)?i.value=e:null,class:M(v(c).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:v(o),value:v(r),onChange:v(s),onFocus:e=>t.value=!0,onBlur:e=>t.value=!1,onClick:W((()=>{}),["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","value","onChange","onFocus","onBlur","onClick"])),[[Z,v(i)]]),e.$slots.default||e.label?($(),K("span",{key:2,class:M(v(c).be("button","inner")),style:le(v(n)?v(m):void 0)},[q(e.$slots,"default",{},(()=>[Q(X(e.label),1)]))],6)):Y("v-if",!0)],2)}}}),[["__file","checkbox-button.vue"]]);const Re=te({modelValue:{type:ne(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:V,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0},...I(["ariaLabel"])}),Pe={[Ie]:e=>j(e),change:e=>j(e)},Me=U({name:"ElCheckboxGroup"});var Je=ae(U({...Me,props:Re,emits:Pe,setup(e,{emit:a}){const l=e,t=A("checkbox"),{formItem:n}=Ee(),{inputId:o,isLabeledByFormItem:u}=ze(l,{formItemContext:n}),i=async e=>{a(Ie,e),await z(),a("change",e)},r=b({get:()=>l.modelValue,set(e){i(e)}});return oe(Oe,{...ue(ie(l),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:r,changeEvent:i}),c((()=>l.modelValue),(()=>{l.validateEvent&&(null==n||n.validate("change").catch((e=>E())))})),(e,a)=>{var l;return $(),G(ee(e.tag),{id:v(o),class:M(v(t).b("group")),role:"group","aria-label":v(u)?void 0:e.ariaLabel||"checkbox-group","aria-labelledby":v(u)?null==(l=v(n))?void 0:l.labelId:void 0},{default:R((()=>[q(e.$slots,"default")])),_:3},8,["id","class","aria-label","aria-labelledby"])}}}),[["__file","checkbox-group.vue"]]);const Ke=re(Ae,{CheckboxButton:Ge,CheckboxGroup:Je});se(Ge),se(Je);export{Ke as E,Ie as U,Ee as a,Le as b,ze as c,we as d,_e as e,Ve as i,Se as u};
