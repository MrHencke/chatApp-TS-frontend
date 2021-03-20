import moment from 'moment';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Socket } from 'socket.io-client';
import { changeCurrentChat } from '../../../store/actions/app/changeCurrentChat';
import { IChat } from '../../../store/interfaces/IChat';
import TimeStamp from './TimeStamp';

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
			{chat.messages[0] ? (
				<Link
					to='#'
					onClick={joinRoom}
					className='list-group-item list-group-item-action list-group-item-light overflow-hidden'
				>
					<div className='media'>
						<img
							src='https://res.cloudinary.com/mrhencke/image/upload/v1616254670/profilePictures/NOAVATAR_uwpx2v.jpg'
							alt=''
							width='50'
							height='50'
							style={{borderRadius: "100%"}}
						/>
						<div className='media-body ml-4'>
							<div className='d-inline-block align-items-center justify-content-between mb-1'>
								<h6 className='mb-0 text-truncate' style={{ width: '6rem' }}>
									{chat.name}
								</h6>
							</div>
							<p
								className='font-italic mb-0 text-small text-truncate'
								style={{ width: '7rem' }}
							>
								{chat.messages[chat.messages.length - 1].content}
							</p>
						</div>{' '}
						<small className='px-2 font-weight-bold'>
							<TimeStamp
								timestamp={moment(
									chat.messages[chat.messages.length - 1].timestamp
								)}
							/>
						</small>
					</div>
				</Link>
			) : (
				<Link
					to='#'
					onClick={joinRoom}
					className='list-group-item list-group-item-action list-group-item-light overflow-hidden'
				>
					<div className='media'>
					<img
							src='https://res.cloudinary.com/mrhencke/image/upload/v1616254670/profilePictures/NOAVATAR_uwpx2v.jpg'
							alt=''
							width='50'
							height='50'
							style={{borderRadius: "100%"}}
						/>
						<div className='media-body ml-4'>
							<div className='d-flex align-items-center justify-content-between mb-1'>
								<h6 className='mb-0 text-truncate' style={{ width: '6rem' }}>
									{chat.name}
								</h6>
								<small className='small font-weight-bold'></small>
							</div>
							<p className='font-italic mb-0 text-small'>No messages in chat.</p>
						</div>
					</div>
				</Link>
			)}
		</>
	);
};

export default RecentElement;
