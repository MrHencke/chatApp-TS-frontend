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
	const profile = useSelector((state: RootState) => state.user.profile);
	const userID = profile.id;
	const username = profile.username;
	const chatID = useSelector((state: RootState) => state.app.currentChat);
	const [messageBody, setMessageBody] = useState('');
	const [typing, setTyping] = useState(false);

	const handleInput = (e: FormEvent) => {
		e.preventDefault();
		if (chatID !== null && messageBody !== '') {
			let message = newMessage(userID, messageBody, chatID);
			socket.emit('newChatMessage', message);
			socket.emit('stoppedTyping', data);
		} else {
			console.log('When sending a message, it helps to write something.');
		}
		setMessageBody('');
	};

	let timeout: any;
	const data = { chatID, username };

	const timeoutFunction = () => {
		setTyping(false);
		if (typing === false) socket.emit('stoppedTyping', data);
	};

	const userIsTyping = () => {
		if (typing === false) {
			setTyping(true);
			socket.emit('typingMessage', data);
			timeout = setTimeout(timeoutFunction, 4000);
		} else {
			clearTimeout(timeout);
			timeout = setTimeout(timeoutFunction, 4000);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMessageBody(e.target.value);
		userIsTyping();
	};

	return (
		<form onSubmit={handleInput} className='bg-light py-2'>
			<div className='input-group'>
				<input
					type='text'
					onChange={(e) => handleChange(e)}
					value={messageBody}
					className='form-control rounded-0 border-1 bg-light'
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
