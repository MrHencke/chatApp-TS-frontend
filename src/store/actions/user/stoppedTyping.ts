import { Dispatch } from 'redux';
import { TypingData } from '../../interfaces/ITypingData';
import { STOPPEDTYPING } from './actionTypes';

const stoppedTyping = (data: TypingData) => async (dispatch: Dispatch) => {
	const payload = {
		typingStatus: data,
	};

	dispatch({ type: STOPPEDTYPING, payload });
};

export { stoppedTyping };
