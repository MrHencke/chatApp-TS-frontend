import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const Logout = () => {
	const history = useHistory();

	const [time, setTime] = useState(5);

	useEffect(() => {
		const timerID = setInterval(() => tick(), 1000);
		return () => {
			clearInterval(timerID);
		};
	});

	const tick = () => {
		setTime(time - 1);
	};

	if (time === 0) history.push('/');

	return (
		<div className='py-4 mt-auto text-center'>
			<div className='text-md-center'>
				<p className='font-size-sm mb-0 mr-3 order-md-1'>
					<span className='text-muted mr-1'>
						<h3>You are now logged out.</h3>
						<p>Redirecting to home page in: {time} </p>
					</span>
				</p>
			</div>
		</div>
	);
};

export default Logout;
