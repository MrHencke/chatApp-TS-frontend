import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/reducers';
import numbers from '../../../../util/numbers';
import CenteredCol from './CenteredCol';

const LoggedInHome = () => {
	const user = useSelector((state: RootState) => state.user);
	const onlineUsers = useSelector((state: RootState) => state.app.onlineUsers);
	const usersOnline = onlineUsers.length - 1 === -1 ? onlineUsers.length : onlineUsers.length - 1;
	const welcomeMessage = user.firstTimeLogin ? 'Welcome ' : 'Welcome back ';
	const grammar = usersOnline === 1 ? [' is ', 'user'] : [' are ', 'users'];
	const message =
		usersOnline === 0
			? 'invite your friends, then connect with them in them in the Users tab.'
			: 'connect with them in them in the Users tab.';
	const amount = usersOnline < 11 ? numbers[usersOnline] : usersOnline;
	return (
		<>
			<CenteredCol>
				{welcomeMessage} {user.profile.username.split(' ')[0]}
			</CenteredCol>
			<CenteredCol />
			<CenteredCol>
				There {grammar[0]} currently {amount} {grammar[1]} online, {message}
			</CenteredCol>

			{/* TODO ADD PICTURE OF ONLINE USER EXAMPLE */}
		</>
	);
};

export default LoggedInHome;
