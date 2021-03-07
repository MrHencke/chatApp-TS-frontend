import { createStore, applyMiddleware, compose, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import logger from 'redux-logger';

export function configureStore(initialState?: any): Store {
	let middleware = applyMiddleware(thunk, logger);

	if (process.env.NODE_ENV !== 'production') {
		middleware = composeWithDevTools(middleware);
	}

	const store = createStore(
		reducers as any,
		initialState as any,
		middleware
	) as Store;

	return store;
}

//const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default configureStore;
