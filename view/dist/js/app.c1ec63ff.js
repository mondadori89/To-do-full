(function(){"use strict";var t={4526:function(t,o,e){var n=e(9242),i=e(3396);const a=(0,i._)("h1",null,"To do list",-1);function r(t,o,e,n,r,c){const s=(0,i.up)("HeaderComp"),l=(0,i.up)("router-view"),u=(0,i.up)("FooterComp");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(s,{onSubmitLogin:c.onSubmitLogin},null,8,["onSubmitLogin"]),(0,i._)("button",{id:"log",onClick:o[0]||(o[0]=(...t)=>c.onLogUserInfo&&c.onLogUserInfo(...t))},"Log user info"),a,(0,i.Wm)(l),(0,i.Wm)(u)],64)}function c(t,o,e,a,r,c){return(0,i.wg)(),(0,i.iD)("header",null,[(0,i._)("form",{id:"loginForm",onSubmit:o[3]||(o[3]=(0,n.iM)(((...t)=>c.handleSubmit&&c.handleSubmit(...t)),["prevent"]))},[(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=t=>r.email=t),placeholder:"Email"},null,512),[[n.nr,r.email]]),(0,i.wy)((0,i._)("input",{type:"password","onUpdate:modelValue":o[1]||(o[1]=t=>r.password=t),placeholder:"Password"},null,512),[[n.nr,r.password]]),(0,i._)("button",{type:"submit",onClick:o[2]||(o[2]=o=>t.$emit("submitLogin",{email:r.email,password:r.password}))}," Login ")],32)])}var s={name:"HeaderComp",props:{},data(){return{email:"monda@gmail.com",password:"asdfghj"}},methods:{handleSubmit(t){t.target.reset()}}},l=e(89);const u=(0,l.Z)(s,[["render",c],["__scopeId","data-v-4aef1c3e"]]);var d=u;const m=t=>((0,i.dD)("data-v-375ecf24"),t=t(),(0,i.Cn)(),t),h=m((()=>(0,i._)("p",null,"Copyright © 2022",-1))),p=(0,i.Uk)("About");function f(t,o){const e=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("footer",null,[h,(0,i.Wm)(e,{to:"/about"},{default:(0,i.w5)((()=>[p])),_:1})])}const g={},w=(0,l.Z)(g,[["render",f],["__scopeId","data-v-375ecf24"]]);var v=w,b=e(7548);let k="",y="";k="http://localhost:8000/api",y="http://localhost:8000";const C=async()=>{const t=await fetch(`${k}/all`),o=t.json();return o},D=async t=>{const o={id:t.id,description:t.description,status:t.status},e=JSON.stringify(o),n=await fetch(`${k}/create`,{method:"POST",headers:{"Content-type":"application/json"},body:e});return console.log(n.status),null},_=async t=>{const o=await fetch(`${k}/remove/${t}`,{method:"DELETE",headers:{"Content-type":"application/json"}});return console.log(o.status),null},T=async t=>{const o=await fetch(`${k}/updateStatus/${t}`,{method:"PUT",headers:{"Content-type":"application/json"}});return console.log(o.status),null},O=async t=>{const o=await fetch(`${k}/${t}`),e=o.json();return e},L=async(t,o)=>{const e=JSON.stringify(o),n=await fetch(`${k}/setListOrder/${t}`,{method:"PUT",headers:{"Content-type":"application/json"},body:e});return console.log(n.status),null},S=async t=>{const o=await fetch(`${k}/getListOrder/${t}`),e=o.json();return e},x=async(t,o)=>{const e={email:t,password:o},n=JSON.stringify(e),i=await fetch(`${y}/login`,{method:"POST",headers:{"Content-type":"application/json",withCredentials:!0},body:n});return console.log(i),console.log(i.status),null};var j={origin:"http://localhost:8000",optionsSuccessStatus:200};const I=async()=>{const t=await fetch(`${y}/profile/getuser`,b(j),{method:"GET",withCredentials:!0}),o=t.json();return console.log(t.headers),o};var $={name:"App",components:{HeaderComp:d,FooterComp:v},methods:{async onSubmitLogin({email:t,password:o}){console.log(t),console.log(o),await x(t,o)},async onLogUserInfo(){const t=await I();console.log(t)}},async mounted(){console.log("App initiated")}};const B=(0,l.Z)($,[["render",r]]);var F=B,M=e(65);const A=(0,M.MT)({state:{counter:10},getters:{counter:t=>3*t.counter},mutations:{decrement:t=>t.counter--,increment:(t,o)=>t.counter=t.counter+o},actions:{decrement:({commit:t})=>t("decrement"),increment:({commit:t})=>{setTimeout((()=>{t("increment",3)}),500)}}});var z=A,W=e(678);function Z(t,o,e,n,a,r){const c=(0,i.up)("ToDoForm"),s=(0,i.up)("ToDosContainer");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(c,{onSubmitClicked:r.onSubmitClicked},null,8,["onSubmitClicked"]),(0,i.Wm)(s,{newTodo:a.newTodo},null,8,["newTodo"])],64)}const P=t=>((0,i.dD)("data-v-3bded43a"),t=t(),(0,i.Cn)(),t),U={class:"toDosContainer"},H=P((()=>(0,i._)("h2",null,"To do's:",-1)));function E(t,o,e,n,a,r){const c=(0,i.up)("ToDoItem"),s=(0,i.up)("draggable");return(0,i.wg)(),(0,i.iD)("div",U,[H,(0,i.Wm)(s,{class:"dragArea list-group w-full",list:t.list,onChange:t.log},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.list,(o=>((0,i.wg)(),(0,i.iD)("div",{class:"m",key:o},[(0,i.Wm)(c,{onRemovedClicked:t.onRemovedClicked,toDo:o},null,8,["onRemovedClicked","toDo"])])))),128))])),_:1},8,["list","onChange"])])}var q=e(1620),J=e(7139);const R={class:"toDoItem"},V={class:"to-do"},Y={class:"item-icons"};function G(t,o,e,n,a,r){const c=(0,i.up)("Icon");return(0,i.wg)(),(0,i.iD)("div",R,[(0,i._)("p",V,(0,J.zw)(e.toDo.description),1),(0,i._)("div",Y,[(0,i.Wm)(c,{name:a.checkButtonClicked,class:"item-icon check",onClick:r.checkToDo},null,8,["name","onClick"]),(0,i.Wm)(c,{name:a.removeButtonState,class:"item-icon remove",onClick:o[0]||(o[0]=o=>t.$emit("removedClicked",e.toDo)),onMouseover:o[1]||(o[1]=t=>a.removeButtonState="xcirclefill"),onMouseleave:o[2]||(o[2]=t=>a.removeButtonState="xcircle")},null,8,["name"])])])}const N=t=>((0,i.dD)("data-v-6bdad876"),t=t(),(0,i.Cn)(),t),K={class:"all-icons"},Q={key:0,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"},X=N((()=>(0,i._)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"},null,-1))),tt=N((()=>(0,i._)("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"},null,-1))),ot=[X,tt],et={key:1,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-check-circle",viewBox:"0 0 16 16"},nt=N((()=>(0,i._)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"},null,-1))),it=N((()=>(0,i._)("path",{d:"M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"},null,-1))),at=[nt,it],rt={key:2,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-check-circle-fill",viewBox:"0 0 16 16"},ct=N((()=>(0,i._)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"},null,-1))),st=[ct],lt={key:3,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x-circle-fill",viewBox:"0 0 16 16"},ut=N((()=>(0,i._)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"},null,-1))),dt=[ut];function mt(t,o,e,n,a,r){return(0,i.wg)(),(0,i.iD)("div",K,["xcircle"===e.name?((0,i.wg)(),(0,i.iD)("svg",Q,ot)):(0,i.kq)("",!0),"checkcircle"===e.name?((0,i.wg)(),(0,i.iD)("svg",et,at)):(0,i.kq)("",!0),"checkcirclefill"===e.name?((0,i.wg)(),(0,i.iD)("svg",rt,st)):(0,i.kq)("",!0),"xcirclefill"===e.name?((0,i.wg)(),(0,i.iD)("svg",lt,dt)):(0,i.kq)("",!0)])}var ht={props:{name:String}};const pt=(0,l.Z)(ht,[["render",mt],["__scopeId","data-v-6bdad876"]]);var ft=pt,gt={name:"ToDoItem",props:{toDo:Object},data(){return{checkButtonClicked:"checkcircle",removeButtonState:"xcircle"}},components:{Icon:ft},methods:{async checkToDo(){const t=this.toDo.id;this.changeCheckIcon(),await T(t)},changeCheckIcon(){"checkcircle"===this.checkButtonClicked?this.checkButtonClicked="checkcirclefill":this.checkButtonClicked="checkcircle"}},async mounted(){const t=await O(this.toDo.id);t.status?this.checkButtonClicked="checkcirclefill":this.checkButtonClicked="checkcircle"}};const wt=(0,l.Z)(gt,[["render",G],["__scopeId","data-v-79221d24"]]);var vt=wt,bt=(0,i.aZ)({name:"ToDosContainer",components:{ToDoItem:vt,draggable:q.J},props:{toDos:Array,newTodo:Object},data(){return{enabled:!0,list:[],listOrder:[],dragging:!1,newToDoOnData:{}}},methods:{async log(t){console.log(t),console.log(this.list),await this.setListOrder()},async getToDos(){const t=await S("8a23bf6d-4030-42fe-b54a-b59a9a32d958"),o=t.order_seq,e=await C();let n=[];for(const i of o)for(const t of e)i==t.id&&n.push(t);return n},async onRemovedClicked(t){const o=t.id;this.list=this.list.filter((o=>o!==t)),console.log(this.list),this.setListOrder(),await _(o)},async setListOrder(){const t=this.list,o=[];t.forEach((t=>o.push(t.id))),this.listOrder=o;const e="8a23bf6d-4030-42fe-b54a-b59a9a32d958";await L(e,o)}},watch:{newTodo:async function(){console.log("new to do added"),this.list.push(this.newTodo),await this.setListOrder()}},async mounted(){console.log("List charged"),this.list=await this.getToDos()}});const kt=(0,l.Z)(bt,[["render",E],["__scopeId","data-v-3bded43a"]]);var yt=kt;const Ct=t=>((0,i.dD)("data-v-4c0bafce"),t=t(),(0,i.Cn)(),t),Dt={class:"ToDoFormContainer"},_t=Ct((()=>(0,i._)("br",null,null,-1))),Tt=Ct((()=>(0,i._)("br",null,null,-1)));function Ot(t,o,e,a,r,c){return(0,i.wg)(),(0,i.iD)("div",Dt,[(0,i._)("form",{id:"toDoForm",onSubmit:o[2]||(o[2]=(0,n.iM)(((...t)=>c.handleSubmit&&c.handleSubmit(...t)),["prevent"]))},[(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=t=>r.toDoOnForm=t)},null,512),[[n.nr,r.toDoOnForm]]),_t,Tt,(0,i._)("button",{type:"submit",onClick:o[1]||(o[1]=o=>t.$emit("submitClicked",r.toDoOnForm))}," Go do it! ")],32)])}var Lt={name:"ToDoForm",props:{},data(){return{toDoOnForm:""}},methods:{handleSubmit(t){t.target.reset(),this.toDoOnForm=""}}};const St=(0,l.Z)(Lt,[["render",Ot],["__scopeId","data-v-4c0bafce"]]);var xt=St,jt=e(536),It={name:"HomePage",components:{ToDosContainer:yt,ToDoForm:xt},data(){return{newTodo:{}}},methods:{async onSubmitClicked(t){const o={id:(0,jt.Z)(),description:t,status:!1};this.newTodo=o,await D(o)}}};const $t=(0,l.Z)(It,[["render",Z]]);var Bt=$t;const Ft=(0,i._)("h3",null,"Version 1.0.0",-1),Mt=(0,i.Uk)("Go Back");function At(t,o){const e=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[Ft,(0,i.Wm)(e,{to:"/"},{default:(0,i.w5)((()=>[Mt])),_:1})],64)}const zt={},Wt=(0,l.Z)(zt,[["render",At]]);var Zt=Wt;const Pt=[{path:"/",name:"HomePage",component:Bt},{path:"/about",name:"About",component:Zt}],Ut=(0,W.p7)({history:(0,W.PO)("/"),routes:Pt});var Ht=Ut;const Et=(0,n.ri)(F);Et.use(z),Et.use(Ht),Et.mount("#app")}},o={};function e(n){var i=o[n];if(void 0!==i)return i.exports;var a=o[n]={exports:{}};return t[n](a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(o,n,i,a){if(!n){var r=1/0;for(u=0;u<t.length;u++){n=t[u][0],i=t[u][1],a=t[u][2];for(var c=!0,s=0;s<n.length;s++)(!1&a||r>=a)&&Object.keys(e.O).every((function(t){return e.O[t](n[s])}))?n.splice(s--,1):(c=!1,a<r&&(r=a));if(c){t.splice(u--,1);var l=i();void 0!==l&&(o=l)}}return o}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[n,i,a]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,n){var i,a,r=n[0],c=n[1],s=n[2],l=0;if(r.some((function(o){return 0!==t[o]}))){for(i in c)e.o(c,i)&&(e.m[i]=c[i]);if(s)var u=s(e)}for(o&&o(n);l<r.length;l++)a=r[l],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(u)},n=self["webpackChunkview"]=self["webpackChunkview"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(4526)}));n=e.O(n)})();
//# sourceMappingURL=app.c1ec63ff.js.map