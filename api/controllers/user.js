// --------------------------------------------------------------------------
// START: USER.JS REQUIREMENTS FOR FUNCTION
const express = require('express');
const session = require('express-session');
const mongoDb = require('../database/connect.js');
const ObjectId = require('mongodb').ObjectId;
const mongoose = require('mongoose');
const {User, Prediction} = require('../models/User');
const cookie = require('cookie-parser');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
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
		findUser.toArray().then((lists) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json(lists[0]);
			console.log('Success: toArray');
		});
		console.log('Success: user', userId);
		console.log('Success: getOneUser');
	} catch (error) {
		res.status(500).json(error);
		console.log('Failure: getOneUser');
	}
};
// --------------------------------------------------------------------------
const postNewUser = async (req, res) => {
	console.log('Start: postNewUser');
	let user = this;
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
			res.status(201).json(response);
			req.session.user = user.token;
			const seshUser = req.session.user;
			console.log(seshUser);
			console.log('Success: postNewUser');
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
		if (!username || !password) {
			console.log('Failure: reqUserInput');
			res.status(400).json({message: 'Fields Require Additional Data'});
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
			// console.log('Start: Session Data');
			// req.session.save(() => {
			// 	req.session.logged_in = true;
			// 	req.session.user = {
			// 		id: data._id,
			// 		name: data.firstname,
			// 		username: data.username,
			// 	};
			// });
			// console.log('Success: Session Data');
			console.log('Start: tokenAssign');
			res.cookie('jtkn', user.token, {
				maxAge: 600000,
				httpOnly: true,
			});
			console.log('Success: tokenAssign', user.token);
			req.session.user = user;
			const seshUser = req.session.user;
			console.log(seshUser);
			res.status(200).send('Authorization Approved');
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
// START: MODULE EXPORT
module.exports = {
	getAllUser,
	getOneUser,
	postNewUser,
	patchUser,
	deleteUser,
	loginUser,
};
// END: MODULE EXPORT
// --------------------------------------------------------------------------
