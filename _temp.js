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
