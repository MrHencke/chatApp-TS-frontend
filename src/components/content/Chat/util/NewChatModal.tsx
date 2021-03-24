import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/reducers';
import { Modal } from 'react-bootstrap';
import Select, { ValueType } from 'react-select';
import { FormEvent, useState } from 'react';
const NewChatModal = () => {
	const user = useSelector((state: RootState) => state.user);
	const socket = useSelector((state: RootState) => state.app.socket);
	const [chatName, setChatName] = useState('');
	const [members, setMembers] = useState<ValueType<OptionsType, true>>([]);

	type OptionsType = { label: string; value: string };
	let contactOptions: OptionsType[] = [];
	if (user.contacts) {
		user.contacts.forEach((contact) => {
			contactOptions.push({ label: contact.username, value: contact._id });
		});
	}

	const handleChangeMembers = (options: ValueType<OptionsType, true>) => {
		setMembers(options);
	};

	const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setChatName(e.target.value);
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const creatorID = user.profile.id;
		const _members = members.map((user) => user.value);
		const data = { name: chatName, creatorID, members: _members };
		socket!.emit('newChat', data);
		setChatName('');
		setMembers([]);
		setShowHide(!showHide);
	};

	const [showHide, setShowHide] = useState(false);

	return (
		<>
			<button
				type='button'
				className='btn btn-default btn-block'
				onClick={() => {
					setShowHide(!showHide);
				}}
				style={{ borderRadius: '2rem' }}
			>
				New Chat
			</button>

			<Modal
				show={showHide}
				onHide={() => {
					setShowHide(!showHide);
				}}
				centered
			>
				<Modal.Header closeButton onClick={() => setShowHide(!showHide)}>
					<Modal.Title>Create New Chat</Modal.Title>
				</Modal.Header>
				<form onSubmit={handleSubmit} className='form'>
					<Modal.Body>
						<div className='modal-body'>
							<h5>Chat Name</h5>
							<input
								type='text'
								value={chatName}
								className='form-control'
								minLength={5}
								onChange={handleChangeName}
							/>
							<h5 className='pt-5'>Chat Members</h5>
							<Select
								options={contactOptions}
								isSearchable
								isMulti
								onChange={(options) => handleChangeMembers(options)}
								className='select-search-box'
								placeholder='Search'
								value={members}
							/>
						</div>
					</Modal.Body>

					<Modal.Footer>
						<button
							className='btn btn-lg btn-primary btn-block roundedbutton'
							type='submit'
							disabled={members.length === 0}
							onClick={handleSubmit}
						>
							Start new Chat
						</button>
					</Modal.Footer>
				</form>
			</Modal>
		</>
	);
};

export default NewChatModal;
