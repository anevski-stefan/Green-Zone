import{_ as l,o as a,c as i,a as s,i as _,j as d,v as c,t as h,g as f,u as g,b as w}from"./entry.GbTm1XBm.js";import{a as x}from"./axios.L6U4YIEh.js";const b={data(){return{username:"",password:"",errorMessage:""}},methods:{async login(){const r=g();try{const e=await x.post(r.public.production_base_url+"/auth/authenticate",{username:this.username,password:this.password});document.cookie=`accessToken=${e.data.accessToken}; path=/`,document.cookie=`user=${JSON.stringify(e.data.user)}; path=/`,this.$router.push("/"),window.location.reload()}catch(e){e.response&&e.response.status===401?(console.error("Error 401: Unauthorized"),this.errorMessage="Error 401: Unauthorized"):(console.error("Login failed:",e),this.errorMessage="An error occurred. Please try again later.")}}}},y={class:"flex justify-center items-center"},v={class:"w-full max-w-md"},k=s("h1",{class:"text-4xl uppercase tracking-wider text-center my-5"},"Login",-1),M={class:"mb-4"},U=s("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"username"},"Username or Email",-1),$={class:"mb-4"},E=s("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"password"},"Password",-1),L=s("button",{type:"submit",class:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"}," Login ",-1),V={key:0,class:"text-red-500 text-xs mt-2"};function N(r,e,p,m,o,n){return a(),i("div",y,[s("div",v,[s("form",{onSubmit:e[2]||(e[2]=_((...t)=>n.login&&n.login(...t),["prevent"])),class:"shadow-md rounded px-8 pt-6 pb-8 mb-4"},[k,s("div",M,[U,d(s("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>o.username=t),id:"username",name:"username",type:"text",placeholder:"Username or Email",required:"",class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"},null,512),[[c,o.username]])]),s("div",$,[E,d(s("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>o.password=t),id:"password",name:"password",type:"password",placeholder:"Password",required:"",class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"},null,512),[[c,o.password]])]),L,o.errorMessage?(a(),i("div",V,h(o.errorMessage),1)):f("",!0)],32)])])}const u=l(b,[["render",N]]),B={components:{Login:u}},P={class:"mt-10"};function S(r,e,p,m,o,n){const t=u;return a(),i("div",P,[w(t)])}const q=l(B,[["render",S]]);export{q as default};
