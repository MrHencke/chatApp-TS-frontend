import { LOGOUT } from './actionTypes';
import { Dispatch } from 'redux';

const logoutUnauthorized = (history: any) => async (dispatch: Dispatch) => {
	try {
		dispatch({ type: LOGOUT });
		localStorage.clear();
		history.push('/notoken');
	} catch (error) {
		console.log(error);
	}
};

export { logoutUnauthorized };
