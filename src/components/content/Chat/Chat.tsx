import ChatWindow from './ChatWindow';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import IMessage from '../../../store/interfaces/IMessage';
import { newMessageInChat } from '../../../store/actions/user/newMessageInChat';
import { useEffect } from 'react';

const Chat = () => {
	const dispatch = useDispatch();

	//@ts-ignore
	const socket: Socket = useSelector((state: RootState) => state.app.socket);

	socket.on('newChatMessageReturn', (msg: IMessage) => {
		console.log(msg);
		dispatch(newMessageInChat(msg));
	});
	/*TODO keep every socket.on in a useeffect with cleanup */
	useEffect(() => {
		socket.on('newChatMessageReturn', (msg: IMessage) => {
			console.log(msg);
			dispatch(newMessageInChat(msg));
		});
		return () => {
			socket.off('newChatMessageReturn');
		};
	});
	return (
		<>
			<ChatWindow socket={socket} />
		</>
	);
};

export default Chat;

const messageFunc = (message: IMessage) => {
	console.log(message.content);
};
