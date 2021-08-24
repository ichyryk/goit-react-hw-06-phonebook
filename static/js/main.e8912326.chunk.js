(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{16:function(e,t,n){e.exports={container:"Container_container__3RIox"}},30:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(9),o=n.n(a),i=n(16),b=n.n(i),s=n(1),u=function(e){var t=e.children;return Object(s.jsx)("div",{className:b.a.container,children:t})},j=n(6),l=n(14),d=n(20),O=n(3),m=n(4),h=n(36),f=Object(m.b)("contacts/Add",(function(e,t){return{payload:{id:Object(h.a)(),name:e,number:t}}})),p=Object(m.b)("contacts/Delete"),x=Object(m.b)("contacts/changeFilter"),v=n(8),g=n.n(v),C={name:"",number:""},y=function(){var e=Object(c.useState)(C),t=Object(d.a)(e,2),n=t[0],r=t[1],a=n.name,o=n.number,i=Object(O.b)(),b=function(e){var t=e.currentTarget,c=t.name,a=t.value;r(Object(l.a)(Object(l.a)({},n),{},Object(j.a)({},c,a)))};return Object(s.jsxs)("form",{className:g.a.form,onSubmit:function(e){e.preventDefault(),i(f(a,o)),r(C)},children:[Object(s.jsxs)("label",{children:["Name",Object(s.jsx)("input",{type:"text",name:"name",value:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,placeholder:"Enter your name",onChange:b})]}),Object(s.jsxs)("label",{children:["Number",Object(s.jsx)("input",{type:"tel",name:"number",value:o,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,placeholder:"Enter your number",onChange:b})]}),Object(s.jsx)("button",{type:"submit",children:"Add contact"})]})},A=function(e){return e.contacts.filter},k=function(e){var t=function(e){return e.contacts.items}(e),n=A(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))},z=function(e){var t=e.id,n=e.name,c=e.number,r=e.onDeleteContact;return Object(s.jsxs)("li",{children:[Object(s.jsxs)("p",{children:[n,":"]}),Object(s.jsx)("p",{children:c}),Object(s.jsx)("button",{type:"button",onClick:function(){return r(t)},children:"Delete"})]})},w=function(){var e=Object(O.c)(k),t=Object(O.b)(),n=function(e){return t(p(e))};return Object(s.jsx)("ul",{children:e.map((function(e){var t=e.id,c=e.name,r=e.number;return Object(s.jsx)(z,{id:t,name:c,number:r,onDeleteContact:n},t)}))})},N=function(){var e=Object(O.c)(A),t=Object(O.b)();return Object(s.jsxs)("label",{className:g.a.label,children:["Find contacts by name",Object(s.jsx)("input",{className:g.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:e,onChange:function(e){return t(x(e.target.value))},required:!0})]})};var Z,_=function(){return Object(s.jsxs)(u,{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(y,{}),Object(s.jsx)("h2",{children:"Contacts"}),Object(s.jsx)(N,{}),Object(s.jsx)(w,{})]})},D=n(17),J=(n(30),n(11)),M=n(18),q=n.n(M),B=n(5),E=n(19),F=n.n(E),S=n(2),T=Object(m.c)([],(Z={},Object(j.a)(Z,f,(function(e,t){var n=t.payload;return[].concat(Object(J.a)(e),[n])})),Object(j.a)(Z,p,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),Z)),I=Object(m.c)("",Object(j.a)({},x,(function(e,t){return t.payload}))),L=Object(S.b)({items:T,filter:I}),$=[].concat(Object(J.a)(Object(m.d)({serializableCheck:{ignoredActions:[B.a,B.f,B.b,B.c,B.d,B.e]}})),[q.a]),P={key:"contacts",storage:F.a,blacklist:["filter"]},R=Object(m.a)({reducer:{contacts:Object(B.g)(P,L)},devTools:!1,middleware:$}),G={store:R,persistor:Object(B.h)(R)};o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(O.a,{store:G.store,children:Object(s.jsx)(D.a,{loading:null,persistor:G.persistor,children:Object(s.jsx)(_,{})})})}),document.getElementById("root"))},8:function(e,t,n){e.exports={form:"Form_form__2TM1N"}}},[[34,1,2]]]);
//# sourceMappingURL=main.e8912326.chunk.js.map