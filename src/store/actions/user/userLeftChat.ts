import { Dispatch } from 'redux';
import { IChat } from '../../interfaces/IChat';
import { USERLEFTCHAT } from './actionTypes';

const userLeftChat = (chat: IChat) => async (dispatch: Dispatch) => {
	const payload = {
		newChat: chat,
	};

	dispatch({ type: USERLEFTCHAT, payload });
};

export { userLeftChat };
