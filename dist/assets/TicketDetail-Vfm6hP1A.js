import{w as I,ag as O,r as i,q as g,j as e}from"./index-Qm37-hOS.js";import{B as b}from"./Tooltip-RdJNKoi-.js";import{C as E}from"./Card-rp43y1kq.js";import{F as A}from"./index-KHJ1Bk7y.js";import{c as U,a as m,b as B,d as L,e as M,I as K,F as V,f as G,u as H}from"./index.esm-dOpcPGdK.js";import"./index-4E3LXMpH.js";const te=()=>{I();const{slug:x}=O(),[p,_]=i.useState([]),[t,j]=i.useState(),[J,w]=i.useState([]),[u,y]=i.useState(),[N,k]=i.useState(),[f,v]=i.useState(),[h,C]=i.useState(),[P,D]=i.useState();i.useEffect(()=>{const a="http://localhost:8080/api/tickets/get";g.get(a).then(l=>{const s=l.data.filter(c=>c.active===!0);_(s),j(s.find(c=>c._id===x)),s.find(c=>c._id===x)}).catch(l=>{console.log(l.message)});const r=localStorage.getItem("country");g.get("http://api.exchangeratesapi.io/v1/latest?access_key=69d8500368c69cc515c8785040780d20").then(l=>{const s="USD",c=r=="Pakistan"?"PKR":"AED";w([s,...Object.keys(l.data.rates)]),y(s),k(c),C(l.data.rates[s]),v(l.data.rates[c])})},[x]),i.useEffect(()=>{window.scrollTo(0,0)},[]),i.useEffect(()=>{if(t){const a=t.isDiscounted&&t.Discount?t.price-t.price*t.Discount/100:t.price,r=u==="USD"?`$${a.toFixed(2)}`:u==="PKR"?`Rs ${Math.round(f/h*a)}`:`AED ${Math.round(f/h*a)}`;D(r)}},[t,u,f,h]);const S=()=>{y(N),k(u)},R=U({full_name:m().matches(/^[a-zA-Z0-9_ ]*$/,"Username can only contain letters, numbers, underscores, and spaces").required("Required"),total_persons:B().min(1,"Total persons cannot be less than 1").required("Required"),date_of_tour:L().required("Required"),pickup_time:m().required("Required"),user_email:m().email("Invalid email address").required("Required"),user_phone:m().required("Required"),pickup_location:m().required("Required")}),q={full_name:"",total_persons:1,date_of_tour:"",pickup_time:"",user_email:"",user_phone:"",pickup_location:""},F=async a=>{const{full_name:r,total_persons:l,date_of_tour:s,pickup_time:c,user_email:z,user_phone:T,pickup_location:$}=a;let n=t.price*l;t.isDiscounted&&t.Discount&&(n=n-n*t.Discount/100),g.post("http://localhost:8080/api/payments/intent",{packageCharges:n}).then(d=>{localStorage.setItem("orderDetails",JSON.stringify({fullname:r,email:z,phone:T,pickuplocation:$,totalpersons:l,dateoftour:s,pickuptime:c,totalprice:n,packageObject:t,stripeSessionId:d.data.sessionID,orderType:"ticket"})),d.data&&(window.location.href=d.data.sessionURL)}).catch(d=>console.log(d.message))},o=({label:a,...r})=>{const[l,s]=H(r);return e.jsxs("div",{className:"mb-4 flex-col",children:[e.jsx("label",{className:"block text-zinc-800 text-sm font-semibold mb-2 font-inter",children:a}),e.jsx("input",{...l,...r,className:`appearance-none border ${s.touched&&s.error?"border-red-500":"border-gray-300"} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}),s.touched&&s.error?e.jsxs("p",{className:"text-red-500 text-sm font-semibold ",children:["*",s.error]}):null]})};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col lg:flex-row justify-center px-5 lg:px-0",children:t&&e.jsxs("div",{className:"w-full  lg:w-5/6 lg:justify-center  ",children:[e.jsx("h2",{className:"py-5 text-2xl lg:py-10 lg:text-3xl font-bold font-inter text-zinc-800 text-center  mb-2",children:t.title}),e.jsxs("div",{className:"flex flex-col lg:flex-row lg:gap-x-10 justify-center",children:[e.jsxs("div",{className:"w-full justify-center ",children:[e.jsx("div",{className:"flex justify-center",children:e.jsx(M.Carousel,{data:t.images,time:3e3,radius:"8px",slideNumber:!0,captionPosition:"bottom",automatic:!0,dots:!0,pauseIconColor:"white",slideBackgroundColor:"white",slideImageFit:"cover",thumbnails:!0})}),e.jsxs("div",{className:"pt-5",children:[e.jsx("h5",{className:"font-inter font-semibold text-md text-left",children:"How the tour will look like?"}),e.jsx("p",{className:"font-inter",children:t.description})]}),e.jsxs("div",{className:"d-flex mt-4 align-items-center gap-1 section__description font-bold",children:["Available Tickets ",t.totalCount]}),e.jsxs("div",{className:"flex ",style:{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"3%"},children:[e.jsxs("p",{className:"flex text-xl font-inter font-semibold mt-3 gap-x-2 mr-1",children:[e.jsx(K,{className:"mt-1"}),"Price: ",P]}),e.jsxs(b,{className:"ml-5 shadow-sm bg-black text-white hover:bg-white hover:text-black transition-colors duration-100 text-xs md:text-sm font-medium text-center rounded-lg ",onClick:()=>S(),children:["Change Price to ",N]})]})]}),e.jsxs("div",{className:"w-full lg:w-2/5 ",children:[e.jsx("h5",{className:"font-bold text-center font-inter  mb-2",children:"Recent Packages"}),p.map((a,r)=>e.jsx(E,{imgSrc:a.images[0].image,className:"mb-5 shadow-sm border-2 border-lavender",children:e.jsxs("div",{className:"",children:[e.jsx("p",{className:"font-semibold text-center text-xl",children:p[r].title}),e.jsx(b,{onClick:()=>{j(p[r])},className:"mt-3 shadow-sm border-2 border-black bg-zinc-100 text-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors duration-100 text-sm font-medium text-center rounded-lg bg-primary-700 w-full",children:"View"})]})},a.id))]})]})]})}),e.jsxs("div",{className:"flex flex-col items-center justify-center p-5 lg:pb-5",children:[e.jsx("div",{className:"title",children:e.jsx("h2",{className:"py-5 text-3xl lg:py-10 lg:text-4xl font-bold font-inter text-zinc-800 text-center",children:"Get your slots booked!"})}),e.jsx("div",{className:" flex flex-col justify-center gap-y-10 w-full md:w-2/5",children:e.jsx(V,{initialValues:q,validationSchema:R,validateOnBlur:!0,validateOnChange:!1,onSubmit:(a,{resetForm:r})=>{F(a),r()},children:e.jsxs(G,{className:"border-2  bg-lavender shadow-lg rounded px-4 md:px-8 pt-6 pb-8 mb-4",children:[e.jsx(o,{label:"Full Name",name:"full_name",type:"text",className:"mb-4"}),e.jsx(o,{label:"Number Of Persons",name:"total_persons",type:"number",className:"mb-4"}),e.jsx(o,{label:"Date of Tour",name:"date_of_tour",type:"datetime-local",className:"mb-4"}),e.jsx(o,{label:"Pickup Time",name:"pickup_time",type:"time",className:"mb-4"}),e.jsx(o,{label:"Email",name:"user_email",type:"email",className:"mb-4"}),e.jsx(o,{label:"Phone",name:"user_phone",type:"tel",className:"mb-4"}),e.jsx(o,{label:"Pickup Location",name:"pickup_location",type:"text",className:"mb-4"}),e.jsx("div",{className:" flex justify-center mt-5",children:e.jsx(b,{type:"submit",className:"mt-3 shadow-sm border-2 border-black bg-zinc-100 text-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors duration-100 text-sm font-medium text-center rounded-lg bg-primary-700 w-full",children:"Proceed"})})]})})}),e.jsx(A,{phoneNumber:"+971522760013",chatMessage:"",messageDelay:"1",accountName:"Azeem Tourism"})]})]})};export{te as default};
