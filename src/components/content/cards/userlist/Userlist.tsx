import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../../store/actions/app/getAllUsers';
import { RootState } from '../../../../store/reducers';
import CenteredCol from '../../Welcome/loggedIn/CenteredCol';
import UserCard from './UserCard';

const Userlist = () => {
	const dispatch = useDispatch();
	const users = useSelector((state: RootState) => state.app.users);

	const timeOutFunction = () => {
		dispatch(getAllUsers());
		setTimeout(timeOutFunction, 60000);
	};
	//TODO Update method of fetching users and displaying users
	useEffect(() => {
		if (users === null) {
			dispatch(getAllUsers());
			setTimeout(timeOutFunction, 60000);
		}
	});

	return (
		<div className='container my-auto'>
			<div className='row my-auto'>
				{users !== null ? (
					users.map((user) => {
						return <UserCard user={user} />;
					})
				) : (
					<>
						<CenteredCol>
							It seems you have added all existing users as contacts.
							<br />
							<br />
							Go chat with them in the Chats tab.
						</CenteredCol>
					</>
				)}
			</div>
		</div>
	);
};

export default Userlist;
