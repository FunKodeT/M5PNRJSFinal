import React from 'react';

const Ask = () => {
	return (
		<div className="border border-orange-500 rounded py-5 px-5 mt-5">
			<div class="askHeader">
				<h1>What future do you wish to know?</h1>
			</div>
			<form action="/answer" method="post" id="askForm">
				<input
					type="text"
					name="magicQuestion"
					id="magicQuestion"
					placeholder="Ask your question!"
					required
				/>
				<input
					id="answerTrigger"
					type="submit"
					value="Receive Revelation!"
				/>
			</form>
		</div>
	);
};

export default Ask;
