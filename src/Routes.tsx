import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Signup from './components/auth/Signup';
import Content from './components/content/Content';
import NotFound from './components/ui/NotFound';
import ResponsePage from './components/ui/ResponsePage';
import Unauthorized from './components/ui/Unauthorized';
import { continuedSession } from './store/actions/user/continuedSession';

const Routes = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	useEffect(() => {
		const profile = localStorage.getItem('profile');
		if (profile && profile !== undefined && profile !== 'undefined') {
			dispatch(continuedSession(history));
		}
	});
	return (
		<Switch>
			<Route exact path='/' component={Content} />
			<Route exact path='/settings' component={Content} />
			<Route exact path='/chats' component={Content} />
			<Route exact path='/chats/:id' component={Content} />
			<Route exact path='/contacts' component={Content} />
			<Route exact path='/userlist' component={Content} />
			<Route exact path='/notoken' component={Unauthorized} />
			<Route exact path='/login' component={Login} />
			<Route exact path='/signup' component={Signup} />
			<Route exact path={'/response/:status'} component={ResponsePage} />
			<Route exact path={'/response/:status/:type'} component={ResponsePage} />
			<Route exact path='/logout' component={Logout} />
			<Route path='*' component={NotFound} />
		</Switch>
	);
};

export default Routes;
