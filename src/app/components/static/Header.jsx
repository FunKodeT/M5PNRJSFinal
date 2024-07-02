'use client';
import React from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const Header = () => {
	const pathname = usePathname().toString();
	let headerName =
		pathname.replace('/', '').charAt(0).toUpperCase() + pathname.slice(2);

	return (
		<header>
			<ul className="flex flex-row justify-between">
				<li>
					<Link href="/">Logo</Link>
				</li>
				<li>{headerName}</li>
				<li></li>
			</ul>
		</header>
	);
};

export default Header;
