import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/login/actionTypes';
import { loginAction } from '../models/login';
import initialUser from '../initialStates/initialLogin';

const loginReducer = (
	state = { authData: initialUser },
	action: loginAction
) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			localStorage.setItem(
				'profile',
				JSON.stringify({ ...action?.data })
			);
			return {
				...state,
				authData: action.data,
				loading: false,
				errors: null,
			};

		case LOGIN_FAILURE:
			return {
				...state,
				authData: null,
				loading: false,
				errors: action?.data.status,
			};

		default:
			return state;
	}
	console.log(state);
};

export default loginReducer;
