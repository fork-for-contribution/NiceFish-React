/*! Copyright By yanyunchangfeng */
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1283:function(e,t,s){"use strict";s.r(t);var m=s(1),i=s(558);t.default=function(){var e=Object(m.useState)({}),t=e[0],s=e[1],r=Object(m.useState)({}),a=r[0],o=r[1],n=[{title:"序号",dataIndex:"postId",width:100,fixed:"left",filteredValue:t.postId||null,filters:[{text:"1",value:"1"},{text:"2",value:"2"}],onFilter:function(e,t){return t.postId.includes(e)},sorter:function(e,t){return e.postId-t.postId},sortOrder:"postId"===a.columnKey&&a.order},{title:"标题",dataIndex:"title",sorter:function(e,t){return e.title.localeCompare(t.title)},sortOrder:"title"===a.columnKey&&a.order},{title:"作者",dataIndex:"userName",sorter:function(e,t){return e.userName.localeCompare(t.userName)},sortOrder:"userName"===a.columnKey&&a.order},{title:"日期",width:180,fixed:"right",dataIndex:"postTime",sorter:function(e,t){return new Date(e.postTime).getTime()-new Date(t.postTime).getTime()},sortOrder:"postTime"===a.columnKey&&a.order}],c=Object(m.useState)({total:20,items:[{postId:"1",key:"1",title:"从头了解光刻机",content:"光刻是集成电路最重要的加工工艺，他的作用，如同金工车间中车床的作用。在整个芯片制造工艺中，几乎每个工艺的实施，都离不开光刻的技术。光刻也是制造芯片的最关键技术，他占芯片制造成本的35%以上。在如今的科技与社会发展中，光刻技术的增长，直接关系到大型计算机的运作等高科技领域。<p>测试渲染HTML标签。</p>",postTime:"2018-05-17 10:44",userName:"大漠穷秋",nickName:"大漠穷秋",userId:"1",readTimes:"10000",commentTimes:"10000",likedTimes:"5555",isfamous:"true"},{postId:"2",key:"2",title:"从头认识光刻机",content:"光刻是集成电路最重要的加工工艺，他的作用，如同金工车间中车床的作用。在整个芯片制造工艺中，几乎每个工艺的实施，都离不开光刻的技术。光刻也是制造芯片的最关键技术，他占芯片制造成本的35%以上。在如今的科技与社会发展中，光刻技术的增长，直接关系到大型计算机的运作等高科技领域。",postTime:"2017-05-17 10:44",userName:"燕云长风",nickName:"燕云长风",userId:"1",readTimes:"10000",commentTimes:"10000",likedTimes:"5555",isfamous:"true"},{postId:"3",key:"3",title:"从头了解光刻机",content:"光刻是集成电路最重要的加工工艺，他的作用，如同金工车间中车床的作用。在整个芯片制造工艺中，几乎每个工艺的实施，都离不开光刻的技术。光刻也是制造芯片的最关键技术，他占芯片制造成本的35%以上。在如今的科技与社会发展中，光刻技术的增长，直接关系到大型计算机的运作等高科技领域。",postTime:"2016-05-17 10:44",userName:"大漠穷秋",nickName:"大漠穷秋",userId:"1",readTimes:"10000",commentTimes:"10000",likedTimes:"5555",isfamous:"true"},{postId:"4",key:"4",title:"从头认识光刻机",content:"光刻是集成电路最重要的加工工艺，他的作用，如同金工车间中车床的作用。在整个芯片制造工艺中，几乎每个工艺的实施，都离不开光刻的技术。光刻也是制造芯片的最关键技术，他占芯片制造成本的35%以上。在如今的科技与社会发展中，光刻技术的增长，直接关系到大型计算机的运作等高科技领域。",postTime:"2015-05-17 10:44",userName:"燕云长风",nickName:"燕云长风",userId:"1",readTimes:"10000",commentTimes:"10000",likedTimes:"5555",isfamous:"true"},{postId:"5",key:"5",title:"从头了解光刻机",content:"光刻是集成电路最重要的加工工艺，他的作用，如同金工车间中车床的作用。在整个芯片制造工艺中，几乎每个工艺的实施，都离不开光刻的技术。光刻也是制造芯片的最关键技术，他占芯片制造成本的35%以上。在如今的科技与社会发展中，光刻技术的增长，直接关系到大型计算机的运作等高科技领域。",postTime:"2014-05-17 10:44",userName:"大漠穷秋",nickName:"大漠穷秋",userId:"1",readTimes:"10000",commentTimes:"10000",likedTimes:"5555",isfamous:"true"},{postId:"6",key:"6",title:"从头认识光刻机",content:"光刻是集成电路最重要的加工工艺，他的作用，如同金工车间中车床的作用。在整个芯片制造工艺中，几乎每个工艺的实施，都离不开光刻的技术。光刻也是制造芯片的最关键技术，他占芯片制造成本的35%以上。在如今的科技与社会发展中，光刻技术的增长，直接关系到大型计算机的运作等高科技领域。",postTime:"2013-05-17 10:44",userName:"燕云长风",nickName:"燕云长风",userId:"1",readTimes:"10000",commentTimes:"10000",likedTimes:"5555",isfamous:"true"},{postId:"7",key:"7",title:"从头了解光刻机",content:"光刻是集成电路最重要的加工工艺，他的作用，如同金工车间中车床的作用。在整个芯片制造工艺中，几乎每个工艺的实施，都离不开光刻的技术。光刻也是制造芯片的最关键技术，他占芯片制造成本的35%以上。在如今的科技与社会发展中，光刻技术的增长，直接关系到大型计算机的运作等高科技领域。",postTime:"2012-05-17 10:44",userName:"大漠穷秋",nickName:"大漠穷秋",userId:"1",readTimes:"10000",commentTimes:"10000",likedTimes:"5555",isfamous:"true"},{postId:"8",key:"8",title:"从头认识光刻机",content:"光刻是集成电路最重要的加工工艺，他的作用，如同金工车间中车床的作用。在整个芯片制造工艺中，几乎每个工艺的实施，都离不开光刻的技术。光刻也是制造芯片的最关键技术，他占芯片制造成本的35%以上。在如今的科技与社会发展中，光刻技术的增长，直接关系到大型计算机的运作等高科技领域。",postTime:"2011-05-17 10:44",userName:"燕云长风",nickName:"燕云长风",userId:"1",readTimes:"10000",commentTimes:"10000",likedTimes:"5555",isfamous:"true"},{postId:"9",key:"9",title:"从头了解光刻机",content:"光刻是集成电路最重要的加工工艺，他的作用，如同金工车间中车床的作用。在整个芯片制造工艺中，几乎每个工艺的实施，都离不开光刻的技术。光刻也是制造芯片的最关键技术，他占芯片制造成本的35%以上。在如今的科技与社会发展中，光刻技术的增长，直接关系到大型计算机的运作等高科技领域。",postTime:"2010-05-17 10:44",userName:"大漠穷秋",nickName:"大漠穷秋",userId:"1",readTimes:"10000",commentTimes:"10000",likedTimes:"5555",isfamous:"true"},{postId:"10",key:"10",title:"从头认识光刻机",content:"光刻是集成电路最重要的加工工艺，他的作用，如同金工车间中车床的作用。在整个芯片制造工艺中，几乎每个工艺的实施，都离不开光刻的技术。光刻也是制造芯片的最关键技术，他占芯片制造成本的35%以上。在如今的科技与社会发展中，光刻技术的增长，直接关系到大型计算机的运作等高科技领域。",postTime:"2009-05-17 10:44",userName:"燕云长风",nickName:"燕云长风",userId:"1",readTimes:"10000",commentTimes:"10000",likedTimes:"5555",isfamous:"true"},{postId:"11",key:"11",title:"从头了解光刻机",content:"光刻是集成电路最重要的加工工艺，他的作用，如同金工车间中车床的作用。在整个芯片制造工艺中，几乎每个工艺的实施，都离不开光刻的技术。光刻也是制造芯片的最关键技术，他占芯片制造成本的35%以上。在如今的科技与社会发展中，光刻技术的增长，直接关系到大型计算机的运作等高科技领域。",postTime:"2008-05-17 10:44",userName:"大漠穷秋",nickName:"大漠穷秋",userId:"1",readTimes:"10000",commentTimes:"10000",likedTimes:"5555",isfamous:"true"}]})[0];return m.createElement("div",{className:"post-table-container"},m.createElement("form",{className:"form-vertical",role:"form"},m.createElement("div",{className:"row"},m.createElement("div",{className:"col-md-12"},m.createElement("div",{className:"input-group"},m.createElement("input",{className:"form-control",type:"text",placeholder:"标题，作者"}),m.createElement("span",{className:"input-group-btn"},m.createElement("button",{className:"btn btn-primary",type:"button"},m.createElement("i",{className:"fa fa-search","aria-hidden":"true"}),"搜索")))))),m.createElement("div",{className:"row mt-16px"},m.createElement("div",{className:"col-md-12"},m.createElement("div",{className:"post-item-container"},m.createElement(i.a,{dataSource:c.items,columns:n,scroll:{x:550},onChange:function(e,t,m){s(t),o(m)}})))))}}}]);