(this["webpackJsonpcatfriends2020-review"]=this["webpackJsonpcatfriends2020-review"]||[]).push([[0],{17:function(e,n,t){e.exports=t(29)},27:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(2),c=t.n(o),i=t(3),s=t(1),l=t(11),u=t(12),d=(t(9),t(27),t(13)),h=t(14),p=t(16),f=t(15),E=function(e){var n=e.name,t=e.email,a=e.position;return r.a.createElement("div",{className:"tc bg-washed-blue dib br3 pa3 ma2 grow bw2 shadow-hover "},r.a.createElement("img",{class:"br-100 dib ba bg-white b--dashed pa2",alt:"cat-caricatures",src:"https://robohash.org/set_set4/".concat(n,"/?size=200x200")}),r.a.createElement("div",{className:"courier"},r.a.createElement("h2",{class:"f6"},n),r.a.createElement("p",{class:"f7"},t),r.a.createElement("p",null,a)))},g=function(e){var n=e.people,t=n.map((function(e,t){return r.a.createElement(E,{name:n[t].name,email:n[t].email,position:n[t].position})}));return r.a.createElement("div",{className:"tc"},t)},m=function(e){var n=e.searchChange;return r.a.createElement("div",{className:"tc pb4"},r.a.createElement("input",{className:"pa3 ba b--washed-blue bg-washed-blue shadow-1",type:"search",placeholder:"Search cat people",onChange:n}))},v=function(e){return r.a.createElement("div",{className:"mw9-ns",style:{overflow:"scroll",height:"50rem",margin:"0 auto"}},e.children," ")},b=function(e){Object(p.a)(t,e);var n=Object(f.a)(t);function t(){return Object(d.a)(this,t),n.apply(this,arguments)}return Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestPeople()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,a=e.people,o=e.isPending,c=a.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return o?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",null,r.a.createElement("h1",{className:"f1"},"C A T F R I E N D S"),r.a.createElement(m,{searchChange:t}),r.a.createElement(v,null,r.a.createElement(g,{people:c})))}}]),t}(a.Component);onmousemove=function(e){var n,t=e.clientX/document.body.clientWidth*82,a=e.clientY/document.body.clientHeight*82;console.log(t,a),n="rgb(".concat(t,", ").concat(a,", 82)"),document.documentElement.style.setProperty("--background",n)};var w=Object(i.b)((function(e){return{searchField:e.searchPeople.searchField,people:e.requestPeople.people,isPending:e.requestPeople.isPending,error:e.requestPeople.error}}),(function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})},onRequestPeople:function(){return e((function(e){e({type:"REQUEST_PEOPLE_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:"REQUEST_PEOPLE_SUCCESS",payload:n})})).catch((function(n){return e({type:"REQUEST_PEOPLE_FAILED",payload:n})}))}))}}}))(b),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var S={searchField:""},C={isPending:!1,people:[],error:""},O=(t(28),Object(l.createLogger)()),_=Object(s.c)({searchPeople:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return{searchField:n.payload};default:return e}},requestPeople:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_PEOPLE_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_PEOPLE_SUCCESS":return Object.assign({},e,{people:n.payload,isPending:!1});case"REQUEST_PEOPLE_FAILED":return Object.assign({},e,{error:n.payload,isPending:!1});default:return e}}}),j=Object(s.d)(_,Object(s.a)(u.a,O));c.a.render(r.a.createElement(i.a,{store:j},r.a.createElement(w,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/catfriends2020-review",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/catfriends2020-review","/service-worker.js");P?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):y(n,e)}))}}()},9:function(e,n,t){}},[[17,1,2]]]);
//# sourceMappingURL=main.a90d5054.chunk.js.map