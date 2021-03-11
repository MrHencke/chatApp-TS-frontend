import React from 'react';
import ContactCard from './ContactCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import contactsDummies from '../../../testing/mockContacts';

const Contacts = () => {
	const contacts = useSelector(
		(state: RootState) => state.user.profile.contacts
	);

	return (
		<div className='container'>
			<div className='row my-5'>
				{contactsDummies.map((contact) => {
					return <ContactCard contact={contact} />; //contact={contact} pass contacts in as props later
				})}
			</div>
		</div>
	);
};

export default Contacts;
