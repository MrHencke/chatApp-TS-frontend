import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/reducers';
import numbers from '../../../../util/numbers';
import CenteredCol from './CenteredCol';

const LoggedInHome = () => {
	const user = useSelector((state: RootState) => state.user);
	const onlineUsers = useSelector((state: RootState) => state.app.onlineUsers);
	const welcomeMessage = user.firstTimeLogin ? 'Welcome ' : 'Welcome back ';
	const grammar = onlineUsers.length === 1 ? [' is ', 'user'] : [' are ', 'users'];
	const message =
		onlineUsers.length === 0
			? 'invite your friends, then connect with them in them in the Users tab.'
			: 'connect with them in them in the Users tab.';
	const amount = onlineUsers.length < 11 ? numbers[onlineUsers.length] : onlineUsers.length;
	return (
		<>
			<CenteredCol>
				{welcomeMessage} {user.profile.username.split(' ')[0]}
			</CenteredCol>
			<CenteredCol />
			<CenteredCol>
				There {grammar[0]} currently {amount} {grammar[1]} online, {message}
			</CenteredCol>
		</>
	);
};

export default LoggedInHome;
