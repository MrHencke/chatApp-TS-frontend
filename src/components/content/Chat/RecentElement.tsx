import React from 'react';
import { Link } from 'react-router-dom';
import PlaceholderProfileImage from '../../../testing/PlaceholderProfileImage';

const RecentElement = () => {
	return (
		<Link
			to='#'
			className='list-group-item list-group-item-action list-group-item-light rounded-0'
		>
			<div className='media'>
				<PlaceholderProfileImage />
				<div className='media-body ml-4'>
					<div className='d-flex align-items-center justify-content-between mb-1'>
						<h6 className='mb-0'>Jason Doe</h6>
						<small className='small font-weight-bold'>25 Dec</small>
					</div>
					<p className='font-italic mb-0 text-small'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore.
					</p>
				</div>
			</div>
		</Link>
	);
};

export default RecentElement;
