export const sendAnswers = (body, callback) => {
	const url = 'http://localhost:6000'

	fetch(url, {
		headers: {
			'Content-Type': 'application/json'
		},
		method: "POST",
		body: JSON.stringify(data)
	})
		.then(res => res.json())
		.then(json => callback(json))
}