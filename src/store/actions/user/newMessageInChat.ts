import { Dispatch } from 'redux';
import IMessage from '../../interfaces/IMessage';
import { NEWMESSAGEINCHAT } from './actionTypes';

const newMessageInChat = (msg: IMessage) => async (dispatch: Dispatch) => {
	const payload = {
		newMessage: msg,
	};

	dispatch({ type: NEWMESSAGEINCHAT, payload });
};

export { newMessageInChat };
