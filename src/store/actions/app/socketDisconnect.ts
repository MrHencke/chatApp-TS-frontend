import { Dispatch } from 'redux';
import { SOCKETDISCONNECT } from './actionTypes';
import { store } from '../../../index';

const socketDisconnect = () => async (dispatch: Dispatch) => {
	const payload = {
		data: {
			socket: null,
		},
	};
	disconnectSocket();
	dispatch({ type: SOCKETDISCONNECT, payload });
};

export { socketDisconnect };

const disconnectSocket = () => {
	store.getState().app.socket?.disconnect();
};
