import { IChat } from '../IChat';
import IMessage from '../IMessage';
import { IUser } from '../IUser';

type userAction = {
	type: string;
	payload: {
		data: IUser;
		newMessage?: IMessage;
		newChat?: IChat;
	};
};

export type { userAction };
