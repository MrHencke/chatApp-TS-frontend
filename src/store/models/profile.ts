enum themes {
	LIGHT = 'light',
	DARK = 'dark',
}

interface IProfile {
	id: string;
	email: string;
	username: string;
	name: string;
	token?: string;
	password?: string;
	isAdmin?: boolean;
	themePreference?: themes;
}

export { themes };
export type { IProfile };
