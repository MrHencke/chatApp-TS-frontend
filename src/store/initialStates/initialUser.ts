import { IProfile, themes } from '../interfaces/IProfile';
import { IUser } from '../interfaces/IUser';

const initialProfile: IProfile = {
	id: '',
	email: '',
	username: '',
	profilepicture: '',
	themePreference: themes.LIGHT,
};

const initialUser: IUser = {
	profile: initialProfile,
	contacts: null,
	chats: null,
	isLoggedIn: false,
	token: '',
	loading: false,
	error: '',
};

export default initialUser;
