import { Users } from '../../../../store/interfaces/IChat';
import IMessage from '../../../../store/interfaces/IMessage';
import ReceivedMessage from './types/ReceivedMessage';
import SentMessage from './types/SentMessage';

interface Props {
	userID: string;
	message: IMessage;
	chatusers: Users[];
}

const Message = ({ userID, message, chatusers }: Props) => {
	let user = chatusers.find((user) => user._id === message.from_id);

	return (
		<>
			{userID === message.from_id ? (
				<ReceivedMessage message={message} authorName={user!.username} authorPicture={user!.profilepicture} />
			) : (
				<SentMessage message={message} authorName={user!.username} authorPicture={user!.profilepicture} />
			)}
		</>
	);
};

export default Message;
