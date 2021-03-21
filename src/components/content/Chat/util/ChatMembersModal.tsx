//import { useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import { IChat } from '../../../../store/interfaces/IChat';
import MemberElement from './MemberElement';

interface Props {
	chat: IChat;
}

const ChatMembersModal = ({ chat }: Props) => {
	const [showHide, setShowHide] = useState(false);

	return (
		<>
			<button
				className='dropdown-item rounded'
				onClick={() => {
					setShowHide(!showHide);
				}}
			>
				Chat Members
			</button>
			<Modal
				show={showHide}
				onHide={() => {
					setShowHide(!showHide);
				}}
				centered
				id='roundedCard'
			>
				<Modal.Header closeButton onClick={() => setShowHide(!showHide)}>
					<Modal.Title>Chat Members</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{chat.users.map((member) => {
						return <MemberElement member={member} chat={chat} />;
					})}
				</Modal.Body>
			</Modal>
		</>
	);
};

export default ChatMembersModal;
