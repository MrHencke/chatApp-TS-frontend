import React, { FormEvent } from 'react';
import { IContact } from '../../../../store/interfaces/IContact';
import { RootState } from '../../../../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../../../store/actions/user/addContact';
import ProfilePicture from '../ProfilePicture';

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
				<div className='col-sg mx-4 my-5 w-25'>
					<div className='card card-signin my-5' id='roundedCard'>
						<div className='card-body text-center'>
							<div className='my-2'>
								<ProfilePicture
									profilepicture={user.profilepicture}
									id={user._id}
								/>
							</div>
							<h5 className='card-title'>{user.username}</h5>
							<hr />
							<form onSubmit={handleAddContact}>
								<button className='btn btn-primary' type='submit'>
									Add contact
								</button>
							</form>
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
