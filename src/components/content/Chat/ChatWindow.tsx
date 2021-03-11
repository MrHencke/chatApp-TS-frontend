import React from 'react';
import OtherChats from './RecentChats';
import SelectedChat from './SelectedChat';
import '../../../assets/scss/Chat.scss';

const ChatWindow = () => {
	return (
		<div className='container py-5 px-4'>
			<div className='row rounded-lg overflow-hidden shadow'>
				<OtherChats />
				<SelectedChat />
			</div>
		</div>
	);
};

export default ChatWindow;
