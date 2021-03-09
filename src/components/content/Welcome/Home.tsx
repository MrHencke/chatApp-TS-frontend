import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import Clock from './Clock';

const Home = () => {
	const user = useSelector((state: RootState) => state.user);
	return (
		<div className='py-4 mt-auto text-center'>
			<div className='text-md-center'>
				<p className='font-size-sm mb-0 mr-3 order-md-1'>
					<span className='text-muted mr-1'>
						{user.isLoggedIn ? (
							<>
								<Clock />
								<h3>Welcome {user.profile.name}</h3>
							</>
						) : (
							<>
								<Clock />
								<h3>Placeholder</h3>
								<h3>Placeholder</h3>
								<h3>Placeholder</h3>
								<h3>Placeholder</h3>
								<h3>Placeholder</h3>
							</>
						)}
					</span>
				</p>
			</div>
		</div>
	);
};

export default Home;
