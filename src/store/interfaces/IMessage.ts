interface IMessage {
	_id: string;
	chat_id: string;
	from_id: string;
	content: string;
	timestamp: Date;
}

export default IMessage;
