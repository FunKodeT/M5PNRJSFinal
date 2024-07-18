// --------------------------------------------------------------------------
// CONNECTING MONGOOSE MODELS 1
let temp1 = {
	// const userSchema = Schema({
	// 	_id: Schema.Types.ObjectId,
	// 	username: String,
	// 	firstname: String,
	// 	predictions: [{ type: Schema.Types.ObjectId, ref: 'Prediction'}]
	// })
	// const predictionSchema = Schema({
	// 	createdBy: {type: Schema.Types.ObjectId, ref: 'User'},
	// 	question: String,
	// 	fans: [{ type: Schema.Types.ObjectId, ref: 'User'}]
	// })
	// const User = mongoose.model('User', userSchema)
	// const Prediction = mongoose.model('Prediction', predictionSchema)
};
// --------------------------------------------------------------------------
// CONNECTING MONGOOSE MODELS 2
let temp2 = {
	// const createdBy = new User({
	// 	_id: new mongoose.Types.ObjectId(),
	// 	username: 'TestesMcGee',
	//     firstname: 'Testes'
	// })
	// await createdBy.save()
	// const prediction = new Prediction({
	// 	title: 'Predict This',
	// 	createdBy: createdBy._id
	// })
	// await prediction.save()
};
// --------------------------------------------------------------------------
// CONNECTING MONGOOSE MODELS 3
let temp3 = {
	// const prediction = await Prediction.findOne({title: 'Predict This'}).populate('createdBy').exec()
	// console.log('The name is %s', prediction.createdBy.username)
	// EXPECTED OUTPUT: CONSOLE>THE NAME IS TESTESMCGEE
};
// --------------------------------------------------------------------------
// CONNECTING MONGOOSE MODELS 4
let temp4 = {
	// const prediction = await Prediction.findOne({title: 'Predict This'})
	// prediction.createdBy = createdBy
	// console.log(prediction.createdBy.username)
	// EXPECTED OUTPUT: CONSOLE>TESTES MCGEE
};
// --------------------------------------------------------------------------
// CONNECTING MONGOOSE MODELS 5
let temp5 = {
	// prediction.populated('createdBy')
	// EXPECTED: VALUE>TRUE
	// prediction.createdBy._id
	// prediction.depopulate('createdBy')
	// EXPECTED: VALUE=>UNDEFINED
	// prediction.populated('createdBy')
	// EXPECTED: VALUE>UNDEFINED
};
// --------------------------------------------------------------------------
// CONNECTING MONGOOSE MODELS 6
let temp6 = {
	// const prediction = await Prediction.findOne({title: /Predict This/i}).populate('createdBy', 'username').exec()
	// console.log('The user is %s', prediction.createdBy.name)
	// EXPECTED: CONSOLE>THE USER IS TESTES MCGEE
	// console.log('The users age is %s', prediction.createdBy.firstname)
	// EXPECTED: THE USERS AGE IS NULL
};
// --------------------------------------------------------------------------
// APPLYING KNOWLEDGE LEARNED TO EXISTING DATA 1
let temp7 = {
	// const server = {
	// const adRou = require('./routes/admin.js');
	// app.use(express.json()).use((req, res, next) => {
	// 		next();
	// 	}).use('/', require('./routes/admin.js'));
	// }
	// const rAdmin = {
	// const adCont = require('../controllers/admin.js');
	// routes.get('/', adCont.tstFn);
	// routes.use('/user', require('./user.js'));
	// routes.use('/data', require('./userData.js'));
	// }
	// const rUser = {
	// const userCont = require('../controllers/user.js');
	// routes.get('/', userCont.getAllUser);
	// routes.get('/:id', userCont.getOneUser);
	// routes.post('/', userCont.postNewUser);
	// routes.patch('/:id', userCont.patchUpdateUser);
	// routes.delete('/:id', userCont.deleteUser);
	// }
	// const rUserData = {
	// const dataCont = require('../controllers/userData.js');
	// routes.get('/', dataCont.getAllPrediction);
	// routes.get('/:id', dataCont.getOnePrediction);
	// routes.post('/', dataCont.postNewPrediction);
	// routes.patch('/:id', dataCont.patchPrediction);
	// routes.delete('/:id', dataCont.deletePrediction);
	// }
	// const cUserData = {
	// const postNewPrediction = async (req, res) => {
	// 	console.log('Start: postNewPrediction');
	// 	try {
	// 		console.log('Start: askObject');
	// 		const ask = {
	//             createdBy: user._id,
	//             question: req.body.question,
	//             // answer:,
	// 		};
	//         const associate = ObjectId.createFromHexString(ask.createdBy);
	//         const updateFields = {};
	//             for (const key in ask) {
	//                 if (ask[key]) {
	//                     updateFields[key] = ask[key];
	//                 }
	//             }
	//         const newAsk = new Prediction({updateFields})
	//         newAsk.save().then(user => res.status(201).json(user)).catch(err => res.status(400).json({error: err.message}))
	// 		console.log('Success: askObject');
	// 		console.log(ask);
	// 		console.log('Start: insertNew');
	// 		const response = await mongoDb
	// 			.getDb()
	// 			.db()
	// 			.collection('Prediction')
	// 			.insertOne(ask);
	// 		console.log(response);
	// 		console.log('Success: insertNew');
	// 		if (response) {
	// 			res.status(201).json(response);
	// 			console.log('Success: postNewPrediction');
	// 		} else if (!response) {
	// 			res.status(500).json(response.error);
	// 		}
	// 	} catch (error) {
	// 		res.status(500).json(error);
	// 		console.log('Failure: postNewPrediction', error);
	// 	}
	// };
	// }
	// /* const cUser = {
	//     const patchUpdateUser = async (req, res) => {
	//         console.log('Start: putUpdateUser');
	//         try {
	//             const userId = ObjectId.createFromHexString(req.params.id);
	//             console.log('Start: userId');
	//             const user = {
	//                 firstname: req.body.firstname,
	//                 lastname: req.body.lastname,
	//                 email: req.body.email,
	//                 username: req.body.username,
	//                 password: req.body.password,
	//             };
	//             console.log('Success: userId', user);
	//             // START: DYNAMIC $SET OBJECT
	//             console.log('Start: updateFields');
	//             const updateFields = {};
	//             for (const key in user) {
	//                 if (user[key]) {
	//                     updateFields[key] = user[key];
	//                 }
	//             }
	//             console.log('Success: updateFields');
	//             // END: DYNAMIC $SET OBJECT
	//             console.log('Start: findUser');
	//             const findUser = await mongoDb
	//                 .getDb()
	//                 .db()
	//                 .collection('User')
	//                 .updateOne({_id: userId}, {$set: updateFields}, (err, result) => {
	//                     if (err) {
	//                         throw err;
	//                     } else {
	//                         res.json({msg: 'User updated successfully', result});
	//                     }
	//                 });
	//             console.log('Success: findUser');
	//             if (findUser.acknowledged) {
	//                 res.status(200).send(`${userId}; Success: putUpdateUser`);
	//             } else {
	//                 res.status(500).json(findUser.error || 'Failure: putUpdateUser');
	//             }
	//         } catch (error) {
	//             res.status(500).json(error);
	//             console.log('Failure: putUpdateUser');
	//         }
	//     };
	// } */
	// const cUserDataPatch = {
	//     const askAnswer = async (req, res) => {
	//         const user =
	//     }
	// }
	// const middlewareAuth = {
	//     // --------------------------------------------------------------------------
	//     // START: USER LOGIN AND AUTHENTICATE
	//     const bcrypt = require('bcryptjs');
	//     const JWT = require('jsonwebtoken');
	//     const jTKN = process.env.SCRT_TKN;
	//     // END: USER LOGIN AND AUTHENTICATE
	//     // --------------------------------------------------------------------------
	//     const authLogin = async (req, res) => {
	//         console.log('Start: authLogin')
	//         let user
	//         console.log('Start: reqUserInput')
	//     	const {username, password} = req.body;
	//     	if (!username || !password) {
	//             console.log('Failure: reqUserInput')
	//     		res.status(400).json({message: 'Fields Require Additional Data'});
	//     		return;
	//     	}
	//         console.log('Success: reqUserInput')
	//     	try {
	//             console.log('Start: findUser')
	//     		const user = await mongoDb.getDb().db().collection('User').findOne({username})
	//             if (!user) {
	//                 console.log('Failure: findUser')
	//                 return res.status(401).json({msg: 'Invalid Username'});
	//             }
	//             console.log('Success: findUser')
	//             console.log('Start: chkPw')
	//             const chkPw = await bcrypt.compare(password, user.password)
	//             if (!chkPw) {
	//                 console.log('Failure: chkPw')
	//                 return res.status(401).json({msg: 'Invalid Password'})
	//             } else {
	//                 req.session.userId = user.id
	//                 res.status(200).send('Authorization Approved')
	//             }
	//             console.log('Success: chkPw')
	//             console.log('Start: tokenAssign')
	//             const tkn = jwt.sign({userId: user._id}, jTKN)
	//             // res.cookie('token', tkn, {httpOnly: true});
	//     		}
	//             console.log('Success: authLogin')
	//     	} catch (e) {
	//     		if (!user) {
	//                 console.log('Failure: authLogin')
	//     			res.status(400).json({message: 'Invalid credentials'});
	//     		} else {
	//                 console.log('Failure: authLogin')
	//     			res.status(400).json({message: 'Something has gone wrong'});
	//     		}
	//     	}
	//     };
	// module.exports = {postNewPrediction}
};
// --------------------------------------------------------------------------
// NEXTJS GETSERVERSIDEPROPS 1
let temp8 = {
	// import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
	// type Repo = {
	//     name: String,
	//     predictions: String,
	// }
	// export const GetServerSideProps = (async () => {
	//     // FETCH DATA FROM API
	//     const res = await fetch('http://localhost:3000/data', {mode: 'no-cors'})
	//     const repo = Repo = await res.json()
	//     // PASS DATA TO PAGE FROM PROPS
	//     return { props: {repo }}
	// }) satisfies GetServerSideProps<{ repo: Repo }>
	// export default function Page({
	//     repo,
	// }: InferGetServerSidePropsType<typeof GetServerSideProps>) {
	//     return (
	//         <main>
	//             <p>
	//                 {repo.predictions}
	//             </p>
	//         </main>
	//     )
	// }
};
// --------------------------------------------------------------------------
// PAGE.JS TRASH 1
let temp9 = {
	// // DYNAMIC COMPONENTS
	// import About from './(pages)/about/page';
	// import Answer from './(pages)/answer/page';
	// import Ask from './(pages)/ask/page';
	// import Contact from './(pages)/contact/page';
	// import Profile from './(pages)/profile/page';
	// import Register from './(pages)/register/page';
	// import Signin from './(pages)/signin/page';
	// import Signout from './(pages)/signout/page';
	// {/* <Navbar />
	// 			<div>
	// 				<Routes>
	// 					{/* ABOUT PAGE */}
	// 					<Route path="/about" element={<About />} />
	// 					{/* ANSWER PAGE */}
	// 					<Route path="/answer" element={<Answer />} />
	// 					{/* ASK PAGE */}
	// 					<Route path="/ask" element={<Ask />} />
	// 					{/* CONTACT PAGE */}
	// 					<Route path="/contact" element={<Contact />} />
	// 					{/* PROFILE PAGE */}
	// 					<Route path="/profile" element={<Profile />} />
	// 					{/* REGISTER PAGE */}
	// 					<Route path="/register" element={<Register />} />
	// 					{/* SIGNIN PAGE */}
	// 					<Route path="/signin" element={<Signin />} />
	// 					{/* SIGNOUT PAGE */}
	// 					<Route path="/signout" element={<Signout />} />
	// 					{/* 404 HANDLER */}
	// 					<Route
	// 						path="*"
	// 						element={
	// 							<Home>
	// 								<span>404 - Page not found</span>
	// 							</Home>
	// 						}
	// 					/>
	// 				</Routes>
	// 			</div>
	// 			<Footer /> */}
};
// --------------------------------------------------------------------------
// PAGE.JS TRASH 2
let temp10 = {
	// --------------------------------------------------------------------------
	// START: API FETCH
	/* const {data, error, isLoading} = useSWR(
		'https://m5pnrjsfinalapi.onrender.com/data',
		fetcher
	);
	if (error) return console.log('Failure: Fetcher -> ', error);
	if (isLoading) return console.log('Fetcher -> Loading...');
	console.log('Success: Fetcher -> ', data); */
	// return console.log('Success: Fetcher -> ', data);
	// END: API FETCH
	// --------------------------------------------------------------------------
	// START: USESTATE()
	// const [predictions, setPredictions] = useState([]);
	// const [query, setQuery] = useState('');
	// END: USESTATE()
	// --------------------------------------------------------------------------
	// START: USEEFFECT()
	/* useEffect(() => {
		fetch(`http://localhost:3000/data`, {mode: 'no-cors'})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setPredictions(data);
			});
	}, []); */
	/* useEffect(() => {
		getPredictionsLocal();
	}, []); */
	/* 	useEffect(() => {
		getPredictions();
	}, [query]); */
	// END: USEEFFECT()
	// --------------------------------------------------------------------------
	// START: RENDER PREDICTIONS
	/* const getPredictionsLocal = async () => {
		fetch(`http://localhost:3000/data`, {mode: 'no-cors'})
			.then((x) => x.json())
			.then((y) => {
				setPredictions(y.hits);
				console.log(y.hits);
			});
	}; */
	/* 	const getPredictions = async () => {
		fetch(`https://m5pnrjsfinalapi.onrender.com/data`)
			.then((x) => x.json())
			.then((y) => {
				setPredictions(y.hits);
				console.log(y.hits);
			});
	}; */
	// END: RENDER PREDICTIONS
	// --------------------------------------------------------------------------
};
// --------------------------------------------------------------------------
let temp11 = {
	// const loginUser = async (req, res) => {
	// 	console.log('Start: authLogin');
	// 	try {
	// 		console.log('Start: reqUserInput');
	// 		let {username, password} = req.body;
	// 		console.log(username, password);
	// 		if (!username || !password) {
	// 			console.log('Failure: reqUserInput');
	// 			res.status(400).json({
	// 				message: 'Fields Require Additional Data',
	// 			});
	// 			return;
	// 		}
	// 		console.log('Success: reqUserInput', {username, password});
	// 		console.log('Start: findUser');
	// 		let user = await mongoDb
	// 			.getDb()
	// 			.db()
	// 			.collection('User')
	// 			.findOne({username});
	// 		if (!user) {
	// 			console.log('Failure: findUser');
	// 			return res.status(401).json({msg: 'Invalid Username'});
	// 		}
	// 		console.log('Success: findUser', user);
	// 		console.log(user.password);
	// 		console.log('Start: chkPw');
	// 		console.log(password, user.password);
	// 		const chkPw = await bcrypt.compare(password, user.password);
	// 		console.log(chkPw);
	// 		if (!chkPw) {
	// 			console.log('Failure: chkPw');
	// 			return res.status(401).json({msg: 'Invalid Password'});
	// 		} else {
	// 			console.log('Start: tokenAssign');
	// 			res.cookie('jtkn', user.token, {
	// 				maxAge: 600000,
	// 				httpOnly: true,
	// 			});
	// 			console.log('Success: tokenAssign', user.token);
	// 			const setCookie = async (req, res) => {
	// 				res.cookie('user', `${user.token}`, {
	// 					maxAge: '5m',
	// 					httpOnly: true,
	// 				});
	// 			};
	// 			setCookie();
	// 			res.status(200).send('Authorization Approved', res.cookie.user);
	// 		}
	// 		console.log('Success: chkPw');
	// 		console.log('Success: authLogin');
	// 	} catch (e) {
	// 		if (!user) {
	// 			console.log('Failure: authLogin');
	// 			res.status(400).json({message: 'Invalid credentials'});
	// 		} else {
	// 			console.log('Failure: authLogin');
	// 			res.status(400).json({message: 'Something has gone wrong'});
	// 		}
	// 	}
	// };
};
// --------------------------------------------------------------------------
let temp12 = {
	// const jwt = require('jsonwebtoken')

	// function generateAccessToken(user) {
	// 	const payload = {
	// 		id: user.id,
	// 		email: user.email
	// 	}
	// 	const secret = 'secret key'
	// 	const options = { expiresIn: '1h'}

	// 	return jwt.sign(payload, secret, options)
	// }

	// function verifyAccessToken(token) {
	// 	const secret = 'secret key'

	// 	try {
	// 		const decoded = jwt.verify(token, secret)
	// 		return { success: true, data: decoded}
	// 	} catch (error) {
	// 		return { success: false, error: error.message}
	// 	}
	// }

	// function authenticateToken (req, res, next) {
	// 	const authHeader = req.headers['authorization']
	// 	const token = authHeader && authHeader.split(' ')[1]

	// 	if (!token) {
	// 		return res.sendStatus(401)
	// 	}

	// 	const result = verifyAccessToken(token)

	// 	if (!result.success) {
	// 		return res.status(403).json({ error: result.error })
	// 	}

	// 	req.user = result.data
	// 	next()
	// }

	// appendFile.get('/protected', authenticateToken, (req, res) => {
	// 	res.json({ message: 'Welcome to the protected route!', user: req.user})
	// })

	// // GENERATE NEW REFRESH TOKEN
	// function generateRefreshToken(user) {
	// 	const payload = {
	// 		id: user.id,
	// 		email: user.email
	// 	}

	// 	const secret = 'secret refresh token'
	// 	const options = { expiresIn: '7d'}

	// 	return jwt.sign(payload, secret, options)
	// }

	// // VERIFY REFRESH TOKEN
	// function verifyRefreshToken(token) {
	// 	const secret = 'secret refresh token'

	// 	try {
	// 		const decoded = jwt.verify(token, secret)
	// 		return { success: true, data: decoded }
	// 	} catch (error) {
	// 		return { success: false, error: error.message }
	// 	}
	// }

	// // REFRESH TOKEN WITH VALID REFRESH TOKEN
	// app.post('/token/refresh', (req, res) => {
	// 	const refreshToken = req.body.refreshToken
	// 	if (!refreshToken) {
	// 		return res.sendStatus(401)
	// 	}

	// 	const result = verifyRefreshToken(refreshToken)

	// 	if (!result.success) {
	// 		return res.status(403).json({error: result.error})
	// 	}

	// 	const user = result.data

	// 	const newAccessToken = generateAccessToken(user)
	// 	res.json({ accessToken: newAccessToken})
	// })

	// // 

	// // JWT CONSISTS OF 3 COMPONENTS:
	// Header = {
	// 	'alg': 'HS256',
	// 	'typ': 'JWT'
	// }
	// Payload = {
	// 	'sub': '123456789',
	// 	'name': 'John Doe',
	// 	'admin': true
	// }
	// Signature = HMACSHA256(
	// 	base64UrlEncode(header) + '.' + base64UrlEncode(payload), secret
	// )
}
// --------------------------------------------------------------------------
let temp12 = {
	// let value
	// value = localStorage.getItem('favoriteNumber') || ''

	// const [favoriteNumber, setFavoriteNumber] = useState(value);

	// const saveToLocalStorage = (e) => {
	// 	e.preventDefault();
	// 	localStorage.setItem('favoriteNumber', favoriteNumber);
	// };

	// // && ||

	// if (typeof window !== 'undefined') {
	// 	value = localStorage.getItem('favoriteNumber') || ''
	// }

	// // && ||

	// try {
	// 	value = localStorage.getItem('favoriteNumber') || ''
	// } catch (error) {}

	// // && ||
	// import { useEffect, useState } from 'react'
	// export default function Home() {
	// 	const [favoriteNumber, setFavoriteNumber] = useState('')

	// 	useEffect(() => {
	// 		let value
	// 		value = localStorage.getItem('favoriteNumber') || ''
	// 		setFavoriteNumber(value)
	// 	}, [])

	// 	const saveToLocalStorage = e => {
	// 		e.preventDefault()
	// 		localStorage.setItem('favoriteNumber', favoriteNumber)
	// 	}
	// }

	// // && ||

	// import { useState } from 'react'

	// const useLocalStorage = (key, initialValue) => {
	// 	const [state, setState] = useState(() => {
	// 		try {
	// 			const value = window.localStorage.getItem(key)
	// 			return value ? JSON.parse(value) : initialValue
	// 		} catch (error) {
	// 			console.log(error)
	// 		}
	// 	})

	// 	const setValue = value => {
	// 		try {
	// 			const valueToStore = value instanceof Function ? value(state) : value
	// 			window.localStorage.setItem(key, JSON.stringify(valueToStore))
	// 			setState(value)
	// 		} catch (error) {
	// 			console.log(error)
	// 		}
	// 	}
	// 	return [state, setValue]
	// }

	// export default useLocalStorage
	// // <index.js> 
	// 'use client'
	// import useLocalStorage from '@/hooks/useLocalStorage'
	// import {useState} from 'react'

	// export default function Home() {
	// 	const [value, setValue] = useLocalStorage('favoriteNumber', '')
	// 	const [favoriteNumber, setFavoriteNumber] = useState(value)

	// 	const saveToLocalStorage = e => {
	// 		e.preventDefault()
	// 		setValue(favoriteNumber)
	// 	}
	// }
}
// --------------------------------------------------------------------------
let temp13 = {
	// // --------------------------------------------------------------------------
	// // START: IF LOGGED IN STATE
	// const [loggedUser, setLoggedUser] = useLocalStorage('user', loggedUser)
	// // const [localUser, setLocalUser] = useState()
	// const [value, setValue] = useState();
	// // const [value, setValue] = useLocalStorage('user', '');
	// const [localUser, setLocalUser] = useState(value);

	// useEffect(() => {
	// 	console.log(localUser);
	// 	if (!value) {
	// 		// if (!localUser) {
	// 		console.log('Start: userLoggedOut');
	// 		let guestUser = {user: 'guest'};
	// 		setValue(guestUser);
	// 		setLocalUser(guestUser);
	// 		setLoggedUser(guestUser)
	// 		// const saveToLocalStorage = () => {
	// 		// 	setValue(guestUser);
	// 		// };
	// 		// saveToLocalStorage();
	// 		console.log('User is not logged in', guestUser);
	// 	}
	// 	//  else if (localUser.user === 'guest') {
	// 	// 	console.log('Start: userIsGuest');
	// 	// 	console.log('Success: userIsGuest');
	// 	// }
	// 	else {
	// 		console.log('Start: userLoggedIn');
	// 		setValue(localUser);
	// 		const saveToLocalStorage = () => {
	// 			setValue(localUser);
	// 		};
	// 		saveToLocalStorage();
	// 		console.log('User is logged in', localUser);
	// 		console.log('Success: userLoggedIn');
	// 		// if (localUser.user === 'guest') {
	// 		// 	console.log('User is logged in as: Guest');
	// 		// 	console.log('Success: userLoggedIn');
	// 		// } else {
	// 		// 	console.log('User is logged in', localUser);
	// 		// 	console.log('Success: userLoggedIn');
	// 		// }
	// 	}
	// });

	// useEffect(() => {
	// 	console.log(localUser);
	// 	if (!value) {
	// 		console.log('Start: userLoggedOut');
	// 		let guestUser = {user: 'guest'};
	// 		setValue(guestUser);
	// 		setLocalUser(guestUser);
	// 		// let logUser = guestUser;
	// 		// setLoggedUser(logUser);
	// 		// useLocalStorage('user', guestUser);
	// 		// const saveToLocalStorage = () => {
	// 		// 	setValue(guestUser);
	// 		// };
	// 		// saveToLocalStorage();
	// 		console.log('User is not logged in', guestUser);
	// 	} else {
	// 		console.log('Start: userLoggedIn');
	// 		// setValue(localUser);
	// 		let storeUser = localUser;
	// 		// setLoggedUser(storeUser);
	// 		// const saveToLocalStorage = () => {
	// 		// 	setValue(localUser);
	// 		// };
	// 		// saveToLocalStorage();
	// 		if ((storeUser = 'guest')) {
	// 			console.log('User is logged in as', storeUser);
	// 			console.log('Success: userLoggedIn(guest)');
	// 		} else {
	// 			console.log('User is logged in', storeUser);
	// 			console.log('Success: userLoggedIn');
	// 		}
	// 	}
	// });
	// // END: IF LOGGED IN STATE
	// // --------------------------------------------------------------------------
}
// --------------------------------------------------------------------------
let temp14 = {
const postNewPrediction = async (req, res) => {
	console.log('Start: postNewPrediction', req.body);
	try {
		console.log('Start: askObject');
		const question = req.body;
		console.log('Success: askObject', question);
		console.log('Start: createAnswer');
		const answer = await askAnswer();
		console.log('Success: createAnswer', answer);
		// console.log('Start: assignUserTkn');
		// const createdBy = req.cookies['jtkn'];
		// console.log('Success: assignUserTkn', createdBy);
		console.log('Start: newPredictionModel');
		const prediction = new Prediction({
			_id: new mongoose.Types.ObjectId(),
			// createdBy: createdBy,
			question: question.question,
			answer: answer,
		});
		/* 		Prediction.create(prediction, (err, prediction) => {
			user.predictions.push(prediction);
			user.save();
		}); */
		console.log('Success: newPredictionModel');
		console.log('Start: insertNewPrediction');
		const response = await mongoDb
			.getDb()
			.db()
			.collection('Prediction')
			.insertOne(prediction);
		console.log('Success: insertNewPrediction', response);
		if (response) {
			res.status(201).json(response);
			console.log('Success: postNewPrediction');
			console.log('Server Response', response);
			return response;
		} else if (!response) {
			res.status(500).json(response.error);
		}
	} catch (error) {
		res.status(500).json(error);
		console.log('Failure: postNewPrediction', error);
	}
	// if (seshUser) {
	// 	await User.findById(req.connect.sid, (err, user) => {
	// 		try {
	// 			console.log('Start: askObject');
	// 			let newPrediction = {
	// 				question: req.body.question,
	// 				answer: '',
	// 			};
	// 			console.log('Success: askObject', newPrediction);
	// 			console.log('Start: insertNew');
	// 			newPrediction.answer = askAnswer();
	// 			console.log(newPrediction.answer);
	// 			const prediction = new Prediction({
	// 				_id: new mongoose.Types.ObjectId(),
	// 				createdBy: req.user._id,
	// 				question: newPrediction.question,
	// 				answer: newPrediction.answer,
	// 			});
	// 			Prediction.create(prediction, (err, prediction) => {
	// 				user.predictions.push(prediction);
	// 				user.save();
	// 			});
	// 			const response = mongoDb
	// 				.getDb()
	// 				.db()
	// 				.collection('Prediction')
	// 				.insertOne(prediction);
	// 			console.log(response);
	// 			console.log('Success: insertNew');
	// 			// const assignUser = Prediction.findOne({
	// 			// 	question: prediction._id,
	// 			// }).populate('us');
	// 			if (response) {
	// 				res.status(201).json(response);
	// 				console.log('Success: postNewPrediction');
	// 			} else if (!response) {
	// 				res.status(500).json(response.error);
	// 			}
	// 		} catch (error) {
	// 			res.status(500).json(error);
	// 			console.log('Failure: postNewPrediction', error);
	// 		}
	// 	});
	// } else {
	// 	try {
	// 		console.log('Start: askObject');
	// 		let newPrediction = {
	// 			question: req.body.question,
	// 			answer: '',
	// 		};
	// 		console.log('Success: askObject', newPrediction);
	// 		console.log('Start: insertNew');
	// 		newPrediction.answer = askAnswer();
	// 		console.log(newPrediction.answer);
	// 		const prediction = new Prediction({
	// 			_id: new mongoose.Types.ObjectId(),
	// 			createdBy: req.user._id,
	// 			question: newPrediction.question,
	// 			answer: newPrediction.answer,
	// 		});
	// 		Prediction.create(prediction, (err, prediction) => {
	// 			user.predictions.push(prediction);
	// 			user.save();
	// 		});
	// 		const response = mongoDb
	// 			.getDb()
	// 			.db()
	// 			.collection('Prediction')
	// 			.insertOne(prediction);
	// 		console.log(response);
	// 		console.log('Success: insertNew');
	// 		// const assignUser = Prediction.findOne({
	// 		// 	question: prediction._id,
	// 		// }).populate('us');
	// 		if (response) {
	// 			res.status(201).json(response);
	// 			console.log('Success: postNewPrediction');
	// 		} else if (!response) {
	// 			res.status(500).json(response.error);
	// 		}
	// 	} catch (error) {
	// 		res.status(500).json(error);
	// 		console.log('Failure: postNewPrediction', error);
	// 	}
	// }
};
}
// --------------------------------------------------------------------------
let temp15 = {
	const userSchema = new mongoose.Schema({
		first_name: String,
		last_name: String,
		email: String,
		password: String,
	});
	
	const ItemSchema = new mongoose.Schema({
		date: String,
		loc: String,
		title: String,
	   passage: String,
	   file: String
	});
	
	const User = mongoose.model("User", userSchema);
	const Item = mongoose.model("Item", ItemSchema);
	
	const user1 = new User({
		first_name: "John",
		last_name: "arbuckle",
		email: "blablabal@asdf",
		password: "123456789"
	});
	
	const item1 = new Item({
		date: "Today",
		loc: "here",
		title: "message",
		passage: "This is an example",
		file: "none"
	});

// 

	const userSchema = new mongoose.Schema({
		first_name: String,
		last_name: String,
		email: String,
		password: String,
		items : {
			 type: [Schema.Types.ObjectId],
			 ref: 'Item'
		}
	});
	
	const ItemSchema = new mongoose.Schema({
		date: String,
		loc: String,
		title: String,
	   passage: String,
	   file: String
	});
}
// --------------------------------------------------------------------------
let temp16 = {
	const postNewPrediction = async (req, res) => {
		console.log('Start: postNewPrediction', req.body);
		try {
			console.log('Start: askObject');
			const data = req.body;
			console.log('Success: askObject', data);
			console.log('Start: createAnswer');
			const answer = await askAnswer();
			console.log('Success: createAnswer', answer);
			console.log('Start: newPredictionModel');
	
			if (data.userId !== 'guest') {
				const prediction = new Prediction({
					_id: new mongoose.Types.ObjectId(),
					createdBy: data.userId,
					// createdBy: {
					// 	$ref: 'User',
					// 	$id: new ObjectId(data.userId),
					// 	$db: 'magic8Ball',
					// },
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
				User.findOneAndUpdate(
					{_id: data.userId},
					{$push: {predictions: prediction._id}},
					{new: true}
				);
				// const temp1 = data.userId;
				// await User.find({temp1}).populate('predictions').exec();
				// const temp = new ObjectId(prediction);
				// const temp2 = await mongoDb
				// 	.getDb()
				// 	.db()
				// 	.collection('User')
				// 	.findOne(temp1)
				// 	.insertOne({predictions: [temp]});
				// const temp = await mongoDb
				// 	.getDb()
				// 	.db()
				// 	.collection('User')
				// 	.updateOne(
				// 		{_id: `${data.userId}`},
				// 		{
				// 			$set: {
				// 				predictions: [prediction],
				// 			},
				// 		}
				// 	);
				// const temp = new ObjectId(`${data.userId}`);
				// await User.findOne(temp).populate('predictions').exec();
				// await User.findOne({temp}).populate('predictions').exec();
				// const temp1 = await User.findOne(temp)
				// 	.populate('predictions')
				// 	.exec();
				// const temp1 = await User.findOne({temp})
				// 	.populate('predictions')
				// 	.exec();
				// await User.findOne(temp).populate('predictions').exec();
				// const insertPred = await mongoDb
				// 	.getDb()
				// 	.db()
				// 	.collection('User')
				// 	.findOne(temp)
				// 	.populate('predictions')
				// 	.exec();
				// await User.findOne({userId: `${data.userId}`})
				// 	.populate('predictions')
				// 	.exec();
				// const temp = await User.findOne({userId: `${data.userId}`})
				// 	.populate('predictions')
				// 	.exec();
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
				const prediction = new Prediction({
					_id: new mongoose.Types.ObjectId(),
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
					res.status(201).json(response);
					console.log('Success: postNewPrediction');
					console.log('Server Response', response);
					return response;
				} else if (!response) {
					res.status(500).json(response.error);
				}
			}
			// console.log('Success: newPredictionModel');
			// console.log('Start: insertNewPrediction');
			// const response = await mongoDb
			// 	.getDb()
			// 	.db()
			// 	.collection('Prediction')
			// 	.insertOne(prediction);
			// console.log('Success: insertNewPrediction', response);
			// if (response) {
			// 	res.status(201).json(response);
			// 	console.log('Success: postNewPrediction');
			// 	console.log('Server Response', response);
			// 	return response;
			// } else if (!response) {
			// 	res.status(500).json(response.error);
			// }
		} catch (error) {
			res.status(500).json(error);
			console.log('Failure: postNewPrediction', error);
		}
	};
}
// --------------------------------------------------------------------------
let temp17 = {
		const getUserPrediction = async (req, res) => {
			console.log('Start: getUserPrediction');
			try {
				console.log('Start: createIdFromReq');
				const userId = ObjectId.createFromHexString(req.params.id);
				console.log('Success: createIdFromReq', userId);
				console.log('Start: findUser');
				const findUser = await mongoDb
					.getDb()
					.db()
					.collection('User')
					.find({_id: userId})
					.project({predictions: 1});
				console.log(findUser);
				res.setHeader('Content-Type', 'application/json');
				console.log('Start: user?');
				if (findUser == null || undefined) {
					console.log('Failure: findUser');
					res.status(500).json({msg: 'There was an error with your request'});
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
				// else {
				// 	console.log('Success: findUser');
				// 	console.log('Start: getPrediction');
				// 	const findUserPrediction = await mongoDb
				// 		.getDb()
				// 		.db()
				// 		.collection('User')
				// 		.find({_id: userId})
				// 		.project({predictions: 1});
				// 	console.log('Success: getPrediction');
				// 	console.log('Start: toArray');
				// 	findUser.toArray().then((list) => {
				// 		// let getPrediction = findUser.predictions;
				// 		// console.log(getPrediction);
				// 		res.setHeader('Content-Type', 'application/json');
				// 		res.status(200).json(list[0]);
				// 		console.log('Success: toArray');
				// 	});
				// 	// Event.find().select({title:1,description:1})
				// 	// 	getPrediction.toArray().then((list) => {
				// 	// 		res.setHeader('Content-Type', 'application/json');
				// 	// 		res.status(200).json(list);
				// 	// 		console.log('Success: getPrediction');
				// 	// 	});
				// 	// 	console.log('Success: getUserPrediction =', getPrediction);
				// }
			} catch (error) {
				res.status(500).json(error);
				console.log('Failure: getUserPrediction');
			}
		};
}
// --------------------------------------------------------------------------
let temp18 = {
	// const display = async () => {
	// 	console.log('Start: display');
	// 	console.log('Start: fetchLocalUser');
	// 	let userId = localStorage.getItem('user');
	// 	console.log('Success: fetchLocalUser=', userId);
	// 	if (userId !== 'guest') {
	// 		console.log('Start: response');
	// 		let response = await fetch('http://localhost:3000/user/:id', {
	// 			method: 'POST',
	// 			body: JSON.stringify({
	// 				userId: userId,
	// 			}),
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 		});
	// 		if (response.ok) {
	// 			console.log('Success: response', response);
	// 			console.log('Start: responseToArray');
	// 			let responseTwo = await fetch(
	// 				'http://localhost:3000/user/prediction/:id',
	// 				{
	// 					method: 'GET',
	// 					body: JSON.stringify({
	// 						userId: userId,
	// 					}),
	// 					headers: {
	// 						'Content-Type': 'application/json',
	// 					},
	// 				}
	// 			);
	// 			const data = await response.json();
	// 			console.log('Success: responseToArray', data);
	// 			console.log('Success: display');
	// 		} else {
	// 			console.log('Failure: display');
	// 		}
	// 		// const findMany = await User.findMany(user._id)
	// 		// const toArray = await findMany[]
	// 		// const recPred = await findMany
	// 		// const recAnsw = await findMany
	// 	} else {
	// 		let {question, answer} = localStorage.getItem(prediction);
	// 		if (!question || !answer) {
	// 			return;
	// 		} else {
	// 			console.log('Start: assignValue');
	// 			const youAsked = question;
	// 			const weSaid = answer;
	// 			console.log('Success: assignValue');
	// 			console.log('Success: display');
	// 		}
	// 	}
	// };
	// display();
}
// --------------------------------------------------------------------------
let temp19 = {
	// const [user, setUser] = useState();
	// const [predictions, setPredictions] = useState([]);

	// useEffect(() => {
	// 	let userId = localStorage.getItem('user');
	// 	setUser(userId);
	// }, [user]);

	// console.log(user);

	// if (user !== 'guest') {
	// 	console.log('not guest');
	// 	const temp = async () => {
	// 		console.log('Start: verifyUser');
	// 		let response = await fetch(`http://localhost:3000/user/${user}`, {
	// 			method: 'GET',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 		});
	// 		if (response.ok) {
	// 			console.log('Success: verifyUser');
	// 			console.log('Start: callPredictions');
	// 			let responseTwo = await fetch(
	// 				`http://localhost:3000/user/predictions/${user}`,
	// 				{
	// 					method: 'GET',
	// 					headers: {
	// 						'Content-Type': 'application/json',
	// 					},
	// 				}
	// 			);
	// 			if (responseTwo.ok) {
	// 				console.log('Success: callPredictions');
	// 				setPredictions(await responseTwo.json());
	// 				// const data = await responseTwo.json();
	// 				// setPredictions(data)
	// 				console.log('Success: responseToArray', predictions);
	// 				// return setPredictions(data);
	// 			}
	// 		}
	// 	};
	// 	temp();
	// 	console.log(predictions);
	// } else {
	// 	console.log('is guest');
	// }

	// GPT

// 	import { useState, useEffect } from 'react';

// 	const MyComponent = () => {
//   const [user, setUser] = useState(null);
//   const [predictions, setPredictions] = useState([]);

//   useEffect(() => {
//     const userId = localStorage.getItem('user');
//     setUser(userId);
//   }, []); // Empty array ensures this runs only once on mount

//   useEffect(() => {
//     if (user && user !== 'guest') {
//       const fetchUserData = async () => {
//         console.log('Start: verifyUser');
//         let response = await fetch(`http://localhost:3000/user/${user}`, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         if (response.ok) {
//           console.log('Success: verifyUser');
//           console.log('Start: callPredictions');

//           let responseTwo = await fetch(
//             `http://localhost:3000/user/predictions/${user}`,
//             {
//               method: 'GET',
//               headers: {
//                 'Content-Type': 'application/json',
//               },
//             }
//           );

//           if (responseTwo.ok) {
//             console.log('Success: callPredictions');
//             const data = await responseTwo.json();
//             setPredictions(data);
//             console.log('Success: responseToArray', data);
//           }
//         }
//       };

//       fetchUserData();
//     } else {
//       console.log('is guest');
//     }
//   }, [user]); // This useEffect runs when `user` changes

//   console.log(user);
//   console.log(predictions);
}
// --------------------------------------------------------------------------
let temp20 = {
	
	// useEffect(() => {
	// 	if (predictions) {
	// 		const temp = async () => {
	// 			let response = await fetch(
	// 				`http://localhost:3000/data/predictions/${predictions}`,
	// 				{
	// 					method: 'GET',
	// 					headers: {
	// 						'Content-Type': 'application/json',
	// 					},
	// 				}
	// 			);
	// 			if (response.ok) {
	// 				const data = await response.json();
	// 				setPredictions(predictions);
	// 				console.log('Success: responseToArray', data);
	// 			}
	// 		};
	// 		temp();
	// 	} else {
	// 		console.log('is guest');
	// 	}
	// }, []);
	// useEffect(async () => {
	// 	console.log('Start: display', user);
	// 	if (user !== 'guest') {
	// 		console.log('Start: response');
	// 		let response = await fetch('http://localhost:3000/user/:id', {
	// 			method: 'POST',
	// 			body: JSON.stringify({
	// 				userId: user,
	// 			}),
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 		});
	// 		if (response.ok) {
	// 			console.log('Success: response', response);
	// 			console.log('Start: responseToArray');
	// 			let responseTwo = await fetch(
	// 				'http://localhost:3000/user/prediction/:id',
	// 				{
	// 					method: 'GET',
	// 					body: JSON.stringify({
	// 						userId: user,
	// 					}),
	// 					headers: {
	// 						'Content-Type': 'application/json',
	// 					},
	// 				}
	// 			);
	// 			const data = await responseTwo.json();
	// 			console.log('Success: responseToArray', data);
	// 			console.log('Success: display');
	// 		} else {
	// 			console.log('Failure: display');
	// 		}
	// 	} else {
	// 		let {question, answer} = localStorage.getItem(prediction);
	// 		if (!question || !answer) {
	// 			return;
	// 		} else {
	// 			console.log('Start: assignValue');
	// 			const youAsked = question;
	// 			const weSaid = answer;
	// 			console.log('Success: assignValue');
	// 			console.log('Success: display');
	// 		}
	// 	}
	// });

}
// --------------------------------------------------------------------------
let temp21 = {
	// if (pathname === '/ask') {
	// 	return (
	// 		<div className="border border-yellow-500 rounded py-5 px-5 mt-5">
	// 			<ul className="flex flew-row justify-evenly">
	// 				<li className="homePage">
	// 					<button
	// 						type="button"
	// 						id="homeTrigger"
	// 						className="homePage">
	// 						<Link href="/">Home</Link>
	// 					</button>
	// 				</li>
	// 				<li className="aboutPage">
	// 					<button
	// 						type="button"
	// 						id="aboutTrigger"
	// 						className="aboutPage">
	// 						<Link href="/about">About</Link>
	// 					</button>
	// 				</li>
	// 				<li className="answerPage">
	// 					<button
	// 						type="button"
	// 						id="answerTrigger"
	// 						className="answerPage">
	// 						<Link href="/answer">Answer</Link>
	// 					</button>
	// 				</li>
	// 			</ul>
	// 		</div>
	// 	);
	// } else if (pathname === '/about') {
	// 	return (
	// 		<div className="border border-yellow-500 rounded py-5 px-5 mt-5">
	// 			<ul className="flex flew-row justify-evenly">
	// 				<li className="askPage">
	// 					<button
	// 						type="button"
	// 						id="askTrigger"
	// 						className="askPage">
	// 						<Link href="/ask">Ask</Link>
	// 					</button>
	// 				</li>
	// 				<li className="homePage">
	// 					<button
	// 						type="button"
	// 						id="homeTrigger"
	// 						className="homePage">
	// 						<Link href="/">Home</Link>
	// 					</button>
	// 				</li>
	// 				<li className="answerPage">
	// 					<button
	// 						type="button"
	// 						id="answerTrigger"
	// 						className="answerPage">
	// 						<Link href="/answer">Answer</Link>
	// 					</button>
	// 				</li>
	// 			</ul>
	// 		</div>
	// 	);
	// } else if (pathname === '/answer') {
	// 	return (
	// 		<div className="border border-yellow-500 rounded py-5 px-5 mt-5">
	// 			<ul className="flex flew-row justify-evenly">
	// 				<li className="askPage">
	// 					<button
	// 						type="button"
	// 						id="askTrigger"
	// 						className="askPage">
	// 						<Link href="/ask">Ask</Link>
	// 					</button>
	// 				</li>
	// 				<li className="aboutPage">
	// 					<button
	// 						type="button"
	// 						id="aboutTrigger"
	// 						className="aboutPage">
	// 						<Link href="/about">About</Link>
	// 					</button>
	// 				</li>
	// 				<li className="homePage">
	// 					<button
	// 						type="button"
	// 						id="homeTrigger"
	// 						className="homePage">
	// 						<Link href="/">Home</Link>
	// 					</button>
	// 				</li>
	// 			</ul>
	// 		</div>
	// 	);
	// } else {
	// 	return (
	// 		<div className="border border-yellow-500 rounded py-5 px-5 mt-5">
	// 			<ul className="flex flew-row justify-evenly">
	// 				<li className="askPage">
	// 					<button
	// 						type="button"
	// 						id="askTrigger"
	// 						className="askPage">
	// 						<Link href="/ask">Ask</Link>
	// 					</button>
	// 				</li>
	// 				<li className="aboutPage">
	// 					<button
	// 						type="button"
	// 						id="aboutTrigger"
	// 						className="aboutPage">
	// 						<Link href="/about">About</Link>
	// 					</button>
	// 				</li>
	// 				<li className="answerPage">
	// 					<button
	// 						type="button"
	// 						id="answerTrigger"
	// 						className="answerPage">
	// 						<Link href="/answer">Answer</Link>
	// 					</button>
	// 				</li>
	// 			</ul>
	// 		</div>
	// 	);
	// }
}