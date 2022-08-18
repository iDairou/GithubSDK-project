import "../styles/styles.css";
import GitHubSDK from "./GitHubSDK";
import account from "./myAcc/acc";

const init = () => {
	const form = document.querySelector(".user__authorization");
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const value = document.querySelector(".authorization__input").value;
		const github = new GitHubSDK(value, account.token);
		github.getUserRepositoriesList().then((data) => {
			insertUserRepos(data);
		});
		github.getUserInfo().then((data) => {
			insertUserInfo(data);
		});
	});

	// const github = new GitHubSDK(account.name, account.token);
	// const newList = github.getUserRepositoriesList();
	// newList
	// 	.then((data) => {
	// 		insertRepos(data);
	// 	})
	// 	.catch((err) => console.log(err));

	// github.getRepoDetails("Austera");
};

const insertUserRepos = (array) => {
	const reposList = document.querySelector(".repo__list");
	reposList.innerHTML = "";
	array.forEach((element) => {
		const liEl = document.createElement("li");
		liEl.classList.add("repo-item");
		liEl.innerText = element.name;
		reposList.appendChild(liEl);
	});
};
const insertUserInfo = (user) => {
	console.log(user);
};

document.addEventListener("DOMContentLoaded", init);
