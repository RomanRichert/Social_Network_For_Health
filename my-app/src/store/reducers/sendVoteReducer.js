import { SEND_VOTE } from "../actionsTypes";

const defaultState = {};

export const sendVoteReducer = (state = defaultState, action ) => {

    const { payload, type } = action;

    switch (type) {
        case SEND_VOTE:
        return payload;

        default:
            return state
    }
};