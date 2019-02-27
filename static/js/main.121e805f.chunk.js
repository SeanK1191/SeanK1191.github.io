(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r}),n.d(t,"c",function(){return o});var a=function(){return navigator.serviceWorker.ready.then(function(){return new Promise(function(e,t){if(navigator.serviceWorker.controller){var n=new MessageChannel;n.port1.onmessage=function(n){n.data.error?t(n.data.error):e(n.data)},navigator.serviceWorker.controller.postMessage({eventType:"getSelectedPeople"},[n.port2])}else t("Controller not ready")})})},r=function(e){return new Promise(function(t){navigator.serviceWorker.controller.postMessage({eventType:"personSelected",person:e}),t("Message Sent")})},o=function(e){return new Promise(function(t){navigator.serviceWorker.controller.postMessage({eventType:"personUnselected",person:e}),t("Message Sent")})}},,,,,,,,,function(e,t,n){"use strict";(function(e){var a=n(3),r=n(4),o=n(6),c=n(5),i=n(7),l=n(0),s=n.n(l),u=(n(22),n(1)),d=n(11),p=n(12),f=n(13),m=function(t){function n(t){var r;return Object(a.a)(this,n),(r=Object(o.a)(this,Object(c.a)(n).call(this,t))).refreshPeople=function(){!0===(arguments.length>0&&void 0!==arguments[0]&&arguments[0])&&window.location.reload(!1),Object(f.a)().then(function(e){r.setState({people:e})}).catch(function(e){console.log(e),setTimeout(function(){r.refreshPeople(!0)},1e3)})},r.personSelected=function(e){Object(u.b)(e).then(function(t){var n=Object.assign({},r.state).people;n.find(function(t){return t.Id===e.Id}).selected=!0,r.setState({people:n})})},r.personUnselected=function(e){Object(u.c)(e).then(function(t){var n=Object.assign({},r.state).people;n.find(function(t){return t.Id===e.Id}).selected=!1,r.setState({people:n})})},r.sortPeople=function(t){var n=!0!==r.state.sortedDescending;fetch("".concat(e.config.apiUrl,"/people?sortBy=").concat(t,"&sortDescending=").concat(n,"&skip=").concat(r.state.skip,"&take=").concat(r.state.take),{headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){Object(u.a)().then(function(a){r.setState(function(r){return{people:e.map(function(e){return e.selected=a.find(function(t){return t.Id===e.Id}),e}),sortedBy:t,sortedDescending:r.sortedBy===t&&n}})}).catch(function(e){console.log(e)})})},r.pageForward=function(){var t=r.state.skip+10;fetch("".concat(e.config.apiUrl,"/people?sortBy=").concat(r.state.sortedBy,"&sortDescending=").concat(r.state.sortedDescending,"&skip=").concat(t,"&take=").concat(r.state.take),{headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){Object(u.a)().then(function(n){r.setState(function(a){return{people:e.map(function(e){return e.selected=n.find(function(t){return t.Id===e.Id}),e}),skip:t}})})})},r.pageBackward=function(){var t=0===r.state.skip?0:r.state.skip-10;fetch("".concat(e.config.apiUrl,"/people?sortBy=").concat(r.state.sortedBy,"&sortDescending=").concat(r.state.sortedDescending,"&skip=").concat(t,"&take=").concat(r.state.take),{headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){Object(u.a)().then(function(n){r.setState({people:e.map(function(e){return e.selected=n.find(function(t){return t.Id===e.Id}),e}),skip:t})})})},r.deleteUser=function(t){fetch("".concat(e.config.apiUrl,"/people/").concat(t),{method:"DELETE"}).then(function(e){console.log(e),r.refreshPeople()})},r.updateUser=function(t){var n=r.state.people.find(function(e){return e.Id===t});fetch("".concat(e.config.apiUrl,"/people/").concat(t),{method:"PUT",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}})},r.onTableEdited=function(e,t){r.setState(function(n){var a=n.people,r=0,o=a.find(function(t,n){return r=n,t.Id===e.Id}),c=Object.assign({},o,t);return a[r]=c,Object.assign({},n)})},r.state={people:void 0,sortedBy:"name",sortedDescending:!1,skip:0,take:10},r}return Object(i.a)(n,t),Object(r.a)(n,[{key:"componentDidMount",value:function(){this.refreshPeople()}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("div",null,"Tech Test")),s.a.createElement("div",{style:{display:"flex"}},s.a.createElement("div",null,s.a.createElement(d.a,{people:this.state.people,personSelected:this.personSelected,personUnselected:this.personUnselected,sortPeople:this.sortPeople,sortByEmail:this.sortByEmail,sortByName:this.sortByName,sortedBy:this.state.sortedBy,sortedDescending:this.state.sortedDescending,pageForward:this.pageForward,pageBackward:this.pageBackward,deleteUser:this.deleteUser,onTableEdited:this.onTableEdited,updateUser:this.updateUser})),s.a.createElement(p.a,{refreshPeople:this.refreshPeople})))}}]),n}(l.Component);t.a=m}).call(this,n(2))},function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.people,n=e.personSelected,a=e.personUnselected,o=e.sortPeople,c=e.sortedBy,i=e.sortedDescending,l=e.pageForward,s=e.pageBackward,u=e.deleteUser,d=e.onTableEdited,p=e.updateUser,f=!0===i?r.a.createElement("span",null,"\u2193"):r.a.createElement("span",null,"\u2191"),m="name"===c?r.a.createElement("span",null,"Name ",f):r.a.createElement("span",null,"Name"),h="email"===c?r.a.createElement("span",null,"Email ",f):r.a.createElement("span",null,"Email");return r.a.createElement("div",{style:{width:1400}},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{cursor:"pointer"},onClick:function(){o("name")}},m),r.a.createElement("th",null,"Age"),r.a.createElement("th",null,"Balance"),r.a.createElement("th",{style:{cursor:"pointer"},onClick:function(){o("email")}},h),r.a.createElement("th",null,"Address")),void 0===t?null:t.map(function(e){return r.a.createElement("tr",{key:e.Email},r.a.createElement("td",null,r.a.createElement("input",{onChange:function(t){return d(e,{Name:t.target.value})},type:"text",defaultValue:e.Name})),r.a.createElement("td",null,r.a.createElement("input",{onChange:function(t){return d(e,{Age:t.target.value})},type:"number",defaultValue:e.Age})),r.a.createElement("td",null,r.a.createElement("input",{onChange:function(t){return d(e,{Balance:t.target.value})},type:"number",defaultValue:e.Balance})),r.a.createElement("td",null,r.a.createElement("input",{onChange:function(t){return d(e,{Email:t.target.value})},type:"text",defaultValue:e.Email})),r.a.createElement("td",null,r.a.createElement("input",{onChange:function(t){return d(e,{Address:t.target.value})},type:"text",defaultValue:e.Address})),r.a.createElement("td",null,e.selected?r.a.createElement("span",{style:{cursor:"pointer"},onClick:function(){a(e)},role:"img","aria-label":"Minus sign"},"\u2796"):r.a.createElement("span",{style:{cursor:"pointer"},onClick:function(){n(e)},role:"img","aria-label":"Plus sign"},"\u2795")),r.a.createElement("td",{style:{cursor:"pointer"},onClick:function(){return p(e.Id)}},"Update User"),r.a.createElement("td",{style:{cursor:"pointer"},onClick:function(){return u(e.Id)}},"Delete User"))}))),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},r.a.createElement("div",{style:{cursor:"pointer"},onClick:s},"\u2190 Page Backward"),r.a.createElement("div",{style:{cursor:"pointer"},onClick:l},"Page Forward \u2192")))}},function(e,t,n){"use strict";(function(e){var a=n(3),r=n(4),o=n(6),c=n(5),i=n(7),l=n(0),s=n.n(l),u=function(t){function n(t){var r;return Object(a.a)(this,n),(r=Object(o.a)(this,Object(c.a)(n).call(this,t))).createPerson=function(){fetch("".concat(e.config.apiUrl,"/people"),{method:"POST",body:JSON.stringify(r.state),headers:{"Content-Type":"application/json"}}).then(function(e){console.log(e),r.refreshPeople()})},r.handleInput=function(e){r.setState(function(t){return Object.assign({},t,e)})},r.state={Name:"",Email:"",Address:"",Balance:0,Age:0},r.refreshPeople=t.refreshPeople,r}return Object(i.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){var e=this,t={display:"flex",justifyContent:"space-between",marginTop:5};return s.a.createElement("div",{style:{marginTop:50}},s.a.createElement("span",null,"User Creation Form"),s.a.createElement("div",null,s.a.createElement("label",{style:t},"Name:",s.a.createElement("input",{onChange:function(t){return e.handleInput({Name:t.target.value})},style:{marginLeft:5},type:"text",name:"name"})),s.a.createElement("label",{style:t},"Email:",s.a.createElement("input",{onChange:function(t){return e.handleInput({Email:t.target.value})},style:{marginLeft:5},type:"text",name:"email"})),s.a.createElement("label",{style:t},"Address:",s.a.createElement("input",{onChange:function(t){return e.handleInput({Address:t.target.value})},style:{marginLeft:5},type:"text",name:"address"})),s.a.createElement("label",{style:t},"Balance:",s.a.createElement("input",{onChange:function(t){return e.handleInput({Balance:t.target.value})},style:{marginLeft:5},type:"number",name:"balance"})),s.a.createElement("label",{style:t},"Age:",s.a.createElement("input",{onChange:function(t){return e.handleInput({Age:t.target.value})},style:t,type:"number",name:"age"})),s.a.createElement("input",{type:"submit",name:"name",onClick:this.createPerson})))}}]),n}(l.Component);t.a=u}).call(this,n(2))},function(e,t,n){"use strict";var a=n(1);t.a=function(){return navigator.serviceWorker.ready.then(function(){return fetch("https://tech-test.azurewebsites.net/people",{headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return Object(a.a)().then(function(t){return e.map(function(e){return e.selected=t.find(function(t){return t.Id===e.Id}),e})})})})}},function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function r(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker-custom.js");a?(!function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):o(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):o(t,e)})}}function o(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}},function(e,t,n){e.exports=n(16)},function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),a=n.n(t),r=n(9),o=n.n(r),c=(n(21),n(10)),i=n(14);e.config={},fetch("config.json").then(function(e){return e.json()}).then(function(t){e.config=t,o.a.render(a.a.createElement(c.a,null),document.getElementById("root"))}).catch(function(e){console.log(e)}),i.a()}.call(this,n(2))},,,,,function(e,t,n){},function(e,t,n){}],[[15,1,2]]]);
//# sourceMappingURL=main.121e805f.chunk.js.map