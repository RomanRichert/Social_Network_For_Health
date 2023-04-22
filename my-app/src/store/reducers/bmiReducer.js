import { GET_BMI_DATA } from '../actionsTypes';

const initialState = {}

export const bmiReducer = (state = initialState, action) => {
	const { type } = action

	switch (type) {
		case GET_BMI_DATA:
			return state

		default:
			return state
	}
}