"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[348],{6348:(s,e,t)=>{t.r(e),t.d(e,{default:()=>C});var i=t(5043),r=t(2227);const o={posts:"Myposts_posts__xztYx"},n="Posts_item__I-50n";var a=t(579);const l=s=>(0,a.jsxs)("div",{className:n,children:[(0,a.jsx)("img",{src:"https://avatars.mds.yandex.net/i?id=52240bacda679e53d72a7c9501b781dae3626eab-13079178-images-thumbs&n=13"}),s.message,(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{children:"Like"})," ",s.LikesCount]})]});var d=t(3842),c=t(8779),u=t(6680);let h=(0,d.A)({form:"MyPostAddPostForm"})((s=>(0,a.jsx)("form",{onSubmit:s.handleSubmit,children:(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{children:(0,u.Fv)("Your post","textMessageProfile",[c.m],u.TM)}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{children:"Add post"})})]})})));const p=s=>{let e=[...s.postData].reverse().map((s=>(0,a.jsx)(l,{message:s.text,LikesCount:s.likesCount},s.id)));return(0,a.jsxs)("div",{className:o.PostBlock,children:[(0,a.jsx)("h2",{children:"My posts"}),(0,a.jsx)(h,{onSubmit:e=>{s.addPost(e.textMessageProfile)}}),(0,a.jsx)("div",{className:o.posts,children:e})]})};var x=t(3003);const j=(0,x.Ng)((s=>({postData:s.profilePage.postData})),{addPost:r.o1.addPostActionCreater})(p),v={descriptionblock:"ProfileInfo_descriptionblock__TATgx",mainPhoto:"ProfileInfo_mainPhoto__Dqjc4"};var f=t(211);const m=s=>{let[e,t]=(0,i.useState)(!1),[r,o]=(0,i.useState)(s.status);(0,i.useEffect)((()=>{o(s.status)}),[s.status]);return(0,a.jsxs)("div",{children:[!e&&(0,a.jsxs)("div",{children:[(0,a.jsx)("b",{children:"Status: "}),(0,a.jsx)("span",{onDoubleClick:()=>{t(!0)},children:s.status||"-----"})]}),e&&(0,a.jsx)("div",{children:(0,a.jsx)("input",{onChange:s=>{o(s.currentTarget.value)},autoFocus:!0,onBlur:()=>{t(!1),s.updateStatus(r)},value:r})})]})};var b=t(4371),g=t(7242);const P=(0,d.A)({form:"edit-profile",enableReinitialize:!0})((s=>{let{handleSubmit:e,profile:t,error:i}=s;return(0,a.jsxs)("form",{onSubmit:e,children:[(0,a.jsx)("div",{children:(0,a.jsx)("button",{children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})}),i&&(0,a.jsx)("div",{className:g.A.formSummaryError,children:i}),(0,a.jsxs)("div",{children:[(0,a.jsx)("b",{children:"\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f"}),": ",(0,u.Fv)("\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f","fullName",[],u.pd)]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("b",{children:"\u0418\u0449\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0443"}),": ",(0,u.Fv)("","lookingForAJob",[],u.pd,{type:"checkbox"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("b",{children:"\u041c\u043e\u0438 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438"}),": ",(0,u.Fv)("\u041c\u043e\u0438 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438","lookingForAJobDescription",[],u.TM)]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("b",{children:"\u041e\u0431\u043e \u043c\u043d\u0435"}),": ",(0,u.Fv)("\u041e\u0431\u043e \u043c\u043d\u0435","aboutMe",[],u.TM)]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("b",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),": ",Object.keys(t.contacts).map((s=>(0,a.jsx)("div",{className:v.contact,children:(0,a.jsxs)("b",{children:[s,": ",(0,u.Fv)(s,`contacts.${s}`,[],u.pd)]})},s)))]})]})})),k=s=>{let{profile:e,isOwner:t,goToEditMode:i}=s;return(0,a.jsxs)("div",{children:[t&&(0,a.jsx)("div",{children:(0,a.jsx)("button",{onClick:i,children:"edit"})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("b",{children:"Full name"}),":",e.fullName]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("b",{children:"Looking for a job"}),": ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&(0,a.jsxs)("div",{children:[(0,a.jsx)("b",{children:"My professional skills"}),":",e.lookingForAJobDescription]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("b",{children:"About me"}),":",e.aboutMe]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("b",{children:"Contacts"}),":",Object.keys(e.contacts).map((s=>(0,a.jsx)(S,{contactTitle:s,contactValue:e.contacts[s]},s)))]})]})},S=s=>{let{contactTitle:e,contactValue:t}=s;return(0,a.jsxs)("div",{children:[(0,a.jsx)("b",{children:e}),": ",t]})},A=s=>{var e;let{isOwner:t,profile:r,status:o,updateStatus:n,savePhoto:l,saveProfile:d}=s,[c,u]=(0,i.useState)(!1);if(!r)return(0,a.jsx)(f.A,{});return(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:v.descriptionblock,children:[(0,a.jsx)("img",{src:(null===(e=r.photos)||void 0===e?void 0:e.large)||b,className:v.mainPhoto}),t&&(0,a.jsx)("input",{type:"file",onChange:s=>{if(s.target.files&&s.target.files.length){const e=s.target.files[0];e.type.startsWith("image")&&l(e)}}}),c?(0,a.jsx)(P,{initialValues:r,profile:r,onSubmit:s=>{d(s).then((()=>{u(!1)}))}}):(0,a.jsx)(k,{goToEditMode:()=>{u(!0)},profile:r,isOwner:t}),(0,a.jsx)(m,{status:o,updateStatus:n})]})})},I=s=>(0,a.jsxs)("div",{children:[(0,a.jsx)(A,{savePhoto:s.savePhoto,isOwner:s.isOwner,profile:s.profile,status:s.status,saveProfile:s.saveProfile,updateStatus:s.updateStatus}),(0,a.jsx)(j,{})]});var y=t(3216),F=t(9362),M=t(3923);class _ extends i.Component{refreshProfile(){let s=this.props.userId;if(s||(s=this.props.authorizedUserId,s||this.props.history.push("/login")),!s)throw new Error("ID should exists in URI params or in state('authorizedUserId')");this.props.getUsersProfile(s),this.props.getStatus(s)}componentDidMount(){this.refreshProfile()}componentDidUpdate(s,e){this.props.userId!=s.userId&&this.refreshProfile()}render(){return(0,a.jsx)(I,{...this.props,isOwner:!this.props.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto})}}const C=(0,M.Zz)((0,x.Ng)((s=>({profile:s.profilePage.profile,status:s.profilePage.status,authorizedUserId:s.auth.userId,isAuth:s.auth.isAuth})),{getUsersProfile:r.ub,getStatus:r.BS,updateStatus:r.yB,savePhoto:r.Ah,saveProfile:r.Lt}),F.I)((s=>{const{userId:e}=(0,y.g)();return(0,a.jsx)(_,{...s,userId:e})}))},9362:(s,e,t)=>{t.d(e,{I:()=>a});t(5043);var i=t(3216),r=t(3003),o=t(579);const n=s=>({isAuth:s.auth.isAuth});function a(s){return(0,r.Ng)(n,{})((e=>{let{isAuth:t,...r}=e;return t?(0,o.jsx)(s,{...r}):(0,o.jsx)(i.C5,{to:"/Login"})}))}}}]);
//# sourceMappingURL=348.9a72e6f7.chunk.js.map