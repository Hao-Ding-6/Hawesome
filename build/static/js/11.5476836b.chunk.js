(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{733:function(e,t,r){"use strict";var n=r(1),o=r.n(n),a=r(4),c=r.n(a),i=r(38),l=r.n(i),s=r(205),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var p=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},d=function(e){function t(){var r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),c=0;c<o;c++)a[c]=arguments[c];return r=n=f(this,e.call.apply(e,[this].concat(a))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!p(e)){e.preventDefault();var t=n.context.router.history,r=n.props,o=r.replace,a=r.to;o?t.replace(a):t.push(a)}},f(n,r)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),r=e.innerRef,n=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["replace","to","innerRef"]);l()(this.context.router,"You should not use <Link> outside a <Router>"),l()(void 0!==t,'You must specify the "to" property');var a=this.context.router.history,c="string"===typeof t?Object(s.b)(t,null,null,a.location):t,i=a.createHref(c);return o.a.createElement("a",u({},n,{onClick:this.handleClick,href:i,ref:r}))},t}(o.a.Component);d.propTypes={onClick:c.a.func,target:c.a.string,replace:c.a.bool,to:c.a.oneOfType([c.a.string,c.a.object]).isRequired,innerRef:c.a.oneOfType([c.a.string,c.a.func])},d.defaultProps={replace:!1},d.contextTypes={router:c.a.shape({history:c.a.shape({push:c.a.func.isRequired,replace:c.a.func.isRequired,createHref:c.a.func.isRequired}).isRequired}).isRequired},t.a=d},908:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),a=r(126),c=r(73),i=r(219),l=r(110),s=r(733),u=function(e){var t=e.user;return o.a.createElement(l.b,{as:s.a,to:"/profile/".concat(t.id)},o.a.createElement(l.m,{src:t.photoURL||"/assets/user.png"}),o.a.createElement(l.b.Content,{textAlign:"center"},o.a.createElement(l.b.Header,{content:t.displayName})),o.a.createElement(l.b.Meta,{textAlign:"center"},o.a.createElement("span",null,t.city)))};t.default=Object(c.compose)(Object(a.connect)(function(e){return{followings:e.firestore.ordered.following,followers:e.firestore.ordered.followers,auth:e.firebase.auth}}),Object(i.firestoreConnect)(function(e){return function(e){var t=e.auth;return[{collection:"users",doc:t.uid,subcollections:[{collection:"following"}],storeAs:"following"},{collection:"users",doc:t.uid,subcollections:[{collection:"followers"}],storeAs:"followers"}]}(e)}))(function(e){var t=e.followings,r=e.followers;return o.a.createElement(l.j,null,o.a.createElement(l.j.Column,{width:16},o.a.createElement(l.t,null,o.a.createElement(l.k,{dividing:!0,content:"People following me"}),o.a.createElement(l.b.Group,{itemsPerRow:8,stackable:!0},r&&r.map(function(e){return o.a.createElement(u,{key:e.id,user:e})}))),o.a.createElement(l.t,null,o.a.createElement(l.k,{dividing:!0,content:"People I'm following"}),o.a.createElement(l.b.Group,{itemsPerRow:8,stackable:!0},t&&t.map(function(e){return o.a.createElement(u,{key:e.id,user:e})})))))})}}]);
//# sourceMappingURL=11.5476836b.chunk.js.map