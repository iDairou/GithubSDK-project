export default class GitHubSDK {
	constructor(user, token) {
		this.url = "https://api.github.com/";
		this.user = user;
		this.token = token;
	}

	getUserInfo() {
		const options = { method: "GET" };
		const promise = new Promise((resolve) => {
			resolve(
				this._fetch(options, `users/${this.user}`)
					.then((data) => {
						return data
					})
					.catch((err) => {
						return err.ok;
					})
			);
		});
		return promise;
	}
	getRepoDetails(repo) {
		const options = { method: "GET" };
		const promise = new Promise((resolve) => {
			resolve(
				this._fetch(options, `repos/${this.user}/${repo}`)
					.then((data) => {
						return data
					})
					.catch((err) => {
						return err.ok;
					})
			);
		});
		return promise;
	}
	getUserRepositoriesList() {
		const options = { method: "GET" };
		const promise = new Promise((resolve) => {
			resolve(
				this._fetch(options, `users/${this.user}/repos`)
					.then((data) => {
						return data
					})
					.catch((err) => {
						return err.ok;
					})
			);
		});
		return promise;
	}

	_fetch(options, additionalPath = "") {
		const url = this.url + additionalPath;
		return fetch(url, options).then((resp) => {
			if (resp.ok) {
				return resp.json();
			}
			return Promise.reject(resp);
		});
	}

	// sendInvitation(repo = "", user = "") {
	// 	const secret = this.token;
	// 	const url = `https://api.github.com/repos/${this.owner}/${repo}/collaborators/${user}`;
	// 	const promise = fetch(url, {
	// 		method: "PUT",
	// 		credentials: "same-origin",
	// 		redirect: "follow",
	// 		headers: {
	// 			Accept: "application/vnd.github.v3+json",
	// 			Authorization: `token ${secret}`,
	// 		},
	// 		body: JSON.stringify({
	// 			permission: "pull",
	// 		}),
	// 	}).then((resp) => {
	// 		if (resp.ok) {
	// 			return resp.json();
	// 		}
	// 		return Promise.reject(resp);
	// 	});
	// 	return promise;
	// }
}
