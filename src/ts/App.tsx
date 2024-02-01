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
