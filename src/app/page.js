import Image from 'next/image';
import {Route, Routes} from 'react-router-dom';

// STATIC COMPONENTS
import Navbar from './components/static/Navbar';
import Footer from './components/static/Footer';

// DYNAMIC COMPONENTS
import About from './components/About';
import Answer from './components/Answer';
import Ask from './components/Ask';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Register from './components/Register';
import Signin from './components/Signin';
import Signout from './components/Signout';

export default function Home() {
	return (
		<main>
			<Navbar />
			<div>
				<Routes>
					{/* ABOUT PAGE */}
					<Route path="/about" element={<About />} />
					{/* ANSWER PAGE */}
					<Route path="/answer" element={<Answer />} />
					{/* ASK PAGE */}
					<Route path="/ask" element={<Ask />} />
					{/* CONTACT PAGE */}
					<Route path="/contact" element={<Contact />} />
					{/* PROFILE PAGE */}
					<Route path="/profile" element={<Profile />} />
					{/* REGISTER PAGE */}
					<Route path="/register" element={<Register />} />
					{/* SIGNIN PAGE */}
					<Route path="/signin" element={<Signin />} />
					{/* SIGNOUT PAGE */}
					<Route path="/signout" element={<Signout />} />
					{/* 404 HANDLER */}
					<Route
						path="*"
						element={
							<Home>
								<span>404 - Page not found</span>
							</Home>
						}
					/>
				</Routes>
			</div>
			<Footer />
		</main>
	);
}
