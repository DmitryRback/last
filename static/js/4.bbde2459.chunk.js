/*! For license information please see 4.bbde2459.chunk.js.LICENSE.txt */
(this["webpackJsonpfirst-react"]=this["webpackJsonpfirst-react"]||[]).push([[4],{314:function(e,t,n){e.exports={paginator:"Users_paginator__2abWU",users_container:"Users_users_container__2Ky72",users:"Users_users__3ANTy",avatar:"Users_avatar__9H9Be",button:"Users_button__1k6al",description:"Users_description__1gk1f",left:"Users_left__1ewzX",right:"Users_right__2YGLb",user:"Users_user__1KHbY",name:"Users_name__3MVvb"}},317:function(e,t,n){e.exports={nav:"Paginator_nav__2GChF",btn:"Paginator_btn__2INd7",page:"Paginator_page__2YzR_"}},318:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var s=a.apply(null,r);s&&e.push(s)}else if("object"===o)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},319:function(e,t,n){"use strict";n.r(t);var r=n(20),a=n(21),o=n(23),s=n(22),u=n(24),l=n(0),i=n.n(l),c=n(15),p=n(142),f=n(102),g=n(314),m=n.n(g),h=n(76),v=n(62),_=n(13),b=n.n(_),d=n(5),P=n(317),y=n.n(P),w=n(318),C=n.n(w),E=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,a=e.onPageChange,o=e.portionSize,s=void 0===o?10:o,u=Math.ceil(t/n),c=[],p=1;p<=u;p++)c.push(p);var f=Math.ceil(u/s),g=Object(l.useState)(1),m=Object(v.a)(g,2),_=m[0],P=m[1],w=(_-1)*s+1,E=_*s;return i.a.createElement("div",{className:y.a.nav},_>1&&i.a.createElement("span",{className:y.a.btn,onClick:function(){return P(_-1)}},i.a.createElement(b.a,{path:d.c,size:"16px",color:"#673ab7"})),c.filter((function(e){return e>=w&&e<=E})).map((function(e){return i.a.createElement("span",{key:e,className:C()(Object(h.a)({},y.a.page,r===e)),onClick:function(){return a(e)}},e)})),f>_&&i.a.createElement("span",{className:y.a.btn,onClick:function(){P(_+1)}},i.a.createElement(b.a,{path:d.d,size:"16px",color:"#673ab7"})))},k=n(37),z=n.n(k),U=n(11),j=function(e){var t=e.user,n=e.key,r=e.Progress,a=e.unfollow,o=e.follow;return i.a.createElement("div",{className:m.a.user,key:n},i.a.createElement("div",{className:m.a.avatar},i.a.createElement(U.b,{to:"/profile/"+t.id},i.a.createElement("img",{src:null!=t.photos.small?t.photos.small:z.a,alt:""})),i.a.createElement("div",{className:m.a.name},i.a.createElement("p",null,t.name))),i.a.createElement("div",{className:m.a.button},t.followed?i.a.createElement("button",{disabled:r.some((function(e){return e==t.id})),onClick:function(){a(t.id)}},"Unfollow"):i.a.createElement("button",{disabled:r.some((function(e){return e==t.id})),onClick:function(){o(t.id)}},"Follow")))},N=function(e){var t=e.totalItemsCount,n=e.pageSize,r=e.onPageChange,a=e.currentPage,o=Object(f.a)(e,["totalItemsCount","pageSize","onPageChange","currentPage"]);return i.a.createElement("div",{className:m.a.users_container},i.a.createElement(E,{totalItemsCount:t,pageSize:n,onPageChange:r,currentPage:a}),i.a.createElement("div",{className:m.a.users},o.users.map((function(e){return i.a.createElement(j,{key:e.id,user:e,Progress:o.Progress,unfollow:o.unfollow,follow:o.follow})}))))},S=n(51),O=n(6);function F(e,t){return e===t}function I(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}function x(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}var A=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];var o=0,s=r.pop(),u=x(r),l=e.apply(void 0,[function(){return o++,s.apply(null,arguments)}].concat(n)),i=e((function(){for(var e=[],t=u.length,n=0;n<t;n++)e.push(u[n].apply(null,arguments));return l.apply(null,e)}));return i.resultFunc=s,i.dependencies=u,i.recomputations=function(){return o},i.resetRecomputations=function(){return o=0},i}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:F,n=null,r=null;return function(){return I(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}}));var M=A((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return e}))})),Y=function(e){return e.usersPage.pageSize},q=function(e){return e.usersPage.totalItemsCount},G=function(e){return e.usersPage.currentPage},H=function(e){return e.usersPage.toggleFollowingProgress},J=function(e){return e.usersPage.isFetching},K=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,u=new Array(a),l=0;l<a;l++)u[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(u)))).onPageChange=function(e){var t=n.props;(0,t.pageChange)(e,t.pageSize)},n}return Object(u.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.requestUsers)(e.currentPage,e.pageSize)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,this.props.isFetching?i.a.createElement(S.a,null):null,i.a.createElement(N,{onPageChange:this.onPageChange,totalItemsCount:this.props.totalItemsCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,Progress:this.props.Progress,unfollow:this.props.unfollow,follow:this.props.follow}))}}]),t}(i.a.Component);t.default=Object(O.d)(Object(c.b)((function(e){return{users:M(e),pageSize:Y(e),totalItemsCount:q(e),currentPage:G(e),Progress:H(e),isFetching:J(e)}}),{setPageNumber:p.e,setTotalUsersCount:p.f,toggleFollowingProgress:p.g,requestUsers:p.d,pageChange:p.c,unfollow:p.h,follow:p.b}))(K)}}]);
//# sourceMappingURL=4.bbde2459.chunk.js.map