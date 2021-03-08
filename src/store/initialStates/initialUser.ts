import { IProfile } from '../models/profile';
import { IUser } from '../models/user';

const initialProfile: IProfile = {
	id: '',
	email: '',
	username: '',
	name: '',
};

const initialUser: IUser = {
	profile: initialProfile,
	isLoggedIn: false,
	token: '',
	loading: false,
	error: '',
};

export default initialUser;
