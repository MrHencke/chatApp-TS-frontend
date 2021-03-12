import { IProfile } from '../interfaces/IProfile';
import { IUser } from '../interfaces/IUser';

const initialProfile: IProfile = {
	id: '',
	email: '',
	username: '',
	contacts: [{ _id: '', username: 'fafa' }], //Fix
	chats: [''],
};

const initialUser: IUser = {
	profile: initialProfile,
	isLoggedIn: false,
	token: '',
	loading: false,
	error: '',
};

export default initialUser;
