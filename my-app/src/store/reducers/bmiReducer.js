import { GET_BMI_DATA } from '../actionsTypes';

const initialState = {}

export const bmiReducer = (state = initialState, action) => {
	const { type } = action

	switch (type) {
		case GET_BMI_DATA:
			//console.log('bmi reducer', payload, state)
			return state

		default:
			return state
	}
}