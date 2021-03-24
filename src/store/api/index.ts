import axios from 'axios';
import ILogin from '../interfaces/ILogin';
import ISignup from '../interfaces/ISignup';
import INameChange from '../interfaces/INameChange';
import config from '../../config';

const API = axios.create({
	baseURL:
		process.env.NODE_ENV === 'development'
			? `${config.HTTP}localhost:8002${config.APIROUTE}`
			: `${config.HTTPS}${config.BACKENDURL}${config.APIROUTE}`,
});

API.interceptors.request.use((req) => {
	if (!localStorage.getItem('profile') || localStorage.getItem('profile') === undefined) {
		return req;
	} else {
		req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')!)}`;
	}

	return req;
});

const login = (formData: ILogin) => API.post('/users/login', formData);
const signup = (formData: ISignup | FormData) => API.post('/users/signup', formData);
const nameChange = (formData: INameChange) => API.patch('/users/changename', formData);

const addContact = (formData: { contactID: string }) => API.patch('/users/addcontact', formData);
const removeContact = (formData: { contactID: string }) =>
	API.patch('/users/removecontact', formData);

const deleteAccount = (requestData: { id: string; password: string }) =>
	API.patch('/users/deleteaccount', requestData);

const getAllUsers = () => API.get('/users/getallusers');

export { login, signup, nameChange, getAllUsers, addContact, removeContact, deleteAccount };
