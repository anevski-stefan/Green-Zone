import{_ as a,o as i,c as n,a as e,t as c,b as h}from"./entry.GbTm1XBm.js";const p=""+globalThis.__publicAssetsURL("images/posts/profile_picture.png"),m={data(){return{user:null,loading:!0}},beforeRouteEnter(s,r,o){this.getCookie("user")?o():o({path:"/login"})},mounted(){const s=this.getCookie("user");s&&(this.user=JSON.parse(s),this.loading=!1)},methods:{getCookie(s){const o=`; ${document.cookie}`.split(`; ${s}=`);if(o.length===2)return o.pop().split(";").shift()},async logout(){try{document.cookie="accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",document.cookie="user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",this.$router.push("/login"),window.location.reload()}catch(s){console.error("Logout failed:",s)}}}},f={key:0,class:"absolute inset-0 flex justify-center items-center"},x=e("p",{class:"text-xl font-semibold"},"Loading...",-1),g=[x],k={key:1,class:"bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto"},b={class:"p-8"},v={class:"flex items-center"},y=e("img",{src:p,alt:"profile-picture",class:"w-24 h-24 rounded-full mr-6"},null,-1),w={class:"text-lg font-semibold"},C={class:"text-sm text-gray-600"},$={class:"text-sm text-gray-600"},T={key:0,class:"mt-6"},N=e("h2",{class:"text-lg font-semibold mb-2"},"About me:",-1),L={class:"text-sm text-gray-700"},P={key:1,class:"mt-6"},B=e("p",{class:"text-sm text-gray-700"},"No bio available",-1),E=[B],J={key:2,class:"flex justify-center items-center mt-[-50vh]"},U=e("p",{class:"text-xl font-semibold"},"Loading...",-1),j=[U];function A(s,r,o,l,t,d){return i(),n("div",null,[t.loading||!t.user?(i(),n("div",f,g)):t.user?(i(),n("div",k,[e("div",b,[e("div",v,[y,e("div",null,[e("p",w,"Name: "+c(t.user.name),1),e("p",C,"Email: "+c(t.user.email),1),e("p",$,"Points: "+c(t.user.points),1)])]),t.user.aboutMe?(i(),n("div",T,[N,e("p",L,c(t.user.aboutMe),1)])):(i(),n("div",P,E))])])):(i(),n("div",J,j))])}const _=a(m,[["render",A]]),M={components:{Profile:_}},R={class:"min-h-screen mt-10"},S=e("h1",{class:"text-4xl text-center mb-8 text-gray-900 uppercase tracking-wider"},"Profile",-1);function V(s,r,o,l,t,d){const u=_;return i(),n("div",R,[S,h(u)])}const O=a(M,[["render",V]]);export{O as default};