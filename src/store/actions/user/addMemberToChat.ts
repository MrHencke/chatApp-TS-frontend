import { Dispatch } from 'redux';
import { Users } from '../../interfaces/IChat';
import { ADDMEMBERTOCHAT } from './actionTypes';

const addMemberToChat = (data: addMemberToChatData) => async (dispatch: Dispatch) => {
	const payload = {
		addMemberToChat: data,
	};

	dispatch({ type: ADDMEMBERTOCHAT, payload });
};

export { addMemberToChat };

export interface addMemberToChatData {
	chatID: string;
	user: Users;
}
