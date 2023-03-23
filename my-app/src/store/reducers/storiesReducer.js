import { GET_ALL_STORIES } from '../actionsTypes';

const initialState = ''

export const storiesReducer = (state = initialState, action) => {
	const {payload, type} = action

	switch (type) {
		case GET_ALL_STORIES:
			console.log('all stories reducer', payload, state)
			return state


		default:
			return state
	}
}