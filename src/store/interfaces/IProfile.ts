import { IChat } from './IChat';
import { IContact } from './IContact';

enum themes {
	LIGHT = 'light',
	DARK = 'dark',
}

interface IProfile {
	id: string;
	email: string;
	username: string;
	contacts: IContact[] | null;
	chats: IChat[] | null;
	themePreference?: themes;
}

export { themes };
export type { IProfile };
