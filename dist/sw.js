if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),t={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-ab116399"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AddHotels-5oqFHYZ5.js",revision:null},{url:"assets/AddPackages-rcIU-gva.js",revision:null},{url:"assets/AddressForm-Z7m3Ebap.js",revision:null},{url:"assets/AddTickets-NKLcchUr.js",revision:null},{url:"assets/AddTours-90B6XZe0.js",revision:null},{url:"assets/AddVisas-z7J3vEXx.js",revision:null},{url:"assets/AdminToursCard-luSKiQ6k.js",revision:null},{url:"assets/atmCard-Ao-igprN.png",revision:null},{url:"assets/beach-7IfVp0M3.png",revision:null},{url:"assets/capitalize-5rU_-DoW.js",revision:null},{url:"assets/Card-rp43y1kq.js",revision:null},{url:"assets/Checkbox-SW7lQghg.js",revision:null},{url:"assets/CheckOutSucces-uYBh3iHT.js",revision:null},{url:"assets/CloudUploadOutlined-B19grNi_.js",revision:null},{url:"assets/Contact-W-Rr2ibi.js",revision:null},{url:"assets/CssBaseline-bzgSFrbW.js",revision:null},{url:"assets/Delete-thaQVjjC.js",revision:null},{url:"assets/DeleteForever-IBOv72uH.js",revision:null},{url:"assets/DeleteForeverOutlined-cWaaWKxW.js",revision:null},{url:"assets/Destination1-m05PJlAd.png",revision:null},{url:"assets/Destination2-Y-58lLru.png",revision:null},{url:"assets/Destination3-_AyxaYr1.png",revision:null},{url:"assets/Destination4-VfawLxJr.png",revision:null},{url:"assets/Destination5-b4A1vubU.png",revision:null},{url:"assets/EditHotelDetails-zOPs5Fms.js",revision:null},{url:"assets/EditPackageDetails--lFeAftR.js",revision:null},{url:"assets/EditPackageForm-5J3VY-8m.js",revision:null},{url:"assets/EditTicketDetails-rFPvWygg.js",revision:null},{url:"assets/EditTourDetails-YEi65Xtn.js",revision:null},{url:"assets/EditVisaDetails-OXqwOFl7.js",revision:null},{url:"assets/ExitToApp-lAv1ZvSx.js",revision:null},{url:"assets/flight-exfTzauK.png",revision:null},{url:"assets/Hero-LJoDUajt.js",revision:null},{url:"assets/home-JNEocJqE.js",revision:null},{url:"assets/HotelDetail-i9hqY-ja.js",revision:null},{url:"assets/HotelsCard-HzIa77hX.js",revision:null},{url:"assets/index-4E3LXMpH.js",revision:null},{url:"assets/index-DUdQ9eJz.css",revision:null},{url:"assets/index-KHJ1Bk7y.js",revision:null},{url:"assets/index-Qm37-hOS.js",revision:null},{url:"assets/index-Wk68FX-a.css",revision:null},{url:"assets/index.esm-dOpcPGdK.js",revision:null},{url:"assets/Invoice-aIYhV5UW.js",revision:null},{url:"assets/Invoice-k6E_d0tH.css",revision:null},{url:"assets/ListItemText-7Ghp6EMP.js",revision:null},{url:"assets/Login-Byq4x_9T.js",revision:null},{url:"assets/logo-oJPGrvmH.png",revision:null},{url:"assets/ManageHotels-MQBMqHpY.js",revision:null},{url:"assets/ManageInactiveHotels-X5BBKzd5.js",revision:null},{url:"assets/ManageInactivePackages-Hdxqc7w0.js",revision:null},{url:"assets/ManageInactiveTickets-iBhWb01s.js",revision:null},{url:"assets/ManageInactiveTours-unOVmddg.js",revision:null},{url:"assets/ManageInactiveVisas-Yg1KFMaJ.js",revision:null},{url:"assets/ManagePackages-Dri93yEK.js",revision:null},{url:"assets/ManageTickets-rj15tknu.js",revision:null},{url:"assets/ManageTours-vvNmTfqC.js",revision:null},{url:"assets/ManageVisas-Chwsy4Xu.js",revision:null},{url:"assets/navlogo-nn_Lnp-P.png",revision:null},{url:"assets/Order-Shdc3cQp.js",revision:null},{url:"assets/packageDetail-JD-H2DrK.js",revision:null},{url:"assets/PackagesCard-jbhtW4jI.js",revision:null},{url:"assets/Pakistan-n4uQWKxd.png",revision:null},{url:"assets/Review-Ie-uOGcc.js",revision:null},{url:"assets/ReviewHotels-vTOJ_JeK.js",revision:null},{url:"assets/ReviewVisa-fQpDMl4k.js",revision:null},{url:"assets/Select-Vky3JIPX.js",revision:null},{url:"assets/Services-DRYbBCK9.js",revision:null},{url:"assets/styled-components.browser.esm-27Qsjwnj.js",revision:null},{url:"assets/TextField-STLcwblj.js",revision:null},{url:"assets/TicketDetail-Vfm6hP1A.js",revision:null},{url:"assets/ticketsCards-KQB5oPFo.js",revision:null},{url:"assets/Tooltip-kFKRgWfz.js",revision:null},{url:"assets/Tooltip-RdJNKoi-.js",revision:null},{url:"assets/TourDetail-UHcV9Rd2.js",revision:null},{url:"assets/ToursCards-hFa4yAFV.js",revision:null},{url:"assets/travelGuide-3MFsM9an.png",revision:null},{url:"assets/UAE-GrHwmsNN.png",revision:null},{url:"assets/VisaDetail-8VYUI22F.js",revision:null},{url:"assets/VisasCard-bN5xuoUU.js",revision:null},{url:"assets/Visibility-ln14b-MV.js",revision:null},{url:"assets/VisibilityOff-HjpOYbqA.js",revision:null},{url:"index.html",revision:"b44f1b37ca762ae0521efe450795b4f9"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"b51a66ecea9f4fe88df8dd64ada687be"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute((({url:s})=>s.pathname.startsWith("/api")),new s.CacheFirst({cacheName:"api-cache",plugins:[new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));