import { IApp } from '../IApp';

type appAction = {
	type: string;
	payload: {
		data: IApp;
	};
};

export type { appAction };
