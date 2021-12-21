(this.webpackJsonpinotebook=this.webpackJsonpinotebook||[]).push([[0],{72:function(e,t,a){},73:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(23),r=a.n(c),o=(a(72),a(73),a(74),a(30)),i=a(9),l=a(90),j=a(86),d=a(88),b=a(29),u=a(2),h=function(){var e=Object(i.t)();return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(l.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(b.LinkContainer,{to:"#",children:Object(u.jsx)(l.a.Brand,{children:"iNoteBook"})}),Object(u.jsx)(l.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(u.jsxs)(l.a.Collapse,{id:"responsive-navbar-nav",children:[Object(u.jsxs)(d.a,{className:"me-auto",children:[Object(u.jsx)(b.LinkContainer,{to:"/",children:Object(u.jsx)(d.a.Link,{children:"Home"})}),Object(u.jsx)(b.LinkContainer,{to:"/about",children:Object(u.jsx)(d.a.Link,{children:"About"})})]}),localStorage.getItem("token")?Object(u.jsxs)(d.a,{children:[Object(u.jsx)(b.LinkContainer,{to:"/details",children:Object(u.jsx)(d.a.Link,{children:"User Details"})}),Object(u.jsx)(b.LinkContainer,{to:"/contact",children:Object(u.jsx)(d.a.Link,{children:"Contact Me"})}),Object(u.jsx)(d.a.Link,{onClick:function(){localStorage.removeItem("token"),e("/login")},children:"Logout"})]}):Object(u.jsxs)(d.a,{children:[Object(u.jsx)(b.LinkContainer,{to:"/login",children:Object(u.jsx)(d.a.Link,{children:"Login"})}),Object(u.jsx)(b.LinkContainer,{to:"/signup",children:Object(u.jsx)(d.a.Link,{children:"Signup"})})]})]})]})})})},m=Object(n.createContext)(),p=a(92),x=a(64),O=a(65),g=function(e){var t=e.singleNote,a=Object(n.useContext)(m),s=a.deleteNote,c=a.handleShow;return Object(u.jsx)("div",{className:"col-md-3",children:Object(u.jsx)(p.a,{className:"my-3",children:Object(u.jsxs)(p.a.Body,{className:"height-same",children:[Object(u.jsxs)("div",{className:"d-flex align-items-start justify-content-between",children:[Object(u.jsx)(p.a.Title,{children:t.title}),Object(u.jsxs)("div",{className:"d-flex",children:[Object(u.jsx)(x.a,{className:"cursor-pointer mx-2",onClick:function(){return s(t._id)}}),Object(u.jsx)(O.a,{className:"cursor-pointer mx-2",onClick:function(){return c(t)}})]})]}),Object(u.jsx)(p.a.Text,{children:t.description})]})})})},f=a(8),N=a(3),v=a(7),w=a(89),y=a(87),k=function(){var e=Object(n.useContext)(m).addNote,t=Object(n.useState)({title:"",description:"",tag:""}),a=Object(v.a)(t,2),s=a[0],c=a[1],r=function(e){c(Object(N.a)(Object(N.a)({},s),{},Object(f.a)({},e.target.name,e.target.value)))};return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"container light-shadow",children:[Object(u.jsx)("h2",{className:"text-center",children:"Add A Note"}),Object(u.jsxs)(w.a,{className:"my-3",onSubmit:function(t){t.preventDefault(),s.title&&s.description&&e(s),c({title:"",description:"",tag:""})},children:[Object(u.jsxs)(w.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(u.jsx)(w.a.Label,{children:Object(u.jsx)("span",{className:"font-weight-bold font-size-increase",children:"Title"})}),Object(u.jsx)(w.a.Control,{type:"text",minLength:3,required:!0,placeholder:"Enter Title",name:"title",value:s.title,onChange:r})]}),Object(u.jsxs)(w.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(u.jsx)(w.a.Label,{children:Object(u.jsx)("span",{className:"font-weight-bold font-size-increase",children:"Description"})}),Object(u.jsx)(w.a.Control,{required:!0,minLength:5,type:"text",placeholder:"Description",name:"description",value:s.description,onChange:r})]}),Object(u.jsxs)(w.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(u.jsx)(w.a.Label,{children:Object(u.jsx)("span",{className:"font-weight-bold font-size-increase",children:"Tag"})}),Object(u.jsx)(w.a.Control,{type:"text",placeholder:"Tag",name:"tag",value:s.tag,onChange:r})]}),Object(u.jsx)(y.a,{variant:"dark",type:"submit",style:{display:"block",margin:"0 auto",padding:"7px 140px"},disabled:s.title.length<3||s.description.length<5,children:"Add Note"})]})]})})},C=a(91),S=function(){var e=Object(n.useContext)(m),t=e.handleClose,a=e.show,s=e.note,c=e.setNote,r=e.editNote,o=e.showAlert,i=function(e){c(Object(N.a)(Object(N.a)({},s),{},Object(f.a)({},e.target.name,e.target.value)))};return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(C.a,{show:a,onHide:t,backdrop:"static",keyboard:!1,children:[Object(u.jsx)(C.a.Header,{closeButton:!0,children:Object(u.jsx)(C.a.Title,{children:"Edit Note"})}),Object(u.jsx)(C.a.Body,{children:Object(u.jsxs)(w.a,{className:"my-3",children:[Object(u.jsxs)(w.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(u.jsx)(w.a.Label,{children:"Title"}),Object(u.jsx)(w.a.Control,{type:"text",placeholder:"Enter Title",name:"etitle",value:s.etitle,onChange:i,required:!0,minLength:3})]}),Object(u.jsxs)(w.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(u.jsx)(w.a.Label,{children:"Description"}),Object(u.jsx)(w.a.Control,{type:"text",placeholder:"Description",name:"edescription",value:s.edescription,onChange:i,required:!0,minLength:5})]}),Object(u.jsxs)(w.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(u.jsx)(w.a.Label,{children:"Tag"}),Object(u.jsx)(w.a.Control,{type:"text",placeholder:"Tag",name:"etag",value:s.etag,onChange:i})]})]})}),Object(u.jsxs)(C.a.Footer,{children:[Object(u.jsx)(y.a,{variant:"secondary",onClick:t,children:"Close"}),Object(u.jsx)(y.a,{disabled:s.etitle.length<3||s.edescription.length<5,onClick:function(e){e.preventDefault(),r(s.id,s.etitle,s.edescription,s.etag),o("Updated Successfully","success"),t()},variant:"dark",type:"submit",children:"Update Note"})]})]})})},L=function(){var e=Object(n.useContext)(m),t=e.notes,a=e.getNotes,s=Object(i.t)();return Object(n.useEffect)((function(){localStorage.getItem("token")?a():s("/login",{replace:!0})}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(k,{}),Object(u.jsx)(S,{}),Object(u.jsxs)("div",{className:"row my-5 light-shadow",style:{width:"100%",marginLeft:"0em"},children:[Object(u.jsx)("h2",{className:"text-center",children:"Your Notes"}),Object(u.jsx)("div",{className:"container mx-2",children:0===t.length&&"No Notes To Display..."}),t.map((function(e){return Object(u.jsx)(g,{singleNote:e},e._id)}))]})]})},E=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(L,{})})},T=a.p+"static/media/Arham.4f7e8674.jpg",I=function(){return Object(u.jsx)("div",{className:"aboutCenter",children:Object(u.jsxs)(p.a,{style:{width:"18rem",borderRadius:"18px",background:"rgb(250, 248, 248)"},className:"aboutCard",children:[Object(u.jsx)(p.a.Img,{variant:"top",src:T,style:{width:"50%"},className:"aboutImage"}),Object(u.jsxs)(p.a.Body,{className:"text-center",children:[Object(u.jsx)(p.a.Title,{className:"text-center my-3",children:Object(u.jsx)("h4",{style:{color:"#11061A"},children:"Arham Khawar"})}),Object(u.jsx)(p.a.Text,{className:"aboutTitle my-3",children:"MERN Developer"}),Object(u.jsx)(p.a.Text,{style:{color:"rgba(87, 72, 99,1)"},children:"Project: iNoteBook"}),Object(u.jsx)(y.a,{variant:"dark",className:"aboutButton mt-2",style:{backgroundColor:"#000"},href:"mailto:ch.arham1220@gmail.com",children:"Contact Me"})]})]})})},B=a(54),P=a(11),A=a.n(P),G=a(21),z=function(e){var t=e.children,a=Object(n.useState)(null),s=Object(v.a)(a,2),c=s[0],r=s[1],o=function(e,t){r({msg:e,type:t}),setTimeout((function(){r(null)}),1500)},i=Object(n.useState)(!1),l=Object(v.a)(i,2),j=l[0],d=l[1],b=Object(n.useState)({id:"",etitle:"",edescription:"",etag:""}),h=Object(v.a)(b,2),p=h[0],x=h[1],O="http://localhost:5000",g=Object(n.useState)([]),f=Object(v.a)(g,2),N=f[0],w=f[1],y=function(){var e=Object(G.a)(A.a.mark((function e(){var t,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"/api/notes/fetchallnotes"),{method:"GET",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,w(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(G.a)(A.a.mark((function e(t){var a,n,s,c,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.title,n=t.description,s=t.tag,e.next=3,fetch("".concat(O,"/api/notes/addnote"),{method:"POST",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")},body:JSON.stringify({title:a,description:n,tag:s})});case 3:return c=e.sent,e.next=6,c.json();case 6:r=e.sent,w([].concat(Object(B.a)(N),[r])),o("Note Added Successfully","success");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(G.a)(A.a.mark((function e(t){var a,n,s;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"/api/notes/deletenote/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}});case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,console.log(n),s=N.filter((function(e){return e._id!==t})),w(s),o("Note Is Deleted Successfully","success"),window.scrollTo(0,0);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(G.a)(A.a.mark((function e(t,a,n,s){var c,r,i,l;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"/api/notes/updatenote/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")},body:JSON.stringify({title:a,description:n,tag:s})});case 2:return c=e.sent,e.next=5,c.json();case 5:r=e.sent,console.log(r),i=JSON.parse(JSON.stringify(N)),l=0;case 9:if(!(l<i.length)){e.next=19;break}if(i[l]._id!==t){e.next=16;break}return i[l].title=a,i[l].description=n,i[l].tag=s,e.abrupt("break",19);case 16:l++,e.next=9;break;case 19:w(i),o("Note Is Edited Successfully","success"),window.scrollTo(0,0);case 22:case"end":return e.stop()}}),e)})));return function(t,a,n,s){return e.apply(this,arguments)}}();return Object(u.jsx)(m.Provider,{value:{notes:N,addNote:k,deleteNote:C,editNote:S,getNotes:y,handleClose:function(){return d(!1)},handleShow:function(e){d(!0),x({id:e._id,etitle:e.title,edescription:e.description,etag:e.tag})},show:j,note:p,setNote:x,alert:c,setAlert:r,showAlert:o},children:t})},_=a(0),D=function(){var e=Object(n.useContext)(m).alert;return Object(u.jsx)("div",{style:{height:"50px"},children:e&&Object(u.jsxs)("div",{className:"alert alert-".concat(e.type," alert-dismissible fade show"),role:"alert",children:[Object(u.jsx)("strong",{children:function(e){"danger"===e&&(e="error");var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.type)}),": ",e.msg]})})},q=a.p+"static/media/back.ac12a8bc.jpg",F=function(){var e=Object(n.useContext)(m).showAlert,t=Object(n.useState)({email:"",password:""}),a=Object(v.a)(t,2),s=a[0],c=a[1],r=Object(i.t)(),o=function(e){c(Object(N.a)(Object(N.a)({},s),{},Object(f.a)({},e.target.name,e.target.value)))},l=function(){var t=Object(G.a)(A.a.mark((function t(a){var n,o,i,l;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=s.email,o=s.password,t.next=4,fetch("http://localhost:5000/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:o})});case 4:return i=t.sent,t.next=7,i.json();case 7:(l=t.sent).success?(localStorage.setItem("token",l.authToken),e("Logged in Successfully","success"),r("/",{replace:!0})):e("Enter Valid Credentials","danger"),c({email:"",password:""});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"container light-shadow my-3",children:[Object(u.jsx)("h2",{className:"text-center",children:"Login - To Use iNoteBook"}),Object(u.jsxs)(w.a,{className:"my-3",onSubmit:l,children:[Object(u.jsxs)(w.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(u.jsx)(w.a.Label,{children:Object(u.jsx)("span",{className:"font-weight-bold font-size-increase",children:"Email"})}),Object(u.jsx)(w.a.Control,{type:"email",required:!0,placeholder:"Enter Email",name:"email",value:s.email,onChange:o})]}),Object(u.jsxs)(w.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(u.jsx)(w.a.Label,{children:Object(u.jsx)("span",{className:"font-weight-bold font-size-increase",children:"Password"})}),Object(u.jsx)(w.a.Control,{required:!0,type:"password",placeholder:"password",name:"password",value:s.password,onChange:o})]}),Object(u.jsx)(y.a,{variant:"dark",type:"submit",style:{display:"block",margin:"0 auto",padding:"7px 140px"},children:"Login"})]})]})},J=function(){var e=Object(n.useContext)(m).showAlert,t=Object(n.useState)({name:"",email:"",password:"",cpassword:""}),a=Object(v.a)(t,2),s=a[0],c=a[1],r=Object(i.t)(),o=function(e){c(Object(N.a)(Object(N.a)({},s),{},Object(f.a)({},e.target.name,e.target.value)))},l=function(){var t=Object(G.a)(A.a.mark((function t(a){var n,o,i,l,j;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=s.name,o=s.email,i=s.password,t.next=4,fetch("http://localhost:5000/api/auth/createuser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:o,password:i})});case 4:return l=t.sent,t.next=7,l.json();case 7:j=t.sent,console.log(j),j.success?(localStorage.setItem("token",j.authToken),e("Account Created Successfully","success"),r("/",{replace:!0})):e("Invalid Credentials","danger"),c({name:"",email:"",password:""});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"container light-shadow mt-3",children:[Object(u.jsx)("h2",{className:"text-center",children:"Signup - Create An Account"}),Object(u.jsxs)(w.a,{className:"my-3",onSubmit:l,children:[Object(u.jsxs)(w.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(u.jsx)(w.a.Label,{children:Object(u.jsx)("span",{className:"font-weight-bold font-size-increase",children:"Name"})}),Object(u.jsx)(w.a.Control,{type:"text",required:!0,placeholder:"Enter Name",name:"name",minLength:3,value:s.name,onChange:o})]}),Object(u.jsxs)(w.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(u.jsx)(w.a.Label,{children:Object(u.jsx)("span",{className:"font-weight-bold font-size-increase",children:"Email"})}),Object(u.jsx)(w.a.Control,{type:"email",required:!0,placeholder:"Enter Email",name:"email",value:s.email,onChange:o})]}),Object(u.jsxs)(w.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(u.jsx)(w.a.Label,{className:"font-weight-bold font-size-increase",children:"Password"}),Object(u.jsx)(w.a.Control,{required:!0,type:"password",placeholder:"password",name:"password",minLength:5,value:s.password,onChange:o})]}),Object(u.jsxs)(w.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(u.jsx)(w.a.Label,{className:"font-weight-bold font-size-increase",children:"Confirm Password"}),Object(u.jsx)(w.a.Control,{required:!0,type:"password",placeholder:"confirm password",name:"cpassword",minLength:5,value:s.cpassword,onChange:o})]}),Object(u.jsx)(y.a,{variant:"dark",type:"submit",style:{display:"block",margin:"0 auto",padding:"7px 140px"},children:"Signup"})]})]})},U=function(){var e=Object(n.useState)({name:"",email:""}),t=Object(v.a)(e,2),a=t[0],s=t[1],c=function(){var e=Object(G.a)(A.a.mark((function e(){var t,a,n,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/api/auth/getuser",{method:"POST",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=a.name,c=a.email,s({name:n,email:c});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){c()}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"container light-shadow",children:[Object(u.jsx)("h2",{className:"text-center",children:"User Details"}),Object(u.jsxs)(w.a,{className:"my-3",children:[Object(u.jsxs)(w.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(u.jsx)(w.a.Label,{children:Object(u.jsx)("span",{className:"font-weight-bold font-size-increase",children:"Name"})}),Object(u.jsx)(w.a.Control,{type:"text",value:a.name,readOnly:!0})]}),Object(u.jsxs)(w.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(u.jsx)(w.a.Label,{children:Object(u.jsx)("span",{className:"font-weight-bold font-size-increase",children:"Email"})}),Object(u.jsx)(w.a.Control,{type:"text",value:a.email,readOnly:!0})]})]})]})})},M=a(66),R=function(){var e=Object(n.useContext)(m).showAlert,t=Object(n.useRef)(),a=Object(n.useState)({user_email:"",user_name:"",message:""}),s=Object(v.a)(a,2),c=s[0],r=s[1],o=function(e){r(Object(N.a)(Object(N.a)({},c),{},Object(f.a)({},e.target.name,e.target.value)))};return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"container light-shadow",children:[Object(u.jsx)("h2",{className:"text-center",children:"Contact Me - Gmail"}),Object(u.jsxs)(w.a,{ref:t,className:"my-3",onSubmit:function(a){a.preventDefault(),M.a.sendForm("service_k86blgn","template_s2fpakk",t.current,"user_gA7w7crYpyzZBsmFJ05xU").then((function(t){console.log(t.text),e("Email Sent Successfully","success")}),(function(t){console.log(t.text),e("Email Was Not Sent. Enter Correct Details","danger")})),r({user_email:"",user_name:"",message:""})},children:[Object(u.jsxs)(w.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(u.jsx)(w.a.Label,{children:Object(u.jsx)("span",{className:"font-weight-bold font-size-increase",children:"Name"})}),Object(u.jsx)(w.a.Control,{required:!0,minLength:3,type:"text",placeholder:"Enter Name",name:"user_name",value:c.user_name,onChange:o})]}),Object(u.jsxs)(w.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(u.jsx)(w.a.Label,{children:Object(u.jsx)("span",{className:"font-weight-bold font-size-increase",children:"Email"})}),Object(u.jsx)(w.a.Control,{type:"email",required:!0,placeholder:"Enter Email",name:"user_email",value:c.user_email,onChange:o})]}),Object(u.jsxs)(w.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(u.jsx)(w.a.Label,{children:Object(u.jsx)("span",{className:"font-weight-bold font-size-increase",children:"Message"})}),Object(u.jsx)(w.a.Control,{type:"text",placeholder:"Enter Message",required:!0,value:c.message,name:"message",minLength:5,onChange:o})]}),Object(u.jsx)(y.a,{variant:"dark",type:"submit",style:{display:"block",margin:"0 auto",padding:"7px 140px"},disabled:c.user_name.length<3||c.message.length<5,children:"Send Email"})]})]})})};var H=function(){return Object(u.jsx)("div",{style:{backgroundImage:"url(".concat(q,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",minHeight:"100vh",overflow:"hidden"},children:Object(u.jsx)(_.b.Provider,{value:{size:"1.1em"},children:Object(u.jsx)(z,{children:Object(u.jsxs)(o.BrowserRouter,{children:[Object(u.jsx)(h,{}),Object(u.jsx)(D,{}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(i.f,{children:[Object(u.jsx)(i.d,{element:Object(u.jsx)(E,{}),path:"/"}),Object(u.jsx)(i.d,{exact:!0,element:Object(u.jsx)(I,{}),path:"/about"}),Object(u.jsx)(i.d,{exact:!0,element:Object(u.jsx)(F,{}),path:"/login"}),Object(u.jsx)(i.d,{exact:!0,element:Object(u.jsx)(J,{}),path:"/signup"}),Object(u.jsx)(i.d,{exact:!0,element:Object(u.jsx)(U,{}),path:"/details"}),Object(u.jsx)(i.d,{exact:!0,element:Object(u.jsx)(R,{}),path:"/contact"})]})})]})})})})};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(H,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.30aacd8f.chunk.js.map