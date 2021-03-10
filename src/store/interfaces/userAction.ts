import { IProfile } from './IProfile';
import { IUser } from './IUser';

type userAction = {
	type: string;
	payload: {
		data: IUser;
	};
};

export type { userAction };
