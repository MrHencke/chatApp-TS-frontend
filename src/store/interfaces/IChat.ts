import IMessage from './IMessage';

interface IChat {
	_id: string;
	name: string;
	owner: string;
	users: string[];
	messages: IMessage[];
}

export type { IChat };
