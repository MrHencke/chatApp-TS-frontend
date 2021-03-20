import { useSelector } from 'react-redux';
import { Socket } from 'socket.io-client';
import moment from 'moment';
import '../../../assets/scss/Chat.scss';
import { IChat } from '../../../store/interfaces/IChat';
import { RootState } from '../../../store/reducers';
import NewChatModal from './NewChatModal';
import RecentElement from './RecentElement';

interface Props {
	socket: Socket;
}

const RecentChats = ({ socket }: Props) => {
	const user = useSelector((state: RootState) => state.user);
	const chats = user.chats;
	let _chats = chats;

	if (_chats !== null) {
		_chats.sort((a, b) => {
			return (
				//@ts-ignore
				(b.messages[0] !== undefined) - (a.messages[0] !== undefined) ||
				moment(b.messages.slice(-1)[0]?.timestamp).unix() -
					moment(a.messages.slice(-1)[0]?.timestamp).unix()
			);
		});
	}

	const RenderChats = () => {
		return (
			<>
				{_chats !== null
					? _chats.map((chat: IChat) => {
							return <RecentElement chat={chat} socket={socket} />;
					  })
					: null}
			</>
		);
	};

	return (
		<>
			<div className='col-3 px-0'>
				<div className='bg-white'>
					<div className='bg-gray px-4 py-2 bg-light'>
						<p className='h5 mb-0 py-1'>Recent Chats</p>
					</div>
					<div className='messages-box'>
						<div className='list-group rounded-0'>
							<RenderChats />
						</div>
					</div>
					<div className='bg-gray px-3 py-2 bg-light'>
						<NewChatModal />
					</div>
				</div>
			</div>
		</>
	);
};

export default RecentChats;
