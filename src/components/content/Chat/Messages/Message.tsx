import { Users } from '../../../../store/interfaces/IChat';
import IMessage from '../../../../store/interfaces/IMessage';
import ReceivedMessage from './types/SentMessage';
import SentMessage from './types/ReceivedMessage';

interface Props {
	userID: string;
	message: IMessage;
	chatusers: Users[];
}
const userThatLeft = {
	_id: '0',
	username: 'User left',
	profilepicture:
		'https://res.cloudinary.com/mrhencke/image/upload/w_512,h_512,c_thumb,g_face,r_max/v1616254670/profilePictures/NOAVATAR_uwpx2v.jpg',
};
const Message = ({ userID, message, chatusers }: Props) => {
	let user = chatusers.find((user) => user._id === message.from_id);
	if (user === undefined) user = userThatLeft;

	return (
		<>
			{userID === message.from_id ? (
				<ReceivedMessage
					message={message}
					user={user}
					/>
			) : (
				<SentMessage
					message={message}
					user={user}
				/>
			)}
		</>
	);
};

export default Message;
