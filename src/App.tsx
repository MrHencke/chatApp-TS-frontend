import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Routes from './Routes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { continuedSession } from './store/actions/user/continuedSession';

const App = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	useEffect(() => {
		const profile = localStorage.getItem('profile');
		if (profile && profile !== undefined && profile !== 'undefined') {
			dispatch(continuedSession(history));
		}
	});

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
