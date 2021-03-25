import moment from 'moment';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Socket } from 'socket.io-client';
import { changeCurrentChat } from '../../../store/actions/app/changeCurrentChat';
import { IChat } from '../../../store/interfaces/IChat';
import TimeStamp from './util/TimeStamp';
import ProfilePicture from '../cards/ProfilePicture';

interface Props {
	socket: Socket;
	chat: IChat;
}

const RecentElement = ({ socket, chat }: Props) => {
	const dispatch = useDispatch();
	const joinRoom = () => {
		dispatch(changeCurrentChat(chat._id));
	};

	return (
		<>
			<Link
				to='#'
				onClick={joinRoom}
				className='list-group-item list-group-item-action list-group-item-light overflow-hidden'
			>
				<div className='media'>
					<ProfilePicture profilepicture={chat.chatIcon} id='0' width='50' height='50' />
					<div className='media-body ml-4'>
						<div className='d-inline-block align-items-center justify-content-between mb-1'>
							<h6 className='mb-0 text-truncate' style={{ width: '6rem' }}>
								{chat.name}
							</h6>
						</div>
						{chat.messages[0] ? (
							<p
								className='font-italic mb-0 text-small text-truncate'
								style={{ width: '7rem' }}
							>
								{chat.messages[chat.messages.length - 1].content}
							</p>
						) : (
							<p className='font-italic mb-0 text-small'>No messages in chat.</p>
						)}
					</div>
					{chat.messages[0] ? (
						<small className='px-2 font-weight-bold'>
							<TimeStamp
								timestamp={moment(
									chat.messages[chat.messages.length - 1].timestamp
								)}
							/>
						</small>
					) : null}
				</div>
			</Link>
		</>
	);
};

export default RecentElement;

