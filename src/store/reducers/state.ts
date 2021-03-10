import { IUser } from '../interfaces/IUser';
import { userAction } from '../interfaces/userAction';

namespace RootStateTypes {
	export type UserState = IUser;
	export type UserAction = userAction;
}

interface RootState {
	user: RootStateTypes.UserState;
	action: RootStateTypes.UserAction;
}

export type { RootState };
