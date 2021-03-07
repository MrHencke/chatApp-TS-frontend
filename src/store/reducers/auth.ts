import * as actionType from '../actions/actionTypes/actionTypes';
import { SignupAction } from '../models/signup';

const authReducer = (state = { authData: null }, action: SignupAction) => {
	switch (action.type) {
		case actionType.AUTH:
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
		case actionType.LOGOUT:
			localStorage.clear();

			return { ...state, authData: null, loading: false, errors: null };
		default:
			return state;
	}
};

export default authReducer;
