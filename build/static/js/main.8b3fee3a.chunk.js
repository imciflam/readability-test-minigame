(window["webpackJsonpreadability-test-minigame"]=window["webpackJsonpreadability-test-minigame"]||[]).push([[0],{23:function(e,t,n){e.exports=n(35)},28:function(e,t,n){},29:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(8),c=n.n(l),o=(n(28),n(29),n(13)),s=n(56),i=n(52),u=Object(i.a)((function(e){return{button:{margin:e.spacing(1)},input:{display:"none"}}})),m=function(e){var t=u();return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Welcome to the game!"),r.a.createElement("p",null,"You will see two sets of number sequences written in different ways."),r.a.createElement("p",null,"Your task is to recognise each number and give an answer ASAP."),r.a.createElement("p",null,"Use your \ud83e\udc10 \ud83e\udc12 buttons for it."),r.a.createElement("p",null,"Are you ready? Then click play!"),r.a.createElement(s.a,{variant:"contained",className:t.button,onClick:function(){e.setScreen("ContrastTemplate")}},"Play"))},p=n(36),d=n(53),w=n(54),f=n(55),g=(n(34),[{task:"\ud83d\udc9b\ud83d\udc9b\ud83d\udc9b",leftAnswer:"4",rightAnswer:"3",color:"light",type:"pictogram"},{task:"\u0447\u0435\u0442\u044b\u0440\u0435",leftAnswer:"4",rightAnswer:"6",color:"dark",type:"letters"},{task:"\ud83d\udda4\ud83d\udda4\ud83d\udda4\ud83d\udda4\ud83d\udda4\ud83d\udda4\ud83d\udda4",leftAnswer:"8",rightAnswer:"7",color:"dark",type:"pictogram"},{task:"\u043e\u0434\u0438\u043d",leftAnswer:"1",rightAnswer:"2",color:"light",type:"letters"},{task:"\u2661\u2661\u2661\u2661\u2661",leftAnswer:"4",rightAnswer:"5",color:"light",type:"pictogram"},{task:"\u0432\u043e\u0441\u0435\u043c\u044c",leftAnswer:"9",rightAnswer:"8",color:"dark",type:"letters"},{task:"\ud83d\udda4\ud83d\udda4\ud83d\udda4\ud83d\udda4\ud83d\udda4\ud83d\udda4\ud83d\udda4\ud83d\udda4\ud83d\udda4",leftAnswer:"8",rightAnswer:"9",color:"dark",type:"pictogram"},{task:"\u043f\u044f\u0442\u044c",leftAnswer:"6",rightAnswer:"5",color:"light",type:"letters"},{task:"\ud83d\udc9b\ud83d\udc9b\ud83d\udc9b\ud83d\udc9b\ud83d\udc9b\ud83d\udc9b",leftAnswer:"5",rightAnswer:"6",color:"light",type:"pictogram"},{task:"\u0434\u0432\u0430",leftAnswer:"2",rightAnswer:"1",color:"dark",type:"letters"}]),h=Object(i.a)((function(e){return{root:{padding:e.spacing(3,2),margin:e.spacing(2,2),card:{minWidth:300},title:{fontSize:14},pos:{marginBottom:12}}}})),y=[],E=function(e){var t=h(),n=Object(a.useState)(0),l=Object(o.a)(n,2),c=l[0],s=l[1];return Object(a.useEffect)((function(){var e=(new Date).getTime();y.push(e)}),[]),function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(a.useEffect)((function(){return window.addEventListener(e,t,n),function(){window.removeEventListener(e,t)}}))}("keydown",(function(t){if(37===t.keyCode||39===t.keyCode){var n=(new Date).getTime();y.push(n),e.setResultArray(y),c<9?s(c+1):(e.setResultArray(y),e.setScreen("WavingGoodbye"))}})),r.a.createElement("div",{class:"contrastContainer"},r.a.createElement(p.a,{className:t.root},r.a.createElement(d.a,{variant:"h5",component:"h3"},"What does this expression mean?"),r.a.createElement("br",null),r.a.createElement(d.a,{component:"p"},g[c].task)),r.a.createElement("div",{className:"container"},r.a.createElement(w.a,{className:t.card},r.a.createElement(f.a,null,r.a.createElement(d.a,{variant:"h3",component:"h2"},g[c].leftAnswer))),r.a.createElement(w.a,{className:t.card},r.a.createElement(f.a,null,r.a.createElement(d.a,{variant:"h3",component:"h2"},g[c].rightAnswer)))))},A=function(e){for(var t=[],n=0;n<e.resultArray.length-1;n++)t.push(e.resultArray[n+1]-e.resultArray[n]);console.log(t);var a=t.map((function(e){return r.a.createElement("li",{key:t.indexOf(e)+1},r.a.createElement("p",null,"\u0412\u0440\u0435\u043c\u044f \u043e\u0442\u0432\u0435\u0442\u0430 \u043d\u0430 \u0432\u043e\u043f\u0440\u043e\u0441 ",t.indexOf(e)+1,": ",e," \u043c\u0441"))}));return r.a.createElement("ul",null,a)},v=function(){var e=Object(a.useState)("WelcomeScreen"),t=Object(o.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)([]),s=Object(o.a)(c,2),i=s[0],u=s[1];return r.a.createElement("div",{style:{position:"absolute",top:"30%",left:"10%",width:"80%"}},function(e,t,n,a){switch(e){case"WelcomeScreen":return r.a.createElement(m,{displayedScreen:e,setScreen:t});case"ContrastTemplate":return r.a.createElement(E,{displayedScreen:e,setScreen:t,setResultArray:n});case"WavingGoodbye":return r.a.createElement(A,{displayedScreen:e,setScreen:t,resultArray:a});default:return r.a.createElement(A,{displayedScreen:e,setScreen:t})}}(n,l,u,i))};var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.8b3fee3a.chunk.js.map