(this["webpackJsonpquarantine-quarms"]=this["webpackJsonpquarantine-quarms"]||[]).push([[0],{19:function(e,t,a){e.exports=a(49)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(16),o=a.n(r),c=(a(24),a(25),a(8)),u=(a(26),a(12)),i=a.n(u);i.a.initializeApp({apiKey:"AIzaSyDY0MZ4gcQad0pcCWpLJK36kwWZ6_joFqE",authDomain:"quarantine-quarms.firebaseapp.com",databaseURL:"https://quarantine-quarms.firebaseio.com",projectId:"quarantine-quarms",storageBucket:"quarantine-quarms.appspot.com",messagingSenderId:"157038791595",appId:"1:157038791595:web:f84110effa13f3657860ee",measurementId:"G-N1EMEQHY7E"}),i.a.analytics();var l=i.a,m=function(){var e=s.a.useState({inputString:""}),t=Object(c.a)(e,2),a=t[0],n=t[1];return s.a.createElement("div",{className:"Header"},s.a.createElement("h1",{className:"m-5"},"QUARANTINE QUARMS"),s.a.createElement("h3",{className:"m-4"},"Tell us about your quarantine"),s.a.createElement("textarea",{id:"Header-Input",type:"text",value:a.inputString,onChange:function(e){return n({inputString:e.target.value})},placeholder:"What's the worst part of quarantine? What do you miss about outside? Which one of your family members do you want to kill and why?"}),s.a.createElement("button",{id:"Header-Input-Button",onClick:function(){var e=l.database().ref("posts"),t={votes:0,text:a.inputString};e.push(t),n({inputString:""})}},"POST"))},p=(a(42),a(43),a(17)),d=a(18),f=a(9),E=function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),r=a[0],o=a[1];return s.a.createElement("div",{className:"Post"},s.a.createElement("button",{className:"Post-Icon-Button",onClick:function(){var t=l.database().ref("posts");o(!r),r?t.child(e.postId).update({votes:e.votes-1}):t.child(e.postId).update({votes:e.votes+1})}},s.a.createElement(f.a,{className:r?"Post-Icon-Clicked":"Post-Icon",icon:r?p.a:d.a})),s.a.createElement("p",{className:"Post-Vote-Count"},e.votes),s.a.createElement("p",{className:"Post-Text"},e.text))};var v=function(e){var t=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){l.database().ref("posts").on("value",(function(e){var t=[];e.forEach((function(e){t.push(e)})),s(t)}))}),[]),a}();return t.length<1?s.a.createElement("div",{className:"Post-List-Container"},s.a.createElement("h2",{className:"Post-List-Title"},"Posts"),s.a.createElement("p",null,"No posts to show :(")):s.a.createElement("div",{className:"Post-List-Container"},s.a.createElement("h2",{className:"Post-List-Title"},"Posts"),t.map((function(e){return s.a.createElement(E,Object.assign({key:e.key,postId:e.key},e.val()))})))},h=(a(48),a(11)),b=function(){return s.a.createElement("div",{className:"Footer"},s.a.createElement("p",{className:"Footer-SiteName"},"Quarantine Quarms"),s.a.createElement("a",{href:"https://github.com/danieljones97/quarantine-quarms",target:"_blank"},s.a.createElement(f.a,{icon:h.a})),s.a.createElement("p",{className:"Footer-DevBy"},"Developed by Daniel Jones using ",s.a.createElement(f.a,{icon:h.b}),"React"))},N=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(m,null),s.a.createElement(v,null),s.a.createElement(b,null))};o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(N,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.fdf3bac9.chunk.js.map