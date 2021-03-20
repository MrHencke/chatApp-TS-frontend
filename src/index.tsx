import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.scss';
import 'bootstrap';
import configureStore from './store';

const store = configureStore();
export { store };
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('startTarget')
);
