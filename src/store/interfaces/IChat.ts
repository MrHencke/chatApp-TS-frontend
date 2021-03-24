import IMessage from './IMessage';

interface Users {
	_id: string;
	username: string;
	profilepicture: string;
}
interface IChat {
	_id: string;
	name: string;
	owner: string;
	users: Users[];
	messages: IMessage[];
	isTyping?: string[];
	chatIcon: string;
}

export type { IChat, Users };
