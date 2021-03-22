const NoSelectedChat = () => {
	return (
		<div className='py-4 mt-auto text-center'>
			<div className='text-md-center'>
				<div className='font-size-sm mb-0 mr-3 order-md-1'>
					<span className='text-muted mr-1'>
                        <h2>You have no chat selected</h2>
                        <h4>Select a recent chat, or start a new one!</h4>
                    </span>
				</div>
			</div>
		</div>
	);
};

export default NoSelectedChat;
