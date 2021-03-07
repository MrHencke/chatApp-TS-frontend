interface ILogin {
	email: string;
	password: string;
	status?: number;
}

type loginAction = {
	type: string;
	data: ILogin;
};

export type { loginAction };

export default ILogin;
