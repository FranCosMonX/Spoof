(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[700],{5621:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/authentication/Login",function(){return a(8074)}])},8074:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return g}});var t=a(5893),r=a(4440),i=a(8163),o=a(9979),s=a(8962),l=a(4466),u=a(7574),c=a(4191),h=a(747),d=a(2945),m=a(4246),f=a(1163),p=a(9496),x=a(7294);let j=(0,c.Z)();function g(){let[e,n]=(0,x.useState)({email:"",senha:""}),a=(0,f.useRouter)(),{enqueueSnackbar:c}=(0,p.Ds)(),g=async n=>{n.preventDefault(),await fetch("http://3.141.0.196/auth/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"}).then(e=>{console.log(e),e.ok?(c("Login realizado com sucesso!",{variant:"success"}),a.push("/")):400===e.status?e.json().then(e=>{c("Erro: ".concat(e.detail),{variant:"error"})}):c("Ocorreu um erro ao logar.",{variant:"error"})}).catch(e=>{console.error("Erro ao enviar requisi\xe7\xe3o:",e),c("Ocorreu um erro ao enviar a requisi\xe7\xe3o.",{variant:"error"})})},v=e=>{let{name:a,value:t}=e.target;n(e=>({...e,[a]:t}))};return(0,t.jsx)(h.Z,{theme:j,children:(0,t.jsxs)(o.Z,{component:"main",maxWidth:"xs",children:[(0,t.jsx)(s.ZP,{}),(0,t.jsxs)(r.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,t.jsx)(m.Z,{component:"h1",variant:"h5",children:"Login"}),(0,t.jsxs)(r.Z,{component:"form",onSubmit:g,noValidate:!0,sx:{mt:1},children:[(0,t.jsx)(d.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",autoFocus:!0,value:e.email,onChange:v}),(0,t.jsx)(d.Z,{margin:"normal",required:!0,fullWidth:!0,name:"senha",label:"Senha",type:"password",id:"senha",autoComplete:"current-password",value:e.senha,onChange:v}),(0,t.jsx)(i.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Entrar"}),(0,t.jsx)(l.ZP,{container:!0,justifyContent:"flex-end",children:(0,t.jsx)(l.ZP,{item:!0,children:(0,t.jsx)(u.Z,{href:"Cadastro",variant:"body2",children:"N\xe3o possui uma conta? Cadastre-se"})})})]})]})]})})}}},function(e){e.O(0,[550,114,888,774,179],function(){return e(e.s=5621)}),_N_E=e.O()}]);