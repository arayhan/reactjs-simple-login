import React, { Component } from "react";
import store from "store";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userdata: {
				username: "null",
				password: "null"
			}
		};
	}

	componentDidMount = () => {
		this.loadUserdata();
	};

	loadUserdata = () => {
		let userdata = store.get("userdata");
		this.setState({ userdata: userdata });
	};

	handleLogout = () => {
		store.remove("userdata");
		window.location.href = "/";
	};

	render() {
		let { userdata } = this.state;

		return (
			<div class="container main">
				<span>Halo, {userdata.username}!</span>
				<button onClick={() => this.handleLogout()}>Logout</button>
			</div>
		);
	}
}

export default Main;
