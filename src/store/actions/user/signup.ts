import { SIGNUP_SUCCESS, SIGNUP_FAILURE } from './actionTypes';
import * as api from '../../api';
import ISignup from '../../interfaces/ISignup';
import { Dispatch } from 'redux';

const signup = (formData: ISignup, router: any) => async (
	dispatch: Dispatch
) => {
	await api
		.signup(formData)
		.then((data) => {
			if (data) {
				if (data.status === 201) {
					dispatch({ type: SIGNUP_SUCCESS, payload: data });
					router.push('/');
				}
			}
		})
		.catch((data) => {
			dispatch({ type: SIGNUP_FAILURE, payload: data.response });
		});
};

export { signup };
