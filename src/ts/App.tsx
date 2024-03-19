/*

DESIGNS

https://www.figma.com/file/ehQ0VXu8e8GaBZysLpP2E2/Floopyinn-Rental-Website-Ui--kit-(Community)?type=design&node-id=0-1&mode=design&t=5dULg0A8VDBiaPfk-0

*/

// Import packages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import global CSS
import '../css/App.scss';
import '../css/colors.css';

// Import Pages
import Home from './pages/home';
import About from './pages/about';
import Dashboard from './pages/dashboard';
import NotFound from './pages/not_found';

// Import global components
import Header from './components/header';
import Footer from './components/footer';
import InWorks from './components/body/in-works-popup';

// Import auth
import { AuthProvider } from './Auth';

function App() {
	return (
		<Router>
			<AuthProvider>

			<Header />

			<InWorks />

			<Routes>
				<Route
					path='/'
					element={<Home/>}
				/>

				<Route
					path='/about'
					element={<About/>}
				/>

				<Route
					path='/dashboard'
					element={<Dashboard/>}
				/>

				<Route
					path='/*'
					element={<NotFound/>}
				/>
			</Routes>

			<Footer />
			</AuthProvider>
		</Router>
	);
}

export default App;
