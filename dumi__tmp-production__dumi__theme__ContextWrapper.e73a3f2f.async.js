(self.webpackChunkbai_design_react=self.webpackChunkbai_design_react||[]).push([[923],{33835:function(o,d,e){"use strict";e.r(d),e.d(d,{default:function(){return m}});var s={};e.r(s),e.d(s,{Alert:function(){return g.Z},DividerBai:function(){return v.Z}});var t=e(27424),r=e.n(t),n=e(42122),a=e.n(n),i=e(67294),_=e(14570),u=e(64236),l=e(21815),E=e(90482),g=e(70208),v=e(5593),b=e(85893),c=a()({},s);function m(){var f=(0,_.pC)(),h=(0,i.useState)(!0),p=r()(h,2),j=p[0],O=p[1],P=(0,i.useRef)(_.m8.location.pathname);return(0,i.useEffect)(function(){return _.m8.listen(function(D){D.location.pathname!==P.current&&(P.current=D.location.pathname,O(!0),document.documentElement.scrollTo(0,0))})},[]),(0,b.jsx)(u.D.Provider,{value:{pkg:{name:"bai-design-react",description:"baiyunfei429's react \u7EC4\u4EF6\u5E93",version:"1.0.9",license:"ISC",repository:{type:"git",url:"git+ssh://git@gitlab.com/baiyunfei429/bai-design-react.git"},author:"baiyunfei429@163.com"},entryExports:c,demos:l.DE,components:l.wx,locales:E.k,loading:j,setLoading:O,themeConfig:{title:"Baiyunfei React UI",footer:'Copyright \xA9 2023 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>',prefersColor:{default:"light",switch:!0}}},children:f})}},70208:function(o,d,e){"use strict";var s=e(42122),t=e.n(s),r=e(70215),n=e.n(r),a=e(45697),i=e.n(a),_=e(67294),u=e(85893),l=["children","kind"],E="baiyunfei-react-alert",g={info:"#5352ED",positive:"#2ED573",negative:"#FF4757",warning:"#FFA501"},v=function(c){var m=c.children,f=c.kind,h=f===void 0?"info":f,p=n()(c,l);return(0,u.jsx)("div",t()(t()({className:E,style:{background:g[h]}},p),{},{children:m}))};v.propTypes={kind:i().oneOf(["info","positive","negative","warning"])},d.Z=v},5593:function(o,d,e){"use strict";var s=e(42122),t=e.n(s),r=e(67294),n=e(85893),a={},i=function(u){var l=t()(t()({},a),u);return(0,n.jsx)("div",t()(t()({},l),{},{children:"DividerBai"}))};d.Z=i},70215:function(o,d,e){var s=e(7071);function t(r,n){if(r==null)return{};var a=s(r,n),i,_;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);for(_=0;_<u.length;_++)i=u[_],!(n.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(r,i)&&(a[i]=r[i])}return a}o.exports=t,o.exports.__esModule=!0,o.exports.default=o.exports},7071:function(o){function d(e,s){if(e==null)return{};var t={},r=Object.keys(e),n,a;for(a=0;a<r.length;a++)n=r[a],!(s.indexOf(n)>=0)&&(t[n]=e[n]);return t}o.exports=d,o.exports.__esModule=!0,o.exports.default=o.exports}}]);