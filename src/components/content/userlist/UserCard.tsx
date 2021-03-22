import React, { FormEvent } from 'react';
import { IContact } from '../../../store/interfaces/IContact';
import '../../../assets/scss/Contact.scss';
import { RootState } from '../../../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../../store/actions/user/addContact';

const UserCard: React.FC<Props> = ({ user }) => {
	const dispatch = useDispatch();
	const self = useSelector((state: RootState) => state.user);
	const formData = { contactID: user._id };
	const handleAddContact = (e: FormEvent): void => {
		e.preventDefault();
		dispatch(addContact(formData));
	};

	return (
		<>
			{user._id === self.profile.id ||
			(self.contacts !== null && self.contacts.some((e) => e._id === user._id)) ? null : (
				<div className='col-sg mx-4 my-5 w-25 '>
					<div
						className='card rounded-lg '
						style={{
							borderRadius: '30px',
							backgroundColor: '#ffffff',
							boxShadow: '0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1)',
						}}
					>
						<div className='card-body text-center bg-light'>
							<img
								className=''
								width='100'
								height='100'
								src={user.profilepicture}
								alt=''
							/>
							<h5 className='card-title'>{user.username}</h5>
							<hr />

							<form onSubmit={handleAddContact}>
								<button className='btn btn-primary' type='submit'>
									Add contact
								</button>
							</form>
							<p>{self.message}</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default UserCard;

interface Props {
	user: IContact;
}
