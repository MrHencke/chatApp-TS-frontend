import React, { FC, Props, PropsWithChildren } from 'react';
import Welcome from './Welcome/Welcome';
import Contacts from './Contacts/Contacts';
import Chat from './Chat/ChatWindow';
import Settings from './Settings/Settings';
import { match } from 'react-router-dom';

const Content: FC<MatchProps> = ({ match }) => {
	const currentUrl: string = match.path;
	return (
		<div>
			{currentUrl === '/' && <Welcome />}
			{currentUrl === '/contacts' && <Contacts />}
			{currentUrl === '/chat' && <Chat />}
			{currentUrl === '/settings' && <Settings />}
		</div>
	);
};

export default Content;
interface MatchProps {
	match: match;
}
