import IMessage from '../../../../store/interfaces/IMessage';
import ReceiverMessage from './types/ReceiverMessage';
import SenderMessage from './types/SenderMessage';

interface Props {
	userID: string;
	message: IMessage;
}

const Message = ({ userID, message }: Props) => {
	return (
		<>
			{userID === message.from_id ? (
				<SenderMessage message={message} />
			) : (
				<ReceiverMessage message={message} />
			)}
		</>
	);
};

export default Message;
