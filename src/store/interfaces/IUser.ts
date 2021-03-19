import { IChat } from './IChat';
import { IContact } from './IContact';
import { IProfile } from './IProfile';

interface IUser {
	profile: IProfile;
	contacts: IContact[] | null;
	chats: IChat[] | null;
	token: string;
	loading: boolean;
	error: string;
	isLoggedIn: boolean;
	status?: number;
	message?: string;
}

export type { IUser };
