import { useEffect, useState } from 'react';

interface Props {
	usersTypingString: string;
}
/** Message received by user from another user */
const UserTyping = ({ usersTypingString }: Props) => {
	const [dots, setDots] = useState('');

	useEffect(() => {
		const timerID = setInterval(() => tick(), 1000);
		return () => {
			clearInterval(timerID);
		};
	});

	const tick = () => {
		if (dots.length < 3) {
			setDots(dots + '.');
		} else {
			setDots('');
		}
	};

	return (
		<div className='media w-50 mb-3'>
			<div className=' ml-3'>
				<div className='bg-light rounded py-2 px-3 mb-2 text-break'>
					<p className='text-small mb-0 text-break'>
						{usersTypingString + ' is typing' + dots}
					</p>
				</div>
			</div>
		</div>
	);
};

export default UserTyping;
