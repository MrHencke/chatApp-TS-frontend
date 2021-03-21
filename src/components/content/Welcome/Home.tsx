import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import Clock from './Clock';

const Home = () => {
	const user = useSelector((state: RootState) => state.user);
	return (
		<div className='py-4 mt-auto text-center'>
			<div className='text-md-center'>
				<div className='font-size-sm mb-0 mr-3 order-md-1'>
					<span className='text-muted mr-1'>
						{user.isLoggedIn ? (
							<>
								<Clock />
								<h3>Welcome {user.profile.username}</h3>
							</>
						) : (
							<>
							<h3>Welcome to The Chat App!</h3>
							<h4>Register in the top right corner to start chatting!</h4>
							</>
						)}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Home;
