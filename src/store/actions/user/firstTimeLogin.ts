import { FIRSTTIMELOGIN } from './actionTypes';
import { Dispatch } from 'redux';

const firstTimeLogin = () => async (dispatch: Dispatch) => {
	const payload = {
		data: {
			firstTimeLogin: true,
		},
	};

	dispatch({ type: FIRSTTIMELOGIN, payload });
};

export default firstTimeLogin;
