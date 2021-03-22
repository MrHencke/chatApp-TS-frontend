import '../../../assets/scss/Chat.scss';
import Input from './Input';
import Message from './Messages/Message';
import { Socket } from 'socket.io-client';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import UserTyping from './Messages/types/UserTyping';
import ChatSettings from './util/ChatSettings';
import NoSelectedChat from './util/NoSelectedChat';
import NoMessagesInChat from './util/NoMessagesInChat';
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
	const usersTyping = chat?.isTyping;
	const [usersTypingString, setUsersTypingString] = useState('');

	const RenderTyping = () => {
		if (usersTyping && usersTyping.length !== 0) {
			usersTyping.length === 1
				? setUsersTypingString(usersTyping[0])
				: setUsersTypingString(usersTyping.join(', '));
			return <UserTyping usersTypingString={usersTypingString} />;
		} else {
			return null;
		}
	};

	const RenderChat = () => {
		return (
			<>
				{chat !== undefined ? (
					<div>
						{chat.messages.length !== 0
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
							: <NoMessagesInChat/>}
					</div>
				) : (
					<NoSelectedChat />
				)}
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
					<ChatSettings chat={chat!} currentChat={currentChat} userID={user.profile.id} />
				</div>
				<div className='px-4 pt-5 pb-0 chat-box bg-white'>
					<RenderChat />
					<RenderTyping />
					<div className='' id='Hey stop looking at this' ref={bottomRef}></div>
				</div>

				<Input socket={socket} />
			</div>
		</>
	);
};

export default SelectedChat;
