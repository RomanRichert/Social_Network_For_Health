import { GET_STORY } from "../actionsTypes";

const initialState = "";

export const storiesReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_STORY:
      console.log("all stories reducer", payload, state);
      return state;

    default:
      return state;
  }
};
