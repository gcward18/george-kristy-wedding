(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{35:function(e,t,n){e.exports=n.p+"static/media/kristy_george.ea8cd5c1.png"},61:function(e,t,n){e.exports=n.p+"static/media/getting_married.5611bf42.png"},63:function(e,t,n){e.exports=n.p+"static/media/family_thanksgiving.ad9ac46e.jpg"},64:function(e,t,n){e.exports=n.p+"static/media/first_dates.8336b502.jpg"},65:function(e,t,n){e.exports=n.p+"static/media/kristy_george_grand_canyon.5fc03c55.jpg"},66:function(e,t,n){e.exports=n.p+"static/media/kristy_george_lake_teton.7afa571f.jpg"},67:function(e,t,n){e.exports=n.p+"static/media/kristy_george_teton.fac05b99.jpg"},68:function(e,t,n){e.exports=n.p+"static/media/military_banquet.060fda32.jpg"},71:function(e,t,n){e.exports=n(96)},95:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(33),c=n.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(15),s=n(22),l=n(104),u=n(103),m=(n(31),"/george-kristy-wedding/"),p="".concat(m,"#/"),h="".concat(m,"#/signup"),f="".concat(m,"#/signin"),b="".concat(m,"#/signout"),d="".concat(m,"#/home"),g="".concat(m,"#/account"),O=("".concat(m,"#/admin"),"".concat(m,"#/pw-forget")),y="".concat(m,"#/gallery"),E=r.a.createContext(null),j=n(6),v=n(8),w=n(10),P=n(9),C=n(11),S=n(18),k=n.n(S),D=(n(76),n(42),n(80),{apiKey:"AIzaSyC1jRCkgWJHK0oQ7xuSqbEe6hBJ8uOleBw",authDomain:"wedding-registry-c1a40.firebaseapp.com",databaseURL:"https://wedding-registry-c1a40.firebaseio.com",projectId:"wedding-registry-c1a40",storageBucket:"wedding-registry-c1a40.appspot.com",messagingSenderId:"351159456284"}),x=function e(){var t=this;Object(j.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,n){return t.auth.createUserWithEmailAndPassword(e,n)},this.doSignInWithEmailAndPassword=function(e,n){return t.auth.signInWithEmailAndPassword(e,n)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.user=function(e){return t.database.ref("users/".concat(e))},this.users=function(){return t.database.ref("users")},k.a.initializeApp(D),this.auth=k.a.auth(),this.database=k.a.database(),this.db=k.a.firestore()},_=r.a.createContext(null),A=_,U=function(e){return function(t){return r.a.createElement(_.Consumer,null,(function(n){return r.a.createElement(e,Object.assign({},t,{firebase:n}))}))}},I=x,N=function(e){var t=function(t){function n(e){var t;return Object(j.a)(this,n),(t=Object(w.a)(this,Object(P.a)(n).call(this,e))).state={authUser:null},t}return Object(C.a)(n,t),Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(t){t?e.setState({authUser:t}):e.setState({authUser:null})}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(E.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),n}(r.a.Component);return U(t)},L=n(16),R=function(e){return function(t){var n=function(n){function a(){return Object(j.a)(this,a),Object(w.a)(this,Object(P.a)(a).apply(this,arguments))}return Object(C.a)(a,n),Object(v.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(n){e(n)||t.props.history.push(f)}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var n=this;return r.a.createElement(E.Consumer,null,(function(a){return e(a)?r.a.createElement(t,n.props):null}))}}]),a}(r.a.Component);return Object(L.a)(s.e,U)(n)}},G=function(){return r.a.createElement(l.a,{className:"bg-light justify-content-between"},r.a.createElement(l.a.Brand,{href:p},"Kristy & George"),r.a.createElement(l.a.Collapse,null,r.a.createElement(u.a,{className:"ml-auto"},r.a.createElement(u.a.Link,{href:d},"Home"),r.a.createElement(u.a.Link,{href:y},"Gallery"),r.a.createElement(u.a.Link,{href:g},"Account"),r.a.createElement(u.a.Link,{href:b},"Sign out"))))},W=function(){return r.a.createElement(l.a,null,r.a.createElement(l.a.Brand,{href:p},"Kristy & George"),r.a.createElement(l.a.Collapse,null,r.a.createElement(u.a,{className:"ml-auto"},r.a.createElement(u.a.Link,{href:f},"Login"),r.a.createElement(u.a.Link,{href:h},"Sign up"))))},B=function(){return r.a.createElement("div",null,r.a.createElement(E.Consumer,null,(function(e){return e?r.a.createElement(G,null):r.a.createElement(W,null)})))},T=n(98),F=n(99),M=n(62),J=n(100),K=n(35),q=n.n(K),H=n(61),Y=n.n(H),z=function(e){function t(){return Object(j.a)(this,t),Object(w.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement(T.a,{fluid:!0},r.a.createElement(F.a,null,r.a.createElement(M.a,{xs:4},r.a.createElement(J.a,{src:Y.a,rounded:!0,fluid:!0})),r.a.createElement(M.a,{xs:7},r.a.createElement(J.a,{src:q.a,style:{boxShadow:"rgba(0, 0, 0, 0.75) 22px 22px 67px -19px",height:"100%",width:"100%"},rounded:!0,fluid:!0}))))}}]),t}(a.Component),Q=n(12);function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(n,!0).forEach((function(t){Object(Q.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X={username:"",email:"",passwordOne:"",passwordTwo:"",error:null},Z=function(e){function t(e){var n;return Object(j.a)(this,t),(n=Object(w.a)(this,Object(P.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.username,r=t.email,o=t.passwordOne;n.props.firebase.doCreateUserWithEmailAndPassword(r,o).then((function(e){return n.props.firebase.user(e.user.uid).set({username:a,email:r})})).then((function(e){n.setState(V({},X)),n.props.history.push(d)})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(Q.a)({},e.target.name,e.target.value))},n.state=V({},X),n}return Object(C.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.email,a=e.passwordOne,o=e.passwordTwo,c=e.error,i=a!==o||""===a||""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Full Name"}),r.a.createElement("input",{name:"email",value:n,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"passwordOne",value:a,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("input",{name:"passwordTwo",value:o,onChange:this.onChange,type:"password",placeholder:"Confirm Password"}),r.a.createElement("button",{disabled:i,type:"submit"},"Sign Up"),c&&r.a.createElement("p",null,"GO TO SIGN IN"))}}]),t}(a.Component),ee=function(){return r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(i.b,{to:h},"Sign Up"))},te=Object(L.a)(s.e,U)(Z),ne=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignUp"),r.a.createElement(te,null))};function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(n,!0).forEach((function(t){Object(Q.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var oe={email:"",error:null},ce=function(e){function t(e){var n;return Object(j.a)(this,t),(n=Object(w.a)(this,Object(P.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.email;n.props.firebase.doPasswordReset(t).then((function(){n.setState(re({},oe))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(Q.a)({},e.target.name,e.target.value))},n.state=re({},oe),n}return Object(C.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.error,a=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("button",{disabled:a,type:"submit"},"Reset My Password"),n&&r.a.createElement("p",null,n.message))}}]),t}(a.Component),ie=function(){return r.a.createElement("p",null,r.a.createElement(i.b,{to:O},"Forgot Password?"))},se=U(ce);function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(n,!0).forEach((function(t){Object(Q.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var me={email:"",password:"",error:null},pe=function(e){function t(e){var n;return Object(j.a)(this,t),(n=Object(w.a)(this,Object(P.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.email,r=t.password;n.props.firebase.doSignInWithEmailAndPassword(a,r).then((function(){n.setState(ue({},me)),n.props.history.push(d)})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(Q.a)({},e.target.name,e.target.value))},n.state=ue({},me),n}return Object(C.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.error,o=""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"password",value:n,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("button",{disabled:o,type:"submit"},"Sign In"),a&&r.a.createElement("p",null,"Error"))}}]),t}(a.Component),he=Object(L.a)(s.e,U)(pe),fe=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignIn"),r.a.createElement(he,null),r.a.createElement(ie,null),r.a.createElement(ee,null))},be=U((function(e){var t=e.firebase;return r.a.createElement("button",{type:"button",onClick:t.doSignOut},"Sign Out")})),de=n(102),ge=n(101);n(95);function Oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var ye={name:"",num_party:"",notes:""},Ee=function(e){function t(e){var n;return Object(j.a)(this,t),(n=Object(w.a)(this,Object(P.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.name,r=t.num_party,o=t.attending,c=t.notes,i="Yes"===o;n.db.collection("attendants").doc(a).set({name:a,num_party:r,attending:i,notes:c}).then((function(){console.log("success")})).catch((function(e){console.log("ERROR:"+e)})),e.preventDefault()},n.onChange=function(e){n.setState(Object(Q.a)({},e.target.name,e.target.value))},n.state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Oe(n,!0).forEach((function(t){Object(Q.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},ye),n.db=k.a.firestore(),n}return Object(C.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement(de.a,{onSubmit:this.onSubmit},r.a.createElement(de.a.Group,{as:M.a,controlID:"name"},r.a.createElement(de.a.Label,null,"Name"),r.a.createElement(de.a.Control,{name:"name",type:"text",placeholder:"Full Name",onChange:this.onChange})),r.a.createElement(de.a.Group,{as:M.a,controlID:"num_party"},r.a.createElement(de.a.Label,null,"Number in Party"),r.a.createElement(de.a.Control,{name:"num_party",type:"number",placeholder:"0",min:"0",onChange:this.onChange})),r.a.createElement(de.a.Group,{as:M.a,controlId:"attending"},r.a.createElement(de.a.Label,null,"Attending"),r.a.createElement(de.a.Control,{name:"attending",as:"select",placeholder:"Choose one...",onChange:this.onChange},r.a.createElement("option",null,"Choose one..."),r.a.createElement("option",null,"Yes"),r.a.createElement("option",null,"No"))),r.a.createElement(de.a.Group,{as:M.a,controlId:"notes"},r.a.createElement(de.a.Label,null,"Notes for Bride and Groom"),r.a.createElement(de.a.Control,{name:"notes",as:"textarea",rows:"3",onChange:this.onChange})),r.a.createElement("div",{className:"col-12 text-right"},r.a.createElement(ge.a,{className:"btn",variant:"primary",type:"submit"},"Submit")))}}]),t}(a.Component),je=Object(L.a)(R((function(e){return!!e})),s.e,U)(Ee),ve=function(){return r.a.createElement("div",null,r.a.createElement(je,null))};function we(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?we(n,!0).forEach((function(t){Object(Q.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):we(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ce={passwordOne:"",passwordTwo:"",error:null},Se=function(e){function t(e){var n;return Object(j.a)(this,t),(n=Object(w.a)(this,Object(P.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.passwordOne;n.props.firebase.doPasswordUpdate(t).then((function(){n.setState(Pe({},Ce))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(Q.a)({},e.target.name,e.target.value))},n.state=Pe({},Ce),n}return Object(C.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,n=e.passwordTwo,a=e.error,o=t!==n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"passwordOne",value:t,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",value:n,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{disabled:o,type:"submit"},"Reset My Password"),a&&r.a.createElement("p",null,a.message))}}]),t}(a.Component),ke=U(Se),De=R((function(e){return!!e}))((function(){return r.a.createElement(E.Consumer,null,(function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Account: ",e.email),r.a.createElement(se,null),r.a.createElement(ke,null))}))})),xe=n(69),_e=n(105),Ae=n(63),Ue=n.n(Ae),Ie=n(64),Ne=n.n(Ie),Le=n(65),Re=n.n(Le),Ge=n(66),We=n.n(Ge),Be=n(67),Te=n.n(Be),Fe=n(68),Me=n.n(Fe);function Je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var Ke=[{title:"Engagement Photos",img:q.a},{title:"Thanksgiving /W Family",img:Ue.a},{title:"First Dates",img:Ne.a},{title:"Grand Canyon",img:Re.a},{title:"Lake Day!",img:We.a},{title:"Grand Teton",img:Te.a},{title:"Military Banquet",img:Me.a}],qe=function(e){function t(e){var n;return Object(j.a)(this,t),(n=Object(w.a)(this,Object(P.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.name,r=t.num_party,o=t.attending,c=t.notes,i="Yes"===o;n.db.collection("attendants").doc(a).set({name:a,num_party:r,attending:i,notes:c}).then((function(){console.log("success")})).catch((function(e){console.log("ERROR:"+e)})),e.preventDefault()},n.onChange=function(e){n.setState(Object(Q.a)({},e.target.name,e.target.value))},n.state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Je(n,!0).forEach((function(t){Object(Q.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Je(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Ke),n.db=k.a.firestore(),n}return Object(C.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=[];for(var t in this.state)e.push(r.a.createElement(xe.a,null,r.a.createElement(J.a,{src:this.state[t].img,style:{maxHeight:750,boxShadow:"rgba(0, 0, 0, 0.75) 22px 22px 67px -19px"},rounded:!0})));return r.a.createElement(T.a,{style:{display:"flex",justifyContent:"center"}},r.a.createElement(_e.a,null,e))}}]),t}(a.Component),He=Object(L.a)(R((function(e){return!!e})),s.e,U)(qe),Ye=function(){return r.a.createElement("div",null,r.a.createElement(He,null))},ze=N((function(){return r.a.createElement(i.a,{basename:"/george-kristy-wedding"},r.a.createElement("div",null,r.a.createElement(B,null),r.a.createElement("hr",null),r.a.createElement(s.a,{exact:!0,path:"/",component:z}),r.a.createElement(s.a,{path:"/signup",component:ne}),r.a.createElement(s.a,{path:"/signin",component:fe}),r.a.createElement(s.a,{path:"/signout",component:be}),r.a.createElement(s.a,{path:"/home",component:ve}),r.a.createElement(s.a,{path:"/account",component:De}),r.a.createElement(s.a,{path:"/gallery",component:Ye})))}));c.a.render(r.a.createElement(A.Provider,{value:new I},r.a.createElement(ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[71,1,2]]]);
//# sourceMappingURL=main.447bcf6a.chunk.js.map