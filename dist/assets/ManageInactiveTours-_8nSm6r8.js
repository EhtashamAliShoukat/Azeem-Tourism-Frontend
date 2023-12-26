import{r as l,w,q as m,j as e,L as C,t as f,T as p,I as x,x as T,v as b,C as S,y as D,s as y,A as N}from"./index-odFMYlZr.js";import{d as I,a as z,D as j,M as $,A,b as R}from"./ExitToApp-_53kb0_y.js";import{s as L}from"./styled-components.browser.esm-BPGN_K0f.js";import{I as g,R as _,d as B}from"./DeleteForever-ptCE7g6X.js";import{d as E}from"./Visibility-gHIL2nNn.js";import"./Tooltip-GIPLobos.js";import{C as F}from"./Card-itTmoPbE.js";import{T as h}from"./Tooltip-7_QbUA80.js";import{T as M,L as P}from"./VisibilityOff-65Yzkfwp.js";import{C as U}from"./CssBaseline-M8cyZCHq.js";import"./withStyles-UNuNTrS6.js";function W(){const[t,a]=l.useState([]),[i,d]=l.useState(!1),c=w();l.useEffect(()=>{const r="https://backend.azeemtourism.com/api/tours/get";m.get(r).then(s=>{const o=s.data.filter(k=>k.active===!1);a(o)}).catch(s=>{})},[i]);const n=async r=>{const s=`https://backend.azeemtourism.com/api/tours/update/${r}`;await m.post(s,{active:!0}).then(o=>{d(!i)}).catch(o=>{})},v=async r=>{const s=`https://backend.azeemtourism.com/api/tours/delete/${r}`;await m.delete(s).then(o=>{d(!i)}).catch(o=>{})};return l.useState(1),e.jsx(G,{id:"AdminPackagesCard",children:e.jsx("div",{className:"grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-5 p-3 bg-white rounded-lg shadow-lg border-2",children:t.map(r=>e.jsxs(F,{className:"shadow-lg rounded-lg lg:w-90 border-2 h-auto w-auto",children:[e.jsx("div",{className:"icon flex justify-center",children:e.jsx("img",{src:r.images[0].image,alt:"",style:{width:"100%",borderRadius:"10px",height:"100%"}})}),e.jsx("p",{className:"text-center text-md font-semibold mb-0",children:r.title}),e.jsx("p",{className:"text-justify w-full h-24 overflow-auto font-normal text-zinc-700 text-sm mt-0",children:r.description}),e.jsx("div",{children:e.jsxs("p",{className:"text-justify w-full h-24 overflow-auto font-normal text-zinc-700 text-sm mt-0",children:["For Region: ","",r.region?r.region:null]})}),e.jsxs("div",{className:" flex justify-between flex-row",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-bold text-md",children:"Available Ticket: "}),e.jsx("span",{className:"text-md",children:r.totalCount})]}),e.jsx("p",{className:"font-bold text-md",children:"$"+r.price})]}),e.jsxs("div",{className:"flex justify-around bg-white text-zinc-800 hover:text-white transition-colors duration-100 text-md font-medium text-center rounded-lg bg-primary-700 w-full",children:[e.jsx(h,{title:"Edit",children:e.jsx(g,{onClick:()=>c("/admin/editTourDetails",{state:r}),"aria-label":"Edit",children:e.jsx(C,{to:{pathname:"/admin/editTourDetails",state:"destination"},style:{textDecoration:"none",color:"grey"},children:e.jsx(_,{style:{color:"black"}})})})}),e.jsx(h,{title:"Unhide",children:e.jsx(g,{onClick:()=>{n(r._id)},"aria-label":"Unhide",children:e.jsx(E,{style:{color:"black"}})})}),e.jsx(h,{title:"Delete",children:e.jsx(g,{onClick:()=>{v(r._id)},"aria-label":"Delete",children:e.jsx(B,{style:{color:"red"}})})})]})]}))})})}const G=L.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`,O=D({palette:{primary:{main:"#27272a",contrastText:"#fff"}}});function X(t){return e.jsxs(b,{variant:"body2",color:"text.secondary",align:"center",...t,children:["Copyright © ",e.jsx(P,{color:"inherit",children:"Azeem Tourism"})," ",new Date().getFullYear(),"."]})}const u=240,Y=y(N,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:a})=>({zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),...a&&{marginLeft:u,width:`calc(100% - ${u}px)`,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})}})),q=y(R,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:a})=>({"& .MuiDrawer-paper":{position:"relative",whiteSpace:"nowrap",width:u,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen}),boxSizing:"border-box",...!a&&{overflowX:"hidden",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),width:t.spacing(7),[t.breakpoints.up("sm")]:{width:t.spacing(9)}}}}));function se(){const[t,a]=l.useState(!0),i=()=>{a(!t)},d=w();var c=JSON.parse(localStorage.getItem("user"));return e.jsx(M,{theme:O,children:e.jsxs(f,{sx:{display:"flex"},children:[e.jsx(U,{}),e.jsx(Y,{position:"absolute",open:t,children:e.jsxs(p,{sx:{pr:"24px"},children:[e.jsx(x,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:i,sx:{marginRight:"36px",...t&&{display:"none"}},children:e.jsx(T,{})}),e.jsx(b,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},children:"Admin Dashboard"}),"Welcome ",c.firstName,e.jsx(x,{color:"inherit",onClick:()=>{localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),localStorage.removeItem("user"),d("/"),window.location.reload()},children:e.jsx(I,{})})]})}),e.jsxs(q,{variant:"permanent",open:t,children:[e.jsx(p,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",px:[1]},children:e.jsx(x,{onClick:i,children:e.jsx(z,{})})}),e.jsx(j,{}),e.jsx($,{})]}),e.jsxs(f,{component:"main",sx:{backgroundColor:n=>n.palette.mode==="light"?n.palette.grey[100]:n.palette.grey[900],flexGrow:1,height:"100vh",overflow:"auto"},children:[e.jsx(p,{}),e.jsx(A,{title:"Manage Inactive Tours"}),e.jsx(j,{style:{height:"2px"}}),e.jsx(W,{}),e.jsx(S,{maxWidth:"lg",sx:{mt:4,mb:4},children:e.jsx(X,{sx:{pt:4}})})]})]})})}export{se as default};
