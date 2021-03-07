import axios from 'axios';
import ILogin from '../models/login';
import ISignup from '../models/signup';
import 'dotenv/config';

const API = axios.create({
	baseURL: 'http://localhost:8002',
});

API.interceptors.request.use((req) => {
	if (!localStorage.getItem('profile')) {
		return req;
	} else {
		req.headers.Authorization = `Bearer ${
			JSON.parse(localStorage.getItem('profile')!).token
		}`;
	}

	return req;
});

const login = (formData: ILogin) => API.post('/users/login', formData);
const signup = (formData: ISignup) => API.post('/users/signup', formData);

export { login, signup };
