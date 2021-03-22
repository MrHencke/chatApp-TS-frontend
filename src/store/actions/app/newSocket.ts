import { NEWSOCKET } from './actionTypes';
import { Dispatch } from 'redux';
import { io, Socket } from 'socket.io-client';
import config from '../../../config';
import { store } from '../../../index';

const newSocket = (history: any) => async (dispatch: Dispatch) => {
	const payload = {
		data: {
			socket: socketInit(),
		},
	};
	dispatch({ type: NEWSOCKET, payload });
	history.push('/');
};

export { newSocket };

const socketInit = (): Socket => {
	const socket = io(`${config.HTTPS}${config.BACKENDURL}`, {
		path: config.SOCKETROUTE,
		auth: {
			token: store.getState().user.token,
		},
		autoConnect: false,
	});
	socket.connect();

	return socket;
};
