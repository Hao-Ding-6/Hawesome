(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{726:function(e,t,a){"use strict";var n=a(1),r=a.n(n),o=a(110);t.a=function(e){var t=e.input,a=e.width,n=e.type,l=e.placeholder,c=e.meta,s=c.touched,i=c.error;return r.a.createElement(o.i.Field,{error:s&&!!i,width:a},r.a.createElement("input",Object.assign({},t,{placeholder:l,width:a,type:n})),s&&i&&r.a.createElement(o.o,{basic:!0,color:"red"},i))}},751:function(e,t,a){"use strict";a.d(t,"a",function(){return p}),a.d(t,"b",function(){return d}),a.d(t,"c",function(){return m}),a.d(t,"d",function(){return f});var n=a(44),r=a(720),o=a.n(r),l=a(721),c=a(747),s=a(716),i=a(285),u=a(127),p=function(e){return function(){var t=Object(l.a)(o.a.mark(function t(a,n,r){var l,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=r.getFirebase,s=l(),t.prev=2,t.next=5,s.auth().signInWithEmailAndPassword(e.email,e.password);case 5:a(Object(i.a)()),t.next=12;break;case 8:throw t.prev=8,t.t0=t.catch(2),console.log(t.t0),new c.a({_error:t.t0.message});case 12:case"end":return t.stop()}},t,this,[[2,8]])}));return function(e,a,n){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(l.a)(o.a.mark(function t(a,r,l){var s,u,p,d,m,f;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=l.getFirebase,u=l.getFirestore,p=s(),d=u(),t.prev=3,t.next=6,p.auth().createUserWithEmailAndPassword(e.email,e.password);case 6:return t.next=8,p.auth().currentUser;case 8:return m=t.sent,t.next=11,m.updateProfile({displayName:e.displayName});case 11:return f={displayName:e.displayName,createdAt:d.FieldValue.serverTimestamp()},t.next=14,d.set("users/".concat(m.uid),Object(n.a)({},f));case 14:a(Object(i.a)()),t.next=21;break;case 17:throw t.prev=17,t.t0=t.catch(3),console.log(t.t0),new c.a({_error:t.t0.message});case 21:case"end":return t.stop()}},t,this,[[3,17]])}));return function(e,a,n){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(l.a)(o.a.mark(function t(a,n,r){var l,c,s,u,p;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=r.getFirebase,c=r.getFirestore,s=l(),u=c(),t.prev=3,a(Object(i.a)()),t.next=7,s.login({provider:e,type:"popup"});case 7:if(!(p=t.sent).additionalUserInfo.isNewUser){t.next=11;break}return t.next=11,u.set("users/".concat(p.user.uid),{displayName:p.profile.displayName,photoURL:p.profile.avatarUrl,createdAt:u.FieldValue.serverTimestamp()});case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),console.log(t.t0);case 16:case"end":return t.stop()}},t,this,[[3,13]])}));return function(e,a,n){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(l.a)(o.a.mark(function t(a,n,r){var l,i,p;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=r.getFirebase,i=l(),p=i.auth().currentUser,t.prev=3,t.next=6,p.updatePassword(e.newPassword1);case 6:return t.next=8,a(Object(s.a)("account"));case 8:u.toastr.success("Success","Your password has been updated"),t.next=14;break;case 11:throw t.prev=11,t.t0=t.catch(3),new c.a({_error:t.t0.message});case 14:case"end":return t.stop()}},t,this,[[3,11]])}));return function(e,a,n){return t.apply(this,arguments)}}()}},898:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(126),l=a(110),c=a(285),s={closeModal:c.a};var i=Object(o.connect)(null,s)(function(e){var t=e.closeModal;return r.a.createElement(l.s,{closeIcon:"close",open:!0,onClose:t},r.a.createElement(l.s.Header,null,"Test Modal"),r.a.createElement(l.s.Content,null,r.a.createElement(l.s.Description,null,r.a.createElement("p",null,"Test Modal... nothing to see here"))))}),u=a(123),p=a(124),d=a(229),m=a(125),f=a(230),h=a(207),b=a(206),E=a(726),g=a(751);var v=function(e){var t=e.socialLogin;return r.a.createElement("div",null,r.a.createElement(l.a,{onClick:function(){return t("facebook")},type:"button",style:{marginBottom:"10px"},fluid:!0,color:"facebook"},r.a.createElement(l.l,{name:"facebook"})," Login with Facebook"),r.a.createElement(l.a,{onClick:function(){return t("google")},type:"button",fluid:!0,color:"google plus"},r.a.createElement(l.l,{name:"google plus"}),"Login with Google"))},w={login:g.a,socialLogin:g.c},O=Object(o.connect)(null,w)(Object(b.a)({form:"loginForm"})(function(e){var t=e.login,a=e.handleSubmit,n=e.error,o=e.socialLogin;return r.a.createElement(l.i,{size:"large",onSubmit:a(t)},r.a.createElement(l.t,null,r.a.createElement(h.a,{name:"email",component:E.a,type:"text",placeholder:"Email Address"}),r.a.createElement(h.a,{name:"password",component:E.a,type:"password",placeholder:"password"}),n&&r.a.createElement(l.o,{basic:!0,color:"red"},n),r.a.createElement(l.a,{fluid:!0,size:"large",color:"teal"},"Login"),r.a.createElement(l.f,{horizontal:!0},"Or"),r.a.createElement(v,{socialLogin:o})))})),j={closeModal:c.a},y=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(l.s,{size:"mini",open:!0,onClose:this.props.closeModal},r.a.createElement(l.s.Header,null,"Login to H-awesome"),r.a.createElement(l.s.Content,null,r.a.createElement(l.s.Description,null,r.a.createElement(O,null))))}}]),t}(n.Component),k=Object(o.connect)(null,j)(y),M=a(749),x={registerUser:g.b},C=Object(M.combineValidators)({displayName:Object(M.isRequired)("displayName"),email:Object(M.isRequired)("email"),password:Object(M.isRequired)("password")}),F=Object(o.connect)(null,x)(Object(b.a)({form:"registerForm",validate:C})(function(e){var t=e.handleSubmit,a=e.registerUser,n=e.error,o=e.invalid,c=e.submitting;return r.a.createElement("div",null,r.a.createElement(l.i,{size:"large",onSubmit:t(a)},r.a.createElement(l.t,null,r.a.createElement(h.a,{name:"displayName",type:"text",component:E.a,placeholder:"Known As"}),r.a.createElement(h.a,{name:"email",type:"text",component:E.a,placeholder:"Email"}),r.a.createElement(h.a,{name:"password",type:"password",component:E.a,placeholder:"Password"}),n&&r.a.createElement(l.o,{basic:!0,color:"red"},n),r.a.createElement(l.a,{disabled:o||c,fluid:!0,size:"large",color:"teal"},"Register"),r.a.createElement(l.f,{horizontal:!0},"Or"),r.a.createElement(v,null))))})),L={closeModal:c.a},U=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(l.s,{size:"mini",open:!0,onClose:this.props.closeModal},r.a.createElement(l.s.Header,null,"Sign Up to H-awesome!"),r.a.createElement(l.s.Content,null,r.a.createElement(l.s.Description,null,r.a.createElement(F,null))))}}]),t}(n.Component),N=Object(o.connect)(null,L)(U),z=a(907),A={closeModal:c.a,openModal:c.b},P=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleCloseModal=function(){a.props.location.pathname.includes("/event")?a.props.closeModal():(a.props.history.goBack(),a.props.closeModal())},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.openModal;return r.a.createElement(l.s,{size:"mini",open:!0,onClose:this.handleCloseModal},r.a.createElement(l.s.Header,null,"You need to be signed in to do that!"),r.a.createElement(l.s.Content,null,r.a.createElement(l.s.Description,null,r.a.createElement("p",null,"Please either login or register to see this page"),r.a.createElement(l.a.Group,{widths:4},r.a.createElement(l.a,{fluid:!0,color:"teal",onClick:function(){return e("LoginModal")}},"Login"),r.a.createElement(l.a.Or,null),r.a.createElement(l.a,{fluid:!0,positive:!0,onClick:function(){return e("RegisterModal")}},"Register")),r.a.createElement(l.f,null),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("p",null,"Or click cancel to continue as a guest"),r.a.createElement(l.a,{onClick:this.handleCloseModal},"Cancel")))))}}]),t}(n.Component),R={TestModal:i,LoginModal:k,RegisterModal:N,UnauthModal:Object(z.a)(Object(o.connect)(null,A)(P))};t.default=Object(o.connect)(function(e){return{currentModal:e.modals}})(function(e){var t,a=e.currentModal;if(a){var n=a.modalType,o=a.modalProps,l=R[n];t=r.a.createElement(l,o)}return r.a.createElement("span",null,t)})}}]);
//# sourceMappingURL=13.a33ce096.chunk.js.map