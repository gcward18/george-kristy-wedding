(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{34:function(e,t,n){e.exports=n.p+"static/media/kristy_george.ea8cd5c1.png"},61:function(e,t,n){e.exports=n.p+"static/media/getting_married.5611bf42.png"},63:function(e,t,n){e.exports=n.p+"static/media/family_thanksgiving.ad9ac46e.jpg"},64:function(e,t,n){e.exports=n.p+"static/media/first_dates.8336b502.jpg"},65:function(e,t,n){e.exports=n.p+"static/media/kristy_george_grand_canyon.5fc03c55.jpg"},66:function(e,t,n){e.exports=n.p+"static/media/kristy_george_lake_teton.7afa571f.jpg"},67:function(e,t,n){e.exports=n.p+"static/media/kristy_george_teton.fac05b99.jpg"},68:function(e,t,n){e.exports=n.p+"static/media/military_banquet.060fda32.jpg"},71:function(e,t,n){e.exports=n(93)},92:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(32),c=n.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(15),s=n(22),l=n(101),u=n(100),m=(n(31),"george-kristy-wedding"),p=m+"/signup",h=m+"/signin",f=m+"/home",b=m+"/account",d=m+"/gallery",g=r.a.createContext(null),O=n(6),y=n(8),E=n(10),j=n(9),v=n(11),w=n(21),P=n.n(w),C=(n(76),n(40),{apiKey:"AIzaSyC1jRCkgWJHK0oQ7xuSqbEe6hBJ8uOleBw",authDomain:'"wedding-registry-c1a40.firebaseapp.com',databaseURL:"https://wedding-registry-c1a40.firebaseio.com",projectId:"wedding-registry-c1a40",storageBucket:"wedding-registry-c1a40.appspot.com",messagingSenderId:"351159456284"}),S=function e(){var t=this;Object(O.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,n){return t.auth.createUserWithEmailAndPassword(e,n)},this.doSignInWithEmailAndPassword=function(e,n){return t.auth.signInWithEmailAndPassword(e,n)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.user=function(e){return t.db.ref("users/".concat(e))},this.users=function(){return t.db.ref("users")},P.a.initializeApp(C),this.auth=P.a.auth(),this.db=P.a.firestore()},k=r.a.createContext(null),D=k,x=function(e){return function(t){return r.a.createElement(k.Consumer,null,(function(n){return r.a.createElement(e,Object.assign({},t,{firebase:n}))}))}},_=S,A=function(e){var t=function(t){function n(e){var t;return Object(O.a)(this,n),(t=Object(E.a)(this,Object(j.a)(n).call(this,e))).state={authUser:null},t}return Object(v.a)(n,t),Object(y.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(t){t?e.setState({authUser:t}):e.setState({authUser:null})}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(g.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),n}(r.a.Component);return x(t)},U=n(16),I=function(e){return function(t){var n=function(n){function a(){return Object(O.a)(this,a),Object(E.a)(this,Object(j.a)(a).apply(this,arguments))}return Object(v.a)(a,n),Object(y.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(n){e(n)||t.props.history.push(h)}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var n=this;return r.a.createElement(g.Consumer,null,(function(a){return e(a)?r.a.createElement(t,n.props):null}))}}]),a}(r.a.Component);return Object(U.a)(s.e,x)(n)}},N=function(){return r.a.createElement(l.a,{className:"bg-light justify-content-between"},r.a.createElement(l.a.Brand,{href:"/"},"Kristy & George"),r.a.createElement(l.a.Collapse,null,r.a.createElement(u.a,{className:"ml-auto"},r.a.createElement(u.a.Link,{href:f},"Home"),r.a.createElement(u.a.Link,{href:d},"Gallery"),r.a.createElement(u.a.Link,{href:b},"Account"))))},R=function(){return r.a.createElement(l.a,null,r.a.createElement(l.a.Brand,{href:"/"},"Kristy & George"),r.a.createElement(l.a.Collapse,null,r.a.createElement(u.a,{className:"ml-auto"},r.a.createElement(u.a.Link,{href:h},"Login"),r.a.createElement(u.a.Link,{href:p},"Sign up"))))},L=function(){return r.a.createElement("div",null,r.a.createElement(g.Consumer,null,(function(e){return e?r.a.createElement(N,null):r.a.createElement(R,null)})))},W=n(95),G=n(96),B=n(62),T=n(97),F=n(34),M=n.n(F),J=n(61),K=n.n(J),q=function(e){function t(){return Object(O.a)(this,t),Object(E.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement(W.a,{fluid:!0},r.a.createElement(G.a,null,r.a.createElement(B.a,{xs:4},r.a.createElement(T.a,{src:K.a,rounded:!0,fluid:!0})),r.a.createElement(B.a,{xs:7},r.a.createElement(T.a,{src:M.a,style:{boxShadow:"rgba(0, 0, 0, 0.75) 22px 22px 67px -19px",height:"100%",width:"100%"},rounded:!0,fluid:!0}))))}}]),t}(a.Component),H=n(12);function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(n,!0).forEach((function(t){Object(H.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Q={username:"",email:"",passwordOne:"",passwordTwo:"",error:null},$=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(E.a)(this,Object(j.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.username,r=t.email,o=t.passwordOne;n.props.firebase.doCreateUserWithEmailAndPassword(r,o).then((function(e){return n.props.firebase.user(e.user.uid).set({username:a,email:r})})).then((function(e){n.setState(z({},Q)),n.props.history.push(f)})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(H.a)({},e.target.name,e.target.value))},n.state=z({},Q),n}return Object(v.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.email,a=e.passwordOne,o=e.passwordTwo,c=e.error,i=a!==o||""===a||""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Full Name"}),r.a.createElement("input",{name:"email",value:n,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"passwordOne",value:a,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("input",{name:"passwordTwo",value:o,onChange:this.onChange,type:"password",placeholder:"Confirm Password"}),r.a.createElement("button",{disabled:i,type:"submit"},"Sign Up"),c&&r.a.createElement("p",null,c.message))}}]),t}(a.Component),V=function(){return r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(i.b,{to:p},"Sign Up"))},X=Object(U.a)(s.e,x)($),Z=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignUp"),r.a.createElement(X,null))};function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(n,!0).forEach((function(t){Object(H.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ne={email:"",error:null},ae=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(E.a)(this,Object(j.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.email;n.props.firebase.doPasswordReset(t).then((function(){n.setState(te({},ne))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(H.a)({},e.target.name,e.target.value))},n.state=te({},ne),n}return Object(v.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.error,a=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("button",{disabled:a,type:"submit"},"Reset My Password"),n&&r.a.createElement("p",null,n.message))}}]),t}(a.Component),re=function(){return r.a.createElement("p",null,r.a.createElement(i.b,{to:"george-kristy-wedding/pw-forget"},"Forgot Password?"))},oe=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"PasswordForget"),r.a.createElement(ce,null))},ce=x(ae);function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(n,!0).forEach((function(t){Object(H.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var le={email:"",password:"",error:null},ue=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(E.a)(this,Object(j.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.email,r=t.password;n.props.firebase.doSignInWithEmailAndPassword(a,r).then((function(){n.setState(se({},le)),n.props.history.push(f)})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(H.a)({},e.target.name,e.target.value))},n.state=se({},le),n}return Object(v.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.error,o=""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"password",value:n,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("button",{disabled:o,type:"submit"},"Sign In"),a&&r.a.createElement("p",null,a.message))}}]),t}(a.Component),me=Object(U.a)(s.e,x)(ue),pe=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignIn"),r.a.createElement(me,null),r.a.createElement(re,null),r.a.createElement(V,null))},he=n(99),fe=n(98);n(92);function be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var de={name:"",num_party:"",notes:""},ge=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(E.a)(this,Object(j.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.name,r=t.num_party,o=t.attending,c=t.notes,i="Yes"===o;n.db.collection("attendants").doc(a).set({name:a,num_party:r,attending:i,notes:c}).then((function(){console.log("success")})).catch((function(e){console.log("ERROR:"+e)})),e.preventDefault()},n.onChange=function(e){n.setState(Object(H.a)({},e.target.name,e.target.value))},n.state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?be(n,!0).forEach((function(t){Object(H.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):be(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},de),n.db=P.a.firestore(),n}return Object(v.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement(he.a,{onSubmit:this.onSubmit},r.a.createElement(he.a.Group,{as:B.a,controlID:"name"},r.a.createElement(he.a.Label,null,"Name"),r.a.createElement(he.a.Control,{name:"name",type:"text",placeholder:"Full Name",onChange:this.onChange})),r.a.createElement(he.a.Group,{as:B.a,controlID:"num_party"},r.a.createElement(he.a.Label,null,"Number in Party"),r.a.createElement(he.a.Control,{name:"num_party",type:"number",placeholder:"0",min:"0",onChange:this.onChange})),r.a.createElement(he.a.Group,{as:B.a,controlId:"attending"},r.a.createElement(he.a.Label,null,"Attending"),r.a.createElement(he.a.Control,{name:"attending",as:"select",placeholder:"Choose one...",onChange:this.onChange},r.a.createElement("option",null,"Choose one..."),r.a.createElement("option",null,"Yes"),r.a.createElement("option",null,"No"))),r.a.createElement(he.a.Group,{as:B.a,controlId:"notes"},r.a.createElement(he.a.Label,null,"Notes for Bride and Groom"),r.a.createElement(he.a.Control,{name:"notes",as:"textarea",rows:"3",onChange:this.onChange})),r.a.createElement("div",{className:"col-12 text-right"},r.a.createElement(fe.a,{className:"btn",variant:"primary",type:"submit"},"Submit")))}}]),t}(a.Component),Oe=Object(U.a)(I((function(e){return!!e})),s.e,x)(ge),ye=function(){return r.a.createElement("div",null,r.a.createElement(Oe,null))};function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(n,!0).forEach((function(t){Object(H.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ve={passwordOne:"",passwordTwo:"",error:null},we=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(E.a)(this,Object(j.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.passwordOne;n.props.firebase.doPasswordUpdate(t).then((function(){n.setState(je({},ve))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(H.a)({},e.target.name,e.target.value))},n.state=je({},ve),n}return Object(v.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,n=e.passwordTwo,a=e.error,o=t!==n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"passwordOne",value:t,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",value:n,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{disabled:o,type:"submit"},"Reset My Password"),a&&r.a.createElement("p",null,a.message))}}]),t}(a.Component),Pe=x(we),Ce=I((function(e){return!!e}))((function(){return r.a.createElement(g.Consumer,null,(function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Account: ",e.email),r.a.createElement(ce,null),r.a.createElement(Pe,null))}))})),Se=n(69),ke=n(102),De=n(63),xe=n.n(De),_e=n(64),Ae=n.n(_e),Ue=n(65),Ie=n.n(Ue),Ne=n(66),Re=n.n(Ne),Le=n(67),We=n.n(Le),Ge=n(68),Be=n.n(Ge);function Te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var Fe=[{title:"Engagement Photos",img:M.a},{title:"Thanksgiving /W Family",img:xe.a},{title:"First Dates",img:Ae.a},{title:"Grand Canyon",img:Ie.a},{title:"Lake Day!",img:Re.a},{title:"Grand Teton",img:We.a},{title:"Military Banquet",img:Be.a}],Me=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(E.a)(this,Object(j.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.name,r=t.num_party,o=t.attending,c=t.notes,i="Yes"===o;n.db.collection("attendants").doc(a).set({name:a,num_party:r,attending:i,notes:c}).then((function(){console.log("success")})).catch((function(e){console.log("ERROR:"+e)})),e.preventDefault()},n.onChange=function(e){n.setState(Object(H.a)({},e.target.name,e.target.value))},n.state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Te(n,!0).forEach((function(t){Object(H.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Te(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Fe),n.db=P.a.firestore(),n}return Object(v.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=[];for(var t in this.state)e.push(r.a.createElement(Se.a,null,r.a.createElement(T.a,{src:this.state[t].img,style:{maxHeight:750,boxShadow:"rgba(0, 0, 0, 0.75) 22px 22px 67px -19px"},rounded:!0})));return r.a.createElement(W.a,{style:{display:"flex",justifyContent:"center"}},r.a.createElement(ke.a,null,e))}}]),t}(a.Component),Je=Object(U.a)(I((function(e){return!!e})),s.e,x)(Me),Ke=function(){return r.a.createElement("div",null,r.a.createElement(Je,null))},qe=A((function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement("hr",null),r.a.createElement(s.a,{exact:!0,path:"/",component:q}),r.a.createElement(s.a,{path:p,component:Z}),r.a.createElement(s.a,{path:h,component:pe}),r.a.createElement(s.a,{path:"george-kristy-wedding/pw-forget",component:oe}),r.a.createElement(s.a,{path:f,component:ye}),r.a.createElement(s.a,{path:b,component:Ce}),r.a.createElement(s.a,{path:d,component:Ke})))}));c.a.render(r.a.createElement(D.Provider,{value:new _},r.a.createElement(qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[71,1,2]]]);
//# sourceMappingURL=main.de85631f.chunk.js.map