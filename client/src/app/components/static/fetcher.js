/* function fetcher(url) {
	return fetch(url, {mode: 'no-cors'}).then((response) => response.json());
} */

function fetcher(url) {
	return fetch(url, {mode: 'cors'})
		.then((resp) => {
			if (!resp.ok) {
				throw `Server error: [${resp.status}] [${resp.statusText}] [${resp.url}]`;
			}
			return resp.json();
		})
		.then((response) => {
			response.json();
		})
		.then((data) => {
			resolve(data ? JSON.parse(data) : {});
		});
}

export default fetcher;
