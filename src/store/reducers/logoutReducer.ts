import { LOGOUT } from '../actions/logout/actionTypes';
import { signupAction } from '../models/signup';

const authReducer = (state = { authData: null }, action: signupAction) => {
	switch (action.type) {
		case LOGOUT:
			localStorage.clear();

			return { ...state, authData: null, loading: false, errors: null };

		default:
			return state;
	}
};

export default authReducer;
