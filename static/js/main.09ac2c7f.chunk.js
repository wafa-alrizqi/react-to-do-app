(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(7),r=n.n(c),i=n(1),u=n(2),l=n(4),s=n(3),m=n(5),d=(n(18),n(8)),h=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("ul",null,this.props.items.map(function(t,e){return o.a.createElement(o.a.Fragment,{key:e},o.a.createElement("li",null,t))}))}}]),e}(a.Component),b=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(l.a)(this,Object(s.a)(e).call(this))).TodoItem=function(e){t.setState({item:e.target.value})},t.addTodo=function(){if(""!==t.state.item){var e=[].concat(Object(d.a)(t.state.todoItems),[t.state.item]);t.setState({todoItems:e,item:""})}},t.state={item:"",todoItems:[]},t}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"home"},o.a.createElement("h3",null,"#My-Todo-List "),o.a.createElement("input",{type:"text",placeholder:"Enter Task ..",onChange:this.TodoItem,value:this.state.item}),o.a.createElement("button",{onClick:this.addTodo},"Add"),o.a.createElement(h,{items:this.state.todoItems}))}}]),e}(a.Component),f=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement(b,null)}}]),e}(a.Component),p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then(function(e){var n=e.getCLS,a=e.getFID,o=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),a(t),o(t),c(t),r(t)})};r.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null))),p()},9:function(t,e,n){t.exports=n(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.09ac2c7f.chunk.js.map