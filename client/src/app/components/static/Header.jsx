'use client';
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [pathname, setPathname] = useState('Home');

	useEffect(() => {
		const loggedIn = localStorage.getItem('LoggedIn');
		if (loggedIn === 'true') {
			setIsLoggedIn(loggedIn);
		} else {
			console.log('User is not logged in');
		}
	}, []);

	const pagePath = usePathname().toString();

	useEffect(() => {
		function populateNav() {
			if (pagePath === '/') {
				setPathname('Home');
			} else {
				let headerName =
					pagePath.replace('/', '').charAt(0).toUpperCase() +
					pagePath.slice(2);
				setPathname(headerName);
			}
		}
		populateNav();
	}, [pagePath]);

	const loggedNav = () => {
		if (isLoggedIn) {
			return (
				<div className="text-white flex flex-row justify-end">
					<Link href="/profile" className="underline mr-4">
						Username
					</Link>
					<Link href="/signout" className="underline">
						Sign out
					</Link>
				</div>
			);
		} else {
			return (
				<div className="text-white flex flex-row justify-end">
					<Link href="/signin" className="underline mr-4">
						Sign in
					</Link>
					<Link href="/register" className="underline">
						Register
					</Link>
				</div>
			);
		}
	};

	return (
		<header className="flex flex-col items-center justify-between px-4 py-2 bg-gray-800 border-b-2-[#00021f] bg-gradient-to-b from-[#9e8645] via-[#3d2201]  to-[#000874]">
			<ul className="grid grid-cols-3 items-center w-full">
				<li className="flex justify-start pl-4">
					<Link href="/">Logo</Link>
				</li>
				<li className="flex justify-center">
					<h1 className="text-white text-2xl">{pathname}</h1>
				</li>
				<li>
					<div className="flex justify-end pr-4">{loggedNav()}</div>
				</li>
			</ul>
		</header>
	);
};

export default Header;
