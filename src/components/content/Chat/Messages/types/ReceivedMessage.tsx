import moment from 'moment';
import { Users } from '../../../../../store/interfaces/IChat';
import IMessage from '../../../../../store/interfaces/IMessage';
import ProfilePicture from '../../../cards/ProfilePicture';
import TimeStamp from '../../util/TimeStamp';

interface Props {
	message: IMessage;
	user: Users;
}

/** Message received by user from another user */
const ReceivedMessage = ({ message, user }: Props) => {
	return (
		<div className='media w-50 mb-3'>
			<ProfilePicture
				profilepicture={user.profilepicture}
				id={user._id}
				width='50'
				height='50'
			/>
			<div className='media-body ml-3'>
				<div className='bg-light rounded py-2 px-3 mb-2 text-break'>
					<p className='text-small mb-0 text-muted text-break'>{message.content}</p>
				</div>
				<div className='small text-muted d-flex w-100'>
					<p className='w-50'>{user.username}</p>
					<p className='w-50 ml-auto text-right'>
						<TimeStamp timestamp={moment(message.timestamp)} />
					</p>
				</div>
			</div>
		</div>
	);
};

export default ReceivedMessage;
