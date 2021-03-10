import React from 'react';
import ContactModal from './ContactModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import { IContact } from '../../../store/interfaces/IContact';

const Contacts = () => {
	const contacts = useSelector(
		(state: RootState) => state.user.profile.contacts
	);

	const contactsDummies = dummies;
	return (
		<div className='contactContainer'>
			{contactsDummies.map((contact) => {
				<ContactModal contact={contact} />; //contact={contact} pass contacts in as props later
			})}
		</div>
	);
};

export default Contacts;

const dummies: IContact[] = [
	{
		username: 'Nils Pils',
		id: '123123',
	},

	{
		username: 'Nils Pils',
		id: '123321',
	},

	{
		username: 'Nils Pils',
		id: '321123',
	},

	{
		username: 'Nils Pils',
		id: '132123',
	},

	{
		username: 'Nils Pils',
		id: '112323',
	},

	{
		username: 'Nils Pils',
		id: '111113',
	},
];
