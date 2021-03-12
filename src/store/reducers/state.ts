import { IUser } from '../interfaces/IUser';
import { userAction } from '../interfaces/actionInterfaces/userAction';
import { IApp } from '../interfaces/IApp';
import { appAction } from '../interfaces/actionInterfaces/appAction';

namespace RootStateTypes {
	export type UserState = IUser;
	export type UserAction = userAction;
	export type AppState = IApp;
	export type AppAction = appAction;
}

interface RootState {
	user: RootStateTypes.UserState;
	userAction: RootStateTypes.UserAction;
	app: RootStateTypes.AppState;
	appAction: RootStateTypes.AppAction;
}

export type { RootState };
