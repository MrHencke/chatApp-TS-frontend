import '../../../assets/scss/Chat.scss';
import Input from './Input';
import Message from './Messages/Message';
import { Socket } from 'socket.io-client';
import { useEffect, useRef } from 'react';
import { changeCurrentChat } from '../../../store/actions/app/changeCurrentChat';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
interface Props {
	userID: string;
	socket: Socket;
}

const SelectedChat = ({ userID, socket }: Props) => {
	const dispatch = useDispatch();
	const bottomRef: any = useRef(); //TODO Swap types to something other than any

	const scrollToBottom = () => {
		bottomRef.current.scrollIntoView();
	};

	const joinRoom = () => {
		if (chat !== null && chat !== undefined) {
			socket.emit('join', chat._id);
		}
	};

	useEffect(() => {
		scrollToBottom();
		joinRoom();
	});

	const user = useSelector((state: RootState) => state.user.profile);
	const currentChat = useSelector((state: RootState) => state.app.currentChat);
	//@ts-ignore
	const chat = user.chats.find((el) => el._id === currentChat);

	return (
		<>
			<div className='col-9 px-0'>
				<div className='px-4 pt-5 pb-0 chat-box bg-white'>
					{chat !== undefined
						? chat.messages.map((msg) => {
								return <Message message={msg} userID={userID} />;
						  })
						: null}
					<div id='Hey stop looking at this' ref={bottomRef}></div>
				</div>
				<Input socket={socket} />
			</div>
		</>
	);
};

export default SelectedChat;
