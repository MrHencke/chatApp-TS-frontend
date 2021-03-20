import '../../../assets/scss/Chat.scss';
import Input from './Input';
import Message from './Messages/Message';
import { Socket } from 'socket.io-client';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import ChatSettingsModal from './ChatSettingsModal';
interface Props {
	socket: Socket;
}

const SelectedChat = ({ socket }: Props) => {
	const currentChat = useSelector((state: RootState) => state.app.currentChat);
	const bottomRef: any = useRef(); //TODO Swap types to something other than any

	const scrollToBottom = () => {
		bottomRef.current.scrollIntoView();
	};

	useEffect(() => {
		scrollToBottom();
	});

	const user = useSelector((state: RootState) => state.user);
	//@ts-ignore
	const chat = user.chats.find((el) => el._id === currentChat);

	const RenderChat = () => {
		return (
			<>
				{chat !== undefined
					? chat.messages.map((msg) => {
							return (
								<Message
									key={msg._id}
									message={msg}
									userID={user.profile.id}
									chatusers={chat.users}
								/>
							);
					  })
					: null}
			</>
		);
	};
	const chatname = chat !== undefined ? chat.name : '';
	return (
		<>
			<div className='col-9 px-0'>
				<div className='d-flex bg-gray px-4 py-2 bg-light' style={{ height: '3rem' }}>
					<p className='h5 mb-0 py-1' style={{ width: '50%' }}>
						<p className='py-1'>{chatname}</p>
					</p>
					<div className='ml-auto'>
						<div className='btn-group dropleft'>
							<button
								type='button'
								className='btn btn-secondary dropdown-toggle'
								data-toggle='dropdown'
							>
								Chat Settings
							</button>
							<div className='dropdown-menu'>
								<ChatSettingsModal chatname={chatname} />
								<button className='dropdown-item btn'>Option 1</button>
								<button className='dropdown-item btn'>Option 2</button>
								<button className='dropdown-item btn'>Option 3</button>
							</div>
						</div>
					</div>
				</div>
				<div className='px-4 pt-5 pb-0 chat-box bg-white'>
					<RenderChat />
					<div id='Hey stop looking at this' ref={bottomRef}></div>
				</div>
				<Input socket={socket} />
			</div>
		</>
	);
};

export default SelectedChat;
