import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/reducers';
import { Modal } from 'react-bootstrap';
import Select, { ValueType } from 'react-select';
import { FormEvent, useState } from 'react';
import { IChat } from '../../../../store/interfaces/IChat';
import '../../../../assets/scss/Modal.scss';

interface Props {
	chat: IChat;
}

const ChatSettingsModal = ({ chat }: Props) => {
	const user = useSelector((state: RootState) => state.user);
	const socket = useSelector((state: RootState) => state.app.socket);
	const [chatName, setChatName] = useState('');
	const [newMembers, setNewMembers] = useState<ValueType<OptionsType, true>>([]);

	type OptionsType = { label: string; value: string };

	let contactOptions: OptionsType[] = [];
	if (user.contacts && chat.users) {
		user.contacts.forEach((contact) => {
			if (!chat.users.find((user) => user._id === contact._id)) {
				contactOptions.push({ label: contact.username, value: contact._id });
			}
		});
	}

	const handleChangeMembers = (options: ValueType<OptionsType, true>) => {
		setNewMembers(options);
	};

	const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setChatName(e.target.value);
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const chatID = chat._id;
		if (chatName.length !== 0) socket!.emit('newChatName', { chatName, chatID });
		if (newMembers.length !== 0) socket!.emit('addMembers', { newMembers, chatID });

		setChatName('');
		setNewMembers([]);
		setShowHide(!showHide);
	};

	const [showHide, setShowHide] = useState(false);

	return (
		<>
			<button
				className='dropdown-item rounded'
				onClick={() => {
					setShowHide(!showHide);
				}}
			>
				Chat Settings
			</button>
			{/*TODO Maybe make content of modal an accordion */}
			<Modal
				show={showHide}
				onHide={() => {
					setShowHide(!showHide);
					setChatName('');
					setNewMembers([]);
				}}
				centered
				id='roundedCard'
			>
				<Modal.Header className='' closeButton onClick={() => setShowHide(!showHide)}>
					<Modal.Title>Settings for {chat.name}</Modal.Title>
				</Modal.Header>
				<form onSubmit={handleSubmit} className='form'>
					<Modal.Body>
						<div className='modal-body'>
							{user.profile.id === chat.owner ? (
								<>
									<h5>Rename Chat</h5>
									<input
										type='text'
										value={chatName}
										className='form-control'
										minLength={5}
										onChange={handleChangeName}
										placeholder='New Chat name'
									/>
									<br />
								</>
							) : null}
							<h5 className='pt-auto'>Add Chat Members</h5>
							{/* TODO find contacts not present in chat, present by name */}
							<Select
								options={contactOptions}
								isSearchable
								isMulti
								onChange={(options) => handleChangeMembers(options)}
								className='select-search-box'
								placeholder='Search'
								value={newMembers}
							/>
						</div>
					</Modal.Body>

					<Modal.Footer>
						<button
							className='btn btn-lg btn-primary btn-block roundedbutton'
							type='submit'
							disabled={chatName.length === 0 && newMembers.length === 0}
							onClick={handleSubmit}
						>
							Save Changes
						</button>
					</Modal.Footer>
				</form>
			</Modal>
		</>
	);
};

export default ChatSettingsModal;
