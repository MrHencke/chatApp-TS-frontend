import React, { FormEvent } from 'react';
import { IContact } from '../../../store/interfaces/IContact';
import '../../../assets/scss/Contact.scss';
import { RootState } from '../../../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../../store/actions/user/addContact';

const UserCard: React.FC<Props> = ({ user }) => {
	const dispatch = useDispatch();
	const self = useSelector((state: RootState) => state.user);
	const formData = {contactID: user._id};
	const handleAddContact = (e: FormEvent): void => {
		e.preventDefault();
		dispatch(addContact(formData));
	};

	return (
		<>
			{user._id === self.profile.id /* TODO remove users contacts */ ? null : (
				<div className='col-sg mx-4 my-5'>
					<div className='card rounded-lg'>
						<div className='card-body text-center bg-dark text-white'>
							<h5 className='card-title'>{user.username}</h5>
							<p className='card-text'></p>
							<form onSubmit={handleAddContact}>
								<button className='btn btn-primary' type='submit'>
									Add contact
								</button>
							</form>
							<hr />
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
