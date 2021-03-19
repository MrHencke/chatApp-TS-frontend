import { NEWSOCKET } from './actionTypes';
import { Dispatch } from 'redux';
import { io, Socket } from 'socket.io-client';
import socketurl from '../../../socket';
import { store } from '../../../index';

const newSocket = (history: any) => async (dispatch: Dispatch) => {
	const payload = {
		data: {
			socket: socketInit(),
		},
	};
	console.log('Socketinit blir dispatchet');
	dispatch({ type: NEWSOCKET, payload });
	history.push('/');
};

export { newSocket };

const socketInit = (): Socket => {
	const socket = io(socketurl, {
		path: '/socket',
		auth: {
			token: store.getState().user.token,
		},
		autoConnect: false,
	});
	console.log('Socketinit blir connected');
	socket.connect();
	console.log('Socketinit er connected');

	return socket;
};
