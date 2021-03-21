import { Dispatch } from 'redux';
import { NEWCHATNAME } from './actionTypes';

const newChatName = (data: newChatNameData) => async (dispatch: Dispatch) => {
	const payload = {
		newChatName: data,
	};

	dispatch({ type: NEWCHATNAME, payload });
};

export { newChatName };

export interface newChatNameData {
	chatName: string;
	chatID: string;
}
