import React from 'react';

const postPredictionHandler = async () => {
	console.log('Start: postPredictionHandler');
	try {
		console.log('Start: fetch');
		const response = await fetch(
			'https://m5pnrjsfinalapi.onrender.com/data',
			{
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({key: formData}),
			}
		);
		console.log('Success: fetch');
		console.log('Start: Results');
		const result = await response.json();
		console.log('Success: Results', result);
	} catch (error) {
		console.log('Failure: postPredictionHandler', error);
	}
};

export default postPredictionHandler;
