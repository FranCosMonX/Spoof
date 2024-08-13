(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[624],{5041:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/Edit",function(){return a(845)}])},845:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return j}});var n=a(5893),r=a(7294),s=a(9979),i=a(8962),o=a(4246),l=a(4440),u=a(4466),h=a(8386),d=a(8163),c=a(4191),m=a(747),f=a(6627),x=a.n(f),p=a(7066),v=a(9496),Z=a(1163);let g=(0,c.Z)();function j(){let e="http://localhost:3002",t=(0,Z.useRouter)(),[a,c]=(0,r.useState)({usuario:"",telefone:""}),[f,j]=(0,r.useState)({email:"",senha:""}),[b,w]=(0,r.useState)(!1),[C,P]=(0,r.useState)(""),y=e=>{let{name:t,value:a}=e.target;c(e=>({...e,[t]:a}))},_=e=>{let{name:t,value:a}=e.target;j(e=>({...e,[t]:a}))};r.useEffect(()=>{let t=sessionStorage.getItem("user"),a=sessionStorage.getItem("bearerToken");(async()=>{try{let n=(await p.Z.get(e+"/users/"+t,{headers:{Authorization:"Bearer "+a}})).data.user;c({usuario:n.usuario,telefone:n.telefone})}catch(e){console.error(e)}})()},[e]);let S=async n=>{n.preventDefault();let r=sessionStorage.getItem("user"),s=sessionStorage.getItem("bearerToken");if(""===a.usuario||""===a.telefone){(0,v.yv)("Nome de usu\xe1rio e telefone s\xe3o obrigat\xf3rios",{variant:"error"});return}if(f.senha!==C){(0,v.yv)("Senhas n\xe3o coincidem",{variant:"error"});return}try{await p.Z.patch(e+"/users/"+r+"/update/basicData",a,{headers:{Authorization:"Bearer "+s}}),(0!==f.email.length||0!==f.senha.length)&&await p.Z.patch(e+"/users/"+r+"/update/sensitiveData",f,{headers:{Authorization:"Bearer "+s}}),(0,v.yv)("Perfil salvo",{variant:"success"}),t.push("/")}catch(e){(0,v.yv)("N\xe3o foi poss\xedvel editar usu\xe1rio",{variant:"error"})}};return(0,n.jsx)(m.Z,{theme:g,children:(0,n.jsxs)(s.Z,{component:"main",maxWidth:"xs",children:[(0,n.jsx)(i.ZP,{}),(0,n.jsx)(o.Z,{component:"h1",variant:"h5",sx:{marginTop:5},children:"Editar Perfil"}),(0,n.jsxs)(l.Z,{component:"form",noValidate:!0,onSubmit:S,sx:{mt:3},children:[(0,n.jsxs)(u.ZP,{container:!0,spacing:2,children:[(0,n.jsx)(u.ZP,{item:!0,xs:12,children:(0,n.jsx)(h.Z,{required:!0,fullWidth:!0,id:"usuario",label:"Usu\xe1rio",name:"usuario",autoComplete:"username",value:a.usuario,onChange:y})}),(0,n.jsx)(u.ZP,{item:!0,xs:12,children:(0,n.jsx)(x(),{mask:"(99) 99999-9999",value:a.telefone,onChange:y,children:(0,n.jsx)(h.Z,{required:!0,fullWidth:!0,id:"telefone",label:"Telefone",name:"telefone",autoComplete:"tel",type:"tel"})})})]}),(0,n.jsxs)(u.ZP,{container:!0,spacing:2,children:[(0,n.jsx)(u.ZP,{item:!0,xs:12,children:b?(0,n.jsx)(d.Z,{type:"button",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},onClick:e=>{e.preventDefault(),w(!1)},children:"Ocultar"}):(0,n.jsx)(d.Z,{type:"button",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},onClick:e=>{e.preventDefault(),w(!0)},children:"Editar credenciais"})}),b&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.ZP,{item:!0,xs:12,children:(0,n.jsx)(h.Z,{required:!0,fullWidth:!0,id:"email",label:"Novo email",name:"email",autoComplete:"email",value:f.email,onChange:_})}),(0,n.jsx)(u.ZP,{item:!0,xs:12,children:(0,n.jsx)(h.Z,{required:!0,fullWidth:!0,name:"senha",label:"Nova senha",type:"password",id:"senha",autoComplete:"new-password",value:f.senha,onChange:_})}),(0,n.jsx)(u.ZP,{item:!0,xs:12,children:(0,n.jsx)(h.Z,{required:!0,fullWidth:!0,name:"senha",label:"Confirmar senha",type:"password",id:"novasenha",autoComplete:"new-password",value:C,onChange:e=>P(e.target.value)})})]})]}),(0,n.jsx)(u.ZP,{item:!0,xs:12,children:(0,n.jsx)(d.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Salvar Perfil"})})]})]})})}}},function(e){e.O(0,[119,355,888,774,179],function(){return e(e.s=5041)}),_N_E=e.O()}]);