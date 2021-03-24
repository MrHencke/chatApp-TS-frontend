import * as api from '../../api';
import { Dispatch } from 'redux';
import { LOGIN_SUCCESS } from './actionTypes';

const continuedSession = (history: any) => async (dispatch: Dispatch) => {
	await api
		.continuedSession()
		.then((data) => {
			if (data) {
				if (data.status === 200) {
					dispatch({ type: LOGIN_SUCCESS, payload: data });
					history.push('/response/success');
				}
			}
		})
		.catch((data) => {
			console.log(data);
		});
};

export { continuedSession };
