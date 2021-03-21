import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import { Modal } from 'react-bootstrap';
import Select, { ValueType } from 'react-select';
import { FormEvent, useState } from 'react';

interface Props {
	chatname: string;
}

const ChatSettingsModal = ({ chatname }: Props) => {
	const user = useSelector((state: RootState) => state.user);
	//const socket = useSelector((state: RootState) => state.app.socket);
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
				}}
				centered
				id='roundedCard'
			>
				<Modal.Header className='' closeButton onClick={() => setShowHide(!showHide)}>
					<Modal.Title>Settings for {chatname}</Modal.Title>
				</Modal.Header>
				<form onSubmit={handleSubmit} className='form'>
					<Modal.Body>
						<div className='modal-body'>
							<h5>Rename Chat</h5>
							{/* TODO Write logic for renaming chat */}
							<input
								type='text'
								value={chatName}
								className='form-control'
								minLength={5}
								onChange={handleChangeName}
								placeholder='New Chat name'
							/>
							<h5 className='pt-5'>Add Chat Members</h5>
							{/* TODO find contacts not present in chat, present by name */}
							<Select
								options={contactOptions}
								isSearchable
								isMulti
								onChange={(options) => handleChangeMembers(options)}
								className='select-search-box'
								placeholder='Search'
								value={members}
							/>
							<h5 className='pt-5'>Remove Chat Members</h5>
							{/* TODO find members of chat, present by name */}
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
							className='btn btn-lg btn-primary btn-block'
							type='submit'
							disabled={false /* TODO New requirement for disabling button */}
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
