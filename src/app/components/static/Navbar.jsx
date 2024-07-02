import React from 'react';

const Navbar = ({activePage}) => {
	return (
		<div className="border border-yellow-500 rounded py-5 px-5 mt-5">
			<h1>{activePage}</h1>
			<ul className="flex flew-row justify-evenly">
				<li class="askPage">
					<button
						type="button"
						id="askTrigger"
						class="askPage"
						onclick="swapPrep(this)">
						Ask
					</button>
				</li>
				<li class="aboutPage">
					<button
						type="button"
						id="aboutTrigger"
						class="aboutPage"
						onclick="swapPrep(this)">
						About
					</button>
				</li>
				<li class="answerPage">
					<button
						type="button"
						id="answerTrigger"
						class="answerPage"
						onclick="swapPrep(this)">
						Answer
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
