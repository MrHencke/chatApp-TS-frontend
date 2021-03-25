import { NAMECHANGE_SUCCESS, NAMECHANGE_FAILURE } from './actionTypes';
import * as api from '../../api';
import { Dispatch } from 'redux';
import IChangeName from '../../interfaces/INameChange';

const nameChange = (formData: IChangeName, router: any) => async (dispatch: Dispatch) => {
	await api
		.nameChange(formData)
		.then((data) => {
			if (data) {
				if (data.status === 200) {
					dispatch({ type: NAMECHANGE_SUCCESS, payload: data });
					router.push('/');
				}
			}
		})
		.catch((data) => {
			dispatch({ type: NAMECHANGE_FAILURE, payload: data.response });
		});
};

export { nameChange };
