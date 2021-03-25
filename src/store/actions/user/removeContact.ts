import { REMOVECONTACT_SUCCESS, REMOVECONTACT_FAILURE } from './actionTypes';
import * as api from '../../api';
import { Dispatch } from 'redux';

const removeContact = (formData: { contactID: string }) => async (dispatch: Dispatch) => {
	await api
		.removeContact(formData)
		.then((data) => {
			if (data) {
				if (data.status === 200) {
					dispatch({ type: REMOVECONTACT_SUCCESS, payload: data });
				}
			}
		})
		.catch((data) => {
			dispatch({ type: REMOVECONTACT_FAILURE, payload: data.response });
		});
};

export { removeContact };
