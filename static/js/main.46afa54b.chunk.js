(this.webpackJsonpi_signup=this.webpackJsonpi_signup||[]).push([[0],{27:function(e,s,a){},29:function(e,s,a){},30:function(e,s,a){},31:function(e,s,a){},32:function(e,s,a){},34:function(e,s,a){},35:function(e,s,a){"use strict";a.r(s);var t=a(0),c=a.n(t),n=a(8),l=a.n(n),i=a(6),r=a(9),o=a(14),j={user:{}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case"Add":return Object(o.a)(Object(o.a)({},e),{},{user:{fullname:s.user.fullname,email:s.user.email,password:s.user.password}});default:return e}},u=(a(27),a(2)),h=a(15),b=(a(29),a(30),a(31),a(32),a(1));var m=function(){var e,s,a=Object(t.useState)(!0),c=Object(u.a)(a,2),n=c[0],l=c[1],r=Object(t.useState)(!1),o=Object(u.a)(r,2),j=o[0],d=o[1],m=Object(t.useState)(!1),p=Object(u.a)(m,2),O=p[0],g=p[1],x=Object(t.useState)(!1),v=Object(u.a)(x,2),f=v[0],N=v[1],S=Object(t.useState)(!1),w=Object(u.a)(S,2),B=w[0],z=w[1],_=Object(t.useState)(!1),M=Object(u.a)(_,2),y=M[0],C=M[1],I=Object(t.useState)(!1),A=Object(u.a)(I,2),F=A[0],q=A[1],E=Object(t.useState)(!1),L=Object(u.a)(E,2),k=L[0],D=L[1],V=Object(t.useState)(!1),Y=Object(u.a)(V,2),G=Y[0],W=Y[1],P=Object(t.useState)(!1),T=Object(u.a)(P,2),J=T[0],Z=T[1],$=Object(t.useState)(!1),U=Object(u.a)($,2),H=U[0],K=U[1],Q=Object(i.b)(),R=Object(i.c)((function(e){return e.user})),X=Object(h.a)(),ee=X.register,se=X.handleSubmit,ae=X.errors,te=(X.formState.isDirty,Object(h.a)()),ce=te.register,ne=te.handleSubmit,le=te.errors;return Object(t.useEffect)((function(){z(!0===j&&!0===O&&!0===f)}),[O,j,f]),Object(t.useEffect)((function(){Z(!0===y&&!0===F&&!0===k&&!0===G)}),[F,y,k,G]),Object(b.jsx)("div",{children:n?Object(b.jsx)("div",{className:"main-root-one  main",children:Object(b.jsx)("div",{className:"m-root-main",children:Object(b.jsx)("div",{className:"rad-main-box  m-s-box1",children:Object(b.jsx)("div",{className:"mp-main-one-box md-p md-p-sp  md-p-fs",children:Object(b.jsxs)("div",{className:"main-box",children:[Object(b.jsxs)("div",{className:"left-sec",children:[Object(b.jsx)("img",{alt:"icon-company",src:"https://raw.githubusercontent.com/Bhavesh083/SignIn_Work_04/c762b8b2d187a1321ea6b5cfe7cc60b2fd47e9c9/src/images/modal-logo.svg"}),Object(b.jsxs)("div",{className:"left-content",children:[Object(b.jsx)("p",{className:"left-content-welcome",children:"Welcome Back"}),Object(b.jsx)("p",{className:"left-content-signin",children:"Sign in to continue"})]})]}),Object(b.jsxs)("div",{className:"right-sec",children:[Object(b.jsx)("svg",{className:"MuiSvgIcon-root",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(b.jsx)("path",{d:"M18.3 5.71a.9959.9959 0 00-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"})}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"right-sec-main-content",children:[Object(b.jsxs)("div",{className:"r-s-google",children:[Object(b.jsx)("img",{alt:"google-icon",src:"https://github.com/Bhavesh083/SignIn_Work_04/blob/main/src/images/Google-logo.png?raw=true"}),Object(b.jsx)("p",{children:"Continue with Google"})]}),Object(b.jsxs)("div",{className:"sec-seperator",children:[Object(b.jsx)("hr",{}),Object(b.jsx)("p",{children:"or"}),Object(b.jsx)("hr",{})]}),Object(b.jsx)("div",{className:"right-form",children:Object(b.jsxs)("form",{className:"right-form-body",onSubmit:se((function(e){var s,a,t;console.log(e),Q((s=e.fullname,a=e.email,t=e.password,{type:"Add",user:{email:a,fullname:s,password:t}})),l(!1)})),children:[Object(b.jsx)("label",{children:"Your Full Name"}),Object(b.jsx)("input",{value:R.fullname,onChange:function(e){return function(e){e.target.value.length>1?d(!0):e.target.value.length<=0&&d(!1)}(e)},name:"fullname",placeholder:"Enter Your Full Name",type:"text",ref:ee({required:!0})}),ae.fullname&&Object(b.jsxs)("p",{className:"modal__errors",children:[Object(b.jsx)("svg",{className:"MuiSvgIcon-root",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(b.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"})}),"Full Name is required"]}),Object(b.jsx)("label",{children:"Your Email Address"}),Object(b.jsx)("input",{value:R.email,onChange:function(e){return function(e){e.target.value.length>3?g(!0):e.target.value.length<=2&&g(!1)}(e)},name:"email",placeholder:"Enter Email Address",type:"email",ref:ee({required:!0})}),ae.email&&Object(b.jsxs)("p",{className:"modal__errors",children:[Object(b.jsx)("svg",{className:"MuiSvgIcon-root",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(b.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"})}),"Email is required"]}),Object(b.jsx)("label",{children:"Password"}),Object(b.jsx)("input",{value:R.password,onChange:function(e){return function(e){e.target.value.length>7?N(!0):e.target.value.length<=6&&N(!1)}(e)},name:"password",placeholder:"Enter Password",type:H?"text":"password",ref:ee({required:!0,pattern:{value:/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[@#$!^%*?&]).{8,}$/,message:"Your password must have at least one of each of the following: uppercase character (A-Z), lowercase character (a-z), digit (0-9), and symbol (any non-alphanumeric character)"}})}),Object(b.jsx)("svg",{onClick:function(){K(!H)},className:"MuiSvgIcon-root visiblity",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:H?Object(b.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}):Object(b.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"})}),"pattern"===(null===(e=ae.password)||void 0===e?void 0:e.type)&&Object(b.jsxs)("p",{className:"modal__errors dec-pad",children:[Object(b.jsx)("svg",{className:"MuiSvgIcon-root ",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(b.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"})}),ae.password.message]}),"required"===(null===(s=ae.password)||void 0===s?void 0:s.type)&&Object(b.jsxs)("p",{className:"modal__errors dec-pad",children:[Object(b.jsx)("svg",{className:"MuiSvgIcon-root ",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(b.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"})}),"Please enter your password"]}),B?Object(b.jsx)("button",{className:"r-f-b-button",children:"Next"}):Object(b.jsx)("button",{className:"disabled",children:"Next"})]})})]}),Object(b.jsxs)("div",{className:"info-box-body",children:[Object(b.jsx)("hr",{}),Object(b.jsxs)("p",{children:["By signing up, you're agreeing to our ",Object(b.jsx)("span",{children:" Terms of Use "})]}),Object(b.jsxs)("p",{children:["Already have an account? ",Object(b.jsx)("span",{children:" Log In "})]})]})]})]})]})})})})}):Object(b.jsx)("div",{className:"main-root-one  main",children:Object(b.jsx)("div",{className:"m-root-main",children:Object(b.jsx)("div",{className:"rad-main-box  m-s-box1",children:Object(b.jsx)("div",{className:"mp-main-one-box md-p md-p-sp  md-p-fs",children:Object(b.jsxs)("div",{className:"main-box",children:[Object(b.jsxs)("div",{className:"left-sec",children:[Object(b.jsx)("img",{alt:"icon-company",src:"https://raw.githubusercontent.com/Bhavesh083/SignIn_Work_04/c762b8b2d187a1321ea6b5cfe7cc60b2fd47e9c9/src/images/modal-logo.svg"}),Object(b.jsxs)("div",{className:"left-content",children:[Object(b.jsx)("p",{className:"left-content-welcome",children:"Welcome Back"}),Object(b.jsx)("p",{className:"left-content-signin",children:"Sign in to continue"})]})]}),Object(b.jsxs)("div",{className:"right-sec",children:[Object(b.jsx)("svg",{className:"MuiSvgIcon-root",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(b.jsx)("path",{d:"M18.3 5.71a.9959.9959 0 00-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"})}),Object(b.jsx)("div",{className:"modal__content3",children:Object(b.jsxs)("form",{className:"modal__form form2",onSubmit:ne((function(e){console.log(e)})),children:[Object(b.jsx)("label",{className:"newLabel",children:"College"}),Object(b.jsx)("input",{onChange:function(e){return function(e){e.target.value.length>1?C(!0):e.target.value.length<=0&&C(!1)}(e)},className:"college_field",placeholder:"Enter Colege Name",type:"text",name:"college",ref:ce({required:!0})}),le.college&&Object(b.jsxs)("p",{className:"modal__errors",children:[Object(b.jsx)("svg",{className:"MuiSvgIcon-root",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(b.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"})}),"College Name is required"]}),Object(b.jsxs)("div",{className:"yearDegree",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{className:"newLabel",children:"Graduation Year"}),Object(b.jsxs)("select",{onChange:function(e){return function(e){e.target.value.length>1?q(!0):e.target.value.length<=0&&q(!1)}(e)},name:"date",className:"signupDropdown2",type:"text",ref:ce({required:!0}),children:[Object(b.jsx)("option",{className:"option__heading",value:"",hidden:!0,children:"Select Graduation Year"}),Object(b.jsx)("option",{className:"signupOption",value:"Fall 2024",children:"Fall 2024"}),Object(b.jsx)("option",{className:"signupOption",value:"Spring 2024",children:"Spring 2024"}),Object(b.jsx)("option",{className:"signupOption",value:"Fall 2023",children:"Fall 2023"}),Object(b.jsx)("option",{className:"signupOption",value:"Spring 2023",children:"Spring 2023"}),Object(b.jsx)("option",{className:"signupOption",value:"Fall 2022",children:"Fall 2022"}),Object(b.jsx)("option",{className:"signupOption",value:"Spring 2022",children:"Spring 2022"}),Object(b.jsx)("option",{className:"signupOption",value:"Fall 2021",children:"Fall 2021"}),Object(b.jsx)("option",{className:"signupOption",value:"Spring 2021",children:"Spring 2021"}),Object(b.jsx)("option",{className:"signupOption",value:"Fall 2020",children:"Fall 2020"}),Object(b.jsx)("option",{className:"signupOption",value:"Spring 2020",children:"Spring 2020"}),Object(b.jsx)("option",{className:"signupOption",value:" 2019",children:"2019"}),Object(b.jsx)("option",{className:"signupOption",value:" 2018",children:"2018"})]}),le.date&&Object(b.jsxs)("p",{className:"modal__errors",children:[Object(b.jsx)("svg",{className:"MuiSvgIcon-root",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(b.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"})}),"Graduation Date is required"]})]}),Object(b.jsxs)("div",{className:"degreeContainer",children:[Object(b.jsx)("label",{className:"newLabel",children:"Degree"}),Object(b.jsxs)("select",{onChange:function(e){return function(e){e.target.value.length>1?D(!0):e.target.value.length<=0&&D(!1)}(e)},className:"Degree",placeholder:"Enter Degree Name",type:"text",name:"degree",ref:ce({required:!0}),children:[Object(b.jsx)("option",{className:"option__heading",value:"",hidden:!0,children:"Select Degree Name"}),Object(b.jsx)("option",{className:"signupOption",value:"BTech",children:"BTech"}),Object(b.jsx)("option",{className:"signupOption",value:"BSc",children:"BSc"}),Object(b.jsx)("option",{className:"signupOption",value:"BBA",children:"BBA"}),Object(b.jsx)("option",{className:"signupOption",value:"BA",children:"BA"}),Object(b.jsx)("option",{className:"signupOption",value:"Bcom",children:"Bcom"}),Object(b.jsx)("option",{className:"signupOption",value:"BCA",children:"BCA"}),Object(b.jsx)("option",{className:"signupOption",value:"BFA",children:"BFA"}),Object(b.jsx)("option",{className:"signupOption",value:"BE",children:"BE"})]}),le.degree&&Object(b.jsxs)("p",{className:"modal__errors",children:[Object(b.jsx)("svg",{className:"MuiSvgIcon-root",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(b.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"})}),"Degree is required"]})]})]}),Object(b.jsx)("label",{className:"newLabel",children:"Major"}),Object(b.jsx)("input",{onChange:function(e){return function(e){e.target.value.length>1?W(!0):e.target.value.length<=0&&W(!1)}(e)},placeholder:"Enter Major Name",type:"text",name:"major",ref:ce({required:!0})}),le.major&&Object(b.jsxs)("p",{className:"modal__errors",children:[Object(b.jsx)("svg",{className:"MuiSvgIcon-root",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(b.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"})}),"Major is required"]}),Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{onClick:function(){l(!0)},className:"signupButton2",type:"button",children:"Back"}),J?Object(b.jsx)("button",{className:"signupButton",children:"Signup"}):Object(b.jsx)("button",{className:"disignupButton",children:"Signup"})]})]})})]})]})})})})})})};a(34);var p=function(){return Object(b.jsx)("div",{className:"app-body",children:Object(b.jsx)(m,{})})},O=Object(r.b)(d);l.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(i.a,{store:O,children:Object(b.jsx)(p,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.46afa54b.chunk.js.map