import nodeFetch from "node-fetch";
global.fetch = nodeFetch;
import GitHubSDK from "../src/js/GitHubSDK";
import account from "../src/js/myAcc/acc";

describe("GitHubSDK", () => {
	describe("Method getUserData", () => {
		it("return false if given wrong username", async () => {
			const github = new GitHubSDK("account.name", account.token);

			const result = await github.getUserInfo();

			expect(result).toBe(false);
		});
	});
	describe("method getRepoDetails()", () => {
		it("return false if no repo found", async () => {
			const github = new GitHubSDK(account.name, account.token);
			const result = await github.getRepoDetails("Wrong name");
			expect(result).toBe(false);
		});
	});
});
