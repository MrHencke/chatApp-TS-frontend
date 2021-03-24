import { useSelector } from 'react-redux';
import { IChat } from '../../../../store/interfaces/IChat';
import { RootState } from '../../../../store/reducers';
import ProfilePicture from '../../cards/ProfilePicture';

interface Props {
	member: {
		_id: string;
		username: string;
		profilepicture: string;
	};
	chat: IChat;
}

const MemberElement = ({ member, chat }: Props) => {
	const user = useSelector((state: RootState) => state.user);
	const socket = useSelector((state: RootState) => state.app.socket);

	const handleRemoval = () => {
		let chatID = chat._id;
		let userID = member._id;
		let data = { userID, chatID };
		if (socket) socket.emit('removeMember', data);
	};
	return (
		<div className='media w-100 mb-3'>
			<ProfilePicture
				profilepicture={member.profilepicture}
				id={member._id}
				width='50'
				height='50'
			/>
			<div className='media-body ml-3'>
				<div className='bg-light rounded py-2 px-3 mb-2 text-break'>{member.username}</div>
			</div>
			{chat.owner === user.profile.id ? (
				<div>
					{member._id !== user.profile.id ? (
						<button className='btn btn-danger' onClick={handleRemoval}>
							Remove
						</button>
					) : null}
				</div>
			) : null}
		</div>
	);
};

export default MemberElement;
