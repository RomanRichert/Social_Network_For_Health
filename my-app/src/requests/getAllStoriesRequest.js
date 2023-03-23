const url = 'http://localhost:8080/story'
//
export const getAllStories = () => {

	return dispatch => {
		fetch(url)
			.then(res => res.json())
			.then(json => dispatch(json))
	}
	
}