import React, { FormEvent } from 'react';
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
		<div
			className='col-sg mx-4 my-5 w-25'
			style={{
				borderRadius: '30px',
				backgroundColor: '#ffffff',
				boxShadow: '0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1)',
			}}
		>
			<div className='card rounded-lg '>
				<div className='card-body text-center bg-light'>
					<img
						className=''
						width='100'
						height='100'
						src={contact.profilepicture}
						alt=''
					/>
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
