import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import logoutReducer from './logoutReducer';
import signupReducer from './signupReducer';

const reducers = combineReducers({
	loginReducer,
	logoutReducer,
	signupReducer,
});

export default reducers;
