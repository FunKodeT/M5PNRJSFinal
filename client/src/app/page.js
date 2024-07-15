'use client';
import Image from 'next/image';
import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import fetcher from './components/static/fetcher';

const URI = process.env.MONGO_URI;

export default function Home() {
	// --------------------------------------------------------------------------
	// START: SWR API FETCH

	const {data, error, isLoading} = useSWR(
		'https://m5pnrjsfinalapi.onrender.com/data',
		fetcher
	);

	if (error) return console.log('Failure: Fetcher -> ', error);
	if (isLoading) return console.log('Fetcher -> Loading...');
	console.log('Success: Fetcher -> ', data);

	// END: SWR API FETCH
	// --------------------------------------------------------------------------

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
