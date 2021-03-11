import React from 'react';
import { Link } from 'react-router-dom';
import { IContact } from '../../../store/interfaces/IContact';
import '../../../assets/scss/Contact.scss';

const ContactCard: React.FC<Props> = ({ contact }) => {
	return (
		<div className='col-sg mx-4 my-5'>
			<div className='card rounded-lg'>
				<img className='card-img-top' src={contact.picture} alt='' />
				<div className='card-body text-center bg-dark text-white'>
					<h5 className='card-title'>{contact.username}</h5>
					<p className='card-text'>Testing</p>
					<Link
						to={`/chats/${contact.id}`}
						className='btn btn-primary'
					>
						Go to chat
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ContactCard;

interface Props {
	contact: IContact;
}
