import { LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';
import * as api from '../../api';
import ILogin from '../../models/login';
import { Dispatch } from 'redux';

const login = (formData: ILogin, router: any) => async (dispatch: Dispatch) => {
	await api
		.login(formData)
		.then((data) => {
			if (data) {
				if (data.status === 200) {
					dispatch({ type: LOGIN_SUCCESS, data });
					router.push('/');
				}
			}
		})
		.catch((data) => {
			console.log(data);
			dispatch({ type: LOGIN_FAILURE, data });
		});
};

export { login };
