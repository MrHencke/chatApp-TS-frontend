import React, { FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { Socket } from 'socket.io-client';
import IMessage from '../../../store/interfaces/IMessage';
import { RootState } from '../../../store/reducers';

interface Props {
	socket: Socket;
}

const newMessage = (id: string, messageBody: string, chatID: string): IMessage => {
	return {
		_id: 'Placeholder',
		chat_id: chatID, //TODO Get chat id from somewhere
		from_id: id,
		content: messageBody,
		timestamp: new Date(),
	};
};

const Input = ({ socket }: Props) => {
	const userID = useSelector((state: RootState) => state.user.profile.id);
	const chatID = useSelector((state: RootState) => state.app.currentChat);
	const [messageBody, setMessageBody] = useState('');

	const handleInput = (e: FormEvent) => {
		e.preventDefault();
		if (chatID !== null && messageBody !== '') {
			let message = newMessage(userID, messageBody, chatID);
			socket.emit('newChatMessage', message);
		} else {
			console.log('There was no chat id provided to this chat');
		}
		setMessageBody('');
	};

	return (
		<form onSubmit={handleInput} className='bg-light py-2'>
			<div className='input-group'>
				<input
					type='text'
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setMessageBody(e.target.value)
					}
					value={messageBody}
					className='form-control rounded-0 border-0 bg-light'
				/>
				<div className='input-group-append'>
					<button type='submit' className='btn'>
						Send
					</button>
				</div>
			</div>
		</form>
	);
};

export default Input;
