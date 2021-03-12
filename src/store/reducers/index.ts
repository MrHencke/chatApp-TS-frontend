import { combineReducers } from 'redux';
import user from './userReducer';
import app from './appReducer';
import { RootState } from './state';

const RootReducer = combineReducers({
	user,
	app,
});

export type { RootState };
export { RootReducer };
