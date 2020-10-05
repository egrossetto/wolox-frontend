import { URL } from './URL';

export default class LoginService {
	async login(email, password) {
		let response = await fetch(`${URL}login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		}).then((r) => {
			return r.json();
		});
		return response;
	}

	logout() {
		localStorage.clear();
	}
}
