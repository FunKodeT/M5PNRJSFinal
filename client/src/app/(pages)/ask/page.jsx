'use client';
import React from 'react';
import {useState} from 'react';
import Link from 'next/link';

const Ask = () => {
	const [question, setQuestion] = useState('');

	const submitData = async (e) => {
		e.preventDefault();
		console.log('Start: submitData');
		console.log('Start: questionReq');
		console.log('LoggedIn?');
		let loggedIn = localStorage.getItem('loggedIn');
		console.log(loggedIn);
		if (loggedIn === 'false') {
			console.log('!LoggedIn');
			let guestId = localStorage.getItem('guestId');
			let sentQuestion = question;
			console.log('Success: questionReq', '...', guestId, sentQuestion);
			console.log('Start: submitResponse');
			let response = await fetch(
				// 'https://m5pnrjsfinalapi.onrender.com/data',
				'http://localhost:3000/data',
				{
					method: 'POST',
					body: JSON.stringify({
						question: question,
						guestId: guestId,
					}),
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);

			console.log('Response', response);
			if (response.ok) {
				const data = await response.json();
				console.log('Success: submitData', '!LoggedIn', data);
				alert(JSON.stringify(response));
			} else {
				console.log('Failure: submitData');
			}
		} else {
			let userId = localStorage.getItem('user');
			let sentQuestion = question;
			console.log('Success: questionReq', sentQuestion);
			console.log('Start: submitResponse');
			let response = await fetch(
				// 'https://m5pnrjsfinalapi.onrender.com/data',
				'http://localhost:3000/data',
				{
					method: 'POST',
					body: JSON.stringify({
						question: question,
						userId: userId,
					}),
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);

			console.log('Response', response);
			if (response.ok) {
				const data = await response.json();
				console.log('Success: submitData', data);
				alert(JSON.stringify(response));
			} else {
				console.log('Failure: submitData');
			}
		}
	};

	return (
		<div className="border border-orange-500 rounded py-5 px-5">
			<div className="text-2xl">
				<h1 className="text-center inline-block ml-8 mb-4">
					What future do{' '}
					<em>
						<u>you</u>
					</em>{' '}
					wish to know?
				</h1>

				<form
					id="askForm"
					onSubmit={submitData}
					className="flex flex-row justify-center">
					<input
						type="text"
						name="question"
						id="question"
						onChange={(e) => setQuestion(e.target.value)}
						placeholder="Ask your question!"
						required
						className="text-center text-black border-4 border-double border-spacing-8 border-[#55adff] rounded-3xl bg-[#c9e2ff] -ml-10 pr-10 pl-10"
					/>
					<Link href="/answer">
						<button
							type="submit"
							className="text-center text-black text-sm px-1 border-4 border-double border-spacing-8 border-[#e2b213] rounded-3xl bg-[#ffc711]">
							Receive Revelation!
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
};

export default Ask;
