(this["webpackJsonppomodoro-timer"]=this["webpackJsonppomodoro-timer"]||[]).push([[0],{33:function(e,t,n){"use strict";n.r(t);var r,c,s,i,a,j,o,b,u,d,O,m,x,l,f,p,h,g,v,I=n(0),T=n.n(I),w=n(19),L=n.n(w),P=n(5),y=n(2),S=n(10),z=n(7),M=n(12),k=n(3),R=n(11),A=n.n(R),C=n(1),E=k.a.div(r||(r=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n"]))),D=k.a.input(c||(c=Object(y.a)(["\n  margin: 0px 5px;\n  font-size: 20px;\n  padding: 5px;\n"]))),F=k.a.div(s||(s=Object(y.a)(["\n  margin: 5px 5px;\n  font-size: 20px;\n"]))),N=function(e){var t=e.setTimeLeft,n=e.setIsPaused,r=Object(z.b)(),c=r.register,s=r.handleSubmit,i=r.formState.errors;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(E,{children:[Object(C.jsx)(F,{children:"Minutes:"}),Object(C.jsxs)("form",{noValidate:!0,onSubmit:s((function(e){var r=e.timerInput;console.log(r),A()("#pomodoro-form").trigger("reset"),t(60*r),n(!1)})),id:"pomodoro-form",children:[Object(C.jsx)(D,Object(S.a)({type:"number",name:"minutes",id:"minutes-input"},c("timerInput",{required:{value:!0,message:"Please enter the number of minutes"},min:{value:.01,message:"Too low! Enter a number between 0.01 and 1000"},max:{value:1e3,message:"Too high! Enter a number between 0.01 and 1000"}}))),Object(C.jsx)(D,{type:"submit"})]})]}),Object(C.jsx)("div",{align:"center",children:Object(C.jsx)(M.a,{errors:i,name:"timerInput",render:function(e){var t=e.message;return Object(C.jsx)("p",{children:t})}})})]})},q=k.a.h1(i||(i=Object(y.a)(["\n  font-size: 40px;\n"]))),G=function(e){var t=e.param,n=e.number;return Object(C.jsxs)("div",{align:"center",children:[Object(C.jsx)(q,{children:n}),Object(C.jsx)("h1",{children:t})]})},J=k.a.div(a||(a=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n"]))),U=k.a.h1(j||(j=Object(y.a)(["\n  font-size: 40px;\n"]))),V=k.a.button(o||(o=Object(y.a)(["\n  font-size: 20px;\n"]))),W=function(e){var t=e.timeLeft,n=e.setTimeLeft,r=e.isPaused,c=e.setIsPaused,s=Math.floor(t/60),i=Math.floor(t-60*s),a=Object(I.useRef)();return Object(I.useEffect)((function(){var e=setInterval((function(){r?clearInterval(a.current):n(t-1)}),1e3);return a.current=e,function(){return clearInterval(a.current)}})),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(J,{children:[Object(C.jsx)(G,{param:"Minutes",number:s}),Object(C.jsx)(U,{children:":"}),Object(C.jsx)(G,{param:"Seconds",number:i})]}),Object(C.jsx)("div",{align:"center",children:Object(C.jsx)(V,{onClick:function(){n(0),c(!0)},children:"Reset"})})]})},Y=n(13),B=n.n(Y),H=n(14),K=n.p+"static/media/DADAA.a85360e6.mp3",Q=k.a.h1(b||(b=Object(y.a)(["\n  margin: 20px 20px;\n"]))),X=k.a.button(u||(u=Object(y.a)(["\n  font-size: 20px;\n  margin: 2;\n"]))),Z=function(e){var t=e.setTimeLeft,n=e.setIsPaused,r=window.innerWidth,c=Object(H.a)(K,{volume:.5}),s=Object(P.a)(c,1)[0];return Object(I.useEffect)((function(){s()}),[s]),Object(C.jsxs)("div",{align:"center",children:[Object(C.jsx)(B.a,{width:r}),Object(C.jsx)(Q,{children:"CONGRATULATIONS ! You finished whatever you were doing"}),Object(C.jsx)(X,{onClick:function(){t(0),n(!0)},children:"Reset"})]})},$=k.a.div(d||(d=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n"]))),_=k.a.input(O||(O=Object(y.a)(["\n  margin: 0px 5px;\n  font-size: 20px;\n  padding: 5px;\n"]))),ee=k.a.div(m||(m=Object(y.a)(["\n  margin: 5px 5px;\n  font-size: 20px;\n"]))),te=function(e){var t=e.setTimeLeft,n=e.setIsPaused,r=Object(z.b)(),c=r.register,s=r.handleSubmit,i=r.formState.errors;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)($,{children:[Object(C.jsx)(ee,{children:"Countdown to:"}),Object(C.jsxs)("form",{noValidate:!0,onSubmit:s((function(e){var r=e.timerInput,c=new Date(r).getTime()-(new Date).getTime();console.log(c),A()("#pomodoro-form-to").trigger("reset"),t(.001*c),n(!1)})),id:"pomodoro-form-to",children:[Object(C.jsx)(_,Object(S.a)({type:"datetime-local",name:"time",id:"time-input"},c("timerInput",{required:{value:!0,message:"Please enter a time"}}))),Object(C.jsx)(_,{type:"submit"})]})]}),Object(C.jsx)("div",{align:"center",children:Object(C.jsx)(M.a,{errors:i,name:"timerInput",render:function(e){var t=e.message;return Object(C.jsx)("p",{children:t})}})})]})},ne=k.a.h1(x||(x=Object(y.a)(["\n  font-size: 40px;\n"]))),re=function(e){var t=e.param,n=e.number;return Object(C.jsxs)("div",{align:"center",children:[Object(C.jsx)(ne,{children:n}),Object(C.jsx)("h1",{children:t})]})},ce=k.a.div(l||(l=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n"]))),se=k.a.h1(f||(f=Object(y.a)(["\n  font-size: 40px;\n"]))),ie=k.a.button(p||(p=Object(y.a)(["\n  font-size: 20px;\n"]))),ae=function(e){var t=e.timeLeft,n=e.setTimeLeft,r=e.isPaused,c=e.setIsPaused,s=Math.floor(t/3600/24),i=Math.floor(t/3600-24*s),a=Math.floor((t-3600*i-24*s*3600)/60),j=Math.floor(t-3600*i-60*a-24*s*3600),o=Object(I.useRef)();return Object(I.useEffect)((function(){var e=setInterval((function(){r?clearInterval(o.current):n(t-1)}),1e3);return o.current=e,function(){return clearInterval(o.current)}})),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(ce,{children:[Object(C.jsx)(re,{param:"Days",number:s}),Object(C.jsx)(se,{children:":"}),Object(C.jsx)(re,{param:"Hours",number:i}),Object(C.jsx)(se,{children:":"}),Object(C.jsx)(re,{param:"Minutes",number:a}),Object(C.jsx)(se,{children:":"}),Object(C.jsx)(re,{param:"Seconds",number:j})]}),Object(C.jsx)("div",{align:"center",children:Object(C.jsx)(ie,{onClick:function(){n(0),c(!0)},children:"Reset"})})]})},je=k.a.h1(h||(h=Object(y.a)(["\n  margin: 20px 20px;\n"]))),oe=k.a.button(g||(g=Object(y.a)(["\n  font-size: 20px;\n  margin: 2;\n"]))),be=function(e){var t=e.setTimeLeft,n=e.setIsPaused,r=window.innerWidth,c=Object(H.a)(K,{volume:.7}),s=Object(P.a)(c,1)[0];return Object(I.useEffect)((function(){s()}),[s]),Object(C.jsxs)("div",{align:"center",children:[Object(C.jsx)(B.a,{width:r}),Object(C.jsx)(je,{children:"CONGRATULATIONS ! You finished whatever you were doing"}),Object(C.jsx)(oe,{onClick:function(){t(0),n(!0)},children:"Reset"})]})},ue=k.a.div(v||(v=Object(y.a)(["\ntext-align: center;\nfont-size: 50px;\npadding: 20px 0px;\nbackground: pink;\ncolor: whitesmoke;\ntext-shadow: 3px 3px grey;\nmargin-bottom: 20px; \n"])));var de=function(){var e=Object(I.useState)(0),t=Object(P.a)(e,2),n=t[0],r=t[1],c=Object(I.useState)(!0),s=Object(P.a)(c,2),i=s[0],a=s[1],j=Object(I.useState)(0),o=Object(P.a)(j,2),b=o[0],u=o[1],d=Object(I.useState)(!0),O=Object(P.a)(d,2),m=O[0],x=O[1];return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(ue,{children:"Timer App"}),Object(C.jsx)(N,{setTimeLeft:r,setIsPaused:a}),n<0?Object(C.jsx)(Z,{setTimeLeft:r,setIsPaused:a}):Object(C.jsx)(W,{timeLeft:n,setTimeLeft:r,isPaused:i,setIsPaused:a}),Object(C.jsx)("br",{}),Object(C.jsx)("h2",{align:"center",children:"OR ..."}),Object(C.jsx)("br",{}),Object(C.jsx)(te,{setTimeLeft:u,setIsPaused:x}),b<0?Object(C.jsx)(be,{setTimeLeft:u,setIsPaused:x}):Object(C.jsx)(ae,{timeLeft:b,setTimeLeft:u,isPaused:m,setIsPaused:x})]})};L.a.render(Object(C.jsx)(T.a.StrictMode,{children:Object(C.jsx)(de,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.9c33237a.chunk.js.map