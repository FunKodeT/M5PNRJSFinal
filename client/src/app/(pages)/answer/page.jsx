'use client';
import React, {useEffect, useState} from 'react';

const Answer = () => {
	const [user, setUser] = useState(null);
	const [predictions, setPredictions] = useState([]);
	const [fullPredictions, setFullPredictions] = useState([]);
	const [latestPrediction, setLatestPrediction] = useState([]);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		let userId = localStorage.getItem('user');
		let loggedIn = localStorage.getItem('loggedIn');
		if (loggedIn === 'false') {
			setUser(userId);
		} else {
			setUser(userId, loggedIn);
		}
	}, []);

	// useEffect(() => {
	// 	if (user !== 'guest') {
	// 		const temp = async () => {
	// 			console.log('Start: verifyUser');
	// 			let response = await fetch(
	// 				`http://localhost:3000/user/${user}`,
	// 				{
	// 					method: 'GET',
	// 					headers: {
	// 						'Content-Type': 'application/json',
	// 					},
	// 				}
	// 			);
	// 			if (response.ok) {
	// 				console.log('Success: verifyUser');
	// 				console.log('Start: callPredictions');
	// 				const data = await response.json();
	// 				setPredictions(data.predictions);
	// 				console.log('Success: responseToArray', data.predictions);
	// 			} else {
	// 				console.log('Failure: verifyUser');
	// 			}
	// 		};
	// 		temp();
	// 	} else {
	// 		const guestPrediction = async () => {
	// 			console.log('Start: verifyGuest');
	// 			let guestId = localStorage.getItem('guestId');
	// 			let response = await fetch(
	// 				`http://localhost:3000/user/predictions/${guestId}`,
	// 				{
	// 					method: 'GET',
	// 					headers: {
	// 						'Content-Type': 'application/json',
	// 					},
	// 				}
	// 			);
	// 			if (response.ok) {
	// 				const data = await response.json();
	// 				setPredictions(data);
	// 				console.log('Success: responseToArray', data);
	// 			} else {
	// 				console.log('Failure: verifyGuest');
	// 			}
	// 		};
	// 		guestPrediction();
	// 	}
	// }, [user]);

	useEffect(() => {
		if (user !== 'guest') {
			const temp = async () => {
				console.log('Start: verifyUser');
				let response = await fetch(
					`http://localhost:3000/user/${user}`,
					{
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
						},
					}
				);
				if (response.ok) {
					console.log('Success: verifyUser');
					console.log('Start: callPredictions');
					let responseTwo = await fetch(
						`http://localhost:3000/user/predictions/${user}`,
						{
							method: 'GET',
							headers: {
								'Content-Type': 'application/json',
							},
						}
					);
					if (responseTwo.ok) {
						console.log('Success: callPredictions');
						const data = await responseTwo.json();
						setPredictions(data.predictions);
						console.log(
							'Success: responseToArray',
							data.predictions
						);
					}
				}
			};
			temp();
		} else {
			const guestPrediction = async () => {
				console.log('Start: verifyUser');
				console.log('>1');
				let guestId = localStorage.getItem('guestId');
				console.log('<1');
				console.log('>2');
				let response = await fetch(
					`http://localhost:3000/user/predictions/${guestId}`,
					{
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
						},
					}
				);
				if (response.ok) {
					console.log('<2');
					console.log('>3');
					const data = await response.json();
					setPredictions(data.predictions);
					console.log('<3');
				}
			};
			guestPrediction();
		}
	}, [user]);

	console.log('done', predictions);

	useEffect(() => {
		console.log('Start: fullPredictions');
		if (user !== 'guest') {
			if (predictions.length > 0) {
				const temp = async () => {
					try {
						console.log('Start: postFetch');
						let response = await fetch(
							`http://localhost:3000/data/predictions`,
							{
								// `http://localhost:3000/data/predictions/${predictions}`, {
								method: 'POST',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify({
									predictionIds: predictions,
								}),
							}
						);
						if (response.ok) {
							console.log('Success: postFetch', response);
							console.log('Start: predictionToArray');
							const data = await response.json();
							setFullPredictions(data);
							console.log('Success: predictionToArray', data);
						} else {
							console.log(
								'Failure: predictionToArray',
								response.statusText
							);
						}
					} catch (error) {
						console.log(error);
					}
				};
				temp();
			} else {
				console.log('Something went wrong');
			}
		} else {
			if (predictions.length > 0) {
				const temp = async () => {
					try {
						console.log('Start: postFetch');
						let response = await fetch(
							`http://localhost:3000/data/predictions`,
							{
								// `http://localhost:3000/data/predictions/${predictions}`, {
								method: 'POST',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify({
									predictionIds: predictions,
								}),
							}
						);
						if (response.ok) {
							console.log('Success: postFetch', response);
							console.log('Start: predictionToArray');
							const data = await response.json();
							setFullPredictions(data);
							console.log('Success: predictionToArray', data);
						} else {
							console.log(
								'Failure: predictionToArray',
								response.statusText
							);
						}
					} catch (error) {
						console.log(error);
					}
				};
				temp();
			} else {
				console.log('User is not logged in');
			}
		}
	}, [predictions]);

	console.log('done dos', fullPredictions);

	useEffect(() => {
		console.log('-> Start', fullPredictions);
		if (fullPredictions.length > 0) {
			console.log('1');
			let recentOne = fullPredictions.reduce((prev, current) =>
				prev.createdOn > current.createdOn ? prev : current
			);
			console.log('2', recentOne);
			let recentTwo = {
				question: recentOne.question,
				answer: recentOne.answer,
			};
			console.log('3', recentTwo);
			setLatestPrediction(recentTwo);
			console.log('4', latestPrediction);
		}
	}, [fullPredictions]);

	if (user !== 'guest') {
		return (
			<div className="border border-green-500 rounded py-5 px-5">
				<div className="answerHeader">
					<h3>You asked:</h3>
					<h1>{latestPrediction.question}</h1>
					<h3>The Magic 8-Ball says:</h3>
					<h1>{latestPrediction.answer}</h1>
				</div>

				<div className="border border-orange-400 p-3 m-3">
					<h2 className="text-center">Your Predictions:</h2>
					{fullPredictions.length > 0 ? (
						fullPredictions
							.slice()
							.reverse()
							.map((prediction) => (
								<div
									key={prediction._id}
									className="border border-gray-300 p-3 mt-3">
									<p>Question: {prediction.question}</p>
									<p className="ml-10">
										Answer: {prediction.answer}
									</p>
								</div>
							))
					) : (
						<p>You haven't made any yet!</p>
					)}
				</div>
			</div>
		);
	} else {
		return (
			<div className="border border-green-500 rounded py-5 px-5 mt-5">
				<div className="answerHeader">
					<h3>You asked:</h3>
					<h1>{latestPrediction.question}</h1>
					<h3>The Magic 8-Ball says:</h3>
					<h1>{latestPrediction.answer}</h1>
				</div>

				<div className="border border-orange-400 p-3 m-3">
					<h2 className="text-center">
						You must login to see previous predictions
					</h2>
				</div>
			</div>
		);
	}
};

export default Answer;
