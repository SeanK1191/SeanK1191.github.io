(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{36:function(e,t,a){e.exports=a(48)},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),s=a.n(c),o=a(26),i=a(11),u=a(27),l=a(28),p=a(32),f=a(31),m=a(3),h=a.n(m),v=a(21),d="F0503F3BA04E15189192D354ED892AEB",b=function(e,t){var a="";switch(e){case 1:a=void 0!==t.gameid?"Playing ".concat(t.gameextrainfo):"User is Online.";break;case 3:a="User is Away";break;case 0:a="User is Offline";break;default:a="User is nothing"}return a},y=function(e){var t,a,n,r;return h.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t={},c.prev=1,a="".concat("https://young-tor-50055.herokuapp.com/ISteamUser","/GetPlayerSummaries/").concat("v2","?key=").concat(d,"&steamids=").concat(e),c.next=5,h.a.awrap(fetch(a));case 5:return n=c.sent,c.next=8,h.a.awrap(n.json());case 8:r=c.sent,t=r.response.players[0],c.next=15;break;case 12:throw c.prev=12,c.t0=c.catch(1),c.t0;case 15:return t.personastate=b(t.personastate,t),c.abrupt("return",t);case 17:case"end":return c.stop()}}),null,null,[[1,12]])},w=function(e){var t,a,n;return h.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t="".concat("https://young-tor-50055.herokuapp.com/IPlayerService","/GetRecentlyPlayedGames/").concat("v1","?key=").concat(d,"&steamid=").concat(e,"&count=1"),r.next=4,h.a.awrap(fetch(t));case 4:return a=r.sent,r.next=7,h.a.awrap(a.json());case 7:return n=r.sent,r.abrupt("return",n.response.games[0]);case 11:throw r.prev=11,r.t0=r.catch(0),r.t0;case 14:case"end":return r.stop()}}),null,null,[[0,11]])};var g=a(62),E=a(61),k=Object(E.a)(g.a)({color:"#b8b6b4"}),j=function(e){var t=function(e){var t=Object(n.useState)({personastate:""}),a=Object(v.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){!function(){var t;h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.a.awrap(y(e));case 2:t=a.sent,c(t);case 4:case"end":return a.stop()}}))}()}),[e]),Object(n.useEffect)((function(){var t=setInterval((function(){var t;return h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.a.awrap(y(e));case 2:t=a.sent,c((function(e){return t}));case 4:case"end":return a.stop()}}))}),3e4);return function(){clearInterval(t)}})),r}(e.steamDetails.id);return r.a.createElement(k,{variant:"body1",align:"center",gutterBottom:!0},"Steam Status: ",t.personastate)},O=Object(E.a)(g.a)({color:"#b8b6b4"}),x=function(e){var t=function(e){var t=Object(n.useState)({name:""}),a=Object(v.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){!function(){var t;h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.a.awrap(w(e));case 2:t=a.sent,c((function(e){return t}));case 4:case"end":return a.stop()}}))}()}),[e]),Object(n.useEffect)((function(){var t=setInterval((function(){var t;return h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.a.awrap(w(e));case 2:t=a.sent,c((function(e){return t}));case 4:case"end":return a.stop()}}))}),3e4);return function(){clearInterval(t)}})),r}(e.steamDetails.id);return r.a.createElement("div",null,r.a.createElement(O,{variant:"body1",align:"center",gutterBottom:!0},"Last Played: ",t.name),r.a.createElement("img",{src:"http://media.steampowered.com/steamcommunity/public/images/apps/".concat(t.appid,"/").concat(t.img_logo_url,".jpg")}))},D=a(30),S=a(59),I=a(58),B=Object(E.a)(I.a)({background:"#313642",borderRadius:0}),P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).changeTheme=function(){a.setState({checked:!a.state.checked,paletteType:!0===!a.state.checked?"dark":"light"})},a.state={hasError:!1,checked:!1,paletteType:"light"},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log(e)}},{key:"render",value:function(){if(this.state.hasError)return r.a.createElement("div",null,"Error has occurred. ",this.props.error);var e=Object(D.a)({palette:{type:this.state.paletteType}});return r.a.createElement(S.a,{theme:e},r.a.createElement(f.a,null,r.a.createElement(B,null,r.a.createElement(j,{steamDetails:this.props.steamDetails}),r.a.createElement(x,{steamDetails:this.props.steamDetails}))))}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,error:e}}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(47);s.a.render(r.a.createElement(P,{steamDetails:{id:"76561198013038591"}}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.e85bd515.chunk.js.map