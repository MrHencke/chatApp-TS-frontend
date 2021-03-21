import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import IMessage from '../store/interfaces/IMessage';
import { newMessageInChat } from '../store/actions/user/newMessageInChat';
import { useEffect } from 'react';
import { IChat } from '../store/interfaces/IChat';
import { Socket } from 'socket.io-client';
import { newChat } from '../store/actions/user/newChat';
import { typingMessage } from '../store/actions/user/typingMessage';
import { stoppedTyping } from '../store/actions/user/stoppedTyping';

const SocketIOFunctionality = () => {
	const dispatch = useDispatch();

	//@ts-ignore
	const socket: Socket = useSelector((state: RootState) => state.app.socket);
	const chats = useSelector((state: RootState) => state.user.chats);

	useEffect(() => {
		socket.on('newChatMessageReturn', (msg: IMessage) => {
			dispatch(newMessageInChat(msg));
		});
		return () => {
			socket.off('newChatMessageReturn');
		};
	});

	socket.on('status', (status: string) => {
		console.log(status);
	});

	useEffect(() => {
		socket.on('chatCreated', (chat: IChat) => {
			console.log(chat);
			socket.emit('join', chat._id);
			dispatch(newChat(chat));
		});
		return () => {
			socket.off('chatCreated');
		};
	});

	useEffect(() => {
		if (chats) {
			chats.forEach((chat: IChat) => {
				socket.emit('join', chat._id);
			});
		}
	}, [chats, socket]);

	useEffect(() => {
		socket.on('isTypingReturn', (data) => {
			console.log(data.username + ' Is typing');
			dispatch(typingMessage(data));
		});
		return () => {
			socket.off('isTypingReturn');
		};
	});

	useEffect(() => {
		socket.on('stoppedTypingReturn', (data) => {
			console.log(data.username + ' Is typing');
			dispatch(stoppedTyping(data));
		});
		return () => {
			socket.off('stoppedTypingReturn');
		};
	});

	return <></>;
};

export default SocketIOFunctionality;
