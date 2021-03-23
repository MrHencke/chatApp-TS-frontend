import React, { FormEvent } from 'react';
import { IContact } from '../../../../store/interfaces/IContact';
import { removeContact } from '../../../../store/actions/user/removeContact';
import { useDispatch } from 'react-redux';
import ProfilePicture from '../ProfilePicture';
import '../../../../assets/scss/ContactCard.scss';

const ContactCard: React.FC<Props> = ({ contact }) => {
	const dispatch = useDispatch();
	const formData = { contactID: contact._id };
	const handleRemoveContact = (e: FormEvent): void => {
		e.preventDefault();
		dispatch(removeContact(formData));
	};

	return (
		<div className='col-xl-3 col-lg-4 col-md-5 col-sm-12 col-xs-12'>
			<div className='card card-contact my-5 mx-auto' id='roundedCard'>
				<div className='card-body text-center'>
					<div className='my-2'>
						<ProfilePicture profilepicture={contact.profilepicture} id={contact._id} />
					</div>
					<h5 className='card-title'>{contact.username}</h5>
					<hr />
					<form onSubmit={handleRemoveContact}>
						<button className='btn btn-primary' type='submit'>
							Remove contact
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactCard;

interface Props {
	contact: IContact;
}
