import {
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	SIGNUP_SUCCESS,
	SIGNUP_FAILURE,
	NAMECHANGE_SUCCESS,
	NAMECHANGE_FAILURE,
	LOGOUT,
	ADDCONTACT_SUCCESS,
	ADDCONTACT_FAILURE,
	REMOVECONTACT_SUCCESS,
	REMOVECONTACT_FAILURE,
} from '../actions/user/actionTypes';
import { userAction } from '../interfaces/actionInterfaces/userAction';
import initialUser from '../initialStates/initialUser';
import { Reducer } from 'redux';
import { IUser } from '../interfaces/IUser';

const userReducer: Reducer<IUser, userAction> = (state = initialUser, action: userAction) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			localStorage.setItem('profile', JSON.stringify(action.payload.data.token));
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
			localStorage.setItem('profile', JSON.stringify(action.payload.data.token));

			return {
				...state,
				profile: action.payload.data.profile,
				isLoggedIn: true,
				token: action.payload.data.token,
				loading: false,
				error: '',
			};

		case SIGNUP_FAILURE:
			return {
				...initialUser,
				error: action.payload.data.message!,
			};

		case NAMECHANGE_SUCCESS:
			localStorage.setItem('profile', JSON.stringify(action.payload.data.token));
			return {
				...state,
				profile: action.payload.data.profile,
				isLoggedIn: true,
				token: action.payload.data.token,
				loading: false,
				error: '',
			};

		case NAMECHANGE_FAILURE:
			return {
				...state,
				error: action.payload.data.message!,
			};

		case ADDCONTACT_SUCCESS:
			return {
				...state,
				profile: action.payload.data.profile,
			};
		case ADDCONTACT_FAILURE:
			return {
				...state,
				error: action.payload.data.message!,
			};
		case REMOVECONTACT_SUCCESS:
			return {
				...state,
				profile: action.payload.data.profile,
			};
		case REMOVECONTACT_FAILURE:
			return {
				...state,
				error: action.payload.data.message!,
			};

		case LOGOUT:
			return { ...initialUser };

		default:
			return state;
	}
};

export default userReducer;
