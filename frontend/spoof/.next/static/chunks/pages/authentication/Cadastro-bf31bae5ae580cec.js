(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[449],{1143:function(e){"use strict";e.exports=function(e,t,n,i,r,a,o,l){if(!e){var s;if(void 0===t)s=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,i,r,a,o,l],c=0;(s=Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}}},9973:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/authentication/Cadastro",function(){return n(8514)}])},8514:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var i=n(5893),r=n(4440),a=n(8163),o=n(9979),l=n(8962),s=n(4466),u=n(7574),c=n(4191),f=n(747),h=n(9983),d=n(4246),p=n(1163),m=n(9496),g=n(7294),v=n(6627),P=n.n(v);let x=(0,c.Z)();function b(){let[e,t]=(0,g.useState)({nome:"",email:"",usuario:"",telefone:"",senha:"",senhaAux:""}),n=(0,p.useRouter)(),{enqueueSnackbar:c}=(0,m.Ds)(),v=async t=>{if(t.preventDefault(),e.senha!==e.senhaAux){c("Senhas n\xe3o coincidem.",{variant:"error"});return}await fetch("http://localhost:3001/auth/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>{e.ok?(c("Cadastro realizado com sucesso!",{variant:"success"}),n.push("Login")):400===e.status?e.json().then(e=>{c("Erro: ".concat(e.detail),{variant:"error"})}):c("Ocorreu um erro ao cadastrar.",{variant:"error"})}).catch(e=>{console.error("Erro ao enviar requisi\xe7\xe3o:",e),c("Ocorreu um erro ao enviar a requisi\xe7\xe3o.",{variant:"error"})})},b=e=>{let{name:n,value:i}=e.target;t(e=>({...e,[n]:i}))};return(0,i.jsx)(f.Z,{theme:x,children:(0,i.jsxs)(o.Z,{component:"main",maxWidth:"xs",children:[(0,i.jsx)(l.ZP,{}),(0,i.jsxs)(r.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,i.jsx)(d.Z,{component:"h1",variant:"h5",children:"Cadastre-se"}),(0,i.jsxs)(r.Z,{component:"form",noValidate:!0,onSubmit:v,sx:{mt:3},children:[(0,i.jsxs)(s.ZP,{container:!0,spacing:2,children:[(0,i.jsx)(s.ZP,{item:!0,xs:12,children:(0,i.jsx)(h.Z,{autoComplete:"name",name:"nome",required:!0,fullWidth:!0,id:"nome",label:"Nome",autoFocus:!0,value:e.nome,onChange:b})}),(0,i.jsx)(s.ZP,{item:!0,xs:12,children:(0,i.jsx)(h.Z,{required:!0,fullWidth:!0,id:"usuario",label:"Usu\xe1rio",name:"usuario",autoComplete:"username",value:e.usuario,onChange:b})}),(0,i.jsx)(s.ZP,{item:!0,xs:12,children:(0,i.jsx)(h.Z,{required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",value:e.email,onChange:b})}),(0,i.jsx)(s.ZP,{item:!0,xs:12,children:(0,i.jsx)(P(),{mask:"(99) 99999-9999",value:e.telefone,onChange:b,children:(0,i.jsx)(h.Z,{required:!0,fullWidth:!0,id:"telefone",label:"Telefone",name:"telefone",autoComplete:"tel",type:"tel"})})}),(0,i.jsx)(s.ZP,{item:!0,xs:12,children:(0,i.jsx)(h.Z,{required:!0,fullWidth:!0,name:"senha",label:"Senha",type:"password",id:"senha",autoComplete:"new-password",value:e.senha,onChange:b})}),(0,i.jsx)(s.ZP,{item:!0,xs:12,children:(0,i.jsx)(h.Z,{required:!0,fullWidth:!0,name:"senhaAux",label:"Repetir senha",type:"password",id:"senhaAux",autoComplete:"off",value:e.senhaAux,onChange:b,error:e.senhaAux.length>0&&e.senha!==e.senhaAux,helperText:e.senhaAux.length>0&&e.senha!==e.senhaAux?"Senhas n\xe3o coincidem.":""})})]}),(0,i.jsxs)(s.ZP,{item:!0,xs:12,children:[(0,i.jsx)(a.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Cadastrar"}),(0,i.jsx)(s.ZP,{container:!0,justifyContent:"flex-end",children:(0,i.jsx)(s.ZP,{item:!0,children:(0,i.jsx)(u.Z,{href:"Login",variant:"body2",children:"J\xe1 possui uma conta? Fa\xe7a o login."})})})]})]})]})]})})}},2703:function(e,t,n){"use strict";var i=n(414);function r(){}function a(){}a.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,a,o){if(o!==i){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:r};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},6627:function(e,t,n){e.exports=n(3462)},3462:function(e,t,n){"use strict";function i(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=n(7294),a=i(r),o=n(3935);n(5697);var l=i(n(1143));function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}function c(e){return requestAnimationFrame(e)}function f(e){cancelAnimationFrame(e)}function h(e){var t=e.ownerDocument;return t.hasFocus()&&t.activeElement===e}function d(e){return null==e?void 0:e.ownerDocument}function p(e){return r.useCallback(function(){var t,n,i,r=e.current,a="undefined"!=typeof window&&!!(i=null==(n=d(t=r))?void 0:n.defaultView)&&t instanceof i.HTMLElement;if(!r||!a)return null;if("INPUT"!==r.nodeName&&(r=r.querySelector("input")),!r)throw Error("react-input-mask: inputComponent doesn't contain input node");return r},[e])}n(2473);var m=["disabled","onBlur","onChange","onFocus","onMouseDown","readOnly","value"],g={9:/[0-9]/,a:/[A-Za-z]/,"*":/[A-Za-z0-9]/},v=function(e){var t=this;this.isCharacterAllowedAtPosition=function(e,n){var i=t.maskOptions.maskPlaceholder;return!!t.isCharacterFillingPosition(e,n)||!!i&&i[n]===e},this.isCharacterFillingPosition=function(e,n){var i=t.maskOptions.mask;return!!e&&!(n>=i.length)&&(t.isPositionEditable(n)?new RegExp(i[n]).test(e):i[n]===e)},this.isPositionEditable=function(e){var n=t.maskOptions,i=n.mask,r=n.permanents;return e<i.length&&-1===r.indexOf(e)},this.isValueEmpty=function(e){return e.split("").every(function(e,n){return!t.isPositionEditable(n)||!t.isCharacterFillingPosition(e,n)})},this.isValueFilled=function(e){return t.getFilledLength(e)===t.maskOptions.lastEditablePosition+1},this.getDefaultSelectionForValue=function(e){var n=t.getFilledLength(e),i=t.getRightEditablePosition(n);return{start:i,end:i}},this.getFilledLength=function(e){return function(e,t){for(var n=e.length-1;n>=0;n--)if(t(e[n],n))return n;return -1}(e.split(""),function(e,n){return t.isPositionEditable(n)&&t.isCharacterFillingPosition(e,n)})+1},this.getStringFillingLengthAtPosition=function(e,n){return e.split("").reduce(function(e,n){return t.insertCharacterAtPosition(e,n,e.length)},function(e,t){void 0===t&&(t=1);for(var n="",i=0;i<t;i++)n+=" ";return n}(0,n)).length-n},this.getLeftEditablePosition=function(e){for(var n=e;n>=0;n--)if(t.isPositionEditable(n))return n;return null},this.getRightEditablePosition=function(e){for(var n=t.maskOptions.mask,i=e;i<n.length;i++)if(t.isPositionEditable(i))return i;return null},this.formatValue=function(e){var n=t.maskOptions,i=n.maskPlaceholder,r=n.mask;if(!i){for(e=t.insertStringAtPosition("",e,0);e.length<r.length&&!t.isPositionEditable(e.length);)e+=r[e.length];return e}return t.insertStringAtPosition(i,e,0)},this.clearRange=function(e,n,i){if(!i)return e;var r=n+i,a=t.maskOptions,o=a.maskPlaceholder,l=a.mask,s=e.split("").map(function(e,i){var a=t.isPositionEditable(i);return o||!(i>=r)||a?i<n||i>=r?e:a?o?o[i]:"":l[i]:""}).join("");return t.formatValue(s)},this.insertCharacterAtPosition=function(e,n,i){var r=t.maskOptions,a=r.mask,o=r.maskPlaceholder;if(i>=a.length)return e;var l=t.isCharacterAllowedAtPosition(n,i),s=t.isPositionEditable(i),u=t.getRightEditablePosition(i),c=o&&u?n===o[u]:null,f=e.slice(0,i);return!l&&s||(e=f+(l?n:a[i])),l||s||c||(e=t.insertCharacterAtPosition(e,n,i+1)),e},this.insertStringAtPosition=function(e,n,i){var r=t.maskOptions,a=r.mask,o=r.maskPlaceholder;if(!n||i>=a.length)return e;var l=n.split(""),s=t.isValueFilled(e)||!!o,u=e.slice(i);return(e=l.reduce(function(e,n){return t.insertCharacterAtPosition(e,n,e.length)},e.slice(0,i)),s)?e+=u.slice(e.length-i):t.isValueFilled(e)?e+=a.slice(e.length).join(""):e=u.split("").filter(function(e,n){return t.isPositionEditable(i+n)}).reduce(function(e,n){var i=t.getRightEditablePosition(e.length);return null===i?e:(t.isPositionEditable(e.length)||(e+=a.slice(e.length,i).join("")),t.insertCharacterAtPosition(e,n,e.length))},e),e},this.processChange=function(e,n){var i=t.maskOptions,r=i.mask,a=i.prefix,o=i.lastEditablePosition,l=e.value,s=e.selection,u=n.value,c=n.selection,f=l,h="",d=0,p=0,m=Math.min(c.start,s.start);return s.end>c.start?(h=f.slice(c.start,s.end),p=(d=t.getStringFillingLengthAtPosition(h,m))?c.length:0):f.length<u.length&&(p=u.length-f.length),f=u,p&&(1!==p||c.length||(m=c.start===s.start?t.getRightEditablePosition(s.start):t.getLeftEditablePosition(s.start)),f=t.clearRange(f,m,p)),f=t.insertStringAtPosition(f,h,m),(m+=d)>=r.length?m=r.length:m<a.length&&!d?m=a.length:m>=a.length&&m<o&&d&&(m=t.getRightEditablePosition(m)),{value:f=t.formatValue(f),enteredString:h,selection:{start:m,end:m}}},this.maskOptions=function(e){var t=e.mask,n=e.maskPlaceholder,i=[];if(!t)return{maskPlaceholder:null,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};if("string"==typeof t){var r=!1,a="";t.split("").forEach(function(e){r||"\\"!==e?(!r&&g[e]||i.push(a.length),a+=e,r=!1):r=!0}),t=a.split("").map(function(e,t){return -1===i.indexOf(t)?g[e]:e})}else t.forEach(function(e,t){"string"==typeof e&&i.push(t)});n&&(n=1===n.length?t.map(function(e,t){return -1!==i.indexOf(t)?e:n}):n.split(""),i.forEach(function(e){n[e]=t[e]}),n=n.join(""));for(var o=i.filter(function(e,t){return e===t}).map(function(e){return t[e]}).join(""),l=t.length-1;-1!==i.indexOf(l);)l--;return{maskPlaceholder:n,prefix:o,mask:t,lastEditablePosition:l,permanents:i}}(e)},P=function(e){function t(){return e.apply(this,arguments)||this}return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,function(e,t){for(var n=Object.getOwnPropertyNames(t),i=0;i<n.length;i++){var r=n[i],a=Object.getOwnPropertyDescriptor(t,r);a&&a.configurable&&void 0===e[r]&&Object.defineProperty(e,r,a)}}(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=u(e,["children"]);return a.cloneElement(t,n)},t}(a.Component),x=r.forwardRef(function(e,t){var n=e.alwaysShowMask,i=e.children,g=e.mask,x=e.maskPlaceholder,b=e.beforeMaskedStateChange,k=u(e,["alwaysShowMask","children","mask","maskPlaceholder","beforeMaskedStateChange"]);E=e.mask,C=e.maskPlaceholder,E&&C&&1!==C.length&&C.length!==E.length&&l(!1);var E,C,y,S,j,O,w,A,V,F,Z,L,R,T,_,D,M,I,N,q,W,B,U,X,z,Y,H,J,G=new v({mask:g,maskPlaceholder:x}),K=!!g,Q=!k.disabled&&!k.readOnly,$=null!==e.value&&void 0!==e.value,ee=(J=r.useRef(),r.useEffect(function(){J.current=K}),J.current),et=(y=""+(($?e.value:e.defaultValue)||""),W=(S=N=r.useRef(),A=r.useRef({start:null,end:null}),V=p(S),F=r.useCallback(function(){var e,t,n;return{start:t=(e=V()).selectionStart,end:n=e.selectionEnd,length:n-t}},[V]),Z=r.useCallback(function(){return A.current},[]),L=r.useCallback(function(e){var t,n,i=V();i&&h(i)&&(t=e.start,void 0===(n=e.end)&&(n=t),i.setSelectionRange(t,n),A.current=F())},[V,F]),R=r.useCallback(function(){A.current=F()},[F]),_=(j=r.useRef(null),O=r.useCallback(function(){null===j.current&&function e(){R(),j.current=c(e)}()},[R]),w=r.useCallback(function(){f(j.current),j.current=null},[]),r.useEffect(function(){j.current&&(w(),O())},[O,w]),r.useEffect(f,[]),T=[O,w])[0],D=T[1],r.useLayoutEffect(function(){if(K){var e=V();return e.addEventListener("focus",_),e.addEventListener("blur",D),h(e)&&_(),function(){e.removeEventListener("focus",_),e.removeEventListener("blur",D),D()}}}),q={getSelection:F,getLastSelection:Z,setSelection:L}).getSelection,B=q.getLastSelection,U=q.setSelection,z=(M=p(N),I=r.useRef(y),X={getValue:r.useCallback(function(){return M().value},[M]),getLastValue:r.useCallback(function(){return I.current},[]),setValue:r.useCallback(function(e){I.current=e;var t=M();t&&(t.value=e)},[M])}).getValue,Y=X.getLastValue,H=X.setValue,{inputRef:N,getInputState:function(){return{value:z(),selection:W()}},getLastInputState:function(){return{value:Y(),selection:B()}},setInputState:function(e){var t=e.value,n=e.selection;H(t),U(n)}}),en=et.inputRef,ei=et.getInputState,er=et.setInputState,ea=et.getLastInputState,eo=p(en);if(K&&$){var el=eo(),es=el&&h(el)||n||e.value?G.formatValue(e.value):e.value;b&&(es=b({nextState:{value:es,selection:{start:null,end:null}}}).value),er(s({},ea(),{value:es}))}var eu=ea(),ec=eu.selection,ef=eu.value;r.useLayoutEffect(function(){if(K){var e=h(eo()),t=ei(),i=s({},t);if(!$){var r=t.value,a=G.formatValue(r),o=G.isValueEmpty(a);!o||e||n?i.value=a:o&&!e&&(i.value="")}e&&!ee?i.selection=G.getDefaultSelectionForValue(i.value):$&&e&&ec&&null!==ec.start&&null!==ec.end&&(i.selection=ec),b&&(i=b({currentState:t,nextState:i})),er(i)}});var eh=s({},k,{onFocus:function(t){en.current=t.target;var n=ei().value;if(K&&!G.isValueFilled(n)){var i=G.formatValue(n),r=G.getDefaultSelectionForValue(i),a={value:i,selection:r};b&&(i=(a=b({currentState:ei(),nextState:a})).value,r=a.selection),er(a),i!==n&&e.onChange&&e.onChange(t),c(function(){er(ea())})}e.onFocus&&e.onFocus(t)},onBlur:function(t){var i=ei().value,r=ea().value;if(K&&!n&&G.isValueEmpty(r)){var a="",o={value:a,selection:{start:null,end:null}};b&&(a=(o=b({currentState:ei(),nextState:o})).value),er(o),a!==i&&e.onChange&&e.onChange(t)}e.onBlur&&e.onBlur(t)},onChange:K&&Q?function(t){var n=ei(),i=ea(),r=G.processChange(n,i);b&&(r=b({currentState:n,previousState:i,nextState:r})),er(r),e.onChange&&e.onChange(t)}:e.onChange,onMouseDown:K&&Q?function(t){var n=eo(),i=ei().value,r=d(n);if(!h(n)&&!G.isValueFilled(i)){var a=t.clientX,o=t.clientY,l=(new Date).getTime();r.addEventListener("mouseup",function e(t){if(r.removeEventListener("mouseup",e),h(n)){var i=Math.max(Math.abs(t.clientX-a),Math.abs(t.clientY-o)),u=(new Date).getTime()-l;if(i<=10&&u<=200||i<=5&&u<=300){var c=ea();er(s({},c,{selection:G.getDefaultSelectionForValue(c.value)}))}}})}e.onMouseDown&&e.onMouseDown(t)}:e.onMouseDown,ref:function(e){en.current=o.findDOMNode(e),"function"!=typeof t?null!==t&&"object"==typeof t&&(t.current=e):t(e)},value:K&&$?ef:e.value});return i?(m.filter(function(t){return null!=i.props[t]&&i.props[t]!==e[t]}).length&&l(!1),a.createElement(P,eh,i)):a.createElement("input",eh)});x.displayName="InputMask",x.defaultProps={alwaysShowMask:!1,maskPlaceholder:"_"},e.exports=x},2473:function(e){"use strict";e.exports=function(){}}},function(e){e.O(0,[184,415,888,774,179],function(){return e(e.s=9973)}),_N_E=e.O()}]);