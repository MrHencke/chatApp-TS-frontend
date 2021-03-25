import { GETALLUSERS_SUCCESS, GETALLUSERS_FAILURE } from './actionTypes';
import * as api from '../../api';
import { Dispatch } from 'redux';

const getAllUsers = () => async (dispatch: Dispatch) => {
	await api
		.getAllUsers()
		.then((data) => {
			if (data) {
				if (data.status === 200) {
					dispatch({ type: GETALLUSERS_SUCCESS, payload: data });
				}
			}
		})
		.catch((data) => {
			dispatch({ type: GETALLUSERS_FAILURE, payload: data.response });
		});
};

export { getAllUsers };
