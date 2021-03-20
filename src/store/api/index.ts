import axios from 'axios';
import ILogin from '../interfaces/ILogin';
import ISignup from '../interfaces/ISignup';
import INameChange from '../interfaces/INameChange';

const API_URL = 'http://localhost:8002/api/';
const API = axios.create({
	baseURL: API_URL,
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

const getAllUsers = () => API.get('/users/getallusers');

export { login, signup, nameChange, getAllUsers, addContact, removeContact };
