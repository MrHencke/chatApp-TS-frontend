import {
	GETALLUSERS_SUCCESS,
	GETALLUSERS_FAILURE,
	NEWSOCKET,
	CHANGECURRENTCHAT,
	SOCKETDISCONNECT,
	SETONLINEUSERS,
	LOGOUTAPP,
} from '../actions/app/actionTypes';
import { Reducer } from 'redux';
import { IApp } from '../interfaces/IApp';
import initialApp from '../initialStates/initialApp';
import { appAction } from '../interfaces/actionInterfaces/appAction';

const appReducer: Reducer<IApp, appAction> = (state = initialApp, action: appAction) => {
	switch (action.type) {
		case GETALLUSERS_SUCCESS:
			return {
				...state,
				users: action.payload.data.users,
			};

		case GETALLUSERS_FAILURE:
			return {
				...state,
			};

		case NEWSOCKET:
			return {
				...state,
				socket: action.payload.data.socket,
			};

		case SOCKETDISCONNECT:
			return {
				...state,
				socket: action.payload.data.socket,
			};

		case CHANGECURRENTCHAT:
			return {
				...state,
				currentChat: action.payload.data.currentChat,
			};

		case SETONLINEUSERS:
			return {
				...state,
				onlineUsers: action.payload.data.onlineUsers,
			};

		case LOGOUTAPP:
			return {
				...initialApp,
			};
		default:
			return state;
	}
};

export default appReducer;
