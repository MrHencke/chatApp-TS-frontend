import * as api from '../../api';
import { Dispatch } from 'redux';
import { LOGOUTAPP } from '../app/actionTypes';
import { LOGOUT, SETERROR } from './actionTypes';

const deleteAccount = (id: string, password: string, history: any) => async (
	dispatch: Dispatch
) => {
	let requestData = { id, password };
	await api
		.deleteAccount(requestData)
		.then((data) => {
			if (data) {
				if (data.status === 200) {
					dispatch({ type: LOGOUT });
					localStorage.clear();
					dispatch({ type: LOGOUTAPP });
					history.push('/');
				}
			}
		})
		.catch((data) => {
            dispatch({type: SETERROR, payload: data.response })
		});
};

export { deleteAccount };
