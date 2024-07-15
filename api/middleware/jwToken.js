const bodyParse = require('body-parser');
const JWT = require('jsonwebtoken');
const SCRT = process.env.SCRT_TKN;

const tokenChk = async (req, res) => {
	const {username, password} = req.body;
	let user = await mongoDb
		.getDb()
		.db()
		.collection('User')
		.findOne({username});
	if (!user || user.password !== password) {
		res.status(400);
		res.send({msg: 'Invalid username or password'});
		return;
	}
	if (user.password === password) {
		const token = JWT.sign({token: user.token}, SCRT, {
			algorithm: 'HS256',
			expiresIn: '5m',
			issuer: 'API',
			subject: user._id,
		});
		res.send({token});
		return;
	}
};

const tokenAssign = async (req, res) => {
	const {username, password} = req.body;
	let user = await mongoDb
		.getDb()
		.db()
		.collection('User')
		.findOne({username});
	if (!user || user.password !== password) {
		res.status(400);
		res.send({msg: 'Invalid username or password'});
		return;
	}
	if (user.password === password) {
		const token = JWT.sign(
			{
				token: user.token,
			},
			SCRT,
			{
				algorithm: 'HS256',
				expiresIn: '5m',
				issuer: 'API',
				subject: user._id,
			}
		);
		res.send({token});
		return;
	}
};

const tokenValidate = async (requiredToken) => {
	return (req, res, next) => {
		const {authorization} = req.headers;
		const token = authorization.substring('Bearer '.length);
		try {
			const {exp, iss, token} = JWT.verify(token, SCRT);
			if (iss === 'API' && exp < Date.now() && token === requiredToken) {
				next();
				return;
			}
		} catch (error) {
			res.sendStatus(403);
			return;
		}
	};
};

const routeControl = async (req, res) => {
	res.send(JSON.stringify({users}));

	const {params} = req;
	const {userId} = params;

	console.log({userId});
	let user = await mongoDb
		.getDb()
		.db()
		.collection('User')
		.findOne({username});

	if (!user) {
		res.sendStatus(404);
		return;
	}
	res.send({user});
};
module.exports = tokenAssign;
