import React, { useEffect } from 'react';
import OtherChats from './RecentChats';
import SelectedChat from './SelectedChat';
import '../../../assets/scss/Chat.scss';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import { RootState } from '../../../store/reducers';

const ChatWindow = () => {
	const user = useSelector((state: RootState) => state.user);
	const socketurl = 'http://localhost:8002';

	const socket = io(socketurl, {
		path: '/socket',
		auth: {
			token: user.token,
		},
		autoConnect: false,
	});

	useEffect(() => {
		socket.connect();
		return () => {
			socket.disconnect();
		};
	});

	socket.on('status', (msg) => {
		console.log(msg);
	});

	return (
		<div className='container py-5 px-4'>
			<div className='row rounded-lg overflow-hidden shadow'>
				<OtherChats socket={socket} />
				<SelectedChat userID={user.profile.id} socket={socket} />
			</div>
		</div>
	);
};

export default ChatWindow;
