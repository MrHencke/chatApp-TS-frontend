import { Dispatch } from 'redux';
import { IChat } from '../../interfaces/IChat';
import { NEWCHAT } from './actionTypes';

const newChat = (chat: IChat) => async (dispatch: Dispatch) => {
	const payload = {
		newChat: chat,
	};

	dispatch({ type: NEWCHAT, payload });
};

export { newChat };
