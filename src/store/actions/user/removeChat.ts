import { Dispatch } from 'redux';
import { REMOVECHAT } from './actionTypes';

const removeChat = (chatID: string) => async (dispatch: Dispatch) => {
	const payload = {
		removeChat: chatID,
	};

	dispatch({ type: REMOVECHAT, payload });
};

export { removeChat };
