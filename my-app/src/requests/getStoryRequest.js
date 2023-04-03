const url = 'http://localhost:8080/story'

export const getStory = (id) => {
	fetch(`${url}/${id}`)
		.then(res => res.json())
		.then(json => json)
		.catch(err => console.log(err))
}