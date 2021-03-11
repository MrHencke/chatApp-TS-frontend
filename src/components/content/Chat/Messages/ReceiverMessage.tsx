import React from 'react';
import PlaceholderProfileImage from '../../../../testing/PlaceholderProfileImage';

const ReceiverMessage = () => {
	return (
		<div className='media w-50 ml-auto mb-3'>
			<div className='media-body mr-3'>
				<div className='bg-primary rounded py-2 px-3 mb-2'>
					<p className='text-small mb-0 text-white'>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Assumenda perferendis quo eos voluptatem
						recusandae voluptatibus inventore, labore culpa ea
						maiores! Voluptas, architecto molestiae quam a officiis
						esse eaque provident numquam.
					</p>
				</div>
				<p className='small text-muted'>
					{
						new Date().toLocaleTimeString('nb-NO')
						/* Set to actual time of message later */
					}
				</p>
			</div>
			<PlaceholderProfileImage />
		</div>
	);
};

export default ReceiverMessage;
