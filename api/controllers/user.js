// --------------------------------------------------------------------------
// START: USER.JS REQUIREMENTS FOR FUNCTION
const express = require('express');
const mongoDb = require('../database/connect.js');
const ObjectId = require('mongodb').ObjectId;
const mongoose = require('mongoose');
const {User, Prediction} = require('../models/User');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
// const {UnorderedBulkOperation} = require('mongodb');
const jTKN = process.env.SCRT_TKN;

// END: USER.JS REQUIREMENTS FOR FUNCTION
// --------------------------------------------------------------------------
// START: CRUD FUNCTIONS
const getAllUser = async (req, res) => {
	console.log('Start: getAllUser');
	try {
		console.log('Start: findUser');
		const result = await mongoDb.getDb().db().collection('User').find();
		console.log('Success: findUser');
		console.log('Start: toArray');
		result.toArray().then((lists) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json(lists);
		});
		console.log('Success: toArray');
		console.log(result);
		console.log('Success: getAllUser');
	} catch (error) {
		res.status(500).json(error);
		console.log('Failure: getAllUser');
	}
};
// --------------------------------------------------------------------------
const getOneUser = async (req, res) => {
	console.log('Start: getOneUser');
	try {
		console.log('Start: createIdFromReq');
		const userId = ObjectId.createFromHexString(req.params.id);
		console.log('Success: createIdFromReq');
		console.log('Start: findUser');
		const findUser = await mongoDb
			.getDb()
			.db()
			.collection('User')
			.find({_id: userId});
		console.log('Success: findUser');
		console.log('Start: toArray');
		if (findUser) {
			findUser.toArray().then((lists) => {
				res.setHeader('Content-Type', 'application/json');
				res.status(200).json(lists[0]);
				console.log('Success: toArray');
				console.log('Success: getOneUser', userId);
			});
		}
	} catch (error) {
		res.status(500).json(error);
		console.log('Failure: getOneUser');
	}
};
// --------------------------------------------------------------------------
const postNewUser = async (req, res) => {
	console.log('Start: postNewUser');
	const salt = 10;
	try {
		console.log('Start: userObject');
		let newUser = {
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email: req.body.email,
			username: req.body.username,
			password: req.body.password,
			token: '',
		};
		let pw = newUser.password;
		console.log(newUser);
		console.log('Success: userObject');
		console.log('Start: passwordHash');
		const hash = await bcrypt.hash(pw, salt);
		console.log('Password:', pw, hash);
		newUser.password = hash;
		console.log(newUser);
		console.log('Success: passwordHash');
		console.log('Start: checkUsername');
		const username = newUser.username;
		const checkUser = await mongoDb
			.getDb()
			.db()
			.collection('User')
			.findOne({username});
		if (checkUser !== null) {
			console.log('Failure: checkUsername');
			res.status(401).json({msg: 'Username already exists'});
			return;
		}
		console.log('Success: checkUsername', checkUser);
		console.log('Start: insertNew');
		const tkn = JWT.sign({token: newUser.token}, jTKN);
		console.log(tkn);
		res.cookie('token', tkn, {
			maxAge: 600000,
			httpOnly: true,
		});
		newUser.token = tkn;
		console.log(newUser);
		console.log('Start: User Mongoose Model');
		const user = new User({
			_id: new mongoose.Types.ObjectId(),
			firstname: newUser.firstname,
			lastname: newUser.lastname,
			email: newUser.email,
			username: newUser.username,
			password: newUser.password,
			token: newUser.token,
		});
		console.log('Success: User Mongoose Model', user);
		const response = await mongoDb
			.getDb()
			.db()
			.collection('User')
			.insertOne(user);
		console.log(response);
		console.log('Success: insertNew');
		if (response) {
			console.log('Success: postNewUser');
			res.status(201).json(response);
		} else if (!response) {
			res.status(500).json(response.error);
		}
	} catch (error) {
		res.status(500).json(error);
		console.log('Failure: postNewUser', error);
	}
};
// --------------------------------------------------------------------------
const patchUser = async (req, res) => {
	console.log('Start: putUpdateUser');
	try {
		const userId = ObjectId.createFromHexString(req.params.id);
		console.log('Start: userId');
		const user = {
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email: req.body.email,
			username: req.body.username,
			password: req.body.password,
		};
		console.log('Success: userId', user);

		// START: DYNAMIC $SET OBJECT
		console.log('Start: updateFields');
		const updateFields = {};
		for (const key in user) {
			if (user[key]) {
				updateFields[key] = user[key];
			}
		}
		console.log('Success: updateFields');
		// END: DYNAMIC $SET OBJECT
		console.log('Start: findUser');
		const findUser = await mongoDb
			.getDb()
			.db()
			.collection('User')
			.updateOne({_id: userId}, {$set: updateFields}, (err, result) => {
				if (err) {
					throw err;
				} else {
					res.json({msg: 'User updated successfully', result});
				}
			});
		console.log('Success: findUser');
		if (findUser.acknowledged) {
			res.status(200).send(`${userId}; Success: putUpdateUser`);
		} else {
			res.status(500).json(findUser.error || 'Failure: putUpdateUser');
		}
	} catch (error) {
		res.status(500).json(error);
		console.log('Failure: putUpdateUser');
	}
};
// --------------------------------------------------------------------------
const deleteUser = async (req, res) => {
	console.log('Start: deleteUser');
	try {
		const userId = ObjectId.createFromHexString(req.params.id);
		console.log('Start: findUser');
		const findUser = await mongoDb
			.getDb()
			.db()
			.collection('User')
			.deleteOne({_id: userId}, true);
		console.log('Success: findUser');
		console.log(findUser, 'Success: deleteUser');
		if (findUser.acknowledged) {
			res.status(200).send(`${userId}; Success: deleteUser`);
		} else {
			res.status(500).json(findUser.error || 'Failure: deleteUser');
		}
	} catch (error) {
		res.status(500).json(error);
		console.log('Failure: deleteUser');
	}
};
// --------------------------------------------------------------------------
const loginUser = async (req, res) => {
	console.log('Start: authLogin');
	try {
		console.log('Start: reqUserInput');
		let {username, password} = req.body;
		console.log(username, password);
		if (!username || !password) {
			console.log('Failure: reqUserInput');
			res.status(400).json({
				message: 'Fields Require Additional Data',
			});
			return;
		}
		console.log('Success: reqUserInput', {username, password});
		console.log('Start: findUser');
		let user = await mongoDb
			.getDb()
			.db()
			.collection('User')
			.findOne({username});
		if (!user) {
			console.log('Failure: findUser');
			return res.status(401).json({msg: 'Invalid Username'});
		}
		console.log('Success: findUser', user);
		console.log(user.password);
		console.log('Start: chkPw');
		console.log(password, user.password);
		const chkPw = await bcrypt.compare(password, user.password);
		console.log(chkPw);
		if (!chkPw) {
			console.log('Failure: chkPw');
			return res.status(401).json({msg: 'Invalid Password'});
		} else {
			console.log('Start: tokenAssign');
			const token = JWT.sign({userId: user._id}, jTKN);
			console.log('Success: tokenAssign', user.token);
			res.status(200).send({
				msg: 'Authorization Approved',
				user: user._id,
			});
		}
		console.log('Success: chkPw');
		console.log('Success: authLogin');
	} catch (e) {
		if (!user) {
			console.log('Failure: authLogin');
			res.status(400).json({message: 'Invalid credentials'});
		} else {
			console.log('Failure: authLogin');
			res.status(400).json({message: 'Something has gone wrong'});
		}
	}
};
// END: CRUD FUNCTIONS
// --------------------------------------------------------------------------
// START: MISCELLANEOUS REQUIRED FUNCTIONS
const getUserPrediction = async (req, res) => {
	console.log('Start: getUserPrediction');
	try {
		console.log('Start: createIdFromReq');
		const userId = ObjectId.createFromHexString(req.params.id);
		console.log('Success: createIdFromReq', userId);
		console.log('Start: findUser');
		console.log('Start: verifyUser');
		const verifyUser = await mongoDb
			.getDb()
			.db()
			.collection('User')
			.find({_id: userId});
		console.log('Success: verifyUser');
		if (verifyUser) {
			const findUser = await mongoDb
				.getDb()
				.db()
				.collection('User')
				.find({_id: userId})
				.project({predictions: 1});
			console.log(findUser);
			res.setHeader('Content-Type', 'application/json');
			console.log('Start: user?');
			if (!findUser || findUser.length === 0) {
				console.log('Failure: findUser');
				res.status(500).json({
					msg: 'There was an error with your request',
				});
				return;
			} else {
				console.log('Success: user?');
				console.log('Start: toArray');
				findUser.toArray().then((lists) => {
					res.setHeader('Content-Type', 'application/json');
					res.status(200).json(lists[0]);
					console.log('Success: toArray');
				});
				console.log('Success: getUserPrediction');
			}

			// console.log('Start: toArray');
			// if (findUser) {
			// 	findUser.toArray().then((lists) => {
			// 		res.setHeader('Content-Type', 'application/json');
			// 		res.status(200).json(lists[0]);
			// 		console.log('Success: toArray');
			// 		console.log('Success: getOneUser', userId);
			// 	});
			// }
		} else {
			const checkGuest = await mongoDb
				.getDb()
				.db()
				.collection('User')
				.find({_id: userId});
			if (checkGuest == null || undefined) {
				console.log('Failure: findUser');
				res.status(500).json({
					msg: 'There was an error with your request',
				});
			} else {
				console.log('Success: user?');
				console.log('Start: toArray');
				findUser.toArray().then((lists) => {
					res.setHeader('Content-Type', 'application/json');
					res.status(200).json(lists[0]);
					console.log('Success: toArray');
				});
				console.log('Success: getUserPrediction');
			}
			// console.log('Success: verifyUser');
			// console.log('Start: toArray');
			// if (checkGuest) {
			// 	checkGuest.toArray().then((lists) => {
			// 		res.setHeader('Content-Type', 'application/json');
			// 		res.status(200).json(lists[0]);
			// 		console.log('Success: toArray');
			// 		console.log('Success: getOneUser', userId);
			// 	});
			// }
		}
	} catch (error) {
		res.status(500).json(error);
		console.log('Failure: getUserPrediction');
	}
};

