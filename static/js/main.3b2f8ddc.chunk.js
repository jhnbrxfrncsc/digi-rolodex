(this["webpackJsonpdigi-rolodex"]=this["webpackJsonpdigi-rolodex"]||[]).push([[0],{24:function(e,n,t){},43:function(e,n,t){},45:function(e,n,t){},46:function(e,n,t){},47:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t.n(c),a=t(16),i=t.n(a),s=t(6),o=t.n(s),l=t(17),u=t(7),d=(t(24),t(18)),j=t.n(d),h=(t(43),t(0)),p=function(e){var n=e.img,t=e.name,c=e.level;return Object(h.jsxs)("div",{className:"card-container",children:[Object(h.jsx)("img",{src:n,alt:"monster"}),Object(h.jsxs)("h2",{children:[" ",t," "]}),Object(h.jsxs)("p",{children:[" ",c," "]})]})},m=(t(45),function(e){var n=e.digimons;return Object(h.jsx)("div",{className:"card-list",children:null===n||void 0===n?void 0:n.map((function(e){var n=e.img,t=e.name,c=e.level;return Object(h.jsx)(p,{img:n,name:t,level:c},t)}))})}),b=(t(46),function(e){var n=e.placeholder,t=e.handleChange;return Object(h.jsx)("input",{className:"search",type:"search",placeholder:n,onChange:t})}),f=function(){var e=Object(c.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(),i=Object(u.a)(a,2),s=i[0],d=i[1],p=function(){var e=Object(l.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://digimon-api.herokuapp.com/api/digimon/level/rookie");case 2:n=e.sent,r(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){p()}),[]);var f=t.filter((function(e){return s?e.name.toLowerCase().includes(s.toLowerCase()):e}));return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Digimon Rolodex"}),Object(h.jsx)(b,{handleChange:function(e){d(e.target.value)},placeholder:"Search..."}),Object(h.jsx)(m,{digimons:f})]})};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.3b2f8ddc.chunk.js.map