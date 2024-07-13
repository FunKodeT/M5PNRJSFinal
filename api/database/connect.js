// --------------------------------------------------------------------------
// START: CONNECT.JS REQUIREMENTS FOR FUNCTION
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
// END: CONNECT.JS REQUIREMENTS FOR FUNCTION
// --------------------------------------------------------------------------
// START; DB VARIABLE
let _db;
// END: DB VARIABLE
// --------------------------------------------------------------------------
// START: INITDB FUNCTION
const initDb = (callback) => {
	if (_db) {
		console.log('Success: Database Initialization');
		return callback(null, _db);
	}

	MongoClient.connect(process.env.MONGO_URI)
		.then((client) => {
			_db = client;
			callback(null, _db);
		})
		.catch((err) => {
			console.log('Failure: Database Initalization');
			callback(err);
		});
};
// END: INITDB FUNCTION
// --------------------------------------------------------------------------
// START: GETDB FUNCTION
const getDb = () => {
	if (!_db) {
		throw Error('Failure: Database Not Initialized');
	}
	return _db;
};
// END: GETDB FUNCTION
// --------------------------------------------------------------------------
// START: MODULE EXPORT
module.exports = {initDb, getDb};
// END: MODULE EXPORT
// --------------------------------------------------------------------------
