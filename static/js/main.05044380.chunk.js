(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{34:function(e,t,n){e.exports=n.p+"static/media/kristy_george.ea8cd5c1.png"},61:function(e,t,n){e.exports=n.p+"static/media/getting_married.5611bf42.png"},63:function(e,t,n){e.exports=n.p+"static/media/family_thanksgiving.ad9ac46e.jpg"},64:function(e,t,n){e.exports=n.p+"static/media/first_dates.8336b502.jpg"},65:function(e,t,n){e.exports=n.p+"static/media/kristy_george_grand_canyon.5fc03c55.jpg"},66:function(e,t,n){e.exports=n.p+"static/media/kristy_george_lake_teton.7afa571f.jpg"},67:function(e,t,n){e.exports=n.p+"static/media/kristy_george_teton.fac05b99.jpg"},68:function(e,t,n){e.exports=n.p+"static/media/military_banquet.060fda32.jpg"},71:function(e,t,n){e.exports=n(93)},92:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(32),c=n.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(15),s=n(22),l=n(101),u=n(100),m=(n(31),"/george-kristy-wedding"),p="/george-kristy-wedding/signup",h="/home",f=r.a.createContext(null),b=n(6),d=n(8),g=n(10),O=n(9),y=n(11),E=n(21),j=n.n(E),v=(n(76),n(40),{apiKey:"AIzaSyC1jRCkgWJHK0oQ7xuSqbEe6hBJ8uOleBw",authDomain:"wedding-registry-c1a40.firebaseapp.com",databaseURL:"https://wedding-registry-c1a40.firebaseio.com",projectId:"wedding-registry-c1a40",storageBucket:"wedding-registry-c1a40.appspot.com",messagingSenderId:"351159456284"}),w=function e(){var t=this;Object(b.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,n){return t.auth.createUserWithEmailAndPassword(e,n)},this.doSignInWithEmailAndPassword=function(e,n){return t.auth.signInWithEmailAndPassword(e,n)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.user=function(e){return t.db.ref("users/".concat(e))},this.users=function(){return t.db.ref("users")},j.a.initializeApp(v),this.auth=j.a.auth(),this.db=j.a.firestore()},P=r.a.createContext(null),C=P,S=function(e){return function(t){return r.a.createElement(P.Consumer,null,(function(n){return r.a.createElement(e,Object.assign({},t,{firebase:n}))}))}},k=w,D=function(e){var t=function(t){function n(e){var t;return Object(b.a)(this,n),(t=Object(g.a)(this,Object(O.a)(n).call(this,e))).state={authUser:null},t}return Object(y.a)(n,t),Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(t){t?e.setState({authUser:t}):e.setState({authUser:null})}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(f.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),n}(r.a.Component);return S(t)},x=n(16),_=function(e){return function(t){var n=function(n){function a(){return Object(b.a)(this,a),Object(g.a)(this,Object(O.a)(a).apply(this,arguments))}return Object(y.a)(a,n),Object(d.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(n){e(n)||t.props.history.push("/signin")}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var n=this;return r.a.createElement(f.Consumer,null,(function(a){return e(a)?r.a.createElement(t,n.props):null}))}}]),a}(r.a.Component);return Object(x.a)(s.e,S)(n)}},A=function(){return r.a.createElement(l.a,{className:"bg-light justify-content-between"},r.a.createElement(l.a.Brand,{href:m},"Kristy & George"),r.a.createElement(l.a.Collapse,null,r.a.createElement(u.a,{className:"ml-auto"},r.a.createElement(u.a.Link,{href:h},"Home"),r.a.createElement(u.a.Link,{href:"/gallery"},"Gallery"),r.a.createElement(u.a.Link,{href:"/account"},"Account"))))},U=function(){return r.a.createElement(l.a,null,r.a.createElement(l.a.Brand,{href:m},"Kristy & George"),r.a.createElement(l.a.Collapse,null,r.a.createElement(u.a,{className:"ml-auto"},r.a.createElement(u.a.Link,{href:"/signin"},"Login"),r.a.createElement(u.a.Link,{href:p},"Sign up"))))},I=function(){return r.a.createElement("div",null,r.a.createElement(f.Consumer,null,(function(e){return e?r.a.createElement(A,null):r.a.createElement(U,null)})))},N=n(95),R=n(96),L=n(62),W=n(97),G=n(34),B=n.n(G),T=n(61),F=n.n(T),M=function(e){function t(){return Object(b.a)(this,t),Object(g.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(N.a,{fluid:!0},r.a.createElement(R.a,null,r.a.createElement(L.a,{xs:4},r.a.createElement(W.a,{src:F.a,rounded:!0,fluid:!0})),r.a.createElement(L.a,{xs:7},r.a.createElement(W.a,{src:B.a,style:{boxShadow:"rgba(0, 0, 0, 0.75) 22px 22px 67px -19px",height:"100%",width:"100%"},rounded:!0,fluid:!0}))))}}]),t}(a.Component),J=n(12);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(n,!0).forEach((function(t){Object(J.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H={username:"",email:"",passwordOne:"",passwordTwo:"",error:null},Y=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(g.a)(this,Object(O.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.username,r=t.email,o=t.passwordOne;n.props.firebase.doCreateUserWithEmailAndPassword(r,o).then((function(e){return n.props.firebase.user(e.user.uid).set({username:a,email:r})})).then((function(e){n.setState(q({},H)),n.props.history.push(h)})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(J.a)({},e.target.name,e.target.value))},n.state=q({},H),n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.email,a=e.passwordOne,o=e.passwordTwo,c=e.error,i=a!==o||""===a||""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Full Name"}),r.a.createElement("input",{name:"email",value:n,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"passwordOne",value:a,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("input",{name:"passwordTwo",value:o,onChange:this.onChange,type:"password",placeholder:"Confirm Password"}),r.a.createElement("button",{disabled:i,type:"submit"},"Sign Up"),c&&r.a.createElement("p",null,c.message))}}]),t}(a.Component),z=function(){return r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(i.b,{to:p},"Sign Up"))},Q=Object(x.a)(s.e,S)(Y),$=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignUp"),r.a.createElement(Q,null))};function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(n,!0).forEach((function(t){Object(J.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z={email:"",error:null},ee=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(g.a)(this,Object(O.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.email;n.props.firebase.doPasswordReset(t).then((function(){n.setState(X({},Z))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(J.a)({},e.target.name,e.target.value))},n.state=X({},Z),n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.error,a=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("button",{disabled:a,type:"submit"},"Reset My Password"),n&&r.a.createElement("p",null,n.message))}}]),t}(a.Component),te=function(){return r.a.createElement("p",null,r.a.createElement(i.b,{to:"/pw-forget"},"Forgot Password?"))},ne=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"PasswordForget"),r.a.createElement(ae,null))},ae=S(ee);function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(n,!0).forEach((function(t){Object(J.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ce={email:"",password:"",error:null},ie=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(g.a)(this,Object(O.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.email,r=t.password;n.props.firebase.doSignInWithEmailAndPassword(a,r).then((function(){n.setState(oe({},ce)),n.props.history.push(h)})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(J.a)({},e.target.name,e.target.value))},n.state=oe({},ce),n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.error,o=""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"password",value:n,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("button",{disabled:o,type:"submit"},"Sign In"),a&&r.a.createElement("p",null,"Error"))}}]),t}(a.Component),se=Object(x.a)(s.e,S)(ie),le=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignIn"),r.a.createElement(se,null),r.a.createElement(te,null),r.a.createElement(z,null))},ue=n(99),me=n(98);n(92);function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var he={name:"",num_party:"",notes:""},fe=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(g.a)(this,Object(O.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.name,r=t.num_party,o=t.attending,c=t.notes,i="Yes"===o;n.db.collection("attendants").doc(a).set({name:a,num_party:r,attending:i,notes:c}).then((function(){console.log("success")})).catch((function(e){console.log("ERROR:"+e)})),e.preventDefault()},n.onChange=function(e){n.setState(Object(J.a)({},e.target.name,e.target.value))},n.state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(n,!0).forEach((function(t){Object(J.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},he),n.db=j.a.firestore(),n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(ue.a,{onSubmit:this.onSubmit},r.a.createElement(ue.a.Group,{as:L.a,controlID:"name"},r.a.createElement(ue.a.Label,null,"Name"),r.a.createElement(ue.a.Control,{name:"name",type:"text",placeholder:"Full Name",onChange:this.onChange})),r.a.createElement(ue.a.Group,{as:L.a,controlID:"num_party"},r.a.createElement(ue.a.Label,null,"Number in Party"),r.a.createElement(ue.a.Control,{name:"num_party",type:"number",placeholder:"0",min:"0",onChange:this.onChange})),r.a.createElement(ue.a.Group,{as:L.a,controlId:"attending"},r.a.createElement(ue.a.Label,null,"Attending"),r.a.createElement(ue.a.Control,{name:"attending",as:"select",placeholder:"Choose one...",onChange:this.onChange},r.a.createElement("option",null,"Choose one..."),r.a.createElement("option",null,"Yes"),r.a.createElement("option",null,"No"))),r.a.createElement(ue.a.Group,{as:L.a,controlId:"notes"},r.a.createElement(ue.a.Label,null,"Notes for Bride and Groom"),r.a.createElement(ue.a.Control,{name:"notes",as:"textarea",rows:"3",onChange:this.onChange})),r.a.createElement("div",{className:"col-12 text-right"},r.a.createElement(me.a,{className:"btn",variant:"primary",type:"submit"},"Submit")))}}]),t}(a.Component),be=Object(x.a)(_((function(e){return!!e})),s.e,S)(fe),de=function(){return r.a.createElement("div",null,r.a.createElement(be,null))};function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(n,!0).forEach((function(t){Object(J.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ye={passwordOne:"",passwordTwo:"",error:null},Ee=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(g.a)(this,Object(O.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.passwordOne;n.props.firebase.doPasswordUpdate(t).then((function(){n.setState(Oe({},ye))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(J.a)({},e.target.name,e.target.value))},n.state=Oe({},ye),n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,n=e.passwordTwo,a=e.error,o=t!==n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"passwordOne",value:t,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",value:n,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{disabled:o,type:"submit"},"Reset My Password"),a&&r.a.createElement("p",null,a.message))}}]),t}(a.Component),je=S(Ee),ve=_((function(e){return!!e}))((function(){return r.a.createElement(f.Consumer,null,(function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Account: ",e.email),r.a.createElement(ae,null),r.a.createElement(je,null))}))})),we=n(69),Pe=n(102),Ce=n(63),Se=n.n(Ce),ke=n(64),De=n.n(ke),xe=n(65),_e=n.n(xe),Ae=n(66),Ue=n.n(Ae),Ie=n(67),Ne=n.n(Ie),Re=n(68),Le=n.n(Re);function We(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var Ge=[{title:"Engagement Photos",img:B.a},{title:"Thanksgiving /W Family",img:Se.a},{title:"First Dates",img:De.a},{title:"Grand Canyon",img:_e.a},{title:"Lake Day!",img:Ue.a},{title:"Grand Teton",img:Ne.a},{title:"Military Banquet",img:Le.a}],Be=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(g.a)(this,Object(O.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.name,r=t.num_party,o=t.attending,c=t.notes,i="Yes"===o;n.db.collection("attendants").doc(a).set({name:a,num_party:r,attending:i,notes:c}).then((function(){console.log("success")})).catch((function(e){console.log("ERROR:"+e)})),e.preventDefault()},n.onChange=function(e){n.setState(Object(J.a)({},e.target.name,e.target.value))},n.state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?We(n,!0).forEach((function(t){Object(J.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):We(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Ge),n.db=j.a.firestore(),n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=[];for(var t in this.state)e.push(r.a.createElement(we.a,null,r.a.createElement(W.a,{src:this.state[t].img,style:{maxHeight:750,boxShadow:"rgba(0, 0, 0, 0.75) 22px 22px 67px -19px"},rounded:!0})));return r.a.createElement(N.a,{style:{display:"flex",justifyContent:"center"}},r.a.createElement(Pe.a,null,e))}}]),t}(a.Component),Te=Object(x.a)(_((function(e){return!!e})),s.e,S)(Be),Fe=function(){return r.a.createElement("div",null,r.a.createElement(Te,null))},Me=D((function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(I,null),r.a.createElement("hr",null),r.a.createElement(s.a,{exact:!0,path:m,component:M}),r.a.createElement(s.a,{path:p,component:$}),r.a.createElement(s.a,{path:"/signin",component:le}),r.a.createElement(s.a,{path:"/pw-forget",component:ne}),r.a.createElement(s.a,{path:h,component:de}),r.a.createElement(s.a,{path:"/account",component:ve}),r.a.createElement(s.a,{path:"/gallery",component:Fe})))}));c.a.render(r.a.createElement(C.Provider,{value:new k},r.a.createElement(Me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[71,1,2]]]);
//# sourceMappingURL=main.05044380.chunk.js.map