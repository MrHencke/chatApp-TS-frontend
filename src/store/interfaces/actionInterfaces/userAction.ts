import { IChat } from '../IChat';
import IMessage from '../IMessage';
import { TypingData } from '../ITypingData';
import { IUser } from '../IUser';

type userAction = {
	type: string;
	payload: {
		data: IUser;
		newMessage?: IMessage;
		newChat?: IChat;
		typingStatus?: TypingData;
	};
};

export type { userAction };
