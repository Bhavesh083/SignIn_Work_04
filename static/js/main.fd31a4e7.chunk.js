(this.webpackJsonpi_signup=this.webpackJsonpi_signup||[]).push([[0],{27:function(e,s,a){},29:function(e,s,a){},30:function(e,s,a){},31:function(e,s,a){},32:function(e,s,a){},33:function(e,s,a){},34:function(e,s,a){},35:function(e,s,a){},36:function(e,s,a){},38:function(e,s,a){"use strict";a.r(s);var c=a(0),t=a.n(c),n=a(8),l=a.n(n),i=a(6),o=a(9),r=a(14),d={user:{}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case"Add":return Object(r.a)(Object(r.a)({},e),{},{user:{fullname:s.user.fullname,email:s.user.email,password:s.user.password}});default:return e}},u=(a(27),a(2)),m=a(15),h=(a(29),a(30),a(31),a(32),a(33),a(34),a(35),a(36),a(1));var b=function(){var e,s,a=Object(c.useState)(!0),t=Object(u.a)(a,2),n=t[0],l=t[1],o=Object(c.useState)(!0),r=Object(u.a)(o,2),d=r[0],j=r[1],b=Object(c.useState)(!1),p=Object(u.a)(b,2),O=p[0],v=p[1],g=Object(c.useState)(!1),x=Object(u.a)(g,2),f=x[0],N=x[1],_=Object(c.useState)(!1),S=Object(u.a)(_,2),w=S[0],y=S[1],B=Object(c.useState)(!1),z=Object(u.a)(B,2),M=z[0],C=z[1],I=Object(c.useState)(!1),E=Object(u.a)(I,2),A=E[0],L=E[1],k=Object(c.useState)(!1),F=Object(u.a)(k,2),q=F[0],D=F[1],V=Object(c.useState)(!1),Y=Object(u.a)(V,2),W=Y[0],G=Y[1],T=Object(c.useState)(!1),P=Object(u.a)(T,2),J=P[0],Z=P[1],$=Object(c.useState)(!1),H=Object(u.a)($,2),R=H[0],U=H[1],K=Object(c.useState)(!1),Q=Object(u.a)(K,2),X=Q[0],ee=Q[1],se=Object(i.b)(),ae=Object(i.c)((function(e){return e.user})),ce=Object(m.a)(),te=ce.register,ne=ce.handleSubmit,le=ce.errors,ie=(ce.formState.isDirty,Object(m.a)()),oe=ie.register,re=ie.handleSubmit,de=ie.errors;return Object(c.useEffect)((function(){C(!0===O&&!0===f&&!0===w)}),[f,O,w]),Object(c.useEffect)((function(){U(!0===A&&!0===q&&!0===W&&!0===J)}),[q,A,W,J]),Object(h.jsx)("div",{children:n?Object(h.jsxs)("div",{className:"comp-main  modal",children:[Object(h.jsx)("div",{className:"bg-view"}),Object(h.jsx)("div",{tabIndex:"0","data-test":"sentine1Start"}),Object(h.jsxs)("div",{className:"comp-container comp-sp",children:[Object(h.jsx)("div",{className:"c-root comp-p comp-psp comp-pws comp-pfs c-shadow c-radius ",children:Object(h.jsxs)("div",{className:"modal__container",children:[Object(h.jsxs)("div",{className:"modal__sec1",children:[Object(h.jsx)("img",{alt:"icon-company",src:"https://raw.githubusercontent.com/Bhavesh083/SignIn_Work_04/c762b8b2d187a1321ea6b5cfe7cc60b2fd47e9c9/src/images/modal-logo.svg"}),Object(h.jsxs)("div",{className:"modal__content",children:[Object(h.jsx)("p",{className:"modal__welcome",children:"Welcome Back"}),Object(h.jsx)("p",{className:"modal__signIn",children:"Sign in to continue"})]})]}),Object(h.jsxs)("div",{className:"modal__sec2",children:[Object(h.jsx)("svg",{className:"MuiSvgIcon-root",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(h.jsx)("path",{d:"M18.3 5.71a.9959.9959 0 00-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"})}),Object(h.jsxs)("div",{className:"modal__content2",children:[Object(h.jsxs)("div",{className:"google__login",children:[Object(h.jsx)("img",{alt:"google-icon",src:"https://github.com/Bhavesh083/SignIn_Work_04/blob/main/src/images/Google-logo.png?raw=true"}),Object(h.jsx)("p",{children:"Continue with Google"})]}),Object(h.jsxs)("div",{className:"modal__seperator",children:[Object(h.jsx)("hr",{}),Object(h.jsx)("p",{children:"or"}),Object(h.jsx)("hr",{})]}),Object(h.jsx)("div",{className:"home__modal",children:Object(h.jsxs)("form",{className:"modal__form",onSubmit:ne((function(e){var s,a,c;console.log(e),se((s=e.fullname,a=e.email,c=e.password,{type:"Add",user:{email:a,fullname:s,password:c}})),l(!1)})),children:[Object(h.jsx)("label",{children:"Your Full Name"}),Object(h.jsx)("input",{value:ae.fullname,onChange:function(e){return function(e){e.target.value.length>1?v(!0):e.target.value.length<=0&&v(!1)}(e)},name:"fullname",placeholder:"Enter Your Full Name",type:"text",ref:te({required:!0})}),le.fullname&&Object(h.jsxs)("p",{className:"modal__errors",children:[Object(h.jsx)("svg",{className:"MuiSvgIcon-root",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(h.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"})}),"Full name is required"]}),Object(h.jsx)("label",{children:"Your Email Address"}),Object(h.jsx)("input",{value:ae.email,onChange:function(e){return function(e){e.target.value.length>3?N(!0):e.target.value.length<=2&&N(!1)}(e)},name:"email",placeholder:"Enter Email Address",type:"email",ref:te({required:!0})}),le.email&&Object(h.jsxs)("p",{className:"modal__errors",children:[Object(h.jsx)("svg",{className:"MuiSvgIcon-root",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(h.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"})}),"Email is required"]}),Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{value:ae.password,onChange:function(e){return function(e){e.target.value.length>7?y(!0):e.target.value.length<=6&&y(!1)}(e)},name:"password",placeholder:"Enter Password",type:X?"text":"password",ref:te({required:!0,pattern:{value:/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*[!@#$%^&*_-]).{8,}$/,message:"Your password must have at least one of each of the following: uppercase character (A-Z), lowercase character (a-z), digit (0-9), and symbol (any non-alphanumeric character)"}})}),Object(h.jsx)("svg",{onClick:function(){ee(!X)},className:"MuiSvgIcon-root visiblity",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:X?Object(h.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}):Object(h.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"})}),"pattern"===(null===(e=le.password)||void 0===e?void 0:e.type)&&Object(h.jsxs)("p",{className:"modal__errors dec-pad",children:[Object(h.jsx)("svg",{className:"MuiSvgIcon-root ",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(h.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"})}),le.password.message]}),"required"===(null===(s=le.password)||void 0===s?void 0:s.type)&&Object(h.jsxs)("p",{className:"modal__errors dec-pad",children:[Object(h.jsx)("svg",{className:"MuiSvgIcon-root ",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(h.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"})}),"Please enter your password"]}),M?Object(h.jsx)("button",{className:"home__login",children:"Next"}):Object(h.jsx)("button",{className:"dishome__login",children:"Next"})]})})]}),Object(h.jsxs)("div",{className:"modal__contentbottom",children:[Object(h.jsx)("hr",{}),Object(h.jsxs)("p",{children:["By signing up, you're agreeing to our ",Object(h.jsx)("span",{children:" Terms of Use "})]}),Object(h.jsxs)("p",{children:["Already have an account? ",Object(h.jsx)("span",{children:" Log In "})]})]})]})]})}),Object(h.jsx)("div",{tabIndex:"0","data-test":"sentine1End"})]})]}):Object(h.jsxs)("div",{className:"comp-main  modal",children:[Object(h.jsx)("div",{className:"bg-view"}),Object(h.jsx)("div",{tabIndex:"0","data-test":"sentine1Start"}),Object(h.jsxs)("div",{className:"comp-container comp-sp",children:[Object(h.jsx)("div",{className:"c-root comp-p comp-psp comp-pws comp-pfs c-shadow c-radius ",children:Object(h.jsxs)("div",{className:"modal__container modal__container2",children:[Object(h.jsxs)("div",{className:"modal__sec1 modal__sec1__verify",children:[Object(h.jsx)("img",{alt:"icon-company",src:"https://raw.githubusercontent.com/Bhavesh083/SignIn_Work_04/c762b8b2d187a1321ea6b5cfe7cc60b2fd47e9c9/src/images/modal-logo.svg"}),Object(h.jsxs)("div",{className:"modal__content",children:[Object(h.jsx)("p",{className:"modal__welcome",children:"Welcome Back"}),Object(h.jsx)("p",{className:"modal__signIn",children:"Sign in to continue."})]})]}),Object(h.jsxs)("div",{className:"modal__sec2",children:[Object(h.jsx)("svg",{className:"MuiSvgIcon-root",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(h.jsx)("path",{d:"M18.3 5.71a.9959.9959 0 00-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"})}),d?Object(h.jsx)("div",{className:"modal__content3",children:Object(h.jsxs)("form",{className:"modal__form form2",onSubmit:re((function(e){console.log(e)})),children:[Object(h.jsx)("label",{className:"newLabel",children:"College"}),Object(h.jsx)("input",{onChange:function(e){return function(e){e.target.value.length>1?L(!0):e.target.value.length<=0&&L(!1)}(e)},className:"college_field",placeholder:"Enter College Name",type:"text",name:"college",ref:oe({required:!0})}),de.college&&Object(h.jsxs)("p",{className:"modal__errors",children:[Object(h.jsx)("svg",{className:"MuiSvgIcon-root",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(h.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"})}),"College Name is required"]}),Object(h.jsxs)("div",{className:"yearDegree",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{className:"newLabel",children:"Graduation Year"}),Object(h.jsxs)("select",{onChange:function(e){return function(e){e.target.value.length>1?D(!0):e.target.value.length<=0&&D(!1)}(e)},name:"date",className:"signupDropdown2",type:"text",ref:oe({required:!0}),children:[Object(h.jsx)("option",{className:"option__heading",value:"",hidden:!0,children:"Graduation Year"}),Object(h.jsx)("option",{className:"signupOption",value:"Fall 2024",children:"Fall 2024"}),Object(h.jsx)("option",{className:"signupOption",value:"Spring 2024",children:"Spring 2024"}),Object(h.jsx)("option",{className:"signupOption",value:"Fall 2023",children:"Fall 2023"}),Object(h.jsx)("option",{className:"signupOption",value:"Spring 2023",children:"Spring 2023"}),Object(h.jsx)("option",{className:"signupOption",value:"Fall 2022",children:"Fall 2022"}),Object(h.jsx)("option",{className:"signupOption",value:"Spring 2022",children:"Spring 2022"}),Object(h.jsx)("option",{className:"signupOption",value:"Fall 2021",children:"Fall 2021"}),Object(h.jsx)("option",{className:"signupOption",value:"Spring 2021",children:"Spring 2021"}),Object(h.jsx)("option",{className:"signupOption",value:"Fall 2020",children:"Fall 2020"}),Object(h.jsx)("option",{className:"signupOption",value:"Spring 2020",children:"Spring 2020"}),Object(h.jsx)("option",{className:"signupOption",value:" 2019",children:"2019"}),Object(h.jsx)("option",{className:"signupOption",value:" 2018",children:"2018"})]}),de.date&&Object(h.jsxs)("p",{className:"modal__errors",children:[Object(h.jsx)("svg",{className:"MuiSvgIcon-root",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(h.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"})}),"Graduation Date is required"]})]}),Object(h.jsxs)("div",{className:"degreeContainer",children:[Object(h.jsx)("label",{className:"newLabel",children:"Degree"}),Object(h.jsxs)("select",{onChange:function(e){return function(e){e.target.value.length>1?G(!0):e.target.value.length<=0&&G(!1)}(e)},className:"Degree",placeholder:"Enter Degree Name",type:"text",name:"degree",ref:oe({required:!0}),children:[Object(h.jsx)("option",{className:"option__heading",value:"",hidden:!0,children:"Select Degree Name"}),Object(h.jsx)("option",{className:"signupOption",value:"BTech",children:"BTech"}),Object(h.jsx)("option",{className:"signupOption",value:"BSc",children:"BSc"}),Object(h.jsx)("option",{className:"signupOption",value:"BBA",children:"BBA"}),Object(h.jsx)("option",{className:"signupOption",value:"BA",children:"BA"}),Object(h.jsx)("option",{className:"signupOption",value:"Bcom",children:"Bcom"}),Object(h.jsx)("option",{className:"signupOption",value:"BCA",children:"BCA"}),Object(h.jsx)("option",{className:"signupOption",value:"BFA",children:"BFA"}),Object(h.jsx)("option",{className:"signupOption",value:"BE",children:"BE"})]}),de.degree&&Object(h.jsxs)("p",{className:"modal__errors",children:[Object(h.jsx)("svg",{className:"MuiSvgIcon-root",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(h.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"})}),"Degree is required"]})]})]}),Object(h.jsx)("label",{className:"newLabel",children:"Major"}),Object(h.jsx)("input",{onChange:function(e){return function(e){e.target.value.length>1?Z(!0):e.target.value.length<=0&&Z(!1)}(e)},placeholder:"Enter Major Name",type:"text",name:"major",ref:oe({required:!0})}),de.major&&Object(h.jsxs)("p",{className:"modal__errors",children:[Object(h.jsx)("svg",{className:"MuiSvgIcon-root",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(h.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"})}),"Major is required"]}),Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("button",{onClick:function(){l(!0)},className:"signupButton2",type:"button",children:"Back"}),R?Object(h.jsx)("button",{onClick:function(){j(!1)},className:"signupButton",children:"Signup"}):Object(h.jsx)("button",{className:"disignupButton",children:"Signup"})]})]})}):Object(h.jsx)("div",{className:"modal__content4",children:Object(h.jsxs)("form",{className:"modal__form form2",children:[Object(h.jsx)("h2",{className:"verifyDiv verifyTitle",children:"We Need to Verify your Email"}),Object(h.jsx)("div",{className:"infodiv verifyDiv",children:"We sent an email to the address you provided when you created your account. Verify your email to continue"}),Object(h.jsx)("input",{type:"email",className:"email-input verifyInput vfdiv",disabled:!0,value:ae.email}),Object(h.jsx)("hr",{className:"verificationHr"}),Object(h.jsxs)("div",{className:"infodiv verifyDiv",children:["Click on the link in that email to verify your account. You may need to check your ",Object(h.jsx)("b",{children:"spam"})," folder."]}),Object(h.jsxs)("div",{className:"infodiv bottomVerifyDiv",children:[Object(h.jsx)("button",{className:"create-acc verify-button",children:"Don't see it? Resend"}),Object(h.jsxs)("div",{className:"log-in verifyLogOut",children:["Not Your Account ? ",Object(h.jsx)("span",{className:"log-in-link",children:"Log Out"})]})]})]})})]})]})}),Object(h.jsx)("div",{tabIndex:"0","data-test":"sentine1End"})]})]})})};var p=function(){return Object(h.jsx)("div",{className:"app-body",children:Object(h.jsx)(b,{})})},O=Object(o.b)(j);l.a.render(Object(h.jsx)(t.a.StrictMode,{children:Object(h.jsx)(i.a,{store:O,children:Object(h.jsx)(p,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.fd31a4e7.chunk.js.map