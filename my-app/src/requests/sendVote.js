import { sendVoteAction } from "../store/actions/sendVoteAction";

export const sendVote = ( id ) => {
   
    return dispatch => {
        fetch( `http://localhost:8080/story/vote/${id}`, {
            headers: {
                accept: "application/json",
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            dataType: "json",
            body: JSON.stringify(id)
            
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(response);
            }
            return response.json();
        })
        .then(json => {
            dispatch(sendVoteAction(json))
        })
        .catch(error => {
            console.log(error)
        });
    }
    
}