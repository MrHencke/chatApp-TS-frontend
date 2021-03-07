import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import '../../assets/scss/Header.scss';
import initialUser from '../../util/initialStates/intialUser';
//@ts-ignore
import AccountCircleIcon from '@material-ui/icons/AccountCircle'; // TODO: Swap to a profile picture of user later
const Header = () => {
	//const dispatch = useDispatch();
	const [user, setUser] = useState(initialUser);

	const logOut = (): void => {
		//dispatch({ type: actionType.LOGOUT})
		//delete JWT from localstorage
		setUser(initialUser);
	};

	const userLoggedIn = (): boolean => {
		return user.name !== '';
	};
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
				<Link className="navbar-brand mx-3" to="/">
					<img
						src={logo}
						width="40"
						height="40"
						className="d-inline-block my-1"
						alt=""
					></img>
					<span className="mx-3 mt-5">The Chat App</span>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse me-auto"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav me-auto">
						<li className="nav-item">
							<Link
								className={`nav-link ${
									userLoggedIn() ? '' : 'disabled'
								}`}
								to="/chats"
							>
								Chats
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className={`nav-link ${
									userLoggedIn() ? '' : 'disabled'
								}`}
								to="/contacts"
							>
								Contacts
							</Link>
						</li>
					</ul>
					<ul className="d-flex justify-content-end ml-auto navbar-nav mx-3">
						<li className="nav-item dropdown">
							<Link
								className="nav-link dropdown-toggle"
								to="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								{userLoggedIn() ? (
									<>{user.name}</>
								) : (
									<>Welcome </>
								)}{' '}
								<AccountCircleIcon />
							</Link>

							<div
								className="dropdown-menu dropdown-menu-right"
								aria-labelledby="navbarDropdown"
							>
								{userLoggedIn() ? (
									<Link
										className="dropdown-item"
										to="/settings"
									>
										Settings
									</Link>
								) : null}

								<Link className="dropdown-item" to="404">
									TODO
								</Link>
								<div className="dropdown-divider"></div>
								{userLoggedIn() ? (
									<Link
										className="dropdown-item"
										to="/logout"
										onClick={() => logOut()}
									>
										Log Out
									</Link>
								) : (
									<>
										<Link
											className="dropdown-item"
											to="/login"
										>
											Log In
										</Link>
										<Link
											className="dropdown-item"
											to="/signup"
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
