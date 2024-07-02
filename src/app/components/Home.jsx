import React from 'react';

const Home = () => {
	return (
		<div className="border border-gray-900 rounded py-5 px-5 mt-5">
			<div class="homeHeader">
				<h1>Do you know the future?</h1>
				<p>
					If you answered &quot;no&quot;, well you are in luck! You
					were destined to be here,
					<br />
					in <strong>this</strong> moment,
					<br />
					to ask your questions of the future, and receive answers!
				</p>
			</div>
			<div class="homeAskLink">
				<h3>Are you ready?</h3>
				<h2>
					The only thing left to do
					<br />
					<span id="askTrigger" onclick="swapPrep(this)">
						<u>
							<em>is ask...</em>
						</u>
					</span>
				</h2>
			</div>
		</div>
	);
};

export default Home;
