import { useSelector } from 'react-redux';
import '../../../assets/scss/Portrait.scss';
import { RootState } from '../../../store/reducers';

interface Props {
	profilepicture: string;
	id: string;
	width?: string;
	height?: string;
}

const ProfilePicture = ({ profilepicture, id, width = '150', height = '150' }: Props) => {
	const onlineUsers = useSelector((state: RootState) => state.app.onlineUsers);
	const isOnline = onlineUsers.findIndex((userID) => userID === id);
	return (
		<div className={isOnline !== -1 ? 'online' : 'portrait'}>
			<img src={profilepicture} alt='' width={width} height={height} />
		</div>
	);
};

export default ProfilePicture;
