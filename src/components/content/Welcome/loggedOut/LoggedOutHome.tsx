import CarouselElement from './carousel/CarouselElement';

const LoggedOutHome = () => {
	return (
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
	);
};

export default LoggedOutHome;
