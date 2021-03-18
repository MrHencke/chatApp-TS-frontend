import { newSocket } from '../../../store/actions/app/newSocket';
import ChatWindow from './ChatWindow';
import { useDispatch } from 'react-redux';

const Chat = () => {
	return (
		<>
			<ChatWindow />
		</>
	);
};

export default Chat;
