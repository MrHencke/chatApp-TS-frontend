import React from 'react';
import IMessage from '../../../../store/interfaces/IMessage';
import PlaceholderProfileImage from '../../../../testing/PlaceholderProfileImage';

interface Props {
	userID: string;
	message: IMessage;
}

const Message = ({ userID, message }: Props) => {
	return (
		<>
			{userID === message.from_id ? (
				<div className='media w-50 ml-auto mb-3'>
					<div className='media-body mr-3'>
						<div className='bg-primary rounded py-2 px-3 mb-2'>
							<p className='text-small mb-0 text-white'>{message.content}</p>
						</div>
						<p className='small text-muted'>{message.timestamp}</p>
					</div>
					<PlaceholderProfileImage />
				</div>
			) : (
				<div className='media w-50 mb-3'>
					<PlaceholderProfileImage />
					<div className='media-body ml-3'>
						<div className='bg-light rounded py-2 px-3 mb-2'>
							<p className='text-small mb-0 text-muted'>{message.content}</p>
						</div>
						<p className='small text-muted'>{message.timestamp}</p>
					</div>
				</div>
			)}
		</>
	);
};

export default Message;
