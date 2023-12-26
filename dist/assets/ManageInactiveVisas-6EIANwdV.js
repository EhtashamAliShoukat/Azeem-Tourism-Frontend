import{r as n,w,q as m,j as e,L as C,t as f,T as p,I as x,x as S,v as b,C as D,y as N,s as y,A as T}from"./index-odFMYlZr.js";import{d as I,a as z,D as j,M as $,A as R,b as A}from"./ExitToApp-_53kb0_y.js";import{I as g,R as L,d as E}from"./DeleteForever-ptCE7g6X.js";import"./Tooltip-GIPLobos.js";import{C as _}from"./Card-itTmoPbE.js";import{s as B}from"./styled-components.browser.esm-BPGN_K0f.js";import{d as F}from"./Visibility-gHIL2nNn.js";import{T as h}from"./Tooltip-7_QbUA80.js";import{T as P,L as M}from"./VisibilityOff-65Yzkfwp.js";import{C as U}from"./CssBaseline-M8cyZCHq.js";import"./withStyles-UNuNTrS6.js";function V(){const[t,r]=n.useState([]),[s,d]=n.useState(!1),c=w();n.useEffect(()=>{const a="https://backend.azeemtourism.com/api/visas/get";m.get(a).then(i=>{const l=i.data.filter(k=>k.active===!1);r(l)}).catch(i=>{})},[s]);const o=async a=>{const i=`https://backend.azeemtourism.com/api/visas/update/${a}`;await m.post(i,{active:!0}).then(l=>{d(!s)}).catch(l=>{})},v=async a=>{const i=`https://backend.azeemtourism.com/api/visas/delete/${a}`;await m.delete(i).then(l=>{d(!s)}).catch(l=>{})};return n.useState(!0),n.useState(1),e.jsx(W,{id:"AdminPackagesCard",children:e.jsx("div",{className:"grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-5 p-3 bg-white rounded-lg shadow-lg border-2",children:t.map(a=>e.jsx(e.Fragment,{children:e.jsxs(_,{className:"shadow-lg rounded-lg lg:w-90 border-2 h-auto w-auto",children:[e.jsx("div",{className:"icon flex justify-center",children:e.jsx("img",{src:a.images[0].image,alt:"",style:{width:"100%",borderRadius:"10px",height:"100%"}})}),e.jsx("p",{className:"text-center text-md font-semibold mb-0",children:a.title}),e.jsx("p",{className:"text-justify w-full h-24 overflow-auto font-normal text-zinc-700 text-sm mt-0",children:a.description}),e.jsxs("div",{className:" flex justify-between flex-row",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"font-bold text-md",children:["Duration:"," "]}),e.jsxs("span",{className:"text-md",children:[a.duration," days"]})]}),e.jsx("p",{className:"font-bold text-md",children:"$"+a.price})]}),e.jsxs("p",{className:"text-justify w-full h-24 overflow-auto font-normal text-zinc-700 text-sm mt-0",children:["For Region: ","",a.region?a.region:null]}),e.jsxs("div",{className:"flex justify-around bg-white text-zinc-800 hover:text-white transition-colors duration-100 text-md font-medium text-center rounded-lg bg-primary-700 w-full",children:[e.jsx(h,{title:"Edit",children:e.jsx(g,{onClick:()=>c("/admin/EditVisaDetails",{state:a}),"aria-label":"Edit",children:e.jsx(C,{to:{pathname:"/admin/EditVisaDetails",state:"destination"},style:{textDecoration:"none",color:"grey"},children:e.jsx(L,{style:{color:"black"}})})})}),e.jsx(h,{title:"Unhide",children:e.jsx(g,{onClick:()=>{o(a._id)},"aria-label":"Unhide",children:e.jsx(F,{style:{color:"black"}})})}),e.jsx(h,{title:"Delete",children:e.jsx(g,{onClick:()=>{v(a._id)},"aria-label":"Delete",children:e.jsx(E,{style:{color:"red"}})})})]})]})}))})})}const W=B.section`
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
`,G=N({palette:{primary:{main:"#27272a",contrastText:"#fff"}}});function O(t){return e.jsxs(b,{variant:"body2",color:"text.secondary",align:"center",...t,children:["Copyright © ",e.jsx(M,{color:"inherit",children:"Azeem Tourism"})," ",new Date().getFullYear(),"."]})}const u=240,X=y(T,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:r})=>({zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),...r&&{marginLeft:u,width:`calc(100% - ${u}px)`,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})}})),Y=y(A,{shouldForwardProp:t=>t!=="open"})(({theme:t,open:r})=>({"& .MuiDrawer-paper":{position:"relative",whiteSpace:"nowrap",width:u,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen}),boxSizing:"border-box",...!r&&{overflowX:"hidden",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),width:t.spacing(7),[t.breakpoints.up("sm")]:{width:t.spacing(9)}}}}));function ie(){const[t,r]=n.useState(!0),s=()=>{r(!t)},d=w();var c=JSON.parse(localStorage.getItem("user"));return e.jsx(P,{theme:G,children:e.jsxs(f,{sx:{display:"flex"},children:[e.jsx(U,{}),e.jsx(X,{position:"absolute",open:t,children:e.jsxs(p,{sx:{pr:"24px"},children:[e.jsx(x,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:s,sx:{marginRight:"36px",...t&&{display:"none"}},children:e.jsx(S,{})}),e.jsx(b,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},children:"Admin Dashboard"}),"Welcome ",c.firstName,e.jsx(x,{color:"inherit",onClick:()=>{localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),localStorage.removeItem("user"),d("/"),window.location.reload()},children:e.jsx(I,{})})]})}),e.jsxs(Y,{variant:"permanent",open:t,children:[e.jsx(p,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",px:[1]},children:e.jsx(x,{onClick:s,children:e.jsx(z,{})})}),e.jsx(j,{}),e.jsx($,{})]}),e.jsxs(f,{component:"main",sx:{backgroundColor:o=>o.palette.mode==="light"?o.palette.grey[100]:o.palette.grey[900],flexGrow:1,height:"100vh",overflow:"auto"},children:[e.jsx(p,{}),e.jsx(R,{title:"Manage Inactive Visas"}),e.jsx(j,{style:{height:"2px"}}),e.jsx(V,{}),e.jsx(D,{maxWidth:"lg",sx:{mt:4,mb:4},children:e.jsx(O,{sx:{pt:4}})})]})]})})}export{ie as default};
