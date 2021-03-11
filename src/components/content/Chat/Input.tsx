import React, { FormEvent, useState } from 'react';

const Input = () => {
	const [message, setMessage] = useState('');

	const handleInput = (e: FormEvent) => {
		e.preventDefault();
		//TODO dispatch to handle new message
		console.log(message);
		setMessage('');
	};

	return (
		<form onSubmit={handleInput} className='bg-light'>
			<div className='input-group'>
				<input
					type='text'
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setMessage(e.target.value)
					}
					value={message}
					className='form-control rounded-0 border-0 py-4 bg-light'
				/>
				<div className='input-group-append'>
					<button type='submit' className='btn'>
						Send
					</button>
				</div>
			</div>
		</form>
	);
};

export default Input;
