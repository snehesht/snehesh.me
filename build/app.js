function Router(){var e=location.hash;return""!==e?"#aboutme"===location.hash?React.render(React.createElement(AboutPage,null),document.getElementById("main")):"#resume"===location.hash?React.render(React.createElement(ResumePage,null),document.getElementById("main")):"#contact"===location.hash?React.render(React.createElement(ContactPage,null),document.getElementById("main")):(location.assign("/"),React.render(React.createElement(MagicFunction,{message:"Hi there, I'm Snehesh Thalapaneni."}),document.getElementById("main"))):void React.render(React.createElement(MagicFunction,{message:"Hi there, I'm Snehesh Thalapaneni."}),document.getElementById("main"))}console.log("Built with ReactJS");var NavMenu=React.createClass({displayName:"NavMenu",getInitialState:function(){return""===location.hash?{visible:!1}:{visible:!0}},toggle:function(){0==this.state.visible?this.setState({visible:!0}):this.setState({visible:!1})},render:function(){return 0==this.state.visible?React.createElement("div",{className:"col-xs-offset-10 col-xs-2"},React.createElement("button",{id:"desktop",onClick:this.toggle},"☰ Menu"),React.createElement("button",{id:"mobile",onClick:this.toggle},"☰")):React.createElement("div",{className:"row"},React.createElement("div",{className:"col-xs-10"},React.createElement("div",{className:"row"},React.createElement("div",{id:"desktop",className:"col-xs-offset-7 col-xs-5"},React.createElement(MenuList,null," "))),React.createElement("div",{className:"row"},React.createElement("div",{id:"mobile",className:"col-xs-12"},React.createElement(MenuList,null," ")))),React.createElement("div",{className:"col-xs-2"},React.createElement("button",{id:"desktop",onClick:this.toggle}," X Close"),React.createElement("button",{id:"mobile",onClick:this.toggle},"X")))}}),MenuList=React.createClass({displayName:"MenuList",render:function(){return React.createElement("div",{className:"row"},React.createElement("div",{className:"col-xs-3"},React.createElement("a",{href:"/"},"root")),React.createElement("div",{className:"col-xs-3"},React.createElement("a",{href:"#aboutme"},"about")),React.createElement("div",{className:"col-xs-3"},React.createElement("a",{href:"#resume"},"resume")),React.createElement("div",{className:"col-xs-3"},React.createElement("a",{href:"#contact"},"contact")))}}),MagicFunction=React.createClass({displayName:"MagicFunction",getInitialState:function(){return{count:0}},incrementCount:function(e){this.state.count<this.props.message.length&&this.setState({count:this.state.count+e})},render:function(){setTimeout(this.incrementCount.bind(this,1),150);var e=this.props.message;return React.createElement("p",null,e.substr(0,this.state.count)+"_")}}),AboutPage=React.createClass({displayName:"AboutPage",render:function(){return React.createElement("p",null,"About Me")}}),ResumePage=React.createClass({displayName:"ResumePage",render:function(){return React.createElement("p",null,"Resume")}}),ContactPage=React.createClass({displayName:"ContactPage",render:function(){return React.createElement("div",{className:"ContactInfo"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col-xs-12"},"snehesh85@gmail.com"),React.createElement("div",{id:"SocialMedia",className:"col-xs-6"},React.createElement("a",{href:"https://twitter.com/snehesht",target:"_blank"},"@snehesht")),React.createElement("div",{id:"SocialMedia",className:"col-xs-6"},React.createElement("a",{href:"https://github.com/snehesht",target:"_blank"},"Github"))))}});React.render(React.createElement(NavMenu,null),document.getElementById("nav")),Router(),window.addEventListener("hashchange",Router,!1);