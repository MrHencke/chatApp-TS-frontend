import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import CarouselElement from './CarouselElement';
import Clock from './Clock';

const Home = () => {
	const user = useSelector((state: RootState) => state.user);
	return (
		<div className='py-auto my-auto container'>
			<div className='row h-100'>
				{user.isLoggedIn ? (
					<>
						<Clock />
						<h3>Welcome {user.profile.username}</h3>
					</>
				) : (
					<>
						<div className='col-lg-4'>
							<div className='text-muted my-5'>
								<h3>Chat privately, chat freely.</h3>
								<br />
								<h5>Instant messaging, for free.</h5>
								<h5>Simple as that.</h5>
								<br />
								<h6>Invite your friends and start chatting.</h6>
							</div>
						</div>
						<div className='col-lg-8'>
							<CarouselElement />
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Home;

/*

							<img src="https://res.cloudinary.com/mrhencke/image/upload/v1616366706/resources-ChatApp/demo_ihe4zr.png" alt=""
							height="357"
							width="600"
							/>


							<div className='py-auto mt-auto text-center container'>
			<div className='row'>
				<div className='text-md-center'>
					<div className='font-size-sm mb-0 mr-3 order-md-1'>
						<div className="col-sm">
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
						<div className='col-sm'>
							<CarouselElement />
						</div>
					</div>
				</div>
			</div>
		</div>
*/
