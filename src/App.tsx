import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Routes from './Routes';

const App = () => {
	return (
		<Router>
			<main className='app d-flex flex-column min-vh-100'>
				<Header />
				<Routes />
				<Footer />
			</main>
		</Router>
	);
};

export default App;
