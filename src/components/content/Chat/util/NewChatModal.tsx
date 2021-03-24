import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/reducers';
import { Modal } from 'react-bootstrap';
import Select, { ValueType } from 'react-select';
import { FormEvent, useState } from 'react';
import { uploadChatImage } from '../../../../store/api';
import setLoading from '../../../../store/actions/user/setLoading';
const NewChatModal = () => {
	const user = useSelector((state: RootState) => state.user);
	const dispatch = useDispatch();
	const socket = useSelector((state: RootState) => state.app.socket);
	const loading = useSelector((state: RootState) => state.user.loading);
	const [chatName, setChatName] = useState('');
	const [members, setMembers] = useState<ValueType<OptionsType, true>>([]);
	const [file, setFile] = useState<File>();

	type OptionsType = { label: string; value: string };
	let contactOptions: OptionsType[] = [];
	if (user.contacts) {
		user.contacts.forEach((contact) => {
			contactOptions.push({ label: contact.username, value: contact._id });
		});
	}

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		dispatch(setLoading(true));
		let chatIcon = null;

		if (file) {
			const form = new FormData();
			form.append('image', file);
			await uploadChatImage(form).then((data) => {
				chatIcon = data.data.chatIcon;
			});
		}

		const creatorID = user.profile.id;
		const _members = members.map((user) => user.value);
		const data = { name: chatName, creatorID, members: _members, chatIcon };
		socket!.emit('newChat', data);
		setChatName('');
		setMembers([]);
		setFile(undefined);
		dispatch(setLoading(false));
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
								onChange={(e) => {
									setChatName(e.target.value);
								}}
							/>
							<h5 className='pt-5'>Chat Members</h5>
							<Select
								options={contactOptions}
								isSearchable
								isMulti
								onChange={(options) => {
									setMembers(options);
								}}
								className='select-search-box'
								placeholder='Search'
								value={members}
							/>

							<h5 className='pt-5'>Chat Icon</h5>
							<input
								type='file'
								onChange={(e) => {
									if (e.target.files) setFile(e.target.files[0]);
								}}
							/>
						</div>
					</Modal.Body>

					<Modal.Footer>
						{loading ? (
							<div className='text-center'>
								<div className='spinner-border' role='status'>
									<span className='sr-only'>Loading...</span>
								</div>
							</div>
						) : (
							<button
								className='btn btn-lg btn-primary btn-block roundedbutton'
								type='submit'
								disabled={members.length === 0}
								onClick={handleSubmit}
							>
								Start new Chat
							</button>
						)}
					</Modal.Footer>
				</form>
			</Modal>
		</>
	);
};

export default NewChatModal;
