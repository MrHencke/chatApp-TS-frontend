import {
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	SIGNUP_SUCCESS,
	SIGNUP_FAILURE,
	LOGOUT,
} from '../actions/user/actionTypes';
import { userAction } from '../models/userAction';
import initialUser from '../initialStates/initialUser';
import { Reducer } from 'redux';
import { IUser } from '../models/user';

const userReducer: Reducer<IUser, userAction> = (
	state = initialUser,
	action: userAction
) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			localStorage.setItem(
				'profile',
				JSON.stringify(action.payload.data.token)
			);
			return {
				...state,
				profile: action.payload.data.profile,
				isLoggedIn: true,
				token: action.payload.data.token,
				loading: false,
				error: '',
			};

		case LOGIN_FAILURE:
			return {
				...initialUser,
				error: action.payload.data.message!,
			};

		case SIGNUP_SUCCESS:
			localStorage.setItem(
				'profile',
				JSON.stringify(action.payload.data.token)
			);

			return {
				...state,
				profile: action.payload.data.profile,
				token: action.payload.data.token,
				loading: false,
				error: '',
			};

		case SIGNUP_FAILURE:
			return {
				...initialUser,
				error: action.payload.data.message!,
			};

		case LOGOUT:
			return { ...initialUser };

		default:
			return state;
	}
};

export default userReducer;
