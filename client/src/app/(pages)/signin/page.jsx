'use client';
import React, {useState, useEffect} from 'react';
import Link from 'next/link';

const Signin = (req, res) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const submitData = async (e) => {
		e.preventDefault();
		console.log('Start: submitData');
		console.log('Start: dataReq');
		let nameSubmit = username;
		let passSubmit = password;
		console.log('Success: dataReq', nameSubmit, passSubmit);
		console.log('Start: submitResponse');
		res = await fetch('http://localhost:3000/user/login/:id', {
			method: 'POST',
			body: JSON.stringify({username: nameSubmit, password: passSubmit}),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		console.log('Response');
		if (res.ok) {
			const data = await res.json();
			console.log('Success: submitData', data);
			localStorage.setItem('user', data.user);
			localStorage.setItem('loggedIn', true);
		} else {
			console.log('Failure: submitData');
		}
	};

	return (
		<div className="border border-pink-500 rounded py-5 px-5">
			<div className="signInHeader">
				<h1>You would like to Sign In?</h1>
			</div>
			<div>
				<form id="signInData" onSubmit={submitData}>
					<label htmlFor="username">Username:</label>
					<input
						type="text"
						name="username"
						id="userName"
						placeholder="Username..."
						onChange={(e) => setUsername(e.target.value)}
						className="text-black"
						required
					/>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Password..."
						onChange={(e) => setPassword(e.target.value)}
						className="text-black"
						required
					/>
					<button id="signInBtn" type="submit">
						Sign In!
					</button>
					{/* <button id="signInBtn" type="submit">
						<Link href="/">Sign In!</Link>
					</button> */}
				</form>
				<Link href="/">
					<button id="homeTrigger">Home</button>
				</Link>
			</div>
		</div>
	);
};

export default Signin;