/* const getUserPrediction = async (req, res) => {
	console.log('Start: getUserPrediction');
	try {
		const userId = req.params.id;

		if (!mongoose.Types.ObjectId.isValid(userId)) {
			// Handle guest user
			console.log('Guest user detected');
			const findGuest = await mongoDb
				.getDb()
				.db()
				.collection('Prediction')
				.find({createdBy: userId})
				.toArray();

			if (findGuest.length === 0) {
				console.log('Failure: findGuest');
				res.status(404).json({
					msg: 'No predictions found for guest user',
				});
			} else {
				console.log('Success: findGuest', findGuest);
				res.status(200).json(findGuest);
			}
			return;
		}

		console.log('Start: createIdFromReq');
		const objectId = new mongoose.Types.ObjectId(userId);
		console.log('Success: createIdFromReq', objectId);

		const findUser = await mongoDb
			.getDb()
			.db()
			.collection('User')
			.findOne({_id: objectId}, {projection: {predictions: 1}});

		if (!findUser) {
			console.log('Failure: findUser');
			res.status(404).json({msg: 'User not found'});
		} else {
			console.log('Success: findUser', findUser);
			res.status(200).json(findUser);
		}
	} catch (error) {
		res.status(500).json(error);
		console.log('Failure: getUserPrediction', error);
	}
}; */
// END: MISCELLANEOUS REQUIRED FUNCTIONS
// --------------------------------------------------------------------------
// START: MODULE EXPORT
module.exports = {
	getAllUser,
	getOneUser,
	postNewUser,
	patchUser,
	deleteUser,
	loginUser,
	getUserPrediction,
};
// END: MODULE EXPORT
// --------------------------------------------------------------------------
