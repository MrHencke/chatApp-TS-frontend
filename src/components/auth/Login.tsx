import React, { FormEvent, useState } from 'react';
import '../../assets/scss/Login.scss';
import initialForm from '../../store/initialStates/initialLogin';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/login/login';

const Login = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const [form, setForm] = useState(initialForm);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		console.log(form);
		dispatch(login(form, history));
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e?.target?.name || !e?.target?.value) {
			return;
		} else {
			setForm({ ...form, [e.target.name]: e.target.value });
		}
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
					<div className="card card-signin my-5" id="roundedCard">
						<div className="card-body">
							<h5 className="card-title text-center">Sign In</h5>
							<form
								className="form-signin"
								onSubmit={handleSubmit}
							>
								<div className="form-label-group">
									<input
										type="email"
										id="inputEmail"
										className="form-control"
										name="email"
										placeholder="Email address"
										required
										autoFocus
										onChange={handleChange}
									/>
									<label htmlFor="inputEmail">
										Email address
									</label>
								</div>

								<div className="form-label-group">
									<input
										type="password"
										id="inputPassword"
										className="form-control"
										name="password"
										placeholder="Password"
										required
										onChange={handleChange}
									/>
									<label htmlFor="inputPassword">
										Password
									</label>
								</div>

								<div className="custom-control custom-checkbox mb-3">
									<input
										type="checkbox"
										className="custom-control-input"
										id="customCheck1"
									/>
								</div>
								<button
									className="btn btn-lg btn-primary btn-block text-uppercase"
									type="submit"
								>
									Sign in
								</button>
								<div className="text-center mt-4 mb-1">
									<Link to="/signup">Not signed up yet?</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
