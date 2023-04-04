import { SEND_COMMENT } from "../actionsTypes";

const defaultState = {};

export const sendCommentReducer = (state = defaultState, action ) => {

    const { payload, type } = action;

    switch (type) {
        case SEND_COMMENT:
        return payload;

        default:
            return state
    }

}
