console.log('Built with ReactJS')

//  Menu primary functionality, toggle and meni items inject. 
var NavMenu = React.createClass({
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
				<div className="col-xs-offset-10 col-xs-2">
					<button id="desktop" onClick={this.toggle}>☰ Menu</button>
					<button id="mobile" onClick={this.toggle}>☰</button>
				</div>
				);
		} 
		else {
			return (	
				<div className="row">
					<div id="desktop" className="col-xs-offset-6 col-xs-4">
						<MenuList> </MenuList>
					</div>
					<div id="mobile" className="col-xs-10">
						<MenuList> </MenuList>
					</div>

					<div className="col-xs-2">
						<button id="desktop" onClick={this.toggle}> X Close</button>
						<button id="mobile" onClick={this.toggle}>X</button>
					</div>
				</div>
			);
		}
	}
});

// Menu Items that are to be displayed after clicking " Menu " option.
var MenuList = React.createClass({
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
			<div className="row">
			<div className="col-xs-3"><a href="/">root</a></div>
			<div className="col-xs-3"><a href="#aboutme">about</a></div>
			<div className="col-xs-3"><a href="#resume">resume</a></div>
			<div className="col-xs-3"><a href="#contact">contact</a></div>
			</div>
			);
	}
});

// Delayed message render unit, displays messages as someone is typing it
var MagicFunction = React.createClass({
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
		      <p>
		      	{msg.substr(0,this.state.count)+"_"}
		      </p>
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
var AboutPage = React.createClass({
	render: function(){
		return (
				<p>
				About Me
				</p>
			);
	}
});

// Return PDF Resume, Path=/#resume
var ResumePage = React.createClass({
	render: function (){
		return (
			<p>Resume</p>
			);
	}
});

// Return Contact info page, Path = /#contact
var ContactPage = React.createClass({
	render: function (){
		return (
			<div className="ContactInfo">
				<div className="row">
					<div className="col-xs-12">
						snehesh85@gmail.com
					</div>
					<div id="SocialMedia" className="col-xs-6"><a href="https://twitter.com/snehesht" target="_blank">@snehesht</a></div>
					<div id="SocialMedia" className="col-xs-6"><a href="https://github.com/snehesht" target="_blank">Github</a></div>
				</div>
			</div>
			);
	}
});



// Definetly Render the NavMenu
React.render(<NavMenu />, document.getElementById("nav"));
// Render the below element only once.
// React.render(<MagicFunction message="Hi there, I'm Snehesh Thalapaneni."/>, document.getElementById("main"));
Router();


// Separate Event Listen function to listen to hash changes and rerender the pages
window.addEventListener("hashchange", Router, false);

function Router () {
	var hash = location.hash; // Assign hash to Current hash

	// Call React.render() based on different hash

	if (hash===''){
		React.render(<MagicFunction message="Hi there, I'm Snehesh Thalapaneni."/>, document.getElementById("main"));
	}
	else if (location.hash==='#aboutme'){
		return React.render(<AboutPage />, document.getElementById("main"));
	}
	else if (location.hash === '#resume'){
		return React.render(<ResumePage />, document.getElementById("main"));
	}
	else if (location.hash === '#contact'){
		return React.render(<ContactPage />, document.getElementById("main"));
	} else {
		location.assign('/') // Redirect to Home page
		return React.render(<MagicFunction message="Hi there, I'm Snehesh Thalapaneni."/>, document.getElementById("main"));
	}
}