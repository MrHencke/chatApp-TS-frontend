import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

//const store = createStore(reducers, compose(applyMiddleware(thunk)));

//export default store;
