export enum themes {
	LIGHT = 'light',
	DARK = 'dark',
}

export default interface IUser {
	email: string;
	username: string;
	_id: string;
	fName: string;
	lName: string;
	password?: string;
	isAdmin?: Boolean;
	themePreference?: themes; //Make a type later
}
