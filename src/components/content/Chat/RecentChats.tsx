import '../../../assets/scss/Chat.scss';
import RecentElement from './RecentElement';

const RecentChats = () => {
	return (
		<>
			<div className='col-3 px-0'>
				<div className='bg-white'>
					<div className='bg-gray px-4 py-2 bg-light'>
						<p className='h5 mb-0 py-1'>Recent Chats</p>
					</div>

					<div className='messages-box'>
						<div className='list-group rounded-0'>
							<RecentElement />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default RecentChats;
