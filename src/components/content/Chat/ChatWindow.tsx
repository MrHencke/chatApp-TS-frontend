import OtherChats from './RecentChats';
import SelectedChat from './SelectedChat';
import '../../../assets/scss/Chat.scss';
import { Socket } from 'socket.io-client';
import { RootState } from '../../../store/reducers';
import { useSelector } from 'react-redux';

const ChatWindow = () => {
	//@ts-ignore
	const socket: Socket = useSelector((state: RootState) => state.app.socket);

	return (
		<div className='container py-5 px-4'>
			<div className='row rounded-lg overflow-hidden shadow'>
				<OtherChats socket={socket} />
				<SelectedChat socket={socket} />
			</div>
		</div>
	);
};

export default ChatWindow;
