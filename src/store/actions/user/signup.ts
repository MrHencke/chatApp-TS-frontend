import { SIGNUP_SUCCESS, SIGNUP_FAILURE } from './actionTypes';
import * as api from '../../api';
import { Dispatch } from 'redux';
import ISignup from '../../interfaces/ISignup';

const signup = (formData: ISignup | FormData, router: any) => async (dispatch: Dispatch) => {
	await api
		.signup(formData)
		.then((data) => {
			if (data) {
				if (data.status === 201) {
					dispatch({ type: SIGNUP_SUCCESS, payload: data });
					router.push('/response/success');
				}
			}
		})
		.catch((data) => {
			dispatch({ type: SIGNUP_FAILURE, payload: data.response });
		});
};

export { signup };
