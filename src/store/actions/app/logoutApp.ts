import { LOGOUTAPP } from './actionTypes';
import { Dispatch } from 'redux';

const logoutApp = () => async (dispatch: Dispatch) => {
	try {
		dispatch({ type: LOGOUTAPP });

	} catch (error) {
		console.log(error);
	}
};

export { logoutApp };