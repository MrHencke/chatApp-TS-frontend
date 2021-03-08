import { LOGOUT } from './actionTypes';
import { Dispatch } from 'redux';

const logout = (router: any) => async (dispatch: Dispatch) => {
	try {
		dispatch({ type: LOGOUT });
		localStorage.clear();
		router.push('/');
	} catch (error) {
		console.log(error);
	}
};

export { logout };
