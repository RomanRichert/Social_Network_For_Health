import { GET_ALL_ANSWERS } from '../actionsTypes';

const initialState = ''

export const allAnswersReducer = (state = initialState, action) => {
	const {payload, type} = action

	switch (type) {
		case GET_ALL_ANSWERS:
			return payload
			
		default:
			return state
	}
}