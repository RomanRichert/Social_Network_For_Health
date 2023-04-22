import { GET_BODY_PART } from '../actionsTypes';

const initialState = ''

export const bodyPartReducer = (state = initialState, action) => {
	const {payload, type} = action

	switch (type) {
		case GET_BODY_PART:
			return payload

		default:
			return state
	}
}