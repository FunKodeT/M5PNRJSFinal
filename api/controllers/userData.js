// --------------------------------------------------------------------------
// START: USERDATA.JS REQUIREMENTS FOR FUNCTIONALITY
const mongoDb = require('../database/connect.js');
const ObjectId = require('mongodb').ObjectId;
const mongoose = require('mongoose');
const {User, Prediction} = require('../models/User.js');
// END: USERDATA.JS REQUIREMENTS FOR FUNCTIONALITY
// --------------------------------------------------------------------------
// START: CRUD FUNCTIONS
const getAllPrediction = async (req, res) => {
	console.log('Start: getAllPrediction');
	try {
		console.log('Start: findPrediction');
		const result = await mongoDb
			.getDb()
			.db()
			.collection('Prediction')
			.find({});
		console.log('Success: findPrediction');
		console.log('Start: toArray');
		result.toArray().then((lists) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json(lists);
		});
		console.log('Success: toArray');
		console.log(result);
		console.log('Success: getAllPrediction');
	} catch (error) {
		res.status(500).json(error);
		console.log('Failure: getAllPrediction');
	}
};
// --------------------------------------------------------------------------
const getOnePrediction = async (req, res) => {
	console.log('Start: getOnePrediction');
	try {
		console.log('Start: createIdFromReq');
		const predictionId = ObjectId.createFromHexString(req.params.id);
		console.log('Success: createIdFromReq');
		console.log('Start: findPrediction');
		const findPrediction = await mongoDb
			.getDb()
			.db()
			.collection('Prediction')
			.find({_id: predictionId});
		console.log('Success: findPrediction');
		console.log('Start: toArray');
		findPrediction.toArray().then((lists) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json(lists[0]);
			console.log('Success: toArray');
		});
		console.log('Success: getOnePrediction', predictionId);
	} catch (error) {
		res.status(500).json(error);
		console.log('Failure: getOnePrediction');
	}
};
// --------------------------------------------------------------------------
const postNewPrediction = async (req, res) => {
	console.log('Start: postNewPrediction');
	const seshUser = req.cookie.connect;
	console.log(seshUser);
	if (seshUser) {
		await User.findById(req.connect.sid, (err, user) => {
			try {
				console.log('Start: askObject');
				let newPrediction = {
					question: req.body.question,
					answer: '',
				};
				console.log('Success: askObject', newPrediction);
				console.log('Start: insertNew');
				newPrediction.answer = askAnswer();
				console.log(newPrediction.answer);
				const prediction = new Prediction({
					_id: new mongoose.Types.ObjectId(),
					createdBy: req.user._id,
					question: newPrediction.question,
					answer: newPrediction.answer,
				});
				Prediction.create(prediction, (err, prediction) => {
					user.predictions.push(prediction);
					user.save();
				});
				const response = mongoDb
					.getDb()
					.db()
					.collection('Prediction')
					.insertOne(prediction);
				console.log(response);
				console.log('Success: insertNew');
				// const assignUser = Prediction.findOne({
				// 	question: prediction._id,
				// }).populate('us');
				if (response) {
					res.status(201).json(response);
					console.log('Success: postNewPrediction');
				} else if (!response) {
					res.status(500).json(response.error);
				}
			} catch (error) {
				res.status(500).json(error);
				console.log('Failure: postNewPrediction', error);
			}
		});
	} else {
		try {
			console.log('Start: askObject');
			let newPrediction = {
				question: req.body.question,
				answer: '',
			};
			console.log('Success: askObject', newPrediction);
			console.log('Start: insertNew');
			newPrediction.answer = askAnswer();
			console.log(newPrediction.answer);
			const prediction = new Prediction({
				_id: new mongoose.Types.ObjectId(),
				createdBy: req.user._id,
				question: newPrediction.question,
				answer: newPrediction.answer,
			});
			Prediction.create(prediction, (err, prediction) => {
				user.predictions.push(prediction);
				user.save();
			});
			const response = mongoDb
				.getDb()
				.db()
				.collection('Prediction')
				.insertOne(prediction);
			console.log(response);
			console.log('Success: insertNew');
			// const assignUser = Prediction.findOne({
			// 	question: prediction._id,
			// }).populate('us');
			if (response) {
				res.status(201).json(response);
				console.log('Success: postNewPrediction');
			} else if (!response) {
				res.status(500).json(response.error);
			}
		} catch (error) {
			res.status(500).json(error);
			console.log('Failure: postNewPrediction', error);
		}
	}
};
// --------------------------------------------------------------------------
const patchPrediction = async (req, res) => {
	console.log('Start: patchPrediction');
	try {
		const predictionId = ObjectId.createFromHexString(req.params.id);
		console.log('Start: predictionId');
		const prediction = {
			question: req.body.question,
		};
		console.log('Success: predictionId', prediction);

		// START: DYNAMIC $SET OBJECT
		console.log('Start: updateFields');
		const updateFields = {};
		for (const key in prediction) {
			if (prediction[key]) {
				updateFields[key] = prediction[key];
			}
		}
		console.log('Success: updateFields');
		// END: DYNAMIC $SET OBJECT
		console.log('Start: findPrediction');
		const findPrediction = await mongoDb
			.getDb()
			.db()
			.collection('Prediction')
			.updateOne(
				{_id: predictionId},
				{$set: updateFields},
				(err, result) => {
					if (err) {
						throw err;
					} else {
						res.json({
							msg: 'Prediction updated successfully',
							result,
						});
					}
				}
			);
		console.log('Success: findPrediction');
		if (findPrediction.acknowledged) {
			res.status(200).send(`${predictionId}; Success: patchPrediction`);
		} else {
			res.status(500).json(
				findPrediction.error || 'Failure: patchPrediction'
			);
		}
	} catch (error) {
		res.status(500).json(error);
		console.log('Failure: patchPrediction');
	}
};
// --------------------------------------------------------------------------
const deletePrediction = async (req, res) => {
	console.log('Start: deletePrediction');
	try {
		const predictionId = ObjectId.createFromHexString(req.params.id);
		console.log('Start: findPrediction');
		const findPrediction = await mongoDb
			.getDb()
			.db()
			.collection('Prediction')
			.deleteOne({_id: predictionId}, true);
		console.log('Success: findPrediction');
		console.log(findPrediction, 'Success: deletePrediction');
		if (findPrediction.acknowledged) {
			res.status(200).send(`${predictionId}; Success: deletePrediction`);
		} else {
			res.status(500).json(
				findPrediction.error || 'Failure: deletePrediction'
			);
		}
	} catch (error) {
		res.status(500).json(error);
		console.log('Failure: deletePrediction');
	}
};
// END: CRUD FUNCTIONS
// --------------------------------------------------------------------------
// START: ANSWER ASSIGNMENT FUNCTION
const askAnswer = async () => {
	console.log('Start: askAnswer Function');
	try {
		console.log('Start: answerArray Allocation');
		const answerArray = [
			'Maybe.',
			'Certainly not.',
			'I hope so.',
			'Not in your wildest dreams.',
			'There is a good chance.',
			'Quite likely.',
			'I think so.',
			'I hope not.',
			'I hope so.',
			'Never!',
			'Fuhgeddaboudit.',
			'Ahaha! Really?!?',
			'Pfft.',
			'Sorry, bucko.',
			'Hell, yes.',
			'Hell to the no.',
			'The future is bleak.',
			'The future is uncertain.',
			'I would rather not say.',
			'Who cares?',
			'Possibly.',
			'Never, ever, ever.',
			'There is a small chance.',
			'Yes!',
		];
		console.log('Start: answerArray Index Randomizer');
		const index = Math.floor(Math.random() * answerArray.length);
		console.log('Success: answerArray Index Randomizer', index);
		const ballAnswer = answerArray[index];
		console.log('Success: answerArray Allocation', ballAnswer);
		return ballAnswer;
	} catch (error) {
		console.log('Failure: askAnswer Function', error);
	}
};
// END: ANSWER ASSIGNMENT FUNCTION
// --------------------------------------------------------------------------
// START: USER ATTACHMENT FUNCTION

// END: USER ATTACHMENT FUNCTION
// --------------------------------------------------------------------------
// START: MODULE EXPORT
module.exports = {
	getAllPrediction,
	getOnePrediction,
	postNewPrediction,
	patchPrediction,
	deletePrediction,
};
// END: MODULE EXPORT
// --------------------------------------------------------------------------
