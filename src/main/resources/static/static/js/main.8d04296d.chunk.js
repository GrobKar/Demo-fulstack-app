(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{121:function(e,t,n){},122:function(e,t,n){},198:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(25),i=n.n(a),j=(n(121),n(83)),l=n(103),r=function(e){if(e.ok)return e;var t=new Error(e.statusText);return t.response=e,Promise.reject(t)},o=n(202),d=n(34),b=n(107),u=n(37),O=n(203),x=n(204),m=n(63),h=n(205),g=n(206),f=n(207),p=n(208),y=n(209),I=(n(122),n(15)),S=o.a.Header,k=o.a.Content,v=o.a.Footer,T=o.a.Sider,F=d.a.SubMenu,B=[{title:"Id",dataIndex:"id",key:"id"},{title:"Name",dataIndex:"name",key:"name"},{title:"Email",dataIndex:"email",key:"email"},{title:"Gender",dataIndex:"gender",key:"gender"}],C=Object(I.jsx)(m.a,{style:{fontSize:24},spin:!0});var N=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!1),i=Object(j.a)(a,2),m=i[0],N=i[1],w=Object(c.useState)(!0),E=Object(j.a)(w,2),H=E[0],P=E[1],z=function(){return Object(l.a)("api/v1/students").then(r).then((function(e){return e.json()})).then((function(e){console.log(e),s(e),P(!1)}))};return Object(c.useEffect)((function(){console.log("component is mounted"),z()}),[]),Object(I.jsxs)(o.a,{style:{minHeight:"100vh"},children:[Object(I.jsxs)(T,{collapsible:!0,collapsed:m,onCollapse:N,children:[Object(I.jsx)("div",{className:"logo"}),Object(I.jsxs)(d.a,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline",children:[Object(I.jsx)(d.a.Item,{icon:Object(I.jsx)(h.a,{}),children:"Option 1"},"1"),Object(I.jsx)(d.a.Item,{icon:Object(I.jsx)(g.a,{}),children:"Option 2"},"2"),Object(I.jsxs)(F,{icon:Object(I.jsx)(f.a,{}),title:"User",children:[Object(I.jsx)(d.a.Item,{children:"Tom"},"3"),Object(I.jsx)(d.a.Item,{children:"Bill"},"4"),Object(I.jsx)(d.a.Item,{children:"Alex"},"5")]},"sub1"),Object(I.jsxs)(F,{icon:Object(I.jsx)(p.a,{}),title:"Team",children:[Object(I.jsx)(d.a.Item,{children:"Team 1"},"6"),Object(I.jsx)(d.a.Item,{children:"Team 2"},"8")]},"sub2"),Object(I.jsx)(d.a.Item,{icon:Object(I.jsx)(y.a,{}),children:"Files"},"9")]})]}),Object(I.jsxs)(o.a,{className:"site-layout",children:[Object(I.jsx)(S,{className:"site-layout-background",style:{padding:0}}),Object(I.jsxs)(k,{style:{margin:"0 16px"},children:[Object(I.jsxs)(x.a,{style:{margin:"16px 0"},children:[Object(I.jsx)(x.a.Item,{children:"User"}),Object(I.jsx)(x.a.Item,{children:"Bill"})]}),Object(I.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:360},children:H?Object(I.jsx)(b.a,{indicator:C}):n.length<=0?Object(I.jsx)(u.a,{}):Object(I.jsx)(O.a,{dataSource:n,columns:B,bordered:!0,title:function(){return"Students"},pagination:{pageSize:50},scroll:{y:240},rowKey:function(e){return e.id}})})]}),Object(I.jsx)(v,{style:{textAlign:"center"},children:"By amigoscode"})]})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,210)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(I.jsx)(s.a.StrictMode,{children:Object(I.jsx)(N,{})}),document.getElementById("root")),w()}},[[198,1,2]]]);
//# sourceMappingURL=main.8d04296d.chunk.js.map