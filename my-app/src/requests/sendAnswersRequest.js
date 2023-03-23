const url = 'http://localhost:8080/story'
//
export const sendAnswers = (body) => {
console.log(body)
	return dispatch => {
		fetch(url, {
			headers: {
				'Content-Type': 'application/json'
			},
			method: "POST",
			body: JSON.stringify(body)
		})
			.then(res => res.json())
			.then(json => dispatch(json))
	}
	
}