import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import '../../assets/scss/Login.scss';
import initialForm from '../../store/initialStates/initialSignUp';
import { signup } from '../../store/actions/user/signup';
import { RootState } from '../../store/reducers';

const Signup = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const signUpError = useSelector((state: RootState) => state.user.error);

	const [form, setForm] = useState(initialForm);
	const [file, setFile] = useState<File>();
	const [passwordsMatch, setPasswordsMatch] = useState(true);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const data = new FormData(); /**Had to use FormData type for image transfer */
		if (form.password !== form.repeatedpassword) {
			setPasswordsMatch(false);
			return;
		} else {
			if (file) {
				data.append('email', form.email);
				data.append('username', form.username);
				data.append('password', form.password);
				data.append('repeatedpassword', form.repeatedpassword);
				data.append('profilepic', file);
				dispatch(signup(data, history));
			} else {
				dispatch(signup(form, history));
			}
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
								encType='multipart/form-data'
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
									<label htmlFor='inputEmail'>Email address</label>
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
									<label htmlFor='inputUsername'>Username</label>
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
									<label htmlFor='inputPassword'>Password</label>
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
									<label htmlFor='inputRepeatPassword'>Repeat Password</label>
								</div>

								<div className='form-label-group'>
									<input
										type='file'
										id='profilePicture'
										name='profilePicture'
										className='form-control-file'
										placeholder='Profile Picture'
										onChange={(e) => {
											if (e.target.files) setFile(e.target.files[0]);
										}}
									/>
									<label htmlFor='profilePicture'>Profile Picture</label>
								</div>
								{passwordsMatch ? null : (
									<div className='text-center mb-3'>Passwords must match</div>
								)}
								{signUpError === '' ? null : (
									<div className='text-center mb-3'>{signUpError}</div>
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
