import { IUser } from '../models/user';
import { userAction } from '../models/userAction';

namespace RootStateTypes {
	export type UserState = IUser;
	export type UserAction = userAction;
}

interface RootState {
	user: RootStateTypes.UserState;
	action: RootStateTypes.UserAction;
}

export type { RootState };
