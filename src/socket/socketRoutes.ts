import { Socket } from 'socket.io-client';
import IMessage from '../store/interfaces/IMessage';

const chat = (message: IMessage) => {
	console.log(message.content);
};

const error = (err: Error) => {
	console.error('The server sent an error', err);
};

const status = (message: string) => {
	console.log(message);
};

const disconnectSocket = (socket: Socket) => {
	console.log('Disconnecting socket...');
	if (socket) socket.disconnect();
};

export { chat, error, status, disconnectSocket };
