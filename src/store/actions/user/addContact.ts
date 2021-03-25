import { ADDCONTACT_SUCCESS, ADDCONTACT_FAILURE } from './actionTypes';
import * as api from '../../api';
import { Dispatch } from 'redux';

const addContact = (formData: {contactID: string}) => async (dispatch: Dispatch) => {
	await api
		.addContact(formData)
		.then((data) => {
			if (data) {
				if (data.status === 200) {
					dispatch({ type: ADDCONTACT_SUCCESS, payload: data });
				}
			}
		})
		.catch((data) => {
			dispatch({ type: ADDCONTACT_FAILURE, payload: data.response });
		});
};

export { addContact };
