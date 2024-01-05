import{j as e,R as Z,I as m,D as x,M as c}from"./index-HM1agdtz.js";import{d as H,c as J,I as K}from"./DeleteForeverOutlined-SFFpJk7X.js";import{d as N}from"./CloudUploadOutlined-LVQmp2gh.js";import{G as a,S as Q,T as i}from"./TextField-5eWDEJxN.js";import{S as V}from"./Select-Z0hCbYUa.js";function ae({title:p,setZip:g,zip:j,country:v,setCountry:f,desc:C,address:b,setState:y,setCity:k,state:I,city:W,setDesc:T,setTitle:q,setAddress:w,setImageFileName:s,imageFileName:l,setImageFileUrl:d,imageFileUrl:u,totalCount:P,setTotalCount:R,price:E,setPrice:S,packageData:_,setRegion:A,region:B,isDiscounted:h,discount:D,setisDiscounted:U,setDiscount:z}){const G=()=>{U(!h)},L=t=>{A(t.target.value)},M=()=>{window.cloudinary.createUploadWidget({cloudName:"dhhjr3vim",uploadPreset:"nnitbvl3"},(r,n)=>{!r&&n&&n.event==="success"&&(s(o=>[...o,n.info.original_filename]),d(o=>[...o,n.info.url]))}).open()},O=(t,r)=>{s(l.filter(n=>n!==t)),d(u.filter(n=>n!==r))},$=()=>{_.images.map(t=>{s(r=>[...r,t.image]),d(r=>[...r,t.image])})};return e.jsx(Z.Fragment,{children:e.jsxs(a,{container:!0,spacing:3,children:[e.jsx(e.Fragment,{children:e.jsxs(a,{item:!0,xs:12,sm:12,children:[e.jsx(Q,{direction:"row",alignItems:"center",spacing:2,children:e.jsxs("label",{htmlFor:"icon-button-file",children:[e.jsx(m,{onClick:()=>{M()},color:"primary","aria-label":"upload picture",component:"span",children:e.jsx(x,{style:{width:"350px",backgroundColor:"#27272a"},variant:"contained",sx:{p:1,backgroundColor:"#27272a"},endIcon:e.jsx(H,{}),children:"Upload Images"})}),l.map((t,r)=>l?e.jsxs("div",{className:"flex justify-between ",children:[e.jsx("a",{className:"text-black",target:"_blank",href:u[r],rel:"noreferrer",children:e.jsxs("p",{children:["Uploaded Images: ",t]})}),e.jsx("div",{style:{marginTop:"-8px"},children:e.jsx(m,{className:"text-rose-600",onClick:()=>{O(t,u[r])},children:e.jsx(J,{style:{color:"red"}})})})]}):null)]})}),l.length!==0?null:e.jsx("div",{style:{paddingLeft:"9px"},children:e.jsx(x,{onClick:$,variant:"contained",style:{marginTop:8,backgroundColor:"#27272a"},endIcon:e.jsx(N,{}),children:"Use Old Images"})})]})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(i,{required:!0,multiline:!0,id:"title",name:"title",label:"Title",fullWidth:!0,autoComplete:"title",variant:"standard",value:p,onChange:t=>{q(t.target.value)}})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(i,{required:!0,multiline:!0,id:"description",name:"description",label:"Description",fullWidth:!0,autoComplete:"description",variant:"standard",value:C,onChange:t=>{T(t.target.value)}})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(i,{required:!0,multiline:!0,id:"address",name:"address",label:"Address",fullWidth:!0,autoComplete:"shipping address-line1",variant:"standard",value:b,onChange:t=>{w(t.target.value)}})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(i,{required:!0,multiline:!0,id:"city",name:"city",label:"City",fullWidth:!0,autoComplete:"shipping address-level2",variant:"standard",value:W,onChange:t=>{k(t.target.value)}})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(i,{id:"state",multiline:!0,name:"state",label:"State/Province",fullWidth:!0,variant:"standard",value:I,onChange:t=>{y(t.target.value)}})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(i,{required:!0,multiline:!0,id:"zip",name:"zip",label:"Zip / Postal code",fullWidth:!0,autoComplete:"shipping postal-code",variant:"standard",value:j,onChange:t=>{g(t.target.value)}})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(i,{required:!0,multiline:!0,id:"country",name:"country",label:"Country",fullWidth:!0,autoComplete:"shipping country",variant:"standard",value:v,onChange:t=>{f(t.target.value)}})}),e.jsxs(a,{item:!0,xs:12,sm:6,children:[e.jsx(K,{id:"region-select-label",children:"Region"}),e.jsxs(V,{value:B,onChange:L,displayEmpty:!0,fullWidth:!0,sx:{height:30},children:[e.jsx(c,{sx:{height:30},value:"Both",children:e.jsx("em",{children:"None"})}),e.jsx(c,{sx:{height:30},value:"Pakistan",children:"Pakistan"}),e.jsx(c,{sx:{height:30},value:"UAE",children:"UAE"})]})]}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:h,onChange:G,style:{marginRight:"3%"}}),"Is Discounted"]})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(i,{multiline:!0,id:"discount ",name:"discount ",label:"Discount Percentage",fullWidth:!0,variant:"standard",value:D,onChange:t=>{z(t.target.value)}})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(i,{required:!0,multiline:!0,id:"price",name:"price",label:"Price",fullWidth:!0,autoComplete:"price",variant:"standard",value:E,onChange:t=>{S(t.target.value)}})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(i,{required:!0,multiline:!0,id:"totalTickets ",name:"totalTickets ",label:"Total Tickets",fullWidth:!0,autoComplete:"totaltickets",variant:"standard",value:P,onChange:t=>{R(t.target.value)}})})]})})}export{ae as E};