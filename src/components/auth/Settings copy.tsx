import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import initialNameChange from '../../store/initialStates/InitialNameChange';
import { nameChange } from '../../store/actions/user/nameChange';
import { useHistory } from 'react-router';

const Settings = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const error = useSelector((state: RootState) => state.user.error);

	const [form, setForm] = useState(initialNameChange);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		dispatch(nameChange(form, history));
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
							<p>Currently the only supported action is changing your username.</p>
							<hr></hr>
							<h5 className='card-title text-center'>Change username</h5>
							<form className='form-signin' onSubmit={handleSubmit}>
								<div className='form-label-group'>
									<input
										type='text'
										id='inputNewUsername'
										className='form-control'
										name='newUsername'
										placeholder='New Username'
										required
										autoFocus
										onChange={handleChange}
										autoComplete='off'
									/>
									<label htmlFor='inputUsername'>New Username</label>
								</div>

								<div className='form-label-group'>
									<input
										type='password'
										id='inputConfirmPassword'
										className='form-control'
										name='confirmPassword'
										placeholder='Password'
										required
										onChange={handleChange}
										autoComplete='off'
									/>
									<label htmlFor='inputPassword'>Password</label>
								</div>

								{error === '' ? null : (
									<div className='text-center mb-3'>{error}</div>
								)}
								<button
									className='btn btn-lg btn-primary btn-block text-uppercase'
									type='submit'
								>
									Confirm change
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Settings;
