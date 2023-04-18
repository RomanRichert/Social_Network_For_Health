import { SEND_VOTE, DELETE_VOTE } from "../actionsTypes";

const defaultState = {};

export const voteReducer = (state = defaultState, action ) => {

    const { payload, type } = action;

    switch (type) {
        case SEND_VOTE:
            console.log(payload)
            return payload;

        case DELETE_VOTE:
            return payload;
            
        default:
            return state
    }
};