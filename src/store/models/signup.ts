interface ISignup {
	email: string;
	username: string;
	name: string;
	password: string;
	repeatedpassword: String;
}

type signupAction = {
	type: string;
	data: ISignup;
};

export type { signupAction };

export default ISignup;
