import '../../../assets/scss/Chat.scss';
import Input from './Input';
import Message from './Messages/Message';
import { Socket } from 'socket.io-client';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
interface Props {
	socket: Socket;
}

const SelectedChat = ({ socket }: Props) => {
	const currentChat = useSelector((state: RootState) => state.app.currentChat);
	const bottomRef: any = useRef(); //TODO Swap types to something other than any

	const scrollToBottom = () => {
		bottomRef.current.scrollIntoView();
	};

	const joinRoom = () => {
		if (chat !== null && chat !== undefined) {
			socket.emit('join', currentChat);
		}
	};

	const leaveRoom = () => {
		if (chat !== null && chat !== undefined) {
			socket.emit('leave', currentChat);
		}
	};

	useEffect(() => {
		joinRoom();
		return () => {
			leaveRoom();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentChat]);

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
							return <Message key={msg._id} message={msg} userID={user.profile.id} />;
					  })
					: null}
			</>
		);
	};
	return (
		<>
			<div className='col-9 px-0'>
				<div className='bg-gray px-4 py-2 bg-light'>
					<p className='h5 mb-0 py-1'>{chat !== undefined ? chat.name : null}</p>
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
