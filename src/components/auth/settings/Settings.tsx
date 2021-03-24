import { useState } from 'react';
import '../../../assets/scss/Settings.scss';
import ChangeUsername from './subcomponents/ChangeUsername';
import DeleteUser from './subcomponents/DeleteUser';

const Settings = () => {
	const [index, setIndex] = useState(0);

	const SettingsType = () => {
		switch (index) {
			case 0:
				return <ChangeUsername />;

			case 1:
				return <DeleteUser />;

			default:
				return null;
		}
	};

	const handleIndexChange = (index: number) => {
		setIndex(index);
	};

	const IndexSelector = () => {
		return (
			<div className='d-flex justify-content-center'>
				<span
					className={`dot ${index === 0 ? 'active' : ''}`}
					id='dot0'
					onClick={() => handleIndexChange(0)}
				></span>
				<span
					className={`dot ${index === 1 ? 'active' : ''}`}
					id='dot1'
					onClick={() => handleIndexChange(1)}
				></span>
			</div>
		);
	};

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
					<div className='card card-signin my-5' id='roundedCard'>
						<div className='card-body'>
							<IndexSelector />
							<hr />
							<SettingsType />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Settings;
