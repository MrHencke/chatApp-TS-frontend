import IUser, { themes } from '../../store/models/user';

const initialUser: IUser = {
	_id: '',
	email: '',
	username: '',
	name: '',
	password: '',
	themePreference: themes.LIGHT,
};

export default initialUser;
