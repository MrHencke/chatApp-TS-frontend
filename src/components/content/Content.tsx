import { FC } from 'react';
import Home from './Welcome/Home';
import Contacts from './cards/Contacts/Contacts';
import ChatWindow from './Chat/ChatWindow';
import Settings from '../auth/settings/Settings';
import { match } from 'react-router-dom';
import { RootState } from '../../store/reducers/';
import { useSelector } from 'react-redux';
import NoAccess from './NoAccess';
import Userlist from './cards/userlist/Userlist';
import SocketIOFunctionality from '../../socket/SocketIOFunctionality';
import Unauthorized from '../ui/Unauthorized';
import { Socket } from 'socket.io-client';

const Content: FC<MatchProps> = ({ match }) => {
	const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
	const currentUrl: string = match.path;
	const socket: Socket = useSelector((state: RootState) => state.app.socket)!;

	return (
		<>
			{currentUrl === '/notoken' && <Unauthorized />}

			{socket ? <SocketIOFunctionality socket={socket} /> : null}

			{isLoggedIn ? (
				<>
					{currentUrl === '/' && <Home />}
					{currentUrl === '/contacts' && <Contacts />}
					{currentUrl === '/chats/:id' && <ChatWindow />}
					{currentUrl === '/chats' && <ChatWindow />}
					{currentUrl === '/userlist' && <Userlist />}
					{currentUrl === '/settings' && <Settings />}
				</>
			) : (
				<>
					{currentUrl === '/' && <Home />}
					{currentUrl !== '/' && <NoAccess />}
				</>
			)}
		</>
	);
};

export default Content;
interface MatchProps {
	match: match;
}
