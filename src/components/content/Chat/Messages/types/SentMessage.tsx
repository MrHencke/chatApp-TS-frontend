import moment from 'moment';
import React from 'react';
import { Users } from '../../../../../store/interfaces/IChat';
import IMessage from '../../../../../store/interfaces/IMessage';
import TimeStamp from '../../util/TimeStamp';

interface Props {
	message: IMessage;
	user: Users;
}

/** Message sent by user to another user */
const SentMessage = ({ message, user }: Props) => {
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
					<p className='w-50 ml-auto text-right'>{user.username}</p>
				</div>
			</div>
			<img src={user.profilepicture} alt='' width='50' height='50' />
		</div>
	);
};

export default SentMessage;
