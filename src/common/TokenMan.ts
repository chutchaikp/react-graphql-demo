// module for saving tokens to local storage
const TOKEN_KEY = "logTokens";
// tokens = { accessToken: "xyz", refreshToken: "abc" }
// changes
// tokens = { jwt: "", account: "" }

export function saveTokens(token: { jwt: string, account: string }) {
	localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
}

export function getTokens() {
	return JSON.parse(localStorage.getItem(TOKEN_KEY) || "");
}

export function deleteTokens() {
	localStorage.removeItem(TOKEN_KEY);
}