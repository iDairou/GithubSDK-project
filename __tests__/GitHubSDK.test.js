import nodeFetch from "node-fetch";
global.fetch = nodeFetch;

import GitHubSDK from "../src/js/GitHubSDK";
import account from "../src/js/myAcc/acc";

describe("GitHubSDK", () => {
	describe("Method getUserInfo", () => {
		it("return false if given wrong username", async () => {
			expect.assertions(1);
			const github = new GitHubSDK("account.name", account.token);
			const result = await github.getUserInfo();
			expect(result).toBe(false);
		});
	});
	describe("method getRepoDetails()", () => {
		it("return false if no repo found", async () => {
			expect.assertions(1);
			const github = new GitHubSDK(account.name, account.token);
			const result = await github.getRepoDetails("Wrong name");
			expect(result).toBe(false);
		});
	});
	describe("method getUserRepositoriesList()", () => {
		it("return false if username no exist", async () => {
			expect.assertions(1);
			const github = new GitHubSDK("account.name", account.token);
			const result = await github.getUserRepositoriesList();
			expect(result).toBe(false);
		});
	});
});
