import{D as st,w as at,R as n,r as e,j as t,A as ot,C as it,P as nt,v as T,z as g,t as rt,q as ct}from"./index-KmvzQcx_.js";import{E as lt}from"./EditPackageForm-IltdkfUU.js";import{R as dt}from"./Review-hw8jReMy.js";import{C as ut}from"./CssBaseline-TJnn6M8r.js";import{S as mt,a as pt,b as xt}from"./DeleteForeverOutlined-4DtPuAOe.js";import"./CloudUploadOutlined-XAlTiCcH.js";import"./TextField-nJeaQb2e.js";import"./Select-ErcZjFQ-.js";import"./ListItemText-f_LBAd72.js";import"./capitalize-0cn3uosV.js";const y=["Tours Details","Review Your Package"];function Dt(){const b=st(),w=at(),s=b.state,[o,F]=n.useState(0),[S,L]=e.useState([]),[j,N]=e.useState([]),[k,U]=e.useState([]),[v,E]=e.useState([]),[r,P]=e.useState(s.title),[c,A]=e.useState(s.description),[C,z]=e.useState(s.region),[l,I]=e.useState(s.address),[d,V]=e.useState(s.city),[D,M]=e.useState(s.isDiscounted),[f,Y]=e.useState(s.Discount),[u,$]=e.useState(s.state),[m,q]=e.useState(s.zip),[p,G]=e.useState(s.country),[x,H]=e.useState(s.totalCount),[h,K]=e.useState(s.price),[W,B]=n.useState(""),[Z,_]=e.useState([]),[J,O]=e.useState([]),R=()=>{S.length==0||r.length==0||c.length==0||l.length==0||d.length==0||u.length==0||m.length==0||p.length==0||x.length==0||h.length==0?B("Kindly Fill All The Fields !!! "):(j.map(a=>{_(i=>[...i,{image:a}])}),v.map(a=>{O(i=>[...i,{video:a}])}),B(""),F(o+1))},Q=()=>{const a={title:r,description:c,address:l,city:d,state:u,zip:m,country:p,images:Z,videos:J,region:C,totalCount:x,price:h,isDiscounted:D,Discount:f,active:!0},i=`https://backend.azeemtourism.com/api/tours/update/${s._id}`;ct.post(i,a).then(et=>{}).catch(et=>{})},X=()=>{F(o-1)};function tt(a){switch(a){case 0:return t.jsx(lt,{title:r,setZip:q,zip:m,country:p,setCountry:G,desc:c,address:l,setState:$,setCity:V,state:u,city:d,setDesc:A,setTitle:P,setAddress:I,setVideoFileUrl:E,videoFileUrl:v,setVideoFileName:U,videoFileName:k,setImageFileName:L,imageFileName:S,setImageFileUrl:N,imageFileUrl:j,totalCount:x,setTotalCount:H,price:h,setPrice:K,packageData:s,setRegion:z,region:C,isDiscounted:D,discount:f,setisDiscounted:M,setDiscount:Y});case 1:return t.jsx(dt,{title:r,zip:m,country:p,desc:c,address:l,state:u,city:d,videoFileUrl:v,videoFileName:k,imageFileName:S,imageFileUrl:j,price:h,totalCount:x,region:C,discount:f});default:throw new Error("Unknown step")}}return t.jsxs(n.Fragment,{children:[t.jsx(ut,{}),t.jsx(ot,{position:"absolute",color:"default",elevation:0,sx:{position:"relative",borderBottom:a=>`1px solid ${a.palette.divider}`}}),t.jsx(it,{component:"main",maxWidth:"lg",sx:{mb:4},children:t.jsxs(nt,{variant:"outlined",sx:{my:{xs:3,md:6},p:{xs:2,md:3}},children:[t.jsx(mt,{activeStep:o,sx:{pt:3,pb:5},children:y.map(a=>t.jsx(pt,{children:t.jsx(xt,{children:a})},a))}),o===y.length?t.jsxs(n.Fragment,{children:[t.jsx(T,{variant:"h5",gutterBottom:!0,children:"Your Package Has Been Updated"}),t.jsx(g,{variant:"contained",onClick:()=>w("/admin/managetours"),sx:{mt:3,ml:1},children:"GoTo Manage Tours"})]}):t.jsxs(n.Fragment,{children:[tt(o),t.jsxs(rt,{sx:{display:"flex",justifyContent:"flex-end"},children:[t.jsx(T,{style:{color:"red"},variant:"subtitle1",children:W}),o!==0&&t.jsx(g,{onClick:X,sx:{mt:3,ml:1},children:"Back"}),o===y.length-1?t.jsxs(g,{variant:"contained",onClick:()=>{Q(),R()},sx:{mt:3,ml:1},children:[" ","Edit Tour"]}):t.jsxs(g,{variant:"contained",onClick:R,sx:{mt:3,ml:1},children:[" ","Next"]})]})]})]})})]})}export{Dt as default};
