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

// Import global components
import Header from './components/header';
import Footer from './components/footer';

function App() {
	return (
		<Router>
			<Header />

			<Routes>
				<Route
					path='/'
					element={<Home/>}
				/>
			</Routes>

			<Footer />
		</Router>
	);
}

export default App;
