import React from 'react';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import { RootState } from '../../../store/reducers';
import ChatWindow from './ChatWindow';

const Chat = () => {
	const user = useSelector((state: RootState) => state.user);
	/*const socket = io(`${process.env.BACKEND_FULL!}`, {
		auth: {
			token: user.token,
		},
	});*/

	return (
		<>
			<ChatWindow />
		</>
	);
};

export default Chat;
