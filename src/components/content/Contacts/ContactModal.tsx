import React, { FunctionComponent } from 'react';
import { IContact } from '../../../store/interfaces/IContact';

const ContactModal: React.FunctionComponent<Props> = ({ contact }) => {
	return (
		<div className='contactCard'>
			<p>{contact.username}</p>
		</div>
	);
};

export default ContactModal;

interface Props {
	contact: IContact;
}
