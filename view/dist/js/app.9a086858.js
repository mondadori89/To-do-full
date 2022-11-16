(function(){"use strict";var e={2093:function(e,t,o){var n=o(9242),s=o(3396);const r=(0,s._)("h1",null,"To do list",-1);function i(e,t,o,n,i,a){const c=(0,s.up)("HeaderComp"),l=(0,s.up)("router-view"),u=(0,s.up)("FooterComp");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(c,{onSubmitLogin:a.onSubmitLogin,onSubmitLogout:a.onSubmitLogout,userName:i.userName},null,8,["onSubmitLogin","onSubmitLogout","userName"]),r,(0,s.Wm)(l,{userId:i.userId},null,8,["userId"]),(0,s.Wm)(u)],64)}var a=o(7139);const c={key:0};function l(e,t,o,r,i,l){return(0,s.wg)(),(0,s.iD)("header",null,[(0,s._)("form",{id:"loginForm",onSubmit:t[4]||(t[4]=(0,n.iM)(((...e)=>l.handleSubmit&&l.handleSubmit(...e)),["prevent"]))},[o.userName?(0,s.kq)("",!0):(0,s.wy)(((0,s.wg)(),(0,s.iD)("input",{key:0,type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>i.email=e),placeholder:"Email"},null,512)),[[n.nr,i.email]]),o.userName?(0,s.kq)("",!0):(0,s.wy)(((0,s.wg)(),(0,s.iD)("input",{key:1,type:"password","onUpdate:modelValue":t[1]||(t[1]=e=>i.password=e),placeholder:"Password"},null,512)),[[n.nr,i.password]]),o.userName?((0,s.wg)(),(0,s.iD)("button",{key:3,onClick:t[3]||(t[3]=t=>e.$emit("submitLogout"))}," Logout ")):((0,s.wg)(),(0,s.iD)("button",{key:2,type:"submit",onClick:t[2]||(t[2]=t=>e.$emit("submitLogin",{email:i.email,password:i.password}))}," Login "))],32),o.userName?((0,s.wg)(),(0,s.iD)("h3",c,"Hello "+(0,a.zw)(o.userName)+"!",1)):(0,s.kq)("",!0)])}var u={name:"HeaderComp",props:{userName:String},data(){return{email:"",password:""}},methods:{handleSubmit(e){e.target.reset()}}},d=o(89);const m=(0,d.Z)(u,[["render",l],["__scopeId","data-v-b3df8916"]]);var h=m;const p=e=>((0,s.dD)("data-v-375ecf24"),e=e(),(0,s.Cn)(),e),g=p((()=>(0,s._)("p",null,"Copyright © 2022",-1))),w=(0,s.Uk)("About");function f(e,t){const o=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("footer",null,[g,(0,s.Wm)(o,{to:"/about"},{default:(0,s.w5)((()=>[w])),_:1})])}const v={},y=(0,d.Z)(v,[["render",f],["__scopeId","data-v-375ecf24"]]);var k=y,b=o(7548);const C=async e=>{console.log("User fetching to dos: "+e);const t=await fetch(`api/all/${e}`),o=t.json();return o},D=async e=>{const t={id:e.id,description:e.description,status:e.status,user_id:e.userId},o=JSON.stringify(t),n=await fetch("api/create",{method:"POST",headers:{"Content-type":"application/json"},body:o});return console.log(n.status),null},_=async e=>{const t=await fetch(`api/remove/${e}`,{method:"DELETE",headers:{"Content-type":"application/json"}});return console.log(t.status),null},S=async e=>{const t=await fetch(`api/updateStatus/${e}`,{method:"PUT",headers:{"Content-type":"application/json"}});return console.log(t.status),null},I=async e=>{const t=await fetch(`api/${e}`),o=t.json();return o},T=async(e,t)=>{const o=JSON.stringify(t),n=await fetch(`api/setListOrder/${e}`,{method:"PUT",headers:{"Content-type":"application/json"},body:o});return console.log(n.status),null},O=async e=>{console.log("User fetching list: "+e);const t=await fetch(`api/getListOrder/${e}`),o=t.json();return o},L=async(e,t)=>{const o={email:e,password:t},n=JSON.stringify(o),s=await fetch("api/login",{method:"POST",headers:{"Content-type":"application/json",withCredentials:!0},body:n});if(console.log(s.status),200!==s.status){const e=s.json();return e}const r=s.json();return r},P=async()=>{const e=await fetch("api/login/logout",b(j),{method:"GET",withCredentials:!0}),t=e.json();return t};var j={origin:"http://localhost:8000",optionsSuccessStatus:200};const N=async()=>{try{const e=await fetch("api/profile/getuser",b(j),{method:"GET",withCredentials:!0}),t=e.json();return t}catch(e){console.log("Some error duude: "+e)}},x=async(e,t,o,n)=>{const s={name:e,email:t,password:o,password2:n},r=JSON.stringify(s),i=await fetch("api/register",{method:"POST",headers:{"Content-type":"application/json",withCredentials:!0},body:r});console.log(i.status),201==i.status&&console.log(`Register done with Email: ${t} and Password: ${o}`);const a=i.json();return a};var E={name:"App",components:{HeaderComp:h,FooterComp:k},data(){return{userId:"",userEmail:"",userName:""}},methods:{async onSubmitLogin({email:e,password:t}){const o=await L(e,t);o.msg?alert(o.msg):(this.userId=o.id,this.userEmail=o.email,this.userName=o.name)},async onSubmitLogout(){console.log("you are about to logout"),await P(),this.userId="",this.userEmail="",this.userName="",console.log("logout done")},async onGetUserInfoFromSession(){const e=await N();console.log(e.user),this.userId=e.user.id,this.userEmail=e.user.email,this.userName=e.user.name}},async mounted(){console.log("App initiated"),this.onGetUserInfoFromSession()}};const U=(0,d.Z)(E,[["render",i]]);var B=U,F=o(65);const M=(0,F.MT)({state:{counter:10},getters:{counter:e=>3*e.counter},mutations:{decrement:e=>e.counter--,increment:(e,t)=>e.counter=e.counter+t},actions:{decrement:({commit:e})=>e("decrement"),increment:({commit:e})=>{setTimeout((()=>{e("increment",3)}),500)}}});var $=M,z=o(678);function A(e,t,o,n,r,i){const a=(0,s.up)("ToDoForm"),c=(0,s.up)("ToDosContainer");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(a,{onSubmitClicked:i.onSubmitClicked,userId:o.userId},null,8,["onSubmitClicked","userId"]),(0,s.Wm)(c,{newTodo:r.newTodo,userId:o.userId},null,8,["newTodo","userId"])],64)}const R=e=>((0,s.dD)("data-v-3d2f9878"),e=e(),(0,s.Cn)(),e),W={key:0,class:"toDosContainer"},Z=R((()=>(0,s._)("h2",null,"To do's:",-1)));function H(e,t,o,n,r,i){const a=(0,s.up)("ToDoItem"),c=(0,s.up)("draggable");return e.userId?((0,s.wg)(),(0,s.iD)("div",W,[Z,(0,s.Wm)(c,{class:"dragArea list-group w-full",list:e.list,onChange:e.log},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.list,(t=>((0,s.wg)(),(0,s.iD)("div",{class:"m",key:t},[(0,s.Wm)(a,{onRemovedClicked:e.onRemovedClicked,toDo:t},null,8,["onRemovedClicked","toDo"])])))),128))])),_:1},8,["list","onChange"])])):(0,s.kq)("",!0)}var q=o(1620);const V={class:"toDoItem"},G={class:"to-do"},J={class:"item-icons"};function Y(e,t,o,n,r,i){const c=(0,s.up)("Icon");return(0,s.wg)(),(0,s.iD)("div",V,[(0,s._)("p",G,(0,a.zw)(o.toDo.description),1),(0,s._)("div",J,[(0,s.Wm)(c,{name:r.checkButtonClicked,class:"item-icon check",onClick:i.checkToDo},null,8,["name","onClick"]),(0,s.Wm)(c,{name:r.removeButtonState,class:"item-icon remove",onClick:t[0]||(t[0]=t=>e.$emit("removedClicked",o.toDo)),onMouseover:t[1]||(t[1]=e=>r.removeButtonState="xcirclefill"),onMouseleave:t[2]||(t[2]=e=>r.removeButtonState="xcircle")},null,8,["name"])])])}const K=e=>((0,s.dD)("data-v-6bdad876"),e=e(),(0,s.Cn)(),e),Q={class:"all-icons"},X={key:0,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"},ee=K((()=>(0,s._)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"},null,-1))),te=K((()=>(0,s._)("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"},null,-1))),oe=[ee,te],ne={key:1,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-check-circle",viewBox:"0 0 16 16"},se=K((()=>(0,s._)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"},null,-1))),re=K((()=>(0,s._)("path",{d:"M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"},null,-1))),ie=[se,re],ae={key:2,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-check-circle-fill",viewBox:"0 0 16 16"},ce=K((()=>(0,s._)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"},null,-1))),le=[ce],ue={key:3,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x-circle-fill",viewBox:"0 0 16 16"},de=K((()=>(0,s._)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"},null,-1))),me=[de];function he(e,t,o,n,r,i){return(0,s.wg)(),(0,s.iD)("div",Q,["xcircle"===o.name?((0,s.wg)(),(0,s.iD)("svg",X,oe)):(0,s.kq)("",!0),"checkcircle"===o.name?((0,s.wg)(),(0,s.iD)("svg",ne,ie)):(0,s.kq)("",!0),"checkcirclefill"===o.name?((0,s.wg)(),(0,s.iD)("svg",ae,le)):(0,s.kq)("",!0),"xcirclefill"===o.name?((0,s.wg)(),(0,s.iD)("svg",ue,me)):(0,s.kq)("",!0)])}var pe={props:{name:String}};const ge=(0,d.Z)(pe,[["render",he],["__scopeId","data-v-6bdad876"]]);var we=ge,fe={name:"ToDoItem",props:{toDo:Object},data(){return{checkButtonClicked:"checkcircle",removeButtonState:"xcircle"}},components:{Icon:we},methods:{async checkToDo(){const e=this.toDo.id;this.changeCheckIcon(),await S(e)},changeCheckIcon(){"checkcircle"===this.checkButtonClicked?this.checkButtonClicked="checkcirclefill":this.checkButtonClicked="checkcircle"}},async mounted(){const e=await I(this.toDo.id);e.status?this.checkButtonClicked="checkcirclefill":this.checkButtonClicked="checkcircle"}};const ve=(0,d.Z)(fe,[["render",Y],["__scopeId","data-v-79221d24"]]);var ye=ve,ke=(0,s.aZ)({name:"ToDosContainer",components:{ToDoItem:ye,draggable:q.J},props:{toDos:Array,newTodo:Object,userId:String},data(){return{enabled:!0,list:[],listOrder:[],dragging:!1,newToDoOnData:{}}},methods:{async log(e){console.log(e),console.log(this.list),await this.setListOrder()},async getToDos(){const e=await N();console.log(e),console.log(this.userId);const t=await C(this.userId),o=await O(this.userId),n=o.order_seq;let s=[];for(const r of n)for(const e of t)r==e.id&&s.push(e);return s},async onRemovedClicked(e){const t=e.id;this.list=this.list.filter((t=>t!==e)),console.log(this.list),this.setListOrder(),await _(t)},async setListOrder(){const e=this.list,t=[];e.forEach((e=>t.push(e.id))),this.listOrder=t;const o=this.userId;await T(o,t)}},watch:{newTodo:async function(){console.log("new to do added"),this.list.push(this.newTodo),await this.setListOrder()},userId:async function(){console.log("new guy (or no guy) on the house"),this.list=await this.getToDos()}},async mounted(){console.log("List charged"),this.list=await this.getToDos()}});const be=(0,d.Z)(ke,[["render",H],["__scopeId","data-v-3d2f9878"]]);var Ce=be;const De=e=>((0,s.dD)("data-v-47633d5c"),e=e(),(0,s.Cn)(),e),_e={class:"ToDoFormContainer"},Se=De((()=>(0,s._)("br",null,null,-1))),Ie=De((()=>(0,s._)("br",null,null,-1))),Te=De((()=>(0,s._)("button",null,"Register new User",-1)));function Oe(e,t,o,r,i,a){const c=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",_e,[o.userId?((0,s.wg)(),(0,s.iD)("form",{key:0,id:"toDoForm",onSubmit:t[2]||(t[2]=(0,n.iM)(((...e)=>a.handleSubmit&&a.handleSubmit(...e)),["prevent"]))},[(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>i.toDoOnForm=e)},null,512),[[n.nr,i.toDoOnForm]]),Se,Ie,(0,s._)("button",{type:"submit",onClick:t[1]||(t[1]=t=>e.$emit("submitClicked",i.toDoOnForm))}," Go do it! ")],32)):((0,s.wg)(),(0,s.j4)(c,{key:1,to:"/register"},{default:(0,s.w5)((()=>[Te])),_:1}))])}var Le={name:"ToDoForm",props:{userId:String},data(){return{toDoOnForm:""}},methods:{handleSubmit(e){e.target.reset(),this.toDoOnForm=""}}};const Pe=(0,d.Z)(Le,[["render",Oe],["__scopeId","data-v-47633d5c"]]);var je=Pe,Ne=o(536),xe={name:"HomePage",components:{ToDosContainer:Ce,ToDoForm:je},props:{userId:String},data(){return{newTodo:{}}},methods:{async onSubmitClicked(e){const t={id:(0,Ne.Z)(),description:e,status:!1,userId:this.userId};this.newTodo=t,await D(t)}}};const Ee=(0,d.Z)(xe,[["render",A]]);var Ue=Ee;const Be=(0,s._)("h3",null,"Version 1.0.0",-1),Fe=(0,s.Uk)("Go Back");function Me(e,t){const o=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[Be,(0,s.Wm)(o,{to:"/"},{default:(0,s.w5)((()=>[Fe])),_:1})],64)}const $e={},ze=(0,d.Z)($e,[["render",Me]]);var Ae=ze;const Re=e=>((0,s.dD)("data-v-6c249dc4"),e=e(),(0,s.Cn)(),e),We=Re((()=>(0,s._)("h3",null,"Register new User",-1))),Ze=(0,s.Uk)("Go Back");function He(e,t,o,r,i,a){const c=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[We,(0,s._)("form",{id:"registerForm",onSubmit:t[5]||(t[5]=(0,n.iM)(((...e)=>a.handleSubmit&&a.handleSubmit(...e)),["prevent"]))},[(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>i.registerName=e),placeholder:"Name"},null,512),[[n.nr,i.registerName]]),(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>i.registerEmail=e),placeholder:"Email"},null,512),[[n.nr,i.registerEmail]]),(0,s.wy)((0,s._)("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=e=>i.registerPassword=e),placeholder:"Password"},null,512),[[n.nr,i.registerPassword]]),(0,s.wy)((0,s._)("input",{type:"password","onUpdate:modelValue":t[3]||(t[3]=e=>i.registerPassword2=e),placeholder:"Password Confirmation"},null,512),[[n.nr,i.registerPassword2]]),(0,s._)("button",{type:"submit",onClick:t[4]||(t[4]=(...e)=>a.submitRegister&&a.submitRegister(...e))}," Create User ")],32),(0,s.Wm)(c,{class:"goback",to:"/"},{default:(0,s.w5)((()=>[Ze])),_:1})],64)}var qe={name:"RegisterPage",props:{userId:String},data(){return{registerName:"",registerEmail:"",registerPassword:"",registerPassword2:""}},methods:{async submitRegister(){const e=await x(this.registerName,this.registerEmail,this.registerPassword,this.registerPassword2);e.message?alert(e.message):this.$router.push("/")},handleSubmit(e){e.target.reset(),this.registerName="",this.registerEmail="",this.registerPassword="",this.registerPassword2=""}}};const Ve=(0,d.Z)(qe,[["render",He],["__scopeId","data-v-6c249dc4"]]);var Ge=Ve;const Je=[{path:"/",name:"HomePage",component:Ue},{path:"/about",name:"About",component:Ae},{path:"/register",name:"Register",component:Ge}],Ye=(0,z.p7)({history:(0,z.PO)("/"),routes:Je});var Ke=Ye;const Qe=(0,n.ri)(B);Qe.use($),Qe.use(Ke),Qe.mount("#app")}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,n,s,r){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],s=e[u][1],r=e[u][2];for(var a=!0,c=0;c<n.length;c++)(!1&r||i>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(a=!1,r<i&&(i=r));if(a){e.splice(u--,1);var l=s();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,s,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,r,i=n[0],a=n[1],c=n[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(s in a)o.o(a,s)&&(o.m[s]=a[s]);if(c)var u=c(o)}for(t&&t(n);l<i.length;l++)r=i[l],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(u)},n=self["webpackChunkview"]=self["webpackChunkview"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(2093)}));n=o.O(n)})();
//# sourceMappingURL=app.9a086858.js.map