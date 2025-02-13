import{r as a,j as e,M as F,a as N}from"./app-DlvoDJJo.js";import{A as I}from"./AdminLayout-LRVHqC77.js";import{B as d}from"./button-g7U9L8Cx.js";import{I as H}from"./input-pDD4vCSl.js";import{B as M,T as L,a as P,b as x,c as f,d as R,e as o,A as $}from"./Breadcrumb-CPWcmSEU.js";import U from"./ColorForm-BSHpH-T5.js";import"./user-CmaB7S3S.js";import"./createLucideIcon-Cvfh0g26.js";import"./chevron-left-DiZTRhl0.js";import"./users-DTMo15q8.js";import"./chevron-right-DuWMSwET.js";import"./alert-B7bscsUx.js";import"./index-DV74KP8K.js";import"./label-C_gtDDxQ.js";import"./textarea-Ct-gyCQG.js";function ae(){const[n,j]=a.useState([]),[v,b]=a.useState(!0),[m,S]=a.useState(""),[C,c]=a.useState(!1),[_,i]=a.useState(null),[l,y]=a.useState({current_page:1,per_page:10,total:0,last_page:1}),[p,T]=a.useState("name"),[u,w]=a.useState("asc"),h=async()=>{try{b(!0);const t=await N.get("/api/v1/colors",{params:{search:m,page:l.current_page,per_page:l.per_page,sort_field:p,sort_direction:u}});t.data&&t.data.data&&(j(t.data.data),y({current_page:t.data.current_page,per_page:t.data.per_page,total:t.data.total,last_page:t.data.last_page}))}catch(t){console.error("Error fetching colors:",t),j([])}finally{b(!1)}};a.useEffect(()=>{const t=setTimeout(()=>{h()},300);return()=>clearTimeout(t)},[m,l.current_page,p,u]);const k=t=>{p===t?w(u==="asc"?"desc":"asc"):(T(t),w("asc"))},E=async t=>{var s,r;if(confirm("Are you sure you want to delete this color?"))try{(await N.delete(`/api/v1/colors/${t}`)).status===200&&(h(),alert("Color deleted successfully"))}catch(g){console.error("Error deleting color:",g),alert(((r=(s=g.response)==null?void 0:s.data)==null?void 0:r.message)||`Error deleting color ${t}`)}},A=[{label:"Colors",href:"/admin/colors"}],D=()=>{const t=[];for(let s=1;s<=l.last_page;s++)t.push(e.jsx(d,{variant:l.current_page===s?"default":"outline",className:"w-10 h-10",onClick:()=>y(r=>({...r,current_page:s})),children:s},s));return t},B=({field:t,children:s})=>e.jsx(f,{className:"py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer",onClick:()=>k(t),children:e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsx("span",{children:s}),e.jsx($,{className:"w-4 h-4"})]})});return e.jsxs(I,{children:[e.jsx(F,{title:"Colors Management"}),e.jsxs("div",{className:"container mx-auto py-6 px-4",children:[e.jsx(M,{items:A}),e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Colors"}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 w-full sm:w-auto",children:[e.jsx(H,{type:"text",placeholder:"Search colors...",value:m,onChange:t=>S(t.target.value),className:"w-full sm:w-64"}),e.jsx(d,{className:"bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto",onClick:()=>{i(null),c(!0)},children:"Add New Color"})]})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow overflow-hidden",children:[e.jsx("div",{className:"overflow-x-auto",children:e.jsxs(L,{children:[e.jsx(P,{children:e.jsxs(x,{className:"bg-gray-50",children:[e.jsx(B,{field:"name",children:"Name"}),e.jsx(f,{className:"py-3 px-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Description"}),e.jsx(f,{className:"py-3 px-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),e.jsx(R,{children:v?e.jsx(x,{children:e.jsx(o,{colSpan:3,className:"text-center py-4",children:e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"})})})}):!n||n.length===0?e.jsx(x,{children:e.jsx(o,{colSpan:3,className:"text-center py-4 text-gray-500",children:"No colors found"})}):n.map(t=>{var s,r;return e.jsxs(x,{className:"hover:bg-gray-50 transition-colors",children:[e.jsx(o,{className:"py-4 px-6 text-sm text-gray-900",children:t.name}),e.jsxs(o,{className:"py-4 px-6 text-center text-sm text-gray-900",children:[(s=t.description)==null?void 0:s.substring(0,50),((r=t.description)==null?void 0:r.length)>50?"...":""]}),e.jsx(o,{className:"py-4 px-6 text-sm text-gray-900",children:e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx(d,{variant:"outline",className:"text-blue-600 hover:text-blue-700 border border-blue-600 hover:border-blue-700",onClick:()=>{i(t),c(!0)},children:"Edit"}),e.jsx(d,{variant:"destructive",className:"bg-red-600 text-center hover:bg-red-700 text-white",onClick:()=>E(t.id),children:"Delete"})]})})]},t.id)})})]})}),e.jsxs("div",{className:"flex justify-between items-center p-4 border-t",children:[e.jsxs("div",{className:"text-sm text-gray-600",children:["Showing ",n.length," of ",l.total," results"]}),e.jsx("div",{className:"flex gap-2",children:D()})]})]}),C&&e.jsx(U,{color:_,onClose:()=>{c(!1),i(null)},onSuccess:()=>{c(!1),i(null),h()}})]})]})}export{ae as default};
