import { IProfile } from './IProfile';

interface IUser {
	profile: IProfile;
	token: string;
	loading: boolean;
	error: string;
	isLoggedIn: boolean;
	status?: number;
	message?: string;
}

export type { IUser };