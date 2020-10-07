import { URL } from './URL';

export default class ListService {
	async getList() {
		let response = await fetch(`${URL}techs`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((r) => {
			return r.json();
		});
		return response;
	}
}
