import React from 'react';
import { useParams } from 'react-router-dom';

const ResponsePage = () => {
	const params: ResponseParameters = useParams();
	console.log(params);
    
	return (
		<div className='py-4 mt-auto text-center'>
			<div className='text-md-center'>
				<p className='font-size-sm mb-0 mr-3 order-md-1'>
					<h3>{params.status}</h3>
				</p>
			</div>
		</div>
	);
};

export default ResponsePage;

type ResponseParameters = {
	status?: String;
};
