(this["webpackJsonpunichat-template"]=this["webpackJsonpunichat-template"]||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),i=a.n(c),u=(a(60),a(23)),o=a(4),l=a(17),s=a(16),p=a.n(s),m=(a(63),p.a.initializeApp({apiKey:"AIzaSyB-yq9JJCE9CQsguQxbLlxtTlBtRt48ih0",authDomain:"unichat-app-a3245.firebaseapp.com",projectId:"unichat-app-a3245",storageBucket:"unichat-app-a3245.appspot.com",messagingSenderId:"717580705678",appId:"1:717580705678:web:7951599ec37427729dcedf"}).auth()),h=r.a.createContext();function d(e){var t=e.children,a=Object(n.useState)(!0),c=Object(l.a)(a,2),i=c[0],u=c[1],s=Object(n.useState)(null),p=Object(l.a)(s,2),d=p[0],f=p[1],b=Object(o.f)();Object(n.useEffect)((function(){m.onAuthStateChanged((function(e){f(e),u(!1),e&&b.push("/chats")}))}),[d,b]);var g={user:d};return r.a.createElement(h.Provider,{value:g},!i&&t)}var f=a(18),b=a.n(f),g=a(33),v=a(3),E=a.n(v),j=a(53);function O(){var e=Object(n.useRef)(!1),t=Object(n.useState)(!0),a=Object(l.a)(t,2),c=a[0],i=a[1],u=Object(n.useContext)(h).user,s=Object(o.f)();function p(){return(p=Object(g.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.signOut();case 2:s.push("/");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=Object(g.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.blob();case 5:return n=e.sent,e.abrupt("return",new File([n],"test.jpg",{type:"image/jpeg"}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){if(!e.current){if(e.current=!0,!u||null===u)return void s.push("/");E.a.get("https://api.chatengine.io/users/me/",{headers:{"project-id":"952e067a-8475-40a1-8b51-0b0b22186da6","user-name":u.email,"user-secret":u.uid}}).then((function(){return i(!1)})).catch((function(e){var t=new FormData;t.append("email",u.email),t.append("username",u.email),t.append("secret",u.uid),function(e){return d.apply(this,arguments)}(u.photoURL).then((function(e){t.append("avatar",e,e.name),E.a.post("https://api.chatengine.io/users/",t,{headers:{"private-key":"986a8e8d-7af2-466c-bfc8-d9e24780611a"}}).then((function(){return i(!1)})).catch((function(e){return console.log("e",e.response)}))}))}))}}),[u,s]),!u||c?r.a.createElement("div",null):r.a.createElement("div",{className:"chats-page"},r.a.createElement("div",{className:"nav-bar"},r.a.createElement("div",{className:"logo-tab"},"Unichat"),r.a.createElement("div",{onClick:function(){return p.apply(this,arguments)},className:"logout-tab"},"Logout")),r.a.createElement(j.d,{height:"calc(100vh - 66px)",projectID:"952e067a-8475-40a1-8b51-0b0b22186da6",userName:u.email,userSecret:u.uid}))}var w=a(118),k=a(119);function y(){return r.a.createElement("div",{id:"login-page"},r.a.createElement("div",{id:"login-card"},r.a.createElement("h2",null,"Welcome to Unichat!"),r.a.createElement("div",{className:"login-button google",onClick:function(){return m.signInWithRedirect(new p.a.auth.GoogleAuthProvider)}},r.a.createElement(w.a,null)," Sign In with Google"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"login-button facebook",onClick:function(){return m.signInWithRedirect(new p.a.auth.FacebookAuthProvider)}},r.a.createElement(k.a,null)," Sign In with Facebook")))}var x=function(){return r.a.createElement("div",{style:{fontFamily:"Avenir"}},r.a.createElement(u.a,null,r.a.createElement(d,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/chats",component:O}),r.a.createElement(o.a,{path:"/",component:y})))))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root"))},55:function(e,t,a){e.exports=a(116)},60:function(e,t,a){}},[[55,1,2]]]);
//# sourceMappingURL=main.9e103865.chunk.js.map