import { Dispatch } from 'redux';
import IMessage from '../../interfaces/IMessage';
import { NEWMESSAGEINCHAT } from './actionTypes';

const newMessageInChat = (msg: IMessage) => async (dispatch: Dispatch) => {
	payload: {
		data: {
			user: {
				profile: {
					chats: [
						{
							_id: msg.chat_id,
							messages: [msg],
						},
					];
				}
			}
		}
	}

	//dispatch({type: NEWMESSAGEINCHAT, payload});
};

export { newMessageInChat };
