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
			: 'connect with them in them in the Users tab';
	const amount = usersOnline < 11 ? numbers[usersOnline] : usersOnline;
	return (
		<>
			<div className='container vh-100'>
				<CenteredCol>
					{welcomeMessage} {user.profile.username.split(' ')[0]}
				</CenteredCol>
				<CenteredCol />
				<CenteredCol>
					There {grammar[0]} currently {amount} {grammar[1]} online, {message}
				</CenteredCol>
			</div>
			<div className='col w-75 mx-auto'>
				<div className='py-4 text-center text-muted'>
					<h2 className='font-size-sm mb-0 mr-3 order-md-1'>Features:</h2>
				</div>
				<ul className='list-group list-group-flush text-center text-muted shadow'>
					<li className='list-group-item'>Real time messaging</li>
					<li className='list-group-item'>Continued login sessions on device</li>
					<li className='list-group-item'>Ability to see who is online</li>
					<li className='list-group-item'>See who is currently typing in a chat</li>
					<li className='list-group-item'>Leave chat</li>
					<li className='list-group-item'>Remove members from chat (Chat-Admin only)</li>
					<li className='list-group-item'>Invite more members to a chat</li>
					<li className='list-group-item'>
						Create new chats (With or without custom chat icon)
					</li>
					<li className='list-group-item'>Changing username</li>
					<li className='list-group-item'>Delete account</li>
				</ul>
			</div>
		</>
	);
};

export default LoggedInHome;
