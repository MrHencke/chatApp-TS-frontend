interface Props {
	usersTypingString: string;
}
/** Message received by user from another user */
const UserTyping = ({ usersTypingString }: Props) => {
	return (
		<div className=' media w-50 ml-auto mb-3'>
			<div className='media-body ml-3'>
				<div className='bg-primary rounded py-2 px-3 mb-2 text-break'>
					<p className='text-small mb-0 text-white text-break'>
						{usersTypingString + ' is typing'}
					</p>
				</div>
			</div>
		</div>
	);
};

export default UserTyping;
