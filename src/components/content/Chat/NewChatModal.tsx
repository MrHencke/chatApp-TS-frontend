import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import Select, { ValueType, ActionMeta } from 'react-select';
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
		console.log(options);
	};

	const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setChatName(e.target.value);
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const data = { chatName, members };
		socket!.emit('newChatTest', data);
		setChatName('');
		setMembers([]);
	};

	return (
		<>
			<button
				type='button'
				className='btn btn-default btn-block'
				data-bs-toggle='modal'
				data-bs-target='#newChatModal'
			>
				New Chat
			</button>

			<div
				className='modal fade'
				id='newChatModal'
				tabIndex={-1}
				aria-labelledby='newChatModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog modal-dialog-centered'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='newChatModalLabel'>
								New Chat
							</h5>
						</div>
						<form onSubmit={handleSubmit} className='form'>
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
							<div className='modal-footer'>
								<button
									type='button'
									className='btn btn-secondary'
									data-bs-dismiss='modal'
								>
									Close
								</button>
								<button
									type='submit'
									disabled={members.length === 0}
									className='btn btn-primary'
								>
									Start new chat
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default NewChatModal;
