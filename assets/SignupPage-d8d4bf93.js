import{j as e,r as S,f as b}from"./index-734970ef.js";import{r as I,i as q,c as P,a as d,u as T,b as C,S as F,C as o,T as u,F as m,I as c,O as p,d as h,e as x,f as _,g as A,o as N,h as V,j as k,R as D}from"./RedirectLink-82ad50dd.js";import"./assertThisInitialized-719c89c7.js";var l={},O=q;Object.defineProperty(l,"__esModule",{value:!0});var j=l.default=void 0,$=O(I()),z=e;j=l.default=(0,$.default)((0,z.jsx)("path",{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 18H4V8h16z"}),"CalendarToday");const R=P({name:d().min(3,"Please put down more than 3 letters!").required(),dateOfBirth:d().matches(/^\d{4}-\d{2}-\d{2}$/,"Date must to be as an example dd/mm/yyyy!").required(),email:d().matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,"Please, check your email address!").required(),password:d().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,"Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one digit!").required()}),B=()=>{const f=T(),[i,g]=S.useState(!1),{handleSubmit:y,control:n,formState:{errors:t}}=C({resolver:N(R)}),w=()=>g(a=>!a),v=a=>{a.preventDefault()};return e.jsx(F,{children:e.jsxs("form",{className:"inputContainer",rules:{required:"Please check your name!"},onSubmit:y(a=>{console.log(a),f(b(a))}),children:[e.jsx(o,{control:n,name:"name",defaultValue:"",render:({field:a})=>{var s,r;return e.jsx(u,{className:"textInput",label:"Name",variant:"outlined",required:!0,error:!!((s=t.name)!=null&&s.message),helperText:(r=t.name)==null?void 0:r.message,...a})}}),e.jsx(o,{control:n,name:"dateOfBirth",defaultValue:"",render:({field:a})=>{var s,r;return e.jsxs(m,{variant:"outlined",required:!0,className:"textInput",children:[e.jsx(c,{htmlFor:"outlined-adornment-date",children:"yyyy/mm/dd"}),e.jsx(p,{id:"outlined-adornment-date",endAdornment:e.jsx(h,{position:"end",children:e.jsx(x,{className:"iconInput",edge:"end",children:e.jsx(j,{})})}),label:"dd/mm/yyyy",error:!!((s=t.dateOfBirth)!=null&&s.message),helperText:(r=t.dateOfBirth)==null?void 0:r.message,...a})]})}}),e.jsx(o,{control:n,name:"email",defaultValue:"",render:({field:a})=>{var s,r;return e.jsx(u,{label:"Email",variant:"outlined",className:"textInput",required:!0,error:!!((s=t.email)!=null&&s.message),helperText:(r=t.email)==null?void 0:r.message,...a})}}),e.jsx(o,{control:n,name:"password",defaultValue:"",render:({field:a})=>{var s,r;return e.jsxs(m,{variant:"outlined",required:!0,className:"textInput",children:[e.jsx(c,{htmlFor:"outlined-adornment-password",children:"Password"}),e.jsx(p,{id:"outlined-adornment-password",type:i?"text":"password",endAdornment:e.jsx(h,{position:"end",children:e.jsx(x,{className:"iconInput","aria-label":"toggle password visibility",onClick:w,onMouseDown:v,edge:"end",children:i?e.jsx(_,{}):e.jsx(A,{})})}),label:"Password",error:!!((s=t.password)!=null&&s.message),helperText:(r=t.password)==null?void 0:r.message,...a})]})}}),e.jsx("button",{type:"submit",children:"Sign Up"})]})})},M=()=>e.jsxs(V,{children:[e.jsx(k,{title:"Sign Up"}),e.jsx(B,{}),e.jsx(D,{link:"/signin",title:"Sign In"})]});export{M as default};
