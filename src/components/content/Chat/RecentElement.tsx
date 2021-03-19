import moment from 'moment';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Socket } from 'socket.io-client';
import { changeCurrentChat } from '../../../store/actions/app/changeCurrentChat';
import { IChat } from '../../../store/interfaces/IChat';
import PlaceholderProfileImage from '../../../testing/PlaceholderProfileImage';

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
					className='list-group-item list-group-item-action list-group-item-light rounded-0'
				>
					<div className='media'>
						<PlaceholderProfileImage />
						<div className='media-body ml-4'>
							<div className='d-flex align-items-center justify-content-between mb-1'>
								<h6 className='mb-0'>
									{
										chat.name.split(
											' '
										)[0] /* TODO change to a group name/chat name*/
									}
								</h6>
								<small className='small font-weight-bold'>
									{moment(
										chat.messages[chat.messages.length - 1].timestamp
									).format('HH:mm, DD/MM')}
									{/* TODO fix timestamp later */}
								</small>
							</div>
							<p className='font-italic mb-0 text-small'>
								{chat.messages[chat.messages.length - 1].content}
							</p>
						</div>
					</div>
				</Link>
			) : (
				<Link
					to='#'
					onClick={joinRoom}
					className='list-group-item list-group-item-action list-group-item-light rounded-0'
				>
					<div className='media'>
						<PlaceholderProfileImage />
						<div className='media-body ml-4'>
							<div className='d-flex align-items-center justify-content-between mb-1'>
								<h6 className='mb-0'>
									{
										chat.name.split(
											' '
										)[0] /* TODO change to a group name/chat name*/
									}
								</h6>
								<small className='small font-weight-bold'></small>
							</div>
							<p className='font-italic mb-0 text-small'>
								New Chat, click to start chatting!
							</p>
						</div>
					</div>
				</Link>
			)}
		</>
	);
};

export default RecentElement;
