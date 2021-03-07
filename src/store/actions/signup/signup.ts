import { SIGNUP_SUCCESS, SIGNUP_FAILURE } from './actionTypes';
import * as api from '../../api';
import ISignup from '../../models/signup';
import { Dispatch } from 'redux';

const signup = (formData: ISignup, router: any) => async (
	dispatch: Dispatch
) => {
	try {
		const { data } = await api.signup(formData);

		dispatch({ type: SIGNUP_SUCCESS, data });

		router.push('/');
	} catch (error) {
		console.log(error);
	}
};

export { signup };

// TODO Shape file like login feature with error handling
