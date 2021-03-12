import { GETALLUSERS_SUCCESS, GETALLUSERS_FAILURE } from '../actions/app/actionTypes';
import { Reducer } from 'redux';
import { IApp } from '../interfaces/IApp';
import { appAction } from '../interfaces/actionInterfaces/appAction';

const appReducer: Reducer<IApp, appAction> = (state = { users: null }, action: appAction) => {
	switch (action.type) {
		case GETALLUSERS_SUCCESS:
			return {
				users: action.payload.data.users,
			};

		case GETALLUSERS_FAILURE:
			return {
				...state,
			};
		default:
			return state;
	}
};

export default appReducer;
