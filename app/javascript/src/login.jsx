import React from 'react';
import { createRoot } from 'react-dom/client'
import './login.scss'



export const Login = () => {
	return (
		<React.Fragment>
			<div className="container bg-image">
				<div className="row">
					<div className="col-10 my-5">
						<div className="row">
							<div className="col-lg-6 col-md-12 mt-5">
								<h1 className="my-3 intro">Welcome to Twitter.</h1>
								<p className="my-3 intro pe-2 fw-bold fs-5">The world's digital town square where you can connect with people and explore events in real time, as they happen.</p>
							</div>
							<div className="col-lg-6 col-md-12 my-5" id="login">
								<div className="row border border-primary border-2 rounded login-box">
									<div className="col-12 mx-2 mt-1">Username</div>
									<input className="col-12 rounded mx-2" type="text" id="loginUsername" placeholder="username"></input>
									<div className="col-12 mt-1 mx-2">Password</div>
									<input className="col-12 rounded mx-2 mb-2" type="text" id="loginPassword" placeholder="password"></input>
									<button className="col-12 btn btn-sm btn-primary rounded mb-2 mx-2">Log In</button>
								</div>
								<div className="row border border-primary border-2 rounded signup-box mt-3">
									<h5 className="col-12 mx-2 mt-4">New to Twitter?</h5>
									<div className="col-12 mx-2 mt-1">Username</div>
									<input className="col-12 rounded mx-2" type="text" id="signupUsername" placeholder="username"></input>
									<div className="col-12 mx-2">Email</div>
									<input className="col-12 rounded mx-2" type="text" id="sigupEmail" placeholder="email"></input>
									<div className="col-12 mt-1 mx-2">Password</div>
									<input className="col-12 rounded mx-2 mb-2" type="text" id="signupPassword" placeholder="password"></input>
									<button className="col-12 btn btn-sm btn-primary rounded mb-2 mx-2">Sign Up</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.body.appendChild(document.createElement('div')));
  root.render(<Login />);
})