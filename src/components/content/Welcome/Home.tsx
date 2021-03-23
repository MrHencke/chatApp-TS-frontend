import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import LoggedOutHome from './loggedOut/LoggedOutHome';
import LoggedInHome from './loggedIn/LoggedInHome';

const Home = () => {
	const user = useSelector((state: RootState) => state.user);
	return (
		<div className='py-auto my-auto '>
			<div className='container'>
				{user.isLoggedIn ? (
					<LoggedInHome />
				) : (
					<div className='row h-100'>
						<LoggedOutHome />
					</div>
				)}
			</div>
		</div>
	);
};

export default Home;
