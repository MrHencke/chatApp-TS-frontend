import { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/reducers';
import { useHistory } from 'react-router';
import { deleteAccount } from '../../../../store/actions/user/deleteAccount';

const DeleteUser = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const user = useSelector((state: RootState) => state.user);
	const error = user.error;
	const id = user.profile.id;

	const [password, setPassword] = useState('');

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		dispatch(deleteAccount(id, password, history));

		setPassword('');
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e?.target?.name || !e?.target?.value) {
			return;
		} else {
			setPassword(e.target.value);
		}
	};

	return (
		<>
			<h5 className='card-title text-center'>Delete Account</h5>
			<form className='form-signin' onSubmit={handleSubmit}>
				<div className='form-label-group'>
					<input
						type='password'
						id='password'
						className='form-control'
						name='password'
						placeholder='Password'
						required
						onChange={handleChange}
						autoComplete='off'
					/>
					<label htmlFor='password'>Password</label>
				</div>

				{error === '' ? null : <div className='text-center mb-3'>{error}</div>}
				<button
					className='btn btn-lg btn-primary btn-block text-uppercase'
					type='submit'
					disabled={password === ''}
				>
					Confirm deletion
				</button>
			</form>
		</>
	);
};

export default DeleteUser;
