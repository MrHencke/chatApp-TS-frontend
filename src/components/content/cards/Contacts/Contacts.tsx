import ContactCard from './ContactCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/reducers';
import NoContacts from './NoContacts';

const Contacts = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const contacts = useSelector((state: RootState) => state.user.contacts);

	return (
		<>
			{contacts !== null && contacts.length > 0 ? (
				<div className='container my-auto'>
					<div className='row my-auto'>
						{contacts.map((contact) => {
							return <ContactCard contact={contact} />; //contact={contact} pass contacts in as props later
						})}
					</div>
				</div>
			) : (
				<NoContacts />
			)}
		</>
	);
};

export default Contacts;
