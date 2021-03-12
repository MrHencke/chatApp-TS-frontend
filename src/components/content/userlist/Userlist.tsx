import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../store/actions/app/getAllUsers';
import { RootState } from '../../../store/reducers';
import UserCard from './UserCard';

const Userlist = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllUsers());
	}, [dispatch]);

	const users = useSelector((state: RootState) => state.app.users);
	return (
		<div className='container'>
			<div className='row my-5'>
				{users !== null ? (
					users.map((user) => {
						return <UserCard user={user} />;
					})
				) : (
					<p>Hello</p>
				)}
			</div>
		</div>
	);
};

export default Userlist;
