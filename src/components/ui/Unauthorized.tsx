import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Unauthorized = () => {
	const history = useHistory();

	const [time, setTime] = useState(10);

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
				<div className='font-size-sm mb-0 mr-3 order-md-1'>
					<span className='text-muted mr-1'>
						<h3>Your session has expired</h3>
						<h4>Please log in again</h4>
						<p>Redirecting to home page in: {time} </p>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Unauthorized;
