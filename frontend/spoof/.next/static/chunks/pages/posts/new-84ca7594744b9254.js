(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[566],{5067:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/new",function(){return n(606)}])},4488:function(e,t,n){"use strict";var i=n(4836);t.Z=void 0;var r=i(n(7955)),o=n(5893);t.Z=(0,r.default)((0,o.jsx)("path",{d:"M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6z"}),"AttachFile")},7955:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.createSvgIcon}});var i=n(2837)},8962:function(e,t,n){"use strict";var i=n(7462),r=n(7294),o=n(6522),a=n(4482),l=n(5893);let s=(e,t)=>(0,i.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),u=e=>(0,i.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),c=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={};n&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(t=>{var n;let[i,o]=t;r[e.getColorSchemeSelector(i).replace(/\s*&/,"")]={colorScheme:null==(n=o.palette)?void 0:n.mode}});let o=(0,i.Z)({html:s(e,n),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,i.Z)({margin:0},u(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},r),a=null==(t=e.components)||null==(t=t.MuiCssBaseline)?void 0:t.styleOverrides;return a&&(o=[o,a]),o};t.ZP=function(e){let{children:t,enableColorScheme:n=!1}=(0,o.i)({props:e,name:"MuiCssBaseline"});return(0,l.jsxs)(r.Fragment,{children:[(0,l.jsx)(a.Z,{styles:e=>c(e,n)}),t]})}},2837:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return r.Z},createChainedFunction:function(){return o},createSvgIcon:function(){return a.Z},debounce:function(){return l.Z},deprecatedPropType:function(){return s},isMuiElement:function(){return u.Z},ownerDocument:function(){return c.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return p},setRef:function(){return f},unstable_ClassNameGenerator:function(){return y},unstable_useEnhancedEffect:function(){return m.Z},unstable_useId:function(){return h.Z},unsupportedProp:function(){return b},useControlled:function(){return g.Z},useEventCallback:function(){return v.Z},useForkRef:function(){return x.Z},useIsFocusVisible:function(){return Z.Z}});var i=n(7078),r=n(5228),o=n(4018).Z,a=n(7680),l=n(1837),s=function(e,t){return()=>null},u=n(2022),c=n(9194),d=n(1603);n(7462);var p=function(e,t){return()=>null},f=n(7364).Z,m=n(3769),h=n(7309),b=function(e,t,n,i,r){return null},g=n(8468),v=n(174),x=n(8735),Z=n(8411);let y={configure:e=>{i.Z.configure(e)}}},606:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return X}});var i,r=n(5893),o=n(7294),a=n(4191),l=n(747),s=n(9979),u=n(8962),c=n(4246),d=n(4440),p=n(4466),f=n(8386),m=n(1946),h=n(8163),b=n(9496),g=n(9262),v=n(3367),x=n(3366),Z=n(7462),y=n(512),j=n(4780),P=n(5228),S=n(5491),F=n(2794),w=n(1588),E=n(4867);function A(e){return(0,E.ZP)("MuiInputAdornment",e)}let B=(0,w.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var C=n(6522);let M=["children","className","component","disablePointerEvents","disableTypography","position","variant"],k=e=>{let{classes:t,disablePointerEvents:n,hiddenLabel:i,position:r,size:o,variant:a}=e,l={root:["root",n&&"disablePointerEvents",r&&`position${(0,P.Z)(r)}`,a,i&&"hiddenLabel",o&&`size${(0,P.Z)(o)}`]};return(0,j.Z)(l,A,t)},I=(0,g.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`position${(0,P.Z)(n.position)}`],!0===n.disablePointerEvents&&t.disablePointerEvents,t[n.variant]]}})(e=>{let{theme:t,ownerState:n}=e;return(0,Z.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},"filled"===n.variant&&{[`&.${B.positionStart}&:not(.${B.hiddenLabel})`]:{marginTop:16}},"start"===n.position&&{marginRight:8},"end"===n.position&&{marginLeft:8},!0===n.disablePointerEvents&&{pointerEvents:"none"})}),N=o.forwardRef(function(e,t){let n=(0,C.i)({props:e,name:"MuiInputAdornment"}),{children:a,className:l,component:s="div",disablePointerEvents:u=!1,disableTypography:d=!1,position:p,variant:f}=n,m=(0,x.Z)(n,M),h=(0,F.Z)()||{},b=f;f&&h.variant,h&&!b&&(b=h.variant);let g=(0,Z.Z)({},n,{hiddenLabel:h.hiddenLabel,size:h.size,disablePointerEvents:u,position:p,variant:b}),v=k(g);return(0,r.jsx)(S.Z.Provider,{value:null,children:(0,r.jsx)(I,(0,Z.Z)({as:s,ownerState:g,className:(0,y.Z)(v.root,l),ref:t},m,{children:"string"!=typeof a||d?(0,r.jsxs)(o.Fragment,{children:["start"===p?i||(i=(0,r.jsx)("span",{className:"notranslate",children:"​"})):null,a]}):(0,r.jsx)(c.Z,{color:"text.secondary",children:a})}))})}),T=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],z=["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],_=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],$=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],D=(e,t,n)=>{let i=e;return"string"==typeof t||Array.isArray(t)?i=e.toLocaleString(t,n):(!0===t||void 0!==n)&&(i=e.toLocaleString(void 0,n)),i};function L(e,t){let n;if(!Number.isFinite(e))throw TypeError(`Expected a finite number, got ${typeof e}: ${e}`);let i=(t={bits:!1,binary:!1,space:!0,...t}).bits?t.binary?$:_:t.binary?z:T,r=t.space?" ":"";if(t.signed&&0===e)return` 0${r}${i[0]}`;let o=e<0,a=o?"-":t.signed?"+":"";if(o&&(e=-e),void 0!==t.minimumFractionDigits&&(n={minimumFractionDigits:t.minimumFractionDigits}),void 0!==t.maximumFractionDigits&&(n={maximumFractionDigits:t.maximumFractionDigits,...n}),e<1)return a+D(e,t.locale,n)+r+i[0];let l=Math.min(Math.floor(t.binary?Math.log(e)/Math.log(1024):Math.log10(e)/3),i.length-1);return e/=(t.binary?1024:1e3)**l,n||(e=e.toPrecision(3)),a+D(Number(e),t.locale,n)+r+i[l]}let R={Label:(0,g.ZP)("label")`
  position: relative;
  flex-grow: 1;

  input {
    opacity: 0 !important;
  }

  & > span {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    align-items: center;
  }

  span.MuiFileInput-placeholder {
    color: gray;
  }
`,Filename:(0,g.ZP)("div")`
  display: flex;
  width: 100%;

  & > span {
    display: block;
  }

  & > span:first-of-type {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  & > span:last-of-type {
    flex-shrink: 0;
    display: block;
  }
`},W=o.forwardRef((e,t)=>{let{text:n,isPlaceholder:i,placeholder:o,...a}=e;return(0,r.jsxs)(R.Label,{children:[(0,r.jsx)("input",{...a,ref:t}),n?(0,r.jsx)("span",{"aria-placeholder":o,className:i?"MuiFileInput-placeholder":"",children:"string"==typeof n?n:(0,r.jsxs)(R.Filename,{children:[(0,r.jsx)("span",{children:n.filename}),(0,r.jsxs)("span",{children:[".",n.extension]})]})}):null]})});function O(e){return e instanceof File}let V=o.useLayoutEffect,G=o.forwardRef((e,t)=>{let{value:n,onChange:i,disabled:a,getInputText:l,getSizeText:s,placeholder:u,hideSizeText:d,inputProps:p,InputProps:m,multiple:h,className:b,clearIconButtonProps:g={},...x}=e,{className:Z="",...y}=g,j=o.useRef(null),{startAdornment:P,...S}=m||{},F=h||p?.multiple||m?.inputProps?.multiple||!1,w=()=>{j.current&&(j.current.value="")},E=Array.isArray(n)?n.length>0:O(n);return V(()=>{let e=j.current;e&&!E&&(e.value="")},[E]),(0,r.jsx)(f.Z,{ref:t,type:"file",disabled:a,onChange:e=>{let t=e.target.files,n=t?Array.from(t):[];h?(i?.(n),0===n.length&&w()):(i?.(n[0]||null),n[0]||w())},className:`MuiFileInput-TextField ${b||""}`,InputProps:{startAdornment:(0,r.jsx)(N,{position:"start",children:P}),endAdornment:(0,r.jsxs)(N,{position:"end",style:{visibility:E?"visible":"hidden"},children:[d?null:(0,r.jsx)(c.Z,{variant:"caption",mr:"2px",lineHeight:1,className:"MuiFileInput-Typography-size-text",children:(()=>{if("function"==typeof s&&void 0!==n)return s(n);if(E){if(Array.isArray(n))return L(n.reduce((e,t)=>e+t.size,0));if(O(n))return L(n.size)}return""})()}),(0,r.jsx)(v.Z,{"aria-label":"Clear",title:"Clear",size:"small",disabled:a,className:`${Z} MuiFileInput-ClearIconButton`,onClick:e=>{e.preventDefault(),a||i?.(h?[]:null)},...y})]}),...S,inputProps:{text:null===n||Array.isArray(n)&&0===n.length?u||"":"function"==typeof l&&void 0!==n?l(n):n&&E?Array.isArray(n)&&n.length>1?`${n.length} files`:function(e){let t=(O(e)?e.name:e[0]?.name||"").split("."),n=t.pop();return{filename:t.join("."),extension:n}}(n):"",multiple:F,ref:j,isPlaceholder:!E,placeholder:u,...p,...m?.inputProps},inputComponent:W},...x})});var q=n(4488),Y=n(7066),H=n(1163);function X(){let[e,t]=(0,o.useState)(null),[n,i]=(0,o.useState)(""),[g,v]=(0,o.useState)([]),[x,Z]=(0,o.useState)(""),[y,j]=(0,o.useState)(null),P=(0,a.Z)(),S=(0,H.useRouter)(),F=new FormData;(0,o.useEffect)(()=>{j(sessionStorage.getItem("user"))},[]);let w=e=>{v(g.filter(t=>t!==e))},E=async t=>{t.preventDefault();let i=sessionStorage.getItem("bearerToken");if(0===n.length||!e){(0,b.yv)("Arquivo e descri\xe7\xe3o s\xe3o obrigat\xf3rios",{variant:"error"});return}F.set("file",e),F.set("description",n),F.set("tags",g.join()),await Y.Z.post(`http://localhost:3002/objeto/${y}/upload`,F,{headers:{Authorization:"Bearer "+i}}).then(e=>{(0,b.yv)("Post criado com sucesso!",{variant:"success"}),S.push("/")}).catch(e=>{console.error(e)})};return(0,r.jsx)(l.Z,{theme:P,children:(0,r.jsxs)(s.Z,{component:"main",maxWidth:"xs",children:[(0,r.jsx)(u.ZP,{}),(0,r.jsx)(c.Z,{component:"h1",variant:"h5",sx:{marginTop:5},children:"Novo Post"}),(0,r.jsx)(d.Z,{component:"form",noValidate:!0,onSubmit:E,sx:{my:3},children:(0,r.jsxs)(p.ZP,{container:!0,spacing:2,children:[(0,r.jsx)(p.ZP,{item:!0,xs:12,children:(0,r.jsx)(G,{value:e,onChange:e=>{t(e)},placeholder:"Inserir arquivo",InputProps:{startAdornment:(0,r.jsx)(q.Z,{})}})}),(0,r.jsx)(p.ZP,{item:!0,xs:12,children:(0,r.jsx)(f.Z,{autoComplete:"name",name:"descricao",required:!0,fullWidth:!0,id:"descricao",label:"Descri\xe7\xe3o",autoFocus:!0,value:n,onChange:e=>i(e.target.value)})}),0===g.length?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(p.ZP,{item:!0,xs:12,children:g.map(e=>(0,r.jsx)(m.Z,{label:e,onDelete:()=>w(e)},e))}),(0,r.jsx)(p.ZP,{item:!0,xs:12,children:(0,r.jsx)(f.Z,{label:"Tag",value:x,onChange:e=>Z(e.target.value)})}),(0,r.jsx)(p.ZP,{item:!0,xs:12,children:(0,r.jsx)(h.Z,{variant:"outlined",onClick:()=>{0!==x.length&&(Z(""),v([...g,x]))},children:"Adicionar tag"})}),(0,r.jsx)(p.ZP,{item:!0,xs:12,children:(0,r.jsx)(h.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Novo Post"})})]})})]})})}}},function(e){e.O(0,[119,946,888,774,179],function(){return e(e.s=5067)}),_N_E=e.O()}]);