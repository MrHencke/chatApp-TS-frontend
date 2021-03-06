import { themes } from '../store/models/user';

const initialUser = {
	email: '',
	username: '',
	_id: '',
	fName: '',
	lName: '',
	password: '',
	themePreference: themes.LIGHT,
};

export { initialUser };
