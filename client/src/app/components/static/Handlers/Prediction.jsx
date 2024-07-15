import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Loader from '../Loader/Loader';

const [loading, setLoading] = useState(true);
const [predictions, setPredictions] = useState([]);

useEffect(() => {
	setLoading(true);
	async function getPredictions() {
		const response = await fetch(
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
	}
});
