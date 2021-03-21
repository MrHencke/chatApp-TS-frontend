import { Dispatch } from 'redux';
import { TypingData } from '../../interfaces/ITypingData';
import { TYPINGMESSAGE } from './actionTypes';

const typingMessage = (data: TypingData) => async (dispatch: Dispatch) => {
	const payload = {
		typingStatus: data,
	};

	dispatch({ type: TYPINGMESSAGE, payload });
};

export { typingMessage };

