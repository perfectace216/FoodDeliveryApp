import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
const LoginPopup = ({ setShowLogin }) => {
	const [currentState, setCurrentState] = useState('Sign Up');

	return (
		<div className="login-popup">
			<form className="login-popup-container">
				<div className="login-popup-title">
					<h2>{currentState}</h2>
					<img
						onClick={() => setShowLogin(false)}
						src={assets.cross_icon}
						alt=""
					/>
				</div>
				<div className="login-popup-inputs">
					{currentState === 'Login' ? (
						<></>
					) : (
						<input type="text" placeholder="Your name" required />
					)}

					<input type="email" placeholder="Your email" required />
					<input type="password" placeholder="Password" required />
				</div>
				<button>
					{currentState === 'Sign Up' ? 'Create account' : 'Login'}
				</button>
				<div className="login-popup-condition">
					{currentState === 'Login' ? (
						''
					) : (
						<div className="checkbox-container">
							<input type="checkbox" required />
							<p>By continuing, I agree to the terms and conditions </p>
						</div>
					)}
				</div>
				{currentState === 'Login' ? (
					<p>
						Create a new Account ?{' '}
						<span onClick={() => setCurrentState('Sign Up')}>Click Here</span>
					</p>
				) : (
					<p>
						Already have an account ?{' '}
						<span onClick={() => setCurrentState('Login')}>Login Here</span>
					</p>
				)}
			</form>
		</div>
	);
};

export default LoginPopup;
