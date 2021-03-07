import React from 'react';
import Clock from './Clock';

const Welcome = () => {
	return (
		<div className="py-4 mt-auto text-center">
			<div className="text-md-center">
				<p className="font-size-sm mb-0 mr-3 order-md-1">
					<span className="text-muted mr-1">
						<Clock />
						<h3>Placeholder</h3>
						<h3>Placeholder</h3>
						<h3>Placeholder</h3>
						<h3>Placeholder</h3>
						<h3>Placeholder</h3>
						<h3>Placeholder</h3>
						<h3>Placeholder</h3>
					</span>
				</p>
			</div>
		</div>
	);
};

export default Welcome;
