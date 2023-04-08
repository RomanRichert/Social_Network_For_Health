import { sendCommentAction } from "../store/actions/sendCommentAction";

export const sendComment = (id, comment) => {
    const data = { storyId: id, comment: comment }
    console.log(data)
    return dispatch => {
        fetch( `http://localhost:8080/story/comment/${id}?comment=${comment}`, {
            // fetch( `http://localhost:8080/story/comment/${id}`, {
            headers: {
                accept: "application/json",
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            dataType: "json",
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
            throw new Error(response);
            }
            return response.json();
        })
        .then(json => {
            dispatch(sendCommentAction(json))
        })
        .catch(error => {
            console.log(error)
        });
    }
    
}