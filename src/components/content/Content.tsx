import { FC } from 'react';
import Home from './Welcome/Home';
import Contacts from './cards/Contacts/Contacts';
import ChatWindow from './Chat/ChatWindow';
import Settings from '../auth/Settings';
import { match } from 'react-router-dom';
import { RootState } from '../../store/reducers/';
import { useSelector } from 'react-redux';
import NoAccess from './NoAccess';
import Userlist from './cards/userlist/Userlist';
import SocketIOFunctionality from '../../socket/SocketIOFunctionality';
import Unauthorized from '../ui/Unauthorized';

const Content: FC<MatchProps> = ({ match }) => {
	const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
	const currentUrl: string = match.path;
	return (
		<>
			{currentUrl === '/notoken' && <Unauthorized />}

			{isLoggedIn ? (
				<>
					<SocketIOFunctionality />
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
