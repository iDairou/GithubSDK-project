export default class GitHubSDK {
	constructor(owner, token) {
		this.owner = owner;
		this.token = token;
	}
	sendInvitation(repo = "", user = "") {
		const secret = this.token;
		const url = `https://api.github.com/repos/${this.owner}/${repo}/collaborators/${user}`;
		const promise = fetch(url, {
			method: "PUT",
			credentials: "same-origin",
			redirect: "follow",
			headers: {
				Accept: "application/vnd.github.v3+json",
				Authorization: `token ${secret}`,
			},
			body: JSON.stringify({
				permission: "pull",
			}),
		}).then((resp) => {
			if (resp.ok) {
				return resp.json();
			}
			return Promise.reject(resp);
		});
	}
}
