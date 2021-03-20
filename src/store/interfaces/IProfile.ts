
enum themes {
	LIGHT = 'light',
	DARK = 'dark',
}

interface IProfile {
	id: string;
	email: string;
	username: string;
	profilepicture: string;
	themePreference?: themes;
}

export { themes };
export type { IProfile };
