import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import logo from '../../assets/img/logo.png';
import '../../assets/scss/Header.scss';
import { logout } from '../../store/actions/user/logout';

import { RootState } from '../../store/reducers';
import { socketDisconnect } from '../../store/actions/app/socketDisconnect';

const Header = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const user = useSelector((state: RootState) => state.user);

	const logOut = (): void => {
		dispatch(logout(history));
		dispatch(socketDisconnect());
	};

	return (
		<div>
			<nav
				className='navbar navbar-expand-lg navbar-light mt-2 mx-2'
				style={{
					borderRadius: '30px',
					backgroundColor: '#ffffff',
					boxShadow: '0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1)',
				}}
			>
				<Link className='navbar-brand mx-3' to='/'>
					<img
						src={logo}
						width='40'
						height='40'
						className='d-inline-block my-1'
						style={{ borderRadius: '100%' }}
						alt=''
					></img>
					<span className='ml-3 mr-4 mt-5 text'>The Chat App</span>
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div className='collapse navbar-collapse me-auto' id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto'>
						<li className='nav-item'>
							<Link
								className={`nav-link ${user.isLoggedIn ? '' : 'disabled'}`}
								to='/chats'
							>
								Chats
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								className={`nav-link ${user.isLoggedIn ? '' : 'disabled'}`}
								to='/contacts'
							>
								Contacts
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								className={`nav-link ${user.isLoggedIn ? '' : 'disabled'}`}
								to='/userlist'
							>
								All Users
							</Link>
						</li>
					</ul>
					<ul className='d-flex justify-content-end ml-auto navbar-nav mx-3'>
						{user.isLoggedIn ? (
							<li className='nav-item dropdown'>
								<Link
									className='nav-link dropdown-toggle'
									to='#'
									id='navbarDropdown'
									role='button'
									data-toggle='dropdown'
									aria-haspopup='true'
									aria-expanded='false'
								>
									<>
										<span className='mr-2'>{user.profile.username}</span>
										<img
											src={user.profile.profilepicture}
											width='30'
											height='30'
											alt=''
											style={{ borderRadius: '50%' }}
											className='ml-1'
										/>
									</>
								</Link>

								<div
									className='dropdown-menu dropdown-menu-right mt-3'
									aria-labelledby='navbarDropdown'
								>
									<Link className='dropdown-item' to='/settings'>
										Settings
									</Link>
									<div className='dropdown-divider'></div>

									<Link
										className='dropdown-item'
										to='/logout'
										onClick={() => logOut()}
									>
										Log Out
									</Link>
								</div>
							</li>
						) : (
							<Link
								to='/login'
								className='btn btn-primary'
								style={{ borderRadius: '50px' }}
							>
								Log in
							</Link>
						)}
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Header;
