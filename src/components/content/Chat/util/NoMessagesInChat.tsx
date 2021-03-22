const NoMessagesInChat = () => {
	return (
		<div className='py-4 mt-auto text-center'>
			<div className='text-md-center'>
				<div className='font-size-sm mb-0 mr-3 order-md-1'>
					<span className='text-muted mr-1'>
						<h2>There are no messages in this chat.</h2>
						<h4>Send a message from the field below to get started.</h4>
					</span>
				</div>
			</div>
		</div>
	);
};

export default NoMessagesInChat;
