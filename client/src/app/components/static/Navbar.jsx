'use client';
import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const Navbar = () => {
	const pathname = usePathname().toString();

	const genNav = () => {
		if (pathname === '/ask') {
			return (
				<div className="flex flex-row justify-center rounded p-3 border-b-8 border-[#010752] border-double rounded-b-xl bg-gradient-to-b from-[#614a1a] via-[#1f1202]  to-[#00021f]">
					<ul className="flex flex-grow justify-between w-full max-w-screen-lg px-10">
						<li className="homePage">
							<button
								className="text-xl flex justify-start underline px-10 bg-gradient-to-tl from-bg-[#11111121] to-[#af800021] text-white border border-b-[#af8000] border-r-[#af8000de] border-l-[#af800056] border-t-[#af800021]"
								type="button"
								id="homeTrigger">
								<Link href="/">Home</Link>
							</button>
						</li>
						<li className="aboutPage">
							<button
								className="text-2xl flex justify-center underline px-10 bg-gradient-to-t from-bg-[#11111121] to-[#af800021] text-white border border-b-[#af8000] border-r-[#af8000de] border-l-[#af800056] border-t-[#af800021]"
								type="button"
								id="aboutTrigger">
								<Link href="/about">About</Link>
							</button>
						</li>
						<li className="answerPage">
							<button
								className="text-xl flex justify-end underline px-10 bg-gradient-to-tr from-bg-[#11111121] to-[#af800021] text-white border border-b-[#af8000] border-r-[#af8000de] border-l-[#af800056] border-t-[#af800021]"
								type="button"
								id="answerTrigger">
								<Link href="/answer">Answer</Link>
							</button>
						</li>
					</ul>
				</div>
			);
		} else if (pathname === '/about') {
			return (
				<div className="flex flex-row justify-center rounded p-3 border-b-8 border-[#010752] border-double rounded-b-xl bg-gradient-to-b from-[#614a1a] via-[#1f1202]  to-[#00021f]">
					<ul className="flex flex-grow justify-between w-full max-w-screen-lg px-10">
						<li className="askPage">
							<button
								type="button"
								id="askTrigger"
								className="flex justify-start underline">
								<Link href="/ask">Ask</Link>
							</button>
						</li>
						<li className="homePage">
							<button
								type="button"
								id="homeTrigger"
								className="flex justify-center underline">
								<Link href="/">Home</Link>
							</button>
						</li>
						<li className="answerPage">
							<button
								type="button"
								id="answerTrigger"
								className="flex justify-end underline">
								<Link href="/answer">Answer</Link>
							</button>
						</li>
					</ul>
				</div>
			);
		} else if (pathname === '/answer') {
			return (
				<div className="flex flex-row justify-center rounded p-3 border-b-8 border-[#010752] border-double rounded-b-xl bg-gradient-to-b from-[#614a1a] via-[#1f1202]  to-[#00021f]">
					<ul className="flex flex-grow justify-between w-full max-w-screen-lg px-10">
						<li className="askPage">
							<button
								type="button"
								id="askTrigger"
								className="flex justify-start underline">
								<Link href="/ask">Ask</Link>
							</button>
						</li>
						<li className="aboutPage">
							<button
								type="button"
								id="aboutTrigger"
								className="flex justify-center underline">
								<Link href="/about">About</Link>
							</button>
						</li>
						<li className="homePage">
							<button
								type="button"
								id="homeTrigger"
								className="flex justify-end underline">
								<Link href="/">Home</Link>
							</button>
						</li>
					</ul>
				</div>
			);
		} else {
			return (
				<div className="flex flex-row justify-center rounded p-3 border-b-8 border-[#010752] border-double rounded-b-xl bg-gradient-to-b from-[#614a1a] via-[#1f1202]  to-[#00021f]">
					{/* <div className="flex flex-row justify-center border border-yellow-500 rounded py-5 px-5 mt-5 bg-gray-800"> */}
					<ul className="flex flex-grow justify-between w-full max-w-screen-lg px-10">
						<li>
							<button
								type="button"
								id="askTrigger"
								className="flex justify-start underline">
								<Link href="/ask">Ask</Link>
							</button>
						</li>
						<li>
							<button
								type="button"
								id="aboutTrigger"
								className="flex justify-center underline">
								<Link href="/about">About</Link>
							</button>
						</li>
						<li>
							<button
								type="button"
								id="answerTrigger"
								className="flex justify-end underline">
								<Link href="/answer">Answer</Link>
							</button>
						</li>
					</ul>
				</div>
			);
		}
	};

	return <nav>{genNav()}</nav>;
};
export default Navbar;
