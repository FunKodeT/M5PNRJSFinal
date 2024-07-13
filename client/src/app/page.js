'use client';
import Image from 'next/image';
import React, {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import Link from 'next/link';
import useSWR from 'swr';
import fetcher from './components/static/fetcher';

const URI = process.env.MONGO_URI;

export default function Home() {
	const {data, error, isLoading} = useSWR(
		'https://m5pnrjsfinalapi.onrender.com/data',
		fetcher
	);
	if (error) return console.log('Failure: Fetcher -> ', error);
	if (isLoading) return console.log('Fetcher -> Loading...');
	return console.log('Success: Fetcher -> ', data);
	// const [predictions, setPredictions] = useState([]);
	// const [query, setQuery] = useState('');

	/* useEffect(() => {
		fetch(`http://localhost:3000/data`, {mode: 'no-cors'})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setPredictions(data);
			});
	}, []); */

	/* useEffect(() => {
		getPredictionsLocal();
	}, []); */

	/* const getPredictionsLocal = async () => {
		fetch(`http://localhost:3000/data`, {mode: 'no-cors'})
			.then((x) => x.json())
			.then((y) => {
				setPredictions(y.hits);
				console.log(y.hits);
			});
	}; */

	/* 	useEffect(() => {
		getPredictions();
	}, [query]); */

	/* 	const getPredictions = async () => {
		fetch(`https://m5pnrjsfinalapi.onrender.com/data`)
			.then((x) => x.json())
			.then((y) => {
				setPredictions(y.hits);
				console.log(y.hits);
			});
	}; */

	return (
		<div className="border border-gray-900 rounded py-5 px-5 mt-5">
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

// // DYNAMIC COMPONENTS
// import About from './(pages)/about/page';
// import Answer from './(pages)/answer/page';
// import Ask from './(pages)/ask/page';
// import Contact from './(pages)/contact/page';
// import Profile from './(pages)/profile/page';
// import Register from './(pages)/register/page';
// import Signin from './(pages)/signin/page';
// import Signout from './(pages)/signout/page';

// {/* <Navbar />
// 			<div>
// 				<Routes>
// 					{/* ABOUT PAGE */}
// 					<Route path="/about" element={<About />} />
// 					{/* ANSWER PAGE */}
// 					<Route path="/answer" element={<Answer />} />
// 					{/* ASK PAGE */}
// 					<Route path="/ask" element={<Ask />} />
// 					{/* CONTACT PAGE */}
// 					<Route path="/contact" element={<Contact />} />
// 					{/* PROFILE PAGE */}
// 					<Route path="/profile" element={<Profile />} />
// 					{/* REGISTER PAGE */}
// 					<Route path="/register" element={<Register />} />
// 					{/* SIGNIN PAGE */}
// 					<Route path="/signin" element={<Signin />} />
// 					{/* SIGNOUT PAGE */}
// 					<Route path="/signout" element={<Signout />} />
// 					{/* 404 HANDLER */}
// 					<Route
// 						path="*"
// 						element={
// 							<Home>
// 								<span>404 - Page not found</span>
// 							</Home>
// 						}
// 					/>
// 				</Routes>
// 			</div>
// 			<Footer /> */}
