import React from 'react';
import PlaceholderProfileImage from '../../../../testing/PlaceholderProfileImage';

const SenderMessage = () => {
	return (
		<div className='media w-50 mb-3'>
			<PlaceholderProfileImage />
			<div className='media-body ml-3'>
				<div className='bg-light rounded py-2 px-3 mb-2'>
					<p className='text-small mb-0 text-muted'>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Blanditiis ab doloremque iure ipsa ipsam quia
						facere quam porro non molestiae assumenda vero iste,
						soluta itaque cupiditate veritatis. Dolores, minima
						saepe?
					</p>
				</div>
				<p className='small text-muted'>
					{
						new Date().toLocaleTimeString(
							'nb-NO'
						) /* Set to actual time of message later */
					}
				</p>
			</div>
		</div>
	);
};

export default SenderMessage;
