import React from 'react';
import '../../../assets/scss/Chat.scss';
import Input from './Input';
import ReceiverMessage from './Messages/ReceiverMessage';
import SenderMessage from './Messages/SenderMessage';

const SelectedChat = () => {
	return (
		<>
			<div className='col-9 px-0'>
				<div className='px-4 py-5 chat-box bg-white'>
					<SenderMessage />
					<ReceiverMessage />
					<SenderMessage />
					<ReceiverMessage />
					<SenderMessage />
					<ReceiverMessage />
					<ReceiverMessage />
				</div>

				<Input />
			</div>
		</>
	);
};

export default SelectedChat;
