import React from 'react';

const Signin = () => {
	return (
		<div className="border border-pink-500 rounded py-5 px-5 mt-5">
			<div className="signInHeader">
				<h1>You would like to signIn us?</h1>
			</div>
			<div>
				<form action="/user" method="post" id="signInData">
					<label for="username">Username:</label>
					<input
						type="text"
						name="username"
						id="userName"
						placeholder="Username..."
						required
					/>
					<label for="password">Password:</label>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Password..."
						required
					/>
					<input
						id="signInBtn"
						className="homeTrigger"
						type="submit"
						value="Sign In!"
					/>
				</form>
				<button
					type="button"
					id="homeTrigger"
					className="homePage"
					onclick="swapPrep(this)">
					Home
				</button>
			</div>
		</div>
	);
};

export default Signin;
