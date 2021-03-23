import { Dispatch } from 'redux';
import { SETONLINEUSERS } from './actionTypes';

const setOnlineUsers = (data: string[]) => async (dispatch: Dispatch) => {
	const payload = {
		data: {
			onlineUsers: data,
		},
	};
	dispatch({ type: SETONLINEUSERS, payload });
};

export { setOnlineUsers };
