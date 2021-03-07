import { CancelToken } from 'axios';

enum themes {
	LIGHT = 'light',
	DARK = 'dark',
}

interface IUser {
	id: string;
	email: string;
	username: string;
	name: string;
	token?: string;
	password?: string;
	isAdmin?: Boolean;
	themePreference?: themes;
}

export { themes };
export type { IUser };
