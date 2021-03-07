interface ISignup {
	email: string;
	username: string;
	name: string;
	password: string;
	repeatedpassword: String;
}

type SignupAction = {
	type: string;
	data: ISignup;
};

export type { SignupAction };

export default ISignup;
