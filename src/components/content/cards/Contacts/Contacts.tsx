import ContactCard from './ContactCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/reducers';
import React from 'react';
import CenteredCol from '../../Welcome/loggedIn/CenteredCol';

const Contacts = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const contacts = useSelector((state: RootState) => state.user.contacts);

	return (
		<div className='container my-auto'>
			<div className='row my-auto'>
				{contacts !== null && contacts.length > 0 ? (
					<>
						{contacts.map((contact) => {
							return <ContactCard contact={contact} />; //contact={contact} pass contacts in as props later
						})}
					</>
				) : (
					<CenteredCol>
						It seems you have no contacts, add some in the Users tab.
						<br />
						<br />
						Then start a chat in the Chats tab.
					</CenteredCol>
				)}
			</div>
		</div>
	);
};

export default Contacts;
