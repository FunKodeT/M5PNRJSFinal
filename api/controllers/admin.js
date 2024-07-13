const express = require('express');
const session = require('express-session');
// --------------------------------------------------------------------------
// START: ADMIN TEST FUNCTIONS
const tstFn = (req, res, next) => {
	const test = req.session.user;
	console.log(test);
	res.send('Success');
};

const seshTest = (req, res) => {
	req.session.user = 'test';
	res.send('Sah dude');
};

const seshGetTest = (req, res) => {
	const user = req.session.user;
	res.send(`Hello ${user}`);
};
// END: ADMIN TEST FUNCTIONS
// --------------------------------------------------------------------------
// START: MODULE EXPORT
module.exports = {tstFn, seshTest, seshGetTest};
// END: MODULE EXPORT
// --------------------------------------------------------------------------
