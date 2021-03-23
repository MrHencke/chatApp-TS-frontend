import { Dispatch } from 'redux';
import { SETLOADING } from './actionTypes';

const setLoading = (type: boolean) => async (dispatch: Dispatch) => {
	const payload = {
		data: {
			loading: type,
		},
	};

	dispatch({ type: SETLOADING, payload });
};

export default setLoading