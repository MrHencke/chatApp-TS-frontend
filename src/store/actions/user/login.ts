import { LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';
import * as api from '../../api';
import ILogin from '../../interfaces/ILogin';
import { Dispatch } from 'redux';

const login = (formData: ILogin, router: any) => async (dispatch: Dispatch) => {
	console.log(formData);
	await api
		.login(formData)
		.then((data) => {
			console.log(data);
			if (data) {
				if (data.status === 200) {
					dispatch({ type: LOGIN_SUCCESS, payload: data });
					router.push('/');
				}
			}
		})
		.catch((data) => {
			dispatch({ type: LOGIN_FAILURE, payload: data.response });
		});
};

export { login };
