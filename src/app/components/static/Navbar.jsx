'use client';
import React from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const Navbar = () => {
	const pathname = usePathname().toString();

	// DYNAMIC NAV FUNCTION
	if (pathname === '/ask') {
		return (
			<div className="border border-yellow-500 rounded py-5 px-5 mt-5">
				<ul className="flex flew-row justify-evenly">
					<li className="homePage">
						<button
							type="button"
							id="homeTrigger"
							className="homePage">
							<Link href="/">Home</Link>
						</button>
					</li>
					<li className="aboutPage">
						<button
							type="button"
							id="aboutTrigger"
							className="aboutPage">
							<Link href="/about">About</Link>
						</button>
					</li>
					<li className="answerPage">
						<button
							type="button"
							id="answerTrigger"
							className="answerPage">
							<Link href="/answer">Answer</Link>
						</button>
					</li>
				</ul>
			</div>
		);
	} else if (pathname === '/about') {
		return (
			<div className="border border-yellow-500 rounded py-5 px-5 mt-5">
				<ul className="flex flew-row justify-evenly">
					<li className="askPage">
						<button
							type="button"
							id="askTrigger"
							className="askPage">
							<Link href="/ask">Ask</Link>
						</button>
					</li>
					<li className="homePage">
						<button
							type="button"
							id="homeTrigger"
							className="homePage">
							<Link href="/">Home</Link>
						</button>
					</li>
					<li className="answerPage">
						<button
							type="button"
							id="answerTrigger"
							className="answerPage">
							<Link href="/answer">Answer</Link>
						</button>
					</li>
				</ul>
			</div>
		);
	} else if (pathname === '/answer') {
		return (
			<div className="border border-yellow-500 rounded py-5 px-5 mt-5">
				<ul className="flex flew-row justify-evenly">
					<li className="askPage">
						<button
							type="button"
							id="askTrigger"
							className="askPage">
							<Link href="/ask">Ask</Link>
						</button>
					</li>
					<li className="aboutPage">
						<button
							type="button"
							id="aboutTrigger"
							className="aboutPage">
							<Link href="/about">About</Link>
						</button>
					</li>
					<li className="homePage">
						<button
							type="button"
							id="homeTrigger"
							className="homePage">
							<Link href="/">Home</Link>
						</button>
					</li>
				</ul>
			</div>
		);
	} else {
		return (
			<div className="border border-yellow-500 rounded py-5 px-5 mt-5">
				<ul className="flex flew-row justify-evenly">
					<li className="askPage">
						<button
							type="button"
							id="askTrigger"
							className="askPage">
							<Link href="/ask">Ask</Link>
						</button>
					</li>
					<li className="aboutPage">
						<button
							type="button"
							id="aboutTrigger"
							className="aboutPage">
							<Link href="/about">About</Link>
						</button>
					</li>
					<li className="answerPage">
						<button
							type="button"
							id="answerTrigger"
							className="answerPage">
							<Link href="/answer">Answer</Link>
						</button>
					</li>
				</ul>
			</div>
		);
	}
};
export default Navbar;
