(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{253:function(e,t,c){},255:function(e,t,c){"use strict";c.r(t);var n=c(72),i=c(132),a=c(152),s=c(150),r=c(6),o=c(0),d=c.n(o),l=c(23),j=c.n(l),u=c(262),h=c(52),b=c(35),f=c(53),O=c(61),p=c(149),x=c(260),m=c(258),k=c(264),v=c(261),g=c(133),N=c.n(g),C=c(63),T=c(134),y=c.n(T),D=function(e){var t=e.item,c=e.onCheck,n=e.onRemove,i=e.toggleEdit,a=e.onEdit,s=d.a.createRef(),o=function(e){e.preventDefault(),i&&i(t.id)},l=function(){c&&c(t.id)},j={};return t.checked&&(j={textDecoration:"line-through",textAlign:"left"}),t.edited?Object(r.jsxs)("li",{className:"todo-item",style:{backgroundColor:t.checked?"#B0E0E6":"#fff"},children:[Object(r.jsx)(k.a,{className:"checkBox",checked:t.checked,onChange:l}),Object(r.jsx)("div",{className:"inline-editor",children:Object(r.jsx)(v.a,{placeholder:"New name",defaultValue:t.content,ref:s})}),Object(r.jsxs)("div",{className:"controls",children:[Object(r.jsx)(p.a,{onClick:function(e){e.preventDefault(),a&&a(t.id,s.current.state.value)},children:Object(r.jsx)(C.a,{})}),Object(r.jsx)(p.a,{danger:!0,onClick:o,children:Object(r.jsx)(C.b,{})})]})]},t.id):Object(r.jsxs)("li",{className:"todo-item",style:{backgroundColor:t.checked?"#B0E0E6":"#fff"},children:[Object(r.jsx)(k.a,{className:"checkBox",checked:t.checked,onChange:l}),Object(r.jsx)(N.a,{trigger:t.content,triggerStyle:j,children:Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{className:"lineHeader",children:"Description:"})," ",t.description]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{className:"lineHeader",children:"Created At:"})," ",Object(r.jsx)(y.a,{className:"created",value:new Date(t.created),format:"DD.MM.YYYY \u2013 hh:mm"})]})]})}),Object(r.jsxs)("div",{className:"controls",children:[Object(r.jsx)(p.a,{onClick:o,children:Object(r.jsx)(C.c,{})}),Object(r.jsx)(p.a,{danger:!0,onClick:function(e){e.preventDefault(),n&&n(t.id)},children:Object(r.jsx)(C.d,{})})]})]},t.id)},E=c(259),w=c(83);var I=function(e){var t=Object(w.useToasts)().addToast,c=e.onSubmit,n=E.a.useForm(),i=Object(O.a)(n,1)[0];return Object(r.jsxs)(E.a,{className:"todo-form",form:i,layout:"inline",onFinish:function(e){if(c&&e.title){var n=String(e.title),a=String(e.description);n.length>3?(s=a[0],isNaN(1*s)&&(s===s.toUpperCase()||(s.toLowerCase(),0))?c(e.title,e.description):t("Description should has first capital letter",{appearance:"error"})):t("Title should has Length > 3",{appearance:"error"})}var s;i.resetFields()},children:[Object(r.jsx)(E.a.Item,{name:"title",className:"todo-form-input",children:Object(r.jsx)(v.a,{placeholder:"New task"})}),Object(r.jsx)(E.a.Item,{name:"description",className:"todo-form-input",children:Object(r.jsx)(v.a,{placeholder:"Description"})}),Object(r.jsx)(E.a.Item,{className:"todo-form-actions",children:Object(r.jsx)(p.a,{htmlType:"submit",type:"primary",children:"Add"})})]})},S=c(146),B=c(263),A=function e(){var t=this;Object(n.a)(this,e),this.init=function(){var e={Authorization:"Bearer ".concat(t.apiToken),"Content-Type":"application/json","X-Request-Id":Object(B.a)()};return t.client=S.create({baseURL:t.apiUrl,headers:e}),t.client},this.getTasksList=function(){return t.init().get("/")},this.closeTask=function(e){return t.init().post("/".concat(e,"/close"))},this.updateTasks=function(e,c){var n={content:c};return t.init().post("/".concat(e),n)},this.apiToken="b3c567db62e0a4b868b7af263cb8115200673206",this.apiUrl="https://api.todoist.com/rest/v1/tasks"},L=function(e){var t=Object(o.useState)(e.list),c=Object(O.a)(t,2),n=c[0],i=c[1],a=Object(o.useState)(10),s=Object(O.a)(a,2),d=s[0],l=s[1],j=new A;Object(o.useEffect)((function(){i(e.list)}),[e.list]);var u=function(e){var t=n.findIndex((function(t){return t.id===e}));j.closeTask(n[t].id),-1!==t&&(n.splice(t,1),i(Object(f.a)(n)))},h=function(){n.filter((function(e){return e.checked})).forEach((function(e){j.closeTask(e.id)})),i(n.filter((function(e){return!e.checked})))},b=function(e){var t=n.findIndex((function(t){return t.id===e}));if(-1!==t){var c=n[t];c.checked=!c.checked,n.splice(t,1,c),i(Object(f.a)(n))}},k=function(e){var t=n.findIndex((function(t){return t.id===e}));if(-1!==t){var c=n[t];c.edited=!c.edited,i(Object(f.a)(n))}},v=function(e,t){var c=n.findIndex((function(t){return t.id===e}));if(-1!==c){var a=n[c];a.edited=!a.edited,a.content=t,j.updateTasks(a.id,a.content),i(Object(f.a)(n))}};return Object(r.jsxs)(x.a,{title:"My todos",className:"todo-card",children:[Object(r.jsx)(I,{onSubmit:function(e,t){var c={id:d,title:e,description:t,checked:!1};i([].concat(Object(f.a)(n),[c])),l(d+1)}}),Object(r.jsx)(m.a,{}),function(e){return Object(r.jsxs)("ul",{className:"todo-list",children:[Object(r.jsxs)("div",{className:"control-row",children:["Amount of unchecked tasks: ",e.filter((function(e){return!1===e.checked})).length,Object(r.jsx)(p.a,{onClick:h,type:"primary",children:"Delete selected"})]}),e.map((function(e){return Object(r.jsx)(D,{item:e,description:e.description,onRemove:u,onCheck:b,onEdit:v,toggleEdit:k},e.id)}))]})}(n)]})},R=(c(253),c(254),u.a.Header),F=u.a.Footer,U=u.a.Content,Y=function(e){Object(a.a)(c,e);var t=Object(s.a)(c);function c(e){var i;Object(n.a)(this,c),i=t.call(this,e);var a=new A;return i.state={list:[]},a.getTasksList().then((function(e){var t=e.data.map((function(e){return e.checked=!1,e.edited=!1,e}));i.setState({list:t})})),i}return Object(i.a)(c,[{key:"render",value:function(){return Object(r.jsxs)(u.a,{children:[Object(r.jsx)(R,{}),Object(r.jsx)(U,{children:Object(r.jsx)(w.ToastProvider,{children:Object(r.jsx)(h.a,{children:Object(r.jsx)(b.a,{span:12,offset:6,className:"todo",children:Object(r.jsx)(L,{list:this.state.list})})})})}),Object(r.jsx)(F,{})]})}}]),c}(d.a.Component);j.a.render(Object(r.jsx)(Y,{}),document.getElementById("root"))}},[[255,1,2]]]);
//# sourceMappingURL=main.755cef96.chunk.js.map