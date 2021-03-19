import { useSelector } from 'react-redux';
import { Socket } from 'socket.io-client';
import '../../../assets/scss/Chat.scss';
import { IChat } from '../../../store/interfaces/IChat';
import { RootState } from '../../../store/reducers';
import RecentElement from './RecentElement';

interface Props {
	socket: Socket;
}

const RecentChats = ({ socket }: Props) => {
	const user = useSelector((state: RootState) => state.user);
	const chats = user.chats;

	return (
		<>
			<div className='col-3 px-0'>
				<div className='bg-white'>
					<div className='bg-gray px-4 py-2 bg-light'>
						<p className='h5 mb-0 py-1'>Recent Chats</p>
					</div>

					<div className='messages-box'>
						<div className='list-group rounded-0'>
							{chats !== null
								? chats.map((chat: IChat) => {
										return <RecentElement chat={chat} socket={socket} />;
								  })
								: null}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default RecentChats;
