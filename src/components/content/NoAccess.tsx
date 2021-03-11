import React from 'react';

const NoAccess = () => {
	return (
		<div className='py-4 mt-auto text-center'>
			<div className='text-md-center'>
				<p className='font-size-sm mb-0 mr-3 order-md-1'>
					<h2>
						You are not logged in, to access this page, log in via
						the top right corner
					</h2>
				</p>
			</div>
		</div>
	);
};

export default NoAccess;
