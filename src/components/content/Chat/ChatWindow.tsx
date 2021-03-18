import { useEffect } from 'react';
import OtherChats from './RecentChats';
import SelectedChat from './SelectedChat';
import '../../../assets/scss/Chat.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Socket } from 'socket.io-client';
import { RootState } from '../../../store/reducers';
import IMessage from '../../../store/interfaces/IMessage';

const ChatWindow = () => {
	const user = useSelector((state: RootState) => state.user);
	const dispatch = useDispatch();

	//@ts-ignore
	const socket: Socket = useSelector((state: RootState) => state.app.socket);

	socket.on('status', (message: string) => console.log(message));
	socket.on('message', (message: IMessage) => messageFunc(message));
	socket.on('newChatMessageReturn', (msg) => {
		//dispatch(newMessageInChat(msg))
	});

	return (
		<div className='container py-5 px-4'>
			<div className='row rounded-lg overflow-hidden shadow'>
				<OtherChats socket={socket} />
				<SelectedChat userID={user.profile.id} socket={socket} />
			</div>
		</div>
	);
};

export default ChatWindow;

const messageFunc = (message: IMessage) => {
	console.log(message.content);
};
