import moment from 'moment';
import React from 'react';
import IMessage from '../../../../../store/interfaces/IMessage';
import TimeStamp from '../../TimeStamp';

interface Props {
	message: IMessage;
	authorName: string;
	authorPicture: string;
}
/** Message received by user from another user */
const ReceivedMessage = ({ message, authorName, authorPicture }: Props) => {
	return (
		<div className=' media w-50 ml-auto mb-3'>
			<div className='media-body mr-3 text-break'>
				<div className='bg-primary rounded py-2 px-3 mb-2 text-break'>
					<p className='text-small mb-0 text-white text-break'>{message.content}</p>
				</div>
				<div className='small text-muted d-flex w-100'>
					<p className='w-50'>
						<TimeStamp timestamp={moment(message.timestamp)} />
					</p>
					<p className='w-50 ml-auto text-right'>{authorName}</p>
				</div>
			</div>
			<img src={authorPicture} alt="" width="50" height="50"/>
		</div>
	);
};

export default ReceivedMessage;
