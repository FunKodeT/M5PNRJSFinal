import React from 'react';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="flex flex-col mt-0 bg-gradient-to-t from-[#614a1a] via-[#1f1202]  to-[#00021f]">
			<ul className="flex flex-col justify-center items-center">
				<li className="underline text-center bg-gradient-to-t from-bg-[#11111121] to-[#af800021] text-[#adadad] border border-b-[#af8000de] border-r-[#af8000de] border-l-[#af800056] border-t-[#af800021] rounded mt-2 px-2 py-1 w-[10%]">
					<Link href="/contact">Contact Us</Link>
				</li>
				<li className="underline text-center bg-gradient-to-t from-bg-[#11111121] to-[#af800021] text-[#adadad] border border-b-[#af8000] border-r-[#af8000de] border-l-[#af800056] border-t-[#af800021] rounded mt-2 px-2 py-1 w-[10%]">
					<Link href="/about">About Us</Link>
				</li>
				<li className="underline text-center bg-gradient-to-t from-bg-[#11111121] to-[#af800021] text-[#adadad] border border-b-[#af8000] border-r-[#af8000de] border-l-[#af800056] border-t-[#af800021] rounded mt-2 px-2 py-1 w-[10%]">
					<a
						href="https://en.wikipedia.org/wiki/Magic_8_Ball"
						target="_blank">
						Magic History Lesson
					</a>
				</li>
			</ul>
			<br />
			<span className="grid grid-cols-3">
				<Link
					href="https://www.copyright.gov/title17/"
					target="_blank"
					className="underline text-xl text-center flex justify-center bg-gradient-to-tl from-[#af8000] via-[#1f1202] to-[#111111] text-white border border-b-[#000158] border-r-[#0e0f4dad] border-l-[#00015869] border-t-[#0001583f] rounded px-2 py-1">
					Magic 8-Ball © 2023-2024
				</Link>{' '}
				<Link
					href="https://tooeletech.edu/"
					target="_blank"
					className="underline text-2xl text-center flex justify-center bg-gradient-to-t from-[#af8000]  to-[#111111] text-white border border-b-[#000158] border-r-[#0e0f4dad] border-l-[#00015869] border-t-[#0001583f] rounded px-2 py-1">
					Tooele Technical College
				</Link>{' '}
				<Link
					href="https://github.com/FunKodeT"
					target="_blank"
					className="underline text-xl text-center flex justify-center bg-gradient-to-tr from-[#af8000] via-[#1f1202] to-[#111111] text-white border border-b-[#000158] border-r-[#0e0f4dad] border-l-[#00015869] border-t-[#0001583f] rounded px-2 py-1">
					Matthew L. Cootey
				</Link>
			</span>
		</footer>
	);
};

export default Footer;
