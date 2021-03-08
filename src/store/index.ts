import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootReducer, RootState } from './reducers';
import logger from 'redux-logger';

export function configureStore(initialState?: RootState): Store<RootState> {
	let middleware = applyMiddleware(thunk, logger);

	if (process.env.NODE_ENV !== 'production') {
		middleware = composeWithDevTools(middleware);
	}

	const store = createStore(
		RootReducer as any,
		initialState as any,
		middleware
	) as Store<RootState>;

	return store;
}

//const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default configureStore;
