import{c as F,a as H,b as G,d as K,i as T,e as I,m as J}from"./common/react-router-32bb5653.js";export{g as Route,S as Switch,u as useHistory,f as useParams}from"./common/react-router-32bb5653.js";import{r as s}from"./common/index-abdc4d2d.js";import"./common/index-ad697a84.js";import"./common/polyfill-node:global-21e5c503.js";import"./common/hoist-non-react-statics.cjs-a0c71e88.js";import"./common/_commonjsHelpers-4f955397.js";function b(r,t){return b=Object.setPrototypeOf||function(n,o){return n.__proto__=o,n},b(r,t)}function B(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,b(r,t)}function p(){return p=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},p.apply(this,arguments)}function L(r,t){if(r==null)return{};var e={},n=Object.keys(r),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(e[o]=r[o]);return e}var Q=function(r){B(t,r);function t(){for(var n,o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r.call.apply(r,[this].concat(a))||this,n.history=F(n.props),n}var e=t.prototype;return e.render=function(){return s.createElement(H,{history:this.history,children:this.props.children})},t}(s.Component);s.Component;var O=function(t,e){return typeof t=="function"?t(e):t},$=function(t,e){return typeof t=="string"?I(t,null,null,e):t},N=function(t){return t},m=s.forwardRef;typeof m=="undefined"&&(m=N);function U(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}var V=m(function(r,t){var e=r.innerRef,n=r.navigate,o=r.onClick,a=L(r,["innerRef","navigate","onClick"]),i=a.target,l=p({},a,{onClick:function(c){try{o&&o(c)}catch(f){throw c.preventDefault(),f}!c.defaultPrevented&&c.button===0&&(!i||i==="_self")&&!U(c)&&(c.preventDefault(),n())}});return N!==m?l.ref=t||e:l.ref=e,s.createElement("a",l)}),z=m(function(r,t){var e=r.component,n=e===void 0?V:e,o=r.replace,a=r.to,i=r.innerRef,l=L(r,["component","replace","to","innerRef"]);return s.createElement(K.Consumer,null,function(u){u||T(!1);var c=u.history,f=$(O(a,u.location),u.location),g=f?c.createHref(f):"",v=p({},l,{href:g,navigate:function(){var j=O(a,u.location),h=o?c.replace:c.push;h(j)}});return N!==m?v.ref=t||i:v.innerRef=i,s.createElement(n,v)})}),D=function(t){return t},y=s.forwardRef;typeof y=="undefined"&&(y=D);function X(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return t.filter(function(n){return n}).join(" ")}y(function(r,t){var e=r["aria-current"],n=e===void 0?"page":e,o=r.activeClassName,a=o===void 0?"active":o,i=r.activeStyle,l=r.className,u=r.exact,c=r.isActive,f=r.location,g=r.sensitive,v=r.strict,R=r.style,j=r.to,h=r.innerRef,M=L(r,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return s.createElement(K.Consumer,null,function(S){S||T(!1);var d=f||S.location,A=$(O(j,d),d),C=A.pathname,E=C&&C.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),x=E?J(d.pathname,{path:E,exact:u,sensitive:g,strict:v}):null,w=!!(c?c(x,d):x),W=w?X(l,a):l,q=w?p({},R,{},i):R,P=p({"aria-current":w&&n||null,className:W,style:q,to:A},M);return D!==y?P.ref=t||h:P.innerRef=h,s.createElement(z,P)})});export{Q as BrowserRouter,z as Link};