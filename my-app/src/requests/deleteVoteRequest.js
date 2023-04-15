import { deleteVoteAction } from "../store/actions/deleteVoteAction";

export const deleteVote = ( id ) => {
   
    return dispatch => {
        fetch( `http://localhost:8080/story/vote/${id}`, {
            headers: {
                accept: "application/json",
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
            dataType: "json",
            body: JSON.stringify(id)
            
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(response);
            }
            return response.json();
        })
        .then(json => dispatch(deleteVoteAction(json)))
        .catch(error => console.log(error));
    }
    
}