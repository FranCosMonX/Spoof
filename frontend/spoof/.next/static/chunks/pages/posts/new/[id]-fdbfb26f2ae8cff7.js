(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[903],{1841:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/new/[id]",function(){return r(4750)}])},8962:function(e,t,r){"use strict";var o=r(7462),a=r(7294),s=r(6522),n=r(4482),i=r(5893);let l=(e,t)=>(0,o.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),c=e=>(0,o.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),u=function(e){var t;let r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={};r&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(t=>{var r;let[o,s]=t;a[e.getColorSchemeSelector(o).replace(/\s*&/,"")]={colorScheme:null==(r=s.palette)?void 0:r.mode}});let s=(0,o.Z)({html:l(e,r),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,o.Z)({margin:0},c(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},a),n=null==(t=e.components)||null==(t=t.MuiCssBaseline)?void 0:t.styleOverrides;return n&&(s=[s,n]),s};t.ZP=function(e){let{children:t,enableColorScheme:r=!1}=(0,s.i)({props:e,name:"MuiCssBaseline"});return(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)(n.Z,{styles:e=>u(e,r)}),t]})}},4750:function(e,t,r){"use strict";r.r(t);var o=r(5893),a=r(7294),s=r(4191),n=r(747),i=r(9979),l=r(8962),c=r(4246),u=r(4440),d=r(4466),h=r(8386),m=r(1946),g=r(8163),p=r(9496),x=r(7066),v=r(1163);t.default=()=>{let[e,t]=(0,a.useState)(""),[r,b]=(0,a.useState)(""),[f,Z]=(0,a.useState)([]),[j,y]=(0,a.useState)(""),S=(0,s.Z)(),k=(0,v.useRouter)(),{id:P}=k.query,C="http://localhost:3002",_=new FormData;(0,a.useEffect)(()=>{P&&w(P)},[P]);let w=async e=>{let r=sessionStorage.getItem("user"),o=sessionStorage.getItem("bearerToken");try{let a=await x.Z.get(`${C}/objeto/${r}/${e}/detalhes`,{headers:{Authorization:"Bearer "+o}});if(200===a.status){let{description:e,tags:r,name:o}=a.data.data;b(e),Z(r),t(o)}else(0,p.yv)("Erro ao carregar os dados do post.",{variant:"error"})}catch(e){console.error(e),(0,p.yv)("Erro ao carregar os dados do post.",{variant:"error"})}},E=e=>{Z(f.filter(t=>t!==e))},z=async e=>{e.preventDefault();let t=sessionStorage.getItem("user"),o=sessionStorage.getItem("bearerToken");if(0===r.length){(0,p.yv)("Descri\xe7\xe3o \xe9 obrigat\xf3ria",{variant:"error"});return}_.set("description",r),_.set("tags",f.join());try{await x.Z.patch(`${C}/objeto/${t}/${P}`,_,{headers:{Authorization:"Bearer "+o}}),(0,p.yv)("Post atualizado com sucesso!",{variant:"success"}),k.push("/")}catch(e){console.error(e),(0,p.yv)("Ocorreu um erro ao salvar o post.",{variant:"error"})}};return(0,o.jsx)(n.Z,{theme:S,children:(0,o.jsxs)(i.Z,{component:"main",maxWidth:"xs",children:[(0,o.jsx)(l.ZP,{}),(0,o.jsx)(c.Z,{component:"h1",variant:"h5",sx:{marginTop:5},children:"Editar Post"}),(0,o.jsx)(u.Z,{component:"form",noValidate:!0,onSubmit:z,sx:{my:3},children:(0,o.jsxs)(d.ZP,{container:!0,spacing:2,children:[(0,o.jsx)(d.ZP,{item:!0,xs:12,children:(0,o.jsx)(h.Z,{autoComplete:"name",name:"name",required:!0,fullWidth:!0,id:"name",label:"Arquivo",autoFocus:!0,value:e,disabled:!0})}),(0,o.jsx)(d.ZP,{item:!0,xs:12,children:(0,o.jsx)(h.Z,{autoComplete:"name",name:"descricao",required:!0,fullWidth:!0,id:"descricao",label:"Descri\xe7\xe3o",autoFocus:!0,value:r,onChange:e=>b(e.target.value)})}),f.length>0&&(0,o.jsx)(d.ZP,{item:!0,xs:12,children:f.map(e=>(0,o.jsx)(m.Z,{label:e,onDelete:()=>E(e)},e))}),(0,o.jsx)(d.ZP,{item:!0,xs:12,children:(0,o.jsx)(h.Z,{label:"Tag",value:j,onChange:e=>y(e.target.value)})}),(0,o.jsx)(d.ZP,{item:!0,xs:12,children:(0,o.jsx)(g.Z,{variant:"outlined",onClick:()=>{0!==j.length&&(y(""),Z([...f,j]))},children:"Adicionar tag"})}),(0,o.jsx)(d.ZP,{item:!0,xs:12,children:(0,o.jsx)(g.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Atualizar Post"})})]})})]})})}}},function(e){e.O(0,[119,946,888,774,179],function(){return e(e.s=1841)}),_N_E=e.O()}]);