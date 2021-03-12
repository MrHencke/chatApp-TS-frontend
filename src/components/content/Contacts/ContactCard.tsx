import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { IContact } from '../../../store/interfaces/IContact';
import '../../../assets/scss/Contact.scss';
import { removeContact } from '../../../store/actions/user/removeContact';
import { useDispatch } from 'react-redux';

const ContactCard: React.FC<Props> = ({ contact }) => {
	const dispatch = useDispatch();
	const formData = { contactID: contact._id };
	const handleRemoveContact = (e: FormEvent): void => {
		e.preventDefault();
		dispatch(removeContact(formData));
	};

	return (
		<div className='col-sg mx-4 my-5'>
			<div className='card rounded-lg'>
				<img className='card-img-top' src={contact.picture} alt='' />
				<div className='card-body text-center bg-dark text-white'>
					<h5 className='card-title'>{contact.username}</h5>
					<p className='card-text'>Testing</p>
					<Link to={`/chats/${contact._id}`} className='btn btn-primary'>
						Go to chat
					</Link>
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
