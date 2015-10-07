console.log('Built with ReactJS')

//  Menu primary functionality, toggle and meni items inject. 
var NavMenu = React.createClass({displayName: "NavMenu",
	getInitialState: function () {
		// If hash is not available, means the user is new to the site. But if it's available
		// then he is not so enable the menu
		if (location.hash===''){
			return {visible: false};
		}else{
			return {visible: true};
		}
	},    
	toggle: function(){
		if(this.state.visible==false){
			this.setState({ visible: true });
		} else {
			this.setState({ visible: false });
		}
	},
	render: function (){
		if (this.state.visible==false){
			return (
				React.createElement("div", {className: "col-xs-offset-10 col-xs-2"}, 
					React.createElement("button", {id: "desktop", onClick: this.toggle}, "☰ Menu"), 
					React.createElement("button", {id: "mobile", onClick: this.toggle}, "☰")
				)
				);
		} 
		else {
			return (
				React.createElement("div", {className: "row"}, 
					React.createElement("div", {className: "col-xs-10"}, 
							React.createElement("div", {className: "row"}, 
								React.createElement("div", {id: "desktop", className: "col-xs-offset-7 col-xs-5"}, 
									React.createElement(MenuList, null, " ")
								)
							), 
							React.createElement("div", {className: "row"}, 
								React.createElement("div", {id: "mobile", className: "col-xs-12"}, 
									React.createElement(MenuList, null, " ")
								)
							)
					), 
					React.createElement("div", {className: "col-xs-2"}, 
						React.createElement("button", {id: "desktop", onClick: this.toggle}, " X Close"), 
						React.createElement("button", {id: "mobile", onClick: this.toggle}, "X")
					)
				)
			);
		}
	}
});

// Menu Items that are to be displayed after clicking " Menu " option.
var MenuList = React.createClass({displayName: "MenuList",
	render: function(){
		// return(
		// 		<ul>
		// 			<li><a href="/">root</a></li>
		// 			<li><a href="#aboutme">about</a></li>
		// 			<li><a href="#resume">resume</a></li>
		// 			<li><a href="#contact">contact</a></li>
		// 		</ul>
		// 	);
		return (
			React.createElement("div", {className: "row"}, 
			React.createElement("div", {className: "col-xs-3"}, React.createElement("a", {href: "/"}, "root")), 
			React.createElement("div", {className: "col-xs-3"}, React.createElement("a", {href: "#aboutme"}, "about")), 
			React.createElement("div", {className: "col-xs-3"}, React.createElement("a", {href: "#resume"}, "resume")), 
			React.createElement("div", {className: "col-xs-3"}, React.createElement("a", {href: "#contact"}, "contact"))
			)
			);
	}
});

// Delayed message render unit, displays messages as someone is typing it
var MagicFunction = React.createClass({displayName: "MagicFunction",
	getInitialState: function(){
	 return {count: 0}
	},
	incrementCount: function(val){
		if(this.state.count<this.props.message.length){
			this.setState({count: this.state.count + val});
		}
	},
	render: function(){
		setTimeout(this.incrementCount.bind(this,1),150); // every 150ms the increment is called. 
		var msg = this.props.message;
		return (
		      React.createElement("p", null, 
		      	msg.substr(0,this.state.count)+"_"
		      )
		);
	}
});

// var MainPage = React.createClass({
// 	render: function (){
// 		return (
// 				<p>Main Page</p>
// 			);
// 	}
// });

// About Me page, Path = /#aboutme
var AboutPage = React.createClass({displayName: "AboutPage",
	render: function(){
		return (
				React.createElement("p", null, 
				"About Me"
				)
			);
	}
});

// Return PDF Resume, Path=/#resume
var ResumePage = React.createClass({displayName: "ResumePage",
	render: function (){
		return (
			React.createElement("p", null, "Resume")
			);
	}
});

// Return Contact info page, Path = /#contact
var ContactPage = React.createClass({displayName: "ContactPage",
	render: function (){
		return (
			React.createElement("div", {className: "ContactInfo"}, 
				React.createElement("div", {className: "row"}, 
					React.createElement("div", {className: "col-xs-12"}, 
						"snehesh85@gmail.com"
					), 
					React.createElement("div", {id: "SocialMedia", className: "col-xs-6"}, React.createElement("a", {href: "https://twitter.com/snehesht", target: "_blank"}, "@snehesht")), 
					React.createElement("div", {id: "SocialMedia", className: "col-xs-6"}, React.createElement("a", {href: "https://github.com/snehesht", target: "_blank"}, "Github"))
				)
			)
			);
	}
});



// Definetly Render the NavMenu
React.render(React.createElement(NavMenu, null), document.getElementById("nav"));
// Render the below element only once.
// React.render(<MagicFunction message="Hi there, I'm Snehesh Thalapaneni."/>, document.getElementById("main"));
Router();


// Separate Event Listen function to listen to hash changes and rerender the pages
window.addEventListener("hashchange", Router, false);

function Router () {
	var hash = location.hash; // Assign hash to Current hash

	// Call React.render() based on different hash

	if (hash===''){
		React.render(React.createElement(MagicFunction, {message: "Hi there, I'm Snehesh Thalapaneni."}), document.getElementById("main"));
	}
	else if (location.hash==='#aboutme'){
		return React.render(React.createElement(AboutPage, null), document.getElementById("main"));
	}
	else if (location.hash === '#resume'){
		return React.render(React.createElement(ResumePage, null), document.getElementById("main"));
	}
	else if (location.hash === '#contact'){
		return React.render(React.createElement(ContactPage, null), document.getElementById("main"));
	} else {
		location.assign('/') // Redirect to Home page
		return React.render(React.createElement(MagicFunction, {message: "Hi there, I'm Snehesh Thalapaneni."}), document.getElementById("main"));
	}
}