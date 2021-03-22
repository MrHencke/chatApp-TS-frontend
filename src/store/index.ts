import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootReducer, RootState } from './reducers';
import logger from 'redux-logger';

export function configureStore(initialState?: RootState): Store<RootState> {
	let middleware;

	if (process.env.NODE_ENV === 'development') {
		middleware = applyMiddleware(thunk, logger);
		middleware = composeWithDevTools(middleware);
	} else {
		middleware = applyMiddleware(thunk);
	}

	const store = createStore(
		RootReducer as any,
		initialState as any,
		middleware
	) as Store<RootState>;

	return store;
}

export default configureStore;
