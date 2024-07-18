// --------------------------------------------------------------------------
// START: USERDATA.JS REQUIREMENTS FOR FUNCTIONALITY
const mongoDb = require('../database/connect.js');
// const {
// 	Types: {ObjectId},
// } = require('mongoose');
// const {ObjectId} = require('mongoose').Types;
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
	console.log('Start: postNewPrediction', req.body);
	try {
		console.log('Start: askObject');
		const data = req.body;
		console.log('Success: askObject', data);
		console.log('Start: createAnswer');
		const answer = await askAnswer();
		console.log('Success: createAnswer', answer);
		if (data.userId && data.userId !== 'guest') {
			console.log('Start: newPredictionUser');
			const prediction = new Prediction({
				_id: new mongoose.Types.ObjectId(),
				createdBy: data.userId,
				question: data.question,
				answer: answer,
			});
			console.log('Success: newPredictionUser');
			console.log('Start: insertNewPrediction');
			const response = await mongoDb
				.getDb()
				.db()
				.collection('Prediction')
				.insertOne(prediction);
			let temp = data.userId;
			console.log(temp);
			let testUser = await mongoDb
				.getDb()
				.db()
				.collection('User')
				.findOneAndUpdate(
					{_id: new ObjectId(temp)},
					{$push: {predictions: prediction._id}}
				);
			console.log(testUser);
			console.log('Success: insertNewPrediction', response);
			if (response) {
				res.status(201).json(response);
				console.log('Success: postNewPrediction');
				console.log('Server Response', response);
				return response;
			} else if (!response) {
				res.status(500).json(response.error);
			}
		} else {
			console.log('Start: newPredictionModel');
			const prediction = new Prediction({
				_id: new mongoose.Types.ObjectId(),
				createdBy: data.guestId,
				question: data.question,
				answer: answer,
			});
			console.log('Success: newPredictionModel');
			console.log('Start: insertNewPrediction');
			const response = await mongoDb
				.getDb()
				.db()
				.collection('Prediction')
				.insertOne(prediction);
			console.log('Success: insertNewPrediction', response);
			if (response) {
				const guestPrediction = {
					question: prediction.question,
					answer: prediction.answer,
				};
				res.status(201).json(guestPrediction);
				console.log('Success: postNewPrediction');
				console.log('Server Response', response, guestPrediction);
				return response;
			} else if (!response) {
				res.status(500).json(response.error);
			}
		}
	} catch (error) {
		res.status(500).json(error);
		console.log('Failure: postNewPrediction', error);
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
/* const findPredictions = async (req, res) => {
	console.log('Start: findAllPredictions');
	try {
		console.log('Start: allocateObject');
		const {predictionIds} = req.body;

		if (!Array.isArray(predictionIds)) {
			throw new Error('predictionIds must be an array');
		}

		console.log('Success: allocateObject', predictionIds);
		console.log('Start: objectToArray');

		const objectIds = predictionIds
			.map((id) => {
				if (typeof id === 'string' && ObjectId.isValid(id)) {
					return new ObjectId(id);
				} else {
					console.warn(`Invalid ObjectId or not a string: ${id}`);
					return null; // or handle accordingly
				}
			})
			.filter((id) => id !== null);

		console.log('Success: objectToArray', objectIds);

		if (objectIds.length === 0) {
			console.log('No valid ObjectIds to query.');
			res.status(200).json([]);
			return;
		}

		console.log('Start: retrieveData');
		const result = await mongoDb
			.getDb()
			.db()
			.collection('Prediction')
			.find({_id: {$in: objectIds}});

		console.log('Success: retrieveData');
		console.log('Start: modelToArray');

		const list = await result.toArray();
		res.setHeader('Content-Type', 'application/json');
		res.status(200).json(list);

		console.log('Success: modelToArray');
		console.log('Success: findAllPredictions', list);
	} catch (error) {
		console.log('Failure: findAllPredictions', error);
		res.status(500).json(error);
	}
}; */
const findPredictions = async (req, res) => {
	console.log('Start: findAllPredictions');
	try {
		console.log('Start: allocateObject');
		const {predictionIds} = req.body;
		console.log('Success: allocateObject', predictionIds);
		console.log('Start: objectToArray');
		const objectIds = predictionIds.map((_id) => new ObjectId(_id));
		console.log('Success: objectToArray');
		console.log('Start: retrieveData');
		const result = await mongoDb
			.getDb()
			.db()
			.collection('Prediction')
			.find({_id: {$in: objectIds}});
		console.log('Success: retrieveData');
		console.log('Start: modelToArray');
		result.toArray().then((list) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json(list);
		});
		console.log('Success: modelToArray');
		console.log('Success: findAllPredictions', result);
	} catch (error) {
		console.log('Failure: findAllPredictions', error);
		res.status(500).json(error);
	}
};
// END: USER ATTACHMENT FUNCTION
// --------------------------------------------------------------------------
// START: MODULE EXPORT
module.exports = {
	getAllPrediction,
	getOnePrediction,
	postNewPrediction,
	patchPrediction,
	deletePrediction,
	findPredictions,
};
// END: MODULE EXPORT
// --------------------------------------------------------------------------
