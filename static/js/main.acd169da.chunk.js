(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{28:function(e,t,n){e.exports=n.p+"static/media/kristy_george.ea8cd5c1.png"},39:function(e,t,n){e.exports=n.p+"static/media/family_thanksgiving.ad9ac46e.jpg"},40:function(e,t,n){e.exports=n.p+"static/media/first_dates.8336b502.jpg"},41:function(e,t,n){e.exports=n.p+"static/media/kristy_george_grand_canyon.5fc03c55.jpg"},42:function(e,t,n){e.exports=n.p+"static/media/kristy_george_lake_teton.7afa571f.jpg"},43:function(e,t,n){e.exports=n.p+"static/media/kristy_george_teton.fac05b99.jpg"},44:function(e,t,n){e.exports=n.p+"static/media/military_banquet.060fda32.jpg"},69:function(e,t,n){e.exports=n.p+"static/media/getting_married.5611bf42.png"},73:function(e,t,n){e.exports=n(98)},97:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(36),c=n.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(19),s=n(23),l=n(107),u=n(105),m=(n(29),"/george-kristy-wedding/"),p="".concat(m,"#/landing"),f=("".concat(m,"#/signup"),"".concat(m,"#/signin")),h=("".concat(m,"#/signout"),"".concat(m,"#/details")),d="".concat(m,"#/home"),b=("".concat(m,"#/account"),"".concat(m,"#/admin"),"".concat(m,"#/pw-forget"),"".concat(m,"#/gallery")),g=r.a.createContext(null),O=n(7),y=n(9),E=n(11),j=n(10),v=n(12),w=n(17),P=n.n(w),C=(n(78),n(35),n(82),{apiKey:"AIzaSyC1jRCkgWJHK0oQ7xuSqbEe6hBJ8uOleBw",authDomain:"wedding-registry-c1a40.firebaseapp.com",databaseURL:"https://wedding-registry-c1a40.firebaseio.com",projectId:"wedding-registry-c1a40",storageBucket:"wedding-registry-c1a40.appspot.com",messagingSenderId:"351159456284"}),S=function e(){var t=this;Object(O.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,n){return t.auth.createUserWithEmailAndPassword(e,n)},this.doSignInWithEmailAndPassword=function(e,n){return t.auth.signInWithEmailAndPassword(e,n)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.user=function(e){return t.database.ref("users/".concat(e))},this.users=function(){return t.database.ref("users")},P.a.initializeApp(C),this.auth=P.a.auth(),this.database=P.a.database(),this.db=P.a.firestore()},D=r.a.createContext(null),k=D,x=function(e){return function(t){return r.a.createElement(D.Consumer,null,(function(n){return r.a.createElement(e,Object.assign({},t,{firebase:n}))}))}},_=S,R=function(e){var t=function(t){function n(e){var t;return Object(O.a)(this,n),(t=Object(E.a)(this,Object(j.a)(n).call(this,e))).state={authUser:null},t}return Object(v.a)(n,t),Object(y.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(t){t?e.setState({authUser:t}):e.setState({authUser:null})}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(g.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),n}(r.a.Component);return x(t)},A=n(20),B=function(e){return function(t){var n=function(n){function a(){return Object(O.a)(this,a),Object(E.a)(this,Object(j.a)(a).apply(this,arguments))}return Object(v.a)(a,n),Object(y.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(n){e(n)||t.props.history.push(f)}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var n=this;return r.a.createElement(g.Consumer,null,(function(a){return e(a)?r.a.createElement(t,n.props):null}))}}]),a}(r.a.Component);return Object(A.a)(s.e,x)(n)}},L=function(){return r.a.createElement(l.a,{className:"bg-light justify-content-between"},r.a.createElement(l.a.Brand,{href:p},"Kristy & George"),r.a.createElement(l.a.Collapse,null,r.a.createElement(u.a,{className:"ml-auto"},r.a.createElement(u.a.Link,{href:d},"RSVP"),r.a.createElement(u.a.Link,{href:h},"DETAILS"),r.a.createElement(u.a.Link,{href:b},"GALLERY"))))},U=function(){return r.a.createElement("div",null,r.a.createElement(L,null))},N=n(100),T=n(101),W=n(70),G=n(102),I=n(28),K=n.n(I),M=n(69),F=n.n(M),Y=function(e){function t(){return Object(O.a)(this,t),Object(E.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement(N.a,{fluid:!0},r.a.createElement(T.a,null,r.a.createElement(W.a,{xs:4},r.a.createElement(G.a,{src:F.a,rounded:!0,fluid:!0})),r.a.createElement(W.a,{xs:7},r.a.createElement(G.a,{src:K.a,style:{boxShadow:"rgba(0, 0, 0, 0.75) 22px 22px 67px -19px",height:"100%",width:"100%"},fluid:!0}))))}}]),t}(a.Component),q=n(13),J=n(104),H=n(103);n(97);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var Q={name:"",num_party:"",notes:"",success:""},V=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(E.a)(this,Object(j.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.name,r=t.num_party,o=t.attending,c=t.notes,i="Yes"===o;n.db.collection("attendants").doc(a).set({name:a,num_party:r,attending:i,notes:c}).then((function(){n.setState({success:"Submitted Successfully"}),console.log("success")})).catch((function(e){console.log("ERROR:"+e),n.setState({success:"Failed to Submit"})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(q.a)({},e.target.name,e.target.value))},n.state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(n,!0).forEach((function(t){Object(q.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Q),n.db=P.a.firestore(),n}return Object(v.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.state.success;return r.a.createElement(J.a,{onSubmit:this.onSubmit},r.a.createElement(J.a.Group,{as:W.a,controlID:"name"},r.a.createElement(J.a.Label,null,"Name"),r.a.createElement(J.a.Control,{name:"name",type:"text",placeholder:"Full Name",onChange:this.onChange})),r.a.createElement(J.a.Group,{as:W.a,controlID:"num_party"},r.a.createElement(J.a.Label,null,"Number in Party"),r.a.createElement(J.a.Control,{name:"num_party",type:"number",placeholder:"0",min:"0",onChange:this.onChange})),r.a.createElement(J.a.Group,{as:W.a,controlId:"attending"},r.a.createElement(J.a.Label,null,"Attending"),r.a.createElement(J.a.Control,{name:"attending",as:"select",placeholder:"Choose one...",onChange:this.onChange},r.a.createElement("option",null,"Choose one..."),r.a.createElement("option",null,"Yes"),r.a.createElement("option",null,"No"))),r.a.createElement(J.a.Group,{as:W.a,controlId:"notes"},r.a.createElement(J.a.Label,null,"Notes for Bride and Groom"),r.a.createElement(J.a.Control,{name:"notes",as:"textarea",rows:"3",onChange:this.onChange})),r.a.createElement("div",{className:"col-12 text-right"},r.a.createElement(H.a,{className:"btn",variant:"primary",type:"submit"},"Submit")),e&&window.alert(e))}}]),t}(a.Component),$=Object(A.a)(B((function(e){return!!e})),s.e,x)(V),X=function(){return r.a.createElement("div",null,r.a.createElement($,null))};function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(n,!0).forEach((function(t){Object(q.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var te={email:"",error:null},ne=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(E.a)(this,Object(j.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.email;n.props.firebase.doPasswordReset(t).then((function(){n.setState(ee({},te))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(q.a)({},e.target.name,e.target.value))},n.state=ee({},te),n}return Object(v.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.error,a=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("button",{disabled:a,type:"submit"},"Reset My Password"),n&&r.a.createElement("p",null,n.message))}}]),t}(a.Component),ae=x(ne);function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(n,!0).forEach((function(t){Object(q.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ce={passwordOne:"",passwordTwo:"",error:null},ie=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(E.a)(this,Object(j.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.passwordOne;n.props.firebase.doPasswordUpdate(t).then((function(){n.setState(oe({},ce))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(q.a)({},e.target.name,e.target.value))},n.state=oe({},ce),n}return Object(v.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,n=e.passwordTwo,a=e.error,o=t!==n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"passwordOne",value:t,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",value:n,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{disabled:o,type:"submit"},"Reset My Password"),a&&r.a.createElement("p",null,a.message))}}]),t}(a.Component),se=x(ie),le=B((function(e){return!!e}))((function(){return r.a.createElement(g.Consumer,null,(function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Account: ",e.email),r.a.createElement(ae,null),r.a.createElement(se,null))}))})),ue=n(71),me=n(109),pe=n(39),fe=n.n(pe),he=n(40),de=n.n(he),be=n(41),ge=n.n(be),Oe=n(42),ye=n.n(Oe),Ee=n(43),je=n.n(Ee),ve=n(44),we=n.n(ve);function Pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var Ce=[{title:"Engagement Photos",img:K.a},{title:"Thanksgiving /W Family",img:fe.a},{title:"First Dates",img:de.a},{title:"Grand Canyon",img:ge.a},{title:"Lake Day!",img:ye.a},{title:"Grand Teton",img:je.a},{title:"Military Banquet",img:we.a}],Se=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(E.a)(this,Object(j.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.name,r=t.num_party,o=t.attending,c=t.notes,i="Yes"===o;n.db.collection("attendants").doc(a).set({name:a,num_party:r,attending:i,notes:c}).then((function(){console.log("success")})).catch((function(e){console.log("ERROR:"+e)})),e.preventDefault()},n.onChange=function(e){n.setState(Object(q.a)({},e.target.name,e.target.value))},n.state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Pe(n,!0).forEach((function(t){Object(q.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Ce),n.db=P.a.firestore(),n}return Object(v.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=[];for(var t in this.state)e.push(r.a.createElement(ue.a,null,r.a.createElement(G.a,{src:this.state[t].img,style:{flex:1,alignSelf:"stretch",width:void 0,height:void 0},rounded:!0})));return r.a.createElement(N.a,{style:{display:"flex",justifyContent:"center"}},r.a.createElement(me.a,null,e))}}]),t}(a.Component),De=Object(A.a)(B((function(e){return!!e})),s.e,x)(Se),ke=function(){return r.a.createElement("div",null,r.a.createElement(De,null))},xe=n(106),_e=n(108);function Re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var Ae=[{title:"Engagement Photos",img:K.a},{title:"Thanksgiving /W Family",img:fe.a},{title:"First Dates",img:de.a},{title:"Grand Canyon",img:ge.a},{title:"Lake Day!",img:ye.a},{title:"Grand Teton",img:je.a},{title:"Military Banquet",img:we.a}],Be=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(E.a)(this,Object(j.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.name,r=t.num_party,o=t.attending,c=t.notes,i="Yes"===o;n.db.collection("attendants").doc(a).set({name:a,num_party:r,attending:i,notes:c}).then((function(){console.log("success")})).catch((function(e){console.log("ERROR:"+e)})),e.preventDefault()},n.onChange=function(e){n.setState(Object(q.a)({},e.target.name,e.target.value))},n.state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Re(n,!0).forEach((function(t){Object(q.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Re(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Ae),n.db=P.a.firestore(),n}return Object(v.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=[];for(var t in this.state)e.push(r.a.createElement(ue.a,null,r.a.createElement(G.a,{src:this.state[t].img,style:{flex:1,alignSelf:"stretch",width:void 0,height:void 0},rounded:!0})));return r.a.createElement(xe.a,{defaultActiveKey:"0"},r.a.createElement(_e.a,null,r.a.createElement(_e.a.Header,null,r.a.createElement(xe.a.Toggle,{as:H.a,variant:"text",eventKey:"0"},"Date")),r.a.createElement(xe.a.Collapse,{eventKey:"0"},r.a.createElement(_e.a.Body,null,"15 December 2019"))),r.a.createElement(_e.a,null,r.a.createElement(_e.a.Header,null,r.a.createElement(xe.a.Toggle,{as:H.a,variant:"text",eventKey:"1"},"Location")),r.a.createElement(xe.a.Collapse,{eventKey:"1"},r.a.createElement(_e.a.Body,null,"BREAD + BUTTER",r.a.createElement("br",null),"2586 N Westwood Blvd,",r.a.createElement("br",null),"Poplar Bluff, MO 63901"))))}}]),t}(a.Component),Le=Object(A.a)(B((function(e){return!!e})),s.e,x)(Be),Ue=function(){return r.a.createElement("div",null,r.a.createElement(Le,null))},Ne=R((function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(U,null),r.a.createElement("hr",null),r.a.createElement(s.a,{path:"/landing",component:Y}),r.a.createElement(s.a,{path:"/details",component:Ue}),r.a.createElement(s.a,{path:"/home",component:X}),r.a.createElement(s.a,{path:"/account",component:le}),r.a.createElement(s.a,{path:"/gallery",component:ke}),r.a.createElement(s.a,{path:"//",component:Y})))}));c.a.render(r.a.createElement(k.Provider,{value:new _},r.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[73,1,2]]]);
//# sourceMappingURL=main.acd169da.chunk.js.map