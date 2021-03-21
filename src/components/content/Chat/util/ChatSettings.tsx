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
    const dispatch = useDispatch()
	const socket = useSelector((state: RootState) => state.app.socket);
	const handleLeave = () => {
		const chatID = chat._id;
        dispatch(changeCurrentChat(null));
		socket!.emit('userLeftChat', { userID, chatID });
        dispatch(removeChat(chatID))
	};
	return (
		<div className='ml-auto'>
			{currentChat ? (
				<div className='btn-group dropleft'>
					<button
						type='button'
						className='btn btn-secondary dropdown-toggle'
						data-toggle='dropdown'
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
								<button className='dropdown-item rounded'>
									Delete Chat {/* TODO */}
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
