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
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark '>
				<Link className='navbar-brand mx-3' to='/'>
					<img
						src={logo}
						width='40'
						height='40'
						className='d-inline-block my-1'
						alt=''
					></img>
					<span className='mx-3 mt-5'>The Chat App</span>
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
								{user.isLoggedIn ? (
									<>
										{user.profile.username + '  '}
										<img
											src={user.profile.profilepicture}
											width='30'
											height='30'
											alt=''
											style={{ borderRadius: '50%' }}
										/>
									</>
								) : (
									<>
										{'Welcome '}
										<img
											src='https://res.cloudinary.com/mrhencke/image/upload/v1616254670/profilePictures/NOAVATAR_uwpx2v.jpg'
											width='30'
											height='30'
											alt=''
											style={{ borderRadius: '50%' }}
										/>
									</>
								)}
							</Link>

							<div
								className='dropdown-menu dropdown-menu-right bg-dark'
								id='white-text'
								aria-labelledby='navbarDropdown'
							>
								{user.isLoggedIn ? (
									<Link className='dropdown-item' id='white-text' to='/settings'>
										Settings
									</Link>
								) : null}

								<Link className='dropdown-item' id='white-text' to='404'>
									TODO
								</Link>
								<div className='dropdown-divider'></div>
								{user.isLoggedIn ? (
									<Link
										className='dropdown-item'
										id='white-text'
										to='/logout'
										onClick={() => logOut()}
									>
										Log Out
									</Link>
								) : (
									<>
										<Link className='dropdown-item' id='white-text' to='/login'>
											Log In
										</Link>
										<Link
											className='dropdown-item'
											id='white-text'
											to='/signup'
										>
											Sign Up
										</Link>
									</>
								)}
							</div>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Header;
