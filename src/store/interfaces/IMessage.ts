interface IMessage {
	chat_id: string;
	from_id: string;
	content: string;
	timestamp: Date | string;
}

export default IMessage;
