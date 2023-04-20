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
        .then(response => response.text())
        .then(text => dispatch(deleteVoteAction(text)))
        .catch(error => console.log(error));
    }
    
}