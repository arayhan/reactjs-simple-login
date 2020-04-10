import React, { Component } from "react";
import store from "store";

class Auth extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: null,
			password: null
		};
	}

	handleLogin = () => {
		let { username, password } = this.state;
		let userdata = {
			username: username,
			password: password
		};

		if (this.isFormValid()) {
			store.set("userdata", userdata);
			window.location.href = "/";
		} else {
			alert("username atau password tidak boleh kosong");
		}
	};

	isFormValid = () => {
		let { username, password } = this.state;
		return username && password ? true : false;
	};

	render() {
		return (
			<div className="login-container">
				<div className="wrapper">
					<div className="header">
						<img src="./assets/img/logo-horizontal.png" alt="skydu-logo" />
					</div>
					<div className="body">
						<div className="input-group">
							<label>Username</label>
							<input
								type="text"
								onChange={e => this.setState({ username: e.target.value })}
								placeholder="johndoe"
							/>
						</div>
						<div className="input-group">
							<label>Password</label>
							<input
								type="password"
								onChange={e => this.setState({ password: e.target.value })}
								placeholder="*****"
							/>
						</div>
						<button onClick={this.handleLogin}>Login</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Auth;
