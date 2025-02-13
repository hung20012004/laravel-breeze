import{r as a,j as e,M as F,a as N}from"./app-DlvoDJJo.js";import{A as I}from"./AdminLayout-LRVHqC77.js";import{B as d}from"./button-g7U9L8Cx.js";import{I as H}from"./input-pDD4vCSl.js";import{B as M,T as L,a as P,b as x,c as v,d as R,e as l,A as $}from"./Breadcrumb-CPWcmSEU.js";import U from"./TagForm-CLLTjbg5.js";import"./user-CmaB7S3S.js";import"./createLucideIcon-Cvfh0g26.js";import"./chevron-left-DiZTRhl0.js";import"./users-DTMo15q8.js";import"./chevron-right-DuWMSwET.js";import"./alert-B7bscsUx.js";import"./index-DV74KP8K.js";import"./label-C_gtDDxQ.js";function se(){const[n,f]=a.useState([]),[S,j]=a.useState(!0),[m,T]=a.useState(""),[_,o]=a.useState(!1),[C,c]=a.useState(null),[r,b]=a.useState({current_page:1,per_page:10,total:0,last_page:1}),[p,E]=a.useState("name"),[u,y]=a.useState("asc"),g=async()=>{try{j(!0);const t=await N.get("/api/v1/tags",{params:{search:m,page:r.current_page,per_page:r.per_page,sort_field:p,sort_direction:u}});t.data&&t.data.data&&(f(t.data.data),b({current_page:t.data.current_page,per_page:t.data.per_page,total:t.data.total,last_page:t.data.last_page}))}catch(t){console.error("Error fetching tags:",t),f([])}finally{j(!1)}};a.useEffect(()=>{const t=setTimeout(()=>{g()},300);return()=>clearTimeout(t)},[m,r.current_page,p,u]);const k=t=>{p===t?y(u==="asc"?"desc":"asc"):(E(t),y("asc"))},A=async t=>{var s,i;if(confirm("Are you sure you want to delete this tag?"))try{(await N.delete(`/api/v1/tags/${t}`)).status===200&&(g(),alert("Tag deleted successfully"))}catch(h){console.error("Error deleting tag:",h),alert(((i=(s=h.response)==null?void 0:s.data)==null?void 0:i.message)||`Error deleting tag ${t}`)}},B=[{label:"Tags",href:"/admin/tags"}],D=()=>{const t=[];for(let s=1;s<=r.last_page;s++)t.push(e.jsx(d,{variant:r.current_page===s?"default":"outline",className:"w-10 h-10",onClick:()=>b(i=>({...i,current_page:s})),children:s},s));return t},w=({field:t,children:s})=>e.jsx(v,{className:"py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer",onClick:()=>k(t),children:e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsx("span",{children:s}),e.jsx($,{className:"w-4 h-4"})]})});return e.jsxs(I,{children:[e.jsx(F,{title:"Tags Management"}),e.jsxs("div",{className:"container mx-auto py-6 px-4",children:[e.jsx(M,{items:B}),e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Tags"}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 w-full sm:w-auto",children:[e.jsx(H,{type:"text",placeholder:"Search tags...",value:m,onChange:t=>T(t.target.value),className:"w-full sm:w-64"}),e.jsx(d,{className:"bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto",onClick:()=>{c(null),o(!0)},children:"Add New Tag"})]})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow overflow-hidden",children:[e.jsx("div",{className:"overflow-x-auto",children:e.jsxs(L,{children:[e.jsx(P,{children:e.jsxs(x,{className:"bg-gray-50",children:[e.jsx(w,{field:"name",children:"Name"}),e.jsx(w,{field:"slug",children:"Slug"}),e.jsx(v,{className:"py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),e.jsx(R,{children:S?e.jsx(x,{children:e.jsx(l,{colSpan:3,className:"text-center py-4",children:e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"})})})}):!n||n.length===0?e.jsx(x,{children:e.jsx(l,{colSpan:3,className:"text-center py-4 text-gray-500",children:"No tags found"})}):n.map(t=>e.jsxs(x,{className:"hover:bg-gray-50 transition-colors",children:[e.jsx(l,{className:"py-4 px-6 text-sm text-gray-900",children:t.name}),e.jsx(l,{className:"py-4 px-6 text-sm text-gray-900",children:t.slug}),e.jsx(l,{className:"py-4 px-6 text-sm text-gray-900",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(d,{variant:"outline",className:"text-blue-600 hover:text-blue-700 border border-blue-600 hover:border-blue-700",onClick:()=>{c(t),o(!0)},children:"Edit"}),e.jsx(d,{variant:"destructive",className:"bg-red-600 hover:bg-red-700 text-white",onClick:()=>A(t.id),children:"Delete"})]})})]},t.id))})]})}),e.jsxs("div",{className:"flex justify-between items-center p-4 border-t",children:[e.jsxs("div",{className:"text-sm text-gray-600",children:["Showing ",n.length," of ",r.total," results"]}),e.jsx("div",{className:"flex gap-2",children:D()})]})]}),_&&e.jsx(U,{tag:C,onClose:()=>{o(!1),c(null)},onSuccess:()=>{o(!1),c(null),g()}})]})]})}export{se as default};
