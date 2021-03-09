import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import '../../assets/scss/Login.scss';
import initialForm from '../../store/initialStates/initialSignUp';
import { signup } from '../../store/actions/user/signup';
import { RootState } from '../../store/reducers';

const Signup = () => {
	const history = useHistory();
	const signUpError = useSelector((state: RootState) => state.user.error);

	const dispatch = useDispatch();

	const [form, setForm] = useState(initialForm);
	const [passwordsMatch, setPasswordsMatch] = useState(true);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (form.password !== form.repeatedpassword) {
			setPasswordsMatch(false);
			return;
		} else {
			dispatch(signup(form, history));
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e?.target?.name || !e?.target?.value) {
			return;
		} else {
			setForm({ ...form, [e.target.name]: e.target.value });
		}
	};
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
					<div className='card card-signin my-5' id='roundedCard'>
						<div className='card-body'>
							<h5 className='card-title text-center'>Register</h5>
							<form
								className='form-signin'
								onSubmit={handleSubmit}
							>
								<div className='form-label-group'>
									<input
										type='email'
										id='inputEmail'
										className='form-control'
										name='email'
										placeholder='Email address'
										required
										autoFocus
										onChange={handleChange}
									/>
									<label htmlFor='inputEmail'>
										Email address
									</label>
								</div>

								<div className='form-label-group'>
									<input
										type='text'
										id='inputUsername'
										name='username'
										className='form-control'
										placeholder='Username'
										required
										onChange={handleChange}
										autoComplete='off'
									/>
									<label htmlFor='inputUsername'>
										Username
									</label>
								</div>

								<div className='form-label-group'>
									<input
										type='text'
										id='inputName'
										name='name'
										className='form-control'
										placeholder='Name'
										required
										onChange={handleChange}
										autoComplete='off'
									/>
									<label htmlFor='inputName'>Name</label>
								</div>

								<div className='form-label-group'>
									<input
										type='password'
										id='inputPassword'
										name='password'
										className='form-control'
										placeholder='Password'
										required
										onChange={handleChange}
									/>
									<label htmlFor='inputPassword'>
										Password
									</label>
								</div>

								<div className='form-label-group'>
									<input
										type='password'
										id='inputRepeatPassword'
										name='repeatedpassword'
										className='form-control'
										placeholder='Repeat Password'
										required
										onChange={handleChange}
									/>
									<label htmlFor='inputRepeatPassword'>
										Repeat Password
									</label>
								</div>
								{passwordsMatch ? null : (
									<div className='text-center mb-3'>
										Passwords must match
									</div>
								)}
								{signUpError === '' ? null : (
									<div className='text-center mb-3'>
										{signUpError}
									</div>
								)}

								<button
									className='btn btn-lg btn-primary btn-block text-uppercase'
									type='submit'
								>
									Sign up
								</button>
								<div className='text-center mt-4 mb-1'>
									<Link to='/login'>Already signed up?</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
