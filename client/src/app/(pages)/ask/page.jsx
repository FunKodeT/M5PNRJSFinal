'use client';
import React from 'react';
import {useState} from 'react';
import Link from 'next/link';
import postPredictionHandler from '@/app/components/static/Handlers/Handlers';

const Ask = () => {
	const [question, setQuestion] = useState();

	const submitData = async (req, res) => {
		console.log('Start: submitData');
		console.log('Start: questionReq');
		let sentQuestion = question;
		console.log('Success: questionReq', sentQuestion);
		console.log('Start: submitResponse');
		let response = await fetch(
			// 'https://m5pnrjsfinalapi.onrender.com/data',
			'http://localhost:3000/data',
			{
				mode: 'no-cors',
				method: 'POST',
				body: JSON.stringify({
					question: question,
					userId: 1,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		console.log('Response', await response);
		response = await JSON.stringify(response);

		console.log('Success: submitResponse', response);
		if (response.ok) {
			console.log('Success: submitData');
			alert(JSON.stringify(response));
		} else {
			console.log('Failure: submitData');
		}
	};

	return (
		<div className="border border-orange-500 rounded py-5 px-5 mt-5">
			<div className="askHeader">
				<h1>What future do you wish to know?</h1>
			</div>
			<form action="post" id="askForm">
				<input
					type="text"
					name="question"
					id="question"
					onChange={(e) => setQuestion(e.target.value)}
					placeholder="Ask your question!"
					required
					className="text-black"
				/>
				<Link href="/answer">
					<button
						id="answerTrigger"
						type="submit"
						//value={question}
						onClick={submitData}>
						Receive Revelation!
					</button>
				</Link>
			</form>
		</div>
	);
};

export default Ask;
