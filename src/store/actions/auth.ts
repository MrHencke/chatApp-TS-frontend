import { AUTH } from './actionTypes/actionTypes';
import * as api from '../api';
import ILogin from '../models/login';
import ISignup from '../models/signup';
import { Dispatch } from 'redux';
import { Router } from 'react-router-dom';

const login = (formData: ILogin, router: any) => async (dispatch: Dispatch) => {
	try {
		const { data } = await api.login(formData);

		dispatch({ type: AUTH, data });

		router.push('/');
	} catch (error) {
		console.log(error);
	}
};

const signup = (formData: ISignup, router: any) => async (
	dispatch: Dispatch
) => {
	try {
		const { data } = await api.signup(formData);

		dispatch({ type: AUTH, data });

		router.push('/');
	} catch (error) {
		console.log(error);
	}
};

export { login, signup };
