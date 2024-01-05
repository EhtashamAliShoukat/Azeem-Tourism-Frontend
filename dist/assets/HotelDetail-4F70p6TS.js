import{x as O,ai as T,r as o,q as g,j as e}from"./index-HM1agdtz.js";import{B as b}from"./Tooltip-qZwuO75H.js";import{C as E}from"./Card-nGT6FI4O.js";import{F as A}from"./index-E6wgMDOo.js";import{c as B,a as d,b as U,d as H,e as L,I as M,F as K,f as V,u as G}from"./index.esm-8F5zdNvy.js";const ee=()=>{O();const{slug:x}=T(),[p,w]=o.useState([]),[t,j]=o.useState(),[J,_]=o.useState([]),[u,y]=o.useState(),[N,k]=o.useState(),[h,v]=o.useState(),[f,C]=o.useState(),[P,D]=o.useState();o.useEffect(()=>{const a="https://backend.azeemtourism.com/api/hotels/get";g.get(a).then(l=>{const s=l.data.filter(c=>c.active===!0);w(s),j(s.find(c=>c.name===x)),s.find(c=>c.name===x)}).catch(l=>{console.log(l.message)});const r=localStorage.getItem("country");g.get("http://api.exchangeratesapi.io/v1/latest?access_key=69d8500368c69cc515c8785040780d20").then(l=>{const s="USD",c=r=="Pakistan"?"PKR":"AED";_([s,...Object.keys(l.data.rates)]),y(s),k(c),C(l.data.rates[s]),v(l.data.rates[c])})},[x]),o.useEffect(()=>{window.scrollTo(0,0)},[]),o.useEffect(()=>{if(t){const a=t.isDiscounted&&t.Discount?t.price-t.price*t.Discount/100:t.price,r=u==="USD"?`$${a.toFixed(2)}`:u==="PKR"?`Rs ${Math.round(h/f*a)}`:`AED ${Math.round(h/f*a)}`;D(r)}},[t,u,h,f]);const S=()=>{y(N),k(u)},R=B({full_name:d().matches(/^[a-zA-Z0-9_ ]*$/,"Username can only contain letters, numbers, underscores, and spaces").required("Required"),total_persons:U().min(1,"Total persons cannot be less than 1").required("Required"),date_of_tour:H().required("Required"),pickup_time:d().required("Required"),user_email:d().email("Invalid email address").required("Required"),user_phone:d().required("Required"),pickup_location:d().required("Required")}),q={full_name:"",total_persons:1,date_of_tour:"",pickup_time:"",user_email:"",user_phone:"",pickup_location:""},z=async a=>{const{full_name:r,total_persons:l,date_of_tour:s,pickup_time:c,user_email:F,user_phone:$,pickup_location:I}=a;let n=t.price*l;t.isDiscounted&&t.Discount&&(n=n-n*t.Discount/100),g.post("https://backend.azeemtourism.com/api/payments/intent",{packageCharges:n}).then(m=>{localStorage.setItem("orderDetails",JSON.stringify({fullname:r,email:F,phone:$,pickuplocation:I,totalpersons:l,dateoftour:s,pickuptime:c,totalprice:n,packageObject:t,stripeSessionId:m.data.sessionID,orderType:"hotel"})),m.data&&(window.location.href=m.data.sessionURL)}).catch(m=>console.log(m.message))},i=({label:a,...r})=>{const[l,s]=G(r);return e.jsxs("div",{className:"mb-4 flex-col",children:[e.jsx("label",{className:"block text-zinc-800 text-sm font-semibold mb-2 font-inter",children:a}),e.jsx("input",{...l,...r,className:`appearance-none border ${s.touched&&s.error?"border-red-500":"border-gray-300"} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}),s.touched&&s.error?e.jsxs("p",{className:"text-red-500 text-sm font-semibold ",children:["*",s.error]}):null]})};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col lg:flex-row justify-center px-5 py-5 lg:px-0",children:t&&e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"flex flex-col lg:flex-row lg:gap-x-10 justify-center ",children:[e.jsxs("div",{className:"w-full justify-center ",children:[e.jsx("h2",{className:"text-2xl  lg:text-2xl text-center font-bold font-inter text-zinc-800 text-left mb-2",children:t.name}),e.jsx(L.Carousel,{data:t.images,time:5e3,radius:"8px",width:"100%",slideBackgroundColor:"white",height:"60vh",captionPosition:"bottom",automatic:!0,dots:!0,pauseIconColor:"white",slideImageFit:"cover"}),e.jsxs("div",{className:"pt-5 ml-5",children:[e.jsx("h5",{className:"font-inter font-semibold text-md text-left",children:"How the Hotel will look like?"}),e.jsx("p",{className:"font-inter",children:t.description})]}),e.jsxs("div",{className:"flex ",style:{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"3%",marginBottom:"4%"},children:[e.jsxs("p",{className:"flex text-xl font-inter font-semibold mt-3 gap-x-2 mr-1",children:[e.jsx(M,{className:"mt-1"}),"Price: ",P]}),e.jsxs(b,{className:"ml-5 shadow-sm bg-black text-white hover:bg-white hover:text-black transition-colors duration-100 text-xs md:text-sm font-medium text-center rounded-lg ",onClick:()=>S(),children:["Change Price to ",N]})]})]}),e.jsxs("div",{className:"w-full lg:w-2/5 ",children:[e.jsx("h5",{className:"font-bold text-center font-inter text-xl lg:text-2xl  mb-2",children:"Recent Packages"}),e.jsx("div",{className:"overflow-y-auto h-screen px-2",children:p.map((a,r)=>e.jsx(E,{imgSrc:a.images[0].image,className:"mb-5 shadow-sm border-2 border-rust",children:e.jsxs("div",{className:"",children:[e.jsx("p",{className:"font-semibold text-center text-xl",children:p[r].name}),e.jsx(b,{onClick:()=>{j(p[r])},className:"mt-3 shadow-sm border-2 border-black bg-zinc-100 text-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors duration-100 text-sm font-medium text-center rounded-lg bg-primary-700 w-full",children:"View"})]})},a.id))})]})]})})}),e.jsxs("div",{className:"flex flex-col items-center justify-center p-5 lg:pb-5",children:[e.jsx("div",{className:"title",children:e.jsx("h2",{className:"py-5 text-2xl lg:py-10 lg:text-3xl font-bold font-inter text-zinc-800 text-center",children:"Get your slots booked!"})}),e.jsx("div",{className:" flex flex-col justify-center gap-y-10 w-full md:w-2/5",children:e.jsx(K,{initialValues:q,validationSchema:R,validateOnBlur:!0,validateOnChange:!1,onSubmit:(a,{resetForm:r})=>{z(a),r()},children:e.jsxs(V,{className:"border-2 bg-rust shadow-lg rounded-lg px-4 md:px-8 pt-6 pb-8 mb-4",children:[e.jsx(i,{label:"Full Name",name:"full_name",type:"text",className:"mb-4"}),e.jsx(i,{label:"Number Of Persons",name:"total_persons",type:"number",className:"mb-4"}),e.jsx(i,{label:"Date of Tour",name:"date_of_tour",type:"datetime-local",className:"mb-4"}),e.jsx(i,{label:"Pickup Time",name:"pickup_time",type:"time",className:"mb-4"}),e.jsx(i,{label:"Email",name:"user_email",type:"email",className:"mb-4"}),e.jsx(i,{label:"Phone",name:"user_phone",type:"tel",className:"mb-4"}),e.jsx(i,{label:"Pickup Location",name:"pickup_location",type:"text",className:"mb-4"}),e.jsx("div",{className:" flex justify-center mt-5",children:e.jsx(b,{type:"submit",className:"shadow-sm lg:w-48 border-2 border-black text-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors duration-100 text-md font-medium text-center rounded-lg bg-primary-700 w-full",children:"Proceed"})})]})})}),e.jsx(A,{phoneNumber:"+971522760013",chatMessage:"",messageDelay:"1",accountName:"Azeem Tourism"})]})]})};export{ee as default};