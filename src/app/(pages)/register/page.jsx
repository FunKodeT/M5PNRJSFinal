import React from 'react';

const Register = () => {
	return (
		<div className="border border-gray-500 rounded py-5 px-5 mt-5">
			<div className="registerHeader">
				<h1>Would you like to register with us?</h1>
				<div>
					<p>
						Registering with us will allow for you to view any and
						all predictions you receive after account creation, as
						well as stores any future answers.
					</p>
				</div>
				<form action="/user" method="post" id="registerData">
					<label for="username">Username:</label>
					<input
						type="text"
						name="username"
						id="username"
						placeholder="Who are you..."
						required
					/>
					<label for="password">Password:</label>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Why are you..."
						required
					/>
					<label for="confirmPassword">Confirm Password:</label>
					<input
						type="password"
						name="confirmPassword"
						id="confirmPassword"
						placeholder="You sure?"
						required
					/>
					<br />
					<span id="errMsg" className="error">
						{/* style="display: none" */}
						Passwords do not match
					</span>
					<br />
					<input
						id="registerSubmit"
						type="submit"
						value="Create Account"
						className="homeTrigger"
						disabled
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

export default Register;
