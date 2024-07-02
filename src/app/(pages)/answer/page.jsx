import React from 'react';

const Answer = () => {
	return (
		<div className="border border-green-500 rounded py-5 px-5 mt-5">
			<div className="answerHeader">
				<h1>
					You asked: <span id="userQuestion"></span>
				</h1>
				<h3>The Magic 8-Ball says:</h3>
				<h1>
					<span id="magicAnswer"></span>
				</h1>
			</div>
		</div>
	);
};

export default Answer;
