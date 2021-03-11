import React, { FC } from 'react';
import Home from './Welcome/Home';
import Contacts from './Contacts/Contacts';
import Chat from './Chat/ChatWindow';
import Settings from '../auth/Settings';
import { match } from 'react-router-dom';
import { RootState } from '../../store/reducers/';
import { useSelector } from 'react-redux';
import NoAccess from './NoAccess';

const Content: FC<MatchProps> = ({ match }) => {
	const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
	const currentUrl: string = match.path;
	return (
		<>
			{isLoggedIn ? (
				<>
					{' '}
					{currentUrl === '/' && <Home />}
					{currentUrl === '/contacts' && <Contacts />}
					{currentUrl === '/chats/:id' && <Chat />}
					{currentUrl === '/settings' && <Settings />}
				</>
			) : (
				<>
					<NoAccess />
				</>
			)}
		</>
	);
};

export default Content;
interface MatchProps {
	match: match;
}
