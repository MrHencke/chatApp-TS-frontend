import { Dispatch } from 'redux';
import { CHANGECURRENTCHAT } from './actionTypes';

const changeCurrentChat = (newChat: string | null) => async (dispatch: Dispatch) => {
	const payload = {
		data: {
			currentChat: newChat,
		},
	};
	dispatch({ type: CHANGECURRENTCHAT, payload });
};

export { changeCurrentChat };
