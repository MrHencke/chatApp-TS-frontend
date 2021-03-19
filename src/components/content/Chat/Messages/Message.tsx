import IMessage from '../../../../store/interfaces/IMessage';
import ReceivedMessage from './types/ReceivedMessage';
import SentMessage from './types/SentMessage';

interface Props {
	userID: string;
	message: IMessage;
}

const Message = ({ userID, message }: Props) => {
	return (
		<>
			{userID === message.from_id ? (
				<ReceivedMessage message={message} />
			) : (
				<SentMessage message={message} />
			)}
		</>
	);
};

export default Message;
