import{r as t,w as m,q as p,j as e,ad as u,ae as w}from"./index-KmvzQcx_.js";import{B as f}from"./Tooltip-3Fkf72Yj.js";import{C as j}from"./Card-_aKLilDf.js";function L({searchTerm:a}){const[i,x]=t.useState([]),[d,y]=t.useState(!1),[h,n]=t.useState(!0),g=m();return t.useEffect(()=>{const l=localStorage.getItem("country"),r="https://backend.azeemtourism.com/api/packages/get";p.get(r).then(c=>{let o=c.data.filter(s=>s.active===!0&&(l!=="Both"?s.region===l:!0));a&&(o=o.filter(s=>s.title.toLowerCase().includes(a.toLowerCase()))),x(o),n(!1)}).catch(c=>{n(!0),console.log(c.message)})},[d,a,localStorage]),t.useEffect(()=>{window.scrollTo(0,0)},[]),h?e.jsx("div",{className:"flex justify-center items-center h-screen",children:e.jsx("img",{src:u,alt:"Loading...",className:"animate-spin-slow w-35 h-35"})}):e.jsxs("div",{className:"animate-fade-down bg-rust",style:{marginTop:"2%",border:1,borderRadius:20},children:[e.jsx("div",{className:"title text-center",children:e.jsx("h2",{className:"py-2 text-3xl lg:py-4 lg:pt-8 lg:text-4xl font-roboto font-bold uppercase  text-zinc-800 text-center",children:"Holiday packages"})}),e.jsx("div",{children:i.length>0?e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8 pl-3 p-2 pr-4 overflow-hidden",children:i.map((l,r)=>e.jsxs(j,{className:" relative transform hover:scale-105 shadow-lg rounded-lg lg:w-96 border-2  mx-auto  h-auto my-3 lg:my-5",imgSrc:l.images[0].image,children:[(l==null?void 0:l.isDiscounted)&&e.jsxs("div",{className:"absolute top-0 right-0 bg-red-500 text-white py-1 px-3 rounded-tl-lg",children:[l.Discount,"% OFF"]}),e.jsx("h5",{children:l.title}),e.jsx("p",{className:"text-left font-normal text-zinc-700 text-clip text-sm  overflow-auto h-20",children:l.description}),e.jsxs("div",{className:"info flex justify-between ",children:[e.jsxs("div",{className:"flex items-center",children:[l.isDiscounted&&e.jsx("p",{className:"text-gray-500 line-through mr-2",children:"$"+l.price}),e.jsx("p",{className:"font-bold text-2xl mt-1 mr-auto",children:"$"+(l.isDiscounted?l.price-l.price*l.Discount/100:l.price)})]}),e.jsx(v,{})]}),e.jsx(f,{color:"gray",onClick:()=>g(`/packages/${l.title}`),className:"shadow-sm  bg-zinc-100  text-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors duration-100  text-sm font-medium text-center rounded-lg bg-primary-700 w-full",children:"Book Now"})]},r))}):e.jsx("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:e.jsx(w,{loop:!0,path:"https://lottie.host/72ef2ff7-b391-48a1-ab75-b24cb42bd376/dfa3j79vDK.json",play:!0,style:{width:"30%",height:"20%",justifyContent:"center"}})})})]})}const v=()=>e.jsxs("div",{className:"mb-0 mt-0 flex items-center cursor-pointer",children:[e.jsx("svg",{className:"h-5 w-5 text-yellow-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),e.jsx("svg",{className:"h-5 w-5 text-yellow-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),e.jsx("svg",{className:"h-5 w-5 text-yellow-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),e.jsx("svg",{className:"h-5 w-5 text-yellow-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),e.jsx("svg",{className:"h-5 w-5 text-yellow-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),e.jsx("span",{className:"ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800",children:"5.0"})]});export{v as Rating,L as default};
