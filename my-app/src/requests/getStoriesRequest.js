export const getStories = (callback) => {
	fetch("http://localhost:8080/story")
		.then(res => res.json())
		.then(json => callback(json))
		.catch(err => console.log(err))
};
