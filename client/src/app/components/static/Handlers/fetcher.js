function fetcher(url) {
	return fetch(url, {mode: 'cors'}).then((resp) => {
		if (!resp.ok) {
			throw `Server error: [${resp.status}] [${resp.statusText}] [${resp.url}]`;
		}
		return resp.json();
	});
}

export default fetcher;
