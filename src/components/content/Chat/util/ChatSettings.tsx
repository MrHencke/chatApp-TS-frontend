import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentChat } from '../../../../store/actions/app/changeCurrentChat';
import { removeChat } from '../../../../store/actions/user/removeChat';
import { IChat } from '../../../../store/interfaces/IChat';
import { RootState } from '../../../../store/reducers';
import ChatMembersModal from './ChatMembersModal';
import ChatSettingsModal from './ChatSettingsModal';

interface Props {
	chat: IChat;
	userID: string;
	currentChat: string | null;
}
const ChatSettings = ({ chat, userID, currentChat }: Props) => {
	const dispatch = useDispatch();
	const socket = useSelector((state: RootState) => state.app.socket);

	const handleLeave = () => {
		const chatID = chat._id;
		dispatch(changeCurrentChat(null));
		socket!.emit('userLeftChat', { userID, chatID });
		dispatch(removeChat(chatID));
	};

	const handleDelete = () => {
		const chatID = chat._id;
		socket!.emit('deleteChat', chatID);
		dispatch(changeCurrentChat(null));
	};
	return (
		<div className='ml-auto'>
			{currentChat ? (
				<div className='dropleft'>
					<button
						className='btn btn-secondary'
						data-toggle='dropdown'
						style={{
							borderRadius: '30px',
							boxShadow: '0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1)',
						}}
					>
						Chat Settings
					</button>
					<div className='dropdown-menu'>
						<ChatSettingsModal chat={chat!} />
						<div className='dropdown-divider'></div>
						<ChatMembersModal chat={chat!} />
						<button className='dropdown-item rounded' onClick={handleLeave}>
							Leave Chat
						</button>
						{userID === chat?.owner ? (
							<>
								<div className='dropdown-divider'></div>
								<button className='dropdown-item rounded' onClick={handleDelete}>
									Delete Chat
								</button>
							</>
						) : null}
					</div>
				</div>
			) : null}
		</div>
	);
};

export default ChatSettings;
