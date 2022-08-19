import "../styles/styles.css";
import GitHubSDK from "./GitHubSDK";
import account from "./myAcc/acc";

const init = () => {
	const form = document.querySelector(".user__authorization");
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const input = document.querySelector(".authorization__input");
		const github = new GitHubSDK(input.value, account.token);
		if (input.value === "") {
			alert("Input cannot be empty");
		} else {
			github.getUserRepositoriesList().then((data) => {
				insertUserRepos(data);
			});
			github.getUserInfo().then((data) => {
				insertUserInfo(data);
			});
		}
		input.value = "";
	});
	const clear = document.querySelector(".clear-button");
	clear.addEventListener("click", clearElements);
};

const insertUserRepos = (array) => {
	const reposList = getListTypeElement(".repo__list");
	const prototype = getPrototype(".repo__list--item--prototype");
	array.forEach((item) => {
		const liEl = prototype.cloneNode(true);
		removeClassName(liEl, "repo__list--item--prototype");
		setInfoToRepoItem(liEl, item);
		reposList.appendChild(liEl);
	});
};

const insertUserInfo = (user) => {
	const prototype = getPrototype(".user__info--item--prototype");
	const infoList = getListTypeElement(".user__info");
	if (user && infoList.children.length <= 1) {
		const liEl = prototype.cloneNode(true);
		removeClassName(liEl, "user__info--item--prototype");
		setInfoToUserItem(liEl, user);
		infoList.appendChild(liEl);
	}
};
const clearElements = () => {
	const input = document.querySelector(".authorization__input");
	const infoList = getListTypeElement(".user__info");
	const reposList = getListTypeElement(".repo__list");
	infoList.firstElementChild.nextElementSibling.remove();
	input.value = "";
	Array.from(reposList.children).forEach((e) => {
		if (!e.classList.contains("repo__list--item--prototype")) {
			e.remove();
		}
	});

	console.log(reposList.children);
};

const setInfoToRepoItem = (element, obj) => {
	element.firstElementChild.innerText = obj.name;
	element.firstElementChild.href = obj.html_url;
};
const setInfoToUserItem = (element, obj) => {
	element.firstElementChild.src = obj.avatar_url;
	element.firstElementChild.nextElementSibling.innerText = `Name: ${obj.name}`;
	element.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.href =
		obj.html_url;
	element.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText = `Location: ${obj.location}`;
};
const getPrototype = (className) => {
	return document.querySelector(className);

};
const getListTypeElement = (className) => {
	return document.querySelector(className);
};
const removeClassName = (el, className) => {
	return el.classList.remove(className);
};

document.addEventListener("DOMContentLoaded", init);
