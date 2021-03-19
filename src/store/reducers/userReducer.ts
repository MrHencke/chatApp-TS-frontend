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
	NEWMESSAGEINCHAT,
} from '../actions/user/actionTypes';
import update from 'immutability-helper';
import { userAction } from '../interfaces/actionInterfaces/userAction';
import initialUser from '../initialStates/initialUser';
import { Reducer } from 'redux';
import { IUser } from '../interfaces/IUser';
import { MessageSharp } from '@material-ui/icons';
const userReducer: Reducer<IUser, userAction> = (state = initialUser, action: userAction) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			localStorage.setItem('profile', JSON.stringify(action.payload.data.token));
			return {
				...state,
				profile: action.payload.data.profile,
				chats: action.payload.data.chats,
				contacts: action.payload.data.contacts,
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
				chats: action.payload.data.chats,
				contacts: action.payload.data.contacts,
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
				contacts: action.payload.data.contacts,
			};
		case ADDCONTACT_FAILURE:
			return {
				...state,
				error: action.payload.data.message!,
			};
		case REMOVECONTACT_SUCCESS:
			return {
				...state,
				contacts: action.payload.data.contacts,
			};
		case REMOVECONTACT_FAILURE:
			return {
				...state,
				error: action.payload.data.message!,
			};

		case LOGOUT:
			return { ...initialUser };

		case NEWMESSAGEINCHAT:
			let chatList = state.chats?.slice();
			let indexOfChat: any = chatList?.findIndex(
				(chat) => chat._id === action.payload.newMessage?.chat_id
			);
			state.chats![indexOfChat].messages.push(action.payload.newMessage!);
			return {
				...state,
				//chats: state.chats,
			};

		default:
			return state;
	}
};

export default userReducer;

/* 

case NEWMESSAGEINCHAT:
			const indexOfChat = state.profile.chats?.findIndex(
				(chat) => chat._id === action.payload.message!._id
			) as number;

			if (indexOfChat === undefined) {
				return {
					...state,
				};
			} else {
				const messagesLength = state.profile.chats![indexOfChat].messages.length;
				return {
					...state,
					profile: {
						...state.profile,
						chats: {
							...state.profile.chats,
							[indexOfChat]: {
								messages: {
									...state.profile.chats![indexOfChat].messages,
									[messagesLength]: action.payload.message,
								},
							},
						},
					},
				};
			}

*/
