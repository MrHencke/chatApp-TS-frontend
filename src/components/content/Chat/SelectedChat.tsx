import React from 'react';
import '../../../assets/scss/Chat.scss';
import Input from './Input';
import Message from './Messages/Message';

import DummyChat from '../../../testing/DummyChat';
import { Socket } from 'socket.io-client';
interface Props {
	userID: string;
	socket: Socket;
}

const SelectedChat = ({ userID, socket }: Props) => {
	return (
		<>
			<div className='col-9 px-0'>
				<div className='px-4 py-5 chat-box bg-white'>
					{DummyChat.map((msg) => {
						return <Message message={msg} userID={userID} />;
					})}
				</div>

				<Input socket={socket} />
			</div>
		</>
	);
};

export default SelectedChat;
