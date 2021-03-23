import { Children } from 'react';

const CenteredCol = (props: any) => {
	return (
		<div className='col'>
			<div className='py-4 mt-auto text-center text-muted'>
				<h2 className='font-size-sm mb-0 mr-3 order-md-1'>{props.children}</h2>
			</div>
		</div>
	);
};

export default CenteredCol;
