import { IProfile } from './profile';
import { IUser } from './user';

type userAction = {
	type: string;
	payload: {
		data: IUser;
	};
};

export type { userAction };
