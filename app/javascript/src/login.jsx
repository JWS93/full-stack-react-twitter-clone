import React, { Component } from 'react';
import './login.scss';
import { newUser } from './user_requests.js';
import {
	login,
	getCurrentUser
} from './session_requests.js'

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loginUsername: '',
			signupEmail: '',
			loginPassword: '',
			signupUsername: '',
			signupPassword: '',
			message: '',
			errors: [],
			isLoading: false,
		};
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSignup = async (event) => {
		event.preventDefault();
		this.setState({ isLoading: true, message: '', errors: [] });

		const signupResult = await newUser(this.state.signupUsername, this.state.signupEmail, this.state.signupPassword);

		if (signupResult.success) {
			console.log('User created:', signupResult.data);
			this.setState({
        message: 'User created successfully, please login',
        username: '',
        password: '',
      });
		} else {
			this.setState({ errors: signupResult.errors });
		}
		this.setState({ isLoading: false });
	};

	handleLogin = async (event) => {
		event.preventDefault();
		this.setState({ isLoading: true, errors: [] });

		const loginResult = await login(this.state.loginUsername, this.state.loginPassword);

		if (loginResult.success) {
			const userResult = await getCurrentUser();
			if (userResult.success) {
				this.props.setUser(userResult.user);
			} else {
				this.setState({ errors: ['Failed to fetch user data'] });
			}
		} else {
			this.setState({ errors: loginResult.errors });
		}
		this.setState({ isLoading: false });
	};

	render() {
		return (
			<React.Fragment>
				<div className="bg-image">
					<div className="container">
						<div className="row">
							<div className="col-10 my-5">
								<div className="row">
									<div className="col-lg-6 col-md-12 mt-5">
										<h1 className="my-3 intro">Welcome to Twitter.</h1>
										<p className="my-3 intro pe-2 fw-bold fs-5">The world's digital town square where you can connect with people and explore events in real time, as they happen.</p>
									</div>
									<div className="col-lg-6 col-md-12 my-5" id="login">
										<form className="row border border-primary border-2 rounded login-box" onSubmit={this.handleLogin}>
											<div className="col-12 mx-2 mt-1">Username</div>
											<input 
												className="col-12 rounded mx-2"
												type="text"
												value={this.state.loginUsername}
												onChange={this.handleChange}
												name="loginUsername"
												id="loginUsername"
												placeholder="username"
												disabled={this.state.isLoading}
											/>
											<div className="col-12 mt-1 mx-2">Password</div>
											<input 
												className="col-12 rounded mx-2 mb-2" 
												type="password"
												value={this.state.loginPassword}
												onChange={this.handleChange}
												name="loginPassword"
												id="loginPassword" 
												placeholder="password"
												disabled={this.state.isLoading}
											/>
											<button 
												className="col-12 btn btn-sm btn-primary rounded mb-2 mx-2" type="submit" disabled={this.state.isLoading} id="loginButton">{this.state.isLoading ? 'Logging in' : 'Log In'}
											</button>
										</form>
										<form className="row border border-primary border-2 rounded signup-box mt-3" onSubmit={this.handleSignup}>
											<h5 className="col-12 mx-2 mt-4">New to Twitter?</h5>
											<div className="col-12 mx-2 mt-1">Username</div>
											<input 
												className="col-12 rounded mx-2" 
												type="text" 
												value={this.state.signupUsername}
												onChange={this.handleChange}
												name="signupUsername"
												id="signupUsername"
												placeholder="username"
												disabled={this.state.isLoading}
											/>
											<div className="col-12 mx-2">Email</div>
											<input 
												className="col-12 rounded mx-2" 
												type="text"
												value={this.state.signupEmail}
												onChange={this.handleChange}
												name="signupEmail"
												id="signupEmail" 
												placeholder="email"
												disabled={this.state.isLoading}
											/>
											<div className="col-12 mt-1 mx-2">Password</div>
											<input 
												className="col-12 rounded mx-2 mb-2" 
												type="password"
												value={this.state.signupPassword}
												onChange={this.handleChange}
												name="signupPassword"
												id="signupPassword" 
												placeholder="password"
												disabled={this.state.isLoading}
											/>
											<button 
												className="col-12 btn btn-sm btn-primary rounded mb-2 mx-2" type="submit" id="signupButton" disabled={this.state.isLoading}>{this.state.isLoading ? 'creating user' : 'Sign Up'}
											</button>
										</form>
										{this.state.message && <p style={{ color: 'green' }}>{this.state.message}</p>}
										{this.state.errors.length > 0 && (
											<ul style={{ color: 'red' }}>
												{this.state.errors.map((error, index) => (
													<li key={index}>{error}</li>
												))}
											</ul>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Login;