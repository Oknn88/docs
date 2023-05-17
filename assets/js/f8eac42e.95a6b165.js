"use strict";(self.webpackChunksqb_docs=self.webpackChunksqb_docs||[]).push([[267],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=i(r),y=o,m=p["".concat(s,".").concat(y)]||p[y]||d[y]||a;return r?n.createElement(m,u(u({ref:t},c),{},{components:r})):n.createElement(m,u({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,u[1]=l;for(var i=2;i<a;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},5253:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});r(7294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={title:"UpdateQuery Class",sidebar_position:4,slug:"/sqlquerybuilder/queryobjects/updatequeryclass",description:"UpdateQuery Class",keywords:["methods","update","query"]},s=void 0,i={unversionedId:"SqlQueryBuilder/QueryObjects/UpdateQueryClass",id:"SqlQueryBuilder/QueryObjects/UpdateQueryClass",title:"UpdateQuery Class",description:"UpdateQuery Class",source:"@site/docs/SqlQueryBuilder/QueryObjects/UpdateQueryClass.mdx",sourceDirName:"SqlQueryBuilder/QueryObjects",slug:"/sqlquerybuilder/queryobjects/updatequeryclass",permalink:"/docs/docs/sqlquerybuilder/queryobjects/updatequeryclass",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"UpdateQuery Class",sidebar_position:4,slug:"/sqlquerybuilder/queryobjects/updatequeryclass",description:"UpdateQuery Class",keywords:["methods","update","query"]},sidebar:"tutorialSidebar",previous:{title:"SelectQuery Class",permalink:"/docs/docs/sqlquerybuilder/queryobjects/selectqueryclass"},next:{title:"Raw Class",permalink:"/docs/docs/sqlquerybuilder/sqlobjects/rawclass"}},c={},p=[{value:"Construction",id:"construction",level:2},{value:"Methods",id:"methods",level:2},{value:"UpdateQuery.prototype.where()",id:"updatequeryprototypewhere",level:3},{value:"ReturningQuery.prototype.returning()",id:"returningqueryprototypereturning",level:3},{value:"Query.prototype.execute()",id:"queryprototypeexecute",level:3},{value:"Query.prototype.values()",id:"queryprototypevalues",level:3}],d={toc:p},y="wrapper";function m(e){var{components:t}=e,r=u(e,["components"]);return(0,n.kt)(y,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"construction"},"Construction"),(0,n.kt)("p",null,"SQB namespace, ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/connectionwrapper/poolclass"},"Pool")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/connectionwrapper/connectionclass"},"Connection")," have ",(0,n.kt)("inlineCode",{parentName:"p"},"update()")," function that creates SelectQuery instance."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"A Query instance that created by ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/connectionwrapper/poolclass"},"Pool")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/connectionwrapper/connectionclass"},"Connection")," can be executed directly.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"query = (sqb|pool|connection).update(tableName)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"tableName")," (String|Raw) : String representation of table name or Raw sql object."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"values"),": Object that contains column/value pairs.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"var query = sqb.update('customer', {name:'John'})\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"Generated SQL for Postgres:\nupdate customer set name = 'John'\n")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"updatequeryprototypewhere"},"UpdateQuery.prototype.where()"),(0,n.kt)("p",null,'Defines "where" part of ',(0,n.kt)("inlineCode",{parentName:"p"},"query"),"."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},".where(..conditions)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"conditions"),": ",(0,n.kt)("a",{parentName:"li",href:"/docs/docs/sqlquerybuilder/sqloperations#operators"},"condition")," arrays."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Returns"),": UpdateQuery itself.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"var query = sqb.update('customer', {name:'John'})\n    .where(['id', 1]);\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"Generated SQL for Postgres:\nupdate customer set\n  name = 'John'\nwhere id = 1\n")),(0,n.kt)("h3",{id:"returningqueryprototypereturning"},"ReturningQuery.prototype.returning()"),(0,n.kt)("p",null,'Defines "returning" part of ',(0,n.kt)("inlineCode",{parentName:"p"},"query"),"."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},".returning(obj)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"obj")," (Object): An object instance that defines returning parameters ."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Returns"),": UpdateQuery itself.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"var query = sqb.update('customer', {name:'John'})\n    .where({'id': 1}).returning({\n      id: 'number',\n      name: 'string'\n    });\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"Generated SQL for Oracle:\nupdate customer set\n  name = 'John'\nwhere id = 1\nreturning id into :returning$id, name into :returning$name\n")),(0,n.kt)("h3",{id:"queryprototypeexecute"},"Query.prototype.execute()"),(0,n.kt)("p",null,"Executes query and returns Promise. Please check ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/connectionwrapper/executingqueries"},"executing queries")," section for details."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"pool.update('customer', {name: 'John'})\n    .where({'id': 1})\n    .execute({\n      autoCommit: true\n    }).then(result => {\n      console.log('Record updated');\n    });\n")),(0,n.kt)("h3",{id:"queryprototypevalues"},"Query.prototype.values()"),(0,n.kt)("p",null,"Sets execution values for query. Please check ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/connectionwrapper/executingqueries"},"executing queries")," section for details."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const query = pool.pool.update('customer', {name: /Name/})\n    .where({'id': /ID/});\n....\nquery.values({ID: request.values.ID, Name: request.values.Name)\n    .execute({\n       autoCommit: true\n     }).then(result => {\n       console.log('Records inserted');\n     });\n")))}m.isMDXComponent=!0}}]);