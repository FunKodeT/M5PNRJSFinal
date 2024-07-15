'use client';
import React from 'react';
import {useState} from 'react';
import Link from 'next/link';
import postPredictionHandler from '@/app/components/static/handlers';

const Ask = () => {
	const [question, setQuestion] = useState('');

	const submitData = async () => {
		let response = await fetch(
			'https://m5pnrjsfinalapi.onrender.com/data',
			{
				mode: 'no-cors',
				method: 'POST',
				body: JSON.stringify({
					question: question,
					userId: 1,
				}),
				headers: {
					'Content-type': 'application/json',
				},
			}
		);
		response = await response.json();
		alert(JSON.stringify(response));
	};

	return (
		<div className="border border-orange-500 rounded py-5 px-5 mt-5">
			<div className="askHeader">
				<h1>What future do you wish to know?</h1>
			</div>
			<form id="askForm">
				<input
					type="text"
					name="question"
					id="question"
					value={question}
					onChange={(e) => setQuestion(e.target.value)}
					placeholder="Ask your question!"
					required
					className="text-black"
				/>
				<Link href="/answer">
					<button
						id="answerTrigger"
						type="submit"
						onClick={submitData}>
						Receive Revelation!
					</button>
				</Link>
			</form>
		</div>
	);
};

export default Ask;
