(this["webpackJsonpmessenger-app"]=this["webpackJsonpmessenger-app"]||[]).push([[0],{145:function(e,t,n){},205:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(10),c=n.n(s),o=(n(145),n(246)),i=n(50),u=n(13),l=n(79),d=n(120),p=n.n(d),h=n(121),b=n(44),j="GET_USER",f="SET_FETCHING_STATUS",m=function(e){return{type:j,user:e}},g=function(e){return{type:f,isFetching:e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return t.user;case f:return Object(b.a)(Object(b.a)({},e),{},{isFetching:t.isFetching});default:return e}},O=n(92),v=function(e,t){var n=t.message,r=t.sender;if(null!==r){var a={id:n.conversationId,otherUser:r,messages:[n]};return a.latestMessageText=n.text,[a].concat(Object(O.a)(e))}return e.map((function(e){if(e.id===n.conversationId){var t=Object(b.a)({},e);return t.messages.push(n),t.latestMessageText=n.text,t}return e}))},y=function(e){var t={};return e.forEach((function(e){e.message.read||t.push(e.message)})),t},w=function(e,t,n){return e.map((function(e){if(e.otherUser.id===t){var r=Object(b.a)({},e);return r.otherUser.online=!0,r.otherUser.socketId=n,r}return e}))},S=function(e,t){return e.map((function(e){if(e.otherUser.id===t.id){var n=Object(b.a)({},e);return n.otherUser.online=!1,n.otherUser.socketId="",n}return e}))},k=function(e,t){var n={};e.forEach((function(e){n[e.otherUser.id]=!0}));var r=Object(O.a)(e);return t.forEach((function(e){if(!n[e.id]){var t={otherUser:e,messages:[]};r.push(t)}})),r},C=function(e,t,n){return e.map((function(e){if(e.otherUser.id===t){var r=Object(b.a)({},e);return r.id=n.conversationId,r.messages.push(n),r.latestMessageText=n.text,r}return e}))},N="GET_CONVERSATIONS",I="SET_MESSAGE",U="ADD_ONLINE_USER",E="REMOVE_OFFLINE_USER",F="SET_SEARCHED_USERS",D="CLEAR_SEARCHED_USERS",A="ADD_CONVERSATION",R="ADD_UNREAD_MESSAGES",T=function(e,t){return{type:I,payload:{message:e,sender:t||null}}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return t.conversations;case I:return v(e,t.payload);case R:return y(e);case U:return w(e,t.id,t.socketId);case E:return S(e,t.user);case F:return k(e,t.users);case D:return e.filter((function(e){return e.id}));case A:return C(e,t.payload.recipientId,t.payload.newMessage);default:return e}},B="SET_ACTIVE_CHAT",W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return t.username;default:return e}},z="CLEAR_ON_LOGOUT",P=Object(l.b)({user:x,conversations:L,activeConversation:W}),_=Object(l.c)((function(e,t){return t.type===z&&(e=void 0),P(e,t)}),Object(l.a)(h.a,p.a)),M=n(130),G=Object(M.a)({typography:{fontFamily:"Open Sans, sans-serif",fontSize:14,button:{textTransform:"none",letterSpacing:0,fontWeight:"bold"}},overrides:{MuiInput:{input:{fontWeight:"bold"}}},palette:{primary:{main:"#3A8DFF"},secondary:{main:"#B0B0B0"}}}),q=n(27),H=n(16),V=n(7),J=n.n(V),$=n(12),K=n(35),Q=n.n(K),X=n(125),Y=Object(X.io)(window.location.origin,{transports:["polling"]},{reconnectionAttempts:5});Y.on("connect",(function(){console.log("connected to server!"),console.log(Y.id),Y.on("add-online-user",(function(e){var t=e.id,n=e.socketId;_.dispatch(function(e,t){return{type:U,id:e,socketId:t}}(t,n))})),Y.on("remove-offline-user",(function(e){_.dispatch(function(e){return{type:E,user:e}}(e))})),Y.on("new-message",(function(e){_.dispatch(T(e.message,e.sender))}))}));var Z=Y;Q.a.interceptors.request.use(function(){var e=Object($.a)(J.a.mark((function e(t){var n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("messenger-token");case 2:return n=e.sent,t.headers["x-access-token"]=n,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var ee=function(){var e=Object($.a)(J.a.mark((function e(t){var n,r;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.a.post("/api/messages",t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(e,t){var n={message:e.message,recipientId:t.recipientId,sender:e.sender};Z.emit("new-message",{messageData:n})},ne=function(){var e=Object($.a)(J.a.mark((function e(t){var n,r,a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.messages,e.next=4,Q.a.put("/api/messages/".concat(t.id),n);case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),re=n(235),ae=n(248),se=n(208),ce=n(249),oe=n(238),ie=n(247),ue=n(241),le=n(2),de=Object(u.b)((function(e){return{user:e.user}}),(function(e){return{register:function(t){e(function(e){return function(){var t=Object($.a)(J.a.mark((function t(n){var r,a,s;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Q.a.post("/auth/register",e);case 3:return r=t.sent,a=r.data,t.next=7,localStorage.setItem("messenger-token",a.token);case 7:n(m(a)),s=a.token,Z.auth={token:s},Z.connect(),Z.emit("go-online",a.id),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0),n(m({error:t.t0.response.data.error||"Server Error"}));case 18:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=Object(H.g)(),n=e.user,a=e.register,s=Object(r.useState)({}),c=Object(q.a)(s,2),o=c[0],i=c[1],u=function(){var e=Object($.a)(J.a.mark((function e(t){var n,r,s,c;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=t.target.username.value,r=t.target.email.value,s=t.target.password.value,c=t.target.confirmPassword.value,s===c){e.next=8;break}return i({confirmPassword:"Passwords must match"}),e.abrupt("return");case 8:return e.next=10,a({username:n,email:r,password:s});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n.id?Object(le.jsx)(H.a,{to:"/home"}):Object(le.jsx)(re.a,{container:!0,justify:"center",children:Object(le.jsxs)(ae.a,{children:[Object(le.jsxs)(re.a,{container:!0,item:!0,children:[Object(le.jsx)(se.a,{children:"Need to log in?"}),Object(le.jsx)(ce.a,{onClick:function(){return t.push("/login")},children:"Login"})]}),Object(le.jsx)("form",{onSubmit:u,children:Object(le.jsxs)(re.a,{children:[Object(le.jsx)(re.a,{children:Object(le.jsx)(oe.a,{children:Object(le.jsx)(ie.a,{"aria-label":"username",label:"Username",name:"username",type:"text",required:!0})})}),Object(le.jsx)(re.a,{children:Object(le.jsx)(oe.a,{children:Object(le.jsx)(ie.a,{label:"E-mail address","aria-label":"e-mail address",type:"email",name:"email",required:!0})})}),Object(le.jsx)(re.a,{children:Object(le.jsxs)(oe.a,{error:!!o.confirmPassword,children:[Object(le.jsx)(ie.a,{"aria-label":"password",label:"Password",type:"password",inputProps:{minLength:6},name:"password",required:!0}),Object(le.jsx)(ue.a,{children:o.confirmPassword})]})}),Object(le.jsx)(re.a,{children:Object(le.jsxs)(oe.a,{error:!!o.confirmPassword,children:[Object(le.jsx)(ie.a,{label:"Confirm Password","aria-label":"confirm password",type:"password",inputProps:{minLength:6},name:"confirmPassword",required:!0}),Object(le.jsx)(ue.a,{children:o.confirmPassword})]})}),Object(le.jsx)(ce.a,{type:"submit",variant:"contained",size:"large",children:"Create"})]})})]})})})),pe=n.p+"static/media/bubble.c9bd866c.svg",he=n.p+"static/media/bg-img.0c5628a9.png",be=n(242),je=n(243),fe=Object(be.a)((function(){return{root:{height:"100vh"},button:{margin:"20px 10px 30px 10px",padding:"10px 50px"},heading:{margin:"10px 10px 10px 0px",padding:"10px 30px 10px 0px"},sidebar:{backgroundImage:"url(".concat(he,")"),backgroundRepeat:"no-repeat",textAlign:"center",width:"100%",backgroundSize:"cover",margin:"0"},sidebarOverlay:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundImage:"linear-gradient(to top, #3A8DFF, #86B9FF)",opacity:"85%",width:"100%",height:"100%",backgroundSize:"cover",color:"white",fontFamily:"OpenSans - semibold, regular"},paper:{display:"flex",flexDirection:"column",padding:"0 50px",marginLeft:"30px"},form:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"20px"}}})),me=Object(u.b)((function(e){return{user:e.user}}),(function(e){return{login:function(t){e(function(e){return function(){var t=Object($.a)(J.a.mark((function t(n){var r,a,s;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Q.a.post("/auth/login",e);case 3:return r=t.sent,a=r.data,t.next=7,localStorage.setItem("messenger-token",a.token);case 7:n(m(a)),s=a.token,Z.auth={token:s},Z.connect(),Z.emit("go-online",a.id),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(0),console.error(t.t0),n(m({error:t.t0.response.data.error||"Server Error"}));case 18:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=Object(H.g)(),n=e.user,r=e.login,a=fe(),s=function(){var e=Object($.a)(J.a.mark((function e(t){var n,a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.username.value,a=t.target.password.value,e.next=5,r({username:n,password:a});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n.id?Object(le.jsx)(H.a,{to:"/home"}):Object(le.jsxs)(re.a,{container:!0,justify:"center",className:a.root,children:[Object(le.jsx)(re.a,{item:!0,xs:!1,sm:!1,md:5,lg:5,className:a.sidebar,children:Object(le.jsxs)(ae.a,{className:a.sidebarOverlay,children:[Object(le.jsx)("img",{src:pe,alt:"chat bubble",className:a.button}),Object(le.jsxs)(se.a,{variant:"h4",className:a.button,children:["Converse with anyone",Object(le.jsx)("br",{}),"with any language"]})]})}),Object(le.jsx)(re.a,{item:!0,xs:12,sm:12,md:7,lg:7,children:Object(le.jsxs)(ae.a,{className:a.paper,children:[Object(le.jsxs)(re.a,{container:!0,justifyContent:"flex-end",alignItems:"center",md:12,children:[Object(le.jsx)(se.a,{className:a.heading,children:"Need to register?"}),Object(le.jsx)(ce.a,{onClick:function(){return t.push("/register")},className:a.heading,color:"primary",size:"large",children:"Register"})]}),Object(le.jsx)("form",{onSubmit:s,className:a.form,children:Object(le.jsxs)(re.a,{container:!0,md:9,children:[Object(le.jsx)(se.a,{variant:"h5",justify:"flex-start",className:a.heading,children:"Welcome Back!"}),Object(le.jsxs)(re.a,{container:!0,justifyContent:"center",md:12,children:[Object(le.jsx)(oe.a,{margin:"normal",required:!0,fullWidth:!0,children:Object(le.jsx)(ie.a,{color:"primary",margin:"normal","aria-label":"username",label:"Username",name:"username",type:"text"})}),Object(le.jsx)(oe.a,{margin:"normal",required:!0,fullWidth:!0,children:Object(le.jsx)(ie.a,{color:"primary",margin:"normal",label:"password","aria-label":"password",type:"password",name:"password",InputProps:{endAdornment:Object(le.jsx)(je.a,{position:"end",children:Object(le.jsx)(ce.a,{color:"primary",children:"Forgot?"})})}})})]}),Object(le.jsx)(re.a,{container:!0,item:!0,justifyContent:"center",md:12,children:Object(le.jsx)(ce.a,{type:"submit",variant:"contained",size:"large",color:"primary",className:a.button,children:"Login"})})]})})]})})]})})),ge=n(56),xe=n(57),Oe=n(59),ve=n(58),ye=n(5),we=n(245),Se=Object(be.a)((function(e){return{root:{display:"flex",justifyContent:"space-between",marginLeft:20,flexGrow:1},username:{fontWeight:"bold",letterSpacing:-.2},previewText:{fontSize:12,color:"#9CADC8",letterSpacing:-.17},previewTextNew:{fontSize:12,color:"black",letterSpacing:-.17,fontWeight:"bold"},badge:{},notification:{height:20,width:20,backgroundColor:"#3F92FF",marginRight:10,color:"white",fontSize:10,letterSpacing:-.5,fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:10}}})),ke=function(e){var t=Se(),n=e.conversation,a=n.latestMessageText,s=n.otherUser,c=Object(r.useState)([]),o=Object(q.a)(c,2),i=o[0],u=o[1];return Object(r.useEffect)((function(){n.messages.map((function(e){return e.read||e.senderId!==s.id?u(i):u((function(t){return t+e.id})),i}))}),[a]),Object(le.jsx)(ae.a,{className:t.root,onClick:function(){return u([])},children:Object(le.jsxs)(ae.a,{className:t.root,children:[Object(le.jsxs)(ae.a,{children:[Object(le.jsx)(se.a,{className:t.username,children:s.username}),Object(le.jsx)(se.a,{className:i.length>0?t.previewTextNew:t.previewText,children:a})]}),i.length>0&&Object(le.jsx)("span",{className:t.notification,children:i.length})]})})},Ce=n(78),Ne=n.n(Ce),Ie=Object(be.a)((function(){return{root:{height:44,marginTop:23,marginLeft:6,display:"flex",alignItems:"center"},subContainer:{display:"flex",justifyContent:"space-between",alignItems:"center",flexGrow:1},username:{letterSpacing:-.23,fontSize:16,fontWeight:"bold",marginLeft:17},ellipsis:{color:"#95A7C4",marginRight:24,opacity:.5}}})),Ue=Object(u.b)((function(e){return{user:e.user}}))((function(e){var t=Ie(),n=e.user||{};return Object(le.jsxs)(ae.a,{className:t.root,children:[Object(le.jsx)(Me,{photoUrl:n.photoUrl,online:!0}),Object(le.jsxs)(ae.a,{className:t.subContainer,children:[Object(le.jsx)(se.a,{className:t.username,children:n.username}),Object(le.jsx)(Ne.a,{classes:{root:t.ellipsis}})]})]})})),Ee=n(239),Fe=n(127),De=n.n(Fe),Ae=function(e){Object(Oe.a)(n,e);var t=Object(ve.a)(n);function n(){var e;Object(ge.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).handleSubmit=function(e){e.preventDefault()},e}return Object(xe.a)(n,[{key:"render",value:function(){var e=this.props.classes;return Object(le.jsx)("form",{onSubmit:this.handleSubmit,children:Object(le.jsx)(oe.a,{fullWidth:!0,hiddenLabel:!0,children:Object(le.jsx)(Ee.a,{name:"search",onChange:this.props.handleChange,classes:{root:e.filledInput,input:e.input},disableUnderline:!0,placeholder:"Search",startAdornment:Object(le.jsx)(je.a,{position:"start",children:Object(le.jsx)(De.a,{})})})})})}}]),n}(r.Component),Re=Object(ye.a)({filledInput:{height:50,background:"#E9EEF9",borderRadius:5,fontSize:13,fontWeight:"bold",color:"#99A9C4",letterSpacing:0,display:"flex",justifyContent:"center",marginBottom:20},input:{"&::placeholder":{color:"#ADC0DE",opacity:1}}})(Ae),Te=Object(be.a)((function(){return{root:{paddingLeft:21,paddingRight:21,flexGrow:1},title:{fontSize:20,letterSpacing:-.29,fontWeight:"bold",marginTop:32,marginBottom:15}}})),Le=Object(u.b)((function(e){return{conversations:e.conversations}}))((function(e){var t=Te(),n=e.conversations||[],r=e.handleChange,a=e.searchTerm;return Object(le.jsxs)(ae.a,{className:t.root,children:[Object(le.jsx)(Ue,{}),Object(le.jsx)(se.a,{className:t.title,children:"Chats"}),Object(le.jsx)(Re,{handleChange:r}),n.filter((function(e){return e.otherUser.username.includes(a)})).map((function(e){return Object(le.jsx)(We,{conversation:e},e.otherUser.username)}))]})})),Be=Object(u.b)(null,(function(e){return{searchUsers:function(t){var n;e((n=t,function(){var e=Object($.a)(J.a.mark((function e(t){var r,a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q.a.get("/api/users/".concat(n));case 3:r=e.sent,a=r.data,t({type:F,users:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()))},clearSearchedUsers:function(){e({type:D})}}}))((function(e){var t=e.searchUsers,n=e.clearSearchedUsers,a=Object(r.useState)(""),s=Object(q.a)(a,2),c=s[0],o=s[1],i=function(){var e=Object($.a)(J.a.mark((function e(r){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r.target.value){e.next=4;break}return n(),o(""),e.abrupt("return");case 4:if(!c.includes(r.target.value)){e.next=7;break}return o(r.target.value),e.abrupt("return");case 7:return e.next=9,t(r.target.value);case 9:o(r.target.value);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(le.jsx)(Le,{handleChange:i,searchTerm:c})})),We=Object(u.b)(null,(function(e){return{setActiveChat:function(t){e({type:B,username:t})}}}))(Object(ye.a)({root:{borderRadius:8,height:80,boxShadow:"0 2px 10px 0 rgba(88,133,196,0.05)",marginBottom:10,display:"flex",alignItems:"center","&:hover":{cursor:"grab"}}})((function(e){var t=e.classes,n=e.conversation.otherUser,r=function(){var t=Object($.a)(J.a.mark((function t(n){return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setActiveChat(n.otherUser.username);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(le.jsxs)(ae.a,{onClick:function(){return r(e.conversation)},className:t.root,children:[Object(le.jsx)(Me,{photoUrl:n.photoUrl,username:n.username,online:n.online,sidebar:!0}),Object(le.jsx)(ke,{conversation:e.conversation})]})}))),ze=n(244),Pe=n(252),_e=Object(be.a)((function(){return{profilePic:{height:44,width:44},badge:{height:13,width:13,borderRadius:"50%",border:"2px solid white",backgroundColor:"#D0DAE9"},online:{backgroundColor:"#1CED84"},sidebar:{marginLeft:17}}})),Me=function(e){var t=_e(),n=e.sidebar,r=e.username,a=e.photoUrl,s=e.online;return Object(le.jsx)(ae.a,{className:n?t.sidebar:"",children:Object(le.jsx)(ze.a,{classes:{badge:"".concat(t.badge," ").concat(s&&t.online)},variant:"dot",anchorOrigin:{horizontal:"right",vertical:"bottom"},overlap:"circle",children:Object(le.jsx)(Pe.a,{alt:r,src:a,className:t.profilePic})})})},Ge=Object(be.a)((function(){return{root:{display:"flex",flexDirection:"column",alignItems:"flex-end"},date:{fontSize:11,color:"#BECCE2",fontWeight:"bold",marginBottom:5},text:{fontSize:14,color:"#91A3C0",letterSpacing:-.2,padding:8,fontWeight:"bold"},bubble:{background:"#F4F6FA",borderRadius:"10px 10px 0 10px"},seenBySelf:{display:"flex",flexDirection:"column",alignItems:"flex-end"},seenByOther:{display:"flex",flexDirection:"column",alignItems:"flex-start",marginLeft:41},receiptPic:{height:15,width:15,marginTop:5}}})),qe=function(e){var t=Ge(),n=e.time,r=e.text,a=e.otherUser,s=e.read,c=e.sendersRecent;return Object(le.jsxs)(ae.a,{className:t.root,children:[Object(le.jsx)(se.a,{className:t.date,children:n}),Object(le.jsx)(ae.a,{className:t.bubble,children:Object(le.jsx)(se.a,{className:t.text,children:r})}),s&&c.text===r?Object(le.jsx)(ae.a,{className:t.seenByOther,children:Object(le.jsx)(Pe.a,{className:t.receiptPic,src:a.photoUrl})}):""]})},He=Object(be.a)((function(){return{root:{display:"flex"},avatar:{height:30,width:30,marginRight:11,marginTop:6},usernameDate:{fontSize:11,color:"#BECCE2",fontWeight:"bold",marginBottom:5},bubble:{backgroundImage:"linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",borderRadius:"0 10px 10px 10px"},text:{fontSize:14,fontWeight:"bold",color:"#FFFFFF",letterSpacing:-.2,padding:8}}})),Ve=function(e){var t=He(),n=e.text,r=e.time,a=e.otherUser;return Object(le.jsxs)(ae.a,{className:t.root,children:[Object(le.jsx)(Pe.a,{alt:a.username,src:a.photoUrl,className:t.avatar}),Object(le.jsxs)(ae.a,{children:[Object(le.jsxs)(se.a,{className:t.usernameDate,children:[a.username," ",r]}),Object(le.jsx)(ae.a,{className:t.bubble,children:Object(le.jsx)(se.a,{className:t.text,children:n})})]})]})},Je=Object(be.a)((function(){return{root:{display:"flex",flexGrow:8,flexDirection:"column"},chatContainer:{marginLeft:41,marginRight:41,display:"flex",flexDirection:"column",flexGrow:1,justifyContent:"space-between"}}})),$e=Object(u.b)((function(e){return{user:e.user,conversation:e.conversations&&e.conversations.find((function(t){return t.otherUser.username===e.activeConversation}))}}),null)((function(e){var t=Je(),n=e.user,r=e.conversation||{};return Object(le.jsx)(ae.a,{className:t.root,children:r.otherUser&&Object(le.jsxs)(le.Fragment,{children:[Object(le.jsx)(Ye,{username:r.otherUser.username,online:r.otherUser.online||!1}),Object(le.jsxs)(ae.a,{className:t.chatContainer,children:[Object(le.jsx)(tt,{conversation:r,messages:r.messages,otherUser:r.otherUser,userId:n.id,user:n}),Object(le.jsx)(Qe,{otherUser:r.otherUser,conversationId:r.id,user:n})]})]})})})),Ke=function(e){Object(Oe.a)(n,e);var t=Object(ve.a)(n);function n(e){var r;return Object(ge.a)(this,n),(r=t.call(this,e)).handleChange=function(e){r.setState({text:e.target.value})},r.handleSubmit=function(){var e=Object($.a)(J.a.mark((function e(t){var n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={text:t.target.text.value,recipientId:r.props.otherUser.id,conversationId:r.props.conversationId,sender:r.props.conversationId?null:r.props.user},e.next=4,r.props.postMessage(n);case 4:r.setState({text:""});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.state={text:""},r}return Object(xe.a)(n,[{key:"render",value:function(){var e=this.props.classes;return Object(le.jsx)("form",{className:e.root,onSubmit:this.handleSubmit,children:Object(le.jsx)(oe.a,{fullWidth:!0,hiddenLabel:!0,children:Object(le.jsx)(Ee.a,{classes:{root:e.input},disableUnderline:!0,placeholder:"Type something...",value:this.state.text,name:"text",onChange:this.handleChange})})})}}]),n}(r.Component),Qe=Object(u.b)((function(e){return{user:e.user,conversations:e.conversations}}),(function(e){return{postMessage:function(t){var n;e((n=t,function(){var e=Object($.a)(J.a.mark((function e(t){var r;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee(n);case 3:r=e.sent,n.conversationId?t(T(r.message)):t((a=n.recipientId,s=r.message,{type:A,payload:{recipientId:a,newMessage:s}})),te(r,n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}var a,s}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()))}}}))(Object(ye.a)({root:{justifySelf:"flex-end",marginTop:15},input:{height:70,backgroundColor:"#F4F6FA",borderRadius:8,marginBottom:20}})(Ke)),Xe=Object(be.a)((function(e){return{root:{display:"flex",alignItems:"center",justifyContent:"space-between",height:89,marginBottom:34,boxShadow:"0 2px 20px 0 rgba(88,133,196,0.10)"},content:{display:"flex",alignItems:"center",marginLeft:24},username:{fontSize:20,letterSpacing:-.29,fontWeight:"bold",marginRight:14},statusText:{fontSize:12,color:"#BFC9DB",letterSpacing:-.17},statusDot:{height:8,width:8,borderRadius:"50%",marginRight:5,backgroundColor:"#D0DAE9"},online:{background:"#1CED84"},ellipsis:{color:"#95A7C4",marginRight:24,opacity:.5}}})),Ye=function(e){var t=Xe(),n=e.username,r=e.online;return Object(le.jsxs)(ae.a,{className:t.root,children:[Object(le.jsxs)(ae.a,{className:t.content,children:[Object(le.jsx)(se.a,{className:t.username,children:n}),Object(le.jsx)(ae.a,{className:"".concat(t.statusDot," ").concat(t[r&&"online"])}),Object(le.jsx)(se.a,{className:t.statusText,children:r?"Online":"Offline"})]}),Object(le.jsx)(Ne.a,{classes:{root:t.ellipsis}})]})},Ze=n(128),et=n.n(Ze),tt=function(e){var t=e.conversation,n=e.messages,a=e.otherUser,s=e.userId,c=n[n.length-1],o=Object(r.useState)(c),i=Object(q.a)(o,2),u=i[0],l=i[1],d=[c];return Object(r.useEffect)((function(){ne(t),l(d[d.length-1])}),[t,c]),Object(le.jsx)(ae.a,{children:n.map((function(e){var t=et()(e.createdAt).format("h:mm");return e.read&&e.senderId===s&&d.push(e),e.senderId===s?Object(le.jsx)(qe,{text:e.text,time:t,otherUser:a,recentMessage:c,read:e.read,sendersRecent:u},e.id):Object(le.jsx)(Ve,{text:e.text,time:t,otherUser:a,sendersRecent:u},e.id)}))})},nt=function(e){Object(Oe.a)(n,e);var t=Object(ve.a)(n);function n(e){var r;return Object(ge.a)(this,n),(r=t.call(this,e)).handleLogout=Object($.a)(J.a.mark((function e(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.props.logout(r.props.user.id);case 2:case"end":return e.stop()}}),e)}))),r.state={isLoggedIn:!1},r}return Object(xe.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.user.id!==e.user.id&&this.setState({isLoggedIn:!0})}},{key:"componentDidMount",value:function(){this.props.fetchConversations()}},{key:"render",value:function(){var e=this.props.classes;return this.props.user.id?Object(le.jsxs)(le.Fragment,{children:[Object(le.jsx)(ce.a,{className:e.logout,onClick:this.handleLogout,children:"Logout"}),Object(le.jsxs)(re.a,{container:!0,component:"main",className:e.root,children:[Object(le.jsx)(we.a,{}),Object(le.jsx)(Be,{}),Object(le.jsx)($e,{})]})]}):this.state.isLoggedIn?Object(le.jsx)(H.a,{to:"/login"}):Object(le.jsx)(H.a,{to:"/register"})}}]),n}(r.Component),rt=Object(u.b)((function(e){return{user:e.user,conversations:e.conversations}}),(function(e){return{logout:function(t){e(function(e){return function(){var t=Object($.a)(J.a.mark((function t(n){return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Q.a.delete("/auth/logout");case 3:return t.next=5,localStorage.removeItem("messenger-token");case 5:n(m({})),Z.emit("logout",e),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(t)),e({type:z})},fetchConversations:function(){e(function(){var e=Object($.a)(J.a.mark((function e(t){var n,r;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q.a.get("/api/conversations");case 3:n=e.sent,r=n.data,t({type:N,conversations:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}}}))(Object(ye.a)({root:{height:"97vh"}})(nt)),at=n(251),st=n(129),ct=n.n(st),ot=Object(be.a)((function(e){return{snackbar:{backgroundColor:"red",fontWeight:"bold"},icon:{color:"white"}}})),it=function(e){var t=ot();return Object(le.jsx)(at.a,{open:e.snackBarOpen,onClose:function(){return e.setSnackBarOpen(!1)},message:e.errorMessage||"Sorry, an error occured. Please try again",action:Object(le.jsx)(a.a.Fragment,{children:Object(le.jsx)(ce.a,{className:t.icon,size:"small",onClick:function(){return e.setSnackBarOpen(!1)},children:Object(le.jsx)(ct.a,{color:"secondary"})})}),ContentProps:{classes:{root:t.snackbar}}})},ut=Object(H.h)(Object(u.b)((function(e){return{user:e.user}}),(function(e){return{fetchUser:function(){e(function(){var e=Object($.a)(J.a.mark((function e(t){var n,r;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g(!0)),e.prev=1,e.next=4,Q.a.get("/auth/user");case 4:n=e.sent,r=n.data,t(m(r)),Z.connect(),r.id&&Z.emit("go-online",r.id),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:return e.prev=14,t(g(!1)),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=e.user,n=e.fetchUser,a=Object(r.useState)(""),s=Object(q.a)(a,2),c=s[0],o=s[1],i=Object(r.useState)(!1),u=Object(q.a)(i,2),l=u[0],d=u[1];return Object(r.useEffect)((function(){n()}),[n]),Object(r.useEffect)((function(){t.error&&("string"===typeof t.error?o(t.error):o("Internal Server Error. Please try again"),d(!0))}),[t.error]),e.user.isFetchingUser?Object(le.jsx)("div",{children:"Loading..."}):Object(le.jsxs)(le.Fragment,{children:[l&&Object(le.jsx)(it,{setSnackBarOpen:d,errorMessage:c,snackBarOpen:l}),Object(le.jsxs)(H.d,{children:[Object(le.jsx)(H.b,{path:"/login",component:me}),Object(le.jsx)(H.b,{path:"/register",component:de}),Object(le.jsx)(H.b,{exact:!0,path:"/",render:function(e){var t;return(null===(t=e.user)||void 0===t?void 0:t.id)?Object(le.jsx)(rt,{}):Object(le.jsx)(de,{})}}),Object(le.jsx)(H.b,{path:"/home",component:rt})]})]})})));var lt=function(){return Object(le.jsx)(u.a,{store:_,children:Object(le.jsx)(o.a,{theme:G,children:Object(le.jsx)(i.a,{children:Object(le.jsx)(ut,{})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(le.jsx)(lt,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[205,1,2]]]);
//# sourceMappingURL=main.fed24ee6.chunk.js.map