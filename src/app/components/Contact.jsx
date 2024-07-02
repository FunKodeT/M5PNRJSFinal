import React from 'react';

const Contact = () => {
	return (
		<div className="border border-purple-500 rounded py-5 px-5 mt-5">
			<div class="contactHeader">
				<h1>You would like to contact us?</h1>
				<div>
					<p>Don&apos;t</p>
				</div>
				<div>
					Please,{' '}
					<span id="homeTrigger" onclick="swapPrep(this)">
						return to learn your fortune!
					</span>
				</div>
			</div>
		</div>
	);
};

export default Contact;
