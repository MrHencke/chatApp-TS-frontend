import React, { useEffect, useState } from 'react';

const Clock = () => {
	const [date, setDate] = useState(new Date().toLocaleTimeString('nb-NO'));

	useEffect(() => {
		const timerID = setInterval(() => tick(), 1000);
		return () => {
			clearInterval(timerID);
		};
	}, []);

	const tick = () => {
		setDate(new Date().toLocaleTimeString('nb-NO'));
	};

	return <h1 className="text">{date}</h1>;
};

export default Clock;
