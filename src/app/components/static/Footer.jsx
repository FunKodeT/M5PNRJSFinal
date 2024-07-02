import React from 'react';

const Footer = () => {
	return (
		<footer className="border border-yellow-500 rounded py-5 px-5 mt-5">
			<ul className="flex flex-row justify-between">
				<li>
					<a href="">Contact Us</a>
				</li>
				<li>
					<a
						href="https://en.wikipedia.org/wiki/Magic_8_Ball"
						target="_blank">
						Magic History Lesson
					</a>
				</li>
				<li>
					<a href="">About Us</a>
				</li>
			</ul>
			<br />
			<span className="flex flex-row justify-between">
				<a href="https://www.copyright.gov/title17/" target="_blank">
					Magic 8-Ball © 2023-2024
				</a>{' '}
				<span>||</span>{' '}
				<a href="https://tooeletech.edu/" target="_blank">
					Tooele Technical College
				</a>{' '}
				<span>||</span>{' '}
				<a href="https://github.com/FunKodeT" target="_blank">
					Matthew L. Cootey
				</a>
			</span>
		</footer>
	);
};

export default Footer;
