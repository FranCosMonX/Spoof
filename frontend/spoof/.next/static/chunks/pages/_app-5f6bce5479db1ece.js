(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(6814)}])},6814:function(n,e,t){"use strict";t.r(e);var r=t(5893);t(7294);var i=t(9496);e.default=function(n){let{Component:e,pageProps:t}=n;return(0,r.jsx)(i.wT,{maxSnack:3,children:(0,r.jsx)(e,{...t})})}},9496:function(n,e,t){"use strict";t.d(e,{wT:function(){return nO},Ds:function(){return nT}});var r,i,o,a,s,u,c=t(7294),l=t(3935),d=function(){for(var n,e,t=0,r="";t<arguments.length;)(n=arguments[t++])&&(e=function n(e){var t,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e){if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(i&&(i+=" "),i+=r);else for(t in e)e[t]&&(i&&(i+=" "),i+=t)}return i}(n))&&(r&&(r+=" "),r+=e);return r};let f={data:""},p=n=>"object"==typeof window?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||f,m=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,h=/\/\*[^]*?\*\/|  +/g,g=/\n+/g,x=(n,e)=>{let t="",r="",i="";for(let o in n){let a=n[o];"@"==o[0]?"i"==o[1]?t=o+" "+a+";":r+="f"==o[1]?x(a,o):o+"{"+x(a,"k"==o[1]?"":e)+"}":"object"==typeof a?r+=x(a,e?e.replace(/([^,])+/g,n=>o.replace(/(^:.*)|([^,])+/g,e=>/&/.test(e)?e.replace(/&/g,n):n?n+" "+e:e)):o):null!=a&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=x.p?x.p(o,a):o+":"+a+";")}return t+(e&&i?e+"{"+i+"}":i)+r},E={},v=n=>{if("object"==typeof n){let e="";for(let t in n)e+=t+v(n[t]);return e}return n},b=(n,e,t,r,i)=>{var o;let a=v(n),s=E[a]||(E[a]=(n=>{let e=0,t=11;for(;e<n.length;)t=101*t+n.charCodeAt(e++)>>>0;return"go"+t})(a));if(!E[s]){let e=a!==n?n:(n=>{let e,t,r=[{}];for(;e=m.exec(n.replace(h,""));)e[4]?r.shift():e[3]?(t=e[3].replace(g," ").trim(),r.unshift(r[0][t]=r[0][t]||{})):r[0][e[1]]=e[2].replace(g," ").trim();return r[0]})(n);E[s]=x(i?{["@keyframes "+s]:e}:e,t?"":"."+s)}let u=t&&E.g?E.g:null;return t&&(E.g=E[s]),o=E[s],u?e.data=e.data.replace(u,o):-1===e.data.indexOf(o)&&(e.data=r?o+e.data:e.data+o),s},k=(n,e,t)=>n.reduce((n,r,i)=>{let o=e[i];if(o&&o.call){let n=o(t),e=n&&n.props&&n.props.className||/^go/.test(n)&&n;o=e?"."+e:n&&"object"==typeof n?n.props?"":x(n,""):!1===n?"":n}return n+r+(null==o?"":o)},"");function y(n){let e=this||{},t=n.call?n(e.p):n;return b(t.unshift?t.raw?k(t,[].slice.call(arguments,1),e.p):t.reduce((n,t)=>Object.assign(n,t&&t.call?t(e.p):t),{}):t,p(e.target),e.g,e.o,e.k)}function C(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function w(n,e,t){return e&&C(n.prototype,e),t&&C(n,t),n}function S(){return(S=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function O(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}function T(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}function L(n){if(void 0===n)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return n}y.bind({g:1}),y.bind({k:1});var D=function(){return""},N=c.createContext({enqueueSnackbar:D,closeSnackbar:D}),j="@media (max-width:599.95px)",H="@media (min-width:600px)",R=function(n){return n.charAt(0).toUpperCase()+n.slice(1)},M=function(n){return""+R(n.vertical)+R(n.horizontal)},q=function(n){return!!n||0===n},P="unmounted",A="exited",_="entering",I="entered",V="exiting",W=function(n){function e(e){t=n.call(this,e)||this;var t,r,i=e.appear;return t.appearStatus=null,e.in?i?(r=A,t.appearStatus=_):r=I:r=e.unmountOnExit||e.mountOnEnter?P:A,t.state={status:r},t.nextCallback=null,t}O(e,n),e.getDerivedStateFromProps=function(n,e){return n.in&&e.status===P?{status:A}:null};var t=e.prototype;return t.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},t.componentDidUpdate=function(n){var e=null;if(n!==this.props){var t=this.state.status;this.props.in?t!==_&&t!==I&&(e=_):(t===_||t===I)&&(e=V)}this.updateStatus(!1,e)},t.componentWillUnmount=function(){this.cancelNextCallback()},t.getTimeouts=function(){var n=this.props.timeout,e=n,t=n;return null!=n&&"number"!=typeof n&&"string"!=typeof n&&(t=n.exit,e=n.enter),{exit:t,enter:e}},t.updateStatus=function(n,e){void 0===n&&(n=!1),null!==e?(this.cancelNextCallback(),e===_?this.performEnter(n):this.performExit()):this.props.unmountOnExit&&this.state.status===A&&this.setState({status:P})},t.performEnter=function(n){var e=this,t=this.props.enter,r=this.getTimeouts();if(!n&&!t){this.safeSetState({status:I},function(){e.props.onEntered&&e.props.onEntered(e.node,n)});return}this.props.onEnter&&this.props.onEnter(this.node,n),this.safeSetState({status:_},function(){e.props.onEntering&&e.props.onEntering(e.node,n),e.onTransitionEnd(r.enter,function(){e.safeSetState({status:I},function(){e.props.onEntered&&e.props.onEntered(e.node,n)})})})},t.performExit=function(){var n=this,e=this.props.exit,t=this.getTimeouts();if(!e){this.safeSetState({status:A},function(){n.props.onExited&&n.props.onExited(n.node)});return}this.props.onExit&&this.props.onExit(this.node),this.safeSetState({status:V},function(){n.props.onExiting&&n.props.onExiting(n.node),n.onTransitionEnd(t.exit,function(){n.safeSetState({status:A},function(){n.props.onExited&&n.props.onExited(n.node)})})})},t.cancelNextCallback=function(){null!==this.nextCallback&&this.nextCallback.cancel&&(this.nextCallback.cancel(),this.nextCallback=null)},t.safeSetState=function(n,e){e=this.setNextCallback(e),this.setState(n,e)},t.setNextCallback=function(n){var e=this,t=!0;return this.nextCallback=function(){t&&(t=!1,e.nextCallback=null,n())},this.nextCallback.cancel=function(){t=!1},this.nextCallback},t.onTransitionEnd=function(n,e){this.setNextCallback(e);var t=null==n&&!this.props.addEndListener;if(!this.node||t){setTimeout(this.nextCallback,0);return}this.props.addEndListener&&this.props.addEndListener(this.node,this.nextCallback),null!=n&&setTimeout(this.nextCallback,n)},t.render=function(){var n=this.state.status;if(n===P)return null;var e=this.props;return(0,e.children)(n,T(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]))},w(e,[{key:"node",get:function(){var n,e=null===(n=this.props.nodeRef)||void 0===n?void 0:n.current;if(!e)throw Error("notistack - Custom snackbar is not refForwarding");return e}}]),e}(c.Component);function z(){}function F(n,e){"function"==typeof n?n(e):n&&(n.current=e)}function B(n,e){return(0,c.useMemo)(function(){return null==n&&null==e?null:function(t){F(n,t),F(e,t)}},[n,e])}function X(n){var e=n.timeout,t=n.style,r=void 0===t?{}:t,i=n.mode;return{duration:"object"==typeof e?e[i]||0:e,easing:r.transitionTimingFunction,delay:r.transitionDelay}}W.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:z,onEntering:z,onEntered:z,onExit:z,onExiting:z,onExited:z};var Z={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Q=function(n){n.scrollTop=n.scrollTop},U=function(n){return Math.round(n)+"ms"};function G(n,e){void 0===n&&(n=["all"]);var t=e||{},r=t.duration,i=void 0===r?300:r,o=t.easing,a=void 0===o?Z.easeInOut:o,s=t.delay,u=void 0===s?0:s;return(Array.isArray(n)?n:[n]).map(function(n){return n+" "+("string"==typeof i?i:U(i))+" "+a+" "+("string"==typeof u?u:U(u))}).join(",")}function Y(n){return(n&&n.ownerDocument||document).defaultView||window}function $(n,e){if(e){var t=function(n,e){var t,r=e.getBoundingClientRect(),i=Y(e);if(e.fakeTransform)t=e.fakeTransform;else{var o=i.getComputedStyle(e);t=o.getPropertyValue("-webkit-transform")||o.getPropertyValue("transform")}var a=0,s=0;if(t&&"none"!==t&&"string"==typeof t){var u=t.split("(")[1].split(")")[0].split(",");a=parseInt(u[4],10),s=parseInt(u[5],10)}switch(n){case"left":return"translateX("+(i.innerWidth+a-r.left)+"px)";case"right":return"translateX(-"+(r.left+r.width-a)+"px)";case"up":return"translateY("+(i.innerHeight+s-r.top)+"px)";default:return"translateY(-"+(r.top+r.height-s)+"px)"}}(n,e);t&&(e.style.webkitTransform=t,e.style.transform=t)}}var J=(0,c.forwardRef)(function(n,e){var t=n.children,r=n.direction,i=void 0===r?"down":r,o=n.in,a=n.style,s=n.timeout,u=void 0===s?0:s,l=n.onEnter,d=n.onEntered,f=n.onExit,p=n.onExited,m=T(n,["children","direction","in","style","timeout","onEnter","onEntered","onExit","onExited"]),h=(0,c.useRef)(null),g=B(t.ref,h),x=B(g,e),E=(0,c.useCallback)(function(){h.current&&$(i,h.current)},[i]);return(0,c.useEffect)(function(){if(!o&&"down"!==i&&"right"!==i){var n=function(n,e){var t;function r(){for(var r=this,i=arguments.length,o=Array(i),a=0;a<i;a++)o[a]=arguments[a];clearTimeout(t),t=setTimeout(function(){n.apply(r,o)},e)}return void 0===e&&(e=166),r.clear=function(){clearTimeout(t)},r}(function(){h.current&&$(i,h.current)}),e=Y(h.current);return e.addEventListener("resize",n),function(){n.clear(),e.removeEventListener("resize",n)}}},[i,o]),(0,c.useEffect)(function(){o||E()},[o,E]),(0,c.createElement)(W,Object.assign({appear:!0,nodeRef:h,onEnter:function(n,e){$(i,n),Q(n),l&&l(n,e)},onEntered:d,onEntering:function(n){var e=(null==a?void 0:a.transitionTimingFunction)||Z.easeOut,t=X({timeout:u,mode:"enter",style:S({},a,{transitionTimingFunction:e})});n.style.webkitTransition=G("-webkit-transform",t),n.style.transition=G("transform",t),n.style.webkitTransform="none",n.style.transform="none"},onExit:function(n){var e=(null==a?void 0:a.transitionTimingFunction)||Z.sharp,t=X({timeout:u,mode:"exit",style:S({},a,{transitionTimingFunction:e})});n.style.webkitTransition=G("-webkit-transform",t),n.style.transition=G("transform",t),$(i,n),f&&f(n)},onExited:function(n){n.style.webkitTransition="",n.style.transition="",p&&p(n)},in:o,timeout:u},m),function(n,e){return(0,c.cloneElement)(t,S({ref:x,style:S({visibility:"exited"!==n||o?void 0:"hidden"},a,{},t.props.style)},e))})});J.displayName="Slide";var K=function(n){return c.createElement("svg",Object.assign({viewBox:"0 0 24 24",focusable:"false",style:{fontSize:20,marginInlineEnd:8,userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0}},n))},nn={maxSnack:3,persist:!1,hideIconVariant:!1,disableWindowBlurListener:!1,variant:"default",autoHideDuration:5e3,iconVariant:{default:void 0,success:c.createElement(function(){return c.createElement(K,null,c.createElement("path",{d:"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41\n        10.59L10 14.17L17.59 6.58L19 8L10 17Z"}))},null),warning:c.createElement(function(){return c.createElement(K,null,c.createElement("path",{d:"M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"}))},null),error:c.createElement(function(){return c.createElement(K,null,c.createElement("path",{d:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,\n        6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,\n        13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"}))},null),info:c.createElement(function(){return c.createElement(K,null,c.createElement("path",{d:"M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,\n        0 22,12A10,10 0 0,0 12,2Z"}))},null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},TransitionComponent:J,transitionDuration:{enter:225,exit:195}},ne=function(n,e){var t=function(n){return"number"==typeof n||null===n};return t(n)?n:t(e)?e:nn.autoHideDuration},nt=function(n,e){var t=function(n,e){return e.some(function(e){return typeof n===e})};return t(n,["string","number"])?n:t(n,["object"])?S({},nn.transitionDuration,{},t(e,["object"])&&e,{},n):t(e,["string","number"])?e:t(e,["object"])?S({},nn.transitionDuration,{},e):nn.transitionDuration};function nr(n){return Object.entries(n).reduce(function(n,e){var t,r=e[0],i=e[1];return S({},n,((t={})[r]=y(i),t))},{})}var ni="notistack-CollapseWrapper",no=nr({root:{height:0},entered:{height:"auto"}}),na=(0,c.forwardRef)(function(n,e){var t=n.children,r=n.in,i=n.onExited,o=(0,c.useRef)(null),a=(0,c.useRef)(null),s=B(e,a),u=function(){return o.current?o.current.clientHeight:0};return(0,c.createElement)(W,{in:r,unmountOnExit:!0,onEnter:function(n){n.style.height="0px"},onEntered:function(n){n.style.height="auto"},onEntering:function(n){var e=u(),t=X({timeout:175,mode:"enter"}),r=t.duration,i=t.easing;n.style.transitionDuration="string"==typeof r?r:r+"ms",n.style.height=e+"px",n.style.transitionTimingFunction=i||""},onExit:function(n){n.style.height=u()+"px"},onExited:i,onExiting:function(n){Q(n);var e=X({timeout:175,mode:"exit"}),t=e.duration,r=e.easing;n.style.transitionDuration="string"==typeof t?t:t+"ms",n.style.height="0px",n.style.transitionTimingFunction=r||""},nodeRef:a,timeout:175},function(n,e){return(0,c.createElement)("div",Object.assign({ref:s,className:d(no.root,"entered"===n&&no.entered),style:S({pointerEvents:"all",overflow:"hidden",minHeight:"0px",transition:G("height")},"entered"===n&&{overflow:"visible"},{},"exited"===n&&!r&&{visibility:"hidden"})},e),(0,c.createElement)("div",{ref:o,className:ni,style:{display:"flex",width:"100%"}},t))})});na.displayName="Collapse";var ns={right:"left",left:"right",bottom:"up",top:"down"},nu=function(n){void 0===n&&(n={});var e={containerRoot:!0,containerAnchorOriginTopCenter:!0,containerAnchorOriginBottomCenter:!0,containerAnchorOriginTopRight:!0,containerAnchorOriginBottomRight:!0,containerAnchorOriginTopLeft:!0,containerAnchorOriginBottomLeft:!0};return Object.keys(n).filter(function(n){return!e[n]}).reduce(function(e,t){var r;return S({},e,((r={})[t]=n[t],r))},{})},nc=function(){};function nl(n,e){return n.reduce(function(n,t){return null==t?n:function(){for(var r=arguments.length,i=Array(r),o=0;o<r;o++)i[o]=arguments[o];var a=[].concat(i);e&&-1===a.indexOf(e)&&a.push(e),n.apply(this,a),t.apply(this,a)}},nc)}var nd="undefined"!=typeof window?c.useLayoutEffect:c.useEffect;function nf(n){var e=(0,c.useRef)(n);return nd(function(){e.current=n}),(0,c.useCallback)(function(){return e.current.apply(void 0,arguments)},[])}var np=(0,c.forwardRef)(function(n,e){var t=n.children,r=n.className,i=n.autoHideDuration,o=n.disableWindowBlurListener,a=void 0!==o&&o,s=n.onClose,u=n.id,l=n.open,f=n.SnackbarProps,p=void 0===f?{}:f,m=(0,c.useRef)(),h=nf(function(){s&&s.apply(void 0,arguments)}),g=nf(function(n){s&&null!=n&&(m.current&&clearTimeout(m.current),m.current=setTimeout(function(){h(null,"timeout",u)},n))});(0,c.useEffect)(function(){return l&&g(i),function(){m.current&&clearTimeout(m.current)}},[l,i,g]);var x=function(){m.current&&clearTimeout(m.current)},E=(0,c.useCallback)(function(){null!=i&&g(.5*i)},[i,g]);return(0,c.useEffect)(function(){if(!a&&l)return window.addEventListener("focus",E),window.addEventListener("blur",x),function(){window.removeEventListener("focus",E),window.removeEventListener("blur",x)}},[a,E,l]),(0,c.createElement)("div",Object.assign({ref:e},p,{className:d("notistack-Snackbar",r),onMouseEnter:function(n){p.onMouseEnter&&p.onMouseEnter(n),x()},onMouseLeave:function(n){p.onMouseLeave&&p.onMouseLeave(n),E()}}),t)});np.displayName="Snackbar";var nm=nr({root:((r={display:"flex",flexWrap:"wrap",flexGrow:1})[H]={flexGrow:"initial",minWidth:"288px"},r)}),nh=(0,c.forwardRef)(function(n,e){var t=n.className,r=T(n,["className"]);return c.createElement("div",Object.assign({ref:e,className:d(nm.root,t)},r))});nh.displayName="SnackbarContent";var ng=nr({root:{backgroundColor:"#313131",fontSize:"0.875rem",lineHeight:1.43,letterSpacing:"0.01071em",color:"#fff",alignItems:"center",padding:"6px 16px",borderRadius:"4px",boxShadow:"0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)"},lessPadding:{paddingLeft:"20px"},default:{backgroundColor:"#313131"},success:{backgroundColor:"#43a047"},error:{backgroundColor:"#d32f2f"},warning:{backgroundColor:"#ff9800"},info:{backgroundColor:"#2196f3"},message:{display:"flex",alignItems:"center",padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:"16px",marginRight:"-8px"}}),nx="notistack-snackbar",nE=(0,c.forwardRef)(function(n,e){var t=n.id,r=n.message,i=n.action,o=n.iconVariant,a=n.variant,s=n.hideIconVariant,u=n.style,l=n.className,f=o[a],p=i;return"function"==typeof p&&(p=p(t)),c.createElement(nh,{ref:e,role:"alert","aria-describedby":nx,style:u,className:d("notistack-MuiContent","notistack-MuiContent-"+a,ng.root,ng[a],l,!s&&f&&ng.lessPadding)},c.createElement("div",{id:nx,className:ng.message},s?null:f,r),p&&c.createElement("div",{className:ng.action},p))});nE.displayName="MaterialDesignContent";var nv=(0,c.memo)(nE),nb=nr({wrappedRoot:{width:"100%",position:"relative",transform:"translateX(0)",top:0,right:0,bottom:0,left:0,minWidth:"288px"}}),nk=function(n){var e,t=(0,c.useRef)(),r=(0,c.useState)(!0),i=r[0],o=r[1],a=nl([n.snack.onClose,n.onClose]),s=(0,c.useCallback)(function(){t.current=setTimeout(function(){o(function(n){return!n})},125)},[]);(0,c.useEffect)(function(){return function(){t.current&&clearTimeout(t.current)}},[]);var u=n.snack,l=n.classes,f=n.Component,p=(0,c.useMemo)(function(){return nu(l)},[l]),m=u.open,h=u.SnackbarProps,g=u.TransitionComponent,x=u.TransitionProps,E=u.transitionDuration,v=u.disableWindowBlurListener,b=u.content,k=T(u,["open","SnackbarProps","TransitionComponent","TransitionProps","transitionDuration","disableWindowBlurListener","content","entered","requestClose","onEnter","onEntered","onExit","onExited"]),y=S({direction:"center"!==(e=k.anchorOrigin).horizontal?ns[e.horizontal]:ns[e.vertical],timeout:E},x),C=b;"function"==typeof C&&(C=C(k.id,k.message));var w=["onEnter","onEntered","onExit","onExited"].reduce(function(e,t){var r;return S({},e,((r={})[t]=nl([n.snack[t],n[t]],k.id),r))},{});return c.createElement(na,{in:i,onExited:w.onExited},c.createElement(np,{open:m,id:k.id,disableWindowBlurListener:v,autoHideDuration:k.autoHideDuration,className:d(nb.wrappedRoot,p.root,p["anchorOrigin"+M(k.anchorOrigin)]),SnackbarProps:h,onClose:a},c.createElement(g,Object.assign({},y,{appear:!0,in:m,onExit:w.onExit,onExited:s,onEnter:w.onEnter,onEntered:nl([w.onEntered,function(){n.snack.requestClose&&a(null,"instructed",n.snack.id)}],k.id)}),C||c.createElement(void 0===f?nv:f,Object.assign({},k)))))},ny="."+ni,nC=nr({root:((i={boxSizing:"border-box",display:"flex",maxHeight:"100%",position:"fixed",zIndex:1400,height:"auto",width:"auto",transition:G(["top","right","bottom","left","max-width"],{duration:300,easing:"ease"}),pointerEvents:"none"})[ny]={padding:"6px 0px",transition:"padding 300ms ease 0ms"},i.maxWidth="calc(100% - 40px)",i[j]={width:"100%",maxWidth:"calc(100% - 32px)"},i),rootDense:((o={})[ny]={padding:"2px 0px"},o),top:{top:"14px",flexDirection:"column"},bottom:{bottom:"14px",flexDirection:"column-reverse"},left:((a={left:"20px"})[H]={alignItems:"flex-start"},a[j]={left:"16px"},a),right:((s={right:"20px"})[H]={alignItems:"flex-end"},s[j]={right:"16px"},s),center:((u={left:"50%",transform:"translateX(-50%)"})[H]={alignItems:"center"},u)}),nw=(0,c.memo)(function(n){var e=n.classes,t=void 0===e?{}:e,r=n.anchorOrigin,i=n.dense,o=n.children,a=d("notistack-SnackbarContainer",nC[r.vertical],nC[r.horizontal],nC.root,t.containerRoot,t["containerAnchorOrigin"+M(r)],i&&nC.rootDense);return c.createElement("div",{className:a},o)}),nS=function(n){return!("string"==typeof n||(0,c.isValidElement)(n))},nO=function(n){function e(e){var t;return(t=n.call(this,e)||this).enqueueSnackbar=function(n,e){if(void 0===e&&(e={}),null==n)throw Error("enqueueSnackbar called with invalid argument");var r,i=nS(n)?n:e,o=nS(n)?n.message:n,a=i.key,s=i.preventDuplicate,u=T(i,["key","preventDuplicate"]),c=q(a),l=c?a:new Date().getTime()+Math.random(),f=(r=t.props,function(n,e){return(void 0===e&&(e=!1),e)?S({},nn[n],{},r[n],{},u[n]):"autoHideDuration"===n?ne(u.autoHideDuration,r.autoHideDuration):"transitionDuration"===n?nt(u.transitionDuration,r.transitionDuration):u[n]||r[n]||nn[n]}),p=S({id:l},u,{message:o,open:!0,entered:!1,requestClose:!1,persist:f("persist"),action:f("action"),content:f("content"),variant:f("variant"),anchorOrigin:f("anchorOrigin"),disableWindowBlurListener:f("disableWindowBlurListener"),autoHideDuration:f("autoHideDuration"),hideIconVariant:f("hideIconVariant"),TransitionComponent:f("TransitionComponent"),transitionDuration:f("transitionDuration"),TransitionProps:f("TransitionProps",!0),iconVariant:f("iconVariant",!0),style:f("style",!0),SnackbarProps:f("SnackbarProps",!0),className:d(t.props.className,u.className)});return p.persist&&(p.autoHideDuration=void 0),t.setState(function(n){if(void 0===s&&t.props.preventDuplicate||s){var e=function(n){return c?n.id===l:n.message===o},r=n.queue.findIndex(e)>-1,i=n.snacks.findIndex(e)>-1;if(r||i)return n}return t.handleDisplaySnack(S({},n,{queue:[].concat(n.queue,[p])}))}),l},t.handleDisplaySnack=function(n){return n.snacks.length>=t.maxSnack?t.handleDismissOldest(n):t.processQueue(n)},t.processQueue=function(n){var e=n.queue,t=n.snacks;return e.length>0?S({},n,{snacks:[].concat(t,[e[0]]),queue:e.slice(1,e.length)}):n},t.handleDismissOldest=function(n){if(n.snacks.some(function(n){return!n.open||n.requestClose}))return n;var e=!1,r=!1;n.snacks.reduce(function(n,e){return n+(e.open&&e.persist?1:0)},0)===t.maxSnack&&(r=!0);var i=n.snacks.map(function(n){return e||n.persist&&!r?S({},n):(e=!0,n.entered)?(n.onClose&&n.onClose(null,"maxsnack",n.id),t.props.onClose&&t.props.onClose(null,"maxsnack",n.id),S({},n,{open:!1})):S({},n,{requestClose:!0})});return S({},n,{snacks:i})},t.handleEnteredSnack=function(n,e,r){if(!q(r))throw Error("handleEnteredSnack Cannot be called with undefined key");t.setState(function(n){return{snacks:n.snacks.map(function(n){return n.id===r?S({},n,{entered:!0}):S({},n)})}})},t.handleCloseSnack=function(n,e,r){t.props.onClose&&t.props.onClose(n,e,r);var i=void 0===r;t.setState(function(n){var e=n.snacks,t=n.queue;return{snacks:e.map(function(n){return i||n.id===r?n.entered?S({},n,{open:!1}):S({},n,{requestClose:!0}):S({},n)}),queue:t.filter(function(n){return n.id!==r})}})},t.closeSnackbar=function(n){var e=t.state.snacks.find(function(e){return e.id===n});q(n)&&e&&e.onClose&&e.onClose(null,"instructed",n),t.handleCloseSnack(null,"instructed",n)},t.handleExitedSnack=function(n,e){if(!q(e))throw Error("handleExitedSnack Cannot be called with undefined key");t.setState(function(n){var r=t.processQueue(S({},n,{snacks:n.snacks.filter(function(n){return n.id!==e})}));return 0===r.queue.length?r:t.handleDismissOldest(r)})},t.enqueueSnackbar,t.closeSnackbar,t.state={snacks:[],queue:[],contextValue:{enqueueSnackbar:t.enqueueSnackbar.bind(L(t)),closeSnackbar:t.closeSnackbar.bind(L(t))}},t}return O(e,n),e.prototype.render=function(){var n=this,e=this.state.contextValue,t=this.props,r=t.domRoot,i=t.children,o=t.dense,a=void 0!==o&&o,s=t.Components,u=void 0===s?{}:s,d=t.classes,f=this.state.snacks.reduce(function(n,e){var t,r=M(e.anchorOrigin),i=n[r]||[];return S({},n,((t={})[r]=[].concat(i,[e]),t))},{}),p=Object.keys(f).map(function(e){var t=f[e],r=t[0];return c.createElement(nw,{key:e,dense:a,anchorOrigin:r.anchorOrigin,classes:d},t.map(function(e){return c.createElement(nk,{key:e.id,snack:e,classes:d,Component:u[e.variant],onClose:n.handleCloseSnack,onEnter:n.props.onEnter,onExit:n.props.onExit,onExited:nl([n.handleExitedSnack,n.props.onExited],e.id),onEntered:nl([n.handleEnteredSnack,n.props.onEntered],e.id)})}))});return c.createElement(N.Provider,{value:e},i,r?(0,l.createPortal)(p,r):p)},w(e,[{key:"maxSnack",get:function(){return this.props.maxSnack||nn.maxSnack}}]),e}(c.Component),nT=function(){return(0,c.useContext)(N)}}},function(n){var e=function(e){return n(n.s=e)};n.O(0,[774,179],function(){return e(6840),e(9090)}),_N_E=n.O()}]);