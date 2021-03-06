import { Socket } from 'socket.io-client';
import { IContact } from './IContact';

interface IApp {
	users: IContact[] | null;
	socket: Socket | null;
	currentChat: string | null;
	onlineUsers: string[];
}

export type { IApp };
