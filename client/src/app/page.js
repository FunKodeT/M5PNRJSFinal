'use client';
import Image from 'next/image';
import React, {useEffect, useState} from 'react';
import Link from 'next/link';
// import useSWR from 'swr';
import fetcher from './components/static/Handlers/fetcher';
import useLocalStorage from './components/static/Handlers/LocalStorage/DataStorage';

const URI = process.env.MONGO_URI;

export default function Home() {
	// --------------------------------------------------------------------------
	// START: IF LOGGED IN STATE
	let user = localStorage.getItem('user');
	console.log(user);
	if (user === null || user == 'guest') {
		localStorage.setItem('user', 'guest');
		const generateRandomString = (length) => {
			const characters =
				'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			let result = '';
			for (let i = 0; i < length; i++) {
				result += characters.charAt(
					Math.floor(Math.random() * characters.length)
				);
			}
			return result;
		};
		localStorage.setItem('guestId', generateRandomString(25));
		localStorage.setItem('loggedIn', false);
	} else {
		localStorage.setItem('user', user);
		localStorage.setItem('loggedIn', true);
	}

	// const [value, setValue] = useState();
	// const [localUser, setLocalUser] = useState(value);

	// useEffect(() => {
	// 	console.log(localUser);
	// 	if (!value) {
	// 		console.log('Start: userLoggedOut');
	// 		let guestUser = {user: 'guest'};
	// 		setValue(guestUser);
	// 		setLocalUser(guestUser);
	// 		console.log('User is not logged in', guestUser);
	// 	} else {
	// 		console.log('Start: userLoggedIn');
	// 		setValue(localUser);
	// 		console.log('User is logged in', localUser);
	// 		console.log('Success: userLoggedIn');
	// 	}
	// });

	// END: IF LOGGED IN STATE
	// --------------------------------------------------------------------------
	// START: SWR API FETCH

	// const {data, error, isLoading} = useSWR(
	// 	'https://m5pnrjsfinalapi.onrender.com/data',
	// 	fetcher
	// );

	// if (error) return console.log('Failure: Fetcher -> ', error);
	// if (isLoading) return console.log('Fetcher -> Loading...');
	// console.log('Success: Fetcher -> ', data);

	// END: SWR API FETCH
	// --------------------------------------------------------------------------
	return (
		<div className="border border-gray-900 rounded py-5 px-5">
			<div className="homeHeader">
				<h1>Do you know the future?</h1>
				<p>
					If you answered &quot;no&quot;, well you are in luck! You
					were destined to be here,
					<br />
					in <strong>this</strong> moment,
					<br />
					to
					<Link href="/ask">ask</Link> your questions of
					<Link href="/answer">the future</Link>, and receive answers!
				</p>
			</div>
			<div className="homeAskLink">
				<h3>Are you ready?</h3>
				<h2>
					The only thing left to do
					<br />
					<Link href="/ask">
						<span>
							<u>
								<em>is ask...</em>
							</u>
						</span>
					</Link>
				</h2>
			</div>
		</div>
	);
}
