import { SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions/signup/actionTypes';
import { signupAction } from '../models/signup';

const authReducer = (state = { authData: null }, action: signupAction) => {
	switch (action.type) {
		case SIGNUP_SUCCESS:
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

		case SIGNUP_FAILURE:
			return action?.data;

		default:
			return state;
	}
};

export default authReducer;
