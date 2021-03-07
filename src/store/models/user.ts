enum themes {
	LIGHT = 'light',
	DARK = 'dark',
}

interface IUser {
	_id: string;
	email: string;
	username: string;
	name: string;
	password?: string;
	isAdmin?: Boolean;
	themePreference?: themes;
}

export { themes };
export default IUser;
