import moment from 'moment';
import React from 'react';
import IMessage from '../../../../../store/interfaces/IMessage';
import PlaceholderProfileImage from '../../../../../testing/PlaceholderProfileImage';

interface Props {
	message: IMessage;
}

const ReceiverMessage = ({ message }: Props) => {
	return (
		<div className='media w-50 ml-auto mb-3'>
			<div className='media-body mr-3'>
				<div className='bg-primary rounded py-2 px-3 mb-2'>
					<p className='text-small mb-0 text-white'>{message.content}</p>
				</div>
				<p className='small text-muted'>{moment(message.timestamp).format('HH:mm')}</p>
			</div>
			<PlaceholderProfileImage />
		</div>
	);
};

export default ReceiverMessage;
