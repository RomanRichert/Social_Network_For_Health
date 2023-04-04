import { sendCommentAction } from "../store/actions/sendCommentAction";

export const sendComment = (id, comment) => {
    const data = { id, comment }
    return dispatch => {
        fetch( `http://localhost:8080/story/comment/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
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


// const comment = {
//     id: Date.now(),
//     comment: text
//   }
// export const sendComment = (body) => {
//     return (dispatch) => {
//         fetch( url, {
//             headers: {
//                 accept: "application/json",
//                 "Content-Type": "application/json",
//             },
//             method: "PUT",
//             dataType: "json",
//             body: JSON.stringify(body),
//             })
//             .then((res) => res.json())
//             .then((json) =>dispatch(sendCommentAction(json)))
//             .catch((err) => console.log(err));
//     }

// }

    