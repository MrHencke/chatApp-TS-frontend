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
import { newChatName } from '../store/actions/user/newChatName';
import { userLeftChat } from '../store/actions/user/userLeftChat';
import { setOnlineUsers } from '../store/actions/app/setOnlineUsers';
import { socketDisconnect } from '../store/actions/app/socketDisconnect';
import { useHistory } from 'react-router';
import { logoutUnauthorized } from '../store/actions/user/logoutUnauthorized';

const SocketIOFunctionality = () => {
	const dispatch = useDispatch();
	const history = useHistory();

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
			dispatch(typingMessage(data));
		});
		return () => {
			socket.off('isTypingReturn');
		};
	});

	useEffect(() => {
		socket.on('stoppedTypingReturn', (data) => {
			dispatch(stoppedTyping(data));
		});
		return () => {
			socket.off('stoppedTypingReturn');
		};
	});

	useEffect(() => {
		socket.on('newChatNameReturn', (data) => {
			dispatch(newChatName(data));
		});
		return () => {
			socket.off('newChatNameReturn');
		};
	});

	useEffect(() => {
		socket.on('userLeftChatReturn', (data) => {
			dispatch(userLeftChat(data));
		});
		return () => {
			socket.off('userLeftChatReturn');
		};
	});

	useEffect(() => {
		socket.on('onlineUsers', (data: string[]) => {
			dispatch(setOnlineUsers(data));
		});
		return () => {
			socket.off('onlineUsers');
		};
	});

	useEffect(() => {
		socket.on('error', (error) => {
			if (error.message === 'Unauthorized') {
				dispatch(logoutUnauthorized(history));
				dispatch(socketDisconnect());
			}
			console.log(error);
		});
		return () => {
			socket.off('error');
		};
	});

	useEffect(() => {
		socket.on('disconnect', () => {
			dispatch(logoutUnauthorized(history));
			dispatch(socketDisconnect());
		});
		return () => {
			socket.off('disconnect');
		};
	});

	useEffect(() => {
		socket.on('connect_error', (error) => {
			if (error.message === 'Unauthorized') {
				dispatch(logoutUnauthorized(history));
				dispatch(socketDisconnect());
			}
		});
		return () => {
			socket.off('connect_error');
		};
	});

	return <></>;
};

export default SocketIOFunctionality;
