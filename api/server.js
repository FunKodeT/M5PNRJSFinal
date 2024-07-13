// ==========================================================================
// START: SERVER.JS REQUIREMENTS FOR FUNCTIONALITY
// --------------------------------------------------------------------------
// START: MODULE REQUIREMENTS
const express = require('express');
const session = require('express-session');
const mongoDb = require('./database/connect.js');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
// --------------------------------------------------------------------------
// START: JSON AUTHENTICATION
const JWT = require('jsonwebtoken');
const jTKN = process.env.SCRT_TKN;
const tTKN = process.env.TEMP_SCRT;
// END: JSON AUTHENTICATION
// --------------------------------------------------------------------------
const bcrypt = require('bcryptjs');
const adRou = require('./routes/admin.js');
// END: MODULE REQUIREMENTS
// --------------------------------------------------------------------------
// START: APP FUNCTIONALITY
const PORT = process.env.PORT || 3000;
// END: APP FUNCTIONALITY
// --------------------------------------------------------------------------
// START: SESSION TOKENIZATION
const tempSesh = {
	secret: tTKN,
	cookie: {},
	resave: false,
	saveUninitialized: true,
};
// END: SESSION TOKENIZATION
// --------------------------------------------------------------------------
// END: SERVER.JS REQUIREMENTS FOR FUNCTIONALITY
// --------------------------------------------------------------------------
// ==========================================================================
// START: SERVER MIDDLEWARE
app.use(express.json());
app.use(cookieParser());
app.use(session(tempSesh));
app.use(express.urlencoded({extended: true}));

/* app.use(express.json())
	.use((req, res, next) => {
		next();
	})
	.use('/', require('./routes/admin.js')); */

app.use(cors())
	.use(express.json())
	.use((req, res, next) => {
		res.setHeader('Access-Control-Allow-Origin', '*');
		next();
	})
	.use('/', require('./routes/admin.js'));
// This will throw an error when not connected via ethernet

app.get('/', (req, res) => {
	if (req.cookies.jtkn) {
		const verify = JWT.verify(req.cookies.jtkn, jTKN);
		console.log('Success:', verify);
	}
});
// END: SERVER MIDDLEWARE
// --------------------------------------------------------------------------
// START: SERVER INITIALIZATION
mongoDb.initDb((err) => {
	if (err) {
		console.log('Failure: ', err);
	} else {
		app.listen(PORT);
		console.log(
			'Success: Database Connected, Server initialized. Connected to: ',
			PORT
		);
	}
});
// END: SERVER INITIALIZATION
// --------------------------------------------------------------------------
