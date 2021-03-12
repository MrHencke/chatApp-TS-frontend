//import { useSelector } from 'react-redux';
//import { io } from 'socket.io-client'; TODO Add socket support for instant messaging
//import { RootState } from '../../../store/reducers';
import ChatWindow from './ChatWindow';

const Chat = () => {
	// const user = useSelector((state: RootState) => state.user);
	/*const socket = io(`${process.env.BACKEND_FULL!}`, {
		auth: {
			token: user.token,
		},
	}); TODO */

	return (
		<>
			<ChatWindow />
		</>
	);
};

export default Chat;
