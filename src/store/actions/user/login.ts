import { LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';
import * as api from '../../api';
import ILogin from '../../interfaces/ILogin';
import { Dispatch } from 'redux';

const login = (formData: ILogin, router: any) => async (dispatch: Dispatch) => {
	await api
		.login(formData)
		.then((data) => {
			if (data) {
				if (data.status === 200) {
					dispatch({ type: LOGIN_SUCCESS, payload: data });
					router.push('/response/success');
				}
			}
		})
		.catch((data) => {
			dispatch({ type: LOGIN_FAILURE, payload: data.response });
		});
};

export { login };
