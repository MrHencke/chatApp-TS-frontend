import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { newSocket } from '../../store/actions/app/newSocket';
import firstTimeLogin from '../../store/actions/user/firstTimeLogin';

const ResponsePage = () => {
	const params: ResponseParameters = useParams();
	const history = useHistory();
	const dispatch = useDispatch();
	console.log(params);
	if (params.status === 'success') {
		dispatch(newSocket(history));
	}
	if (params.type === 'firsttime') {
		dispatch(firstTimeLogin());
	}

	return (
		<div className='py-4 mt-auto text-center'>
			<div className='text-md-center'>
				<p>{params.status}</p>
			</div>
		</div>
	);
};

export default ResponsePage;

type ResponseParameters = {
	status?: string;
	type?: string;
};
