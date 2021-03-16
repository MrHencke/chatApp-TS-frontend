import React, { FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { Socket } from 'socket.io-client';
import IMessage from '../../../store/interfaces/IMessage';
import { RootState } from '../../../store/reducers';

interface Props {
	socket: Socket;
}

const newMessage = (id: string, messageBody: string): IMessage => {
	return {
		chat_id: '123123213213', //TODO Get chat id from somewhere
		from_id: id,
		content: messageBody,
		timestamp: new Date().toLocaleTimeString('nb-NO'),
	};
};
const chatID = '1231234512'; //TODO, implement actual chat ids from database

const Input = ({ socket }: Props) => {
	const userID = useSelector((state: RootState) => state.user.profile.id);

	const [messageBody, setMessageBody] = useState('');

	const handleInput = (e: FormEvent) => {
		e.preventDefault();
		let message = newMessage(userID, messageBody);
		let data = { message, chatID };
		socket.emit('chat', data);
		setMessageBody('');
	};

	return (
		<form onSubmit={handleInput} className='bg-light'>
			<div className='input-group'>
				<input
					type='text'
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setMessageBody(e.target.value)
					}
					value={messageBody}
					className='form-control rounded-0 border-0 py-4 bg-light'
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
