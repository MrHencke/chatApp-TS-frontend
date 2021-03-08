import { combineReducers } from 'redux';
import user from './userReducer';
import { RootState } from './state';

const RootReducer = combineReducers({
	user,
});

export type { RootState };
export { RootReducer };
