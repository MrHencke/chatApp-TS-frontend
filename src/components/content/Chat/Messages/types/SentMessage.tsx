import moment from 'moment';
import React from 'react';
import IMessage from '../../../../../store/interfaces/IMessage';
import PlaceholderProfileImage from '../../../../../testing/PlaceholderProfileImage';

interface Props {
	message: IMessage;
}

/** Message sent by user to another user */
const SentMessage = ({ message }: Props) => {
	return (
		<div className='media w-50 mb-3'>
			<PlaceholderProfileImage />
			<div className='media-body ml-3'>
				<div className='bg-light rounded py-2 px-3 mb-2'>
					<p className='text-small mb-0 text-muted'>{message.content}</p>
				</div>
				<p className='small text-muted'>{moment(message.timestamp).format('HH:mm')}</p>
			</div>
		</div>
	);
};

export default SentMessage;
