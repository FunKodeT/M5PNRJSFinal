// --------------------------------------------------------------------------
// START: USER.JS REQUIREMENTS FOR FUNCTION
const mongoose = require('mongoose');
const {Schema} = mongoose;
// END: USER.JS REQUIREMENTS FOR FUNCTION
// --------------------------------------------------------------------------
// START: USERSCHEMA MODEL
const userSchema = new Schema({
	_id: Schema.Types.ObjectId,
	firstname: {
		type: String,
		required: true,
	},
	lastname: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	username: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	token: {
		type: String,
		required: true,
	},
	predictions: {
		type: [Schema.Types.ObjectId],
		ref: 'Prediction',
	},
	// predictions: [{type: Schema.Types.ObjectId, ref: 'Prediction'}],
});
// END: USERSCHEMA MODEL
// --------------------------------------------------------------------------
// START: PREDICTIONSSCHEMA MODEL
const predictionsSchema = new Schema({
	_id: Schema.Types.ObjectId,
	createdBy: {
		type: String,
		required: true,
	},
	createdOn: {
		type: Date,
		required: true,
		default: Date.now,
	},
	question: {
		type: String,
		required: true,
	},
	answer: {
		type: String,
		required: true,
	},
	wasTrue: {
		Boolean,
	},
	wasFalse: {
		Boolean,
	},
});
// END: PREDICTIONSSCHEMA MODEL
// --------------------------------------------------------------------------
// START: MODEL TO VARIABLE FOR EXPORT
const User = mongoose.model('User', userSchema);
const Prediction = mongoose.model('Prediction', predictionsSchema);
// END: MODEL TO VARIABLE FOR EXPORT
// --------------------------------------------------------------------------
// START: MODULE EXPORT
module.exports = {User, Prediction};
// END: MODULE EXPORT
// --------------------------------------------------------------------------
